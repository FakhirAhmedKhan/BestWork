import { HeadIng } from "../UI/components/Head";
import EducationTimeline from "../UI/components/TimelineCard";

export default function Education() {

  return (
    <section
      id="about"
      className="relative min-h-screen py-20 px-4 overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto">

        <HeadIng
          Tittle="My Journey"
          Pragaphic="A timeline of my educational milestones and achievements"
        />

        <EducationTimeline />  

      </div>
    </section>
  );
}