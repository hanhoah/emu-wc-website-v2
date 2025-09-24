import { Metadata } from 'next'
import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
import { InteractiveGallery } from '@/components/products/interactive-gallery'

export const metadata: Metadata = {
  title: 'E8305S Smart Toilet | EMU-WC',
  description: 'Ultimate smart toilet designed for ultimate convenience and comfort. Features hands-free opening, ambient lighting, and customizable cleaning options.',
}

export default function E8305SPage() {
  const galleryImages = [
    {
      src: '/images/products/smart-toilets/e8305s/e8305s-1.jpg',
      alt: 'EMU-WC Smart Toilet E8305S'
    },
    {
      src: '/images/products/smart-toilets/e8305s/e8305s-2.jpg',
      alt: 'E8305S Side View'
    },
    {
      src: '/images/products/smart-toilets/e8305s/e8305s-3.jpg',
      alt: 'E8305S Features Detail'
    },
    {
      src: '/images/products/smart-toilets/e8305s/e8305s-remote.jpg',
      alt: 'E8305S Remote Control'
    }
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <InteractiveGallery images={galleryImages} productName="E8305S" />

          {/* Product Information */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">E8305S</h1>
              <p className="text-xl text-gray-600 mb-6">
                Introducing the ultimate smart toilet, designed for ultimate convenience and comfort. 
                This state-of-the-art model features hands-free opening and closing, reliable non-electric 
                flushing, and customizable cleaning options.
              </p>
              <div className="text-lg font-semibold text-[#3889be]">
                Dimensions: 680mm×420mm×490mm
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
              <div className="grid gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3889be] flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Hands-Free Opening/Closing</h3>
                    <p className="text-gray-600">Radar flip or foot-operated cover and seat</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3889be] flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Reliable Non-Electric Flushing</h3>
                    <p className="text-gray-600">Dependable flushing system without electrical requirements</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3889be] flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Customizable Cleaning</h3>
                    <p className="text-gray-600">Front/rear wash modes with child mode for soft wash</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3889be] flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Comfort Features</h3>
                    <p className="text-gray-600">Heated seat and warm air dryer</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3889be] flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Smart Technology</h3>
                    <p className="text-gray-600">Self-cleaning nozzle, User-friendly LCD display</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3889be] flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Ambient Lighting</h3>
                    <p className="text-gray-600">Energy-saving LED nighttime navigation with ambient lighting strip</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Features */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• IPX4 waterproof rating for reliable performance</li>
                <li>• Waterproof remote control</li>
                <li>• Bowl moistening feature</li>
                <li>• Automatic and manual flushing options</li>
                <li>• Energy-efficient LED lighting system</li>
              </ul>
            </div>

            {/* Installation */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Installation</h3>
              <p className="text-gray-600">
                <strong>Rough-in:</strong> 305mm or 400mm (300 or 400 hole spacing)
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