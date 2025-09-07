import puppeteer from 'puppeteer'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const url = searchParams.get('url')
  const format = searchParams.get('format') || 'mobile' // mobile, desktop, whatsapp
  
  if (!url) {
    return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 })
  }

  try {
    const browser = await puppeteer.launch({ 
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    })
    const page = await browser.newPage()

    // Different viewport sizes for different formats
    const viewports = {
      mobile: { width: 375, height: 812 }, // iPhone X
      desktop: { width: 1200, height: 800 },
      whatsapp: { width: 400, height: 600 }, // Optimized for WhatsApp preview
    }

    await page.setViewport(viewports[format as keyof typeof viewports] || viewports.mobile)
    
    // Navigate to the page
    await page.goto(url, { 
      waitUntil: 'networkidle2',
      timeout: 30000
    })

    // Wait a bit for any animations/loading
    await page.waitForTimeout(2000)

    // Take screenshot
    const screenshot = await page.screenshot({
      type: 'png',
      fullPage: format === 'whatsapp' ? false : true, // For WhatsApp, just viewport
      quality: 90,
    })

    await browser.close()

    return new NextResponse(screenshot, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Content-Disposition': `attachment; filename="blog-preview-${format}.png"`,
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    })
  } catch (error) {
    console.error('Screenshot error:', error)
    return NextResponse.json({ error: 'Failed to take screenshot' }, { status: 500 })
  }
}