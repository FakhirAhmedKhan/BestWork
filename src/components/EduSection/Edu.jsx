import { motion as Motion } from "framer-motion";
import {educationData} from "./education";
import {
  SectionTitle,
  EduCartStyle,
  Paragraph,
  H3,
  fadeInUp,
} from "../../UI/styles";

export default function Education() {
  return (
    <section id="🚊">
      <Motion.h2 className={SectionTitle} {...fadeInUp(0.3)}>
        My Journey
      </Motion.h2>

      {educationData.map((item, index) => {
        const isLeft = index % 2 === 0;
        return (
          <Motion.div
            key={index}
            className={`relative mb-12 flex w-full items-center ${
              isLeft ? "justify-start" : "justify-end"
            }`}
            {...fadeInUp(0.3)}
          >
            <div className={EduCartStyle}>
              <p className={Paragraph}>{item.year}</p>
              <h3 className={H3}>{item.title}</h3>
              {item.description && (
                <p className={Paragraph}>{item.description}</p>
              )}
            </div>
          </Motion.div>
        );
      })}
    </section>
  );
}
