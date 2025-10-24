import { motion } from "framer-motion";
import { Logo } from "../Components/Header/Logo";
import { MobileNav } from "../Components/Header/MobileNav";
import { DeskTopNav } from "../Components/Header/DesktopNav";
import { MobileNavBtn } from "../Components/Header/MobileNavBtn";
import { CTABtnDesk } from "../Components/Header/CTAButtonDesktop";
import { headerMotion, headerStyle } from "../UI/components/motionConfige";

export default function HeaderSection() {

  return (
    <motion.header className={headerStyle} {...headerMotion}>
      <Logo />

      <DeskTopNav />

      <CTABtnDesk />

      <MobileNavBtn />

      <MobileNav />

    </motion.header >
  );
}
