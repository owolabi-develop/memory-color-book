import React, { useRef, useState } from "react";
import { Sparkles } from "lucide-react";

type StoryPhotoSelectionProps = {
  title?: string;
  initialImage?: string;
  onChange?: (file: File, previewUrl: string) => void;
};

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=700&q=80";

const StoryPhotoSelection: React.FC<StoryPhotoSelectionProps> = ({
  title = "Create your first caption.",
  initialImage = DEFAULT_IMAGE,
  onChange,
}) => {
  const [image, setImage] = useState<string>(initialImage);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handlePick = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const file = files[0];
    const preview = URL.createObjectURL(file);

    setImage(preview);
    onChange?.(file, preview);
  };

  return (
    <div className="w-full max-w-md bg-gray-100 rounded-xl p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="border-4 border-gray-300 bg-gray-500 rounded-full p-2 shrink-0">
          <Sparkles size={18} className="text-gray-200" />
        </div>
        <p className="text-sm font-medium text-gray-700">{title}</p>
      </div>

      {/* Image */}
      <div className="w-full flex justify-start">
        <div className="w-52 h-36 rounded-xl overflow-hidden bg-gray-200">
          <img
            src={image}
            alt="Selected story"
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>

      {/* Hidden file input */}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          handlePick(e.target.files);
          e.currentTarget.value = "";
        }}
      />

      {/* Button */}
      <div className="mt-4 flex justify-start">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="px-10 py-2 rounded-full border text-xs font-semibold 
                     bg-white hover:bg-gray-100 transition"
        >
          Change photo
        </button>
      </div>
    </div>
  );
};

export default StoryPhotoSelection;
