import { BsGithub } from "react-icons/bs";
import { ExternalLink } from "lucide-react";
import { useAppContext } from "../../../Hooks/useAppLogic";

export const ProjectView = () => {
  const { visibleProjects } = useAppContext();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {visibleProjects.map((project) => (
        <div
          key={project.id}
          className="w-full bg-blur rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50 flex flex-col"
        >
          {/* Image Container - Fixed Height */}
          <div className="relative overflow-hidden group h-56 flex-shrink-0">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full shadow-lg">
                {project.category}
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content - Flexible Height with Fixed Bottom */}
          <div className="p-6 flex flex-col flex-grow">
            {/* Title - Fixed Height */}
            <h2 className="text-2xl font-bold text-gray-800 mb-3 line-clamp-2 min-h-[64px]">
              {project.title}
            </h2>

            {/* Description - Fixed Height */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 min-h-[63px]">
              {project.description}
            </p>

            {/* Action Buttons - Pushed to Bottom */}
            <div className="flex gap-3 mt-auto">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/50"
              >
                <ExternalLink size={18} />
                <span>Live Demo</span>
              </a>

              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-200 hover:shadow-lg"
              >
                <BsGithub size={18} />
                <span>Code</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};