import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'

const futureItems = [
  {
    year: '2025–2027',
    title: 'Biometrik avtomatlashtirish',
    desc: "To'liq biometrik yo'lovchi oqimi — yuzni aniqlash asosida check-in, xavfsizlik tekshiruvi va boarding jarayonlarining to'liq avtomatlashtirilishi. Yo'lovchi pasport yoki boarding pass ko'rsatmasdan aeroportning barcha bosqichlaridan o'tadi.",
    icon: '👤',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    year: '2026–2028',
    title: 'AI + IoT + Computer Vision integratsiyasi',
    desc: "Smart sensor tarmoqlari va AI analitikaning yagona platformada birlashishi. Har bir zona, qurilma va jarayondan real vaqtda ma'lumot oqimi yig'iladi va markazlashtirilgan AI tizim tomonidan tahlil qilinadi.",
    icon: '🌐',
    color: 'from-green-500 to-emerald-500'
  },
  {
    year: '2027–2029',
    title: 'Raqamli egizaklar (Digital Twins)',
    desc: "Aeroportning to'liq raqamli nusxasi yaratiladi. Bu virtual model orqali turli stsenariylarni simulyatsiya qilish, infratuzilmani rejalashtirish va favqulodda holatlarga tayyorgarlik ko'rish mumkin bo'ladi.",
    icon: '🏗️',
    color: 'from-violet-500 to-purple-500'
  },
  {
    year: '2028–2030',
    title: 'Real-time Airport Intelligence',
    desc: "Aeroportning barcha operatsiyalarini real vaqtda boshqaradigan yagona AI platformasi. Parvoz boshqaruvi, yo'lovchi oqimi, xavfsizlik, resurslar va energiya — barchasi bitta aqlli tizim tomonidan muvofiqlashtariladi.",
    icon: '🧠',
    color: 'from-amber-500 to-orange-500'
  },
  {
    year: '2029–2032',
    title: 'Smart Terminal Management',
    desc: "AI boshqaruvchi yoritish, harorat, energiya iste'moli, chiqindi boshqaruvi va boshqa terminal tizimlarini avtomatik optimallashtiradi. Ekologik samaradorlik va energiya tejamkorligi yangi darajaga ko'tariladi.",
    icon: '🏢',
    color: 'from-pink-500 to-rose-500'
  },
  {
    year: '2030+',
    title: 'Avtonom aeroport ekotizimlari',
    desc: "To'liq avtonom aeroportlar — avtonom transport, robototexnika, AI dispatcher va inson ishtirokisiz ishlaydigan jarayonlar. Insonlar faqat strategik qarorlar va nazorat vazifalarini bajaradi.",
    icon: '🚀',
    color: 'from-indigo-500 to-blue-500'
  }
]

export default function FutureSection() {
  return (
    <section id="kelajak" className="section-padding bg-dark-50/50 dark:bg-dark-800/30">
      <div className="container-custom">
        <SectionTitle
          badge="🔮 Kelajak istiqbollari"
          title="Aeroportlarning AI kelajagi"
          subtitle="Sun'iy intellekt texnologiyalari aeroportlar faoliyatini tubdan o'zgartirishi kutilmoqda"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-accent-500/50 to-primary-500/50" />

          <div className="space-y-8 lg:space-y-12">
            {futureItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative flex flex-col lg:flex-row items-center gap-6 ${
                  i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-dark-800 border border-dark-100 dark:border-dark-700 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div className={`flex items-center gap-3 mb-4 ${i % 2 === 0 ? 'lg:justify-end' : ''}`}>
                      <span className="text-3xl">{item.icon}</span>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white`}>
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-3">{item.title}</h3>
                    <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 items-center justify-center shadow-lg shadow-primary-500/25 z-10">
                  <span className="text-white text-lg">{item.icon}</span>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
