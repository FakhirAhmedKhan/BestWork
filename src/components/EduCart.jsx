import { paragraph, h3, EduCartRoundStyle, EduCartStyle } from "../UI/styles";
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
        <div className={EduCartStyle}>
          <p className={paragraph}>{item.year}</p>
          <h3 className={h3}>{item.title}</h3>
          <p className={paragraph}></p>
          {item.description && <p className={paragraph}>{item.description}</p>}
        </div>
      </div>
      <div className={EduCartRoundStyle}></div>
    </motion.div>
  );
}
