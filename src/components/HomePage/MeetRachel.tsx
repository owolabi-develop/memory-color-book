import React from 'react';

const MeetRachel: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-10xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32 items-center">
          {/* Left Side - Image Placeholder */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="bg-gray-300 rounded-3xl w-full max-w-sm aspect-square flex items-center justify-center shadow-lg">
              <svg
                className="w-20 h-20 sm:w-24 sm:h-24 text-gray-400"
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
          <div className="space-y-6 order-1 lg:order-2">
            {/* Header */}
            <div>
              <p className="text-gray-600 text-xs sm:text-sm font-medium tracking-wider mb-3 uppercase">
                Rachel's Here to Help
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
                Meet Rachel AI
              </h1>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                She helps you remember not just what happened, but how it felt. The joke your dad told. The way your daughter laughed. The moment right after the camera clicked.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {/* Feature 1 */}
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  Never Face a Blank Page Alone
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Rachel suggests caption options to choose from, edit, or build on. You stay in control of your story she just makes it easier to tell.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  From Days to Minutes
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  We made our first book the hard way it took days. With Rachel, it takes as little as 15 minutes. She handles layout and design while you focus on memories.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <button className="border border-gray-800 text-gray-900 text-xs sm:text-sm font-medium px-5 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-black hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap">
                Start Creating With Rachel
              </button>
              <button className="text-gray-900 text-xs sm:text-sm font-medium flex items-center justify-center sm:justify-start gap-2 hover:gap-3 transition-all duration-300 group">
                Learn more
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetRachel;