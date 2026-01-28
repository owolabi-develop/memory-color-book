import React from "react";
import { Sparkles } from "lucide-react";
import BookCoverImage from "../../../assets/theme.jpg";

type FinalReviewProps = {
  title?: string;
  subtitle?: string;
  coverTitle?: string;
  coverLeftText?: string;
  coverRightText?: string;
  coverImageSrc?: string;
  spreadLeftText?: string;
  spreadLeftImageSrc?: string;
  spreadRightImageSrc?: string;
  ctaText?: string;
  onCta?: () => void;
};

const DEMO_PHOTO =
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=700&q=80";

const DEMO_TEXTURE = BookCoverImage;

const ReadyToConvert: React.FC<FinalReviewProps> = ({
  title = "You’re all set!",
  subtitle = "Don’t worry, you can make changes after we apply the magic.",

  coverTitle = "Book title will\ndisplay here",
  coverLeftText = "Lorem\nIpsum",
  coverRightText = "Lorem\nIpsum",
  coverImageSrc = DEMO_PHOTO,

  spreadLeftText = "Caption copy for\nthe first page\nwill display here\nwith the image\nto the right",
  spreadLeftImageSrc = DEMO_TEXTURE,
  spreadRightImageSrc = DEMO_PHOTO,

  ctaText = "Apply the Magic/Create my Book",
  onCta = () => console.log("CTA clicked"),
}) => {
  return (
    <div className="w-full max-w-5xl bg-gray-100 rounded-2xl border p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="border-4 border-gray-300 bg-gray-500 rounded-full p-2 shrink-0">
          <Sparkles size={16} className="text-gray-200" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
      </div>

      {/* Content row */}
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        {/* Left: small book cover */}
        <div className="w-full md:w-[260px] flex justify-center">
          <div className="w-[190px] h-[190px] bg-gray-200 rounded-xl border border-gray-300 shadow-sm flex items-center justify-center">
            <div className="w-[160px] h-[160px] rounded-lg">
              <p className="text-center text-sm font-semibold text-gray-800 leading-tight whitespace-pre-line">
                {coverTitle}
              </p>

              <div className="mt-3 flex items-center justify-center gap-3">
                <div className="text-[11px] text-gray-700 leading-tight text-center whitespace-pre-line">
                  {coverLeftText}
                </div>

                <div className="w-16 h-20 rounded-md overflow-hidden bg-white/60 shadow-sm">
                  <img
                    src={coverImageSrc}
                    alt="Cover"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>

                <div className="text-[11px] text-gray-700 leading-tight text-center whitespace-pre-line">
                  {coverRightText}
                </div>
              </div>
            </div>
          </div>
        </div>

       
        <div className="w-full md:flex-1 flex justify-center">
          <div className="w-full max-w-[640px]">
            <div className="flex items-stretch">
              {/* LEFT PAGE */}
              <div className="relative flex-1 min-h-[210px] rounded-2xl overflow-hidden border bg-white shadow-sm">
                {spreadLeftImageSrc && (
                  <img
                    src={spreadLeftImageSrc}
                    alt="Left page background"
                    className="absolute inset-0 w-full h-full object-cover grayscale"
                  />
                )}

                {/* make caption readable on busy bg */}
                <div className="absolute inset-0 bg-white/35" />

                <div className="relative z-10 h-full w-full flex items-center justify-center p-6">
                  <p className="text-center text-sm sm:text-base font-semibold text-gray-900 whitespace-pre-line leading-relaxed">
                    {spreadLeftText}
                  </p>
                </div>
              </div>

              {/* RIGHT PAGE */}
              <div className="flex-1 min-h-[210px] rounded-2xl overflow-hidden border bg-white shadow-sm">
                <img
                  src={spreadRightImageSrc}
                  alt="Right page"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtitle */}
      <p className="mt-8 text-center text-lg font-medium text-gray-900">
        {subtitle}
      </p>


<div className="mt-6 flex justify-center">
  <button
    type="button"
    onClick={onCta}
    className="
      px-12 py-2 rounded-full font-semibold text-white
      bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700
      hover:from-gray-600 hover:via-gray-700 hover:to-gray-800
      transition shadow-md hover:shadow-lg
    "
  >
    {ctaText}
  </button>
</div>

    </div>
  );
};

export default ReadyToConvert;
