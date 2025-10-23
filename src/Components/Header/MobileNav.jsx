import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useAppContext } from "../../../Hooks/useAppLogic";
import { itemVariants, menuVariants } from "../../UI/components/motionConfige";

export const MobileNav = () => {

  const { navItems, activeSection, isMenuOpen, scrollToSection } = useAppContext();

  return (
    <>
      {isMenuOpen && (
        <motion.nav
          className="fixed inset-0 z-[60] md:hidden flex flex-col justify-between border-t border-gray-200 dark:border-gray-700 bg-transparen dark:bg-gray-900/95 backdrop-blur-lg overflow-y-auto"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div className="flex-1 px-6 py-8 space-y-3 sm:px-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-base sm:text-lg transition-all ${isActive
                    ? "bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white shadow-lg"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  variants={itemVariants}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      className="ml-auto w-2 h-2 rounded-full bg-white"
                      layoutId="activeMobile"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Mobile CTA */}
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="m-6 sm:m-8 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 text-white font-semibold text-base sm:text-lg shadow-lg"
            variants={itemVariants}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>Get In Touch</span>
          </motion.a>
        </motion.nav>

      )}
    </>
  )
}
