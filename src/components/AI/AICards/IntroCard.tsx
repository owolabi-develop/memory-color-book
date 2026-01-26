import React from "react";
import { Sparkles } from 'lucide-react';


type IntroCardType = {
    text:string;
}

const IntroCard:React.FC<IntroCardType> = ({text}) => {
    // rachel intro section flow 1
  return (
    <div className="flex item-start justify-start gap-3 bg-gray-100 rounded-xl p-2 w-96 h-[14rem]">
           <div className="">
            {/* icon */}
            <div className="border-4 border-gray-400 bg-gray-600 rounded-full p-1">
                <Sparkles size={24} className="text-gray-400"/>
            </div>

             {/* icon */}

        </div>

         <div className="p-1">
            <h1 className="text-lg font-semibold">Hi I'm Rachel</h1>
             <p className="text-base text-gray-500">{text}</p>
             <p className="text-base mt-2">First, what should i call you?</p>
            
        </div>

    </div>
  )
}

export default IntroCard