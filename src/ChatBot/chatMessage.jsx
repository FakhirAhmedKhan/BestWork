import { Bot } from "lucide-react";

export default function ChatMessage({ message }) {
  if (!message?.text || message.hideInChat) return null;
  const isUser = message.role === "user";

  return (
    <div
      className={`flex items-end gap-2 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && <Bot className="h-6 w-6 flex-shrink-0 text-blue-500" />}
      <div
        className={`max-w-[70%] rounded-2xl px-4 py-2 text-sm break-words whitespace-pre-line shadow-sm ${
          isUser
            ? "bg-blue-600 text-white"
            : "border border-gray-300 bg-gray-100 text-gray-900"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
}
