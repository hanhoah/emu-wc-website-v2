import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section className="relative h-screen md:h-[70vh] flex items-center justify-center">
      {/* Background Image Overlay - Responsive */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat
                   bg-[url('/assets/backgrounds/hero-mobile.jpeg')] 
                   md:bg-[url('/assets/backgrounds/hero-desktop.jpeg')]"
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">
            Experience
            <span className="block">Smart Bathroom</span>
            <span className="block">Technology</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-2xl mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            Premium smart toilet covers and toilets with advanced features
            for comfort and hygiene.
          </p>

          <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center px-4 max-w-sm sm:max-w-none mx-auto">
            <Link href="/products">
              <Button 
                size="lg" 
                className="bg-[#3889be] hover:bg-[#2a6b94] text-white w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-md transition-colors"
              >
                Explore Products
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-md transition-colors bg-transparent"
              >
                Contact Us
              </Button>
            </Link>
            <Link href="/faq">
              <Button 
                size="lg" 
                className="bg-[#e67e55] hover:bg-[#d16840] text-white w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-md transition-colors"
              >
                Get More Info
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero