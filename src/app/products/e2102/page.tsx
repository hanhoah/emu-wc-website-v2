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
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#3f86c2] mb-3">Classic E2102</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Available Shapes</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• U shape (round/oval toilets)</li>
                        <li>• V shape (elongated toilets)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Features</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• UF material construction</li>
                        <li>• Galvanized shower wand</li>
                        <li>• Fully waterproof remote control</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#e67e55] mb-3">Economy E2102S</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Available Shapes</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• U shape (round/oval toilets)</li>
                        <li>• V shape (elongated toilets)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Features</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• UF material construction</li>
                        <li>• Antibacterial ABS shower wand</li>
                        <li>• Water-resistant remote control</li>
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