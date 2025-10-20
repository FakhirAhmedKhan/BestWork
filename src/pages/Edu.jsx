import axios from "axios";
import { useEffect, useState } from "react";
import { HeadIng } from "../UI/components/Head";
import { Card } from "../UI/components/Card";

export default function Education() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const cachedData = localStorage.getItem("educationData");
    if (cachedData) {
      setEducation(JSON.parse(cachedData));
    } else {
      axios
        .get(
          "https://raw.githubusercontent.com/FakhirAhmedKhan/DataApi-main/refs/heads/main/Data/educationData.json"
        )
        .then((res) => {
          const data = res.data.educationData || [];
          setEducation(data);
          localStorage.setItem("educationData", JSON.stringify(data));
        })
        .catch((err) => {
          console.error("Error fetching Education:", err);
        });
    }
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen py-20 px-4 overflow-hidden"
    >      
      <div className="relative max-w-6xl mx-auto">

        <HeadIng
          Tittle="My Journey"
          Pragaphic="A timeline of my educational milestones and achievements" />

        <div className="space-y-12">
          {education.map((edu, index) => (
            <Card type="education" data={edu} index={index} key={edu.index} />
          ))}
        </div>
      </div>
    </section>
  );
}
