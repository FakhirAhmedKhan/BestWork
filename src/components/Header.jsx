import { Menu, X } from "lucide-react";
const navItems = ["🏠", "👨🏻‍💻", "🛠️", "🚊", "📧"];
import {
  Header,
  LogoText,
  IsMenuOpenStyle,
  MobileNav,
  DesktopNav,
} from "../UI/styles.js";

import { useHeaderMenu } from "../script/script.js";

export default function HeaderSection() {
  const { isMenuOpen, setIsMenuOpen, scrollToSection } = useHeaderMenu();

  return (
    <header className={Header}>
      <div className="container mx-auto flex h-16 items-center justify-between px-5 sm:px-6 lg:px-8">
        <span className={LogoText}>
          <a href="/">Simple.Dev</a>
        </span>

        <nav className="text-bold hidden h-full items-center space-x-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={DesktopNav}
            >
              {item}
            </button>
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
        <div className={IsMenuOpenStyle}>
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={MobileNav}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
