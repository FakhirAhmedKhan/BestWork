import { useState, useMemo, useEffect } from "react";

export function useProjectFilter(projectData) {
  const categories = useMemo(
    () => [...new Set(projectData.map((p) => p.category))],
    [projectData],
  );
  const [activeCategory, setActiveCategory] = useState(categories[0] || "");

  useEffect(() => {
    if (categories.length) setActiveCategory(categories[0]);
  }, [categories]);

  const filteredProjects = useMemo(
    () => projectData.filter((p) => p.category === activeCategory),
    [activeCategory, projectData],
  );

  return { categories, activeCategory, filteredProjects, setActiveCategory };
}

export function useFooterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.includes("@")) return setStatus("error");
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
    setEmail("");
  };

  useEffect(() => {
    if (status === "success") {
      const t = setTimeout(() => setStatus("idle"), 3000);
      return () => clearTimeout(t);
    }
  }, [status]);

  return { email, setEmail, status, handleSubmit };
}

export function useHeaderMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return { isMenuOpen, setIsMenuOpen, scrollToSection };
}
