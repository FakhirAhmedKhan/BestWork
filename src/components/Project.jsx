import { useState, useMemo, useCallback } from "react";
import { motion as Motion } from "framer-motion";
import FilterButton from "./FilterButton";
import ProjectCard from "../components/ProjectCard";
import { fadeInUp } from "../UI/motionConfig";
import { SectionTitle, ProjectFilterStyle } from "../UI/styles";

export default function ProjectSection({ projectData }) {
  const categories = useMemo(
    () => [...new Set(projectData.map((p) => p.category))],
    [projectData],
  );

  const [filter, setFilter] = useState(categories[0] || "");

  const handleFilterChange = useCallback((cat) => {
    setFilter(cat);
  }, []);

  const filtered = useMemo(
    () => projectData.filter((p) => p.category === filter),
    [filter, projectData],
  );

  return (
    <section id="👨🏻‍💻" className="py-20">
      <Motion.h2 {...fadeInUp()} className={SectionTitle}>
        My Creations
      </Motion.h2>

      <Motion.div {...fadeInUp(0.2)} className={ProjectFilterStyle}>
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
        {filtered.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
