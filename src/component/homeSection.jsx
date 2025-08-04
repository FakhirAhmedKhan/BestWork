import { motion as Motion } from 'framer-motion'
import renderIcon from '../utility/renderIcon'

const socialLinks = [
  {
    href: 'https://github.com/FakhirAhmedKhan',
    label: 'GitHub',
    icon: 'GithubIcon'
  },
  {
    href: 'https://www.linkedin.com/in/fakhir-ahmed-3b5537316/',
    label: 'LinkedIn',
    icon: 'LinkedinIcon'
  },
  {
    href: 'https://x.com/FakhirAhme41220',
    label: 'Twitter',
    icon: 'TwitterIcon'
  }
]

const fadeInProps = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.8 }
})

export default function HomeSection () {
  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center text-center px-4'
    >
      <Motion.div
        className='space-y-6'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Motion.h1
          className='text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter'
          {...fadeInProps(0.2)}
        >
          <span className='block'>Hello, I'm</span>
          <span className='block bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600'>
            Fakhir Ahmed Khan
          </span>
        </Motion.h1>

        <Motion.p
          className='max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400'
          {...fadeInProps(0.4)}
        >
          A passionate web developer intern on a mission to build beautiful,
          functional, and futuristic web experiences. Welcome to my digital
          playground.
        </Motion.p>

        <Motion.div
          className='flex justify-center space-x-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {socialLinks.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={label}
              title={label}
              className='text-slate-500 dark:text-slate-400 hover:text-purple-500 dark:hover:text-pink-400 transition-colors'
            >
              {renderIcon(icon)}
            </a>
          ))}
        </Motion.div>
      </Motion.div>
    </section>
  )
}
