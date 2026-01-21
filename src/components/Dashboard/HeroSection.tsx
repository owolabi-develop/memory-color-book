import HeroImage from '../../assets/heroImage.jpg';

const Hero = () => {
  return (
    <section className="relative h-screen w-full">
      {/* Background image */}
      <img
        src={HeroImage}
        alt="hero"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-xl">
          <h1 className="mb-6 font-serif text-4xl md:text-5xl lg:text-6xl">
            Color your stories.
          </h1>

          <p className="mb-8 text-gray-900 text-lg md:text-lg lg:text-xl">
            Photos become pages you can color. Your memories become captions you
            treasure. Moments you don't want to forget become something you
            return to again and again. All because Rachel makes it easy
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              className="
                group
                rounded-xl
                bg-white
                px-6
                py-3
                text-sm
                font-medium
                text-gray-900
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-gray-200
                hover:shadow-lg
                active:scale-95
                active:bg-gray-300
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-gray-400
              "
            >
              Create Your Book
              <span
                className="
                  ml-2
                  inline-block
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-active:translate-x-1
                "
              >
                →
              </span>
            </button>

            <button
              className="
                group
                rounded-xl
                border
                border-gray-300
                bg-gray-100
                px-6
                py-3
                text-sm
                font-medium
                text-black
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-gray-500
                hover:bg-gray-200
                hover:shadow-md
                active:scale-95
                active:bg-gray-200
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-gray-400
              "
            >
              See How It Works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


