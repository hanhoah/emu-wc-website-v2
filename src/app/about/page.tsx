import Navigation from '@/components/layout/navigation'

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