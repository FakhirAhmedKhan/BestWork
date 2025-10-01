import { motion } from "framer-motion";
import { useMemo, useState, useEffect } from "react";
import axios from "axios";
import {
  fadeInUp,
  SectionTitle,
  ProjectFilterStyle,
  styles,
  projectDivStyle,
  ProjectCardStyle,
  ImgStyle,
  H3,
  Paragraph,
  AnchorTag,
  socialLinksDiv,
} from "../UI/styles";

export default function ProjectSection() {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [visibleCount, setVisibleCount] = useState(3); // 👈 default 3

  // Fetch projects
  useEffect(() => {
    const storedData = localStorage.getItem("projects");
    if (storedData) {
      setProjects(JSON.parse(storedData));
    } else {
      axios
        .get(
          "https://raw.githubusercontent.com/FakhirAhmedKhan/DataApi-main/main/Data/projectsData.json"
        )
        .then((res) => {
          const data = res.data.projects || [];
          setProjects(data);
          localStorage.setItem("projects", JSON.stringify(data));
        })
        .catch((err) => console.error("Error fetching projects:", err));
    }
  }, []);

  const categories = useMemo(
    () => Array.from(new Set(projects.map((p) => p.category))),
    [projects]
  );

  useEffect(() => {
    if (categories.length) {
      setActiveCategory(categories[0]);
    }
  }, [categories]);

  const filteredProjects = useMemo(() => {
    return activeCategory
      ? projects.filter((p) => p.category === activeCategory)
      : projects;
  }, [projects, activeCategory]);

  // Limit  projects
  const visibleProjects = useMemo(() => {
    return filteredProjects.slice(0, visibleCount);
  }, [filteredProjects, visibleCount]);

  return (
    <section id="projects" className="py-16">
      <motion.h2 {...fadeInUp(0.3)} className={SectionTitle}>
        My Creations
      </motion.h2>

      <motion.div {...fadeInUp(0.2)} className={ProjectFilterStyle}>
        {categories.map((cat) => {
          const active = activeCategory === cat;
          const buttonClass = `${styles.base} ${
            active ? styles.active : styles.inactive
          }`;
          return (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(3);
              }}
              className={buttonClass}
            >
              {cat}
            </button>
          );
        })}
      </motion.div>

      <div className={projectDivStyle}>
        {visibleProjects.map((project, idx) => (
          <motion.article
            key={idx}
            className={`${ProjectCardStyle} flex flex-col overflow-hidden rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:shadow-xl transition-transform duration-300 hover:-translate-y-2`}
            {...fadeInUp(0.2)}
          >
            <div className="relative w-full h-48 overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className={`${ImgStyle} w-full h-full object-cover transform transition-transform duration-300 hover:scale-105`}
              />
            </div>
            <div className="flex flex-col flex-grow p-6">
              <h3 className={`${H3} text-lg md:text-xl font-bold mb-2`}>
                {project.title}
              </h3>
              <p
                className={`${Paragraph} flex-grow text-gray-600 dark:text-gray-300`}
              >
                {project.description}
              </p>

              <div className={socialLinksDiv}>
                {project.links?.map(({ url, icon, label }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={AnchorTag}
                    aria-label={label}
                    name={label}
                  >
                    <img
                      src={icon}
                      alt={label}
                      className="w-7 h-7 hover:scale-110 transition-transform duration-300"
                    />
                  </a>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {visibleCount < filteredProjects.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setVisibleCount((prev) => prev + 3)} 
            className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}
