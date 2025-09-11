'use client'

import { useState } from 'react'
import Image from 'next/image'

interface GalleryImage {
  src: string
  alt: string
}

interface InteractiveGalleryProps {
  images: GalleryImage[]
  productName: string
}

export function InteractiveGallery({ images, productName }: InteractiveGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-square relative bg-white rounded-lg shadow-lg overflow-hidden">
        <Image
          src={images[selectedImage].src}
          alt={images[selectedImage].alt}
          fill
          className="object-contain p-8"
          priority
        />
      </div>
      
      {/* Thumbnail Images */}
      {images.length > 1 && (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`aspect-square relative bg-white rounded-lg shadow overflow-hidden transition-all duration-200 hover:shadow-md ${
                selectedImage === index 
                  ? 'ring-2 ring-[#3889be] shadow-md' 
                  : 'hover:ring-1 hover:ring-gray-300'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain p-2"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}