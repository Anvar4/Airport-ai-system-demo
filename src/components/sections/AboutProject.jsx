import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import { HiAcademicCap, HiLightBulb, HiSearch, HiClipboardList, HiChip, HiGlobe } from 'react-icons/hi'

const infoCards = [
  {
    icon: HiSearch,
    title: 'Tadqiqot obyekti',
    content: "O'zbekiston va xorijiy aeroportlarda joriy etilgan hamda joriy etilishi rejalashtirilgan sun'iy intellekt tizimlari va ularning samaradorligi."
  },
  {
    icon: HiClipboardList,
    title: 'Tadqiqot predmeti',
    content: 'Aeroportlarda AI texnologiyalarining xavfsizlik, xizmat ko\'rsatish sifati va operatsion boshqaruv jarayonlariga ta\'siri.'
  },
  {
    icon: HiLightBulb,
    title: 'Ilmiy yangiligi',
    content: "O'zbekiston aeroportlari kontekstida sun'iy intellekt texnologiyalarini qo'llash bo'yicha kompleks tahlil va tavsiyalar ishlab chiqilganligi."
  },
  {
    icon: HiChip,
    title: 'Amaliy ahamiyati',
    content: "Tadqiqot natijalari O'zbekiston aeroportlarida AI texnologiyalarini bosqichma-bosqich joriy etish strategiyasini ishlab chiqishda amaliy ahamiyatga ega."
  },
]

export default function AboutProject() {
  return (
    <section id="loyiha-haqida" className="section-padding bg-dark-50/50 dark:bg-dark-800/30">
      <div className="container-custom">
        <SectionTitle
          badge="📋 Loyiha haqida"
          title="Tadqiqot loyihasi bayoni"
          subtitle="Aviatsiya sohasida sun'iy intellekt texnologiyalarining o'rni va ahamiyatini ilmiy jihatdan o'rganish"
        />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left - Long Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-6"
          >
            {/* Mavzuning dolzarbligi */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-dark-800 border border-dark-100 dark:border-dark-700 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-500/10 flex items-center justify-center">
                  <HiGlobe className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-dark-800 dark:text-white">Mavzuning dolzarbligi</h3>
              </div>
              <div className="space-y-4 text-dark-600 dark:text-dark-300 leading-relaxed">
                <p>
                  Hozirgi kunda jahon aviatsiya sanoati jadal raqamlashtiruv jarayonini boshdan kechirmoqda.
                  Aeroportlar nafaqat transport ulanish nuqtalari, balki murakkab texnologik ekotizimlar
                  sifatida rivojlanmoqda. Har kuni millionlab yo'lovchilarga xizmat ko'rsatadigan zamonaviy
                  aeroportlarda xavfsizlik, samaradorlik va xizmat sifatini ta'minlash tobora murakkablashib
                  bormoqda.
                </p>
                <p>
                  Sun'iy intellekt (AI — Artificial Intelligence) texnologiyalari aynan shu muammolarni hal
                  qilishda eng istiqbolli vosita sifatida tan olinmoqda. Yuzni aniqlash tizimlaridan tortib,
                  yo'lovchi oqimini tahlil qilish, bagaj tekshiruvi, parvoz jadvallarini optimallashtirish
                  va xavfsizlik monitoringigacha — AI ning qo'llanilish doirasi juda keng.
                </p>
                <p>
                  O'zbekiston ham bu jarayondan chetda qolmayapti. Toshkent xalqaro aeroporti va boshqa
                  hududiy aeroportlarda zamonaviylashtirish ishlari olib borilmoqda. Ushbu tadqiqot aynan
                  shu kontekstda — aeroportlarda AI texnologiyalarini qo'llash imkoniyatlarini chuqur
                  o'rganish va amaliy tavsiyalar ishlab chiqishga qaratilgan.
                </p>
              </div>
            </div>

            {/* Muammo bayoni */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-dark-800 border border-dark-100 dark:border-dark-700 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-500/10 flex items-center justify-center">
                  <HiAcademicCap className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-dark-800 dark:text-white">Muammo bayoni</h3>
              </div>
              <div className="space-y-4 text-dark-600 dark:text-dark-300 leading-relaxed">
                <p>
                  An'anaviy aeroport boshqaruv tizimlari inson omilining yuqori ishtirokiga asoslanadi,
                  bu esa turli xil xatoliklar, kechikishlar va xavfsizlik bo'shliqlariga olib kelishi
                  mumkin. Xususan:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 shrink-0" />
                    <span>Xavfsizlik tekshiruvlarida insoniy xatolar va shubhali holatlarni o'z vaqtida aniqlay olmaslik</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 shrink-0" />
                    <span>Yo'lovchi oqimini samarali boshqarish va navbatlarni optimallashtirish qiyinchiliklari</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 shrink-0" />
                    <span>Uskunalar va infratuzilmani profilaktik ta'mirlash uchun oldindan bashorat qilish imkoniyatining cheklanganligi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 shrink-0" />
                    <span>Katta hajmdagi ma'lumotlarni real vaqtda tahlil qilish va qaror qabul qilish tezligining past bo'lishi</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Loyiha maqsadi */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-xl shadow-primary-500/20">
              <h3 className="text-lg font-bold mb-3">🎯 Loyiha maqsadi</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Aeroportlarda sun'iy intellekt texnologiyalarini qo'llash imkoniyatlarini kompleks
                tarzda o'rganish, xorij tajribasini tahlil qilish va O'zbekiston aeroportlari uchun
                AI texnologiyalarini bosqichma-bosqich joriy etish bo'yicha ilmiy asoslangan
                tavsiyalar ishlab chiqishdan iborat.
              </p>
            </div>

            {/* Loyiha vazifalari */}
            <div className="p-6 rounded-2xl bg-white dark:bg-dark-800 border border-dark-100 dark:border-dark-700 shadow-sm">
              <h3 className="text-lg font-bold text-dark-800 dark:text-white mb-3">📝 Loyiha vazifalari</h3>
              <ul className="space-y-2.5">
                {[
                  "Aeroportlarda AI qo'llanilish yo'nalishlarini aniqlash va tasniflash",
                  "Xorijiy aeroportlardagi ilg'or AI amaliyotlarini o'rganish",
                  "AI texnologiyalarining xavfsizlik va xizmat sifatiga ta'sirini baholash",
                  "Muammolar, xavflar va cheklovlarni tahlil qilish",
                  "O'zbekiston aeroportlari uchun amaliy tavsiyalar ishlab chiqish"
                ].map((task, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-dark-600 dark:text-dark-300">
                    <span className="w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-primary-600 dark:text-primary-400 text-xs font-bold">{i + 1}</span>
                    </span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info Cards */}
            {infoCards.map((card, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white dark:bg-dark-800 border border-dark-100 dark:border-dark-700 shadow-sm hover:border-primary-200 dark:hover:border-primary-500/30 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-2.5">
                  <card.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <h4 className="font-semibold text-dark-800 dark:text-white text-sm">{card.title}</h4>
                </div>
                <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed">{card.content}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
