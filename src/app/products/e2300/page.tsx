import { Metadata } from 'next'
import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
import { InteractiveGallery } from '@/components/products/interactive-gallery'

export const metadata: Metadata = {
  title: 'Electric Smart Cover E2300 | EMU-WC',
  description: 'Available in basic and luxury variants with U and V shape options. Features LED display and customizable wash functions for enhanced comfort.',
}

export default function E2300Page() {
  const galleryImages = [
    {
      src: '/images/products/smart-covers/e2300/e2300-1.jpg',
      alt: 'EMU-WC Electric Smart Cover E2300'
    },
    {
      src: '/images/products/smart-covers/e2300/e2300-2.jpg',
      alt: 'E2300 Side View'
    },
    {
      src: '/images/products/smart-covers/e2300/e2300-u-basic.jpg',
      alt: 'E2300 U Shape Basic'
    },
    {
      src: '/images/products/smart-covers/e2300/e2300-u-luxury.jpg',
      alt: 'E2300 U Shape Luxury'
    },
    {
      src: '/images/products/smart-covers/e2300/e2300-v-basic.jpg',
      alt: 'E2300 V Shape Basic'
    },
    {
      src: '/images/products/smart-covers/e2300/e2300-v-luxury.jpg',
      alt: 'E2300 V Shape Luxury'
    }
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <InteractiveGallery images={galleryImages} productName="E2300" />

          {/* Product Information */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Electric Smart Cover E2300</h1>
              <p className="text-xl text-gray-600 mb-6">
                Available in basic and luxury variants with U and V shape options. Features LED display 
                and customizable wash functions for enhanced comfort.
              </p>
            </div>

            {/* Product Variants */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Variants</h2>
              
              <div className="space-y-6">
                {/* Basic Function Models */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#3889be] mb-4">Basic Function Models</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-gray-100 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">E2300UBH</h4>
                      <p className="text-gray-600 text-sm mb-3">U shape, basic functions</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Wash function</li>
                        <li>• Dryer</li>
                        <li>• Heated seat</li>
                        <li>• LED light</li>
                        <li>• LED display</li>
                      </ul>
                    </div>
                    <div className="border border-gray-100 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">E2300VBH</h4>
                      <p className="text-gray-600 text-sm mb-3">V shape, basic functions</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Wash function</li>
                        <li>• Dryer</li>
                        <li>• Heated seat</li>
                        <li>• LED light</li>
                        <li>• LED display</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Luxury Function Models */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#e67e55] mb-4">Luxury Function Models</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-gray-100 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">E2300UDP</h4>
                      <p className="text-gray-600 text-sm mb-3">U shape, luxury functions</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• All basic functions plus:</li>
                        <li>• Automatic lid opening</li>
                        <li>• Foam shield</li>
                        <li>• Wand sterilization</li>
                      </ul>
                    </div>
                    <div className="border border-gray-100 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">E2300VDP</h4>
                      <p className="text-gray-600 text-sm mb-3">V shape, luxury functions</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• All basic functions plus:</li>
                        <li>• Automatic lid opening</li>
                        <li>• Foam shield</li>
                        <li>• Wand sterilization</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shape Options */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Shape Options</h3>
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

            {/* Key Features */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
              <div className="grid gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3889be] flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Customizable Wash Function</h3>
                    <p className="text-gray-600">Adjustable water temperature and pressure</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3889be] flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Antibacterial Seat</h3>
                    <p className="text-gray-600">Flame-retardant material for safety</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3889be] flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">LED Display</h3>
                    <p className="text-gray-600">Real-time control of settings</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3889be] flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Heated Seat</h3>
                    <p className="text-gray-600">Adjustable temperature for comfort</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3889be] flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Warm Air Dryer</h3>
                    <p className="text-gray-600">Multiple temperature settings</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3889be] flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Soft LED Night Light</h3>
                    <p className="text-gray-600">Gentle illumination for nighttime use</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Luxury Function Benefits */}
            <div className="bg-gradient-to-r from-[#3889be]/10 to-[#e67e55]/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Luxury Function Benefits</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#e67e55] flex items-center justify-center">
                    <span className="text-white text-sm">✨</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Automatic Lid Opening</h4>
                    <p className="text-gray-600 text-sm">Hands-free convenience</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#e67e55] flex items-center justify-center">
                    <span className="text-white text-sm">🛡️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Foam Shield</h4>
                    <p className="text-gray-600 text-sm">Enhanced hygiene protection</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#e67e55] flex items-center justify-center">
                    <span className="text-white text-sm">🧼</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Wand Sterilization</h4>
                    <p className="text-gray-600 text-sm">Advanced cleaning technology</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Blog Article */}
            <div className="bg-[#3889be]/5 border border-[#3889be]/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🔬 Deep Dive into E2300 Technology</h3>
              <p className="text-gray-600 mb-4">
                Explore the advanced features, LED display technology, and automatic mechanisms that make 
                the E2300 a pinnacle of bathroom innovation.
              </p>
              <a 
                href="/blog/exploring-e2300-smart-toilet-features"
                className="inline-flex items-center gap-2 bg-[#3889be] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2f7aa8] transition-colors"
              >
                Read Technical Overview
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Availability Notice */}
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-red-900 mb-2">Currently Unavailable</h3>
              <p className="text-red-700">
                This product is currently out of stock and unavailable. Please contact us for 
                information about availability and delivery timelines.
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