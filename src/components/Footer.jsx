import { CheckCircle, Send, AlertCircle } from "lucide-react";
import { useEffect, useState } from "react";
import {HeadIng} from "../UI/components/Head";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) return setStatus("error");
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  useEffect(() => {
    if (status === "success" || status === "error") {
      const t = setTimeout(() => setStatus("idle"), 3000);
      return () => clearTimeout(t);
    }
  }, [status]);

  return (
    <footer
      id="contact"
      className="flex flex-col min-h-screen items-center justify-center px-4 py-20 text-center"
    >
      <div className="max-w-2xl w-full space-y-8">

        <HeadIng
          Tittle="Get In Touch"
          Pragaphic="Drop your email and let's create something amazing together" />

        <div className="space-y-4">
          <div className="relative group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
              placeholder="your.email@example.com"
              disabled={status === "loading"}
              className="w-full rounded-xl border-2 border-neutral-700 bg-neutral-900/50 backdrop-blur-sm px-6 py-5 text-lg text-white placeholder-neutral-500 
              focus:border-fuchsia-400 focus:ring-4 focus:ring-fuchsia-400/20 focus:outline-none
              transition-all duration-300 
              disabled:opacity-50 disabled:cursor-not-allowed
              group-hover:border-neutral-600"
              id="footer-email"
              name="footer-email"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-fuchsia-400/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={status === "loading" || !email}
            className="w-full rounded-xl bg-gradient-to-r from-fuchsia-500 to-pink-500 px-8 py-5 text-lg font-semibold text-white 
            shadow-lg shadow-fuchsia-500/30
            hover:shadow-xl hover:shadow-fuchsia-500/40 hover:scale-[1.02]
            active:scale-[0.98]
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
            transition-all duration-300 
            flex items-center justify-center gap-2"
          >
            {status === "loading" ? (
              <>
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="h-5 w-5" />
              </>
            )}
          </button>
        </div>

        {/* Status Messages */}
        <div className="min-h-[60px] flex items-center justify-center">
          {status === "success" && (
            <div className="flex items-center gap-3 py-4 px-6 rounded-lg bg-green-500/10 border border-green-500/30">
              <CheckCircle className="h-6 w-6 text-green-400" />
              <span className="text-lg font-medium text-green-400">
                Thanks! We'll be in touch soon
              </span>
            </div>
          )}

          {status === "error" && (
            <div className="flex items-center gap-3 py-4 px-6 rounded-lg bg-red-500/10 border border-red-500/30">
              <AlertCircle className="h-6 w-6 text-red-400" />
              <span className="text-lg font-medium text-red-400">
                Please enter a valid email address
              </span>
            </div>
          )}
        </div>

        {/* Footer Text */}
        <div className="pt-8 space-y-2">
          <p className="text-neutral-600 dark:text-neutral-500 text-sm">
            Built with 💖 using React & Tailwind CSS
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-neutral-700 dark:text-neutral-600">
            <span>© 2025</span>
            <span>•</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}