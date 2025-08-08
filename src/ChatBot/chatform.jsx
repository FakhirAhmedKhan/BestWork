import { useState, useCallback } from "react";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchReply = (userInput) => {
    const matched = trainingData.find((item) =>
      userInput.toLowerCase().includes(item.question.toLowerCase()),
    );
    return matched
      ? matched.answer
      : "Sorry, I don't have an answer for that yet!";
  };

  const handleFormSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const userMessage = input.trim();
      if (!userMessage || isLoading) return;

      const updatedHistory = [
        ...chatHistory,
        { role: "user", text: userMessage },
      ];
      setChatHistory(updatedHistory);
      setInput("");
      setIsLoading(true);
      try {
        await generateBotResponse(updatedHistory);
      } finally {
        setIsLoading(false);
      }
    },
    [input, isLoading, chatHistory, setChatHistory, generateBotResponse],
  );

  return (
    <form
      onSubmit={handleFormSubmit}
      autoComplete="off"
      className="mt-3 mb-3 flex items-center gap-2"
    >
      <input
        type="text"
        placeholder="Message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
        disabled={isLoading}
        className="flex-1 rounded-md border border-gray-300 px-4 py-2 text-black transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:opacity-50"
      />
    </form>
  );
};

export default ChatForm;
