import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";

type ModalProps = {
  onClose: () => void;
  onBack?: () => void;
};



const AIModal = ({ onClose, onBack}: ModalProps) => {
  const TOTAL_STEPS = 10;
  let step = 2
  const isBackDisabled = step === 1;
  const progress = Math.min((step / TOTAL_STEPS) * 100, 100);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relative md:w-full md:max-w-4xl rounded-md bg-white shadow-xl"
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100">
          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="flex items-center justify-center rounded-full p-2 text-gray-500 hover:bg-gray-100"
          >
            <FiX size={18} />
          </button>

          {/* Book creation progress */}
          <div className="relative h-1 w-40 overflow-hidden rounded-full bg-gray-200">
            <motion.div
              className="absolute left-0 top-0 h-full rounded-full bg-black"
              initial={false}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />
          </div>

          <div className="w-8" />
        </div>

        {/* BODY */}
        <div className="min-h-[300px] p-6" />

        {/* FOOTER */}
        <div className="flex items-center px-3 py-2 border-t border-gray-100">
          <button
            onClick={onBack}
            disabled={isBackDisabled}
            className={`
              inline-flex
              items-center
              gap-2
              rounded-md
              border
              px-4
              py-1.5
              text-sm
              transition
              ${
                isBackDisabled
                  ? "invisible"
                  : "border-gray-300 text-gray-700 hover:bg-black hover:text-white"
              }
            `}
          >
            Back
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AIModal;
