import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import {
  fadeInUp,
  HeadingH1,
  AnchorTag,
  Paragraph,
  HomeStyle,
  FakhirAhmedKhan,
  socialLinksDiv,
} from "../UI/styles.js";

export default function HomeSection() {
  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("socialLinks");
    if (storedData) {
      setSocialLinks(JSON.parse(storedData));
    } else {
      axios
        .get(
          "https://raw.githubusercontent.com/FakhirAhmedKhan/DataApi-main/refs/heads/main/Data/socialLinks.json"
        )
        .then((res) => {
          const data = res.data.socialLinks || [];
          setSocialLinks(data);
          localStorage.setItem("socialLinks", JSON.stringify(data));
        })
        .catch((err) => console.error("Error fetching socialLinks:", err));
    }
  }, []);

  return (
    <motion.section
      id="home"
      className="flex flex-col min-h-screen items-center justify-center px-4 text-center space-y-6"
      {...fadeInUp(0.3)}
    >
      <h1 className={HeadingH1}>
        <ReactTyped
          strings={["Hello, I'm"]}
          typeSpeed={80}
          showCursor={false}
        />
        <span className={FakhirAhmedKhan}>
          <ReactTyped
            strings={["Fakhir Ahmed Khan"]}
            typeSpeed={190}
            showCursor={false}
          />
        </span>
      </h1>

      <p className="mx-auto max-w-2xl text-lg text-neutral-700 md:text-xl dark:text-neutral-400">
        A passionate web developer intern on a mission to build beautiful,
        functional, and futuristic web experiences. Welcome to my playground.
      </p>

      <div className="flex justify-center space-x-6">
        <div className="flex justify-center space-x-6">
          {socialLinks.map(({ url, icon, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              className="text-neutral-500 hover:text-fuchsia-500 transition-colors dark:text-neutral-400 dark:hover:text-pink-400 z-50"
              aria-label={label}
              name={label}
            >
              <img src={icon} alt={label} className="w-7 h-7" />
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
