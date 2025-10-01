import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { SkillcontainerVariants, skillItemVariants } from "../UI/styles";

export default function SkillsSection({ text }) {
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // ✅ default true
  const [error, setError] = useState(null); // ✅ default null

  useEffect(() => {
    const storedData = localStorage.getItem("skills");

    if (storedData) {
      setSkills(JSON.parse(storedData));
      setIsLoading(false); // ✅ stop loading
    } else {
      axios
        .get(
          "https://raw.githubusercontent.com/FakhirAhmedKhan/DataApi-main/main/Data/skillsIcons.json"
        )
        .then((res) => {
          const data = res.data.skills || [];
          setSkills(data);
          localStorage.setItem("skills", JSON.stringify(data));
        })
        .catch((err) => {
          console.error("Error fetching Skills:", err);
          setError("Failed to load skills. Please try again later.");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, []);

  return (
    <section id="skills" className="px-6 md:px-16 lg:px-24 py-16">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills & Toolkit
      </motion.h2>

      <motion.h3
        className="mt-4 mb-10 text-lg text-center text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {text}
      </motion.h3>

      {/* Skills Grid */}
      <div className="mt-12">
        {isLoading && <p className="text-center">Loading Skills...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!isLoading && !error && (
          <motion.div
            variants={SkillcontainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name || index} // ✅ safe key
                variants={skillItemVariants}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
                className="flex flex-col items-center justify-center text-center p-4 rounded-xl shadow-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
              >
                <img
                  src={skill.icon}
                  alt={`${skill.name} logo`}
                  className="h-16 w-16"
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
