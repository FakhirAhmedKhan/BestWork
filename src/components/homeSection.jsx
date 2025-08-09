import { motion as Motion } from "framer-motion";
import { fadeIn } from "../UI/motionConfig";
import { socialLinks } from "../Data/socialLinks";
import { HeadingH1, anchorTag, paragraph } from "../UI/styles";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center px-4 text-center"
    >
      <Motion.div className="space-y-6" {...fadeIn(0.2)}>
        <h1 className={HeadingH1}>
          <span className="block">Hello, I'm</span>
          <span className="block bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
            Fakhir Ahmed Khan
          </span>
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
