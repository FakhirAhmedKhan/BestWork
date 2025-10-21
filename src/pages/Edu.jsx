import { HeadIng } from "../UI/components/Head";
import { SectionSTyle } from "../UI/components/motionConfige";
import EducationTimeline from "../UI/components/TimelineCard";

export default function Education() {

  return (
    <section id="about" className={SectionSTyle}>

      <HeadIng
        Tittle="My Journey"
        Pragaphic="A timeline of my educational milestones and achievements"
      />

      <EducationTimeline />

    </section>
  );
}