import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image 
                src="/assets/logos/emu-logo.png" 
                alt="EMU" 
                width={120} 
                height={40}
                className="h-8 md:h-10 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-[#3889be] transition-colors font-medium"
            >
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-[#3889be] transition-colors font-medium flex items-center gap-1">
                Products
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/products/smart-covers" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Smart Covers
                  </Link>
                  <Link href="/products/smart-toilets" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Smart Toilets
                  </Link>
                </div>
              </div>
            </div>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-[#3889be] transition-colors font-medium"
            >
              About Us
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-700 hover:text-[#3889be] transition-colors font-medium"
            >
              Blog
            </Link>
            <Link 
              href="/faq" 
              className="text-gray-700 hover:text-[#3889be] transition-colors font-medium"
            >
              FAQ
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-[#3889be] transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation