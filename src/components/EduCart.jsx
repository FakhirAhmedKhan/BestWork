import { Paragraph, H3, EduCartStyle, fadeInUp } from "../UI/styles";

import { motion as Motion } from "framer-motion";

export default function EduCart({ item, index }) {
  const isLeft = index % 2 === 0;
  return (
    <Motion.div
      className={`relative mb-12 flex w-full items-center ${
        isLeft ? "justify-start" : "justify-end"
      }`}
      {...fadeInUp(0.3)}
    >
      <div className={EduCartStyle}>
        <p className={Paragraph}>{item.year}</p>
        <h3 className={H3}>{item.title}</h3>
        <p className={Paragraph}></p>
        {item.description && <p className={Paragraph}>{item.description}</p>}
      </div>
    </Motion.div>
  );
}
