import { Metadata } from 'next'
import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
import { InteractiveGallery } from '@/components/products/interactive-gallery'

export const metadata: Metadata = {
  title: 'Smart Cover E2102 | EMU-WC',
  description: 'Available in Classic and Economy variants with U and V shape options. Features advanced hygiene technology with durable UF material construction.',
}

export default function E2102Page() {
  const galleryImages = [
    {
      src: '/images/products/smart-covers/e2102/e2102-1.jpg',
      alt: 'EMU-WC Smart Cover E2102'
    },
    {
      src: '/images/products/smart-covers/e2102/e2102-2.jpg',
      alt: 'E2102 Side View'
    },
    {
      src: '/images/products/smart-covers/e2102/e2102-u-shape.jpg',
      alt: 'E2102 U Shape'
    },
    {
      src: '/images/products/smart-covers/e2102/e2102-v-shape.jpg',
      alt: 'E2102 V Shape'
    },
    {
      src: '/images/products/smart-covers/e2102/e2102-remote.jpg',
      alt: 'E2102 Remote Control'
    }
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <InteractiveGallery images={galleryImages} productName="E2102" />

          {/* Product Information */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Smart Cover E2102</h1>
              <p className="text-xl text-gray-600 mb-6">
                Available in Classic and Economy variants with U and V shape options. Features advanced 
                hygiene technology with durable UF material construction.
              </p>
            </div>

            {/* Product Variants */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Variants</h2>
              
              <div className="space-y-6">
                {/* Available Colors */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#3f86c2] mb-4">Available Colors</h3>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-200 rounded-full border-2 border-gray-300 mx-auto mb-2"></div>
                      <span className="text-sm text-gray-600">Silver</span>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-yellow-100 rounded-full border-2 border-yellow-300 mx-auto mb-2"></div>
                      <span className="text-sm text-gray-600">Gold</span>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-full border-2 border-gray-300 mx-auto mb-2"></div>
                      <span className="text-sm text-gray-600">White</span>
                    </div>
                  </div>
                </div>

                {/* Shape Options */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#3f86c2] mb-4">Shape Options</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">U-Shape</h4>
                      <p className="text-gray-600 text-sm">Designed for round and oval toilets</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">V-Shape</h4>
                      <p className="text-gray-600 text-sm">Designed for elongated toilets</p>
                    </div>
                  </div>
                </div>

                {/* Connection Types */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#3f86c2] mb-4">Connection Types</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Side Connection</h4>
                      <p className="text-gray-600 text-sm mb-2">Water connection on left side, power connection on right side</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Bottom Connection</h4>
                      <p className="text-gray-600 text-sm mb-2">Water connection on left bottom, power connection on right bottom</p>
                      <span className="text-xs text-[#3f86c2] bg-[#3f86c2]/5 px-2 py-1 rounded">Compatible ceramic design for hidden installation</span>
                    </div>
                  </div>
                </div>

                {/* Classic vs Economy */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#3f86c2] mb-4">Available Editions</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-gray-100 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Classic Edition</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Galvanized shower wand</li>
                        <li>• IPX4 waterproof remote control</li>
                        <li>• Premium materials and finish</li>
                      </ul>
                    </div>
                    <div className="border border-gray-100 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Economy Edition</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• ABS shower wand</li>
                        <li>• Water-resistant remote control</li>
                        <li>• Cost-effective solution</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
              <div className="grid gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3f86c2] flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Durable UF Material</h3>
                    <p className="text-gray-600">High-quality UF construction for long-lasting performance</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3f86c2] flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Safety Materials</h3>
                    <p className="text-gray-600">Antibacterial and fire-resistant construction</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3f86c2] flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Heated Comfort</h3>
                    <p className="text-gray-600">Heated seat with adjustable temperature</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3f86c2] flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">AIR+ Dual Nozzle System</h3>
                    <p className="text-gray-600">Advanced cleaning technology with rear and front wash modes</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3f86c2] flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Water-Resistant Design</h3>
                    <p className="text-gray-600">Built to withstand bathroom environments</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Features */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Oscillating cleaning function</li>
                <li>• 5-level adjustable shower wand position</li>
                <li>• Adjustable water pressure and temperature</li>
                <li>• Self-cleaning nozzle</li>
                <li>• Detachable nozzle for easy maintenance</li>
                <li>• Warm air drying function</li>
                <li>• Smart night light</li>
                <li>• Child wash mode</li>
                <li>• Energy-saving mode</li>
                <li>• Remote and side control options</li>
              </ul>
            </div>

            {/* Unique Selling Points */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Why Choose E2102?</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Multiple customization options with U and V shapes</li>
                <li>• Choice between Classic and Economy variants</li>
                <li>• Advanced hygiene features</li>
                <li>• Comfort-focused design</li>
                <li>• Durable UF material construction</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </main>
  )
}