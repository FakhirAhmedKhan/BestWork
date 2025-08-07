import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e) => {
    e?.preventDefault();
    if (!email.includes("@")) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  const inputBase =
    "bg-opacity-60 border-opacity-50 w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-4 text-lg text-white placeholder-gray-300 focus:border-transparent focus:ring-2 focus:ring-blue-400 focus:outline-none";
  const btnBase =
    "flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:bg-blue-700 hover:shadow-xl disabled:bg-blue-500 disabled:opacity-50";
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
          <div className="space-y-2">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className={inputBase}
              onKeyDown={(e) =>
                e.key === "Enter" && (e.preventDefault(), handleSubmit(e))
              }
              required
            />
          </div>
          {isSubmitted ? (
            <div className="flex items-center justify-center gap-2 py-4 text-lg font-medium text-green-300">
              <CheckCircle className="h-6 w-6" />
              Message sent successfully!
            </div>
          ) : (
            <button
              type="submit"
              disabled={isLoading || !email}
              className={btnBase}
            >
              {isLoading ? (
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Send Message
                </>
              )}
            </button>
          )}
        </form>
      </div>
      <p className="text-opacity-80 mt-16 space-y-2 text-center text-sm text-white">
        © 2025 Fakhir Ahmed Khan. All rights reserved. Designed and built with
        💖 using React & Tailwind CSS.
      </p>
    </footer>
  );
}
