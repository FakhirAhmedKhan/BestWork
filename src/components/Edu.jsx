import { motion as Motion } from "framer-motion";
import education from "../Data/education.json";
import EduCart from "./EduCart";
import { fadeInUp } from "../UI/motionConfig";
import { sectionTitle } from "../UI/styles";

export default function Education() {
  if (!education?.length) return null;
  return (
    <section id="My-Journey" className="py-20">
      <Motion.h2 className={sectionTitle} {...fadeInUp(0.3)}>
        My Journey
      </Motion.h2>

      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-purple-500 to-pink-500"></div>
        {education.map((item, index) => (
          <EduCart key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
