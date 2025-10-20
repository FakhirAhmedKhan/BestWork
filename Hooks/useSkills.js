import { useState, useEffect } from "react";
import axios from "axios";

export const useSkills = () => {
  const [skills, setSkills] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const cachedData = localStorage.getItem("skillsIcons");
        if (cachedData) {
          setSkills(JSON.parse(cachedData));
        } else {
          const res = await axios.get(
            "https://raw.githubusercontent.com/FakhirAhmedKhan/DataApi-main/main/Data/skillsIcons.json"
          );
          const data = res.data.skills || [];
          setSkills(data);
          localStorage.setItem("skillsIcons", JSON.stringify(data));
        }
      } catch (err) {
        console.error("Error fetching skills:", err);
      }
    };
    fetchSkills();
  }, []);

  return { skills, hoveredIndex, setHoveredIndex };
};
