import { motion as Motion } from "framer-motion";
import { socialLinks } from "../Data/socialLinks.js";
import {
  fadeInUp,
  HeadingH1,
  AnchorTag,
  Paragraph,
  HomeStyle,
  FakhirAhmedKhan,
  socialLinksDiv,
} from "../UI/styles";

export default function HomeSection() {
  return (
    <section id="🏠" className={HomeStyle}>
      <Motion.div className="space-y-6" {...fadeInUp(0.2)}>
        <h1 className={HeadingH1}>
          <span className="block">Hello, I'm</span>
          <span className={FakhirAhmedKhan}>Fakhir Ahmed Khan</span>
        </h1>

        <p className={Paragraph}>
          A passionate web developer intern on a mission to build beautiful,
          functional, and futuristic web experiences. Welcome to my playground.
        </p>

        <div className={socialLinksDiv}>
          {socialLinks.map(({ url, icon: Icon, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              className={AnchorTag}
              aria-label={label}
              name={label}
            >
              <Icon size={28} />
            </a>
          ))}
        </div>
      </Motion.div>
    </section>
  );
}
