import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

interface Product {
  id: string
  name: string
  category: string
  image: string
  description: string
  dimensions?: string
  slug: string
  inStock: boolean
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`}>
      <div className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        {/* Product Image */}
        <div className="aspect-square relative bg-gray-50 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
          />
          {!product.inStock && (
            <div className="absolute top-4 right-4">
              <Badge variant="destructive">Out of Stock</Badge>
            </div>
          )}
        </div>
        
        {/* Product Info */}
        <div className="p-6">
          <div className="mb-3">
            <Badge variant="secondary" className="mb-2">
              {product.category}
            </Badge>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#3889be] transition-colors">
              {product.name}
            </h3>
          </div>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {product.description}
          </p>
          
          {product.dimensions && (
            <p className="text-sm font-medium text-[#3889be] mb-4">
              Size: {product.dimensions}
            </p>
          )}
          
          <div className="flex items-center justify-between">
            <span className="text-[#3889be] font-semibold group-hover:underline">
              View Details →
            </span>
            {product.inStock ? (
              <Badge variant="outline" className="border-green-200 text-green-700">
                Available
              </Badge>
            ) : (
              <Badge variant="outline" className="border-red-200 text-red-700">
                Unavailable
              </Badge>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}