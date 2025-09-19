import { Metadata } from 'next'
import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
import { ProductCard } from '@/components/products/product-card'

export const metadata: Metadata = {
  title: 'Smart Toilets & Bidet Seats | EMU-WC',
  description: 'Discover our premium smart toilets and electric bidet seats. Advanced hygiene technology with customizable features for ultimate comfort.',
}

const products = [
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
  },
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

export default function ProductsPage() {
  const smartToilets = products.filter(p => p.category === 'Smart Toilet')
  const smartCovers = products.filter(p => p.category === 'Smart Cover')

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Smart Toilets & Bidet Seats
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our premium collection of smart toilets and electric bidet seats. 
            Advanced hygiene technology with customizable features for ultimate comfort and convenience.
          </p>
        </div>

        {/* Smart Toilets Section */}
        <section className="mb-16">
          <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">
            Smart Toilets
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {smartToilets.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Smart Covers Section */}
        <section>
          <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">
            Smart Covers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {smartCovers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
      </div>
      <Footer />
    </main>
  )
}