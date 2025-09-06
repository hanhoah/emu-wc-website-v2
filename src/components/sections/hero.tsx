import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center">
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
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Experience Smart Bathroom
            <span className="block">Technology</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Premium smart toilet covers and toilets with advanced features
            for comfort and hygiene.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-[#3889be] hover:bg-[#2a6b94] text-white px-8 py-4 text-lg font-semibold rounded-md transition-colors"
            >
              Explore Products
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-md transition-colors bg-transparent"
            >
              Contact Us
            </Button>
            <Button 
              size="lg" 
              className="bg-[#e67e55] hover:bg-[#d16840] text-white px-8 py-4 text-lg font-semibold rounded-md transition-colors"
            >
              Get More Info
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
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