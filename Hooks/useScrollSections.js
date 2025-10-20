import { useState, useEffect, useCallback } from "react";
import { Home, Code, Briefcase, User } from "lucide-react";

export const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "skills", label: "Skills", icon: Code },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "about", label: "Journey", icon: User },
];

export const useScrollSections = () => {
  const [activeSection, setActiveSection] = useState(navItems[0]?.id || "");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setScrolled(scrollY > 50);

          const scrollPosition = scrollY + 200;
          for (let i = navItems.length - 1; i >= 0; i--) {
            const section = document.getElementById(navItems[i].id);
            if (section && section.offsetTop <= scrollPosition) {
              setActiveSection(navItems[i].id);
              break;
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((id) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setActiveSection(id);
      }
    }, 250);
  }, []);

  return {
    navItems,
    activeSection,
    isMenuOpen,
    scrolled,
    setIsMenuOpen,
    scrollToSection,
  };
};
