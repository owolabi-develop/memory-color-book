import React, { useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

type Tone =
  | "easy"
  | "playful"
  | "heartfelt";

const OneConnect: React.FC = () => {
  const [selected, setSelected] = useState<Tone | null>(null);

  return (
    <div className="w-full max-w-md bg-gray-100 rounded-xl p-6 flex flex-col items-center">

      {/* Icon */}
      <div className="border-4 border-gray-300 bg-gray-500 rounded-full p-2 mb-4">
        <Sparkles size={22} className="text-gray-200" />
      </div>

      {/* Text */}
      <h2 className="text-xl font-serif text-gray-800 text-center">
        One Connected Story. Got it.
      </h2>
      <p className="text-sm text-gray-600 text-center mt-1 mb-6">
        And what tone feels right for this story?
      </p>

      {/* Options */}
      <div className="w-full space-y-3">

        <button
          onClick={() => setSelected("easy")}
          className={`w-full rounded-xl border px-4 py-3 flex items-center justify-between text-sm transition
            ${
              selected === "easy"
                ? "bg-white border-gray-700 shadow-sm"
                : "bg-white border-gray-300 hover:border-gray-500"
            }`}
        >
          <span className="font-medium text-gray-800">Easy & Everyday</span>
          <ArrowRight size={16} className="text-gray-500" />
        </button>

        <button
          onClick={() => setSelected("playful")}
          className={`w-full rounded-xl border px-4 py-3 flex items-center justify-between text-sm transition
            ${
              selected === "playful"
                ? "bg-white border-gray-700 shadow-sm"
                : "bg-white border-gray-300 hover:border-gray-500"
            }`}
        >
          <span className="font-medium text-gray-800">
            Playful & lighthearted
          </span>
          <ArrowRight size={16} className="text-gray-500" />
        </button>

        <button
          onClick={() => setSelected("heartfelt")}
          className={`w-full rounded-xl border px-4 py-3 flex items-center justify-between text-sm transition
            ${
              selected === "heartfelt"
                ? "bg-white border-gray-700 shadow-sm"
                : "bg-white border-gray-300 hover:border-gray-500"
            }`}
        >
          <span className="font-medium text-gray-800">
            Heartfelt & Reflection
          </span>
          <ArrowRight size={16} className="text-gray-500" />
        </button>

      </div>
    </div>
  );
};

export default OneConnect;
