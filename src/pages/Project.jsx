import { Code2 } from "lucide-react";
import { HeadIng } from "../UI/components/Head";
import { Badge } from "../UI/components/Badge";
import { CategoryFilter } from "../Components/projects/CategoryFilter";
import { ProjectView } from "../Components/projects/ProjectView";
import { LoardProject } from "../Components/projects/Loard";
import { SectionSTyle } from "../UI/components/motionConfige";

export default function ProjectSection() {

  return (
    <section id="projects" className={SectionSTyle}>
      <Badge Icon={Code2} BageName="Tech Work" />

      <HeadIng Pragaphic="Explore my latest projects showcasing creativity, innovation, and technical expertise." Tittle="My Creations" />

      <CategoryFilter />

      <ProjectView />

      <LoardProject />
    </section>
  );
}
