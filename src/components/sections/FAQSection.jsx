import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import { HiChevronDown } from 'react-icons/hi'

const faqs = [
  {
    question: "Sun'iy intellekt aeroportlarda qanday sohalarda qo'llaniladi?",
    answer: "Sun'iy intellekt aeroportlarda asosan quyidagi sohalarda qo'llaniladi: yo'lovchilarni biometrik identifikatsiya qilish, xavfsizlik nazorati va shubhali holatlarni aniqlash, bagaj tekshiruvi, navbatlarni boshqarish, yo'lovchi oqimi tahlili, chatbot va virtual yordamchilar, uskunalarni profilaktik ta'mirlash (predictive maintenance), parvoz kechikishlarini bashorat qilish, CCTV video analitika va avtomatlashtirilgan qaror qabul qilish tizimlari."
  },
  {
    question: 'AI tizimlarini joriy etish qancha xarajat talab qiladi?',
    answer: "Xarajat miqdori aeroportning hajmi va joriy etiladigan tizim turiga qarab farq qiladi. Kichik aeroportlar uchun bazaviy AI tizimlar $500,000 dan $2 milliongacha, o'rta aeroportlar uchun $5 milliondan $20 milliongacha, yirik xalqaro aeroportlar uchun esa $50 milliondan $200 milliongacha investitsiya talab qilishi mumkin. Ammo ROI (investitsiya qaytimi) odatda 2-4 yil ichida erishiladi."
  },
  {
    question: "AI yo'lovchilarning shaxsiy ma'lumotlariga qanday ta'sir qiladi?",
    answer: "Biometrik ma'lumotlarni himoya qilish uchun AES-256 shifrlash, tokenizatsiya va anonim identifikatorlar ishlatiladi. GDPR, CCPA va mahalliy ma'lumotlar himoyasi qonunlariga to'liq muvofiqlik ta'minlanadi. Yo'lovchilar o'z biometrik ma'lumotlaridan foydalanishni rad etish huquqiga ega va bu holda an'anaviy tekshiruv usullari taklif etiladi."
  },
  {
    question: "AI tizimlarning aniqligi qanday darajada?",
    answer: "Zamonaviy AI tizimlari yuzni aniqlashda 99.7%, bagaj tekshiruvida taqiqlangan buyumlarni aniqlashda 98.5%, anomaliya aniqlashda 97% va parvoz kechikishlarini bashorat qilishda 85-90% aniqlikka erishmoqda. Ammo bu ko'rsatkichlar doimiy yaxshilanib bormoqda va AI modellari qo'shimcha ma'lumotlar bilan o'qitilgan sari aniqlik yanada oshadi."
  },
  {
    question: "O'zbekiston aeroportlarida AI qo'llanilish holati qanday?",
    answer: "O'zbekiston aeroportlarida AI texnologiyalari hali boshlang'ich bosqichda. Toshkent xalqaro aeroporti zamonaviylashtirish jarayonida ba'zi elementlar kiritilmoqda. Ammo to'liq AI integratsiyasi uchun infratuzilma, kadrlar tayyorlash va huquqiy baza yaratish kerak. Ushbu tadqiqot aynan shu yo'nalishda amaliy tavsiyalar berish uchun olib borilmoqda."
  },
  {
    question: 'AI inson xodimlarni almashtiradimi?',
    answer: "Yo'q, AI inson xodimlarni to'liq almashtirmaydi, balki ularning ishini osonlashtiradi va samaradorligini oshiradi. AI takroriy, monoton va katta hajmdagi ma'lumotlarni qayta ishlash vazifalarini oladi. Insonlar esa strategik qarorlar qabul qilish, mijozlar bilan muloqot va noodatiy holatlarni boshqarishga e'tiborini qaratadi. Bu 'human-in-the-loop' yondashuvi deb ataladi."
  },
  {
    question: "AI tizimlarni aeroportga qanday bosqichma-bosqich joriy etish mumkin?",
    answer: "1-bosqich: Mavjud infratuzilmani baholash va AI strategiyasini ishlab chiqish. 2-bosqich: Pilot loyiha sifatida eng zarur sohalarda (masalan, CCTV analitika yoki bagaj tekshiruvi) bitta tizimni joriy etish. 3-bosqich: Natijalarni tahlil qilish va kengaytirish. 4-bosqich: Tizimlarni integratsiya qilish va yagona AI platformasiga o'tish. 5-bosqich: Doimiy monitoring, optimallashtirish va yangi texnologiyalarni joriy etish."
  },
  {
    question: "Bu loyiha diplom ishi sifatida qanday ahamiyatga ega?",
    answer: "Ushbu loyiha zamonaviy aviatsiya va axborot texnologiyalari kesishuvida joylashgan dolzarb mavzuni o'rganadi. U O'zbekiston aeroportlari uchun aniq va amaliy tavsiyalar beradi, xorijiy ilg'or tajribani tadqiq qiladi va mahalliy kontekstda tatbiq etish yo'llarini ko'rsatadi. Loyiha nafaqat nazariy, balki amaliy ahamiyatga ega bo'lib, kelgusida real loyiha sifatida hayotga tatbiq etilishi mumkin."
  }
]

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className="border border-dark-100 dark:border-dark-700 rounded-2xl overflow-hidden hover:border-primary-200 dark:hover:border-primary-500/30 transition-colors duration-300">
      <button
        onClick={onClick}
        className="w-full p-6 flex items-center justify-between text-left bg-white dark:bg-dark-800 hover:bg-dark-50 dark:hover:bg-dark-750 transition-colors duration-200"
      >
        <span className="text-base font-semibold text-dark-800 dark:text-white pr-4">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <HiChevronDown className="w-5 h-5 text-dark-400" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 bg-white dark:bg-dark-800">
              <div className="pt-2 border-t border-dark-100 dark:border-dark-700">
                <p className="mt-4 text-sm text-dark-500 dark:text-dark-400 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <SectionTitle
          badge="❓ Savol-javob"
          title="Ko'p beriladigan savollar"
          subtitle="Aeroportlarda sun'iy intellektdan foydalanish haqida eng ko'p uchraydigan savollar va javoblar"
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <FAQItem
                faq={faq}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
