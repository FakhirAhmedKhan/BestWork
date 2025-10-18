import React, { useState, useMemo, Suspense, lazy } from "react";
import { Animated } from "./UI/components/Animated.jsx";

const ProjectSection = lazy(() => import("./components/Project.jsx"));
const SkillsSection = lazy(() => import("./components/Skill.jsx"));
const Education = lazy(() => import("./components/Edu.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));
const HeaderSection = lazy(() => import("./components/Header"));
const HomeSection = lazy(() => import("./components/Home"));
const ChatBot = lazy(() => import("./components/ChatBot"));

const BotToggleButton =
  "fixed bottom-5 right-5 z-30 h-16 w-16 rounded-full bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-600 text-white shadow-2xl flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 hover:shadow-pink-500/50 transition-all duration-300 hover:scale-110 backdrop-blur-sm";

export default function App() {

  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <div className="bg-neutral-50 font-sans text-neutral-800 transition-colors duration-500 dark:bg-[#0a0a1a] dark:text-neutral-300 relative overflow-hidden">

      <Animated />
      {/* Main Content */}
      <div className="relative z-10">
        <main>
          <Suspense
            fallback={
              <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                  <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-pink-500 border-r-transparent mb-4"></div>
                  <p className="text-lg font-medium">
                    Loading amazing content...
                  </p>
                </div>
              </div>
            }
          >
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
          </Suspense>
          <button
            aria-label="Toggle ChatBot"
            aria-expanded={isChatbotOpen}
            className={BotToggleButton}
            onClick={() => setIsChatbotOpen((prev) => !prev)}
          >
            <span className="text-[1.6em]">{isChatbotOpen ? "✕" : "🤖"}</span>
          </button>
        </main>
      </div>
    </div>
  );
}
