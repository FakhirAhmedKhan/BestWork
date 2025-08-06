import projects from "./Data/project.json";
import skills from "./Data/skills.json";
import education from "./Data/education.json";

import ProjectSection from "./component/ProjectSection.jsx";
import ContactSection from "./component/ContactSection.jsx";
import SkillsSection from "./component/SkillsSection.jsx";
import EducationSection from "./component/EducationSection.jsx";
import HomeSection from "./component/homeSection.jsx";
import HeaderSection from "./component/headerSection.jsx";

export default function App() {
  return (
    <div className="bg-slate-100 font-sans text-slate-800 transition-colors duration-500 dark:bg-[#0a0a1a] dark:text-slate-200">
      <div className="fixed inset-0 z-0 opacity-20 dark:opacity-30">
        <div className="animate-gradient-x absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"></div>
      </div>
      <div className="relative z-10">
        <main className="container mx-auto px-4 pt-24 sm:px-6 lg:px-8">
          <HeaderSection />
          <HomeSection />
          <ProjectSection projectData={projects} />
          <SkillsSection skills={skills} />
          <EducationSection educationData={education} />
          <ContactSection />
        </main>
      </div>
    </div>
  );
}
