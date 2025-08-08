// App.jsx
import { useState } from "react";
import HeaderSection from "./components/headerSection";
import HomeSection from "./components/homeSection";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import ChatBot from "./ChatBot/ChatBot";
import trainingData from "./Data/data.js";
import projects from "./Data/project.json";
import skills from "./Data/skills.js";
import education from "./Data/education.json";

export default function App() {
  const [showChatbots, setShowChatbots] = useState(false);

  return (
    <div className="bg-slate-100 font-sans text-slate-800 transition-colors duration-500 dark:bg-[#0a0a1a] dark:text-slate-200">
      {/* Background Gradient */}
      <div className="fixed inset-0 z-0 opacity-20 dark:opacity-30">
        <div className="animate-gradient-x absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600" />
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

        {/* Chatbot */}
        <ChatBot
          show={showChatbots}
          onClose={() => setShowChatbots(false)}
          trainingData={trainingData}
        />

        {/* Toggle Button */}
        <button
          aria-label="Toggle ChatBot"
          className="fixed right-5 bottom-5 z-[1100] cursor-pointer rounded-full p-[14px] text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-110"
          onClick={() => setShowChatbots((prev) => !prev)}
        >
          <span className="material-symbols-rounded text-[1.6em]">🤖</span>
        </button>
      </div>
    </div>
  );
}
