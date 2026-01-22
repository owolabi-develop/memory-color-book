

const HeroCover = (props: any) => {
  return (
    <section className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={props.url}
        alt="hero section showcase"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gray Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-500/30 via-gray-600/30 to-gray-700/60" />

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center p-2">
          {props.title}
        </h1>
        <h1 className="text-sm sm:text-sm md:text-base lg:text-xl text-white text-center">
          {props.description}
        </h1>
        </div>
      </div>
    </section>
  );
};


export default HeroCover