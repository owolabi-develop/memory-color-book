import React from "react";
import { Sparkles } from 'lucide-react';
import { ArrowRight } from 'lucide-react';



const PreviewSelection: React.FC = () => {
    // Rachel Preview
 

  return (
    <div className=" w-96 bg-gray-100 rounded-xl p-4 h-80 md:h-64">
      <div className="flex items-center justify-center py-2">
        <div className="border-4 border-gray-400 bg-gray-600 rounded-full p-2">
          <Sparkles size={24} className="text-gray-300" />
        </div>
      </div>

      <div className="text-center h-full">
        <p className="text-lg text-gray-600 px-2 bold">
        I can already picture how beautiful this is going to be.
        </p>
        <p className="text-base text-gray-500 px-2">
         Want to see a quick preview of what we can create together, or should we keep building your book?
        </p>

       
       

        {/* Button Control */}
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-1 mt-2">
          
                    <button type="button"
                    className={`px-2 py-1 md:px-4 md:py-2 rounded-lg border text-sm font-medium transition flex items-center justify-between bg-white text-gray-700 border-gray-300 hover:bg-gray-100 md:whitespace-nowrap `}
                    ><span> Let's keep going</span> <span className="ml-2 hidden md:block"> <ArrowRight size={18} /></span>
                    </button>

                    <button type="button"
                    className={`px-2 py-1 md:px-4 md:py-2 rounded-lg border text-sm font-medium transition flex items-center justify-between bg-white text-gray-700 border-gray-300 hover:bg-gray-100 md:whitespace-nowrap `}
                    ><span> Show me a preview</span> <span className="ml-2 hidden md:block"> <ArrowRight size={18} /></span>
                    </button>
           
            </div>

       {/* Button controls */}
      </div>
    </div>
  );
};

export default PreviewSelection;

