const WhyChooseUs = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.5 2.5l1.5 3h3l1.5-3H18l-1.5 3H20v2h-1l-1 12H6l-1-12H4V5.5h2.5L5 2.5h4.5zm1 4h3l-.5-1h-2l-.5 1z"/>
        </svg>
      ),
      title: "Advanced Features",
      description: "Heated seats, bidet functions, and air dryers for ultimate comfort.",
      bgColor: "bg-[#3889be]"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 2v2h1v14a4 4 0 0 0 4 4 4 4 0 0 0 4-4V4h1V2H7M9 4h6v14a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4Z"/>
        </svg>
      ),
      title: "Energy Efficient", 
      description: "Smart power management to reduce energy consumption.",
      bgColor: "bg-[#e67e55]"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 3.5C14.8 3.4 14.4 3.4 14.2 3.5L9 7V9C9 9.6 9.4 10 10 10C10.6 10 11 9.6 11 9V8.5L12.5 7.8L16 10.1C16.6 10.5 17.4 10.3 17.8 9.7C18.2 9.1 18 8.3 17.4 7.9L14.8 6.4L16 5.7L21 9ZM13 12C13.6 12 14 12.4 14 13V22H16V13C16 11.3 14.7 10 13 10S10 11.3 10 13V22H12V13C12 12.4 12.4 12 13 12Z"/>
        </svg>
      ),
      title: "Premium Quality",
      description: "Built with high-quality materials for durability and reliability.",
      bgColor: "bg-[#3889be]"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4zM6.7 8.8c-.7.7-1.9.7-2.6 0-.7-.7-.7-1.9 0-2.6.7-.7 1.9-.7 2.6 0 .7.7.7 1.9 0 2.6z"/>
        </svg>
      ),
      title: "Easy Installation",
      description: "Simple installation process compatible with most toilets.",
      bgColor: "bg-[#e67e55]"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      ),
      title: "Hygienic Solution",
      description: "Self-cleaning nozzles and antibacterial materials for better hygiene.",
      bgColor: "bg-[#3889be]"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2V8c0-1.11.89-2 2-2h16zM7 10v2h10v-2H7z"/>
        </svg>
      ),
      title: "24/7 Support",
      description: "Dedicated customer support team to assist with any inquiries.",
      bgColor: "bg-[#e67e55]"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose EMU WC?
            </h2>
            <div className="w-16 h-1 bg-[#3889be] mx-auto"></div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                {/* Icon Circle */}
                <div className={`w-20 h-20 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  {feature.icon}
                </div>
                
                {/* Content */}
                <h3 className="font-semibold text-xl text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs