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

const navItems = ["🏠", "👨🏻‍💻", "🛠️", "🚊", "📧"];

export default function HeaderSection() {
  const { isMenuOpen, setIsMenuOpen, scrollToSection } = useHeaderMenu();

  const NavButtons = ({ style }) =>
    navItems.map((item) => (
      <button
        key={item}
        onClick={() => scrollToSection(item)}
        className={style}
      >
        {item}
      </button>
    ));

  return (
    <header className={Header}>
      <div className={HeaderDiv}>
        <span className={LogoText}>
          <a href="#">Simple.Dev</a>
        </span>

        <nav className={DivNav}>
          <NavButtons style={DesktopNav} />
        </nav>

        <button
          onClick={() => setIsMenuOpen((p) => !p)}
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
          <NavButtons style={MobileNav} />
        </div>
      )}
    </header>
  );
}
