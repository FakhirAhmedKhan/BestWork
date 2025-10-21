import { Sparkles } from "lucide-react";
import { Badge } from "../UI/components/Badge";
import { Praghrap } from "../Components/Home/Praghrap";
import { TypingEffect } from "../Components/Home/TypingEffect";
import { CTAButtons } from "../Components/Home/CTAButtons";
import { SocialLinks } from "../Components/Home/SocialLinks";
import { useSocialLinks } from "../../Hooks/useSocialLinks";
import { SectionSTyle } from "../UI/components/motionConfige";

export default function HomeSection() {
  const { socialLinks } = useSocialLinks();

  return (
    <section id="home" className={SectionSTyle}>
      <div className="mt-20 mb-0 text-center">
        <Badge Icon={Sparkles} BageName="Welcome to my digital space" />
      </div>

      <TypingEffect />

      <Praghrap />

      <CTAButtons />

      <SocialLinks socialLinks={socialLinks} />

    </section>
  );
}
