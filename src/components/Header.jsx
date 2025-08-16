import { Menu, X } from "lucide-react";
import { useHeaderMenu } from "../script/script.js";
import { NavButtons } from "../components/BubbleText.jsx";
import {
  Header,
  LogoText,
  IsMenuOpenStyle,
  MobileNav,
  DesktopNav,
  HeaderDiv,
  DivNav,
} from "../UI/styles.js";

export default function HeaderSection() {
  const { isMenuOpen, setIsMenuOpen, scrollToSection } = useHeaderMenu();

  return (
    <header className={Header}>
      <div className={HeaderDiv}>
        <span className={LogoText}>
          <a href="#">Simple.Dev</a>
        </span>

        {/* Desktop Nav */}
        <span className={DivNav}>
          <NavButtons style={DesktopNav} scrollToSection={scrollToSection} />
        </span>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="ml-4 p-2 md:hidden"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={IsMenuOpenStyle}>
          <NavButtons
            style={MobileNav}
            scrollToSection={(id) => {
              scrollToSection(id); // scrolls to section
              setIsMenuOpen(false); // auto-close menu
            }}
          />
        </div>
      )}
    </header>
  );
}
