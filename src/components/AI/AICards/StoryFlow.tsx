import React, { useMemo, useState } from "react";
import { Sparkles, GripHorizontal } from "lucide-react";
import { IoColorFilterOutline } from "react-icons/io5";

export type StoryFlowItem = {
  id: string;
  title?: string;
  text: string;
  imageSrc?: string;
};

type StoryFlowProps = {
  items?: StoryFlowItem[];
  headerText?: string;
  onSelectItem?: (item: StoryFlowItem) => void;
};

const DEMO_IMAGE =
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=500&q=80";

const defaultItems: StoryFlowItem[] = [
  { id: "1", title: "Cover Title", text: "Lorem ipsum dolor amat sit", imageSrc: DEMO_IMAGE },
  {
    id: "2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Suspendisse varius en.",
    imageSrc: DEMO_IMAGE,
  },
  {
    id: "3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Suspendisse varius en.",
    imageSrc: DEMO_IMAGE,
  },
  {
    id: "4",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Suspendisse varius en.",
    imageSrc: DEMO_IMAGE,
  },
];

const StoryFlow: React.FC<StoryFlowProps> = ({
  items,
  headerText = "Fantastic work! Now, confirm the story flow.",
  onSelectItem,
}) => {
  const initial = useMemo(() => (items?.length ? items : defaultItems), [items]);
  const [list] = useState<StoryFlowItem[]>(initial);

  return (
    <div className="w-full max-w-4xl bg-gray-100 rounded-2xl border p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="border-4 border-gray-300 bg-gray-500 rounded-full p-2 shrink-0">
          <Sparkles size={16} className="text-gray-200" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">{headerText}</h2>
      </div>

      {/* Rows */}
      <div className="space-y-5">
        {list.map((item, idx) => (
          <div key={item.id} className="flex items-stretch gap-4">
            {/* index number */}
            <div className="w-10 flex items-center justify-center text-lg font-semibold text-gray-900">
              {idx + 1}
            </div>

          
            <button
              type="button"
              onClick={() => onSelectItem?.(item)}
              className="flex-1 bg-white rounded-2xl border shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden text-left"
            >
              <div className="flex items-stretch">
                {/* left icon area (inside card) */}
                <div className="w-16 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-xl border bg-gray-200 flex items-center justify-center">
                    <IoColorFilterOutline className="text-gray-700 font-" size={18} />
                  </div>
                </div>

                {/* gray content (inside card) */}
                <div className="flex-1 p-6 bg-gray-100 m-2 rounded-xl">
                  {item.title && (
                    <p className="text-sm text-gray-700 mb-1">{item.title}</p>
                  )}
                  <p className="text-base text-gray-900 font-medium leading-relaxed">
                    {item.text}
                  </p>
                </div>

               
                <div className="w-56 p-4 flex items-center justify-center">
                  <div className="w-full h-28 rounded-xl overflow-hidden bg-gray-200">
                    <img
                      src={item.imageSrc || DEMO_IMAGE}
                      alt="preview"
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                </div>

              
                <div className="w-14 flex items-center justify-center">
                  <GripHorizontal size={22} className="text-gray-600" />
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryFlow;
