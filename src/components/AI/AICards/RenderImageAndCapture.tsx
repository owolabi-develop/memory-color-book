import ThemeImage from '../../../assets/theme.jpg'

type RenderImageAndCaptureProps = {
  title?: string;
  leftCaption?: string;
  rightImageSrc?: string;
  className?: string;
};

const DEMO_RIGHT =
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=80";
const DEMO_T1 =ThemeImage;

const RenderImageAndCapture: React.FC<RenderImageAndCaptureProps> = ({
  title = "Pretty amazing right?",
  leftCaption = "My favorite day\nwith Dad. Just us\ntwo in a boat, in\nCentral Park",
  rightImageSrc = DEMO_RIGHT,

  className = "",
}) => {


  return (
    <div className={`w-full flex flex-col items-center ${className}`}>
      {/* Title */}
      <h2 className="text-center text-base md:text-lg font-semibold text-gray-900 whitespace-pre-line">
        {title}
      </h2>

      {/* Spread stack */}
      <div className="mt-6 relative w-[720px] max-w-[92%] h-[240px]">
        {/* stacked behind */}
        <div className="absolute inset-0 translate-x-3 translate-y-2 rounded-2xl border border-gray-300 bg-gray-100 shadow-sm" />
        <div className="absolute inset-0 translate-x-2 translate-y-1 rounded-2xl border border-gray-300 bg-gray-100 shadow-sm" />

        {/* main spread */}
        <div className="absolute inset-0 rounded-2xl border border-gray-400 bg-white shadow-md overflow-hidden">
          <div className="grid grid-cols-2 h-full">
            {/* Left page*/}
            <div className="relative overflow-hidden">
              <img
                src={DEMO_T1}
                alt={''}
                className="absolute inset-0 w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-white/20" />

              <div className="relative z-10 h-full flex items-center justify-center p-6">
                <p className="text-center whitespace-pre-line font-semibold text-gray-900 text-base leading-snug drop-shadow-sm">
                  {leftCaption}
                </p>
              </div>
            </div>

           
            <div className="relative overflow-hidden">
              
              <div className="absolute inset-0 bg-white/15" /> 

              {/* main image */}
              <img
                src={rightImageSrc}
                alt="Right page"
                className="relative z-10 w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default RenderImageAndCapture;
