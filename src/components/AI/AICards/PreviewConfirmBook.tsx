import React, { useMemo, useState } from "react";
import { LayoutGrid, List, Download, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { IoColorFilterOutline } from "react-icons/io5";

type BookCover = {
  id: string;
  title: string;
  createdOn: string;
  from: string;
  coverImageSrc: string;
};

type PreviewConfirmBookProps = {
  heading?: string;
  books?: BookCover[];

  onDownload?: (book: BookCover) => void;
  onViewModeChange?: (mode: "grid" | "list") => void;
  onCheckout?: (book: BookCover) => void;
  onSelectBook?: (book: BookCover) => void;
};

const DEMO_IMG =
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=80";

const defaultBooks: BookCover[] = [
  {
    id: "b1",
    title: "My favorite day with Dad.",
    createdOn: "Dec 22, 2025",
    from: "Mom & Dad",
    coverImageSrc: DEMO_IMG,
  },
  {
    id: "b2",
    title: "A year to remember.",
    createdOn: "Jan 05, 2026",
    from: "Family",
    coverImageSrc: DEMO_IMG,
  },
  {
    id: "b3",
    title: "Little adventures.",
    createdOn: "Feb 14, 2026",
    from: "Us",
    coverImageSrc: DEMO_IMG,
  },
];

const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * velocity;

const SWIPE_CONFIDENCE_THRESHOLD = 9000;

const cardVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 260 : -260,
    opacity: 0,
    scale: 0.98,
  }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -260 : 260,
    opacity: 0,
    scale: 0.98,
  }),
};

const PreviewConfirmBook: React.FC<PreviewConfirmBookProps> = ({
  heading = "Preview & Confirm Book",
  books,
  onDownload,
  onViewModeChange,
  onCheckout,
  onSelectBook,
}) => {
  const data = useMemo(() => (books?.length ? books : defaultBooks), [books]);

  const [mode, setMode] = useState<"grid" | "list">("grid");
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  const active = data[index];

  const paginate = (newDirection: number) => {
    setIndex(([prev]) => {
      const next = (prev + newDirection + data.length) % data.length;
      return [next, newDirection];
    });
  };

  const setViewMode = (m: "grid" | "list") => {
    setMode(m);
    onViewModeChange?.(m);
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
      {/* Header */}
      <div className="w-full flex items-center justify-center relative mb-6">
        <h2 className="text-xl font-semibold text-gray-900">{heading}</h2>

        {/* Top-right controls */}
        <div className="absolute right-0 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setViewMode("grid")}
            className={`w-9 h-9 rounded-md border bg-white flex items-center justify-center hover:bg-gray-50 ${
              mode === "grid" ? "border-gray-900" : "border-gray-300"
            }`}
            aria-label="Grid view"
          >
            <LayoutGrid size={16} className="text-gray-700" />
          </button>

          <button
            type="button"
            onClick={() => setViewMode("list")}
            className={`w-9 h-9 rounded-md border bg-white flex items-center justify-center hover:bg-gray-50 ${
              mode === "list" ? "border-gray-900" : "border-gray-300"
            }`}
            aria-label="List view"
          >
            <List size={16} className="text-gray-700" />
          </button>

          <button
            type="button"
            onClick={() => onDownload?.(active)}
            className="w-9 h-9 rounded-md border border-gray-300 bg-white flex items-center justify-center hover:bg-gray-50"
            aria-label="Download"
          >
            <Download size={16} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Stack area */}
      <div className="w-full flex items-center justify-center gap-6">
        <div className="relative">
          {/* back stack layers */}
          <div className="absolute inset-0 translate-x-3 translate-y-2 rounded-2xl border border-gray-300 bg-gray-100" />
          <div className="absolute inset-0 translate-x-2 translate-y-1 rounded-2xl border border-gray-300 bg-gray-100" />

          {/* swipe stage */}
          <div className="relative w-[320px] h-[320px]">
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
                  x: { type: "spring", stiffness: 520, damping: 40 },
                  opacity: { duration: 0.18 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.35}
                onDragEnd={(_, info) => {
                  const swipe = swipePower(info.offset.x, info.velocity.x);

                  if (swipe > SWIPE_CONFIDENCE_THRESHOLD && info.offset.x > 0) {
                    paginate(-1);
                    return;
                  }
                  if (swipe > SWIPE_CONFIDENCE_THRESHOLD && info.offset.x < 0) {
                    paginate(1);
                    return;
                  }
                }}
                onClick={() => onSelectBook?.(active)}
                className="absolute inset-0 bg-gray-100 rounded-2xl border border-gray-400 shadow-sm overflow-hidden"
                aria-label="Book preview (swipe left/right)"
              >


                {/* inner border frame */}
                <div className="absolute inset-4 rounded-xl" />

              
                <div className="relative h-full w-full flex flex-col items-center justify-center px-6 -translate-y-3">
                  <p className="text-base font-semibold text-gray-900 text-center">
                    {active.title}
                  </p>

                  {/* image slightly lower */}
                  <div className="mt-7 w-24 h-24 rounded-lg overflow-hidden border bg-white/60">
                    <img
                      src={active.coverImageSrc}
                      alt="Book cover"
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                </div>

                {/* Meta */}
                <div className="absolute left-10 bottom-14 text-[11px] text-gray-700">
                  <div className="font-medium">Created on</div>
                  <div className="font-semibold">{active.createdOn}</div>
                </div>

                <div className="absolute right-10 bottom-14 text-[11px] text-gray-700 text-right">
                  <div className="font-medium">From</div>
                  <div className="font-semibold">{active.from}</div>
                </div>

                {/* Bottom corner buttons */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    paginate(-1);
                  }}
                  className="absolute left-6 bottom-6 w-8 h-8 rounded-lg border border-gray-300 bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                  aria-label="Previous book"
                >
                  <IoColorFilterOutline size={16} className="text-gray-700" />
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    paginate(1);
                  }}
                  className="absolute right-6 bottom-6 w-8 h-8 rounded-lg border border-gray-300 bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                  aria-label="Next book"
                >
                  <IoColorFilterOutline size={16} className="text-gray-700" />
                </button>
              </motion.button>
            </AnimatePresence>
          </div>
        </div>

        {/* Right arrow */}
        <button
          type="button"
          onClick={() => paginate(1)}
          className="w-14 h-14 rounded-xl border border-gray-300 bg-white shadow-sm hover:bg-gray-50 flex items-center justify-center"
          aria-label="Next (swipe)"
        >
          <ArrowRight size={22} className="text-gray-700" />
        </button>
      </div>

      {/* Bottom checkout card */}
      <div className="w-full max-w-lg mt-10 bg-white rounded-2xl shadow-sm p-3 text-center min-h-24 shadow-md">
        <p className="text-sm font-semibold text-gray-800">
          Finalize your books design and place order
        </p>

        <button
          type="button"
          onClick={() => onCheckout?.(active)}
          className="mt-4 px-10 py-1 rounded-full bg-gray-700 text-white font-semibold hover:bg-gray-800 transition whitespace-nowrap"
        >
          Check out
        </button>
      </div>
    </div>
  );
};

export default PreviewConfirmBook;
