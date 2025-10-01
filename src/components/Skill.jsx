import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function SkillsSection() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Motion Variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const storedSkills = localStorage.getItem("skills");
        if (storedSkills) {
          setSkills(JSON.parse(storedSkills));
        } else {
          const response = await axios.get(
            "https://raw.githubusercontent.com/FakhirAhmedKhan/DataApi-main/main/Data/skillsIcons.json"
          );
          const data = response.data.skills || [];
          setSkills(data);
          localStorage.setItem("skills", JSON.stringify(data));
        }
      } catch (err) {
        console.error("Error fetching skills:", err);
        setError("Failed to load skills. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return (
    <section
      id="skills"
      className="px-6 md:px-16 lg:px-24 py-16"
    >
      {/* Section Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills & Toolkit
      </motion.h2>

      {/* Loading & Error */}
      {loading && (
        <p className="text-center mt-8 text-gray-500 dark:text-gray-400">
          Loading skills...
        </p>
      )}
      {error && (
        <p className="text-center mt-8 text-red-500 dark:text-red-400">
          {error}
        </p>
      )}

      {/* Skills Grid */}
      {!loading && !error && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name || index}
              variants={skillVariants}
              whileHover={{
                scale: 1.15,
                rotate: 5, // subtle rotation
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              className="relative flex flex-col items-center justify-center text-center p-4 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-2xl transition-all group"
            >
              {/* Gradient Glow */}
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 opacity-0 group-hover:opacity-30 transition-all duration-500 blur-xl z-0"></span>

              {/* Icon */}
              <img
                src={skill.icon}
                alt={`${skill.name} logo`}
                className="h-16 w-16 mb-2 relative z-10"
              />
              {/* Skill Name */}
              <span className="mt-2 text-gray-700 dark:text-gray-200 font-medium text-sm relative z-10">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
}
