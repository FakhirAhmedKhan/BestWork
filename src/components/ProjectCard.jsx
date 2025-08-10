import { Github } from "lucide-react";
import { motion as Motion } from "framer-motion";
import { fadeInUp } from "../UI/motionConfig";
import {
  anchorTag,
  paragraph,
  h3,
  ProjectCardStyle,
  imgStyle,
} from "../UI/styles";

export default function ProjectCard({ project }) {
  return (
    <Motion.section className={ProjectCardStyle} {...fadeInUp(0.2)}>
      <img src={project.imageUrl} alt={project.title} className={imgStyle} />
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
