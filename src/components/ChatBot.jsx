import {
  ChatBotStyle,
  InputBase,
  refStyle,
  botSpanStyle,
  UserMessageStyle,
} from "../UI/styles";
import { useChatBot } from "../script/script.js";

export default function ChatBot({ show, trainingData }) {
  const { chatBodyRef, chatHistory, input, setInput, handleFormSubmit } =
    useChatBot(show, trainingData);

  if (!show) return null;

  return (
    <section className={ChatBotStyle}>
      <div ref={chatBodyRef} className={refStyle}>
        <div className="flex items-end justify-start gap-2">
          <span className={botSpanStyle}>
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
                <h2 className={UserMessageStyle}>🤖</h2>
              )}
              <div>{message.text}</div>
            </div>
          ))}
      </div>
      <form onSubmit={handleFormSubmit}>
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
