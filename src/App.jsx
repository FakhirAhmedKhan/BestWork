import { useState, lazy } from "react";
import {
  BotToggleButton,
  MainBGColor,
  MainBGColorSecondary,
  MainBGColorTertiary,
} from "../src/UI/styles.js";
const ProjectSection = lazy(() => import("./components/Project.jsx"));
const SkillsSection = lazy(() => import("./components/Skill.jsx"));
const Education = lazy(() => import("./components/Edu.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));
const HeaderSection = lazy(() => import("./components/Header"));
const HomeSection = lazy(() => import("./components/Home"));
const ChatBot = lazy(() => import("./components/ChatBot"));

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
