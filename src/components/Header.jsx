import { useState, useCallback } from "react";
import NavButton from "./NavButton";
import { Menu, X } from "lucide-react";
const navItems = ["Home", "Works", "Skills", "Email-ME", "My-Journey"];
import { base, header, LogoText } from "../UI/styles.js";

export default function HeaderSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  }, []);

  return (
    <header className={header}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <span className={LogoText}>Simple.Dev</span>

        <nav className="hidden items-center space-x-8 md:flex">
          {navItems.map((item) => (
            <NavButton key={item} item={item} onClick={scrollToSection} />
          ))}
        </nav>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="ml-4 p-2 md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className={base}>
          {navItems.map((item) => (
            <NavButton
              key={item}
              item={item}
              onClick={scrollToSection}
              isMobile
            />
          ))}
        </div>
      )}
    </header>
  );
}
