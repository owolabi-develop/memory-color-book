import React from 'react';

const GiftCardSection: React.FC = () => {
  return (
    <div className=" bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-200 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Side - Image Placeholder */}
            <div className="bg-gray-300 flex items-center justify-center h-64 sm:h-72 lg:h-80">
              <div className="bg-gray-400 rounded-lg p-6">
                <svg
                  className="w-14 h-14 sm:w-16 sm:h-16 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="bg-gray-200 flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-gray-900 mb-4 leading-tight">
                Two minutes to buy.
                <br />
                A lifetime to treasure.
              </h1>
              
              <p className="text-gray-700 text-xs sm:text-sm mb-6">
                This is the gift that looks like you spent days planning it.
              </p>

              <button className="inline-block border border-gray-800 text-gray-900 text-xs sm:text-sm font-medium px-5 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 w-fit">
                Buy Gift Cards
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCardSection;