import { motion } from 'framer-motion';
import { HeadIng } from "../UI/components/Head";
import { FormInput } from "../Components/Footer/FormInput";
import { FooterText } from "../Components/Footer/FooterText";
import { SectionSTyle } from "../UI/components/motionConfige";
import { StatusMessages } from "../Components/Footer/Status Messages";

export default function Footer() {
  // Container animation for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  // Individual item animation
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.6
      }
    }
  };

  // Heading animation with scale effect
  const headingVariants = {
    hidden: { opacity: 0, scale: 0.9, y: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 120,
        duration: 0.8
      }
    }
  };

  // Form animation with slide from bottom
  const formVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 80,
        duration: 0.7
      }
    }
  };

  // Status message fade in
  const statusVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  // Footer text slide up
  const footerTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100,
        delay: 0.3
      }
    }
  };

  return (
    <motion.footer
      id="contact"
      className={SectionSTyle}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Animated Heading */}
      <motion.div variants={headingVariants}>
        <HeadIng
          Tittle="Get In Touch"
          Pragaphic="Drop your email and let's create something amazing together"
        />
      </motion.div>

      {/* Animated Form Input */}
      <motion.div variants={formVariants}>
        <FormInput />
      </motion.div>

      {/* Animated Status Messages */}
      <motion.div variants={statusVariants}>
        <StatusMessages />
      </motion.div>

      {/* Animated Footer Text */}
      <motion.div variants={footerTextVariants}>
        <FooterText />
      </motion.div>
    </motion.footer>
  );
}