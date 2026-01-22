import { useState } from "react";

interface ProgressItem {
  id: number;
  percentage: number;
  title: string;
}

const Progress = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const progressItems: ProgressItem[] = [
    { id: 1, percentage: 30, title: "Family memories album" },
    { id: 2, percentage: 60, title: "Childhood adventure book" },
    { id: 3, percentage: 90, title: "Pet memorial collection" }
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-gray-500 text-xs sm:text-sm font-medium uppercase mb-2 semibold">
            Progress
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-3">
            Your memory books in development
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            Track and nurture your storytelling journey
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* Left */}
          <div className="space-y-6">
            {progressItems.map((item) => (
              <div key={item.id}>
                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                  {item.percentage}%
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          {/* Right - Video */}
          <div className="lg:col-span-2">
            <div className="relative w-full max-w-2xl mx-auto aspect-video rounded-xl overflow-hidden shadow-md bg-gray-300">
              {isPlaying ? (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Memory Books Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 w-full h-full group"
                >
                  {/* YouTube Thumbnail */}
                  <img
                    src="https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
                    alt="Video preview"
                    className="w-full h-full object-cover"
                  />

                  {/* Soft Gray Overlay */}
                  <div className="absolute inset-0 bg-gray-900/30"></div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-700/90 hover:bg-gray-800 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg">
                      <svg
                        className="w-7 h-7 sm:w-8 sm:h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
