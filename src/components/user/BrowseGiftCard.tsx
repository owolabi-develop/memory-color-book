import HeroImage from '../../assets/heroImage.jpg'

const BrowseGiftCard = () => {
  return (
   <section className="w-full px-4 sm:px-6 lg:px-10 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full h-[20vh] sm:h-[30vh] md:h-[40vh] lg:h-[50vh] rounded-xl overflow-hidden">
          
          {/* Background Image */}
          <img
            src={HeroImage} 
            alt="Continue your journey"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Gray Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-500/30 via-gray-600/30 to-gray-700/60" />

          {/* Centered Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-1 md:px-4 text-center gap-2">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
              Give a book, keep a memory
            </h1>
            <h1 className="text-sm sm:text-base md:text-lg text-gray-100 max-w-2xl">
             Share the gift of a custom coloring book. Choose a design, set the delivery date, and send it straight to someone who matters
            </h1>

            <div className="flex gap-3 mt-2 justify-center">
              <button className="bg-white text-gray-900 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-black hover:text-white transition">
                Browse gift cards
              </button>
              <button className="border border-white text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-black hover:text-white transition">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default BrowseGiftCard