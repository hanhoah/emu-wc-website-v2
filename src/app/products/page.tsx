import { Metadata } from 'next'
import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
import PageHero from '@/components/ui/page-hero'
import { ProductCard } from '@/components/products/product-card'

export const metadata: Metadata = {
  title: 'Smart Covers and Smart Toilets | EMU-WC',
  description: 'Discover our premium smart toilets and electric smart covers. Advanced hygiene technology with customizable features for ultimate comfort.',
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
  },
  {
    id: 'e8305s',
    name: 'E8305S',
    category: 'Smart Toilet',
    image: '/images/products/smart-toilets/e8305s/e8305s-1.jpg',
    description: 'Introducing the ultimate smart toilet, designed for ultimate convenience and comfort. This state-of-the-art model features hands-free opening and closing, reliable non-electric flushing, and customizable cleaning options.',
    dimensions: '680mm×420mm×490mm',
    slug: 'e8305s',
  },
  {
    id: 'e2100',
    name: 'Electric Smart Cover E2100',
    category: 'Smart Cover',
    image: '/images/products/smart-covers/e2100/e2100-1.png',
    description: 'Revolutionize your hygiene routine with cutting-edge AIR+ Technology for a refreshing and powerful bidet experience.',
    slug: 'e2100',
  },
  {
    id: 'e2102',
    name: 'Electric Smart Cover E2102',
    category: 'Smart Cover',
    image: '/images/products/smart-covers/e2102/e2102-1.jpg',
    description: 'Available in Classic and Economy variants with U and V shape options. Features advanced hygiene technology with durable UF material construction.',
    slug: 'e2102',
  },
  {
    id: 'e2200',
    name: 'Electric Smart Cover E2200',
    category: 'Smart Cover',
    image: '/images/products/smart-covers/e2200/e2200-1.jpg',
    description: 'Premium smart cover solution with advanced features for enhanced bathroom comfort.',
    slug: 'e2200',
  },
  {
    id: 'e2300',
    name: 'Electric Smart Cover E2300',
    category: 'Smart Cover',
    image: '/images/products/smart-covers/e2300/e2300-1.jpg',
    description: 'Available in basic and luxury variants with U and V shape options. Features LED display and customizable wash functions.',
    slug: 'e2300',
  }
]

export default function ProductsPage() {
  const smartToilets = products.filter(p => p.category === 'Smart Toilet')
  const smartCovers = products.filter(p => p.category === 'Smart Cover')

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <PageHero 
        title="Smart Covers and Smart Toilets"
        subtitle="Discover our premium collection of electric smart covers and smart toilets. Advanced hygiene technology with customizable features for ultimate comfort and convenience."
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">

        {/* Smart Covers Section - Prioritized */}
        <section className="mb-16">
          <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">
            Smart Covers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {smartCovers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Smart Toilets Section */}
        <section>
          <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">
            Smart Toilets
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {smartToilets.map((product) => (
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