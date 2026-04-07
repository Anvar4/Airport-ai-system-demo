import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import { HiMail, HiLocationMarker, HiPhone, HiPaperAirplane, HiSparkles } from 'react-icons/hi'

const contactInfo = [
  {
    icon: HiMail,
    label: 'Email',
    value: 'info@aihub-airport.uz',
    href: 'mailto:info@aihub-airport.uz'
  },
  {
    icon: HiPhone,
    label: 'Telefon',
    value: '+998 71 123 45 67',
    href: 'tel:+998711234567'
  },
  {
    icon: HiLocationMarker,
    label: 'Manzil',
    value: 'Toshkent sh., Universitet ko\'chasi, 7',
    href: '#'
  }
]

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <section id="boglanish" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <SectionTitle
          badge="Bog'lanish"
          title="Biz bilan aloqa"
          subtitle="Loyiha muallifi va jamoa bilan bog'laning"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-600 text-white shadow-xl shadow-primary-500/20">
              <div className="flex items-center gap-2 mb-2">
                <HiSparkles className="text-xl text-primary-200" />
                <h3 className="text-xl font-bold">Loyiha Muallifi</h3>
              </div>
              <p className="text-white/90 font-medium mb-1">Tangirova Barchinoy</p>
              <p className="text-white/70 text-sm mb-6">
                Axborot texnologiyalari fakulteti, 4-bosqich KIDT talabasi
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, i) => (
                  <a
                    key={i}
                    href={info.href}
                    className="flex items-center gap-4 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-200"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-white/70">{info.label}</p>
                      <p className="text-sm font-medium text-white">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="h-48 rounded-2xl bg-gradient-to-br from-dark-100 to-dark-50 dark:from-dark-800 dark:to-dark-700 border border-dark-100 dark:border-dark-700 flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 opacity-[0.2]" style={{backgroundImage: `radial-gradient(#8b5cf6 1px, transparent 1px)`, backgroundSize: '20px 20px'}} />
              <div className="text-center relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center mb-2">
                  <HiLocationMarker className="text-2xl" />
                </div>
                <p className="text-sm font-medium text-dark-500 dark:text-dark-400">Toshkent, O'zbekiston</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-dark-50 to-white dark:from-dark-800 dark:to-dark-800/50 border border-dark-100 dark:border-dark-700 shadow-sm">
              <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-6">Xabar yuborish</h3>

              <div className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                    Ismingiz
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-700 border border-dark-200 dark:border-dark-600 text-dark-800 dark:text-white placeholder-dark-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200"
                    placeholder="To'liq ismingizni kiriting"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                    Email manzilingiz
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-700 border border-dark-200 dark:border-dark-600 text-dark-800 dark:text-white placeholder-dark-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200"
                    placeholder="email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                    Xabaringiz
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-700 border border-dark-200 dark:border-dark-600 text-dark-800 dark:text-white placeholder-dark-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200 resize-none"
                    placeholder="Xabaringizni yozing..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={`w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 ${
                    isSubmitted
                      ? 'bg-green-500 cursor-default'
                      : 'bg-gradient-to-r from-primary-600 to-accent-600 hover:shadow-lg hover:shadow-primary-500/25 hover:-translate-y-0.5 active:scale-[0.98]'
                  }`}
                >
                  {isSubmitted ? (
                    <>Muvaffaqiyatli yuborildi!</>
                  ) : (
                    <>
                      <HiPaperAirplane className="w-5 h-5 rotate-90" />
                      Yuborish
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
