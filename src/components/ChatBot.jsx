import { Bot } from "lucide-react";
import { ChatBotStyle, InputBase } from "../UI/styles";
import { useChatBot } from "../script/script.js";

export default function ChatBot({ show, trainingData }) {
  const {
    chatBodyRef,
    chatHistory,
    input,
    setInput,
    error,
    isBotTyping,
    handleFormSubmit,
  } = useChatBot(show, trainingData);

  if (!show) return null;

  return (
    <section className={ChatBotStyle}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 text-white">
        <div className="flex items-center gap-2">
          <Bot className="h-6 w-6 text-blue-500" />
          <h2 className="text-lg font-semibold">ChatBot</h2>
        </div>
      </div>

      {/* Chat Body */}
      <div
        ref={chatBodyRef}
        className="hide-scrollbar flex h-[300px] flex-col gap-2 overflow-y-auto p-4"
      >
        {/* Welcome Message */}
        <div className="flex items-end justify-start gap-2">
          <Bot className="h-6 w-6 flex-shrink-0 text-blue-500" />
          <div>
            Hi there! Welcome to my portfolio, how may I assist you today?
          </div>
        </div>

        {/* Messages */}
        {chatHistory
          .filter((msg) => !msg.hideInChat)
          .map((message, index) => (
            <div
              key={index}
              className={`flex items-end gap-2 ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.role !== "user" && (
                <Bot className="h-6 w-6 flex-shrink-0 text-blue-500" />
              )}
              <div>{message.text}</div>
            </div>
          ))}

        {/* Bot Typing */}
        {isBotTyping && (
          <div className="text-sm text-gray-400">Bot is typing...</div>
        )}

        {/* Error */}
        {error && (
          <div className="rounded bg-red-100 p-2 text-sm text-red-600">
            {error}
          </div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleFormSubmit} className="flex">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isBotTyping}
          className={InputBase}
          aria-label="Type your message"
        />
      </form>
    </section>
  );
}
