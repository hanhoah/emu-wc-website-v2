import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
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
      <Footer />
    </main>
  )
}