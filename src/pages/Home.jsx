import { Sparkles } from "lucide-react";
import { Badge } from "../UI/components/Badge";
import { Praghrap } from "../Components/Home/Praghrap";
import { CTAButtons } from "../Components/Home/CTAButtons";
import { SocialLinks } from "../Components/Home/SocialLinks";
import { SectionSTyle } from "../UI/components/motionConfige";
import { TypingEffect } from "../Components/Home/TypingEffect";

export default function HomeSection() {

  return (
    <section id="home" className={SectionSTyle}>
      <Badge Icon={Sparkles} BageName="Welcome to my digital space" />

      <TypingEffect />

      <Praghrap />

      <CTAButtons />

      <SocialLinks />
    </section>
  );
}
