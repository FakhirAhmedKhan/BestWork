import { motion as Motion } from "framer-motion";
import {
  SectionTitle,
  SkillDivStyle,
  sectionSkills,
  fadeInUp,
} from "../../UI/styles";
import BubbleText from "./BubbleText";

export default function SkillsSection({ skills }) {
  return (
    <section id="🛠️" className={sectionSkills}>
      <Motion.h2 {...fadeInUp(0.3)} className={SectionTitle}>
        Skills & Toolkit
      </Motion.h2>

      <BubbleText text="I'm still learning and exploring these tools as a beginner." />

      <div className={SkillDivStyle}>
        {skills.map((skill) => (
          <Motion.div
            key={skill.name}
            className="p-10 hover:scale-105"
          >
            <skill.icon className="h-10 w-10 text-indigo-300" />
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
