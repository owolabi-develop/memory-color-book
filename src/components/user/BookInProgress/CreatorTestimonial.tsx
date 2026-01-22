

const CreatorTestimonial = () => {
  const testimonials = [
    {
      id: 1,
      text: "Rachel helped me capture my grandmother's stories in a way I never thought possible",
      name: "Sarah Martinez",
      role: "Daughter and memory keeper",
    },
    {
      id: 2,
      text: "Creating this book was therapeutic and healing for our family",
      name: "Michael Thompson",
      role: "Grief support counselor",
    },
    {
      id: 3,
      text: "I love how easy it was to turn our vacation photos into a beautiful keepsake",
      name: "Elena Rodriguez",
      role: "Travel enthusiast",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-3">
            Memories matter
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            What our creators say about their experience
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="border border-gray-300 rounded-xl p-6 flex flex-col justify-between bg-white hover:shadow-lg transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l2.9 6.1 6.7.6-5 4.4 1.5 6.6L12 16.9 5.9 19.7 7.4 13 2.4 8.7l6.7-.6L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-800 text-sm sm:text-base mb-6 leading-relaxed">
                {item.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
                  </svg>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {item.name}
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorTestimonial;
