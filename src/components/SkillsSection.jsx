import { motion as Motion } from "framer-motion";
import { fadeInUp, scaleIn } from "../components/motionConfig";
import { sectionTitle, cardBase } from "../components/styles";

function BubbleText({ text }) {
  const bubbleBase =
    "inline-block cursor-pointer rounded px-0.5 transition-all duration-300 hover:scale-150 hover:bg-indigo-500/10 hover:text-indigo-100 hover:drop-shadow-[0_0_12px_rgba(199,210,254,0.9)]";
  return (
    <Motion.h3
      className="mb-10 text-center text-base font-medium text-indigo-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {text.split("").map((char, idx) => (
        <Motion.span
          key={idx}
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.3, delay: idx * 0.04 }}
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
              className={`${cardBase} bg-white/20 p-4 dark:bg-slate-800/50`}
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
