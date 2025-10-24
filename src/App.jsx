// App.jsx - Main Router Setup
import { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Animated, OrbitContainer } from "./UI/components/Animated.jsx";
import { BotToggleButton } from "./UI/components/motionConfige.js";
import { ThemeToggle } from "./UI/components/ThemeToggle.jsx";
import { motion } from "framer-motion";

// Lazy imports
const ProjectSection = lazy(() => import("./pages/Project.jsx"));
const SkillsSection = lazy(() => import("./pages/Skill.jsx"));
const Education = lazy(() => import("./pages/Edu.jsx"));
const Footer = lazy(() => import("./pages/Footer.jsx"));
const HeaderSection = lazy(() => import("./pages/Header"));
const HomeSection = lazy(() => import("./pages/Home"));
const ChatBot = lazy(() => import("./pages/ChatBot"));

// Loading Screen Component
function LoadingScreen({ countdown, loadingDots, isContentLoaded }) {
  if (isContentLoaded) return null;

  return (
    <div className="relative z-10 flex items-center justify-center min-h-screen">
      <OrbitContainer>
        {countdown > 0 ? (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-20 shadow-2xl"
          >
            <p className="text-8xl font-bold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
              {countdown}
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-2xl"
          >
            <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-pink-500 border-r-transparent mb-6"></div>
            <p className="text-xl font-medium text-slate-300">
              Loading amazing content{loadingDots}
            </p>
          </motion.div>
        )}
      </OrbitContainer>
    </div>
  );
}

// Layout Component with Header and ChatBot
function Layout({ children, isChatbotOpen, setIsChatbotOpen }) {
  return (
    <>
      <Suspense fallback={<div className="min-h-20" />}>
        <HeaderSection />
      </Suspense>

      <OrbitContainer>{children}</OrbitContainer>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      <Suspense fallback={null}>
        <ChatBot show={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
      </Suspense>

      <button
        aria-label="Toggle ChatBot"
        aria-expanded={isChatbotOpen}
        className={BotToggleButton}
        onClick={() => setIsChatbotOpen((prev) => !prev)}
      >
        <span className="text-[1.6em]">{isChatbotOpen ? "✕" : "🤖"}</span>
      </button>
    </>
  );
}

// Page Components with Suspense
function HomePage() {
  return (
    <Suspense fallback={<PageLoader />}>
      <HomeSection />
    </Suspense>
  );
}

function SkillsPage() {
  return (
    <Suspense fallback={<PageLoader />}>
      <SkillsSection />
    </Suspense>
  );
}

function ProjectsPage() {
  return (
    <Suspense fallback={<PageLoader />}>
      <ProjectSection />
    </Suspense>
  );
}

function EducationPage() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Education />
    </Suspense>
  );
}

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-pink-500 border-r-transparent"></div>
    </div>
  );
}

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
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
        {/* Global animated background */}
        <Animated />

        <motion.div
          className="fixed top-6 right-6 z-50 cursor-grab active:cursor-grabbing"
          drag
          dragMomentum={false}
          whileDrag={{ scale: 1.05 }}
        >
          <ThemeToggle />
        </motion.div>


        {/* Loading Screen */}
        <LoadingScreen
          countdown={countdown}
          loadingDots={loadingDots}
          isContentLoaded={isContentLoaded}
        />

        {/* Main Content with Routes */}
        {isContentLoaded && (
          <div className="relative z-10">
            <Routes>
              <Route
                path="/"
                element={
                  <Layout isChatbotOpen={isChatbotOpen} setIsChatbotOpen={setIsChatbotOpen}>
                    <HomePage />
                  </Layout>
                }
              />
              <Route
                path="/skills"
                element={
                  <Layout isChatbotOpen={isChatbotOpen} setIsChatbotOpen={setIsChatbotOpen}>
                    <SkillsPage />
                  </Layout>
                }
              />
              <Route
                path="/projects"
                element={
                  <Layout isChatbotOpen={isChatbotOpen} setIsChatbotOpen={setIsChatbotOpen}>
                    <ProjectsPage />
                  </Layout>
                }
              />
              <Route
                path="/education"
                element={
                  <Layout isChatbotOpen={isChatbotOpen} setIsChatbotOpen={setIsChatbotOpen}>
                    <EducationPage />
                  </Layout>
                }
              />
              {/* Redirect unknown routes to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        )}
      </div>
    </Router>
  );
}