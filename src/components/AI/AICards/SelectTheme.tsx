import React, { useMemo, useState } from "react";
import { Sparkles, Check } from "lucide-react";
import ThemeImage from '../../../assets/theme.jpg'

type Theme = {
  id: string;
  name: string;
  details: string;
  previewSrc?: string;
};

type SelectThemeProps = {
  themes?: Theme[];
  onSelect?: (theme: Theme | null) => void;
};

const DEMO_PREVIEW = ThemeImage;

const SelectTheme: React.FC<SelectThemeProps> = ({ themes, onSelect }) => {
  const demoThemes: Theme[] = useMemo(
    () => [
      { id: "t1", name: "Theme Name", details: "Details...", previewSrc: DEMO_PREVIEW },
      { id: "t2", name: "Theme Name", details: "Details...", previewSrc: DEMO_PREVIEW },
      { id: "t3", name: "Theme Name", details: "Details...", previewSrc: DEMO_PREVIEW },
      { id: "t4", name: "Theme Name", details: "Details...", previewSrc: DEMO_PREVIEW },
    ],
    []
  );

  const items = themes?.length ? themes : demoThemes;

 
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);

  const handleSelect = (t: Theme) => {

    setSelectedTheme((prev) => {
      const next = prev?.id === t.id ? null : t;
      onSelect?.(next);
      return next;
    });
  };

  return (
    <div className="w-full max-w-4xl bg-gray-100 rounded-2xl border p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="border-4 border-gray-300 bg-gray-500 rounded-full p-2 shrink-0">
          <Sparkles size={16} className="text-gray-200" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">Select a theme</h2>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
        {items.map((t) => {
          const isSelected = selectedTheme?.id === t.id;

          return (
            <button
              key={t.id}
              type="button"
              onClick={() => handleSelect(t)}
              className="group flex items-center gap-6 text-left"
              aria-pressed={isSelected}
            >
              {/* Preview */}
              <div
                className={`relative w-20 h-20 rounded-2xl overflow-hidden shadow-sm border transition
                  ${
                    isSelected
                      ? "border-gray-900"
                      : "border-gray-300 group-hover:border-gray-500"
                  }`}
              >
                <img
                  src={t.previewSrc || DEMO_PREVIEW}
                  alt={t.name}
                  className="w-full h-full object-cover grayscale shadow-md"
                />

                {isSelected && (
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center shadow">
                    <Check size={14} className="text-white" />
                  </div>
                )}
              </div>

            
              <div>
                <p className="text-base font-semibold text-gray-900">
                  {t.name}
                </p>
                <p className="text-sm text-gray-700 mt-1">{t.details}</p>
              </div>
            </button>
          );
        })}
      </div>

    </div>
  );
};

export default SelectTheme;
