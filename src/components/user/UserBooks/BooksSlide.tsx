import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Image } from 'lucide-react';

interface Book {
  id: number;
  title: string;
  image: string | null;
}

const BooksSlide: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Sample books data - you can replace with actual data
  const books: Book[] = [
    { id: 1, title: 'Book 1', image: null },
    { id: 2, title: 'Book 2', image: null },
    { id: 3, title: 'Book 3', image: null },
    { id: 4, title: 'Book 4', image: null },
    { id: 5, title: 'Book 5', image: null },
  ];

  // Get number of visible slides based on screen size
  const getVisibleSlides = (): number => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 640) return 1; // mobile
    if (window.innerWidth < 1024) return 2; // tablet
    return 3; // desktop
  };

  const [visibleSlides, setVisibleSlides] = useState<number>(getVisibleSlides());

  // Handle window resize
  useEffect(() => {
    const handleResize = (): void => {
      setVisibleSlides(getVisibleSlides());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxSlide: number = Math.max(0, books.length - visibleSlides);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxSlide]);

  const nextSlide = (): void => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = (): void => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  const goToSlide = (index: number): void => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 md:py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-2xl lg:text-4xl font-semibold text-gray-900 mb-4 leading-tight">
          My books
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          Explore and manage the stories you've created with Rachel.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Books Slider */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out gap-4 md:gap-6"
            style={{
              transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)`,
            }}
          >
            {books.map((book) => (
              <div
                key={book.id}
                className="flex-shrink-0"
                style={{ width: `calc(${100 / visibleSlides}% - ${(visibleSlides - 1) * (visibleSlides === 1 ? 0 : visibleSlides === 2 ? 12 : 16) / visibleSlides}px)` }}
              >
                <div className="bg-gray-200 rounded-lg aspect-[2] flex items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer">
                  <Image className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Controls - Dots on Left, Arrows on Right */}
      <div className="flex justify-between items-center mt-8">
        {/* Dot Indicators - Left */}
        <div className="flex items-center gap-2">
          {[...Array(maxSlide + 1)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all rounded-full ${
                currentSlide === index
                  ? 'w-8 h-2 bg-gray-800'
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Buttons - Right */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            className="rounded-full p-2 md:p-2 shadow-md hover:shadow-xl transition-all hover:bg-black border border-gray-200 hover:border-gray-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700 hover:bg-black hover:text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="rounded-full p-2 md:p-2 shadow-md hover:shadow-xl transition-all border border-gray-200 hover:border-gray-300 hover:bg-black hover:text-white"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700 hover:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BooksSlide;