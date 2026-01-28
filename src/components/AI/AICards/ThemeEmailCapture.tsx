import React, { useMemo, useState } from "react";
import ThemeImage from '../../../assets/theme.jpg'
type ThemeOption = {
  id: string;
  name: string;

  bgImageSrc: string;
};

type EmailThemeStackProps = {
  title?: string;
  leftCaption?: string;
  rightImageSrc?: string;
  themes?: ThemeOption[];
  defaultThemeId?: string;
  onThemeChange?: (theme: ThemeOption) => void;
  defaultEmail?: string;
  onSubmitEmail?: (email: string, selectedTheme: ThemeOption) => void;
  className?: string;
};

const DEMO_RIGHT =
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=80";
const DEMO_T1 =ThemeImage;
const DEMO_T2 =ThemeImage
const DEMO_T3 =
  "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=60";
const DEMO_T4 =ThemeImage;
const DEMO_T5 = ThemeImage

const defaultThemes: ThemeOption[] = [
  { id: "t1", name: "Theme 1", bgImageSrc: DEMO_T1 },
  { id: "t2", name: "Theme 2", bgImageSrc: DEMO_T2 },
  { id: "t3", name: "Theme 3", bgImageSrc: DEMO_T3 },
  { id: "t4", name: "Theme 4", bgImageSrc: DEMO_T4 },
  { id: "t5", name: "Theme 5", bgImageSrc: DEMO_T5 },
];

const EmailThemeStack: React.FC<EmailThemeStackProps> = ({
  title = "Play around with your books design, and\nlet me grab your email so we keep save your progress.",
  leftCaption = "My favorite day\nwith Dad. Just us\ntwo in a boat, in\nCentral Park",
  rightImageSrc = DEMO_RIGHT,

  themes,
  defaultThemeId,
  onThemeChange,

  defaultEmail = "",
  onSubmitEmail,

  className = "",
}) => {
  const themeData = useMemo(
    () => (themes?.length ? themes : defaultThemes),
    [themes]
  );

  const initialTheme =
    themeData.find((t) => t.id === defaultThemeId) || themeData[1] || themeData[0];

  
  const [email, setEmail] = useState<string>(defaultEmail);


  const [selectedTheme, setSelectedTheme] = useState<ThemeOption>(initialTheme);

  const handleSelectTheme = (t: ThemeOption) => {
    setSelectedTheme(t);
    onThemeChange?.(t);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitEmail?.(email, selectedTheme);
  };

  return (
    <div className={`w-full flex flex-col items-center ${className}`}>
      {/* Title */}
      <h2 className="text-center text-base md:text-lg font-semibold text-gray-900 whitespace-pre-line">
        {title}
      </h2>

      {/* Spread stack */}
      <div className="mt-6 relative w-[720px] max-w-[92%] h-[240px]">
        {/* stacked behind */}
        <div className="absolute inset-0 translate-x-3 translate-y-2 rounded-2xl border border-gray-300 bg-gray-100 shadow-sm" />
        <div className="absolute inset-0 translate-x-2 translate-y-1 rounded-2xl border border-gray-300 bg-gray-100 shadow-sm" />

        {/* main spread */}
        <div className="absolute inset-0 rounded-2xl border border-gray-400 bg-white shadow-md overflow-hidden">
          <div className="grid grid-cols-2 h-full">
            {/* Left page theme texture */}
            <div className="relative overflow-hidden">
              <img
                src={selectedTheme.bgImageSrc}
                alt={selectedTheme.name}
                className="absolute inset-0 w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-white/20" />

              <div className="relative z-10 h-full flex items-center justify-center p-6">
                <p className="text-center whitespace-pre-line font-semibold text-gray-900 text-base leading-snug drop-shadow-sm">
                  {leftCaption}
                </p>
              </div>
            </div>

           
            <div className="relative overflow-hidden">
              <img
                src={selectedTheme.bgImageSrc}
                alt="Theme background"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-35"
              />
              <div className="absolute inset-0 bg-white/15" />

              {/* main image */}
              <img
                src={rightImageSrc}
                alt="Right page"
                className="relative z-10 w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Theme dots */}
      <div className="mt-6 bg-gray-100 rounded-xl px-6 py-3 flex items-center gap-3">
        {themeData.map((t) => {
          const active = t.id === selectedTheme.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => handleSelectTheme(t)}
              className={`w-8 h-8 rounded-xl border transition shadow-sm overflow-hidden
                ${active ? "border-gray-900 ring-2 ring-gray-900/20" : "border-gray-300 hover:border-gray-500"}`}
              aria-label={`Select ${t.name}`}
              aria-pressed={active}
            >
              <img
                src={t.bgImageSrc}
                alt={t.name}
                className="w-full h-full object-cover grayscale"
              />
            </button>
          );
        })}
      </div>

      {/* email form input */}
      <form onSubmit={handleSubmit} className="mt-7 flex items-center gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="username@gmail.com"
          className="w-[320px] max-w-[70vw] px-4 py-3 rounded-xl border border-gray-300 bg-white
                     text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
          required
        />

        <button
          type="submit"
          className="px-6 py-3 rounded-xl bg-gray-700 text-white text-sm font-semibold
                     hover:bg-gray-800 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EmailThemeStack;
