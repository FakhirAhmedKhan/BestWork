import { useState } from "react";

export default function useHeaderMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return { isMenuOpen, setIsMenuOpen, scrollToSection };
}
