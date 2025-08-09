import { inputBase, paragraph, sectionTitle, footerStyle } from "../UI/styles";
import { CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

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
    <footer id="Email-ME" className={footerStyle}>
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className={sectionTitle}>Get In Touch</h2>
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

          {status === "success" && (
            <div className="flex items-center justify-center gap-2 py-4 text-lg font-medium text-green-300">
              <CheckCircle className="h-6 w-6" />
              Message sent successfully!
            </div>
          )}
        </form>
      </div>

      <p className={`${paragraph} mt-8 text-center text-sm text-gray-400`}>
        © 2025 Fakhir Ahmed Khan. All rights reserved. Designed & built with 💖
        using React & Tailwind CSS.
      </p>
    </footer>
  );
}
