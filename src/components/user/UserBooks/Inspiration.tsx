const Inspiration = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-10xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32 items-center">

          {/* Left Side - Content */}
          <div className="space-y-8 order-1 lg:order-1">

            <div>
              <p className="text-gray-600 text-xs sm:text-sm font-medium mb-2">
                Inspiration
              </p>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 leading-tight">
                Discover new stories and memories
              </h1>

              <p className="text-gray-600 text-sm sm:text-base max-w-xl">
                Unlock fresh ideas for your next memory book. Our personalized
                recommendations help you capture moments that matter.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 max-w-md">
              <div>
                <p className="text-3xl font-semibold text-gray-900">50</p>
                <p className="text-sm text-gray-600">
                  Personalized book recommendations based on your history
                </p>
              </div>

              <div>
                <p className="text-3xl font-semibold text-gray-900">50</p>
                <p className="text-sm text-gray-600">
                  Seasonal prompts to spark your creativity
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-6 pt-2">
              <button className="border border-gray-800 px-5 py-2.5 rounded-md text-sm hover:bg-black hover:text-white transition">
                Explore
              </button>

              <button className="text-sm font-medium flex items-center gap-2 group">
                Create
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* Right Side - Image Placeholder */}
          <div className="flex justify-center order-2 lg:order-2">
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

        </div>
      </div>
    </div>
  )
}

export default Inspiration
