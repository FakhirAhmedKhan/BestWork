import { bubbleBase, h3 } from "../UI/styles";
import { motion as Motion } from "framer-motion";
import { fadeInUp } from "../UI/motionConfig";

export default function BubbleText({ text }) {
  return (
    <Motion.h3
      className={`${h3} text-indigo-300`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {text.split("").map((char, idx) => (
        <Motion.span key={idx} {...fadeInUp(0.3)} className={bubbleBase}>
          {char === " " ? "\u00A0" : char}
        </Motion.span>
      ))}
    </Motion.h3>
  );
}
