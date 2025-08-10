import { motion as Motion } from "framer-motion";
import { fadeInUp } from "../UI/motionConfig.js";
import { socialLinks } from "../Data/socialLinks";
import {
  HeadingH1,
  anchorTag,
  paragraph,
  homeStyle,
  FakhirAhmedKhan,
} from "../UI/styles";

export default function HomeSection() {
  return (
    <section id="🏠" className={homeStyle}>
      <Motion.div className="space-y-6" {...fadeInUp(0.2)}>
        <h1 className={HeadingH1}>
          <span className="block">Hello, I'm</span>
          <span className={FakhirAhmedKhan}>Fakhir Ahmed Khan</span>
        </h1>

        <p className={paragraph}>
          A passionate web developer intern on a mission to build beautiful,
          functional, and futuristic web experiences. Welcome to my playground.
        </p>

        <div className="flex justify-center space-x-6">
          {socialLinks.map(({ url, icon: Icon, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={anchorTag}
            >
              <Icon size={28} />
            </a>
          ))}
        </div>
      </Motion.div>
    </section>
  );
}
