import Navigation from '@/components/layout/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#3889be] to-[#2a6b94] text-white pt-24 pb-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Transforming Bathrooms Through Smart Technology
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Pioneering the future of bathroom comfort and hygiene since 2016
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
              {/* Left Column - Story Content */}
              <div className="space-y-6">
                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                  Our Story
                </h2>

                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    Our company was founded by a visionary team of five engineers and a forward-thinking investor who began his journey in the toilet cover industry in 1990. After decades of working with traditional models, he recognized the growing demand for smart toilets with advanced bidet functions in modern bathrooms.
                  </p>

                  <p>
                    In 2013, we transformed this vision into reality by establishing our operations in Xiamen, a city renowned for its high-quality sanitary products. Our location provides us with access to exceptional manufacturing capabilities and a rich ecosystem of bathroom technology expertise.
                  </p>

                  <p>
                    Our skilled engineering team is dedicated to revolutionizing bathroom experiences through innovative designs that seamlessly blend advanced technology with intuitive, user-friendly features. We focus on creating products that enhance daily comfort while maintaining the highest standards of hygiene and reliability.
                  </p>
                </div>
              </div>

              {/* Right Column - Company Video */}
              <div className="relative">
                <div className="bg-gray-100 rounded-xl p-8 shadow-lg">
                  <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-6 text-center">
                    Company Introduction
                  </h3>
                  
                  {/* Video Container */}
                  <div className="aspect-video bg-gray-200 rounded-lg relative overflow-hidden">
                    <video 
                      controls 
                      className="w-full h-full object-cover rounded-lg"
                      poster="/assets/images/video-thumbnail.jpg"
                    >
                      <source src="/assets/videos/company-intro.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  <p className="text-gray-500 text-sm text-center mt-4">
                    Discover our manufacturing excellence and innovation journey
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Company Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Innovation Excellence Since 2016
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Leading the smart toilet revolution with cutting-edge technology and uncompromising quality
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6">
                <div className="text-[#3889be] text-5xl font-bold mb-4">2016</div>
                <h3 className="font-semibold text-gray-900 mb-2">Founded</h3>
                <p className="text-gray-600 text-sm">Beginning of our journey in smart bathroom technology</p>
              </div>

              <div className="text-center p-6">
                <div className="text-[#3889be] text-5xl font-bold mb-4">20+</div>
                <h3 className="font-semibold text-gray-900 mb-2">Years Experience</h3>
                <p className="text-gray-600 text-sm">Combined expertise in bathroom technology innovation</p>
              </div>

              <div className="text-center p-6">
                <div className="text-[#3889be] text-5xl font-bold mb-4">100+</div>
                <h3 className="font-semibold text-gray-900 mb-2">Products</h3>
                <p className="text-gray-600 text-sm">Smart toilet covers and integrated solutions</p>
              </div>

              <div className="text-center p-6">
                <div className="text-[#3889be] text-5xl font-bold mb-4">50+</div>
                <h3 className="font-semibold text-gray-900 mb-2">Countries</h3>
                <p className="text-gray-600 text-sm">Global reach and international partnerships</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Commitment
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Quality Excellence */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#3889be]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900 mb-4">Quality Excellence</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Each smart toilet cover and integrated toilet we create undergoes rigorous testing to ensure superior performance, durability, and user satisfaction.
                    </p>
                  </div>
                </div>
              </div>

              {/* Continuous Innovation */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#e67e55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900 mb-4">Continuous Innovation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We continuously invest in research and development to stay at the forefront of bathroom technology, introducing features that anticipate and exceed customer expectations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Environmental Responsibility */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900 mb-4">Environmental Responsibility</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our manufacturing processes prioritize environmental responsibility, incorporating sustainable practices and energy-efficient technologies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Future Vision */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900 mb-4">Future Vision</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We believe smart toilets represent the future of bathroom design - not merely luxury items, but essential components of modern, healthy living spaces.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Smart Bathroom Revolution CTA */}
      <section className="py-20 bg-gradient-to-r from-[#3889be] to-[#2a6b94] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-8">
              Join the Smart Bathroom Revolution
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Experience the perfect blend of comfort, technology, and hygiene with EMU WC's innovative bathroom solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/products">
                <Button 
                  size="lg"
                  className="bg-white text-[#3889be] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-md"
                >
                  Explore Our Products →
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#3889be] px-8 py-4 text-lg font-semibold rounded-md bg-transparent"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

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