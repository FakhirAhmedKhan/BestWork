import { useState } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import renderIcon from '../utility/renderIcon'

export default function HeaderSection () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = id => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const navItems = ['home', 'projects', 'skills', 'education', 'contact']

  return (
    <Motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/30 dark:bg-black/30 border-b border-white/10 transition-all duration-300'
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Brand */}
          <div className='text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500'>
            Simple.Dev
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className='capitalize text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-purple-500 dark:hover:text-pink-400 transition-colors'
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden ml-4 p-2'
            aria-label='Toggle menu'
          >
            {renderIcon('MenuIcon', 'w-6 h-6')}
          </button>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <Motion.div
            key='mobile-menu'
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className='md:hidden px-4 pt-2 pb-4 space-y-2'
          >
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className='block w-full text-left capitalize py-2 px-3 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors'
              >
                {item}
              </button>
            ))}
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.header>
  )
}
