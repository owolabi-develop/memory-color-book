import HeroImage from '../../assets/heroImage.jpg';


const Hero = () => {
  return (
    <section className="relative w-full min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Side - Content */}
        <div className="relative flex items-center bg-white">
          {/* Content */}
          <div className="relative z-10 mx-auto w-full max-w-xl px-6 md:px-12">
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Color your stories.
            </h1>

            <p className="mb-8 text-gray-600 text-lg md:text-lg lg:text-lg leading-relaxed">
              Photos become pages you can color. Your memories become captions you
              treasure. Moments you don't want to forget become something you
              return to again and again. All because Rachel makes it easy
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                className="
                  group
                  rounded-lg
                  bg-gray-900
                  px-8
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-gray-800
                  hover:shadow-lg
                  hover:-translate-y-0.5
                  active:scale-95
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-gray-900
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
                  "
                >
                  →
                </span>
              </button>

              <button
                className="
                  group
                  rounded-lg
                  border-2
                  border-gray-900
                  bg-transparent
                  px-8
                  py-3
                  text-sm
                  font-semibold
                  text-gray-900
                  transition-all
                  duration-300
                  hover:bg-gray-900
                  hover:text-white
                  hover:shadow-lg
                  hover:-translate-y-0.5
                  active:scale-95
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-gray-900
                "
              >
                See How It Works
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden lg:block">
          <img
            src={HeroImage}
            alt="hero"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;