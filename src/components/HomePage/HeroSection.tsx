import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import HeroImage from "../../assets/heroImage.jpg";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">

        {/* LEFT */}
        <div className="flex items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto w-full max-w-xl px-6 md:px-12"
          >
            <motion.h1
              variants={itemVariants}
              className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl"
            >
              Color your stories.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mb-8 text-lg leading-relaxed text-slate-600"
            >
              Photos become pages you can color. Your memories become captions you
              treasure. Moments you don’t want to forget become something you
              return to again and again. all because Rachel makes it easy.
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-4">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="rounded-lg bg-slate-900 px-8 py-3 text-white"
              >
                Create Your Book →
              </motion.button>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="rounded-lg border-2 border-slate-900 px-8 py-3 text-slate-900"
              >
                See How It Works
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="hidden lg:block overflow-hidden">
          <motion.img
            src={HeroImage}
            alt="Hero"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
