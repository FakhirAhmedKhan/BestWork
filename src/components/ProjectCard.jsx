import { Github } from "lucide-react";
import { motion as Motion } from "framer-motion";
import {
  fadeInUp,
  AnchorTag,
  Paragraph,
  H3,
  ProjectCardStyle,
  ImgStyle,
} from "../UI/styles";

export default function ProjectCard({ project }) {
  return (
    <Motion.section className={ProjectCardStyle} {...fadeInUp(0.2)}>
      <img src={project.imageUrl} alt={project.title} className={ImgStyle} />
      <div className="flex flex-grow flex-col p-6">
        <h3 className={H3}>{project.title}</h3>
        <p className={Paragraph}>{project.description}</p>
        <div className="mt-auto flex items-center justify-between">
          <a href={project.link} target="_blank" className={AnchorTag}>
            Live Demo
          </a>
          <a
            href={project.codeLink}
            target="_blank"
            className={AnchorTag}
            aria-label={project.title}
            name={project.title}
          >
            <Github className="h-6 w-6" />
          </a>
        </div>
      </div>
    </Motion.section>
  );
}
