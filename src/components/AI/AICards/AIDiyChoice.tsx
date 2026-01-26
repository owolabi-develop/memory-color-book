import React from "react";
import { Sparkles } from 'lucide-react';
import { AIButton } from "../../Buttons";


type AIDiyChoiceType = {
    text:string;
}

const AIDiyChoice: React.FC<AIDiyChoiceType> = ({ text }) => {
      // rachel vs DIY flow 2
  return (
    <div className="flex flex-col bg-gray-100 rounded-xl p-4 w-full max-w-sm sm:max-w-md h-auto sm:h-[14rem]">
      <div className="flex items-center justify-center py-2">
        {/* Icon */}
        <div className="border-4 border-gray-400 bg-gray-600 rounded-full p-2">
          <Sparkles size={24} className="text-gray-300" />
        </div>
      </div>

      <div className="text-center space-y-2">
        <p className="text-base text-gray-500 px-2">
            Nice to meet you, {text}</p>
        <p className="text-base text-gray-500 px-2"> How would you like to create your book?</p>

        {/* Button Control */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <AIButton title="Work Together"/>
          <AIButton title="Do it myself"/>
        </div>
      </div>
    </div>
  );
};

export default AIDiyChoice;
