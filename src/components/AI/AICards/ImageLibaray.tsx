import React, { useRef, useState } from "react";
import { Image as ImageIcon, Plus } from "lucide-react";

type Photo = {
  id: string;
  url: string;
};

const DEMO_COUNT = 24;

const ImageLibrary: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const addMore = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const newPhotos: Photo[] = Array.from(files).map((file, i) => ({
      id: `local-${Date.now()}-${i}`,
      url: URL.createObjectURL(file),
    }));

    setPhotos((prev) => [...prev, ...newPhotos]);
    if (!selectedId && newPhotos[0]) setSelectedId(newPhotos[0].id);
  };

  const managePhotos = () => {
    alert("Manage Photos coming soon");
  };

  return (
    <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg border overflow-hidden">
      {/* Top bar (only close like design) */}
      <div className="relative px-4 py-3">
        <button
          type="button"
          className="absolute right-3 top-3 text-gray-500 hover:text-gray-900"
          aria-label="Close"
          onClick={() => console.log("close")}
        >
          ✕
        </button>
      </div>

      {/* Content area */}
      <div className="px-6 pb-4">
        {/* Scrollable grid like the design */}
        <div className="max-h-[52vh] overflow-y-auto pr-3">
          <div className="grid grid-cols-3 gap-4">
            {photos.length > 0 ? (
              photos.map((photo) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setSelectedId(photo.id)}
                  className={`aspect-square rounded-lg overflow-hidden bg-gray-200 border-2 transition
                    ${
                      selectedId === photo.id
                        ? "border-gray-900"
                        : "border-transparent hover:border-gray-400"
                    }`}
                  aria-pressed={selectedId === photo.id}
                >
                  <img
                    src={photo.url}
                    alt="Uploaded"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))
            ) : (
              Array.from({ length: DEMO_COUNT }).map((_, idx) => (
                <div
                  key={`demo-${idx}`}
                  className={`aspect-square rounded-lg bg-gray-200 flex items-center justify-center ${
                    idx === 0 ? "ring-2 ring-gray-900 ring-offset-0" : ""
                  }`}
                >
                  <ImageIcon size={22} className="text-gray-400 opacity-60" />
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Footer with buttons at the bottom like your screenshot */}
      <div className="border-t bg-white px-6 py-3 flex items-center">
        <p className="flex-1 text-center text-xs text-gray-700">
          {photos.length > 0 ? `${photos.length} images` : "23 images"}
        </p>

        {/* hidden input */}
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => {
            addMore(e.target.files);
            e.currentTarget.value = "";
          }}
        />

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="px-4 py-1.5 rounded-md border text-[11px] bg-white hover:bg-gray-50 transition inline-flex items-center gap-2"
          >
            <Plus size={14} className="text-gray-600" />
            Add More
          </button>

          <button
            type="button"
            onClick={managePhotos}
            className="px-4 py-1.5 rounded-md border text-[11px] bg-white hover:bg-gray-50 transition"
          >
            Manage Photos
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLibrary;
