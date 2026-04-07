import { motion } from 'framer-motion'

export default function SectionTitle({ badge, title, subtitle, center = true, light = false }) {
  return (
    <div className={`mb-12 sm:mb-16 ${center ? 'text-center' : ''}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase ${
            light
              ? 'bg-white/10 text-white/90 border border-white/20'
              : 'bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-100 dark:border-primary-500/20'
          }`}>
            {badge}
          </span>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? 'text-white' : 'text-dark-800 dark:text-white'
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-4 text-lg max-w-3xl ${center ? 'mx-auto' : ''} ${
            light ? 'text-white/70' : 'text-dark-500 dark:text-dark-400'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
