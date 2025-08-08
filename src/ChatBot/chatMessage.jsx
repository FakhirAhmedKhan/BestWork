import { Bot } from "lucide-react";

export default function ChatMessage({ message }) {
  if (!message?.text || message.hideInChat) return null;
  const isUser = message.role === "user";
  return (
    <div
      className={`animate-fade-in mb-2 flex items-end gap-2 ${
        isUser ? "justify-end" : "justify-start"
      }`}
      aria-live="polite"
    >
      {!isUser && <Bot className="h-6 w-6 text-blue-500" />}
      <div
        className={`max-w-[70%] rounded-2xl px-4 py-2 text-sm break-words whitespace-pre-line shadow-sm transition-all duration-200 ${
          isUser
            ? "self-end border border-blue-500 bg-blue-600 text-white"
            : "border border-gray-300 bg-gray-100 text-gray-900"
        }`}
        tabIndex={0}
      >
        {message.text}
      </div>
    </div>
  );
}
