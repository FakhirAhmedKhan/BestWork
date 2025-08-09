import { motion as Motion } from "framer-motion";
import { fadeInUp, scaleIn } from "../UI/motionConfig";
import { sectionTitle, cardBase } from "../UI/styles";
import BubbleText from "./BubbleText";

export default function SkillsSection({ skills }) {
  return (
    <section id="Skills" className="px-4 py-16 text-white">
      <div className="container mx-auto max-w-7xl text-center">
        <Motion.h2 {...fadeInUp()} className={sectionTitle}>
          Skills & Toolkit
        </Motion.h2>

        <BubbleText text="I'm still learning and exploring these tools as a beginner." />

        <div className="mx-auto grid max-w-2xl grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill, i) => (
            <Motion.div
              key={skill.name}
              className={`${cardBase} p-12 dark:bg-slate-800/50`}
              custom={i}
              initial="hidden"
              whileInView="visible"
              variants={scaleIn(i)}
              viewport={{ once: true }}
            >
              <skill.icon className="h-10 w-10 text-indigo-300" />
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
