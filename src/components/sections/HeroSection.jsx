import { motion } from 'framer-motion';
import { HiArrowRight, HiLightningBolt, HiShieldCheck, HiChartPie, HiCog } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';

export default function HeroSection() {
  const { t } = useTranslation();

  const cards = [
    { href: '#simulator', icon: HiLightningBolt, color: 'text-primary-400', border: 'hover:border-primary-500/50', label: 'Queue Simulator', desc: t('modules.simDesc') },
    { href: '#analyzer', icon: HiShieldCheck, color: 'text-accent-400', border: 'hover:border-accent-500/50', label: 'Risk Analyzer', desc: t('modules.riskDesc') },
    { href: '#analytics', icon: HiChartPie, color: 'text-indigo-400', border: 'hover:border-indigo-500/50', label: 'AI Analytics', desc: t('modules.analyticsDesc') },
    { href: '#maintenance', icon: HiCog, color: 'text-pink-400', border: 'hover:border-pink-500/50', label: 'Smart Maintenance', desc: t('modules.mainDesc') },
  ];

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary-500/20 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-500/15 blur-[100px] animate-pulse-slow" />
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-primary-400/10 blur-[80px] animate-float" />
      </div>

      {/* Floating plane */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[15%] right-[10%] text-white/5"
          animate={{ x: [0, 30, 0], y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg className="w-32 h-32 sm:w-48 sm:h-48" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
          </svg>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative container-custom section-padding z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-white/90 notranslate">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Tangirova Barchinoy | {t('hero.badge')}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6"
          >
            {t('hero.title1')}{' '}
            <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-300 bg-clip-text text-transparent">
              {t('hero.titleHighlight')}
            </span>
            {t('hero.title2') && (
              <>
                <br />
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white/80">
                  {t('hero.title2')}
                </span>
              </>
            )}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <a href="#auth" className="btn-primary text-base shadow-xl shadow-primary-500/30 hover:-translate-y-1">
              {t('hero.startBtn')} <HiArrowRight />
            </a>
            <a href="#info" className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white/20 text-white/80 hover:bg-white/10 font-bold transition-all duration-300 text-base">
              {t('hero.infoBtn')}
            </a>
          </motion.div>

          {/* Module Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
          >
            {cards.map((card) => (
              <a key={card.href} href={card.href}
                className={`group p-5 rounded-2xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 ${card.border} transition-all duration-300 text-left flex flex-col justify-between hover:-translate-y-1`}>
                <div>
                  <card.icon className={`text-3xl ${card.color} mb-3`} />
                  <h3 className="text-white font-bold mb-1 text-sm">{card.label}</h3>
                  <p className="text-white/50 text-xs line-clamp-2">{card.desc}</p>
                </div>
                <div className={`mt-4 flex items-center justify-end ${card.color} opacity-0 group-hover:opacity-100 transition-opacity`}>
                  <HiArrowRight />
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
