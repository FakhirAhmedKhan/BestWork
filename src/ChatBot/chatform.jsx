import { useState, useCallback } from "react";

export default function ChatForm({
  chatHistory,
  setChatHistory,
  generateBotResponse,
  disabled,
}) {
  const [input, setInput] = useState("");

  const handleFormSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const userMessage = input.trim();
      if (!userMessage || disabled) return;

      const updatedHistory = [
        ...chatHistory,
        { role: "user", text: userMessage },
      ];
      setChatHistory(updatedHistory);
      setInput("");

      await generateBotResponse(updatedHistory);
    },
    [input, disabled, chatHistory, setChatHistory, generateBotResponse],
  );

  return (
    <form
      onSubmit={handleFormSubmit}
      autoComplete="off"
      className="flex items-center gap-2 border-t border-white/10 bg-white/5 p-2"
    >
      <input
        type="text"
        placeholder="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={disabled}
        className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-black focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:opacity-50"
        aria-label="Type your message"
      />
    </form>
  );
}
