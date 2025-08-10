import { paragraph, h3 } from "../UI/styles";
import { fadeInUp } from "../UI/motionConfig";
import { motion } from "framer-motion";

export default function EduCart({ item, index }) {
  const isLeft = index % 2 === 0;
  return (
    <motion.div
      className={`relative mb-12 flex w-full items-center ${
        isLeft ? "justify-start" : "justify-end"
      }`}
      {...fadeInUp(0.3)}
    >
      <div
        className={`w-full px-4 sm:w-1/2 ${
          isLeft ? "text-right sm:pr-8" : "text-left sm:pl-8"
        }`}
      >
        <div className="rounded-xl border border-white/10 bg-white/20 p-6 shadow-xl backdrop-blur-md dark:bg-slate-800/50">
          <p className="mb-1 text-sm font-medium text-purple-500 dark:text-pink-400">
            {item.year}
          </p>
          <h3 className={h3}>{item.title}</h3>
          <p className={paragraph}></p>
          {item.description && <p className={paragraph}>{item.description}</p>}
        </div>
      </div>
      <div className="absolute left-1/2 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-purple-500 bg-white sm:block dark:bg-slate-900"></div>
    </motion.div>
  );
}
