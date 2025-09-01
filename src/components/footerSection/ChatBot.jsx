"use client";

import { motion } from "framer-motion";
import { ChatBotStyle, InputBase, refStyle } from "../../UI/styles.js";
import { useChatBot } from "./data";
import { Send } from "lucide-react";

export default function ChatBot({ show, trainingData }) {
  const { chatBodyRef, chatHistory, input, setInput, handleFormSubmit } =
    useChatBot(show, trainingData);

  if (!show) return null;

  return (
    <motion.section
      className={`${ChatBotStyle} fixed bottom-6 right-6 w-80 md:w-96 h-[500px] rounded-2xl shadow-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex flex-col`}
      initial={{ opacity: 0, scale: 0.8, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
    >
      {/* Chat Body */}
      <div
        ref={chatBodyRef}
        className={`${refStyle} flex-1 overflow-y-auto p-4 space-y-4`}
      >
        {/* Welcome Bot Message */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-start gap-2"
        >
          <span className="px-4 py-2 rounded-xl bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-100 shadow-sm">
            🤖 Hi there! Welcome to my portfolio. How may I assist you today?
          </span>
        </motion.div>

        {/* Chat History */}
        {chatHistory
          .filter((msg) => !msg.hideInChat)
          .map((message, index) => (
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
      </div>

      {/* Input Form */}
      <form
        onSubmit={handleFormSubmit}
        className="p-3 border-t border-gray-200 dark:border-gray-700 flex items-center gap-2"
      >
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={`${InputBase} flex-1 px-4 py-2 rounded-xl`}
          aria-label="Type your message"
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className="p-2 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 disabled:opacity-50"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </motion.section>
  );
}
