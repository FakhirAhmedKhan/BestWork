import { motion } from "framer-motion";
import { Eye, ExternalLink } from "lucide-react";

export const Card = ({ type, data, index }) => {
  if (type === "project") {
    return (
     <></>
    );
  }

  if (type === "education") {
    const isLeft = index % 2 === 0;

    return (
      <div className="relative max-w-6xl mx-auto">
        {/* Enhanced Vertical Timeline */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 transform -translate-x-1/2 shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 blur-sm opacity-50" />
        </div>

        {/* Timeline Dot */}
        <div className="hidden md:block absolute left-1/2 top-12 w-4 h-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full transform -translate-x-1/2 shadow-lg z-10">
          <span className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full animate-ping opacity-75" />
        </div>

        <motion.div
          className={`w-full md:w-[calc(50%-3rem)] group ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
            }`}
          whileHover={{ scale: 1.02, x: isLeft ? 4 : -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl p-8 border border-gray-100 dark:border-gray-800 overflow-hidden transition-shadow duration-500">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-indigo-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-700" />

            {/* Decorative Corner Accent */}
            <div className={`absolute top-0 ${isLeft ? "right-0" : "left-0"} w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 ${isLeft ? "rounded-bl-full" : "rounded-br-full"} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="relative z-10">
              {/* Enhanced Year Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold text-sm shadow-lg mb-5 relative overflow-hidden">
                <span className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-700" />
                <svg
                  className="w-4 h-4 relative z-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="relative z-10">{data.year}</span>
              </div>

              {/* Enhanced Title */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:via-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {data.title}
              </h3>

              {/* Enhanced Description */}
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                {data.description}
              </p>

              {/* Decorative Line */}
              <div className="mt-6 h-1 w-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full opacity-50 group-hover:w-24 group-hover:opacity-100 transition-all duration-500" />
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return null;
};