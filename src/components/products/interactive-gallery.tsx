'use client'

import { useState, useRef } from 'react'
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
  const [isZoomed, setIsZoomed] = useState(false)
  const mainImageRef = useRef<HTMLDivElement>(null)

  const handleThumbnailClick = (index: number) => {
    setSelectedImage(index)
    setIsZoomed(false)
    
    // Scroll to main image with smooth animation
    if (mainImageRef.current) {
      mainImageRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      })
    }
  }

  const handleImageClick = () => {
    setIsZoomed(!isZoomed)
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsZoomed(false)
    }
  }

  if (!images || images.length === 0) {
    return null
  }

  return (
    <>
      <div className="space-y-4">
        {/* Main Image */}
        <div ref={mainImageRef} className="aspect-square relative bg-white rounded-lg shadow-lg overflow-hidden group">
          <button
            onClick={handleImageClick}
            className="w-full h-full relative transition-transform duration-200 hover:scale-105"
            title="Click to zoom"
          >
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              fill
              className="object-contain p-8"
              priority
            />
            {/* Zoom icon overlay */}
            <div className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </button>
        </div>
      
      {/* Thumbnail Images */}
      {images.length > 1 && (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`aspect-square relative bg-white rounded-lg shadow overflow-hidden transition-all duration-200 hover:shadow-md ${
                selectedImage === index 
                  ? 'ring-2 ring-[#3f86c2] shadow-md' 
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

    {/* Zoom Modal */}
    {isZoomed && (
      <div 
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        onClick={handleBackdropClick}
      >
        <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
          {/* Close button */}
          <button
            onClick={() => setIsZoomed(false)}
            className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
            title="Close zoom"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Navigation buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1)
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
                title="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0)
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
                title="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
          
          {/* Zoomed image */}
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              width={1200}
              height={1200}
              className="max-w-full max-h-full object-contain"
              priority
            />
          </div>
          
          {/* Image counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
              {selectedImage + 1} / {images.length}
            </div>
          )}
        </div>
      </div>
    )}
    </>
  )
}