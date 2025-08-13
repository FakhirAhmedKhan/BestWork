import { Menu, X } from "lucide-react";
import {
  Header,
  LogoText,
  IsMenuOpenStyle,
  MobileNav,
  DesktopNav,
  HeaderDiv,
  DivNav,
} from "../UI/styles.js";
import { useHeaderMenu } from "../script/script.js";
import { NavButtons } from "../components/BubbleText.jsx";

export default function HeaderSection() {
  const { isMenuOpen, setIsMenuOpen } = useHeaderMenu();

  return (
    <header className={Header}>
      <div className={HeaderDiv}>
        <span className={LogoText}>
          <a href="#">Simple.Dev</a>
        </span>

        <span className={DivNav}>
          <NavButtons style={DesktopNav} />
        </span>

        <button
          onClick={() => setIsMenuOpen((p) => !p)}
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
          <NavButtons style={MobileNav} />
        </div>
      )}
    </header>
  );
}
