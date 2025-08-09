import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { inputBase, buttonBase } from "../components/styles";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <footer
      id="contact"
      className="flex min-h-screen flex-col items-center justify-center px-6 py-12"
    >
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="mb-12 text-4xl font-bold text-white md:text-5xl">
            Get In Touch
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className={inputBase}
            required
          />

          {status === "success" ? (
            <div className="flex items-center justify-center gap-2 py-4 text-lg font-medium text-green-300">
              <CheckCircle className="h-6 w-6" />
              Message sent successfully!
            </div>
          ) : (
            <button
              type="submit"
              disabled={status === "loading" || !email}
              className={`${buttonBase} bg-blue-600 text-white hover:bg-blue-700`}
            >
              {status === "loading" ? (
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              ) : (
                <>
                  <Send className="h-5 w-5" /> Send Message
                </>
              )}
            </button>
          )}
        </form>
      </div>

      <p className="text-opacity-80 mt-16 text-center text-sm text-white">
        © 2025 Fakhir Ahmed Khan. All rights reserved. Designed & built with 💖
        using React & Tailwind CSS.
      </p>
    </footer>
  );
}
