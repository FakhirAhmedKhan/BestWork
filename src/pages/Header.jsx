import { motion } from "framer-motion";
import { Logo } from "../Components/Header/Logo";
import { DeskTopNav } from "../Components/Header/DesktopNav";
import { CTABtnDesk } from "../Components/Header/CTAButtonDesktop";
import { MobileNavBtn } from "../Components/Header/MobileNavBtn";
import { MobileNav } from "../Components/Header/MobileNav";
import { useScrollSections } from "../../Hooks/useScrollSections";

export default function HeaderSection() {
  const {
    navItems,
    activeSection,
    isMenuOpen,
    setIsMenuOpen,
    scrolled,
    scrollToSection,
  } = useScrollSections();


  return (
    <motion.header
      className={`fixed bg-transparen top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center justify-between h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >

      <Logo scrollToSection={scrollToSection} />

      <DeskTopNav navItems={navItems} activeSection={activeSection} scrollToSection={scrollToSection} />

      <CTABtnDesk scrollToSection={scrollToSection} />

      <MobileNavBtn setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />

      <MobileNav navItems={navItems} activeSection={activeSection} isMenuOpen={isMenuOpen} scrollToSection={scrollToSection} />


    </motion.header >
  );
}
