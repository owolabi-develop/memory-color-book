import React, { useState, useEffect } from 'react';
import HeroImage from '../../assets/heroImage.jpg';

interface CarouselImage {
  id: number;
  url: string;
  caption: string;
}

const Community: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const images: CarouselImage[] = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      caption: 'Read me fix it to watch!'
    },
    {
      id: 2,
      url: HeroImage,
      caption: 'Merry holidays from Vermont'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1516387938669-e51de1842a8f?w=800&h=600&fit=crop',
      caption: 'Her 21st'
    }
  ];

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [autoPlay, images.length]);


  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 8000);
  };

  return (
    <div className="w-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gray-600 text-xs sm:text-sm font-medium tracking-wider mb-3 uppercase">
            From Our Community
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
            Real Stories. Real Memories. Real Love.
          </h1>
          <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Some make you laugh. Some make you cry. 
            <br className="hidden sm:block" />
            All of them are turned into books they color and treasure.
          </p>
        </div>

        {/* Main Carousel */}
        <div
          className="relative w-full rounded-lg overflow-hidden group"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          {/* Main Image Display */}
          <div className="relative w-full aspect-video sm:aspect-auto sm:h-96 lg:h-[500px] bg-gray-200 flex items-center justify-center overflow-hidden">
            {/* Images Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              {images.map((image, index) => (
                <div
                  key={image.id}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out ${
                    index === currentIndex
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95'
                  }`}
                >
                <div className="w-full h-full rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 bg-black/60 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md text-xs sm:text-sm font-medium backdrop-blur-sm transition-all duration-300">
              {images[currentIndex].caption}
            </div>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-3 py-6 px-4 bg-gray-50">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-500 ${
                  index === currentIndex
                    ? 'bg-gray-900 w-8 h-3 rounded-full'
                    : 'bg-gray-400 w-3 h-3 rounded-full hover:bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;