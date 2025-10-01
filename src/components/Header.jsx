import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Header,
  LogoText,
  HeaderDiv,
  DivNav,
  styles,
  HeadmenuVariants,
  HeaditemVariants,
} from "../UI/styles.js";

export default function HeaderSection() {
  const navItems = [
    { id: "home", icon: "🏠" },
    { id: "about", icon: "🚊" },
    { id: "skills", icon: "🛠️" },
    { id: "projects", icon: "👨🏻‍💻" },
    { id: "contact", icon: "📧" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className={Header}>
      <div className={HeaderDiv}>
        <div className={LogoText}>
          <a href="#">Simple.Dev</a>
        </div>

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

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="md:hidden absolute top-full left-0 w-full text-white flex flex-row items-center bg-black/50 backdrop-blur-md"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={HeadmenuVariants}
          >
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="py-2 px-4 w-full text-center hover:bg-gray-800 rounded-md transition"
                variants={HeaditemVariants}
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
