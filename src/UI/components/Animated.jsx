import { useMemo } from "react";
import { motion } from "framer-motion";

export const animationStyles = `
  @keyframes float-diagonal {
    0%, 100% {
      transform: translate(0, 0) rotate(0deg);
      opacity: 0;
    }
    10%, 90% {
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
      filter: blur(3px);
    }
  }

  @keyframes drift {
    0%, 100% {
      transform: translateY(0) translateX(0) scale(1);
      opacity: 0.3;
    }
    25% {
      transform: translateY(-25px) translateX(20px) scale(1.1);
      opacity: 0.6;
    }
    50% {
      transform: translateY(-15px) translateX(-10px) scale(0.9);
      opacity: 0.9;
    }
    75% {
      transform: translateY(15px) translateX(25px) scale(1.05);
      opacity: 0.5;
    }
  }

  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  @keyframes orbit {
    0% { transform: rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg); }
    100% { transform: rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg); }
  }

  @keyframes wave {
    0%, 100% { transform: translateY(0) translateX(0); }
    25% { transform: translateY(-20px) translateX(15px); }
    50% { transform: translateY(-8px) translateX(-10px); }
    75% { transform: translateY(25px) translateX(20px); }
  }

  .gradient-mesh {
    background: 
      radial-gradient(circle at 25% 30%, rgba(236, 72, 153, 0.18) 0%, transparent 60%),
      radial-gradient(circle at 80% 60%, rgba(168, 85, 247, 0.18) 0%, transparent 60%),
      radial-gradient(circle at 50% 80%, rgba(244, 63, 94, 0.15) 0%, transparent 60%);
    animation: pulse-glow 10s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`;

const createParticle = (id, type) => {
  const settings = {
    small: { size: 2 + Math.random() * 2, color: "bg-pink-400/50", blur: 0.8 },
    medium: { size: 4 + Math.random() * 4, color: "bg-fuchsia-400/60", blur: 1.2 },
    large: { size: 8 + Math.random() * 8, color: "bg-gradient-to-br from-pink-400 to-purple-500", blur: 1.8 },
  };
  const cfg = settings[type];
  const startX = Math.random() * 100;
  const startY = Math.random() * 100;
  const endX = (Math.random() - 0.5) * 120;
  const endY = (Math.random() - 0.5) * 120;
  const duration = 8 + Math.random() * 10;
  const delay = Math.random() * 5;

  return {
    id,
    className: `absolute rounded-full ${cfg.color}`,
    style: {
      left: `${startX}%`,
      top: `${startY}%`,
      width: `${cfg.size}px`,
      height: `${cfg.size}px`,
      "--tx": `${endX}vw`,
      "--ty": `${endY}vh`,
      animation: `float-diagonal ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s infinite`,
      filter: `blur(${cfg.blur}px)`,
      boxShadow: "0 0 12px 3px rgba(236, 72, 153, 0.5)",
    },
  };
};

export const Animated = () => {
  const particles = useMemo(() => {
    const list = [];
    for (let i = 0; i < 20; i++) list.push(createParticle(`small-${i}`, "small"));
    for (let i = 0; i < 15; i++) list.push(createParticle(`medium-${i}`, "medium"));
    for (let i = 0; i < 10; i++) list.push(createParticle(`large-${i}`, "large"));
    return list;
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <style>{animationStyles}</style>

      {/* 🌈 Gradient Base Layer */}
      <div className="fixed inset-0 z-0 gradient-mesh" />

      {/* ✨ Particle Layer */}
      <div className="fixed inset-0 z-[1] opacity-70 dark:opacity-80">
        {particles.map((p) => (
          <div key={p.id} className={p.className} style={p.style} />
        ))}
      </div>
      {/* Animated background elements */}
      <div className="absolute inset-0  pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300/20 dark:bg-indigo-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      <div className="absolute inset-0  pointer-events-none">
        {/* Large gradient orbs */}
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-fuchsia-400/40 dark:bg-fuchsia-600/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      {/* 💫 Floating Code Symbols */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-fuchsia-400/20 dark:text-fuchsia-600/30 font-mono text-3xl font-bold"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.15, 0.4, 0.15],
            rotate: [0, 360],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          {["<>", "{ }", "()", "/>", "[]"][Math.floor(Math.random() * 5)]}
        </motion.div>
      ))}

      {/* 🔮 Floating Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-80 h-80 bg-pink-400/10 dark:bg-pink-700/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 40, 0] }}
        transition={{ duration: 9, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-16 right-10 w-96 h-96 bg-violet-400/10 dark:bg-violet-700/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.25, 1], x: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </div>
  );
};
