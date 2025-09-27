import { useState, useEffect, useRef, useMemo, useCallback } from "react";

const trainingData = [
  {
    question: "What are you currently working on?",
    answer:
      "I'm building a futuristic CV Generator and an ATS CV Analyzer using React, Tailwind CSS, and Lucide icons. My focus is on creating a clean, modern, and user-friendly design.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "I work with HTML, CSS, JavaScript, React.js, Tailwind CSS, Next.js, Node.js, and MySQL, along with other modern web development tools.",
  },
  {
    question: "What are your future goals?",
    answer:
      "I plan to study Computer Science in Germany. While preparing for the IELTS exam, I'm also improving my web development and programming skills.",
  },
  {
    question: "What projects have you built?",
    answer:
      "I’ve built a personal portfolio website, a Twitter clone, a futuristic CV generator, an animated todo app, and an interactive chatbot interface.",
  },
  {
    question: "Do you have experience with animations?",
    answer:
      "Yes! I use Framer Motion in React to create smooth animations such as animated skill cards, interactive modals, and dynamic text effects.",
  },
  {
    question: "Which UI libraries do you prefer?",
    answer:
      "I prefer using Tailwind CSS for styling, along with Lucide icons and React Icons for a modern and clean look.",
  },
  {
    question: "Can you tell me more about your chatbot project?",
    answer:
      "Sure! I built a chatbot in React that displays chat history, lets users toggle visibility, fetches AI-powered replies, and uses training data to provide more accurate answers.",
  },
  {
    question: "What games do you like?",
    answer:
      "I enjoy playing Minecraft, Free Fire, PUBG, and different board games in my free time.",
  },
  {
    question: "What are you currently learning?",
    answer:
      "Right now, I’m learning advanced React hooks, Next.js, chatbot development, performance optimization, and clean code modularization.",
  },
  {
    question: "What is your LinkedIn profile?",
    answer:
      "You can connect with me on LinkedIn here: https://www.linkedin.com/in/fakhir-ahmed-3b5537316/",
  },
];

export default trainingData;


export function useChatBot(trainingData) {
  const chatBodyRef = useRef();
  const safeTrainingData = Array.isArray(trainingData) ? trainingData : [];

  const trainingText = useMemo(
    () =>
      safeTrainingData
        .map(
          ({ question, answer }, i) =>
            `Q${i + 1}: ${question}\nA${i + 1}: ${answer}`
        )
        .join("\n\n"),
    [safeTrainingData]
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
    [input, chatHistory, generateBotResponse]
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
