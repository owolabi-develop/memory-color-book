import React, { useMemo, useState } from "react";
import { Sparkles } from "lucide-react";

type Swatch = {
  id: string;
  swatchBg: string;   
  bookBg: string;    
  innerBorder: string; 
};

const DEMO_IMAGE =
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80";

const ColorFinishScheme: React.FC = () => {
  const swatches: Swatch[] = useMemo(
    () => [
      { id: "pink", swatchBg: "bg-rose-200", bookBg: "bg-rose-200", innerBorder: "border-rose-300" },
      { id: "sky", swatchBg: "bg-sky-200", bookBg: "bg-sky-200", innerBorder: "border-sky-300" },
      { id: "lilac", swatchBg: "bg-fuchsia-200", bookBg: "bg-fuchsia-200", innerBorder: "border-fuchsia-300" },
      { id: "blue", swatchBg: "bg-blue-300", bookBg: "bg-blue-300", innerBorder: "border-blue-400" },
      { id: "mint", swatchBg: "bg-emerald-200", bookBg: "bg-emerald-200", innerBorder: "border-emerald-300" },
      { id: "butter", swatchBg: "bg-yellow-200", bookBg: "bg-yellow-200", innerBorder: "border-yellow-300" },
      { id: "purple", swatchBg: "bg-violet-300", bookBg: "bg-violet-300", innerBorder: "border-violet-400" },
    ],
    []
  );

  const [selected, setSelected] = useState<Swatch>(swatches[0]);

  return (
    <div className="w-full max-w-lg space-y-4">
      {/* Top message card */}
      <div className="bg-gray-100 rounded-xl p-5 border">
        <div className="flex items-start gap-3">
          <div className="border-4 border-gray-300 bg-gray-500 rounded-full p-2 shrink-0">
            <Sparkles size={14} className="text-gray-200" />
          </div>

          <p className="text-sm text-gray-700 leading-relaxed">
            You&apos;ve given each memory its voice, created your cover and added a dedication.
            That&apos;s the heart of your book complete. Now comes the fun part picking the finer
            details that will make this keepsake feel like you from the very first page.
          </p>
        </div>
      </div>

      {/* Color selection card */}
      <div className="bg-gray-100 rounded-xl p-5 border">
        <div className="flex items-center gap-3">
          <div className="border-4 border-gray-300 bg-gray-500 rounded-full p-2 shrink-0">
            <Sparkles size={14} className="text-gray-200" />
          </div>
          <p className="text-sm font-medium text-gray-700">Select a color</p>
        </div>

        {/* Gray container */}
        <div className="mt-4 flex items-center justify-center">
          <div className="w-[300px] h-[230px] rounded-xl  flex items-center justify-center">
            {/* --- STACKED / LAYERED BOOK (like your screenshot) --- */}
            <div className="relative w-[210px] h-[210px]">
              {/* back layer */}
              <div className="absolute inset-0 translate-x-[-8px] translate-y-[6px] rounded-[18px] border border-gray-300 bg-gray-200" />

              {/* mid layer */}
              <div className="absolute inset-0 translate-x-[-4px] translate-y-[3px] rounded-[18px] border border-gray-300 bg-gray-200" />

              {/* front layer (the colored book) */}
              <div className="absolute inset-0 rounded-[18px] border border-gray-400 bg-gray-200 p-[6px] shadow-sm">
                <div className={`h-full w-full rounded-[14px] border-2 ${selected.innerBorder} ${selected.bookBg} p-4`}>
                  <p className="text-center text-sm font-semibold text-gray-800 leading-tight">
                    Book title will <br /> display here
                  </p>

                  <div className="mt-3 flex items-center justify-center gap-4">
                    <div className="text-[11px] text-gray-700 leading-tight text-center">
                      Lorem <br /> Ipsum
                    </div>

                    <div className="w-16 h-20 rounded-md overflow-hidden bg-white/60 shadow-sm">
                      <img
                        src={DEMO_IMAGE}
                        alt="Cover"
                        className="w-full h-full object-cover grayscale"
                      />
                    </div>

                    <div className="text-[11px] text-gray-700 leading-tight text-center">
                      Lorem <br /> Ipsum
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* --- end stacked book --- */}
          </div>
        </div>

        {/* Swatches */}
        <div className="mt-5 flex items-center justify-center gap-3">
          {swatches.map((s) => {
            const active = selected.id === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setSelected(s)}
                aria-pressed={active}
                className={`w-9 h-9 rounded-lg border transition shadow-sm ${s.swatchBg}
                  ${active ? "border-gray-900" : "border-gray-300 hover:border-gray-500"}`}
                title={s.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ColorFinishScheme;
