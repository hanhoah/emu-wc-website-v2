import { Metadata } from 'next'
import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
import { ProductCard } from '@/components/products/product-card'

export const metadata: Metadata = {
  title: 'Smart Toilets | EMU-WC',
  description: 'Discover our premium smart toilets with hands-free operation, integrated bidet functionality, and advanced hygiene technology.',
}

const smartToilets = [
  {
    id: 'e8201s',
    name: 'E8201S',
    category: 'Smart Toilet',
    image: '/images/products/smart-toilets/e8201s/e8201s-1.jpg',
    description: 'Introducing the ultimate smart toilet engineered for supreme convenience and comfort. This state-of-the-art model boats hands-free opening and closing, reliable non-electric flushing, and customizable cleaning options',
    dimensions: '680mm×420mm×500mm',
    slug: 'e8201s',
    inStock: true
  },
  {
    id: 'e8305s',
    name: 'E8305S',
    category: 'Smart Toilet',
    image: '/images/products/smart-toilets/e8305s/e8305s-1.jpg',
    description: 'Introducing the ultimate smart toilet, designed for ultimate convenience and comfort. This state-of-the-art model features hands-free opening and closing, reliable non-electric flushing, and customizable cleaning options.',
    dimensions: '680mm×420mm×490mm',
    slug: 'e8305s',
    inStock: true
  }
]

export default function SmartToiletsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Smart Toilets
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the ultimate in bathroom luxury with our complete smart toilet systems. 
              Featuring hands-free operation, integrated bidet functionality, and advanced hygiene technology.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {smartToilets.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Features Section */}
          <div className="mt-20 bg-white rounded-lg shadow-lg p-8">
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose EMU Smart Toilets?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#3889be] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🚿</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Hands-Free Operation</h3>
                <p className="text-gray-600">Radar sensor technology for automatic lid opening and closing</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#3889be] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💧</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Cleaning</h3>
                <p className="text-gray-600">Customizable bidet functions with multiple wash modes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#3889be] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliable Technology</h3>
                <p className="text-gray-600">Non-electric flushing system with IPX4 waterproof rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}