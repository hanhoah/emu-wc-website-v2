// UNUSED COMPONENT - DO NOT USE!
// The homepage uses PageHero from @/components/ui/page-hero.tsx instead
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const HeroUnused = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{padding: '1rem 0'}}>
      {/* Background Image Overlay - Responsive */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat
                   bg-[url('/assets/backgrounds/hero-mobile.jpeg')] 
                   md:bg-[url('/assets/backgrounds/hero-desktop.jpeg')]"
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 md:px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-sans font-bold leading-tight" style={{fontSize: 'clamp(1rem, 3.5vw, 3rem)', marginBottom: 'clamp(0.5rem, 1.5vw, 1.5rem)'}}>
            Experience
            <span className="block">Smart Bathroom</span>
            <span className="block">Technology</span>
          </h1>
          
          <p className="max-w-2xl mx-auto leading-relaxed px-2" style={{fontSize: 'clamp(0.7rem, 2.5vw, 1.25rem)', marginBottom: 'clamp(0.8rem, 3vw, 3rem)'}}>
            Premium smart toilet covers and toilets with advanced features
            for comfort and hygiene.
          </p>

          <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center max-w-xs sm:max-w-sm mx-auto">
            <Link href="/products" className="w-full">
              <Button 
                size="lg" 
                className="bg-[#3889be] hover:bg-[#2a6b94] text-white w-full px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-semibold rounded-md transition-colors"
              >
                Explore Products
              </Button>
            </Link>
            <Link href="/contact" className="w-full">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 w-full px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-semibold rounded-md transition-colors bg-transparent"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default HeroUnused
