import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header, LogoText, HeaderDiv, DivNav, styles } from "../UI/styles.js";

export default function HeaderSection() {
  const navItems = [
    { id: "home", icon: "🏠" },
    { id: "about", icon: "👨🏻‍💻" },
    { id: "skills", icon: "🛠️" },
    { id: "projects", icon: "🚊" },
    { id: "contact", icon: "📧" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  // Framer Motion variants
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
  };

  return (
    <header className={Header}>
      <div className={HeaderDiv}>
        {/* Logo */}
        <div className={LogoText}>
          <a href="#">Simple.Dev</a>
        </div>

        {/* Desktop Navigation */}
        <nav className={`${DivNav} hidden md:flex gap-4`}>
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`${styles} hover:scale-110 transition-transform duration-200`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Go to ${item.id}`}
            >
              {item.icon}
            </motion.button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="ml-4 p-2 md:hidden"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>  
      </div>

      {/* Mobile Navigation with Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="md:hidden absolute top-full left-0 w-full text-white flex flex-row items-center bg-black/50 backdrop-blur-md"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="py-2 px-4 w-full text-center hover:bg-gray-800 rounded-md transition"
                variants={itemVariants}
              >
                {item.icon}
              </motion.button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
