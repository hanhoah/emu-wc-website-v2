import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Electric Bidet Seat E2100',
      slug: 'e2100',
      shortDescription: 'Essential smart bidet seat with heated seat, adjustable water settings, and energy-saving features.',
      primaryImage: '/images/products/smart-covers/e2100/e2100-1.png',
    },
    {
      id: 2,
      name: 'Smart Toilet E8201S',
      slug: 'e8201s',
      shortDescription: 'Complete smart toilet system with hands-free operation, integrated bidet, and reliable flushing.',
      primaryImage: '/images/products/smart-toilets/e8201s/e8201s-1.jpg',
    },
    {
      id: 3,
      name: 'Smart Toilet E8305S',
      slug: 'e8305s',
      shortDescription: 'Premium smart toilet with advanced technology, maximum customization, and luxury materials.',
      primaryImage: '/images/products/smart-toilets/e8305s/e8305s-1.jpg',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Products
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
              {/* Product Image */}
              <div className="aspect-[4/3] bg-gray-200 relative">
                <Image 
                  src={product.primaryImage} 
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Product Details */}
              <div className="p-6">
                <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.shortDescription}
                </p>
                <Link href={`/products/${product.slug}`}>
                  <Button 
                    variant="outline"
                    className="text-[#3889be] border-[#3889be] hover:bg-[#3889be] hover:text-white w-full"
                  >
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts