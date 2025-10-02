"use client";
import { motion } from "framer-motion";
import { ChatBotStyle, refStyle } from "../UI/styles.js";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import axios from "axios";

export default function ChatBot({ show }) {
  const [trainingData, setTrainingData] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatBodyRef = useRef(null);
  const responseCache = useRef(new Map());
  const trainingText = useMemo(() => {
    return trainingData
      .map(
        ({ question, answer }, i) =>
          `Q${i + 1}: ${question}\nA${i + 1}: ${answer}`
      )
      .join("\n\n");
  }, [trainingData]);

  useEffect(() => {
    const storedData = localStorage.getItem("trainingData");
    if (storedData) {
      setTrainingData(JSON.parse(storedData));
    } else {
      axios
        .get(
          "https://raw.githubusercontent.com/FakhirAhmedKhan/DataApi-main/refs/heads/main/Data/trainingData.json"
        )
        .then((res) => {
          const data = res.data.trainingData || [];
          setTrainingData(data);
          localStorage.setItem("trainingData", JSON.stringify(data));
        })
        .catch((err) => console.error("Error fetching Data:", err));
    }
  }, []);

  useEffect(() => {
    chatBodyRef.current?.scrollTo({
      top: chatBodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chatHistory, isTyping]);

  const generateBotResponse = useCallback(
    async (history, userInput) => {
      if (!history.length) return;

      if (responseCache.current.has(userInput)) {
        const cachedAnswer = responseCache.current.get(userInput);
        setChatHistory((prev) => [
          ...prev,
          { role: "model", text: cachedAnswer },
        ]);
        return;
      }

      setIsTyping(true);
      try {
        const res = await fetch(import.meta.env.VITE_API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              ...(trainingText
                ? [{ role: "user", parts: [{ text: trainingText }] }]
                : []),
              ...history.map(({ role, text }) => ({
                role,
                parts: [{ text }],
              })),
            ],
          }),
        });

        if (!res.ok) {
          const errorData = await res.json();
          console.error("API Error:", errorData);
          setIsTyping(false);
          return;
        }

        const text = (
          await res.json()
        )?.candidates?.[0]?.content?.parts?.[0]?.text
          ?.replace(/<[^>]+>/g, "")
          .trim();

        if (text) {
          responseCache.current.set(userInput, text);
          setChatHistory((prev) => [...prev, { role: "model", text }]);
        }
      } catch (error) {
        console.error("Bot response error:", error);
      } finally {
        setIsTyping(false);
      }
    },
    [trainingText]
  );

  const handleFormSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const trimmedInput = input.trim();
      if (!trimmedInput) return;

      const updated = [...chatHistory, { role: "user", text: trimmedInput }];
      setChatHistory(updated);
      setInput("");

      await generateBotResponse(updated, trimmedInput);
    },
    [input, chatHistory, generateBotResponse]
  );

  if (!show) return null;

  return (
    <motion.section
      className={`${ChatBotStyle} fixed bottom-6 right-6 w-80 md:w-96 h-[500px] rounded-2xl shadow-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex flex-col`}
      initial={{ opacity: 0, scale: 0.8, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
    >
      <div
        ref={chatBodyRef}
        className={`${refStyle} flex-1 overflow-y-auto p-4 space-y-4`}
      >
        {chatHistory.length === 0 && (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-start gap-2"
          >
            <span className="px-4 py-2 rounded-xl bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-100 shadow-sm">
              🤖 Hi there! Welcome to my portfolio. How may I assist you today?
            </span>
          </motion.div>
        )}

        {chatHistory.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 max-w-[75%] rounded-xl shadow-sm ${
                message.role === "user"
                  ? "bg-indigo-500 text-white rounded-br-none"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-none"
              }`}
            >
              {message.text}
            </div>
          </motion.div>
        ))}

        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start gap-2"
          >
            <span className="px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-sm animate-pulse">
              🤖 Bot is typing...
            </span>
          </motion.div>
        )}
      </div>

      <form
        onSubmit={handleFormSubmit}
        className="p-3 border-t border-gray-200 dark:border-gray-700 flex items-center gap-2"
      >
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={`flex-1 px-4 py-2 rounded-xl`}
          aria-label="Type your message"
        />

      </form>
    </motion.section>
  );
}
