import { NextRequest, NextResponse } from 'next/server'
import { searchPosts } from '@/lib/blog'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('q')
  const locale = searchParams.get('locale') || 'en'

  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 })
  }

  try {
    const results = searchPosts(query, locale)
    return NextResponse.json({ results })
  } catch (error) {
    return NextResponse.json({ error: 'Search failed' }, { status: 500 })
  }
}