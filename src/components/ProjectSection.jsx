import { useState, useMemo, useCallback } from "react";
import { motion as Motion } from "framer-motion";
import { Github } from "lucide-react";

const filterBtnBase =
  "rounded-full px-4 py-2 text-sm transition-all duration-300 md:text-base";
const filterBtnActive = "bg-purple-600 text-white shadow-lg";
const filterBtnInactive = "bg-white/50 backdrop-blur-sm dark:bg-slate-800/50";
const FilterButton = ({ label, active, onClick }) => (
  <button
    onClick={() => onClick(label)}
    className={`${filterBtnBase} ${active ? filterBtnActive : filterBtnInactive}`}
    aria-pressed={active}
  >
    {label}
  </button>
);

const cardBase =
  "group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/20 shadow-lg backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-slate-800/50";
const imgBase =
  "h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110";
const ProjectCard = ({ project, index }) => (
  <Motion.div
    className={cardBase}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <img src={project.imageUrl} alt={project.title} className={imgBase} />
    <div className="flex flex-grow flex-col p-6">
      <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
      <p className="mb-4 flex-grow text-sm text-slate-600 dark:text-slate-400">
        {project.description}
      </p>
      <div className="mt-auto flex items-center justify-between">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-semibold text-purple-600 hover:underline dark:text-pink-400"
        >
          Live Demo
        </a>
        <a
          href={project.codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 transition-colors hover:text-purple-500 dark:text-slate-400 dark:hover:text-pink-400"
        >
          <Github className="h-6 w-6" />
        </a>
      </div>
    </div>
  </Motion.div>
);

export default function ProjectSection({ projectData }) {
  const categories = useMemo(
    () => [...new Set(projectData.map((p) => p.category))],
    [projectData],
  );
  const [filter, setFilter] = useState(projectData[0]?.category || "");
  const [showAll, setShowAll] = useState(false);
  const handleFilterChange = useCallback((cat) => {
    setFilter(cat);
    setShowAll(false);
  }, []);
  const filtered = useMemo(
    () => projectData.filter((p) => p.category === filter),
    [filter, projectData],
  );
  const visibleProjects = showAll ? filtered : filtered.slice(0, 3);

  return (
    <section id="projects" className="py-20">
      <Motion.h2
        className="mb-12 text-center text-4xl font-bold tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Creations
      </Motion.h2>
      <Motion.div
        className="mb-12 flex flex-wrap justify-center gap-2 md:gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        {categories.map((cat) => (
          <FilterButton
            key={cat}
            label={cat}
            active={filter === cat}
            onClick={handleFilterChange}
          />
        ))}
      </Motion.div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
      {filtered.length > 3 && (
        <Motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 font-bold text-white transition-transform duration-300 hover:scale-105"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </Motion.div>
      )}
    </section>
  );
}
