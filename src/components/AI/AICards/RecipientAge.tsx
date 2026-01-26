import React from "react";
import { Sparkles } from 'lucide-react';




const RecipientAge:React.FC = () => {
    // rachel RecipientAge section flow 6
  return (
    <div className="flex item-start justify-start gap-3 bg-gray-100 rounded-xl p-2 w-96 h-14">
        <div>
            {/* icon */}
            <div className="border-4 border-gray-400 bg-gray-600 rounded-full p-1">
                <Sparkles size={24} className="text-gray-400"/>
            </div>

             {/* icon */}

        </div>

         <div className="py-2">
             <p className="text-base text-gray-500">How old are they?</p>            
        </div>

    </div>
  )
}

export default RecipientAge