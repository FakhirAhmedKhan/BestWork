import { Menu, X } from "lucide-react";
import useHeaderMenu from "./nav.js";
import NavButtons from "./NavButtons.jsx";
import {
  Header,
  LogoText,
  IsMenuOpenStyle,
  MobileNav,
  DesktopNav,
  HeaderDiv,
  DivNav,
} from "../../UI/styles.js";

export default function HeaderSection() {
  const { isMenuOpen, setIsMenuOpen, scrollToSection } = useHeaderMenu();

  return (
    <header className={Header}>
      <div className={HeaderDiv}>
        <span className={LogoText}>
          <a href="#">Simple.Dev</a>
        </span>

        <span className={DivNav}>
          <NavButtons style={DesktopNav} scrollToSection={scrollToSection} />
        </span>

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

      {isMenuOpen && (
        <div className={IsMenuOpenStyle}>
          <NavButtons
            style={MobileNav}
            scrollToSection={(id) => {
              scrollToSection(id);
              setIsMenuOpen(false);
            }}
          />
        </div>
      )}
    </header>
  );
}
