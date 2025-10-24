import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle"; // adjust your import path

export const DraggableThemeToggle = () => {
  return (
    <motion.div
      className="fixed top-6 right-6 z-50 cursor-grab active:cursor-grabbing"
      drag
      dragMomentum={false}
      dragElastic={0.2}
      whileDrag={{ scale: 1.05 }}
      dragConstraints={{
        top: -100,
        bottom: 100,
        left: -100,
        right: 100,
      }}
    >
      <ThemeToggle />
    </motion.div>
  );
};
