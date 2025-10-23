import { motion } from "framer-motion";
import { Logo } from "../Components/Header/Logo";
import { MobileNav } from "../Components/Header/MobileNav";
import { ThemeToggle } from "../UI/components/ThemeToggle";
import { DeskTopNav } from "../Components/Header/DesktopNav";
import { MobileNavBtn } from "../Components/Header/MobileNavBtn";
import { CTABtnDesk } from "../Components/Header/CTAButtonDesktop";

export default function HeaderSection() {

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-colors duration-300" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }} >

      <Logo />

      <ThemeToggle />

      <DeskTopNav />

      <CTABtnDesk />

      <MobileNavBtn />

      <MobileNav />

    </motion.header >
  );
}
