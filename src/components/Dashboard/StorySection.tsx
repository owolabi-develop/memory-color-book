import React, { useState } from 'react';

interface StoryCard {
  id: number;
  title: string;
  description: string;
  category: 'adults' | 'kids';
}

const StorySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'adults' | 'kids'>('adults');

  const stories: StoryCard[] = [
    {
      id: 1,
      title: 'Family Adventure Book',
      description: 'Color your family journey with beautiful line art memories',
      category: 'adults'
    },
    {
      id: 2,
      title: 'Wedding Memories',
      description: 'Your love story beautifully colored from engagement to "I do"',
      category: 'adults'
    },
    {
      id: 3,
      title: 'Retirement Celebration',
      description: 'Celebrate milestones with personalized coloring memories',
      category: 'adults'
    },
    {
      id: 4,
      title: 'Travel Memories',
      description: 'Relive your favorite adventures in beautiful line art',
      category: 'adults'
    },
    {
      id: 5,
      title: "Baby's First Year",
      description: 'Color every precious milestone in your little one\'s journey',
      category: 'kids'
    },
    {
      id: 6,
      title: 'Birthday Celebration',
      description: 'Color every birthday unforgettable personalized story',
      category: 'kids'
    },
    {
      id: 7,
      title: 'School Adventures',
      description: 'Celebrate learning milestones with colorful memories',
      category: 'kids'
    },
    {
      id: 8,
      title: 'Summer Fun',
      description: 'Create colorful memories of fun summer moments',
      category: 'kids'
    }
  ];

  const filteredStories = stories.filter(story => story.category === activeCategory);

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

        {/* Toggle Section - Right Aligned */}
        <div className="flex justify-end mb-12 sm:mb-16">
          <div className="flex gap-2">
            {/* Adults Toggle */}
            <button
              onClick={() => setActiveCategory('adults')}
              className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full flex items-center justify-center font-semibold text-xs sm:text-sm transition-all duration-300 border-2 ${
                activeCategory === 'adults'
                  ? 'bg-gray-900 text-white border-gray-900 shadow-md'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400 hover:shadow-md hover:scale-105'
              }`}
            >
              Adults
            </button>

            {/* Kids Toggle */}
            <button
              onClick={() => setActiveCategory('kids')}
              className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full flex items-center justify-center font-semibold text-xs sm:text-sm transition-all duration-300 border-2 ${
                activeCategory === 'kids'
                  ? 'bg-gray-900 text-white border-gray-900 shadow-md'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400 hover:shadow-md hover:scale-105'
              }`}
            >
              Kids
            </button>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredStories.map((story) => (
            <div key={story.id} className="flex flex-col">
              {/* Card Image Placeholder */}
              <div className="bg-gray-300 rounded-lg w-full aspect-square flex items-center justify-center mb-4">
                <img 
                  src={`https://via.placeholder.com/300x300?text=${story.title}`}
                  alt={story.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-1">
                <h3 className="text-lg sm:text-base font-semibold text-gray-900 mb-2">
                  {story.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 flex-1">
                  {story.description}
                </p>
                <button className="border border-gray-800 text-gray-900 text-sm font-medium px-6 py-2 rounded-xl hover:bg-black hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 self-start">
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