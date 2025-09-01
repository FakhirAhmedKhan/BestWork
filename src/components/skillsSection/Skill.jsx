"use client";
import { motion } from "framer-motion";
import { SectionTitle, SkillDivStyle, sectionSkills } from "../../UI/styles";
import BubbleText from "./BubbleText";

// Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 12 },
  },
};

export default function SkillsSection({ skills }) {
  return (
    <section
      id="🛠️"
      className={`${sectionSkills} px-6 md:px-16 lg:px-24 py-16`}
    >
      {/* Section Title */}
      <motion.h2
        className={`${SectionTitle} text-center`}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills & Toolkit
      </motion.h2>

      {/* Subtitle Bubble */}
      <div className="mt-4 mb-10 flex justify-center">
        <BubbleText text="I'm still learning and exploring these tools as a beginner." />
      </div>

      {/* Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={skillVariants}
            whileHover={{
              scale: 1.15,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.4 },
            }}
            className="flex flex-col items-center justify-center p-6 rounded-xl shadow-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
          >
            <skill.icon className="h-12 w-12 text-indigo-500" />
            {/* <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              {skill.name}
            </p> */}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
