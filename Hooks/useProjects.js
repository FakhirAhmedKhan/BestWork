import { useState, useEffect, useMemo } from "react";
import axios from "axios";

export const useProjects = (initialVisible = 3) => {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState("SAAS");
  const [visibleCount, setVisibleCount] = useState(initialVisible);

  useEffect(() => {
    const cachedData = localStorage.getItem("projectsData");

    if (cachedData) {
      setProjects(JSON.parse(cachedData));
    } else {
      axios
        .get(
          "https://raw.githubusercontent.com/FakhirAhmedKhan/DataApi-main/refs/heads/main/Data/projectsData.json"
        )
        .then((res) => {
          const data = res.data.projects || [];
          setProjects(data);
          localStorage.setItem("projectsData", JSON.stringify(data));
        })
        .catch((err) => {
          console.error("Error fetching projectsData:", err);
        })
    }
  }, []);

  // Categories
  const categories = useMemo(() => {
    if (!projects.length) return ["All"];
    const cats = Array.from(new Set(projects.map((p) => p.category)));
    return ["All", ...cats];
  }, [projects]);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);
  }, [projects, activeCategory]);

  // Visible projects
  const visibleProjects = useMemo(() => {
    return filteredProjects.slice(0, visibleCount);
  }, [filteredProjects, visibleCount]);

  // Functions to update state
  const showMore = (count = 3) => setVisibleCount((prev) => prev + count);
  const changeCategory = (category) => {
    setActiveCategory(category);
    setVisibleCount(initialVisible); // reset visible count on category change
  };

  return {
    projects,
    categories,
    activeCategory,
    visibleProjects,
    showMore,
    changeCategory,
    filteredProjects,
  };
};
