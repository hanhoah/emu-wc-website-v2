interface PageHeroProps {
  title: string
  subtitle: string
  backgroundImage?: string
  height?: 'sm' | 'md' | 'lg'
  buttons?: React.ReactNode
}

export default function PageHero({ 
  title, 
  subtitle, 
  backgroundImage, 
  height = 'md',
  buttons 
}: PageHeroProps) {
  const heightClasses = {
    sm: 'h-48',  // 192px - kleinste Größe
    md: 'h-64',  // 256px - Standard für die meisten Seiten
    lg: 'h-96'   // 384px - für Homepage mit Hintergrundbild
  }

  const backgroundStyles = backgroundImage 
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    : {}

  return (
    <section 
      className={`bg-[#3889be] text-white ${heightClasses[height]} px-8 flex items-center justify-center mt-24`}
      style={backgroundStyles}
    >
      <div className="text-center">
        <div className={backgroundImage ? "bg-black/50 backdrop-blur-sm rounded-lg p-8 inline-block" : ""}>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-8 leading-tight">
            {title}
          </h1>
          <p 
            className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
          
          {buttons && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {buttons}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}