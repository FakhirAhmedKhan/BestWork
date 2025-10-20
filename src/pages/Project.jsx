import { Code2 } from "lucide-react";
import { HeadIng } from "../UI/components/Head";
import { Badge } from "../UI/components/Badge";
import { CategoryFilter } from "../Components/projects/CategoryFilter";
import { ProjectView } from "../Components/projects/ProjectView";
import { LoardProject } from "../Components/projects/Loard";
import { useProjects } from "../../Hooks/useProjects";

export default function ProjectSection() {
  const { visibleProjects, categories, activeCategory, showMore, changeCategory, filteredProjects } = useProjects();

  return (
    <section id="projects" className="relative min-h-screen py-20 px-4 overflow-hidden max-w-7xl mx-auto text-center">
      <Badge Icon={Code2} BageName="Tech Work" />

      <HeadIng
        Pragaphic="Explore my latest projects showcasing creativity, innovation, and technical expertise." Tittle="My Creations" />

      <CategoryFilter categories={categories} activeCategory={activeCategory} onCategoryChange={changeCategory} />

      <ProjectView visibleProjects={visibleProjects} />

      <LoardProject
        onLoadMore={showMore}
        filteredProjects={filteredProjects} // from useProjects hook
        visibleProjects={visibleProjects}   // from useProjects hook
      />    </section>
  );
}
