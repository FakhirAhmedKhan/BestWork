import { useState, useCallback } from "react";
import { Menu } from "lucide-react";

const navItems = ["home", "projects", "skills", "education", "contact"];

// Nav BTN Text
const NavButton = ({ item, onClick, isMobile }) => (
  <button
    onClick={() => onClick(item)}
    className={`font-medium capitalize transition-colors ${
      isMobile
        ? // Is Open
          "block w-full rounded-md px-3 py-2 text-left text-base text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-700"
        : // Is Not Open
          "text-lg text-slate-600 hover:text-purple-500 dark:text-slate-300 dark:hover:text-pink-400"
    }`}
  >
    {item}
  </button>
);

// Header
export default function HeaderSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroolling Funcation
  const scrollToSection = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  }, []);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-white/30 backdrop-blur-lg transition-all duration-300 dark:bg-black/30">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-2xl font-bold tracking-tighter text-transparent">
          Simple.Dev
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center space-x-8 md:flex">
          {navItems.map((item) => (
            <NavButton key={item} item={item} onClick={scrollToSection} />
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="ml-4 p-2 md:hidden"
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="space-y-2 px-4 pt-2 pb-4 md:hidden">
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
