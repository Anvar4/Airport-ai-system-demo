import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 240, suffix: '+', label: 'Aeroportlar AIdan foydalanmoqda', icon: '✈️' },
  { value: 85, suffix: '%', label: 'Xavfsizlik samaradorligi oshishi', icon: '🛡️' },
  { value: 40, suffix: '%', label: 'Operatsion xarajatlar tejamkorligi', icon: '💰' },
  { value: 3.2, suffix: ' mlrd $', label: 'Global AI aviation bozori (2026)', icon: '📊', decimals: 1 },
];

function CountUp({ target, decimals = 0, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = 0;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = start + (target - start) * eased;

            setCount(decimals > 0 ? parseFloat(current.toFixed(decimals)) : Math.floor(current));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, decimals]);

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="relative -mt-1 bg-white dark:bg-dark-900">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-6 sm:p-8 rounded-2xl bg-linear-to-br from-dark-50 to-white dark:from-dark-800 dark:to-dark-800/50 border border-dark-100 dark:border-dark-700 hover:border-primary-200 dark:hover:border-primary-500/30 transition-all duration-300 card-hover text-center"
            >
              <span className="text-3xl mb-4 block">{stat.icon}</span>
              <div className="text-3xl sm:text-4xl font-extrabold text-dark-800 dark:text-white mb-2">
                <CountUp target={stat.value} decimals={stat.decimals || 0} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-dark-500 dark:text-dark-400">{stat.label}</p>

              {/* Hover accent */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
