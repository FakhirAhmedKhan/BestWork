import { Github, ExternalLink } from "lucide-react";
import { motion as Motion } from "framer-motion";
import {
  fadeInUp,
  AnchorTag,
  Paragraph,
  H3,
  ProjectCardStyle,
  ImgStyle,
} from "../../UI/styles";

export default function ProjectCard({ project }) {
  return (
    <Motion.article
      className={`${ProjectCardStyle} flex flex-col overflow-hidden rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:shadow-xl transition-transform duration-300 hover:-translate-y-2`}
      {...fadeInUp(0.2)}
    >
      {/* Project Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className={`${ImgStyle} w-full h-full object-cover transform transition-transform duration-300 hover:scale-105`}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className={`${H3} text-lg md:text-xl font-bold mb-2`}>
          {project.title}
        </h3>
        <p className={`${Paragraph} flex-grow text-gray-600 dark:text-gray-300`}>
          {project.description}
        </p>

        {/* Actions */}
        <div className="mt-4 flex items-center justify-between gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${AnchorTag} flex items-center gap-2`}
          >
            <ExternalLink className="h-5 w-5" />
            Live Demo
          </a>
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={project.title}
            name={project.title}
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
        </div>
      </div>
    </Motion.article>
  );
}
