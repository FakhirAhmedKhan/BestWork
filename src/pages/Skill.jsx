import { Zap } from "lucide-react";
import { HeadIng } from "../UI/components/Head";
import { Badge } from "../UI/components/Badge";
import { Card } from "../Components/Skills/Card";
import { SectionSTyle } from "../UI/components/motionConfige";

export default function SkillsSection() {
  return (
    <section id="skills" className={SectionSTyle}>
      <HeadIng Pragaphic="These are the technologies and tools I use to bring my ideas to life. I'm not an expert yet I am just learning and exploring new things as a hobby." Tittle="Skills & Toolkit" />

      <Badge Icon={Zap} BageName="Always Learning" className="mb-4 " />

      <Card />
    </section>
  );
}