import React, { useMemo, useRef, useState } from "react";
import { Sparkles, Check, X, Upload, Loader2 } from "lucide-react";

type UploadContext = {
  customerId: string;
  storyId: string;
};

type Photo = {
  // local preview id (until backend returns real id)
  localId: string;
  // backend id (optional for now)
  id?: string;
  // preview url for UI
  url: string;
  selected: boolean;
  file?: File;
};

type ImageUploadProps = {
  customerId: string;
  storyId: string;

  //  Integrate later:
  // Return backend photos (id + url). If not provided, component stays local-only.
  onUpload?: (files: File[], ctx: UploadContext) => Promise<Array<{ id: string; url: string }>>;

  // Integrate later (save selection to backend)
  onSelectionChange?: (photo: { id?: string; localId: string }, ctx: UploadContext) => void;

  // UI config
  maxFiles?: number;
  maxSizeMB?: number;
  allowedTypes?: string[]; 
};

const ImageUpload: React.FC<ImageUploadProps> = ({
  customerId,
  storyId,
  onUpload,
  onSelectionChange,
  maxFiles = 20,
  maxSizeMB = 10,
  allowedTypes = ["image/jpeg", "image/png", "image/webp"],
}) => {
  const ctx = useMemo(() => ({ customerId, storyId }), [customerId, storyId]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");

  const maxBytes = useMemo(() => maxSizeMB * 1024 * 1024, [maxSizeMB]);
  const allowed = useMemo(() => new Set(allowedTypes), [allowedTypes]);

  const validateFiles = (files: File[]) => {
    if (photos.length + files.length > maxFiles) {
      return `You can upload up to ${maxFiles} photos for this story.`;
    }
    for (const f of files) {
      if (!allowed.has(f.type)) return `Unsupported file type: ${f.name}`;
      if (f.size > maxBytes) return `${f.name} is too large (max ${maxSizeMB}MB).`;
    }
    return "";
  };

  const addLocalPreviews = (files: File[]) => {
    const previews: Photo[] = files.map((file, idx) => ({
      localId: `${Date.now()}-${idx}`,
      url: URL.createObjectURL(file),
      selected: false,
      file,
    }));
    setPhotos((prev) => [...prev, ...previews]);
    return previews;
  };

  const handleFiles = async (filesList: FileList | File[]) => {
    const files = Array.from(filesList);
    setError("");

    const validationError = validateFiles(files);
    if (validationError) {
      setError(validationError);
      return;
    }

    // Always show previews immediately
    const previews = addLocalPreviews(files);

    // If user provided integration hook, upload to backend and replace local items with server ids/urls
    if (!onUpload) return;

    setIsUploading(true);
    try {
      const serverPhotos = await onUpload(files, ctx); // [{id,url}]
      setPhotos((prev) => {
        // map previews to server responses in order
        const next = [...prev];
        let serverIdx = 0;

        for (const p of previews) {
          const i = next.findIndex((x) => x.localId === p.localId);
          if (i !== -1 && serverPhotos[serverIdx]) {
            next[i] = {
              ...next[i],
              id: serverPhotos[serverIdx].id,
              url: serverPhotos[serverIdx].url, // swap to CDN/S3 url
              file: undefined, // optional: drop file ref after upload
            };
            serverIdx++;
          }
        }
        return next;
      });
    } catch (e: any) {
      setError(e?.message || "Upload failed. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files?.length) handleFiles(e.dataTransfer.files);
  };

  // Single select + integratable callback
  const selectOne = (localId: string) => {
    setPhotos((prev) => {
      const next = prev.map((p) => ({ ...p, selected: p.localId === localId }));
      const chosen = next.find((p) => p.localId === localId);
      if (chosen && onSelectionChange) onSelectionChange({ id: chosen.id, localId }, ctx);
      return next;
    });
  };

  return (
    <div className="w-full max-w-md bg-gray-100 rounded-xl p-6">
      {/* Icon */}
      <div className="flex items-center justify-center mb-4">
        <div className="border-4 border-gray-300 bg-gray-500 rounded-full p-2">
          <Sparkles size={24} className="text-gray-200" />
        </div>
      </div>

      {/* Copy (matches screenshot) */}
      <div className="text-center mb-5">
        <p className="text-lg font-semibold text-gray-700">
          Great, we&apos;ll use this in the story
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Ok, let&apos;s add the photos for your book.
        </p>
      </div>

      <p className="text-xs font-semibold text-gray-600 text-center mb-3">
        Selecting the best photos for your book
      </p>

      {/* Image row (3 like screenshot; placeholders when empty) */}
      <div className="flex gap-4 justify-center mb-3">
        {(photos.length ? photos.slice(0, 3) : [0, 1, 2]).map((item, idx) => {
          const photo = typeof item === "number" ? null : item;

          return (
            <button
              key={photo ? photo.localId : `placeholder-${idx}`}
              type="button"
              onClick={() => photo && selectOne(photo.localId)}
              className={`relative w-24 h-24 rounded-lg bg-gray-200 overflow-hidden border-2 transition
                ${
                  photo?.selected
                    ? "border-gray-700"
                    : "border-transparent hover:border-gray-400"
                } ${photo ? "cursor-pointer" : "cursor-default"}`}
              disabled={!photo}
              aria-pressed={photo?.selected || false}
            >
              {photo ? (
                <img src={photo.url} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-xs text-gray-400 opacity-60">
                  Image
                </div>
              )}

              <div className="absolute top-1 right-1 bg-white rounded-full p-1 shadow">
                {photo?.selected ? (
                  <Check size={14} className="text-gray-700" />
                ) : (
                  <X size={14} className="text-gray-400" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      <p className="text-xs text-gray-400 text-center mb-4">
        Choose images that have great resolution
      </p>

      {error && <div className="mb-3 text-xs text-red-600 text-center">{error}</div>}

      {/* Drag & Drop */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onClick={() => inputRef.current?.click()}
        className={`border-2 border-dashed rounded-lg p-6 text-center text-sm
          text-gray-500 flex flex-col items-center gap-2 mb-4 cursor-pointer transition
          ${isDragging ? "border-gray-500 bg-gray-50" : "border-gray-300 hover:bg-gray-50"}`}
      >
        {isUploading ? (
          <div className="flex items-center gap-2">
            <Loader2 className="animate-spin" size={18} />
            <span>Uploading…</span>
          </div>
        ) : (
          <>
            <Upload size={18} className="text-gray-400" />
            <span>Drag and drop or click to upload your files</span>
            <span className="text-[11px] text-gray-400">
              JPG/PNG/WebP • up to {maxSizeMB}MB • max {maxFiles} photos
            </span>
          </>
        )}

        <input
          ref={inputRef}
          type="file"
          multiple
          accept={allowedTypes.join(",")}
          className="hidden"
          onChange={(e) => {
            const list = e.target.files;
            if (list?.length) handleFiles(list);
            e.currentTarget.value = "";
          }}
        />
      </div>

      {/* Buttons (ready for future integrations) */}
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          type="button"
          className="px-4 py-2 rounded-full border text-sm bg-white text-gray-600 hover:bg-gray-200"
          onClick={() => console.log("Instagram connect later", ctx)}
          disabled={isUploading}
        >
          Instagram
        </button>

        <button
          type="button"
          className="px-4 py-2 rounded-full border text-sm bg-white text-gray-600 hover:bg-gray-200"
          onClick={() => console.log("Google Photos connect later", ctx)}
          disabled={isUploading}
        >
          Google Photos
        </button>

        <button
          type="button"
          className="px-4 py-2 rounded-full border text-sm bg-white text-gray-600 hover:bg-gray-200"
          onClick={() => inputRef.current?.click()}
          disabled={isUploading}
        >
          From Device
        </button>
      </div>
    </div>
  );
};

export default ImageUpload;
