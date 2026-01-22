 import HeroImage from '../../../assets/heroImage.jpg'
const BookMemory = () => {
  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">

        {/* Text */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
            Your memories, beautifully preserved in color
          </h1>

          <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
            Every page tells a story. Transform your cherished photos into personalized coloring books that capture life's most meaningful moments.
          </p>

          {/* Buttons */}
          <div className="mt-5 flex flex-wrap justify-center gap-2 sm:gap-3">
            <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-900 transition">
              Start now
            </button>

            <button className="border border-gray-300 text-gray-900 px-5 py-2 rounded-full text-sm font-medium hover:border-gray-900 transition">
              Learn more
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="mt-8 sm:mt-10 lg:mt-12 w-full">
          <div className="w-full rounded-lg overflow-hidden bg-gray-200">
            <img
              src={HeroImage} 
              alt="Memories preview"
              className="
                w-full 
                h-[220px] 
                sm:h-[280px] 
                md:h-[340px] 
                lg:h-[380px] 
                object-cover
              "
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default BookMemory;
