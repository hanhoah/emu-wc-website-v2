import Navigation from '@/components/layout/navigation'
import Hero from '@/components/sections/hero'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 rounded-lg bg-white shadow-sm">
                <h3 className="font-playfair text-2xl font-semibold mb-3 text-[#3889be]">
                  Smart Cover
                </h3>
                <p className="text-gray-600">
                  Models E2100, E2102, E2200, E2300 with advanced features
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-white shadow-sm">
                <h3 className="font-playfair text-2xl font-semibold mb-3 text-[#3889be]">
                  Smart Toilet
                </h3>
                <p className="text-gray-600">
                  Premium models E8201S, E8305S for complete bathroom solutions
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-white shadow-sm">
                <h3 className="font-playfair text-2xl font-semibold mb-3 text-[#e67e55]">
                  Coming Soon
                </h3>
                <p className="text-gray-600">
                  New E2600 model with cutting-edge technology
                </p>
              </div>
            </div>

            <footer className="mt-16 pt-8 border-t border-gray-200 text-sm text-gray-500">
              <p>Xiamen EMU Intelligent Technology Co., Ltd | Founded 2016</p>
              <p>info@emu-wc.com | +49 1629366271 (DE) | +86 18850581035 (INT)</p>
            </footer>
          </div>
        </div>
      </section>
    </main>
  )
}