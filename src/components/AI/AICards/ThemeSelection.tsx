import React, {useState} from "react";
import { Sparkles } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

type SelectedTheme = {
  theme: string;
};

const THEMES: readonly string[] = [
  "Family Memories",
  "Year in Review",
  "Birthday",
  "Pet Stories",
  "FriendShips",
  "Legacy & Grief",
  "Celebrations",
  "Travel Adventures",
  "SomeThing else",
];

const ThemeSelection: React.FC = () => {
  const [selected, setSelected] = useState<SelectedTheme | null>(null);

  return (
    <div className="bg-gray-100 rounded-xl p-4 h-96 md:h-auto">
      <div className="flex items-center justify-center py-2">
        <div className="border-4 border-gray-400 bg-gray-600 rounded-full p-2">
          <Sparkles size={24} className="text-gray-300" />
        </div>
      </div>

      <div className="text-center space-y-2 h-full">
        <p className="text-base text-gray-500 px-2">
          Let's pick a theme that best fits what
        </p>
        <p className="text-base text-gray-500 px-2">
          you're creating. Select one:
        </p>

       
       

        {/* Button Control */}
            <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-1 mt-2">
            {THEMES.map((theme) => {
            const isActive = selected?.theme === theme;

            return (
                    <button
                    key={theme}
                    type="button"
                    onClick={() => setSelected({ theme })}
                    className={` px-2 py-1 md:px-4 md:py-2 rounded-lg border text-sm font-medium transition flex items-center justify-between ${ isActive? "bg-black text-white border-black md:whitespace-nowrap": "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 md:whitespace-nowrap"
                    }
                    `}
                    ><span>{theme}</span> <span className="ml-2 hidden md:block"> <ArrowRight size={18} /></span>
                    </button>
            );
            })}
            </div>

       {/* Button controls */}
      </div>
    </div>
  );
};

export default ThemeSelection;

