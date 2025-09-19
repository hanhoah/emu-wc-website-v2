import { Metadata } from 'next'
import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
import { ProductCard } from '@/components/products/product-card'

export const metadata: Metadata = {
  title: 'Smart Covers | EMU-WC',
  description: 'Transform your existing toilet with our electric bidet seats. Advanced hygiene technology with customizable features for ultimate comfort.',
}

const smartCovers = [
  {
    id: 'e2100',
    name: 'Electric Bidet Seat E2100',
    category: 'Smart Cover',
    image: '/images/products/smart-covers/e2100/e2100-1.png',
    description: 'Revolutionize your hygiene routine with cutting-edge AIR+ Technology for a refreshing and powerful bidet experience.',
    slug: 'e2100',
    inStock: false
  },
  {
    id: 'e2102',
    name: 'Electric Bidet Seat E2102',
    category: 'Smart Cover',
    image: '/images/products/smart-covers/e2102/e2102-1.jpg',
    description: 'Available in Classic and Economy variants with U and V shape options. Features advanced hygiene technology with durable UF material construction.',
    slug: 'e2102',
    inStock: false
  },
  {
    id: 'e2200',
    name: 'Electric Bidet Seat E2200',
    category: 'Smart Cover',
    image: '/images/products/smart-covers/e2200/e2200-1.jpg',
    description: 'Premium smart cover solution with advanced features for enhanced bathroom comfort.',
    slug: 'e2200',
    inStock: false
  },
  {
    id: 'e2300',
    name: 'Electric Bidet Seat E2300',
    category: 'Smart Cover',
    image: '/images/products/smart-covers/e2300/e2300-1.jpg',
    description: 'Available in basic and luxury variants with U and V shape options. Features LED display and customizable wash functions.',
    slug: 'e2300',
    inStock: false
  }
]

export default function SmartCoversPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Smart Covers
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your existing toilet with our electric bidet seats. 
              Advanced hygiene technology with customizable features for ultimate comfort and convenience.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {smartCovers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Features Section */}
          <div className="mt-20 bg-white rounded-lg shadow-lg p-8">
            <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-8 text-center">Smart Cover Features</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#e67e55] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🌊</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AIR+ Technology</h3>
                <p className="text-gray-600 text-sm">Enhanced bidet performance for refreshing experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#e67e55] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🔥</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Heated Comfort</h3>
                <p className="text-gray-600 text-sm">Adjustable heated seat and warm air dryer</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#e67e55] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎨</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Customizable</h3>
                <p className="text-gray-600 text-sm">Multiple variants and decorative panel options</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#e67e55] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🛡️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Safe & Durable</h3>
                <p className="text-gray-600 text-sm">Antibacterial materials with fire-resistant construction</p>
              </div>
            </div>
          </div>

          {/* Installation Note */}
          <div className="mt-12 bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                <span className="text-blue-600 text-sm">ℹ️</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Retrofit Installation</h3>
                <p className="text-gray-600">
                  All our smart covers are designed for easy installation on most standard toilets. 
                  Choose from U-form (round/oval) or V-form (elongated) models to match your toilet shape.
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