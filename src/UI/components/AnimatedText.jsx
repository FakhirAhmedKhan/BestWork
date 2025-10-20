import { motion } from 'framer-motion';

export const AnimatedText = ({ text }) => {
  const characters = text.split('');
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const hover = {
    y: -10,
    scale: 1.2,
    color: '#60a5fa',
    textShadow: '0 0 20px rgba(96, 165, 250, 0.8)',
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 300,
    },
  };

  return (
    <motion.div
      className="inline-block"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={child}
          whileHover={char !== ' ' ? hover : undefined}
          className="inline-block cursor-pointer"
          style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
};