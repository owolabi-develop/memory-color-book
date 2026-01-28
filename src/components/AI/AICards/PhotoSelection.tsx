import React, { useRef, useState } from "react";
import { Sparkles, Check, X, Upload } from "lucide-react";

type Photo = {
  id: number;
  src: string;
  selected: boolean;
  file?: File;
};

const PhotoSelection: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFiles = (files: FileList) => {
    const newPhotos: Photo[] = Array.from(files).map((file, index) => ({
      id: Date.now() + index,
      src: URL.createObjectURL(file),
      selected: false,
      file,
    }));

    setPhotos((prev) => [...prev, ...newPhotos]);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
      e.dataTransfer.clearData();
    }
  };

  const toggleSelect = (id: number) => {
    setPhotos((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, selected: !p.selected } : p
      )
    );
  };

  return (
    <div className="w-full max-w-md bg-gray-100 rounded-xl p-6">

      {/* Icon */}
      <div className="flex items-center justify-center mb-4">
        <div className="border-4 border-gray-300 bg-gray-500 rounded-full p-2">
          <Sparkles size={24} className="text-gray-200" />
        </div>
      </div>

      {/* Text */}
      <div className="text-center mb-6">
        <p className="text-lg font-semibold text-gray-700">
          Perfect. Pick a photo for your book.
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Selecting the best photos for your book
        </p>
      </div>

      {/* Image Grid */}
      {photos.length > 0 && (
        <div className="flex gap-4 justify-center flex-wrap mb-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => toggleSelect(photo.id)}
              className={`relative w-24 h-24 rounded-lg bg-gray-200 cursor-pointer 
                          flex items-center justify-center border-2 transition
                ${
                  photo.selected
                    ? "border-gray-700"
                    : "border-transparent hover:border-gray-400"
                }`}
            >
              <img
                src={photo.src}
                alt="Preview"
                className="w-full h-full object-cover rounded-lg"
              />

              {/* Selection Icon */}
              <div className="absolute top-1 right-1 bg-white rounded-full p-1 shadow">
                {photo.selected ? (
                  <Check size={14} className="text-gray-700" />
                ) : (
                  <X size={14} className="text-gray-400" />
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <p className="text-xs text-gray-400 text-center mb-4">
        Choose images that have great resolution
      </p>

      {/* Drag & Drop */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => inputRef.current?.click()}
        className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center text-sm 
                   text-gray-500 flex flex-col items-center gap-2 mb-4 cursor-pointer
                   hover:bg-gray-50 transition"
      >
        <Upload size={18} className="text-gray-400" />
        <span>Drag and drop or click to upload your files</span>

        <input
          ref={inputRef}
          type="file"
          multiple
          accept="image/*"
          className="hidden"
          onChange={(e) => e.target.files && handleFiles(e.target.files)}
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-2 justify-center">
        <button className="px-4 py-2 rounded-full border text-sm bg-white text-gray-600 hover:bg-gray-200">
          Instagram
        </button>
        <button className="px-4 py-2 rounded-full border text-sm bg-white text-gray-600 hover:bg-gray-200">
          Google Photos
        </button>
        <button className="px-4 py-2 rounded-full border text-sm bg-white text-gray-600 hover:bg-gray-200">
          From Device
        </button>
      </div>
    </div>
  );
};

export default PhotoSelection;
