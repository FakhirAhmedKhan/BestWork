import { Menu, X } from "lucide-react";
import {
  Header,
  LogoText,
  IsMenuOpenStyle,
  MobileNav,
  DesktopNav,
  HeaderDiv,
  DivNav,
  styles,
} from "../UI/styles.js";
import { useState } from "react";

export default function HeaderSection() {
  const navItems = ["🏠", "👨🏻‍💻", "🛠️", "🚊", "📧"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };
  return (
    <header className={Header}>
      <div className={HeaderDiv}>
        <span className={LogoText}>
          <a href="#">Simple.Dev</a>
        </span>

        <span className={DivNav}>
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={styles}
              name={item}
            >
              {item}
            </button>
          ))}{" "}
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
