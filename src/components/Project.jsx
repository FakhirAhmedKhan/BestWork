import { motion } from "framer-motion";
import { useMemo, useState, useEffect } from "react";
import { Code2 } from "lucide-react";
import { Header } from "../UI/components/Head";
import { Card } from "../UI/components/Card";
import { Badge } from "../UI/components/Badge";
import axios from "axios";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function ProjectSection() {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const cachedData = localStorage.getItem("projectsData");
    if (cachedData) {
      setProjects(JSON.parse(cachedData));
    } else {
      axios
        .get(
          "https://raw.githubusercontent.com/FakhirAhmedKhan/DataApi-main/refs/heads/main/Data/trainingData.json"
        )
        .then((res) => {
          const data = res.data.projectsData || [];
          setProjects(data);
          localStorage.setItem("projectsData", JSON.stringify(data));
        })
        .catch((err) => {
          console.error("Error fetching projectsData:", err);
        });
    }
  }, []);

  // Categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(projects.map((p) => p.category)));
    return ["All", ...cats];
  }, [projects]);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);
  }, [projects, activeCategory]);

  // Visible projects (show limited count)
  const visibleProjects = useMemo(() => {
    return filteredProjects.slice(0, visibleCount);
  }, [filteredProjects, visibleCount]);

  return (
    <section id="projects" className="relative min-h-screen py-20 px-4 overflow-hidden">
      <div className="relative max-w-7xl mx-auto text-center">

        {/* Section Header */}
        <Badge Icon={Code2} BageName="Tech Work" />
        <Header
          Tittle="My Creations"
          Pragaphic="Explore my latest projects showcasing creativity, innovation, and technical expertise."
        />

        {/* Category Filter */}
        <motion.div {...fadeInUp} className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <motion.button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setVisibleCount(3);
                }}
                className={`relative px-6 py-3 rounded-full font-semibold transition-all duration-300 ${isActive
                  ? "text-white shadow-xl scale-105"
                  : "text-gray-700 dark:text-gray-300 hover:scale-105 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
                  }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 via-pink-500 to-violet-500 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project) => (
            <Card type="project" data={project} key={project.title} />
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredProjects.length && (
          <motion.div
            className="flex justify-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="group relative px-8 py-4 rounded-full font-bold text-white overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 via-pink-500 to-violet-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-pink-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative flex items-center gap-2">
                Load More Projects
                <motion.span
                  animate={{ y: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  ↓
                </motion.span>
              </span>
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
