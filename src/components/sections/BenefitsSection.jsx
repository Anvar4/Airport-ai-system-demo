import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'

const benefits = [
  {
    icon: '🛡️',
    title: 'Xavfsizlik darajasi oshishi',
    desc: "Sun'iy intellekt tizimlari tahdidlarni real vaqtda aniqlaydi va xavfsizlik buzilishlariga darhol javob beradi. An'anaviy usullarga nisbatan 3-4 baravar samarali ishlaydi.",
    stat: '95%',
    statLabel: 'tahdidlar aniqlanadi'
  },
  {
    icon: '🎯',
    title: 'Insoniy xatolar kamayishi',
    desc: "Avtomatlashtirilgan tekshiruv va monitoring tizimlar charchash, e'tiborsizlik va sub'ektiv qarorlar tufayli yuzaga keladigan xatolarni deyarli to'liq bartaraf etadi.",
    stat: '90%',
    statLabel: 'xatolar kamayadi'
  },
  {
    icon: '⏱️',
    title: 'Vaqt tejalishi',
    desc: "Check-in, boarding va xavfsizlik tekshiruvlari jarayonlari sezilarli tezlashadi. Yo'lovchilar aeroportda kamroq vaqt sarflaydi va uchish tajribasi yaxshilanadi.",
    stat: '50%',
    statLabel: 'tezroq xizmat'
  },
  {
    icon: '⚡',
    title: 'Tezkor xizmat ko\'rsatish',
    desc: "AI chatbotlar va virtual yordamchilar 24/7 ishlaydi. Bir vaqtda minglab yo'lovchilarga individual yondashuv bilan xizmat ko'rsatish imkoniyati mavjud.",
    stat: '24/7',
    statLabel: "uzluksiz xizmat"
  },
  {
    icon: '📈',
    title: 'Resurslarni optimallashtirish',
    desc: "Yo'lovchi oqimi tahlili asosida xodimlar, gate va terminal resurslarini optimal taqsimlash. Ortiqcha xarajatlarni kamaytirish va samaradorlikni oshirish.",
    stat: '35%',
    statLabel: "samaradorlik o'sishi"
  },
  {
    icon: '😊',
    title: "Yo'lovchi tajribasini yaxshilash",
    desc: "Qisqa navbatlar, shaxsiylashtirilgan xizmat, real vaqtdagi ma'lumotlar va zamonaviy texnologiyalar yo'lovchilarga qulay va esda qolarli sayohat tajribasini ta'minlaydi.",
    stat: '4.8/5',
    statLabel: "yo'lovchi qoniqishi"
  },
  {
    icon: '💰',
    title: 'Xarajatlarni kamaytirish',
    desc: "Avtomatlashtirilgan jarayonlar, profilaktik ta'mirlash va optimal resurs taqsimlash orqali operatsion xarajatlar sezilarli kamayadi.",
    stat: '40%',
    statLabel: 'xarajat tejamkorligi'
  },
  {
    icon: '📊',
    title: 'Tahlil va monitoring sifati',
    desc: "Real vaqtdagi analitika va bashoratli tahlil aeroportning barcha operatsiyalarini to'liq nazorat qilish va strategik qarorlar qabul qilish imkonini beradi.",
    stat: '∞',
    statLabel: "uzluksiz monitoring"
  }
]

export default function BenefitsSection() {
  return (
    <section id="afzalliklar" className="section-padding bg-dark-50/50 dark:bg-dark-800/30">
      <div className="container-custom">
        <SectionTitle
          badge="✅ Afzalliklar"
          title="AI texnologiyalarining asosiy afzalliklari"
          subtitle="Sun'iy intellektni aeroportlarda qo'llash orqali erishiladigan aniq natijalar va foydalari"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-6 rounded-2xl bg-white dark:bg-dark-800 border border-dark-100 dark:border-dark-700 hover:border-primary-200 dark:hover:border-primary-500/30 transition-all duration-300 card-hover"
            >
              <span className="text-4xl mb-4 block">{item.icon}</span>

              {/* Stat badge */}
              <div className="mb-4">
                <span className="text-2xl font-extrabold gradient-text">{item.stat}</span>
                <p className="text-xs text-dark-400 dark:text-dark-500 mt-0.5">{item.statLabel}</p>
              </div>

              <h3 className="text-lg font-bold text-dark-800 dark:text-white mb-2">{item.title}</h3>
              <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
