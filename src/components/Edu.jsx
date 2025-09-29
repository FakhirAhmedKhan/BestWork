"use client";
import { motion } from "framer-motion";
import { SectionTitle, EduCartStyle, Paragraph, H3, EduitemVariants, EducontainerVariants } from "../UI/styles";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Education() {
  const [Education, setEducation] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/FakhirAhmedKhan/DataApi-main/refs/heads/main/data.json"
      )
      .then((res) => {
        setEducation(res.data.educationData || []);
      })
      .catch((err) => console.error("Error fetching Education:", err));
  }, []);
  return (
    <section id="🚊" className="relative px-4 md:px-12 lg:px-24 py-16">
      {/* Title */}
      <motion.h2
        className={`${SectionTitle} text-center`}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Journey
      </motion.h2>

      {/* Timeline Line */}
      <div className="absolute left-1/2 top-24 bottom-0  md:block w-[4px] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 transform -translate-x-1/2 rounded-full" />

      {/* Timeline Cards */}
      <motion.div
        variants={EducontainerVariants}
        initial="hidden"
        animate="show"
        className="mt-16 flex flex-col gap-16"
      >
        {Education.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={index}
              variants={EduitemVariants}
              className={`relative flex w-full ${
                isLeft ? "md:justify-start" : "md:justify-end"
              } justify-center`}
            >
              {/* Connector Dot */}
              <span className="hidden md:block absolute top-6 left-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 border-4 border-white shadow-md transform -translate-x-1/2 z-10" />

              {/* Card */}
              <div
                className={`${EduCartStyle} max-w-[90%] md:max-w-[45%] shadow-lg rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6`}
              >
                <p className={`${Paragraph} text-indigo-500 font-semibold`}>
                  {item.year}
                </p>
                <h3 className={`${H3} text-lg md:text-xl font-bold`}>
                  {item.title}
                </h3>
                {item.description && (
                  <p
                    className={`${Paragraph} mt-2 text-gray-600 dark:text-gray-300`}
                  >
                    {item.description}
                  </p>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
