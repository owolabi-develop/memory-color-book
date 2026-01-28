import React from "react";
import { Sparkles } from "lucide-react";
import { AIButton } from "../../Buttons";

type AIDiyChoiceProps = {
  userName?: string;
  prompt?: string;

  leftOptionText?: string;
  rightOptionText?: string;

  onLeftSelect?: () => void;
  onRightSelect?: () => void;

  className?: string;
};

const AIDiyChoice: React.FC<AIDiyChoiceProps> = ({
  userName = "Nikki",
  prompt = "How would you like to create your book?",

  leftOptionText = "Work Together",
  rightOptionText = "Do it myself",

  onLeftSelect = () => {},
  onRightSelect = () => {},

  className = "",
}) => {
  return (
    <div
      className={`flex flex-col bg-gray-100 rounded-2xl p-5 w-full max-w-md ${className}`}
    >
      {/* Icon */}
      <div className="flex justify-center mb-3">
        <div className="border-4 border-gray-400 bg-gray-600 rounded-full p-2">
          <Sparkles size={22} className="text-gray-300" />
        </div>
      </div>

      {/* Text */}
      <div className="text-center space-y-2">
        <p className="text-base text-gray-700">
          Nice to meet you, <span className="font-semibold">{userName}</span>
        </p>

        <p className="text-sm text-gray-600">{prompt}</p>

        {/* Buttons */}
        <div className="flex flex-wrap sm:flex-nowrap justify-center gap-3 pt-3">
        <AIButton title={leftOptionText} onClick={onLeftSelect} />
        <AIButton title={rightOptionText} onClick={onRightSelect} />
        </div>

      </div>
    </div>
  );
};

export default AIDiyChoice;
