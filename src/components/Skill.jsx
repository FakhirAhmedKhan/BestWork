import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Code2, Zap } from "lucide-react";
import { HeadIng } from "../UI/components/Head";
import { Badge } from "../UI/components/Badge";
import axios from "axios";

export default function SkillsSection() {
  const [skills, setSkills] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
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

  useEffect(() => {
    const cachedData = localStorage.getItem("skillsIcons");
    if (cachedData) {
      setSkills(JSON.parse(cachedData));
    } else {
      axios
        .get(
          "https://raw.githubusercontent.com/FakhirAhmedKhan/DataApi-main/main/Data/skillsIcons.json"
        )
        .then((res) => {
          const data = res.data.skills || [];
          setSkills(data);
          localStorage.setItem("skillsIcons", JSON.stringify(data));
        })
        .catch((err) => {
          console.error("Error fetching Data:", err);
        });
    }
  }, []);

  return (
    <section
      id="skills"
      className="relative min-h-screen py-15 overflow-hidden"
    >

      <div className="relative max-w-6xl mx-auto">

        <HeadIng
          Tittle="Skills & Toolkit"
          Pragaphic="These are the technologies and tools I use to bring my ideas to life. I’m not an expert yet I am just learning and exploring new things as a hobby." />
        <div className="mt-20 mb-4 text-center">
          <Badge Icon={Code2} BageName="Tech Stack" />
          <Badge Icon={Sparkles} BageName="Skills" count={skills.length} />
          <Badge Icon={Zap} BageName="Always Learning" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name || index}
              variants={skillVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Card */}
              <motion.div
                className="relative flex flex-col items-center justify-center p-2 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden"
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-pink-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Animated gradient border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(45deg, #d946ef, #ec4899, #8b5cf6)",
                    padding: "2px",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />

                {/* Icon container */}
                <motion.div
                  className="relative z-10 m-2"
                  animate={
                    hoveredIndex === index
                      ? {
                        rotate: [0, -10, 10, -10, 0],
                        scale: [1, 1.1, 1.1, 1.1, 1],
                      }
                      : {}
                  }
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative">
                    <img
                      src={skill.icon}
                      alt={`${skill.name} logo`}
                      className="h-16 w-16 object-contain"
                    />

                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                      style={{
                        background:
                          "radial-gradient(circle, #d946ef 0%, transparent 70%)",
                      }}
                    />
                  </div>
                </motion.div>

                {/* Skill name */}
                <span className="relative z-10 text-sm font-semibold text-gray-700 dark:text-gray-200 group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors">
                  {skill.name}
                </span>

                {/* Decorative corner dots */}
                <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-fuchsia-400/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-violet-400/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>

              {/* Floating particles on hover */}
              {hoveredIndex === index && (
                <>
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-fuchsia-400 rounded-full"
                      style={{
                        left: "50%",
                        top: "50%",
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        x: Math.cos((i * 60 * Math.PI) / 180) * 50,
                        y: Math.sin((i * 60 * Math.PI) / 180) * 50,
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
