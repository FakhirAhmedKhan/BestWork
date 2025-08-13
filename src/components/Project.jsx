import { motion as Motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import {
  fadeInUp,
  SectionTitle,
  ProjectFilterStyle,
  styles,
  projectDivStyle,
} from "../UI/styles";
import { useProjectFilter } from "../script/script";
import projectData from "../Data/project.json";

export default function ProjectSection() {
  const { categories, activeCategory, filteredProjects, setActiveCategory } =
    useProjectFilter(projectData);

  return (
    <section id="👨🏻‍💻">
      <Motion.h2 {...fadeInUp(0.3)} className={SectionTitle}>
        My Creations
      </Motion.h2>

      <Motion.div {...fadeInUp(0.2)} className={ProjectFilterStyle}>
        {categories.map((cat) => {
          const active = activeCategory === cat;
          const buttonClass = `${styles.base} ${active ? styles.active : styles.inactive}`;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={buttonClass}
            >
              {cat}
            </button>
          );
        })}
      </Motion.div>

      <div className={projectDivStyle}>
        {(Array.isArray(filteredProjects) ? filteredProjects : []).map(
          (project) => (
            <ProjectCard key={project.id || project.title} project={project} />
          ),
        )}
      </div>
    </section>
  );
}
