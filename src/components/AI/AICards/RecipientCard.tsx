import React from "react";
import { Sparkles } from 'lucide-react';
import { AIButton } from "../../Buttons";



const RecipientCard: React.FC = () => {
      // rachel recipient flow 3
  return (
    <div className="flex flex-col bg-gray-100 rounded-xl p-4 w-full max-w-sm sm:max-w-md h-auto sm:h-[14rem]">
      <div className="flex items-center justify-center py-2">
        {/* Icon */}
        <div className="border-4 border-gray-400 bg-gray-600 rounded-full p-2">
          <Sparkles size={24} className="text-gray-300" />
        </div>
      </div>

      <div className="text-center space-y-2">
        <p className="text-base text-gray-500 px-2"> Great we can work together</p>
        <p className="text-base text-gray-500 px-2"> Who is this book for?</p>

        {/* Button Control */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3">
          <AIButton title="For me"/>
          <AIButton title="For someone else"/>
         <AIButton title="For a group"/>
        </div>
      </div>
    </div>
  );
};

export default RecipientCard;
