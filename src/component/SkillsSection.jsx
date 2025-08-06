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

  return (
    <section id="skills" className="py-20">
      <Motion.h2
        className="mb-12 text-center text-4xl font-bold tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills & Toolkit
      </Motion.h2>

      <div className="mx-auto grid max-w-2xl grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
        {skills.map((skill, i) => (
          <Motion.div
            key={skill.name}
            className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/20 p-4 shadow-lg backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-500/20 dark:bg-slate-800/50"
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            viewport={{ once: true }}
          >
            <img src={skill.icon} alt={skill.name} className="h-10 w-10" />
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
