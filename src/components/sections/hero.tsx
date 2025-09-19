import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center" style={{height: '100vh'}}>
      {/* Background Image Overlay - Responsive */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat
                   bg-[url('/assets/backgrounds/hero-mobile.jpeg')] 
                   md:bg-[url('/assets/backgrounds/hero-desktop.jpeg')]"
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white" style={{paddingLeft: '24px', paddingRight: '24px'}}>
        <div className="max-w-4xl mx-auto" style={{margin: '0 auto', maxWidth: '56rem'}}>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 md:mb-6" style={{marginBottom: '24px', lineHeight: '1.2'}}>
            Experience
            <span className="block">Smart Bathroom</span>
            <span className="block">Technology</span>
          </h1>
          
          <p className="text-xl mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4" style={{marginBottom: '48px', margin: '0 auto', maxWidth: '42rem', paddingLeft: '16px', paddingRight: '16px'}}>
            Premium smart toilet covers and toilets with advanced features
            for comfort and hygiene.
          </p>

          <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center px-4 max-w-sm sm:max-w-none mx-auto" style={{display: 'block', textAlign: 'center', paddingLeft: '16px', paddingRight: '16px'}}>
            <div style={{marginBottom: '12px'}}>
              <Link href="/products">
                <Button 
                  size="lg" 
                  className="bg-[#3889be] hover:bg-[#2a6b94] text-white w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-md transition-colors flex items-center justify-center"
                  style={{display: 'inline-flex', minWidth: '200px', marginBottom: '8px'}}
                >
                  Explore Products
                </Button>
              </Link>
            </div>
            <div style={{marginBottom: '12px'}}>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-md transition-colors bg-transparent flex items-center justify-center"
                  style={{display: 'inline-flex', minWidth: '200px', marginBottom: '8px'}}
                >
                  Contact Us
                </Button>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero