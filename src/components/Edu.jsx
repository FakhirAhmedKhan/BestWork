import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Header } from "../UI/components/Head";
import { Card } from "../UI/components/Card";


const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Education() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/FakhirAhmedKhan/DataApi-main/refs/heads/main/Data/educationData.json"
      )
      .then((res) => {
        const data = res.data.educationData || [];
        setEducation(data);
      })
      .catch((err) => {
        console.error("Error fetching Education:", err);
      });
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen py-20 px-4 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300/20 dark:bg-indigo-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-6xl mx-auto">

        <Header
          Tittle="My Journey"
          Pragaphic="A timeline of my educational milestones and achievements" />

        <div className="space-y-12">
          {education.map((edu, index) => (
            <Card type="education" data={edu} index={index} key={edu.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
