import { useState, lazy } from "react";
import HeaderSection from "./components/navSection/Header";
import HomeSection from "./components/homeSection/Home";
import ChatBot from "./components/footerSection/ChatBot";
import Footer from "./components/footerSection/Footer";
import trainingData from "./components/footerSection/data";
import { projects } from "./components/projectSeection/projectValue.js";
import skills from "./components/skillsSection/skills.js";
import education from "./components/skillsSection/skills";

const ProjectSection = lazy(
  () => import("./components/projectSeection/Project.jsx")
);
const SkillsSection = lazy(
  () => import("./components/skillsSection/Skill.jsx")
);
const Education = lazy(() => import("./components/EduSection/Edu.jsx"));

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

      <div className="">
        <main>
          <HeaderSection />
          <HomeSection />
          <ProjectSection projectData={projects} />
          <SkillsSection skills={skills} />
          <Education educationData={education} />
          <Footer />

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
        </main>
      </div>
    </div>
  );
}
