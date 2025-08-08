/* eslint-disable no-unused-vars */
import { motion as Motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const fadeInProps = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.8 },
});

const Icons = [
  { name: "https://github.com/FakhirAhmedKhan", icon: Github },
  { name: "https://linkedin.com/in/fakhir-ahmed-3b5537316", icon: Linkedin },
  { name: "https://twitter.com/FakhirAhme41220", icon: Twitter },
];

export default function HomeSection() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center px-4 text-center"
    >
      <Motion.div className="space-y-6" {...fadeInProps(0.2)}>
        <h1 className="text-5xl font-extrabold tracking-tighter md:text-7xl lg:text-8xl">
          <span className="block">Hello, I'm</span>
          <span className="block bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
            Fakhir Ahmed Khan
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-600 md:text-xl dark:text-slate-400">
          A passionate web developer intern on a mission to build beautiful,
          functional, and futuristic web experiences. Welcome to my digital
          playground.
        </p>
        <div className="flex justify-center space-x-6">
          {Icons.map(({ name, icon: Icon }) => (
            <a
              key={name}
              href={name}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 transition-colors hover:text-purple-500 dark:text-slate-400 dark:hover:text-pink-400"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </Motion.div>
    </section>
  );
}
