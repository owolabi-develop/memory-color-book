import React, { useState } from "react";
import { Sparkles } from "lucide-react";

type FormatOption = "simple" | "connected";

const StoryFormat: React.FC = () => {
  const [selected, setSelected] = useState<FormatOption | null>(null);

  return (
    <div className="w-full max-w-md bg-gray-100 rounded-xl p-6 flex flex-col items-center">

      {/* Icon */}
      <div className="border-4 border-gray-300 bg-gray-500 rounded-full p-2 mb-4">
        <Sparkles size={22} className="text-gray-200" />
      </div>

      {/* Text */}
      <h2 className="text-xl font-serif text-gray-800 text-center">
        That sounds perfect
      </h2>
      <p className="text-sm text-gray-600 text-center mt-1 mb-6">
        Now, how do you want this story to unfold?
      </p>

      {/* Options */}
      <div className="w-full space-y-3">

        <button
          onClick={() => setSelected("simple")}
          className={`w-full rounded-xl border px-4 py-3 text-sm text-center transition
            ${
              selected === "simple"
                ? "bg-white border-gray-700 shadow-sm"
                : "bg-white border-gray-300 hover:border-gray-500"
            }`}
        >
          <p className="font-medium text-gray-800">Simple & Sweet</p>
          <p className="text-xs text-gray-500 mt-1">
            Just a few perfect words for each photo
          </p>
        </button>

        <button
          onClick={() => setSelected("connected")}
          className={`w-full rounded-xl border px-4 py-3 text-sm text-center transition
            ${
              selected === "connected"
                ? "bg-white border-gray-700 shadow-sm"
                : "bg-white border-gray-300 hover:border-gray-500"
            }`}
        >
          <p className="font-medium text-gray-800">One Connected Story</p>
          <p className="text-xs text-gray-500 mt-1">
            Captions that flow together like chapters in one story
          </p>
        </button>

      </div>
    </div>
  );
};

export default StoryFormat;
