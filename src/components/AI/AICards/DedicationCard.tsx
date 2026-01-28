import React from "react";
import { Sparkles } from "lucide-react";

/* Small white square */
const WhiteBox = () => (
  <div className="w-8 h-8 bg-white rounded-md border shadow-sm" />
);

/* ---------- Left card ---------- */

export const DedicationIntroCard: React.FC = () => {
  return (
    <div className="bg-gray-100 rounded-xl p-5">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="border-4 border-gray-300 bg-gray-500 rounded-full p-2">
            <Sparkles size={14} className="text-gray-200" />
          </div>
          <WhiteBox />
        </div>

        <p className="text-[11px] text-gray-600 mt-1">Dedication</p>
      </div>

      <p className="text-sm text-gray-700 leading-relaxed">
        Now, let’s create a dedication that will turn this book into an
        unforgettable moment for [recipient name]
      </p>
    </div>
  );
};

/* ---------- Right card ---------- */

export const DedicationPromptCard: React.FC = () => {
  return (
    <div className="bg-gray-300 rounded-xl p-5">
      <div className="flex items-start justify-between mb-3">

        {/* LEFT: label */}
        <p className="text-[11px] text-gray-700 mt-1">
          Dedication Prompt
        </p>

        {/* RIGHT: white box + icon */}
        <div className="flex items-center gap-2">
          <WhiteBox />
          <div className="border-4 border-gray-300 bg-gray-500 rounded-full p-2">
            <Sparkles size={14} className="text-gray-200" />
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-800 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Suspendisse varius enim in eros elementum
        tristique.
      </p>
    </div>
  );
};

/* ---------- Main layout ---------- */

const DedicationCreation: React.FC = () => {
  return (
    <div className="w-full max-w-xl space-y-6">
      <DedicationIntroCard />

      {/* offset like design */}
      <div className="flex justify-end">
        <div className="w-full sm:w-[85%]">
          <DedicationPromptCard />
        </div>
      </div>
    </div>
  );
};

export default DedicationCreation;
