import React, { useState, useMemo, Suspense, lazy } from "react";

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
  const animationStyles = `
    @keyframes float-diagonal {
      0%, 100% {
        transform: translate(0, 0) rotate(0deg);
        opacity: 0;
      }
      10% {
        opacity: 0.8;
      }
      90% {
        opacity: 0.8;
      }
      100% {
        transform: translate(var(--tx), var(--ty)) rotate(360deg);
        opacity: 0;
      }
    }

    @keyframes pulse-glow {
      0%, 100% {
        opacity: 0.4;
        transform: scale(1);
        filter: blur(0px);
      }
      50% {
        opacity: 1;
        transform: scale(1.3);
        filter: blur(2px);
      }
    }

    @keyframes drift {
      0%, 100% {
        transform: translateY(0) translateX(0) scale(1);
        opacity: 0.3;
      }
      25% {
        transform: translateY(-20px) translateX(15px) scale(1.1);
        opacity: 0.6;
      }
      50% {
        transform: translateY(-10px) translateX(-10px) scale(0.9);
        opacity: 0.8;
      }
      75% {
        transform: translateY(15px) translateX(20px) scale(1.05);
        opacity: 0.5;
      }
    }

    @keyframes shimmer {
      0% {
        background-position: -100% 0;
      }
      100% {
        background-position: 200% 0;
      }
    }

    @keyframes orbit {
      0% {
        transform: rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg);
      }
      100% {
        transform: rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg);
      }
    }

    @keyframes wave {
      0%, 100% {
        transform: translateY(0) translateX(0);
      }
      25% {
        transform: translateY(-15px) translateX(10px);
      }
      50% {
        transform: translateY(-5px) translateX(-5px);
      }
      75% {
        transform: translateY(-20px) translateX(15px);
      }
    }

    .gradient-mesh {
      background: 
        radial-gradient(circle at 20% 30%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 40% 80%, rgba(244, 63, 94, 0.12) 0%, transparent 50%);
      animation: pulse-glow 8s ease-in-out infinite;
    }
  `;

  const createFloatingParticle = (id, type) => {
    const configs = {
      small: {
        size: Math.floor(2 + Math.random() * 3),
        colors: ["bg-pink-400", "bg-fuchsia-400", "bg-rose-400"],
        shadows: [
          "0 0 8px 2px rgba(244, 63, 94, 0.6)",
          "0 0 8px 2px rgba(192, 38, 211, 0.6)",
          "0 0 8px 2px rgba(236, 72, 153, 0.6)",
        ],
      },
      medium: {
        size: Math.floor(4 + Math.random() * 6),
        colors: ["bg-pink-500", "bg-purple-500", "bg-fuchsia-500"],
        shadows: [
          "0 0 12px 3px rgba(236, 72, 153, 0.7)",
          "0 0 12px 3px rgba(168, 85, 247, 0.7)",
          "0 0 12px 3px rgba(217, 70, 239, 0.7)",
        ],
      },
      large: {
        size: Math.floor(8 + Math.random() * 10),
        colors: [
          "bg-gradient-to-br from-pink-400 to-fuchsia-600",
          "bg-gradient-to-br from-purple-400 to-pink-600",
        ],
        shadows: [
          "0 0 20px 5px rgba(236, 72, 153, 0.8)",
          "0 0 20px 5px rgba(168, 85, 247, 0.8)",
        ],
      },
    };

    const config = configs[type];
    const colorIndex = Math.floor(Math.random() * config.colors.length);
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    const endX = (Math.random() - 0.5) * 150;
    const endY = (Math.random() - 0.5) * 150;
    const duration = 8 + Math.random() * 12;
    const delay = Math.random() * 8;
    const blur = type === "small" ? 0.5 : type === "medium" ? 1 : 2;

    return {
      id,
      className: `absolute rounded-full ${config.colors[colorIndex]}`,
      style: {
        left: `${startX}%`,
        top: `${startY}%`,
        width: `${config.size}px`,
        height: `${config.size}px`,
        "--tx": `${endX}vw`,
        "--ty": `${endY}vh`,
        animation: `float-diagonal ${duration}s ease-in-out ${delay}s infinite`,
        boxShadow: config.shadows[colorIndex],
        filter: `blur(${blur}px)`,
      },
    };
  };

  const createDriftingParticle = (id) => {
    const size = Math.floor(3 + Math.random() * 5);
    const duration = 6 + Math.random() * 8;
    const delay = Math.random() * 6;

    return {
      id,
      className:
        "absolute rounded-full bg-gradient-to-r from-pink-300 via-purple-300 to-fuchsia-300",
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${size}px`,
        height: `${size}px`,
        animation: `drift ${duration}s ease-in-out ${delay}s infinite`,
        boxShadow: "0 0 10px 2px rgba(236, 72, 153, 0.5)",
        filter: "blur(1px)",
      },
    };
  };

  const createOrbitingParticle = (id) => {
    const size = Math.floor(2 + Math.random() * 4);
    const radius = 30 + Math.random() * 80;
    const duration = 10 + Math.random() * 15;
    const delay = Math.random() * 10;

    return {
      id,
      className: "absolute rounded-full bg-pink-400",
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${size}px`,
        height: `${size}px`,
        "--orbit-radius": `${radius}px`,
        animation: `orbit ${duration}s linear ${delay}s infinite`,
        boxShadow: "0 0 6px 1px rgba(244, 63, 94, 0.6)",
        opacity: 0.6,
      },
    };
  };

  const createWaveParticle = (id) => {
    const size = Math.floor(3 + Math.random() * 6);
    const duration = 5 + Math.random() * 7;
    const delay = Math.random() * 5;

    return {
      id,
      className:
        "absolute rounded-full bg-gradient-to-br from-fuchsia-400 to-pink-500",
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${size}px`,
        height: `${size}px`,
        animation: `wave ${duration}s ease-in-out ${delay}s infinite`,
        boxShadow: "0 0 12px 3px rgba(217, 70, 239, 0.7)",
        filter: "blur(1.5px)",
      },
    };
  };

  const { allParticles } = useMemo(() => {
    const particles = [];

    // Create different types of particles
    for (let i = 0; i < 25; i++) {
      particles.push(createFloatingParticle(`float-small-${i}`, "small"));
    }
    for (let i = 0; i < 15; i++) {
      particles.push(createFloatingParticle(`float-medium-${i}`, "medium"));
    }
    for (let i = 0; i < 8; i++) {
      particles.push(createFloatingParticle(`float-large-${i}`, "large"));
    }
    for (let i = 0; i < 20; i++) {
      particles.push(createDriftingParticle(`drift-${i}`));
    }
    for (let i = 0; i < 15; i++) {
      particles.push(createOrbitingParticle(`orbit-${i}`));
    }
    for (let i = 0; i < 12; i++) {
      particles.push(createWaveParticle(`wave-${i}`));
    }

    return { allParticles: particles };
  }, []);

  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <div className="bg-neutral-50 font-sans text-neutral-800 transition-colors duration-500 dark:bg-[#0a0a1a] dark:text-neutral-300 relative overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="fixed inset-0 z-0 gradient-mesh" aria-hidden="true">
        <style>{animationStyles}</style>
      </div>

      {/* Particle Animation Layer */}
      <div
        className="fixed inset-0 z-[1] opacity-60 dark:opacity-70"
        aria-hidden="true"
      >
        {allParticles.map((p) => (
          <div key={p.id} className={p.className} style={p.style} />
        ))}
      </div>

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
