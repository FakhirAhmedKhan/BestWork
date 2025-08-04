import { useState, useCallback } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import renderIcon from '../utility/renderIcon'

const navItems = ['home', 'projects', 'skills', 'education', 'contact']

const NavButton = ({ item, onClick, isMobile }) => (
  <button
    onClick={() => onClick(item)}
    className={`capitalize font-medium transition-colors ${
      isMobile
        ? 'block w-full text-left py-2 px-3 text-base text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md'
        : 'text-lg text-slate-600 dark:text-slate-300 hover:text-purple-500 dark:hover:text-pink-400'
    }`}
  >
    {item}
  </button>
)

export default function HeaderSection () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = useCallback(id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }, [])

  return (
    <Motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/30 dark:bg-black/30 border-b border-white/10 transition-all duration-300'
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500'>
            Simple.Dev
          </div>

          <nav className='hidden md:flex items-center space-x-8'>
            {navItems.map(item => (
              <NavButton key={item} item={item} onClick={scrollToSection} />
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(open => !open)}
            className='md:hidden ml-4 p-2'
            aria-label='Toggle menu'
          >
            {renderIcon('MenuIcon', 'w-6 h-6')}
          </button>
        </div>
      </div>

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
              <NavButton
                key={item}
                item={item}
                onClick={scrollToSection}
                isMobile
              />
            ))}
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.header>
  )
}
