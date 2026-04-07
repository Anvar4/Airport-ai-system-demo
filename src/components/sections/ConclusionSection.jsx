import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'

export default function ConclusionSection() {
  return (
    <section className="section-padding bg-dark-50/50 dark:bg-dark-800/30">
      <div className="container-custom">
        <SectionTitle
          badge="📝 Xulosa"
          title="Loyiha xulosasi"
          subtitle="Tadqiqot natijalari va yakuniy fikrlar"
        />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Main conclusion */}
            <div className="p-8 rounded-2xl bg-white dark:bg-dark-800 border border-dark-100 dark:border-dark-700 shadow-sm">
              <div className="space-y-4 text-dark-600 dark:text-dark-300 leading-relaxed">
                <p>
                  Ushbu tadqiqot davomida aeroportlarda sun'iy intellekt texnologiyalarini qo'llash
                  imkoniyatlari har tomonlama o'rganildi. Tadqiqot natijalari shuni ko'rsatdiki, AI
                  texnologiyalari aeroportlarning xavfsizlik, xizmat ko'rsatish sifati va operatsion
                  samaradorligini sezilarli darajada oshirish imkoniyatiga ega.
                </p>
                <p>
                  Yuzni aniqlash, bagaj tekshiruvi, yo'lovchi oqimi tahlili, predictive maintenance
                  va avtomatlashtirilgan qaror qabul qilish kabi 10 ta asosiy yo'nalishda AI ning
                  samarali qo'llanilishi mumkinligi isbotlandi. Xorijiy aeroportlarning muvaffaqiyatli
                  tajribasi bu yo'nalishda aniq natijalarga erishish mumkinligini ko'rsatmoqda.
                </p>
                <p>
                  Shu bilan birga, maxfiylik muammolari, yuqori boshlang'ich xarajatlar, etik
                  masalalar va texnik qiyinchiliklar kabi muammolar ham mavjud. Bu muammolarni hal
                  qilish uchun bosqichma-bosqich joriy etish strategiyasi, kadrlar tayyorlash va
                  huquqiy baza yaratish zarur.
                </p>
              </div>
            </div>

            {/* Key findings grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: '✅',
                  title: 'Asosiy topilma',
                  desc: "AI texnologiyalari aeroportlarning xavfsizlik va samaradorligini 40-95% gacha oshirish imkoniga ega."
                },
                {
                  icon: '📊',
                  title: 'Statistik natija',
                  desc: "Dunyoning 240 dan ortiq aeroportida AI tizimlari muvaffaqiyatli qo'llanilmoqda."
                },
                {
                  icon: '🎯',
                  title: 'Amaliy tavsiya',
                  desc: "O'zbekiston aeroportlari uchun CCTV analitika va bagaj tekshiruvidan boshlash tavsiya etiladi."
                },
                {
                  icon: '🔮',
                  title: 'Kelajak bashorati',
                  desc: "2030-yilga kelib aeroportlarning 80% dan ortig'i AI texnologiyalarini to'liq joriy etadi."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-5 rounded-2xl bg-white dark:bg-dark-800 border border-dark-100 dark:border-dark-700"
                >
                  <span className="text-2xl mb-2 block">{item.icon}</span>
                  <h3 className="font-bold text-dark-800 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-dark-500 dark:text-dark-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Theoretical foundations */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-500/5 dark:to-accent-500/5 border border-primary-100 dark:border-primary-500/20">
              <h3 className="text-lg font-bold text-dark-800 dark:text-white mb-3">📚 Foydalanilgan nazariy asoslar</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Machine Learning (mashinaviy o\'qitish)',
                  'Deep Learning (chuqur o\'rganish)',
                  'Computer Vision (kompyuter ko\'rishi)',
                  'Natural Language Processing (NLP)',
                  'Convolutional Neural Networks (CNN)',
                  'IoT (Internet of Things)',
                  'Decision Support Systems (DSS)',
                  'Predictive Analytics'
                ].map((tech, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-dark-600 dark:text-dark-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
