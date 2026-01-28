import React, { useMemo, useState } from "react";
import { LayoutGrid, List, Download } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { IoColorFilterOutline } from "react-icons/io5";
import ThemeImage from "../../../assets/theme.jpg"

type SpreadCard = {
  id: string;
  leftText: string;
  leftImageSrc: string;   
  rightImageSrc: string; 
};

type PreviewConfirmStackProps = {
  heading?: string;
  cards?: SpreadCard[];

  onGrid?: () => void;
  onList?: () => void;
  onDownload?: (active: SpreadCard) => void;

  footerText?: string;
  ctaText?: string;
  onCheckout?: (active: SpreadCard) => void;

  onSelect?: (active: SpreadCard) => void;
};

const DEMO_RIGHT =
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=80";
const DEMO_LEFT =ThemeImage;

const defaultCards: SpreadCard[] = [
  {
    id: "c1",
    leftText:
      "My favorite day\nwith Dad. Just us\ntwo in a boat, in\nCentral Park",
    leftImageSrc: DEMO_LEFT,
    rightImageSrc: DEMO_RIGHT,
  },
  {
    id: "c2",
    leftText: "A tiny moment\nthat became a\nbig memory.",
    leftImageSrc: DEMO_LEFT,
    rightImageSrc: DEMO_RIGHT,
  },
  {
    id: "c3",
    leftText: "The day we\nlaughed until\nour cheeks hurt.",
    leftImageSrc: DEMO_LEFT,
    rightImageSrc: DEMO_RIGHT,
  },
];

const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * velocity;

const SWIPE_CONFIDENCE_THRESHOLD = 9000;

const cardVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 220 : -220,
    opacity: 0,
    scale: 0.985,
  }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -220 : 220,
    opacity: 0,
    scale: 0.985,
  }),
};

const PreviewConfirmStack: React.FC<PreviewConfirmStackProps> = ({
  heading = "Preview & Confirm Book",
  cards,

  onGrid,
  onList,
  onDownload,

  footerText = "Finalize your books design and place order",
  ctaText = "Check out",
  onCheckout,

  onSelect,
}) => {
  const data = useMemo(() => (cards?.length ? cards : defaultCards), [cards]);

  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);
  const active = data[index];

  const paginate = (dir: number) => {
    setIndex(([prev]) => {
      const next = (prev + dir + data.length) % data.length;
      return [next, dir];
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
      {/* Header */}
      <div className="w-full flex items-center justify-center relative mb-4">
        <h2 className="text-base md:text-lg font-semibold text-gray-900">
          {heading}
        </h2>

        <div className="absolute right-0 flex items-center gap-2">
          <button
            type="button"
            onClick={onGrid}
            className="w-8 h-8 rounded-md border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50"
            aria-label="Grid"
          >
            <LayoutGrid size={14} className="text-gray-700" />
          </button>

          <button
            type="button"
            onClick={onList}
            className="w-8 h-8 rounded-md border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50"
            aria-label="List"
          >
            <List size={14} className="text-gray-700" />
          </button>

          <button
            type="button"
            onClick={() => onDownload?.(active)}
            className="w-8 h-8 rounded-md border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50"
            aria-label="Download"
          >
            <Download size={14} className="text-gray-700" />
          </button>
        </div>
      </div>

     
      <div className="w-full flex justify-center">
        <div className="relative w-[720px] max-w-[92%] h-[260px] flex gap-0">
          {/* LEFT STACK */}
          <div className="relative w-1/2 h-full">
            <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-l-2xl border border-gray-300 bg-gray-100 shadow-sm" />
            <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-l-2xl border border-gray-300 bg-gray-100 shadow-sm" />

            <div className="absolute inset-0 rounded-l-2xl overflow-hidden border border-gray-400 bg-white shadow-md">
              <img
                src={active.leftImageSrc}
                alt="Left page theme"
                className="absolute inset-0 w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-white/20" />

              <div className="relative z-10 h-full flex items-center justify-center p-6">
                <p className="text-center whitespace-pre-line font-semibold text-gray-900 text-base leading-snug drop-shadow-sm">
                  {active.leftText}
                </p>
              </div>

              <div className="absolute bottom-3 left-3 w-9 h-9 rounded-lg border border-gray-300 bg-gray-200 shadow-sm p-1">
              <IoColorFilterOutline size={24} className="font-bold"/>
              </div>
            </div>
          </div>

          {/* RIGHT STACK */}
          <div className="relative w-1/2 h-full">
            <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-r-2xl border border-gray-300 bg-gray-100 shadow-sm" />
            <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-r-2xl border border-gray-300 bg-gray-100 shadow-sm" />

            {/* swipe stage lives on the RIGHT so drag still works */}
            <AnimatePresence initial={false} custom={direction}>
              <motion.button
                key={active.id}
                type="button"
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 520, damping: 42 },
                  opacity: { duration: 0.18 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.35}
                onDragEnd={(_, info) => {
                  const swipe = swipePower(info.offset.x, info.velocity.x);
                  if (swipe > SWIPE_CONFIDENCE_THRESHOLD && info.offset.x < 0) {
                    paginate(1);
                    return;
                  }
                  if (swipe > SWIPE_CONFIDENCE_THRESHOLD && info.offset.x > 0) {
                    paginate(-1);
                    return;
                  }
                }}
                onClick={() => onSelect?.(active)}
                className="absolute inset-0 rounded-r-2xl overflow-hidden border border-gray-400 bg-white shadow-md"
                aria-label="Right page (swipe)"
              >
                <img
                  src={active.rightImageSrc}
                  alt="Right page image"
                  className="absolute inset-0 w-full h-full object-cover grayscale"
                />

                <div className="absolute bottom-3 right-3 w-9 h-9 rounded-lg border border-gray-300 bg-gray-200 shadow-sm p-1">
                      <IoColorFilterOutline size={24} className="font-bold"/>
                </div>
              </motion.button>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Footer checkout card */}
      <div className="w-full max-w-xl mt-10 bg-white rounded-2xl border shadow-sm p-6 text-center">
        <p className="text-sm font-semibold text-gray-600">{footerText}</p>

        <button
          type="button"
          onClick={() => onCheckout?.(active)}
          className="mt-2 px-10 py-1 rounded-full bg-gray-700 text-white font-semibold hover:bg-gray-800 transition"
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
};

export default PreviewConfirmStack;
