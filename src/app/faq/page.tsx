import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
import { Accordion } from '@/components/ui/accordion'
import PageHero from '@/components/ui/page-hero'

const faqData = {
  'General Questions': {
    color: 'blue',
    colorClass: 'bg-[#3f86c2]',
    questions: [
    {
      question: 'What makes EMU WC toilets different from traditional toilets?',
      answer: 'EMU WC toilets feature modern, water-saving technology, sleek designs, and smart features like self-cleaning, bidet functions, and odor control.'
    },
    {
      question: 'Are you a manufacturer?',
      answer: 'Yes! EMU WC is the manufacturer of all our toilet products. We design and produce high-quality, innovative, and eco-friendly toilet solutions.'
    },
    {
      question: 'Are EMU WC toilets eco-friendly?',
      answer: 'Yes! Our toilets use water-efficient flushing systems and energy-saving technology, reducing water consumption while maintaining top performance.'
    }
    ]
  },
  'Installation & Compatibility': {
    color: 'green',
    colorClass: 'bg-green-500',
    questions: [
    {
      question: 'Can I install an EMU WC toilet myself?',
      answer: 'Yes! Installing an EMU WC toilet seat cover is simple, and we provide detailed installation instructions.'
    },
    {
      question: 'Are EMU WC toilets compatible with all bathrooms?',
      answer: 'Most of our toilets fit standard plumbing connections, but we advise checking dimensions and installation requirements before purchase.'
    },
    {
      question: 'Do I need a separate water supply for bidet functions?',
      answer: 'No, our bidet toilets connect to your existing water supply, and some models have built-in water filtration for extra hygiene.'
    }
    ]
  },
  'Maintenance & Cleaning': {
    color: 'purple',
    colorClass: 'bg-purple-500',
    questions: [
    {
      question: 'How do I clean my EMU WC toilet?',
      answer: 'Many EMU WC models feature self-cleaning capabilities, such as automatic nozzle cleaning and anti-bacterial glaze to reduce dirt buildup.'
    },
    {
      question: 'What should I do if my toilet isn\'t flushing properly?',
      answer: 'First, check the water supply and ensure no blockages. If the issue persists, refer to the user manual or contact our support team.'
    }
    ]
  },
  'Support & Warranty': {
    color: 'orange',
    colorClass: 'bg-orange-500',
    questions: [
    {
      question: 'Does EMU WC offer a warranty?',
      answer: 'Yes! We offer a warranty on all our toilets. Coverage varies by model.'
    },
    {
      question: 'How can I get technical support?',
      answer: 'You can reach our customer support team via phone, email, or our online contact form.'
    }
    ]
  }
}

export default function FAQ() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      <PageHero 
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about EMU WC smart toilets and toilet seats"
      />

      {/* Categories Legend */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Categories</h3>
            <div className="flex flex-wrap gap-6">
              {Object.entries(faqData).map(([category, data]) => (
                <div key={category} className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${data.colorClass}`}></div>
                  <span className="text-sm text-gray-600">{category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {Object.entries(faqData).map(([category, data]) => (
              <div key={category} className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-4 h-4 rounded-full ${data.colorClass}`}></div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {category}
                  </h2>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <Accordion items={data.questions} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team is here to help you find the perfect smart toilet solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:info@emu-wc.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#3f86c2] text-white font-semibold rounded-lg hover:bg-[#2a6b94] transition-colors"
            >
              Email Us
            </a>
            <a 
              href="tel:+4916293662471"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#3f86c2] text-[#3f86c2] font-semibold rounded-lg hover:bg-[#3f86c2] hover:text-white transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}