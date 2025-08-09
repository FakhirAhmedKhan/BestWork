import { motion as Motion } from "framer-motion";
import { fadeInUp, scaleIn } from "../UI/motionConfig";
import { sectionTitle, cardBase, bubbleBase, h3 } from "../UI/styles";

function BubbleText({ text }) {
  return (
    <Motion.h3
      className={`${h3} text-indigo-300`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {text.split("").map((char, idx) => (
        <Motion.span
          key={idx}
          variants={fadeInUp(idx * 0.05)}
          className={bubbleBase}
        >
          {char === " " ? "\u00A0" : char}
        </Motion.span>
      ))}
    </Motion.h3>
  );
}

export default function SkillsSection({ skills }) {
  return (
    <section id="skills" className="px-4 py-16 text-white">
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
