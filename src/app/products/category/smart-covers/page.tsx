import { Metadata } from 'next'
import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
import PageHero from '@/components/ui/page-hero'
import { ProductCard } from '@/components/products/product-card'

export const metadata: Metadata = {
  title: 'Smart Covers | EMU-WC',
  description: 'Transform your existing toilet with our electric smart covers. Advanced hygiene technology with customizable features for ultimate comfort.',
}

const smartCovers = [
  {
    id: 'e2100',
    name: 'Smart Cover E2100',
    category: 'Smart Cover',
    image: '/images/products/smart-covers/e2100/e2100-1.png',
    description: 'Revolutionize your hygiene routine with cutting-edge AIR+ Technology for a refreshing and powerful bidet experience.',
    slug: 'e2100',
  },
  {
    id: 'e2102',
    name: 'Smart Cover E2102',
    category: 'Smart Cover',
    image: '/images/products/smart-covers/e2102/e2102-1.jpg',
    description: 'Available in Classic and Economy variants with U and V shape options. Features advanced hygiene technology with durable UF material construction.',
    slug: 'e2102',
  },
  {
    id: 'e2200',
    name: 'Smart Cover E2200',
    category: 'Smart Cover',
    image: '/images/products/smart-covers/e2200/e2200-1.jpg',
    description: 'Premium smart cover solution with advanced features for enhanced bathroom comfort.',
    slug: 'e2200',
  },
  {
    id: 'e2300',
    name: 'Smart Cover E2300',
    category: 'Smart Cover',
    image: '/images/products/smart-covers/e2300/e2300-1.jpg',
    description: 'Available in basic and luxury variants with U and V shape options. Features LED display and customizable wash functions.',
    slug: 'e2300',
  }
]

export default function SmartCoversPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <PageHero 
        title="Smart Covers"
        subtitle="Transform your existing toilet with our electric smart covers. Advanced hygiene technology with customizable features for ultimate comfort and convenience."
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-16">

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
              <div className="w-8 h-8 bg-[#3889be]/10 rounded-full flex items-center justify-center mt-1">
                <span className="text-[#3889be] text-sm">ℹ️</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Retrofit Installation</h3>
                <p className="text-gray-600 mb-4">
                  All our smart covers are designed for easy installation on most standard toilets. 
                  Choose from U-Shape (round/oval) or V-Shape (elongated) models to match your toilet shape.
                </p>
                <a 
                  href="/assets/instructions/english.pdf" 
                  download="EMU-Smart-Cover-Installation-Instructions.pdf"
                  className="inline-flex items-center gap-2 bg-[#3889be] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#2f7aa8] transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Installation Guide (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}