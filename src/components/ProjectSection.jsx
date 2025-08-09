import { useState, useMemo, useCallback } from "react";
import { motion as Motion } from "framer-motion";
import FilterButton from "../components/FilterButton";
import { fadeInUp } from "../UI/motionConfig";
import {
  anchorTag,
  paragraph,
  btn,
  sectionTitle,
  h3,
  ProjectCardStyle,
} from "../UI/styles";
import { Github } from "lucide-react";

function ProjectCard({ project, index }) {
  return (
    <Motion.section
      className={ProjectCardStyle}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <img
        src={project.imageUrl}
        alt={project.title}
        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="flex flex-grow flex-col p-6">
        <h3 className={h3}>{project.title}</h3>
        <p className={paragraph}>{project.description}</p>
        <div className="mt-auto flex items-center justify-between">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={anchorTag}
          >
            Live Demo
          </a>
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className={anchorTag}
          >
            <Github className="h-6 w-6" />
          </a>
        </div>
      </div>
    </Motion.section>
  );
}

export default function ProjectSection({ projectData }) {
  const categories = useMemo(
    () => [...new Set(projectData.map((p) => p.category))],
    [projectData],
  );

  const [filter, setFilter] = useState(categories[0] || "");
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
      <Motion.h2 {...fadeInUp()} className={sectionTitle}>
        My Creations
      </Motion.h2>

      <Motion.div
        {...fadeInUp(0.2)}
        className="mb-12 flex flex-wrap justify-center gap-2 md:gap-4"
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
        <Motion.div {...fadeInUp(0.3)} className="mt-12 text-center">
          <button onClick={() => setShowAll((prev) => !prev)} className={btn}>
            {showAll ? "Show Less" : "Show More"}
          </button>
        </Motion.div>
      )}
    </section>
  );
}
