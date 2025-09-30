import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
import PageHero from '@/components/ui/page-hero'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import FeaturedProducts from '@/components/sections/featured-products'
import WhyChooseUs from '@/components/sections/why-choose-us'
import SafetyDevelopment from '@/components/sections/safety-development'
import OneStopSolutions from '@/components/sections/one-stop-solutions'
import AboutUs from '@/components/sections/about-us'
import CallToAction from '@/components/sections/cta'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHero 
        title="Experience Smart Bathroom Technology"
        subtitle="Premium smart toilet covers and toilets with advanced features for<br />comfort and hygiene."
        backgroundImage="/assets/backgrounds/hero-desktop.jpeg"
        height="lg"
        buttons={
          <>
            <Link href="/products">
              <Button 
                size="lg" 
                className="bg-[#3f86c2] hover:bg-[#2a6b94] text-white px-8 py-4 text-lg font-semibold rounded-md transition-colors"
              >
                Explore Products
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-md transition-colors bg-transparent"
              >
                Contact Us
              </Button>
            </Link>
          </>
        }
      />
      <FeaturedProducts />
      <WhyChooseUs />
      <SafetyDevelopment />
      <OneStopSolutions />
      <AboutUs />
      <CallToAction />
      
      {/* GitHub Integration Test */}
      <div className="sr-only">GitHub Auto-Deploy Test - Build {Date.now()}</div>
      <Footer />
    </main>
  )
}