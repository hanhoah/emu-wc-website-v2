import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-playfair text-6xl font-bold text-gray-900 mb-6">
            EMU-WC
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Leading manufacturer of smart toilets and intelligent bathroom solutions.
            Experience the future of bathroom technology.
          </p>
          
          <div className="flex justify-center gap-4 mb-16">
            <Button 
              size="lg" 
              className="bg-[#3889be] hover:bg-[#2a6b94] text-white px-8"
            >
              Explore Products
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#e67e55] text-[#e67e55] hover:bg-[#e67e55] hover:text-white px-8"
            >
              Contact Us
            </Button>
          </div>

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
    </main>
  )
}