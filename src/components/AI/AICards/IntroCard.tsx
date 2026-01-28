import React from "react";
import { Sparkles } from "lucide-react";

type IntroCardProps = {
  title?: string;
  description?: string;
  question?: string;
  className?: string;
};

const IntroCard: React.FC<IntroCardProps> = ({
  title = "Hi, I'm Rachel",
  description = `I help people turn photos into memory coloring books when they're not sure what to say. Think of me as your friend with the good printer and better words.`,
  question = "First, what should I call you?",
  className = "",
}) => {
  return (
    <div
      className={`flex items-start gap-4 bg-gray-100 rounded-2xl p-5 w-full max-w-md ${className}`}
    >
      {/* Icon */}
      <div className="shrink-0">
        <div className="border-4 border-gray-400 bg-gray-600 rounded-full p-2">
          <Sparkles size={20} className="text-gray-300" />
        </div>
      </div>

      {/* Text */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>

        <p className="text-sm leading-relaxed text-gray-600">
          {description}
        </p>

        <p className="text-sm font-medium text-gray-900">{question}</p>
      </div>
    </div>
  );
};

export default IntroCard;
