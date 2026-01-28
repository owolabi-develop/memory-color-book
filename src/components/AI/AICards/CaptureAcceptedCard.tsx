import React, { useRef, useState } from "react";
import { Sparkles, Check, X as XIcon } from "lucide-react";

type Photo = {
  id: string;
  url: string;
};

type CaptionCardProps = {
  initialCurrent?: number;
  initialTotal?: number;
  initialImageSrc?: string;
  initialCaption?: string;
};

const DEMO_IMAGE =
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=300&q=80";

const DEMO_CAPTION =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.";

const makeDemoPhotos = (): Photo[] => [
  { id: "1", url: "https://via.placeholder.com/300" },
  { id: "2", url: "https://via.placeholder.com/301" },
  { id: "3", url: "https://via.placeholder.com/302" },
  { id: "4", url: "https://via.placeholder.com/303" },
  { id: "5", url: "https://via.placeholder.com/304" },
  { id: "6", url: "https://via.placeholder.com/305" },
];

const CaptionCard: React.FC<CaptionCardProps> = ({
  initialCurrent = 1,
  initialTotal = 11,
  initialImageSrc = DEMO_IMAGE,
  initialCaption = DEMO_CAPTION,
}) => {
  
  const [current] = useState(initialCurrent);
  const [total] = useState(initialTotal);
  const [imageSrc, setImageSrc] = useState(initialImageSrc);
  const [caption, setCaption] = useState(initialCaption);
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(caption);
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>(makeDemoPhotos());
  const fileRef = useRef<HTMLInputElement | null>(null);

  const openEdit = () => {
    setDraft(caption);
    setIsEditing(true);
  };

  const saveEdit = () => {
    setCaption(draft.trim() ? draft : caption);
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setDraft(caption);
    setIsEditing(false);
  };

  const openLibrary = () => setIsLibraryOpen(true);

  const selectPhoto = (p: Photo) => {
    setImageSrc(p.url);
    setIsLibraryOpen(false);
  };

  const addMore = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const newPhotos: Photo[] = Array.from(files).map((file, i) => ({
      id: `local-${Date.now()}-${i}`,
      url: URL.createObjectURL(file),
    }));

    setPhotos((prev) => [...newPhotos, ...prev]);
  };

  return (
    <div className="w-full max-w-md space-y-4">
      {/* Top card */}
      <div className="bg-gray-100 rounded-xl p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <img
              src={imageSrc}
              alt={`Caption ${current}`}
              className="w-12 h-12 rounded-lg object-cover grayscale"
            />

            <p className="text-xs text-gray-600 mt-1">
              Caption {current}/{total}
            </p>
          </div>

         
          <button
            type="button"
            onClick={openEdit}
            className="px-4 py-1.5 rounded-full border text-xs font-medium bg-white hover:bg-gray-50 transition"
          >
            Edit
          </button>
        </div>

      
        {!isEditing ? (
          <p className="mt-3 text-sm text-gray-700 leading-relaxed">{caption}</p>
        ) : (
          <div className="mt-3 space-y-2">
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              className="w-full min-h-[90px] resize-none rounded-lg border bg-white px-3 py-2 text-sm text-gray-700
                         focus:outline-none focus:ring-2 focus:ring-gray-300"
            />

            <div className="flex items-center gap-2 justify-end">
              <button
                type="button"
                onClick={cancelEdit}
                className="px-3 py-1.5 rounded-full border text-xs bg-white hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={saveEdit}
                className="px-3 py-1.5 rounded-full border text-xs bg-gray-800 text-white hover:bg-gray-700"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom prompt */}
      <div className="bg-gray-100 rounded-xl p-4 flex items-start gap-3">
        <div className="border-4 border-gray-300 bg-gray-500 rounded-full p-2 shrink-0">
          <Sparkles size={16} className="text-gray-200" />
        </div>

        <div>
          <p className="text-xs text-gray-700">
            OK, select your 2nd photo and tell me about it.
          </p>

          
          <button
            type="button"
            onClick={openLibrary}
            className="mt-3 px-6 py-1.5 rounded-full border text-xs font-semibold bg-white hover:bg-gray-50 transition"
          >
            Select Photo
          </button>
        </div>
      </div>

      {isLibraryOpen && (
        <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
          {/* header */}
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <p className="text-xs font-medium text-gray-700">Photo Library</p>
            <button
              type="button"
              onClick={() => setIsLibraryOpen(false)}
              className="p-1 rounded-md hover:bg-gray-100"
              aria-label="Close library"
            >
              <XIcon size={16} />
            </button>
          </div>

          {/* grid */}
          <div className="p-4 max-h-[260px] overflow-y-auto">
            <div className="grid grid-cols-3 gap-3">
              {photos.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => selectPhoto(p)}
                  className="relative aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-gray-400 transition"
                >
                  <img
                    src={p.url}
                    alt="Option"
                    className="w-full h-full object-cover grayscale"
                  />
                  {p.url === imageSrc && (
                    <span className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center">
                      <Check size={14} className="text-white" />
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* footer */}
          <div className="px-4 py-3 border-t flex items-center justify-between">
            <p className="text-xs text-gray-600">{photos.length} images</p>

            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={(e) => {
                addMore(e.target.files);
                e.currentTarget.value = "";
              }}
            />

            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="px-3 py-1.5 rounded-md border text-xs bg-white hover:bg-gray-50"
            >
              Add More
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaptionCard;
