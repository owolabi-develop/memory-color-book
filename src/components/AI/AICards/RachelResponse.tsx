import React, { useState } from "react";
import { Sparkles, Plus, Check } from "lucide-react";

type Response = {
  id: number;
  text: string;
};

const DEMO_IMAGE =
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=300&q=80";

const responses: Response[] = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
];

const RachelResponse: React.FC = () => {
  
  const [selectedId, setSelectedId] = useState<number | null>(null);

 
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleSelect = (res: Response) => {
    setSelectedId(res.id);
    setSelectedValue(res.text);
  };

  return (
    <div className="w-full max-w-md space-y-4">
      {/* Top card */}
      <div className="bg-gray-100 rounded-2xl p-4 flex items-start gap-3">
        <div className="border-4 border-gray-300 bg-gray-500 rounded-full p-2 shrink-0">
          <Sparkles size={18} className="text-gray-200" />
        </div>

        <img
          src={DEMO_IMAGE}
          alt="Story"
          className="w-12 h-12 rounded-lg object-cover grayscale"
        />

        <div>
          <p className="text-sm font-medium text-gray-800">
            What a beautiful picture and story!
          </p>
          <p className="text-xs text-gray-600 mt-1">
            How does this sound? Select one
          </p>
        </div>
      </div>

      {/* Options */}
      {responses.map((res) => {
        const isSelected = selectedId === res.id;

        return (
          <button
            key={res.id}
            type="button"
            onClick={() => handleSelect(res)}
            className={`w-full text-left rounded-2xl border p-4 flex items-center justify-between transition
              ${
                isSelected
                  ? "bg-white border-gray-800 shadow-sm"
                  : "bg-gray-100 border-gray-300 hover:border-gray-500"
              }`}
            aria-pressed={isSelected}
          >
            <p className="text-sm text-gray-700 leading-relaxed">{res.text}</p>

            <span
              className={`ml-3 w-8 h-8 rounded-full border flex items-center justify-center shrink-0
                ${isSelected ? "bg-gray-800 border-gray-800" : "bg-white border-gray-300"}`}
              aria-hidden="true"
            >
              {isSelected ? (
                <Check size={16} className="text-white" />
              ) : (
                <Plus size={16} className="text-gray-600" />
              )}
            </span>
          </button>
        );
      })}

     <div className="text-xs text-gray-500">
        <span className="font-medium">Selected:</span>{" "}
        {selectedValue ? selectedValue : "None"}
      </div>
    </div>
  );
};

export default RachelResponse;

