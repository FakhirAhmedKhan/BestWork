import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import ChatMessage from "./ChatMessage";
import ChatForm from "./ChatForm";
import { Bot } from "lucide-react";

export default function ChatBot({ show, trainingData }) {
  const chatBodyRef = useRef();
  const formattedTrainingText = useMemo(
    () =>
      trainingData
        .map(
          (item, i) => `Q${i + 1}: ${item.question}\nA${i + 1}: ${item.answer}`,
        )
        .join("\n\n"),
    [trainingData],
  );

  const [chatHistory, setChatHistory] = useState([
    { role: "user", text: formattedTrainingText, hideInChat: true },
  ]);
  const [error, setError] = useState(null);
  const [isBotTyping, setIsBotTyping] = useState(false);

  const generateBotResponse = useCallback(async (history) => {
    setIsBotTyping(true);
    try {
      const formattedHistory = history.map(({ role, text }) => ({
        role,
        parts: [{ text }],
      }));

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
    } finally {
      setIsBotTyping(false);
    }
  }, []);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatHistory, isBotTyping]);

  if (!show) return null;

  return (
    <div
      className="fixed right-5 bottom-2 flex w-[300px] max-w-md flex-col rounded-lg border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md"
      role="dialog"
      aria-label="ChatBot window"
    >
      <div className="flex items-center justify-between px-4 py-2 text-white">
        <div className="flex items-center gap-2">
          <Bot className="h-6 w-6 text-blue-500" />
          <h2 className="text-lg font-semibold">ChatBot</h2>
        </div>
      </div>
      <div
        ref={chatBodyRef}
        className="hide-scrollbar flex h-[300px] flex-col gap-2 overflow-y-auto p-4"
      >
        <ChatMessage
          message={{
            role: "model",
            text: "Hi there! Welcome to my portfolio, how may I assist you today?",
          }}
        />

        {chatHistory
          .filter((msg) => !msg.hideInChat)
          .map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}

        {isBotTyping && (
          <div className="text-sm text-gray-400">Bot is typing...</div>
        )}

        {error && (
          <div className="rounded bg-red-100 p-2 text-sm text-red-600">
            {error}
          </div>
        )}
      </div>
      <ChatForm
        chatHistory={chatHistory}
        setChatHistory={setChatHistory}
        generateBotResponse={generateBotResponse}
        disabled={isBotTyping}
      />
    </div>
  );
}
