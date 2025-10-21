import { Sparkles, Code2, Zap } from "lucide-react";
import { HeadIng } from "../UI/components/Head";
import { Badge } from "../UI/components/Badge";
import { Card } from "../Components/Skills/Card";
import { SectionSTyle } from "../UI/components/motionConfige";

export default function SkillsSection() {
  return (
    <section id="skills" className={SectionSTyle}>
      <HeadIng
        Pragaphic="These are the technologies and tools I use to bring my ideas to life. I'm not an expert yet I am just learning and exploring new things as a hobby."
        Tittle="Skills & Toolkit"
      />

      <div className="flex flex-col items-center gap-6 my-8">
        <Badge Icon={Code2} BageName="Tech Stack" />
        <Badge Icon={Sparkles} BageName="Skills" count={18} />
        <Badge Icon={Zap} BageName="Always Learning" />
      </div>

      <Card />
    </section>
  );
}