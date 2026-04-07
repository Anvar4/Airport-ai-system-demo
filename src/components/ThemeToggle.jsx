import { useTheme } from '../context/ThemeContext'
import { HiSun, HiMoon } from 'react-icons/hi'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2.5 rounded-xl bg-dark-100 dark:bg-dark-800 hover:bg-dark-200 dark:hover:bg-dark-700 transition-colors duration-200"
      aria-label={isDark ? 'Yorug\' rejimga o\'tish' : 'Qorong\'i rejimga o\'tish'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <HiSun className="w-5 h-5 text-yellow-400" />
        ) : (
          <HiMoon className="w-5 h-5 text-dark-600" />
        )}
      </motion.div>
    </button>
  )
}
