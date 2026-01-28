import React, { useRef, useState } from "react";
import { Sparkles } from "lucide-react";

const DEMO_IMAGE =
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80";

const UserCaptionInput: React.FC = () => {
  const [image, setImage] = useState<string>(DEMO_IMAGE);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const handlePick = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setImage(URL.createObjectURL(files[0]));
  };

  return (
    <div className="w-full max-w-sm bg-gray-100 rounded-xl p-6">

      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div className="border-4 border-gray-300 bg-gray-500 rounded-full p-2 shrink-0">
          <Sparkles size={18} className="text-gray-200" />
        </div>

        <div>
          <p className="text-sm font-medium text-gray-700">
            Let’s create your first caption.
          </p>
          <p className="text-xs text-gray-500 mt-0.5">
            Tell me about this photo...
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">

        <div className="flex flex-col items-start">
          <div className="w-28 h-28 rounded-lg overflow-hidden bg-gray-200 ml-12">
            <img
              src={image}
              alt="Selected"
              className="w-full h-full object-cover grayscale"
            />
          </div>

          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              handlePick(e.target.files);
              e.currentTarget.value = "";
            }}
          />

          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="mt-2 px-5 py-1.5 rounded-full border text-xs font-medium
                       bg-white hover:bg-gray-100 transition ml-12"
          >
            Change photo
          </button>
        </div>

      

      </div>
    </div>
  );
};

export default UserCaptionInput;
