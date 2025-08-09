import { useState, lazy, Suspense } from "react";
import HeaderSection from "./components/headerSection";
import HomeSection from "./components/homeSection";
import ContactSection from "./components/ContactSection";
import ChatBot from "./ChatBot/ChatBot";
import trainingData from "./Data/data.js";
import projects from "./Data/project.json";
import skills from "./Data/skills.js";
import education from "./Data/education.json";

// Lazy load sections that aren't immediately visible
const ProjectSection = lazy(() => import("./components/ProjectSection"));
const SkillsSection = lazy(() => import("./components/SkillsSection"));
const EducationSection = lazy(() => import("./components/EducationSection"));

export default function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <div className="bg-slate-100 font-sans text-slate-800 transition-colors duration-500 dark:bg-[#0a0a1a] dark:text-slate-200">
      {/* Background Gradient */}
      <div
        className="fixed inset-0 z-0 opacity-20 dark:opacity-30"
        aria-hidden="true"
      >
        <div className="animate-gradient-x absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600" />
      </div>

      {/* Page Content */}
      <div className="relative z-10">
        <main className="container mx-auto px-4 pt-24 sm:px-6 lg:px-8">
          <HeaderSection />
          <HomeSection />

          <Suspense
            fallback={
              <div className="py-8 text-center">Loading projects...</div>
            }
          >
            <ProjectSection projectData={projects} />
          </Suspense>

          <Suspense
            fallback={<div className="py-8 text-center">Loading skills...</div>}
          >
            <SkillsSection skills={skills} />
          </Suspense>

          <Suspense
            fallback={
              <div className="py-8 text-center">Loading education...</div>
            }
          >
            <EducationSection educationData={education} />
          </Suspense>

          <ContactSection />
        </main>

        {/* Chatbot */}
        <ChatBot
          show={isChatbotOpen}
          onClose={() => setIsChatbotOpen(false)}
          trainingData={trainingData}
        />

        {/* Toggle Button */}
        <button
          aria-label="Toggle ChatBot"
          aria-expanded={isChatbotOpen}
          className="fixed right-5 bottom-5 z-[1100] cursor-pointer rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-[14px] text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-110"
          onClick={() => setIsChatbotOpen((prev) => !prev)}
        >
          <span className="text-[1.6em]">🤖</span>
        </button>
      </div>
    </div>
  );
}
