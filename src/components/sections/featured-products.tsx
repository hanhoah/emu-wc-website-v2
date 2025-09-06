import Image from 'next/image'
import { Button } from '@/components/ui/button'

const FeaturedProducts = () => {
  const products = [
    {
      id: 'e2100',
      name: 'E2100',
      title: 'Smart Toilet Cover with Premium Features',
      image: '/assets/images/products/e2100.jpg',
      link: '/products/e2100'
    },
    {
      id: 'e2300',
      name: 'E2300', 
      title: 'Advanced Smart Toilet with Integrated Bidet',
      image: '/assets/images/products/e2300.jpg',
      link: '/products/e2300'
    },
    {
      id: 'e7200',
      name: 'E7200',
      title: 'Wall-Hung Bidet Toilet with Smart Features', 
      image: '/assets/images/products/e7200.jpg',
      link: '/products/e7200'
    }
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
            <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Product Image */}
              <div className="aspect-[4/3] bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Product Image
                </div>
                {/* Uncomment when product images are available */}
                {/* <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  className="object-cover"
                /> */}
              </div>

              {/* Product Details */}
              <div className="p-6">
                <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.title}
                </p>
                <Button 
                  variant="outline"
                  className="text-[#3889be] border-[#3889be] hover:bg-[#3889be] hover:text-white"
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts