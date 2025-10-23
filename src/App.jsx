import { useState, useEffect, Suspense, lazy } from "react";
import { Animated } from "./UI/components/Animated.jsx";
import { BotToggleButton } from "./UI/components/motionConfige.js";
import { ThemeToggle } from "./UI/components/ThemeToggle.jsx";

// Lazy imports
const ProjectSection = lazy(() => import("./pages/Project.jsx"));
const SkillsSection = lazy(() => import("./pages/Skill.jsx"));
const Education = lazy(() => import("./pages/Edu.jsx"));
const Footer = lazy(() => import("./pages/Footer.jsx"));
const HeaderSection = lazy(() => import("./pages/Header"));
const HomeSection = lazy(() => import("./pages/Home"));
const ChatBot = lazy(() => import("./pages/ChatBot"));

export default function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [loadingDots, setLoadingDots] = useState("");
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [hasPreloaded, setHasPreloaded] = useState(false);

  // Countdown (3 → 2 → 1)
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  // Animate dots after countdown reaches 0
  useEffect(() => {
    if (countdown === 0 && !isContentLoaded) {
      const interval = setInterval(() => {
        setLoadingDots((prev) => (prev.length < 3 ? prev + "." : ""));
      }, 400);
      return () => clearInterval(interval);
    }
  }, [countdown, isContentLoaded]);

  // Preload all components during countdown
  useEffect(() => {
    const preload = async () => {
      await Promise.all([
        import("./pages/Project.jsx"),
        import("./pages/Skill.jsx"),
        import("./pages/Edu.jsx"),
        import("./pages/Footer.jsx"),
        import("./pages/Header"),
        import("./pages/Home"),
        import("./pages/ChatBot"),
      ]);
      setHasPreloaded(true);
    };
    preload();
  }, []);

  // After countdown ends and preloading is done → show content
  useEffect(() => {
    if (countdown === 0 && hasPreloaded) {
      const timer = setTimeout(() => setIsContentLoaded(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown, hasPreloaded]);

  return (
    <div className=" font-sans text-neutral-800 transition-colors duration-500 dark:bg-[#0a0a1a] dark:text-neutral-300 relative overflow-hidden">
      <Animated />

      <main className="relative z-10">
        <ThemeToggle />
        {/* Step 1: Countdown */}
        {countdown > 0 && (
          <div className="flex items-center justify-center min-h-screen">
            <p className="text-6xl font-bold text-pink-500 animate-pulse transform transition-all duration-500 scale-110">
              {countdown}
            </p>
          </div>
        )}

        {/* Step 2: Loading Text */}
        {countdown === 0 && !isContentLoaded && (
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
              <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-pink-500 border-r-transparent mb-4"></div>
              <p className="text-lg font-medium">
                Loading amazing content{loadingDots}
              </p>
            </div>
          </div>
        )}

        {/* Step 3: Actual Content */}
        {isContentLoaded && (
          <Suspense
            fallback={
              <div className="flex items-center justify-center min-h-screen">
                <p className="text-lg font-medium text-pink-500">
                  Final touches...
                </p>
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
        )}

        {/* ChatBot toggle only after full load */}
        {isContentLoaded && (
          <button
            aria-label="Toggle ChatBot"
            aria-expanded={isChatbotOpen}
            className={BotToggleButton}
            onClick={() => setIsChatbotOpen((prev) => !prev)}
          >
            <span className="text-[1.6em]">{isChatbotOpen ? "✕" : "🤖"}</span>
          </button>
        )}
      </main>
    </div>
  );
}
