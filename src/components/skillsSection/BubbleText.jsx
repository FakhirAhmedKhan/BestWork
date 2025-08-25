import { BubbleBase, H3, fadeInUp } from "../../UI/styles";
import { motion as Motion } from "framer-motion";

export default function BubbleText({ text }) {
  return (
    <Motion.h3 className={H3} {...fadeInUp(0.3)}>
      {text.split("").map((char, idx) => (
        <Motion.span key={idx} {...fadeInUp(0.3)}>
          {char === " " ? "\u00A0" : <span className={BubbleBase}>{char}</span>}
        </Motion.span>
      ))}
    </Motion.h3>
  );
}
