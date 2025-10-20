import { Sparkles, Code2, Zap } from "lucide-react";
import { HeadIng } from "../UI/components/Head";
import { Badge } from "../UI/components/Badge";
import { Card } from "../Components/Skills/Card";
import { useSkills } from "../../Hooks/useSkills";

export default function SkillsSection() {
  const { skills, hoveredIndex, setHoveredIndex } = useSkills();

  return (
    <section id="skills" className="relative min-h-screen py-15 overflow-hidden max-w-6xl mx-auto">

      <HeadIng Pragaphic="These are the technologies and tools I use to bring my ideas to life. I’m not an expert yet I am just learning and exploring new things as a hobby." Tittle="Skills & Toolkit" />
      
      <div className="bg-red mt-20 mb-4 text-center">
        <Badge Icon={Code2} BageName="Tech Stack" />

        <Badge Icon={Sparkles} BageName="Skills" count={skills.length} />

        <Badge Icon={Zap} BageName="Always Learning" />
      </div>

      <Card setHoveredIndex={setHoveredIndex} hoveredIndex={hoveredIndex} skills={skills} />

    </section>
  );
}
