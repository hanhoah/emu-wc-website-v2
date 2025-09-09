import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { ScrollToTop } from '@/components/ui/scroll-to-top'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'EMU-WC - Smart Toilets & Intelligent Bathroom Solutions',
  description: 'Leading manufacturer of smart toilets and intelligent toilet seats. Discover our innovative bathroom technology from Xiamen EMU Intelligent Technology Co., Ltd.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable}`}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}