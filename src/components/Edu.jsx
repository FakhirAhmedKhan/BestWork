import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../UI/components/Head";
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
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300/20 dark:bg-indigo-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-6xl mx-auto">

        <Header
          Tittle="My Journey"
          Pragaphic="A timeline of my educational milestones and achievements" />

        <div className="space-y-12">
          {education.map((edu, index) => (
            <Card type="education" data={edu} index={index} key={edu.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
