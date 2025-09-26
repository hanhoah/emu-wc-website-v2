import { Button } from '@/components/ui/button'

const CallToAction = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Upgrade Your Bathroom?
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Discover the perfect smart toilet solution for your home or business.
          </p>
          <Button 
            size="lg"
            className="bg-[#3889be] hover:bg-[#2a6b94] text-white px-10 py-4 text-lg font-semibold rounded-md"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CallToAction