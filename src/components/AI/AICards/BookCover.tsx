import React, { useRef, useState } from "react";
import { Sparkles } from "lucide-react";

type BookCoverProps = {
  initialDedication?: string;
  initialCoverImage?: string;

  onDedicationSave?: (text: string) => void;
  onCoverSelect?: (file: File, preview: string) => void;
};

const DEMO_DEDICATION =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.";

const DEMO_COVER =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80";

const BookCover: React.FC<BookCoverProps> = ({
  initialDedication = DEMO_DEDICATION,
  initialCoverImage = DEMO_COVER,
  onDedicationSave,
  onCoverSelect,
}) => {
  const [dedication, setDedication] = useState(initialDedication);
  const [isEditing, setIsEditing] = useState(false);

  const [coverImage, setCoverImage] = useState(initialCoverImage);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const handleSaveDedication = () => {
    setIsEditing(false);
    onDedicationSave?.(dedication);
  };

  const handlePickCover = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const file = files[0];
    const preview = URL.createObjectURL(file);

    setCoverImage(preview);
    onCoverSelect?.(file, preview);
  };

  return (
    <div className="w-full max-w-md space-y-4">
      {/*Dedication card */}
      <div className="bg-gray-100 rounded-xl p-5">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="border-4 border-gray-300 bg-gray-500 rounded-full p-2 shrink-0">
              <Sparkles size={14} className="text-gray-200" />
            </div>

            <div className="w-10 h-10 bg-white rounded-md border" />

            <p className="text-xs font-medium text-gray-600 mt-1">
              Dedication
            </p>
          </div>

          {!isEditing && (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="px-4 py-1.5 rounded-full border text-xs font-medium bg-white hover:bg-gray-50 transition"
            >
              Edit
            </button>
          )}
        </div>

        {!isEditing ? (
          <p className="mt-3 text-sm text-gray-700 leading-relaxed">
            {dedication}
          </p>
        ) : (
          <div className="mt-3 space-y-2">
            <textarea
              value={dedication}
              onChange={(e) => setDedication(e.target.value)}
              className="w-full min-h-[110px] rounded-lg border bg-white px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none"
            />

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-3 py-1.5 rounded-full border text-xs bg-white"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveDedication}
                className="px-3 py-1.5 rounded-full border text-xs bg-gray-800 text-white"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Book cover card*/}
      <div className="bg-gray-100 rounded-xl p-5">
        <div className="flex items-start gap-3">
          <div className="border-4 border-gray-300 bg-gray-500 rounded-full p-2 shrink-0">
            <Sparkles size={14} className="text-gray-200" />
          </div>

          <div className="w-10 h-10 bg-white rounded-md border overflow-hidden">
            <img
              src={coverImage}
              alt="Cover thumb"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-xs font-medium text-gray-600 mt-1">
            Book Cover
          </p>
        </div>

        <p className="mt-3 text-sm text-gray-700">
          Now, select a cover photo and create a title for your book
        </p>

        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            handlePickCover(e.target.files);
            e.currentTarget.value = "";
          }}
        />

        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="mt-4 px-8 py-2 rounded-full border text-xs font-semibold bg-white hover:bg-gray-50 transition"
        >
          Select Photo
        </button>
      </div>
    </div>
  );
};

export default BookCover;
