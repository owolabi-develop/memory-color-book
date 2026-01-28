import React from "react";
import { motion } from "framer-motion";

const MagicalAnimation: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center p-6">
      <motion.div
        className="relative w-full max-w-4xl h-[220px] sm:h-[260px] rounded-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Soft gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-indigo-100 to-pink-100" />

        {/* Animated glow */}
        <motion.div
          className="absolute -top-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-60"
          style={{
            background:
              "radial-gradient(circle at center, rgba(99,102,241,0.55), rgba(236,72,153,0.0) 70%)",
          }}
          animate={{
            x: [0, 180, 0],
            y: [0, 80, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />

        <motion.div
          className="absolute -bottom-28 -right-28 w-80 h-80 rounded-full blur-3xl opacity-60"
          style={{
            background:
              "radial-gradient(circle at center, rgba(236,72,153,0.55), rgba(99,102,241,0.0) 70%)",
          }}
          animate={{
            x: [0, -160, 0],
            y: [0, -70, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 7,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />

        {/* Dashed animated border */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-dashed border-indigo-300/70"
          style={{ borderRadius: 16 }}
          animate={{ opacity: [0.55, 0.95, 0.55] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Subtle moving shimmer */}
        <motion.div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.55) 20%, transparent 40%)",
          }}
          animate={{ x: ["-60%", "120%"] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Text */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <motion.h2
            className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ y: 6, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            Magical Animation
          </motion.h2>
        </div>
      </motion.div>
    </div>
  );
};

export default MagicalAnimation;
