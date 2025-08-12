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
      <div>{message.text}</div>
    </div>
  );
}
