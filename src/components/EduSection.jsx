import { motion as Motion } from "framer-motion";
import education from "../Data/education.json";
import TimelineItem from "./EduCart";
import { fadeInUp } from "../UI/motionConfig";
import { sectionTitle, inputBase, paragraph } from "../UI/styles";
import { CheckCircle } from "lucide-react";
import { useState } from "react";

export default function EducationSection() {
  if (!education?.length) return null;
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
    <>
      <section id="education" className="py-20">
        <Motion.h2 className={sectionTitle} {...fadeInUp(0.3)}>
          My Journey
        </Motion.h2>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-purple-500 to-pink-500"></div>
          {education.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </section>
      <footer
        id="contact"
        className="flex min-h-screen flex-col items-center justify-center px-6 py-12"
      >
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
          © 2025 Fakhir Ahmed Khan. All rights reserved. Designed & built with
          💖 using React & Tailwind CSS.
        </p>
      </footer>
    </>
  );
}
