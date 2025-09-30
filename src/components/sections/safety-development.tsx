import { Button } from '@/components/ui/button'
import Link from 'next/link'

const SafetyDevelopment = () => {
  const safetyFeatures = [
    "Rigorous R&D Testing",
    "Flame Retardant Material", 
    "Precise Production",
    "Thorough Pre-Shipment Testing",
    "24/7 Technical Support"
  ]

  return (
    <section className="relative py-20 bg-fixed bg-cover bg-center bg-no-repeat min-h-[600px] flex items-center"
             style={{
               backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/assets/backgrounds/sections/safety-development.jpg')`
             }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="text-white">
            <h2 className="font-sans text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Safety-Based Development,<br />
              Robust Products
            </h2>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
              Our commitment to safety is at the core of our development process, 
              resulting in durable, high-quality products you can trust.
            </p>

            <div className="space-y-4 mb-10">
              {safetyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#3f86c2] rounded-full flex-shrink-0"></div>
                  <span className="text-gray-200 text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <Link href="/about">
              <Button 
                size="lg"
                className="bg-[#3f86c2] hover:bg-[#2a6b94] text-white px-8 py-4 text-lg font-semibold rounded-md"
              >
                View Our Factory
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SafetyDevelopment