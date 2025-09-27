import { useState, lazy } from "react";
import ChatBot from "./components/footerSection/ChatBot";
import trainingData from "./components/footerSection/data";

const ProjectSection = lazy(() => import("./components/Project.jsx"));
const SkillsSection = lazy(() => import("./components/Skill.jsx"));
const Education = lazy(() => import("./components/Edu.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));
const HeaderSection = lazy(() => import("./components/Header"));
const HomeSection = lazy(() => import("./components/Home"));

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
          <SkillsSection />
          <ProjectSection />
          <Education />
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
