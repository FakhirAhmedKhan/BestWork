import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
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
    <section id="home" className={HomeStyle}>
      <motion.div className="space-y-6" {...fadeInUp(0.2)}>
        <h1 className={HeadingH1}>
          <span className="block">Hello, I'm</span>
          <span className={FakhirAhmedKhan}>Fakhir Ahmed Khan</span>
        </h1>

        <p className={Paragraph}>
          A passionate web developer intern on a mission to build beautiful,
          functional, and futuristic web experiences. Welcome to my playground.
        </p>

        <div className={socialLinksDiv}>
          <div className={socialLinksDiv}>
            {socialLinks.map(({ url, icon, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                className={AnchorTag}
                aria-label={label}
                name={label}
              >
                <img src={icon} alt={label} className="w-7 h-7" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
