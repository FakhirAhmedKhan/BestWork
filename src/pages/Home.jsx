import { Github, Linkedin, Sparkles } from "lucide-react";
import { Badge } from "../UI/components/Badge";
import { Praghrap } from "../Components/Home/Praghrap";
import { TypingEffect } from "../Components/Home/TypingEffect";
import { CTAButtons } from "../Components/Home/CTAButtons";
import { SocialLinks } from "../Components/Home/SocialLinks";
import { useSocialLinks } from "../../Hooks/useSocialLinks";

export default function HomeSection() {
  const { socialLinks } = useSocialLinks();

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center px-4 overflow-hidden z-10 max-w-5xl mx-auto text-center space-y-19"
    >
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
