import { motion as Motion } from "framer-motion";
import education from "../Data/education.json";

const TimelineItem = ({ item, index }) => {
  const isLeft = index % 2 === 0;
  return (
    <Motion.div
      className={`relative mb-12 flex w-full items-center ${isLeft ? "justify-start" : "justify-end"}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div
        className={`w-full px-4 sm:w-1/2 ${isLeft ? "text-right sm:pr-8" : "text-left sm:pl-8"}`}
      >
        <div className="rounded-xl border border-white/10 bg-white/20 p-6 shadow-xl backdrop-blur-md dark:bg-slate-800/50">
          <p className="mb-1 text-sm font-medium text-purple-500 dark:text-pink-400">
            {item.year}
          </p>
          <h3 className="mb-1 text-xl font-bold">{item.title}</h3>
          <p className="text-md font-semibold text-slate-700 dark:text-slate-300">
            {item.institution}
          </p>
          {item.description && (
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              {item.description}
            </p>
          )}
        </div>
      </div>
      <div className="absolute left-1/2 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-purple-500 bg-white sm:block dark:bg-slate-900"></div>
    </Motion.div>
  );
};

export default function EducationSection() {
  if (!education?.length) return null;

  return (
    <section id="education" className="py-20">
      <Motion.h2
        className="mb-16 text-center text-4xl font-bold tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Journey
      </Motion.h2>

      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-purple-500 to-pink-500"></div>
        {education.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
