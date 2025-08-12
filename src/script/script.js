import { useState, useMemo, useCallback, useEffect } from "react";

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

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!email.includes("@")) return setStatus("error");
      setStatus("loading");
      await new Promise((r) => setTimeout(r, 1000));
      setStatus("success");
      setEmail("");
    },
    [email],
  );

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => setStatus("idle"), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return { email, setEmail, status, handleSubmit };
}

export function useHeaderMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  }, []);

  return { isMenuOpen, setIsMenuOpen, scrollToSection };
}
