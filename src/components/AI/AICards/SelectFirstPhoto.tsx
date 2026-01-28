import React, { useRef, useState } from "react";
import { Sparkles } from "lucide-react";

type SelectFirstPhotoProps = {
  onSelect?: (file: File) => void;
  single?: boolean;
};

const SelectFirstPhoto: React.FC<SelectFirstPhotoProps> = ({
  onSelect,
  single = true,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<string>("");

  const handlePick = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const file = files[0];
    setFileName(file.name);
    onSelect?.(file);
  };

  return (
    <div className="w-full max-w-md bg-gray-100 rounded-xl p-6">
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="border-4 border-gray-300 bg-gray-500 rounded-full p-2 flex-shrink-0">
          <Sparkles size={20} className="text-gray-200" />
        </div>

        {/* Content */}
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-700">
            Images are ready to go!
          </p>

          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
            Let’s create your first caption.
            <br />
            Select your first photo and tell me about it.
          </p>

          {/* Hidden file input */}
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            multiple={!single}
            className="hidden"
            onChange={(e) => {
              handlePick(e.target.files);
              e.currentTarget.value = "";
            }}
          />
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="mt-3 inline-flex items-center gap-2 px-5 py-1.5 rounded-full border text-xs font-medium
                       bg-white hover:bg-gray-100 transition"
          >
            Select a photo
          </button>

          {fileName && (
            <p className="mt-2 text-[11px] text-gray-500 truncate">
              Selected: <span className="font-medium">{fileName}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectFirstPhoto;
