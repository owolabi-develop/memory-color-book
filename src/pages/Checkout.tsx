import React, { useMemo, useState } from "react";
import { Check } from "lucide-react";
import ThemeImage from '../assets/theme.jpg'

type ConfirmDetail = {
  id: string;
  label: string;
};

type BundleOption = {
  id: string;
  label: string;
};

type CheckoutPageProps = {
  stepLabel?: string;

  // Preview images (top left)
  previewLeftSrc?: string;
  previewMiddleSrc?: string;
  previewRightSrc?: string;

  // Confirm order details (selectable)
  confirmDetails?: ConfirmDetail[];
  defaultConfirmDetailId?: string;
  onConfirmDetailChange?: (selected: ConfirmDetail) => void;

  // Bundle options (selectable)
  bundleOptions?: BundleOption[];
  defaultBundleId?: string;
  onBundleChange?: (selected: BundleOption) => void;

  // Right checkout placeholder
  rightTitle?: string;
  orderTotalText?: string;
};

const DEMO_IMG =
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=500&q=80";

const defaultConfirmDetails: ConfirmDetail[] = [
  { id: "cover", label: "Cover" },
  { id: "pdf", label: "Pdf" },
  { id: "hard", label: "Hard" },
  { id: "soft", label: "Soft" },
];

const defaultBundles: BundleOption[] = [
  { id: "bundle-1", label: "Bundle one" },
  { id: "bundle-2", label: "Bundle two" },
  { id: "bundle-3", label: "Bundle one" },
];

const SelectCard: React.FC<{
  selected: boolean;
  label: string;
  onClick: () => void;
  size?: "sm" | "md";
}> = ({ selected, label, onClick, size = "md" }) => {
  const boxSize =
    size === "sm"
      ? "w-14 h-14 rounded-md"
      : "w-20 h-16 rounded-md"; // resembles screenshot

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-col items-center gap-2"
      aria-pressed={selected}
    >
      <div
        className={`${boxSize} border bg-gray-200 shadow-sm flex items-center justify-center relative
          ${selected ? "border-gray-900" : "border-gray-300 hover:border-gray-500"}`}
      >
        {selected && (
          <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center shadow">
            <Check size={14} className="text-white" />
          </div>
        )}
      </div>
      <span className="text-[11px] text-gray-700">{label}</span>
    </button>
  );
};

const CheckoutPage: React.FC<CheckoutPageProps> = ({
 
  previewLeftSrc = DEMO_IMG,
  previewMiddleSrc = ThemeImage,
  previewRightSrc = DEMO_IMG,

  confirmDetails,
  defaultConfirmDetailId,
  onConfirmDetailChange,

  bundleOptions,
  defaultBundleId,
  onBundleChange,

  rightTitle = "Checkout",
  orderTotalText = "Order Total: $85.00",
}) => {
  const details = useMemo(
    () => (confirmDetails?.length ? confirmDetails : defaultConfirmDetails),
    [confirmDetails]
  );

  const bundles = useMemo(
    () => (bundleOptions?.length ? bundleOptions : defaultBundles),
    [bundleOptions]
  );

  const initialDetail =
    details.find((d) => d.id === defaultConfirmDetailId) || details[0];
  const initialBundle =
    bundles.find((b) => b.id === defaultBundleId) || bundles[0];

  const [selectedDetail, setSelectedDetail] = useState<ConfirmDetail>(
    initialDetail
  );
  const [selectedBundle, setSelectedBundle] = useState<BundleOption>(
    initialBundle
  );

  const handleDetailSelect = (d: ConfirmDetail) => {
    setSelectedDetail(d);
    onConfirmDetailChange?.(d);
  };

  const handleBundleSelect = (b: BundleOption) => {
    setSelectedBundle(b);
    onBundleChange?.(b);
  };

  return (
    <section className="w-full">
      
      <div className="w-full bg-gray-100 shadow-sm p-2 ">
        <div className="flex  item-center justify-center px-10">
          {/* LEFT PANEL */}
          <div className="rounded-xl border bg-white p-5 max-w-[34rem]">
            {/* Preview */}
        <div className="mb-5">
        <p className="text-xs font-semibold text-gray-700 mb-3">Preview</p>

        <div className="flex items-center gap-4">
            {/* LEFT: small book cover mock (no image tiles) */}
            <div className="w-[150px] h-[150px] rounded-xl border border-gray-300 bg-gray-200 shadow-sm flex items-center justify-center">
            <div className="w-48 h-[134px] rounded-lg  bg-gray-200 px-2 pt-3">
                <p className="text-[10px] font-semibold text-gray-700 text-center leading-tight">
                Book title will
                <br />
                display here
                </p>

                <div className="mt-3 flex gap-2 items-center justify-between">
                <p className="text-[9px] text-gray-600 leading-tight text-center">
                    Lorem
                    <br />
                    Ipsum
                </p>

                <div className="w-10 h-12 rounded-md overflow-hidden border border-gray-300 bg-white/60">
                    <img
                    src={previewLeftSrc}
                    alt="Cover preview"
                    className="w-40 h-full object-cover grayscale"
                    />
                </div>

                <p className="text-[9px] text-gray-600 leading-tight text-center">
                    Lorem
                    <br />
                    Ipsum
                </p>
                </div>
            </div>
            </div>

           
            <div className="flex items-stretch">
            {/* left page with theme texture */}
            <div className="relative w-[160px] h-[150px] rounded-xl overflow-hidden border border-gray-300 bg-white shadow-sm">
                <img
                src={previewMiddleSrc}
                alt="Theme page"
                className="absolute inset-0 w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-white/30" />
                <div className="relative z-10 h-full w-full flex items-center justify-center p-3">
                <p className="text-center text-[11px] font-semibold text-gray-900 leading-snug">
                    Caption copy for
                    <br />
                    the first page
                    <br />
                    will display here
                    <br />
                    with the image
                    <br />
                    to the right
                </p>
                </div>
            </div>

      {/* right page with illustration/photo */}
      <div className="w-[160px] h-[150px] rounded-xl overflow-hidden border border-gray-300 bg-white shadow-sm">
        <img
          src={previewRightSrc}
          alt="Illustration page"
          className="w-full h-full object-cover grayscale"
        />
      </div>
    </div>
  </div>
</div>


            {/* Confirm Order Details */}
            <div className="mb-6">
              <p className="text-xs font-semibold text-gray-700 mb-3">
                Confirm Order Details
              </p>

              <div className="flex flex-wrap gap-6">
                {details.map((d) => (
                  <SelectCard
                    key={d.id}
                    label={d.label}
                    selected={selectedDetail.id === d.id}
                    onClick={() => handleDetailSelect(d)}
                    size={d.id === "pdf" ? "sm" : "md"}
                  />
                ))}
              </div>

              {/* selected value (safe for integration; remove later if you want) */}
              <div className="mt-3 text-xs text-gray-600">
                Selected:{" "}
                <span className="font-semibold text-gray-900">
                  {selectedDetail.label}
                </span>
              </div>
            </div>

            {/* Bundle */}
            <div>
              <p className="text-xs font-semibold text-gray-700 mb-3">Bundle</p>

              <div className="flex flex-wrap gap-6">
                {bundles.map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => handleBundleSelect(b)}
                    className="flex flex-col items-center gap-2"
                    aria-pressed={selectedBundle.id === b.id}
                  >
                    <div
                      className={`w-20 h-16 rounded-md border bg-gray-200 shadow-sm
                        ${
                          selectedBundle.id === b.id
                            ? "border-gray-900"
                            : "border-gray-300 hover:border-gray-500"
                        }`}
                    />
                    <span className="text-[11px] text-gray-700">{b.label}</span>
                  </button>
                ))}
              </div>

              <div className="mt-3 text-xs text-gray-600">
                Selected:{" "}
                <span className="font-semibold text-gray-900">
                  {selectedBundle.label}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL (empty placeholder for payment embed) */}
          <div className="rounded-xl border bg-gray-200 p-5  min-w-[25rem]">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-base font-semibold text-gray-900">
                  {rightTitle}
                </p>
                <p className="text-xs text-gray-600 mt-1">{orderTotalText}</p>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
