// Header.jsx - Premium Navigation Component
import { NavLink, useLocation } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Home, Code, Briefcase, GraduationCap, Mail, Menu, X } from "lucide-react";
import { LogoHeader } from "../Components/Header/Logo";

export default function HeaderSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Dynamic header background opacity based on scroll
  const headerOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 100], [8, 20]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Skills", path: "/skills", icon: Code },
    { name: "Projects", path: "/projects", icon: Briefcase },
    { name: "Education", path: "/education", icon: GraduationCap },
  ];

  const logoVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.05,
      rotate: [0, -5, 5, -5, 0],
      transition: { duration: 0.5 }
    },
    tap: { scale: 0.95 }
  };

  const navItemVariants = {
    initial: { opacity: 0, y: -20 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }),
    hover: {
      y: -2,
      transition: { duration: 0.2 }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.05
      }
    }
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <motion.header
      style={{
        backgroundColor: `rgba(15, 23, 42, ${headerOpacity})`,
        backdropFilter: `blur(${headerBlur}px)`
      }}
      initial={{ y: -100 }}
      animate={{
        y: 0,
        boxShadow: isScrolled
          ? "0 10px 30px -10px rgba(168, 85, 247, 0.3)"
          : "0 0 0 0 rgba(168, 85, 247, 0)"
      }}
      transition={{ duration: 0.6, type: "spring", damping: 25 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Glow Effect */}
          <LogoHeader />

          {/* Desktop Navigation with Icons */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.path}
                  custom={index}
                  variants={navItemVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                >
                  <NavLink to={item.path}>
                    {({ isActive }) => (
                      <motion.div
                        className={`relative px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all duration-300 ${isActive
                          ? "text-white"
                          : "text-slate-400 hover:text-white"
                          }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {/* Active Background Glow */}
                        {isActive && (
                          <motion.div
                            layoutId="navBg"
                            className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 rounded-xl"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}

                        {/* Active Border */}
                        {isActive && (
                          <motion.div
                            layoutId="navBorder"
                            className="absolute inset-0 border-2 border-pink-500/50 rounded-xl"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}

                        <Icon className="w-4 h-4 relative z-10" />
                        <span className="font-medium relative z-10">{item.name}</span>

                        {/* Hover Indicator */}
                        {!isActive && (
                          <motion.div
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                            initial={{ width: 0 }}
                            whileHover={{ width: "70%" }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </motion.div>
                    )}
                  </NavLink>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Button with Magnetic Effect */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="#contact"
              className="relative px-6 py-3  rounded-full text-white font-medium overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 "
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                {/* <Mail className="w-4 h-4" /> */}
              </span>
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-slate-800/50 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all border border-white/10"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Enhanced Mobile Menu */}
        <motion.div
          variants={mobileMenuVariants}
          initial="closed"
          animate={isMobileMenuOpen ? "open" : "closed"}
          className="md:hidden overflow-hidden"
        >
          <motion.div className="py-6 space-y-3">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.path}
                  variants={mobileItemVariants}
                >
                  <NavLink
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {({ isActive }) => (
                      <motion.div
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive
                          ? "bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 text-white border-2 border-pink-500/30"
                          : "text-slate-300 hover:bg-slate-800/50 hover:text-white border-2 border-transparent"
                          }`}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                        {isActive && (
                          <motion.div
                            layoutId="mobileDot"
                            className="ml-auto w-2 h-2 rounded-full bg-pink-500"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </motion.div>
                    )}
                  </NavLink>
                </motion.div>
              );
            })}

            <motion.div variants={mobileItemVariants}>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-4 py-3 mt-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-xl text-white font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </nav>
    </motion.header>
  );
}