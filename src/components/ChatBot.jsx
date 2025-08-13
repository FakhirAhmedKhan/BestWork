import { ChatBotStyle, InputBase } from "../UI/styles";
import { useChatBot } from "../script/script.js";

export default function ChatBot({ show, trainingData }) {
  const { chatBodyRef, chatHistory, input, setInput, handleFormSubmit } =
    useChatBot(show, trainingData);

  if (!show) return null;

  return (
    <section className={ChatBotStyle}>
      <div
        ref={chatBodyRef}
        className="hide-scrollbar flex h-[300px] flex-col gap-2 overflow-y-auto p-4"
      >
        <div className="flex items-end justify-start gap-2">
          <span className="flex items-center justify-between px-4 py-2 text-lg font-bold text-white">
            🤖 Hi there! Welcome to my portfolio, how may I assist you today?
          </span>
        </div>

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
                <span className="flex-shrink-0">
                  <h2 className="flex items-center justify-between text-lg font-bold text-black">
                    🤖
                  </h2>
                </span>
              )}
              <div>{message.text}</div>
            </div>
          ))}
      </div>
      <form onSubmit={handleFormSubmit} className="flex">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={InputBase}
          aria-label="Type your message"
        />
      </form>
    </section>
  );
}
