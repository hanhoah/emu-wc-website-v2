'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image 
                src="/assets/logos/emu-logo.png" 
                alt="EMU" 
                width={160} 
                height={50}
                className="h-10 md:h-12 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-[#3889be] transition-colors font-medium text-lg"
            >
              Home
            </Link>
            <div className="relative group">
              <Link 
                href="/products" 
                className="text-gray-700 hover:text-[#3889be] transition-colors font-medium text-lg flex items-center gap-1"
              >
                Products
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/products/category/smart-covers" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-base">
                    Smart Covers
                  </Link>
                  <Link href="/products/category/smart-toilets" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-base">
                    Smart Toilets
                  </Link>
                </div>
              </div>
            </div>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-[#3889be] transition-colors font-medium text-lg"
            >
              About Us
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-700 hover:text-[#3889be] transition-colors font-medium text-lg"
            >
              Blog
            </Link>
            <Link 
              href="/faq" 
              className="text-gray-700 hover:text-[#3889be] transition-colors font-medium text-lg"
            >
              FAQ
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-[#3889be] transition-colors font-medium text-lg"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <Link 
                href="/" 
                className="block py-2 text-gray-700 hover:text-[#3889be] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/products" 
                className="block py-2 text-gray-700 hover:text-[#3889be] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                href="/about" 
                className="block py-2 text-gray-700 hover:text-[#3889be] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/blog" 
                className="block py-2 text-gray-700 hover:text-[#3889be] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/faq" 
                className="block py-2 text-gray-700 hover:text-[#3889be] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                href="/contact" 
                className="block py-2 text-gray-700 hover:text-[#3889be] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation