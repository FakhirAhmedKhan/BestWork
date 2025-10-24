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

// Orbital particle component with customizable orbits
const OrbitParticle = ({ radius, duration, delay, color, size = 2, blur = 1 }) => {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      animate={{
        rotate: 360,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
    >
      <div
        className={`absolute rounded-full ${color}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${radius}px`,
          filter: `blur(${blur}px)`,
          boxShadow: `0 0 ${size * 6}px ${size * 2}px currentColor`,
        }}
      />
    </motion.div>
  );
};

// Reusable orbit container that wraps content
export const OrbitContainer = ({ children, className = "" }) => {
  const orbits = useMemo(() => [
    // Inner orbit - fast, small particles
    ...Array.from({ length: 6 }, (_, i) => ({
      id: `inner-${i}`,
      radius: 180,
      duration: 12,
      delay: i * 2,
      color: "text-pink-400/60 dark:text-pink-500/60",
      size: 2,
      blur: 0.8,
    })),
    // Middle orbit - medium speed
    ...Array.from({ length: 8 }, (_, i) => ({
      id: `middle-${i}`,
      radius: 260,
      duration: 18,
      delay: i * 2.25,
      color: "text-fuchsia-400/50 dark:text-fuchsia-500/50",
      size: 3,
      blur: 1.2,
    })),
    // Outer orbit - slow, larger particles
    ...Array.from({ length: 10 }, (_, i) => ({
      id: `outer-${i}`,
      radius: 340,
      duration: 24,
      delay: i * 2.4,
      color: "text-purple-400/40 dark:text-purple-500/40",
      size: 4,
      blur: 1.5,
    })),
    // Extra outer orbit - very slow
    ...Array.from({ length: 12 }, (_, i) => ({
      id: `extra-${i}`,
      radius: 420,
      duration: 30,
      delay: i * 2.5,
      color: "text-violet-400/30 dark:text-violet-500/30",
      size: 2.5,
      blur: 1,
    })),
  ], []);

  return (
    <div className={`relative ${className}`}>
      {/* Orbital particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {orbits.map((orbit) => (
            <OrbitParticle key={orbit.id} {...orbit} />
          ))}
        </div>
      </div>

      {/* Content */}
      {children}
    </div>
  );
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
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300/20 dark:bg-indigo-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {/* Large gradient orbs */}
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 bg-pink-400/10 dark:bg-pink-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl"
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
            key={`float-${i}`}
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
          key={`symbol-${i}`}
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

      {/* 🔮 Additional Floating Orbs */}
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

      {/* Global orbit particles around the entire viewport */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* Large viewport orbits */}
          {Array.from({ length: 8 }, (_, i) => (
            <OrbitParticle
              key={`global-orbit-1-${i}`}
              radius={Math.min(window.innerWidth, window.innerHeight) * 0.35}
              duration={20}
              delay={i * 2.5}
              color="text-pink-400/40 dark:text-pink-500/40"
              size={3}
              blur={1.5}
            />
          ))}
          {Array.from({ length: 10 }, (_, i) => (
            <OrbitParticle
              key={`global-orbit-2-${i}`}
              radius={Math.min(window.innerWidth, window.innerHeight) * 0.42}
              duration={28}
              delay={i * 2.8}
              color="text-fuchsia-400/30 dark:text-fuchsia-500/30"
              size={2.5}
              blur={1.2}
            />
          ))}
        </div>
      </div>
    </div>
  );
};