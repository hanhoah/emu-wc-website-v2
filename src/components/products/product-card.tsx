import Image from 'next/image'
import Link from 'next/link'

interface Product {
  id: string
  name: string
  category: string
  image: string
  description: string
  dimensions?: string
  slug: string
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`}>
      <div className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
        {/* Product Image */}
        <div className="aspect-square relative bg-gray-50 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Product Info */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="mb-3">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#3f86c2] transition-colors">
              {product.name}
            </h3>
          </div>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {product.description}
          </p>
          
          {product.dimensions && (
            <p className="text-sm font-medium text-[#3f86c2] mb-4">
              Size: {product.dimensions}
            </p>
          )}
          
          <div className="flex items-center justify-between mt-auto">
            <span className="text-[#3f86c2] font-semibold group-hover:underline">
              View Details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}