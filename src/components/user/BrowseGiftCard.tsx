

const BrowseGiftCard = () => {
  return (
   <div className="w-full px-4 sm:px-8 m-4 sm:m-6">
  <div className="relative w-full h-48 bg-gray-300 rounded-xl overflow-hidden">

    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
        Give a book, Keep a memory
      </h1>

      <p className="mt-2 text-xs sm:text-sm md:text-base text-white max-w-xl">
        Share the gift of a custom coloring book. Choose a design, set the delivery date, and send it to someone who matters.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 items-center justify-center">
        <button className="bg-white text-black text-xs sm:text-sm font-medium px-5 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-black hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap">
          Browse gift cards
        </button>

        <button className="border border-black text-white text-xs sm:text-sm font-medium px-5 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-black hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap">
          Learn more
         
        </button>
      </div>
    </div>

  </div>
</div>

  )
}

export default BrowseGiftCard