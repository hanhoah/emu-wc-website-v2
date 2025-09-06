import Navigation from '@/components/layout/navigation'
import Hero from '@/components/sections/hero'
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
      <Hero />
      <FeaturedProducts />
      <WhyChooseUs />
      <SafetyDevelopment />
      <OneStopSolutions />
      <AboutUs />
      <CallToAction />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">Xiamen EMU Intelligent Technology Co., Ltd | Founded 2016</p>
          <p className="text-sm">info@emu-wc.com | +49 1629366271 (DE) | +86 18850581035 (INT)</p>
        </div>
      </footer>
    </main>
  )
}