import { useState, useCallback } from "react";
import { InputBase } from "../UI/styles";

export default function ChatForm({
  chatHistory,
  setChatHistory,
  generateBotResponse,
  disabled,
}) {
  const [input, setInput] = useState("");

  const handleFormSubmit = useCallback(async (e) => {
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
  });

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={disabled}
        className={InputBase}
        aria-label="Type your message"
      />
    </form>
  );
}
