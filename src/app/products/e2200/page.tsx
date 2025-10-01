import { Metadata } from 'next'
import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
import { InteractiveGallery } from '@/components/products/interactive-gallery'

export const metadata: Metadata = {
  title: 'Smart Cover E2200 | EMU-WC',
  description: 'Premium smart cover solution with advanced features for enhanced bathroom comfort. Part of EMU WC\'s Premium Bathroom & Toilet Solutions line.',
}

export default function E2200Page() {
  const galleryImages = [
    {
      src: '/images/products/smart-covers/e2200/1.jpg',
      alt: 'EMU-WC Smart Cover E2200'
    },
    {
      src: '/images/products/smart-covers/e2200/2.jpg',
      alt: 'E2200 Side View'
    },
    {
      src: '/images/products/smart-covers/e2200/3.jpg',
      alt: 'E2200 Features'
    },
    {
      src: '/images/products/smart-covers/e2200/4.jpg',
      alt: 'E2200 Detail View'
    },
    {
      src: '/images/products/smart-covers/e2200/5.jpg',
      alt: 'E2200 Controls'
    },
    {
      src: '/images/products/smart-covers/e2200/6.jpg',
      alt: 'E2200 Installation'
    },
    {
      src: '/images/products/smart-covers/e2200/7.jpg',
      alt: 'E2200 Components'
    },
    {
      src: '/images/products/smart-covers/e2200/8.jpg',
      alt: 'E2200 Remote Control'
    },
    {
      src: '/images/products/smart-covers/e2200/9.jpg',
      alt: 'E2200 Technical View'
    },
    {
      src: '/images/products/smart-covers/e2200/10.jpg',
      alt: 'E2200 Functions Overview'
    },
    {
      src: '/images/products/smart-covers/e2200/11.jpg',
      alt: 'E2200 Features Detail'
    }
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <InteractiveGallery images={galleryImages} productName="E2200" />

          {/* Product Information */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Smart Cover E2200</h1>
              <p className="text-xl text-gray-600 mb-6">
                Premium smart cover solution with advanced features for enhanced bathroom comfort. 
                Part of EMU WC's Premium Bathroom & Toilet Solutions line.
              </p>
            </div>

            {/* Product Highlights */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Highlights</h2>
              <div className="grid gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3f86c2] flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Premium Design</h3>
                    <p className="text-gray-600">Sophisticated engineering with elegant side panel design</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3f86c2] flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Advanced Technology</h3>
                    <p className="text-gray-600">Smart features for enhanced hygiene and comfort</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3f86c2] flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Quality Construction</h3>
                    <p className="text-gray-600">Built with premium materials for lasting durability</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3f86c2] flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">User-Friendly Operation</h3>
                    <p className="text-gray-600">Intuitive controls for easy operation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Expected Features */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expected Features</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-4">
                  As part of the EMU-WC smart cover family, the E2200 is expected to include:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Advanced wash functions with adjustable settings</li>
                  <li>• Heated seat with temperature control</li>
                  <li>• Warm air drying system</li>
                  <li>• Self-cleaning nozzle technology</li>
                  <li>• Energy-saving features</li>
                  <li>• Smart night light</li>
                  <li>• Remote control operation</li>
                  <li>• Safety and hygiene enhancements</li>
                </ul>
              </div>
            </div>

            {/* Related Products */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Smart Covers</h3>
              <div className="grid gap-3">
                <a href="/products/e2100" className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#3f86c2] rounded-lg flex items-center justify-center text-white font-bold">
                      E2100
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Smart Cover E2100</h4>
                      <p className="text-sm text-gray-600">AIR+ Technology with customizable panels</p>
                    </div>
                  </div>
                </a>
                
                <a href="/products/e2102" className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#3f86c2] rounded-lg flex items-center justify-center text-white font-bold">
                      E2102
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Smart Cover E2102</h4>
                      <p className="text-sm text-gray-600">Classic and Economy variants available</p>
                    </div>
                  </div>
                </a>

                <a href="/products/e2300" className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#3f86c2] rounded-lg flex items-center justify-center text-white font-bold">
                      E2300
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Smart Cover E2300</h4>
                      <p className="text-sm text-gray-600">Basic and luxury functions with LED display</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Availability Notice */}
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-red-900 mb-2">Currently Unavailable</h3>
              <p className="text-red-700">
                This product is currently out of stock and unavailable. Please check our other 
                smart cover options or contact us for information about availability.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </main>
  )
}