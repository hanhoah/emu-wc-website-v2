import { Metadata } from 'next'
import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
import { Badge } from '@/components/ui/badge'
import { InteractiveGallery } from '@/components/products/interactive-gallery'

export const metadata: Metadata = {
  title: 'Electric Bidet Seat E2100 | EMU-WC',
  description: 'Revolutionize your hygiene routine with cutting-edge AIR+ Technology for a refreshing and powerful bidet experience. Features customizable decorative panels.',
}

export default function E2100Page() {
  const galleryImages = [
    {
      src: '/images/products/smart-covers/e2100/e2100-1.jpg',
      alt: 'EMU-WC Electric Bidet Seat E2100'
    },
    {
      src: '/images/products/smart-covers/e2100/e2100-2.jpg',
      alt: 'E2100 Side View'
    },
    {
      src: '/images/products/smart-covers/e2100/e2100-remote.jpg',
      alt: 'E2100 Remote Control'
    },
    {
      src: '/images/products/smart-covers/e2100/e2100-panel-white.jpg',
      alt: 'E2100 White Panel'
    },
    {
      src: '/images/products/smart-covers/e2100/e2100-panel-gold.jpg',
      alt: 'E2100 Gold Panel'
    },
    {
      src: '/images/products/smart-covers/e2100/e2100-panel-silver.jpg',
      alt: 'E2100 Silver Panel'
    }
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <InteractiveGallery images={galleryImages} productName="E2100" />
            
            {/* Panel Options Info */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Customizable Decorative Panels</h4>
              <p className="text-sm text-gray-600 mb-3">Available in three elegant finishes:</p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-white rounded text-xs font-medium">White</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-medium">Gold</span>
                <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded text-xs font-medium">Silver</span>
              </div>
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary">Smart Cover</Badge>
                <Badge variant="destructive">Out of Stock</Badge>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Electric Bidet Seat E2100</h1>
              <p className="text-xl text-gray-600 mb-6">
                Revolutionize your hygiene routine with cutting-edge AIR+ Technology for a refreshing 
                and powerful bidet experience.
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
              <div className="grid gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3889be] flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">AIR+ Technology</h3>
                    <p className="text-gray-600">Enhanced bidet performance for a refreshing experience</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3889be] flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Adjustable Settings</h3>
                    <p className="text-gray-600">Water temperature, pressure, and spray position</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3889be] flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Comfort Features</h3>
                    <p className="text-gray-600">Seat heating & adjustable dryer</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3889be] flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Safety & Convenience</h3>
                    <p className="text-gray-600">Child safety mode & smart nightlight</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3889be] flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Energy Efficiency</h3>
                    <p className="text-gray-600">Energy-saving function</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3889be] flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Customizable Design</h3>
                    <p className="text-gray-600">Interchangeable decorative panels (White, Gold, Silver)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Features */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Detailed Features</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Waterproof Design</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Tested to function under water shower</li>
                    <li>• Waterproof remote control</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Safety Features</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Antibacterial material</li>
                    <li>• Fire-resistant material (V0 level)</li>
                    <li>• Heated seat with adjustable temperature</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cleaning Technology</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• AIR+ Dual Nozzle System</li>
                    <li>• Rear and front wash modes</li>
                    <li>• Oscillating cleaning function</li>
                    <li>• 5-level adjustable shower wand position</li>
                    <li>• Self-cleaning and detachable nozzle</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Additional Functions</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Warm air drying</li>
                    <li>• Smart night light</li>
                    <li>• Child wash mode</li>
                    <li>• Energy-saving mode</li>
                    <li>• Remote control and side control panel</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Related Blog Article */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📖 Learn More About the E2100</h3>
              <p className="text-gray-600 mb-4">
                Discover the design philosophy, style options, and innovative features that make the E2100 
                a perfect blend of sophistication and functionality.
              </p>
              <a 
                href="/blog/exploring-smart-cover-e2100-stylish-accessory"
                className="inline-flex items-center gap-2 bg-[#3889be] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2f7aa8] transition-colors"
              >
                Read Full Article
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </main>
  )
}