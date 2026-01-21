import React from 'react';

interface StoryCard {
  id: number;
  title: string;
  description: string;
}

const StorySection: React.FC = () => {
  const stories: StoryCard[] = [
    {
      id: 1,
      title: 'Family Adventure Book',
      description: 'Color your family journey with beautiful line art memories'
    },
    {
      id: 2,
      title: "Baby's First Year",
      description: 'Color every precious milestone in your little one\'s journey'
    },
    {
      id: 3,
      title: 'Wedding Memories',
      description: 'Your love story beautifully colored from engagement to "I do"'
    },
    {
      id: 4,
      title: 'Birthday Celebration',
      description: 'Color every birthday unforgettable personalized story'
    }
  ];

  return (
    <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-gray-600 text-xs sm:text-sm font-medium tracking-wider mb-4">
            Find Your Story
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900 mb-6">
            From the Silly to the Sacred
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Your kid's dinosaur obsession. Your dad's retirement day. The moment she said yes. All of them become coloring book keepsakes. Which one is yours?
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stories.map((story) => (
            <div key={story.id} className="flex flex-col">
              {/* Card Image Placeholder */}
              <div className="bg-gray-300 rounded-lg w-full aspect-square flex items-center justify-center mb-4">
                <svg
                  className="w-16 h-16 text-gray-400"
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

              {/* Card Content */}
              <div className="flex flex-col flex-1">
                <h3 className="text-lg sm:text-base font-semibold text-gray-900 mb-2">
                  {story.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 flex-1">
                  {story.description}
                </p>
                <button className="border border-gray-800 text-gray-900 text-sm font-medium px-6 py-2 rounded-xl hover:bg-gray-100 hover:shadow-lg hover:scale-105 transition-all duration-300 self-start">
                  Start with this theme
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StorySection;