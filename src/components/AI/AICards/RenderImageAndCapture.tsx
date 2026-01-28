import React, { useState } from "react";
import { Download } from "lucide-react";

type RenderImageAndCaptureProps = {
  title?: string;
  leftCaption?: string;
  imageSrc?: string;
  onDownload?: () => void;
};

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=80";

const RenderImageAndCapture: React.FC<RenderImageAndCaptureProps> = ({
  title = "Pretty amazing right?",
  leftCaption = "My favorite day\nwith Dad. Just us\ntwo in a boat, in\nCentral Park.",
  imageSrc = DEFAULT_IMAGE,
  onDownload,
}) => {
  const [caption, setCaption] = useState(leftCaption);

  const handleDownload = () => {
    if (onDownload) return onDownload();
  };

  return (
    <div className="w-full flex flex-col items-center px-6 py-8 bg-white">
      <h2 className="text-sm sm:text-base font-semibold text-gray-700 mb-6">
        {title}
      </h2>

      {/* Book Mock */}
      <div className="relative w-full max-w-3xl">
        {/* subtle shadow */}
        <div className="absolute inset-0 rounded-2xl blur-[1px] opacity-30 bg-black/10" />

        <div className="relative rounded-2xl border bg-white overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-gray-200 to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-3 bg-gradient-to-l from-gray-200 to-transparent" />

          {/* Pages */}
          <div className="grid grid-cols-2">
            {/* Left page */}
            <div className="relative h-[170px] sm:h-[200px] md:h-[220px] bg-gray-50">
              <div className="absolute inset-0 opacity-[0.15]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 10px 10px, rgba(0,0,0,0.5) 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                }}
              />
              <div className="absolute inset-0 opacity-[0.10]">
                <div className="w-full h-full bg-[linear-gradient(90deg,rgba(0,0,0,0.25)_1px,transparent_1px)] bg-[length:22px_22px]" />
              </div>

              {/* Caption */}
              <div className="relative z-10 h-full flex items-center justify-center px-6">
                <p
                  className="text-center font-serif font-semibold text-gray-800 leading-snug whitespace-pre-line"
                  style={{
                    textShadow: "0.6px 0.6px 0px rgba(0,0,0,0.15)",
                  }}
                >
                  {caption}
                </p>
              </div>

              <div className="absolute bottom-2 left-2 right-2 flex justify-center">
                <input
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  className="w-full max-w-[240px] bg-white/70 border rounded-full px-3 py-1 text-xs text-gray-600 outline-none"
                  placeholder="Edit caption..."
                />
              </div>
            </div>

            {/* Right page */}
            <div className="relative h-[170px] sm:h-[200px] md:h-[220px] bg-white">
             
              <img
                src={imageSrc}
                alt="Rendered book art"
                className="w-full h-full object-cover"
                style={{
                  filter: "grayscale(1) contrast(1.2) brightness(1.08)",
                }}
              />

              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.15)",
                  mixBlendMode: "multiply",
                  opacity: 0.5,
                }}
              />
            </div>
          </div>

          <div className="absolute top-0 bottom-0 left-1/2 w-[2px] -translate-x-1/2 bg-gray-200" />
          <div className="absolute top-0 bottom-0 left-1/2 w-6 -translate-x-1/2 bg-gradient-to-r from-black/10 via-transparent to-black/10 opacity-40" />
        </div>
      </div>


      <div className="mt-6 flex items-center gap-3">
        <button
          type="button"
          onClick={handleDownload}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm text-gray-700 hover:bg-gray-50 transition"
        >
          <Download size={16} />
          Download
        </button>
      </div>
    </div>
  );
};

export default RenderImageAndCapture;
