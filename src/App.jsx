import { useState, lazy, Suspense } from "react";
import HeaderSection from "./components/Header.jsx";
import HomeSection from "./components/Home.jsx";
import ChatBot from "./components/ChatBot";
import Footer from "./components/Footer";
import trainingData from "./Data/data.js";
import projects from "./Data/project.json";
import skills from "./Data/skills.js";
import education from "./Data/education.json";

const ProjectSection = lazy(() => import("./components/Project.jsx"));
const SkillsSection = lazy(() => import("./components/Skill.jsx"));
const Education = lazy(() => import("./components/Edu.jsx"));

import {
  BotToggleButton,
  MainBGColor,
  MainBGColorSecondary,
  MainBGColorTertiary,
} from "../src/UI/styles.js";

export default function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <div className={MainBGColor}>
      <div className={MainBGColorSecondary} aria-hidden="true">
        <div className={MainBGColorTertiary} />
      </div>

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
            <Education educationData={education} />
          </Suspense>
          <Footer />
        </main>

        <ChatBot
          show={isChatbotOpen}
          onClose={() => setIsChatbotOpen(false)}
          trainingData={trainingData}
        />
        <button
          aria-label="Toggle ChatBot"
          aria-expanded={isChatbotOpen}
          className={BotToggleButton}
          onClick={() => setIsChatbotOpen((prev) => !prev)}
        >
          <span className="text-[1.6em]">🤖</span>
        </button>
      </div>
    </div>
  );
}
