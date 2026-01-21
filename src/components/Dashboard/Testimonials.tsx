import React from 'react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  location: string;
}

const TestimonialSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "I love the simplicity of the creation process and the quality of the book. It's my go to gift for loved ones.",
      author: 'Renee Wells',
      location: 'Happy Mom, New York'
    },
    {
      id: 2,
      quote: "The entire experience was seamless. Rachel helped me create something truly meaningful in just minutes.",
      author: 'Sarah Johnson',
      location: 'Creative Mom, California'
    },
    {
      id: 3,
      quote: "Beautiful quality and such a thoughtful way to preserve memories. Everyone who received one absolutely loved it.",
      author: 'Jennifer Davis',
      location: 'Grandmother, Texas'
    },
    {
      id: 4,
      quote: "This gift was so special and personal. My family treasures it and looks through it all the time.",
      author: 'Michael Chen',
      location: 'Proud Father, Seattle'
    }
  ];

  return (
    <div className="bg-gray-100 px-4 py-3 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-gray-900 mb-4">
            Loved by Families
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Real stories from people creating meaningful memories
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-200 rounded-2xl p-8 sm:p-10 flex flex-col"
            >
              {/* Quote */}
              <p className="text-gray-900 text-base sm:text-lg font-serif italic mb-6 flex-1">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="border-t border-gray-300 pt-4">
                <p className="text-gray-900 font-semibold text-sm sm:text-base">
                  {testimonial.author}
                </p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 sm:mt-16">
          <button className="border border-gray-800 text-gray-900 text-sm font-medium px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-black hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300">
            Start Creating With Rachel
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;