import { motion as Motion } from "framer-motion";

export default function SkillsSection({ skills }) {
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, delay: i * 0.1 },
    }),
  };

  const bubbleBase =
    "inline-block cursor-pointer rounded px-0.5 transition-all duration-300 hover:scale-150 hover:bg-indigo-500/10 hover:text-indigo-100 hover:drop-shadow-[0_0_12px_rgba(199,210,254,0.9)]";
  const BubbleText = ({ text }) => (
    <Motion.h3
      className="mb-10 text-center text-lg font-semibold tracking-wide text-indigo-300"
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

  const cardBase =
    "flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/20 p-4 shadow-lg backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-500/20 dark:bg-slate-800/50";
  return (
    <section id="skills" className="py-20 text-white">
      <Motion.h2
        className="mb-4 text-center text-4xl font-bold tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills & Toolkit
      </Motion.h2>
      <BubbleText text="I'm still learning and exploring these tools as a beginner." />
      <div className="mx-auto grid max-w-2xl grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
        {skills.map((skill, i) => (
          <Motion.div
            key={skill.name}
            className={cardBase}
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            viewport={{ once: true }}
          >
            <img src={skill.icon} alt={skill.name} className="h-10 w-10" />
            <p className="mt-2 text-sm">{skill.name}</p>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
