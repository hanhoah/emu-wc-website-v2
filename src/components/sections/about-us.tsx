import { Button } from '@/components/ui/button'
import Link from 'next/link'

const AboutUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div>
                <p className="text-[#3f86c2] font-semibold text-sm tracking-wide uppercase mb-4">
                  LEADING THE SMART TOILET REVOLUTION SINCE 2016
                </p>
                <h2 className="font-sans text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Innovation in Bathroom Technology
                </h2>
              </div>

              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                We are Xiamen EMU Intelligent Technology Co., Ltd - a pioneering company 
                dedicated to transforming bathroom experiences through cutting-edge smart toilet 
                technology. With over 20 years of industry expertise, we create premium smart 
                toilet covers and integrated toilets that combine comfort, hygiene, and innovation.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-8 py-8">
                <div>
                  <h3 className="text-[#3f86c2] text-lg sm:text-xl md:text-4xl font-bold mb-2">2016</h3>
                  <p className="text-gray-600 text-sm uppercase tracking-wide">FOUNDED</p>
                </div>
                <div>
                  <h3 className="text-[#3f86c2] text-lg sm:text-xl md:text-4xl font-bold mb-2">20+ Years</h3>
                  <p className="text-gray-600 text-sm uppercase tracking-wide">EXPERIENCE</p>
                </div>
                <div>
                  <h3 className="text-[#3f86c2] text-lg sm:text-xl md:text-4xl font-bold mb-2">Xiamen, China</h3>
                  <p className="text-gray-600 text-sm uppercase tracking-wide">LOCATION</p>
                </div>
                <div>
                  <h3 className="text-[#3f86c2] text-lg sm:text-xl md:text-4xl font-bold mb-2">Smart Innovation</h3>
                  <p className="text-gray-600 text-sm uppercase tracking-wide">FOCUS</p>
                </div>
              </div>

              <div>
                <Link href="/about">
                  <Button 
                    size="lg"
                    className="bg-[#3f86c2] hover:bg-[#2a6b94] text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-semibold rounded-md"
                  >
                    Discover Our Story →
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Video */}
            <div className="relative">
              <div className="bg-gray-100 rounded-xl p-8 shadow-lg">
                <h3 className="font-sans text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
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

                <p className="text-gray-500 text-xs sm:text-sm text-center mt-4">
                  Learn about our manufacturing process and company vision
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs