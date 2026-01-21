import React from 'react';

interface Step {
  id: number;
  title: string;
  description: string;
  image: string;
}

const HowItWorks: React.FC = () => {
  const steps: Step[] = [
    {
      id: 1,
      title: '1. Start with a memory',
      description: 'Rachel gets the heart of it—who this is for and what story you\'re telling.',
      image: 'https://via.placeholder.com/400x300?text=Step+1'
    },
    {
      id: 2,
      title: '2. Tell your story',
      description: 'Upload the moments that matter. Rachel asks the right questions and helps you find the perfect words.',
      image: 'https://via.placeholder.com/400x300?text=Step+2'
    },
    {
      id: 3,
      title: '3. We handle the magic',
      description: '"Love-to-Line™" does the rest. Your photos turn into line art, your words become captions.',
      image: 'https://via.placeholder.com/400x300?text=Step+3'
    },
    {
      id: 4,
      title: '4. The finishing touches',
      description: 'Choose fonts and borders, see the final book, and order. Easy.',
      image: 'https://via.placeholder.com/400x300?text=Step+4'
    }
  ];

  return (
    <div className="min-h-screen  px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-3xl sm:text-4xl font-light text-gray-900 mb-2">
            How It Works
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Create your memory coloring book in as little as 15 minutes.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Image Section - Top */}
              <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center rounded-t-2xl overflow-hidden">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section - Bottom */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="text-center">
          <div className="inline-block bg-white border-2 border-gray-400 rounded-full px-6 sm:px-8 py-3 sm:py-4">
            <p className="text-gray-700 text-xs sm:text-sm">
              <span className="font-semibold">Your book starts at only $29</span>
              <span className="text-gray-600 mx-1">—and the more you buy, the less you pay.</span>
              <span className="text-gray-700 font-semibold cursor-pointer hover:underline">See pricing</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;