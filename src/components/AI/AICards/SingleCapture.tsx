import React, { useRef, useState } from "react";
import { Mic } from "lucide-react";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80";

const MAX_CHARS = 140;

const SingleCapture: React.FC = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState<string>(DEFAULT_IMAGE);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleChangePhoto = (file: File) => {
    const preview = URL.createObjectURL(file);
    setImage(preview);
  };


  return (
    <div className="w-full flex flex-col items-center px-6 py-6">
      
      {/* Title */}
      <h2 className="text-xl md:text-2xl font-serif text-center mb-8">
        Great photo! Next, tell me a little bit about this memory
      </h2>

      {/* Main */}
      <div className="flex flex-col md:flex-row gap-8 items-center mb-6">
        {/* Left Chat Card */}
        <div className="w-[280px] h-[320px] border rounded-2xl bg-white shadow-sm flex flex-col">
          {/* Top area */}
          <div className="flex-1 p-4">
            
              <div className="h-full flex items-center justify-center text-center px-4">
               
              </div>
            
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-100" />

          {/* Input area */}
          <div className="p-3">
            <div className="flex items-center gap-2 rounded-full border bg-white px-3 py-2">
              <input
                value={text}
                onChange={(e) => setText(e.target.value.slice(0, MAX_CHARS))}
                placeholder="Type your memory..."
                className="flex-1 text-sm outline-none bg-transparent text-gray-700 placeholder:text-gray-400"
              />
              <button
                type="button"
                className="p-1 rounded-full border bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                aria-label="Voice input"
              >
                <Mic size={16} />
              </button>
            </div>

            <div className="mt-2 flex justify-between items-center">
              
              <span className="text-[11px] text-gray-400">
                {text.length}/{MAX_CHARS}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-[280px] h-[320px] rounded-2xl overflow-hidden shadow-sm bg-gray-200">
          <img
            src={image}
            alt="Selected memory"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex items-center gap-4 mt-2">
        <button className="px-4 py-1.5 rounded-full border text-xs font-medium hover:bg-gray-100 transition">
          Ready For The Magic
        </button>

        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="text-xs font-medium text-gray-600 underline underline-offset-4 hover:text-gray-900"
        >
          Change Photo
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) =>
            e.target.files && handleChangePhoto(e.target.files[0])
          }
        />
      </div>
    </div>
  );
};

export default SingleCapture;
