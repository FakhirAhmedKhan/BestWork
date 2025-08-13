import { useState, useEffect, useRef, useMemo, useCallback } from "react";

export function useProjectFilter(projects) {
  const categories = useMemo(
    () => [...new Set(projects.map((p) => p.category))],
    [projects],
  );

  const [activeCategory, setActiveCategory] = useState(categories[0] || "");

  useEffect(() => {
    if (categories.length) setActiveCategory(categories[0]);
  }, [categories]);

  const filteredProjects = useMemo(
    () => projects.filter((p) => p.category === activeCategory),
    [projects, activeCategory],
  );

  return { categories, activeCategory, setActiveCategory, filteredProjects };
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

export function useChatBot(trainingData) {
  const chatBodyRef = useRef();
  const safeTrainingData = Array.isArray(trainingData) ? trainingData : [];

  const trainingText = useMemo(
    () =>
      safeTrainingData
        .map(
          ({ question, answer }, i) =>
            `Q${i + 1}: ${question}\nA${i + 1}: ${answer}`,
        )
        .join("\n\n"),
    [safeTrainingData],
  );

  const [chatHistory, setChatHistory] = useState([
    { role: "user", text: trainingText, hideInChat: true },
  ]);
  const [input, setInput] = useState("");

  const generateBotResponse = useCallback(async (history) => {
    if (history.length === 0) return;
    {
      const res = await fetch(import.meta.env.VITE_API_URL, {
        method: "POST",
        body: JSON.stringify({
          contents: history.map(({ role, text }) => ({
            role,
            parts: [{ text }],
          })),
        }),
      });

      const text = (
        await res.json()
      )?.candidates?.[0]?.content?.parts?.[0]?.text
        ?.replace(/<[^>]+>/g, "")
        .trim();

      setChatHistory((prev) => [...prev, { role: "model", text }]);
    }
  }, []);

  const handleFormSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const updated = [...chatHistory, { role: "user", text: input.trim() }];
      setChatHistory(updated);
      setInput("");
      await generateBotResponse(updated);
    },
    [input, chatHistory, generateBotResponse],
  );

  useEffect(() => {
    chatBodyRef.current?.scrollTo({
      top: chatBodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chatHistory]);

  return {
    chatBodyRef,
    chatHistory,
    input,
    setInput,
    handleFormSubmit,
  };
}
