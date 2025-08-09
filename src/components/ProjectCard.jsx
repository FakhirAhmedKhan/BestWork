// components/ui/ProjectCard.jsx
import { motion as Motion } from "framer-motion";
import { Github } from "lucide-react";
import { cardBase } from "../../styles";

export default function ProjectCard({ project, index }) {
  return (
    <Motion.div
      className={`${cardBase} bg-white/20 dark:bg-slate-800/50`}
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
            className="text-slate-500 hover:text-purple-500 dark:text-slate-400 dark:hover:text-pink-400"
          >
            <Github className="h-6 w-6" />
          </a>
        </div>
      </div>
    </Motion.div>
  );
}
