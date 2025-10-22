export const menuVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3 },
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};
export const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

export const skillVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const SectionSTyle = "relative flex flex-col items-center justify-center text-center px-6 sm:px-8 lg:px-12 py-24 sm:py-28 lg:py-32 overflow-hidden z-10 max-w-7xl mx-auto space-y-12"


export const BotToggleButton =
  "fixed bottom-5 right-5 z-30 h-16 w-16 rounded-full bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-600 text-white shadow-2xl flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 hover:shadow-pink-500/50 transition-all duration-300 hover:scale-110 backdrop-blur-sm";