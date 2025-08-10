import { useState, useMemo, useCallback } from "react";
import { motion as Motion } from "framer-motion";
import FilterButton from "./FilterButton";
import ProjectCard from "../components/ProjectCard";
import { fadeInUp } from "../UI/motionConfig";
import { btn, sectionTitle } from "../UI/styles";

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
    <section id="👨🏻‍💻" className="py-20">
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
