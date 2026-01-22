import React from 'react';
import { ChevronRight, Image } from 'lucide-react';

interface TimelineItem {
  id: number;
  date: string;
  title: string;
  description: string;
  image: string | null;
}

const BookTimeLine: React.FC = () => {
  // Sample timeline data - replace with actual data
  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      date: 'Date',
      title: 'Short heading here',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: null,
    },
    {
      id: 2,
      date: 'Date',
      title: 'Short heading here',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: null,
    },
    {
      id: 3,
      date: 'Date',
      title: 'Short heading here',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: null,
    },
    {
      id: 4,
      date: 'Date',
      title: 'Short heading here',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: null,
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6 md:py-8">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <p className="text-base font-medium text-gray-500 mb-1 font-medium">Progress</p>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Unfinished stories waiting for your touch
        </h1>
        <p className="text-gray-600 text-sm mb-4">
          Your creative process is unique. Each book tells a different story.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="px-4 py-1.5 bg-white border border-gray-300 rounded-xl text-sm font-medium text-gray-900 hover:bg-black hover:text-white transition-colors">
            Resume
          </button>
          <button className="px-4 py-1.5 bg-white border border-gray-300 rounded-xl text-sm font-medium text-gray-900  transition-colors flex items-center gap-1 hover:bg-black hover:text-white">
            View
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {timelineItems.map((item, index) => (
          <div key={item.id} className="flex gap-3 md:gap-4 relative m-5">
            {/* Timeline Line */}
            <div className="flex flex-col items-center flex-shrink-0">
              {/* Dot */}
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-1.5"></div>
              {/* Line - extends full height of card */}
              {index < timelineItems.length - 1 && (
                <div className="w-0.5 bg-gray-900 absolute top-3 left-[3.5px]" style={{ height: 'calc(100% + 0.75rem)' }}></div>
              )}
            </div>

            {/* Content Card */}
            <div className="flex-grow pb-3 md:pb-4 last:pb-0">
              <div className="bg-white border border-gray-200 rounded-md overflow-hidden hover:shadow-sm transition-shadow">
                {/* Card Content */}
                <div className="p-4">
                  <p className="text-base font-semibold text-black mb-1">
                    {item.date}
                  </p>
                  <h4 className="text-base font-bold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed mb-3 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mb-3">
                    <button className="px-2.5 py-0.5 bg-white border border-gray-300 rounded-xl text-xs font-medium text-gray-900 hover:bg-black hover:text-white transition-colors">
                      Button
                    </button>
                    <button className="px-2.5 py-2 bg-white text-xs font-medium text-gray-900 transition-colors flex items-center gap-1">
                      Button
                      <ChevronRight className="w-2.5 h-2.5" />
                    </button>
                  </div>

                  {/* Image Placeholder */}
                  <div className="bg-gray-200 rounded h-56 flex items-center justify-center">
                    <Image className="w-10 h-10 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookTimeLine;