// components/ChatBot.jsx
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import ChatMessage from "./chatMessage";
import ChatForm from "./chatform";
import { Bot } from "lucide-react";

export default function ChatBot({ show, onClose, trainingData }) {
  const chatBodyRef = useRef();

  const formattedTrainingText = useMemo(() => {
    return trainingData
      .map(
        (item, i) => `Q${i + 1}: ${item.question}\nA${i + 1}: ${item.answer}`,
      )
      .join("\n\n");
  }, [trainingData]);

  const [chatHistory, setChatHistory] = useState([
    { role: "user", text: formattedTrainingText, hideInChat: true },
  ]);
  const [error, setError] = useState(null);

  const generateBotResponse = useCallback(async (history) => {
    const formattedHistory = history.map(({ role, text }) => ({
      role,
      parts: [{ text }],
    }));

    try {
      const response = await fetch(import.meta.env.VITE_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: formattedHistory }),
      });

      const data = await response.json();
      const apiText =
        data?.candidates?.[0]?.content?.parts?.[0]?.text
          ?.replace(/<[^>]+>/g, "")
          .trim() || "";

      if (!response.ok || !apiText) {
        throw new Error(data.error || "Failed to generate bot response");
      }

      setChatHistory((prev) => [...prev, { role: "model", text: apiText }]);
      setError(null);
    } catch (err) {
      setError(err.message || "Bot failed to respond. Please try again.");
      console.error("Error generating bot response:", err);
    }
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => {
      chatBodyRef.current?.scrollTo(0, chatBodyRef.current.scrollHeight);
    });
  }, [chatHistory]);

  if (!show) return null;

  return (
    <div className="fixed right-5 bottom-2 flex w-[250px] max-w-md flex-col overflow-x-hidden overflow-y-auto rounded-lg border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 text-white">
        <div className="flex items-center gap-2">
          <Bot className="h-6 w-6 text-blue-500" />
          <h2 className="text-lg font-semibold">ChatBot</h2>
        </div>
        <button
          // aria-label="Close ChatBot"
          className="material-symbols-outlined text-white"
          onClick={onClose}
        >
          keyboard_arrow_down
        </button>
      </div>

      {/* Chat Body */}
      <div
        ref={chatBodyRef}
        className="hide-scrollbar flex h-[300px] max-h-[80vh] flex-col gap-2 overflow-y-auto p-4"
      >
        {/* Greeting */}
        <ChatMessage
          message={{
            role: "model",
            text: "Hi there! Welcome to my portfolio, how may I assist you today?",
          }}
        />

        {/* Messages */}
        {chatHistory
          .filter((msg) => !msg.hideInChat)
          .map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}

        {/* Error */}
        {error && (
          <div className="rounded bg-red-100 p-2 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Input */}
        <ChatForm
          setChatHistory={setChatHistory}
          generateBotResponse={generateBotResponse}
          chatHistory={chatHistory}
        />
      </div>
    </div>
  );
}
