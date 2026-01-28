import React, { useRef, useState } from "react";
import { Sparkles } from "lucide-react";

type CoverMetaCardProps = {
  initialTitle?: string;
  onTitleSave?: (value: string) => void;
  onDateChange?: (value: string) => void;
  onLocationChange?: (value: string) => void;
  thumbSrc?: string;
};

const DEMO_THUMB =
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=120&q=80";

const BookCoverMetaCard: React.FC<CoverMetaCardProps> = ({
  initialTitle = "Lorem ipsum dolor sit amet, consectetur elit.",
  onTitleSave,
  onDateChange,
  onLocationChange,
  thumbSrc = DEMO_THUMB,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [editing, setEditing] = useState(false);

  const [dateValue, setDateValue] = useState("");
  const [locationValue, setLocationValue] = useState("");

  const titleRef = useRef<HTMLInputElement | null>(null);

  const startEdit = () => {
    setEditing(true);
    setTimeout(() => titleRef.current?.focus(), 0);
  };

  const saveEdit = () => {
    setEditing(false);
    onTitleSave?.(title);
  };

  return (
    <div className="w-full max-w-md space-y-4">
      {/* Top Card*/}
      <div className="bg-gray-100 rounded-xl p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="border-4 border-gray-300 bg-gray-500 rounded-full p-2">
              <Sparkles size={14} className="text-gray-200" />
            </div>

            <div className="w-12 h-12 rounded-md border bg-white overflow-hidden">
              <img
                src={thumbSrc}
                alt="thumb"
                className="w-full h-full object-cover grayscale"
              />
            </div>

            <p className="text-xs font-medium text-gray-600 mt-1">
              Cover Image & Book Title
            </p>
          </div>

          {!editing ? (
            <button
              type="button"
              onClick={startEdit}
              className="px-6 py-2 rounded-full border text-xs font-semibold bg-white hover:bg-gray-50 transition"
            >
              Edit
            </button>
          ) : (
            <button
              type="button"
              onClick={saveEdit}
              className="px-6 py-2 rounded-full border text-xs font-semibold bg-gray-800 text-white"
            >
              Save
            </button>
          )}
        </div>

        {!editing ? (
          <p className="mt-4 text-base font-medium text-gray-800">
            {title}
          </p>
        ) : (
          <input
            ref={titleRef}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter book title..."
            className="mt-4 w-64 rounded-xl border bg-white px-4 py-3 text-sm
                       focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        )}
      </div>

      {/* Bottom Card */}
      <div className="bg-gray-100 rounded-xl p-5">
        <div className="flex items-center gap-3">
          <div className="border-4 border-gray-300 bg-gray-500 rounded-full p-2">
            <Sparkles size={14} className="text-gray-200" />
          </div>

          <div className="w-12 h-12 rounded-md border bg-white overflow-hidden">
            <img
              src={thumbSrc}
              alt="thumb"
              className="w-full h-full object-cover grayscale"
            />
          </div>

          <p className="ml-auto text-[11px] text-gray-500">Book Cover</p>
        </div>

        <p className="mt-4 text-base font-medium text-gray-800">
          Now, add your time stamp, or location detail.
        </p>

        {/* Date */}
        <input
          type="date"
          value={dateValue}
          onChange={(e) => {
            setDateValue(e.target.value);
            onDateChange?.(e.target.value);
          }}
          className="mt-4 w-64 rounded-xl border bg-white px-4 py-3 text-sm
                     focus:outline-none focus:ring-2 focus:ring-gray-300"
        />

        {/* Location */}
        <input
          type="text"
          placeholder="Enter a location"
          value={locationValue}
          onChange={(e) => {
            setLocationValue(e.target.value);
            onLocationChange?.(e.target.value);
          }}
          className="mt-3 w-64 rounded-xl border bg-white px-4 py-3 text-sm
                     placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
      </div>
    </div>
  );
};

export default BookCoverMetaCard;
