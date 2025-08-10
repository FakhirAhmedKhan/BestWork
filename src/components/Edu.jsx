import { motion as Motion } from "framer-motion";
import education from "../Data/education.json";
import EduCart from "./EduCart";
import { fadeInUp } from "../UI/motionConfig";
import { SectionTitle, EduCartLineStyle } from "../UI/styles";

export default function Education() {
  if (!education?.length) return null;
  return (
    <section id="🚊" className="py-20">
      <Motion.h2 className={SectionTitle} {...fadeInUp(0.3)}>
        My Journey
      </Motion.h2>

      <div className={EduCartLineStyle}></div>
      {education.map((item, index) => (
        <EduCart key={index} item={item} index={index} />
      ))}
    </section>
  );
}
