import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import { HiX, HiArrowRight } from 'react-icons/hi'

const aiFeatures = [
  {
    id: 1,
    icon: '👤',
    title: 'Yuzni aniqlash va identifikatsiya',
    shortDesc: "Biometrik tekshiruv orqali yo'lovchilarni tez va xavfsiz identifikatsiya qilish.",
    howItWorks: "Yuzni aniqlash tizimlari chuqur o'rganish (deep learning) algoritmlaridan foydalanib, har bir yo'lovchining yuz tuzilishini 3D modellashtiradi. Tizim pasport suratini real vaqtdagi yuz tasviri bilan solishtiradi va 99.7% aniqlikda identifikatsiya qiladi. Jarayon 2-3 soniyada amalga oshadi.",
    benefit: "Check-in, boarding va passport nazoratida navbatlarni 70% gacha qisqartiradi. Soxta hujjatlardan foydalanish holatlarini deyarli to'liq bartaraf etadi.",
    realCase: "Dubai xalqaro aeroporti (DXB) — Smart Gates tizimi orqali kuniga 30,000 dan ortiq yo'lovchi biometrik tarzda tekshiriladi. Singapur Changi aeroportida esa to'liq avtomatlashtirilgan biometrik yo'lak mavjud.",
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    icon: '🛡️',
    title: 'Xavfsizlik nazorati',
    shortDesc: "Shubhali harakatlar va holatlarni AI yordamida real vaqtda aniqlash.",
    howItWorks: "Computer Vision va anomaliya aniqlash algoritmlari CCTV kameralar orqali olingan tasvirlarni doimiy tahlil qiladi. Tizim oddiy yo'lovchi harakatlarini o'rganadi va normadan chetga chiqish holatlarini (shubhali xatti-harakat, tashlab ketilgan buyumlar, ruxsatsiz hududlarga kirish) avtomatik ravishda aniqlaydi.",
    benefit: "Xavfsizlik xodimlarining samaradorligini 3-4 baravar oshiradi. Real vaqtda ogohlantirish tizimi potensial tahdidlarni darhol aniqlaydi va tegishli xodimlarga xabar beradi.",
    realCase: "London Hitrou aeroporti — AI asosidagi xavfsizlik tizimi yiliga 80 milliondan ortiq yo'lovchi oqimini nazorat qiladi. Tel-Aviv Ben Gurion aeroporti dunyodagi eng xavfsiz aeroport sifatida AI monitoringdan keng foydalanadi.",
    color: 'from-red-500 to-orange-500'
  },
  {
    id: 3,
    icon: '🧳',
    title: 'Bagaj tekshiruvida AI',
    shortDesc: "X-ray tasvirlarini avtomatik tahlil qilish va taqiqlangan buyumlarni aniqlash.",
    howItWorks: "Chuqur neyron tarmoqlar (CNN — Convolutional Neural Networks) X-ray skaner tasvirlarini real vaqtda qayta ishlaydi. Tizim millionlab ma'lum buyumlar bazasi asosida o'qitilgan bo'lib, taqiqlangan narsalar (o'tkir buyumlar, portlovchi moddalar, narkotiklar) ni yuqori aniqlikda aniqlaydi.",
    benefit: "Tekshiruv tezligini 40% oshiradi. Inson ko'zi bilan aniqlab bo'lmaydigan yashirin buyumlarni ham topadi. Xavfsizlik xodimlarining ishchi yukini kamaytiradi.",
    realCase: "Amsterdam Schiphol aeroporti — Smiths Detection kompaniyasining AI-powered HI-SCAN skaner tizimi har bir bagajni 5 soniyadan kam vaqtda tekshiradi.",
    color: 'from-amber-500 to-yellow-500'
  },
  {
    id: 4,
    icon: '👥',
    title: 'Navbatlarni boshqarish',
    shortDesc: "Yo'lovchi oqimini real vaqtda tahlil qilish va navbatlarni optimallashtirish.",
    howItWorks: "Computer Vision va IoT sensorlari yordamida barcha check-in, xavfsizlik tekshiruvi va boarding zonalaridagi odamlar soni va harakati real vaqtda kuzatiladi. AI algoritmlar navbat uzunligini bashorat qiladi va resurslarni (ekstra counter ochish, xodimlar yo'naltirish) avtomatik taqsimlaydi.",
    benefit: "O'rtacha kutish vaqtini 50% gacha qisqartiradi. Yo'lovchi tajribasini sezilarli yaxshilaydi. Pikdagi yuklamani bir tekis taqsimlaydi.",
    realCase: "JFK xalqaro aeroporti (Nyu-York) — Xoban Technologies kompaniyasining Smart Queue tizimi yordamida navbatlarni boshqarish amalga oshiriladi.",
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 5,
    icon: '📊',
    title: 'Smart Passenger Flow Analytics',
    shortDesc: "Yo'lovchi harakatlarini chuqur tahlil qilish va terminal samaradorligini oshirish.",
    howItWorks: "Kameralar, Wi-Fi sensorlari va mobil qurilma signallari orqali yo'lovchilarning terminal ichidagi harakatlari kuzatiladi. AI bu ma'lumotlarni yig'ib, 'issiq zonalar' (ko'p odam to'planadigan hududlar) xaritasini tuzadi, harakat yo'nalishlarini tahlil qiladi va terminal resurslarini optimallashtiradi.",
    benefit: "Terminal maydonidan samarali foydalanishni 30% oshiradi. Duty-free do'konlar va restoranlarga yo'lovchi oqimini yo'naltirish orqali qo'shimcha daromad olishga imkon beradi.",
    realCase: "Helsinki-Vantaa aeroporti — Finavia kompaniyasi yo'lovchi oqimi tahlili tizimini joriy etib, terminal B ni qayta loyihalashtirishda AI tavsiyalaridan foydalangan.",
    color: 'from-violet-500 to-purple-500'
  },
  {
    id: 6,
    icon: '🤖',
    title: 'Chatbot va virtual yordamchi',
    shortDesc: "24/7 avtomatlashtirilgan yo'lovchi qo'llab-quvvatlash xizmati.",
    howItWorks: "Natural Language Processing (NLP) va Large Language Model (LLM) texnologiyalari asosida ishlaydigan chatbotlar yo'lovchilarning savollariga tabiiy tilda javob beradi. Tizim parvoz ma'lumotlari, gate o'zgarishlari, aeroport xizmatlari, transport aloqalari haqida real vaqtda ma'lumot beradi.",
    benefit: "Ma'lumot xizmatidagi inson ishchi kuchini 60% gacha kamaytiradi. Bir vaqtda minglab yo'lovchilarga xizmat ko'rsata oladi. Ko'p tilli qo'llab-quvvatlash imkoniyati.",
    realCase: "Incheon xalqaro aeroporti (Janubiy Koreya) — 'Airstar' roboti va chatbot tizimi yo'lovchilarga 4 tilda (koreys, ingliz, xitoy, yapon) 24/7 yordam beradi.",
    color: 'from-cyan-500 to-blue-500'
  },
  {
    id: 7,
    icon: '🔧',
    title: 'Predictive Maintenance',
    shortDesc: "Uskunalar nosozligini oldindan bashorat qilish va profilaktik ta'mirlash.",
    howItWorks: "IoT sensorlar aeroport uskunalari (eskalatorlar, elevator, bagaj konveyerlari, HVAC tizimlari) holati haqida doimiy ma'lumot yig'adi. Machine Learning algoritmlari bu ma'lumotlarni tahlil qilib, nosozlik ehtimolini oldindan bashorat qiladi va texnik xizmat jadvalini optimallashtiradi.",
    benefit: "Kutilmagan nosozliklar sonini 75% gacha kamaytiradi. Ta'mirlash xarajatlarini 30% gacha tejaydi. Uskunalar ishlash muddatini uzaytiradi.",
    realCase: "Frankfurt aeroporti (Fraport AG) — Siemens MindSphere platformasi yordamida barcha muhim uskunalar real vaqtda monitoring qilinadi va profilaktik ta'mirlanadi.",
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 8,
    icon: '✈️',
    title: 'Parvoz kechikishlarini tahlil',
    shortDesc: "AI yordamida parvoz kechikishlarini oldindan bashorat qilish va boshqarish.",
    howItWorks: "Machine Learning algoritmlari ob-havo ma'lumotlari, aeroport band holati, tarixiy parvoz statistikasi, texnik holatlar va boshqa ko'plab omillarni tahlil qiladi. Tizim 4-6 soat oldin kechikish ehtimolini bashorat qiladi va muqobil jadval taklif qiladi.",
    benefit: "Kechikishlarni 20-30% gacha kamaytiradi. Yo'lovchilarni oldindan ogohlantirish imkonini beradi. Aviakompaniyalar va aeroportlar uchun optimal jadval tuzishda yordam beradi.",
    realCase: "Pekin Daxing aeroporti — Huawei AI platformasi yordamida parvoz kechikishlarini 85% aniqlikda bashorat qiladi va real vaqtda jadval optimizatsiyasini amalga oshiradi.",
    color: 'from-sky-500 to-indigo-500'
  },
  {
    id: 9,
    icon: '📹',
    title: 'CCTV analitika',
    shortDesc: "Video kuzatuv tizimlarida sun'iy intellekt asosida chuqur tahlil.",
    howItWorks: "Object Detection va Tracking algoritmlari minglab kameralar tasvirini parallel ravishda qayta ishlaydi. Tizim odamlarni, transport vositalarini, buyumlarni taniydi va kuzatib boradi. Anomaliya aniqlash moduli g'ayrioddiy holatlarni (kutilmagan harakatlar, tashlandiq narsalar, ruxsatsiz kirish) darhol aniqlaydi.",
    benefit: "Xavfsizlik xodimlarining samaradorligini 5-6 baravar oshiradi. 24/7 tinmay ishlaydi. Insondan farqli ravishda charchamaydi va diqqat bilan kuzatishni to'xtatmaydi.",
    realCase: "Singapur Changi aeroporti — 10,000 dan ortiq kamera AI analitika bilan jihozlangan. Tizim kuniga 65 milliondan ortiq video kadrni tahlil qiladi.",
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 10,
    icon: '🧠',
    title: 'Avtomatlashtirilgan qaror qabul qilish',
    shortDesc: "Murakkab operatsion qarorlarni AI yordamida tezkor va aniq qabul qilish.",
    howItWorks: "Decision Support System (DSS) aeroportning barcha tizimlaridan ma'lumot yig'adi — parvoz jadvallari, yo'lovchi soni, ob-havo, gate band holati, xavfsizlik holati va boshqalar. AI bu ma'lumotlarni yagona platformada birlashtiradi va real vaqtda optimal qarorlar taklif qiladi.",
    benefit: "Qaror qabul qilish tezligini 10 baravar oshiradi. Gate taqsimlash, resurs rejalashtirish va favqulodda holatlar boshqaruvini avtomatlashtiradi.",
    realCase: "Doha Hamad aeroporti — SITA Airport Management tizimi AI asosida gate, runway va terminal resurslarini optimal taqsimlaydi va kuniga 1,200 dan ortiq reys operatsiyasini boshqaradi.",
    color: 'from-indigo-500 to-violet-500'
  }
]

function FeatureModal({ feature, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: 'spring', damping: 25 }}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white dark:bg-dark-800 rounded-3xl shadow-2xl border border-dark-100 dark:border-dark-700"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`relative p-8 bg-gradient-to-r ${feature.color} rounded-t-3xl`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
          >
            <HiX size={18} />
          </button>
          <span className="text-5xl mb-4 block">{feature.icon}</span>
          <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          <div>
            <h4 className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-2">Qanday ishlaydi</h4>
            <p className="text-dark-600 dark:text-dark-300 leading-relaxed">{feature.howItWorks}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider mb-2">Aeroport uchun foydasi</h4>
            <p className="text-dark-600 dark:text-dark-300 leading-relaxed">{feature.benefit}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2">Real hayotdagi qo'llanilishi</h4>
            <p className="text-dark-600 dark:text-dark-300 leading-relaxed">{feature.realCase}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function AIFeatures() {
  const [selectedFeature, setSelectedFeature] = useState(null)

  return (
    <section id="ai-yonalishlar" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <SectionTitle
          badge="🤖 AI yo'nalishlari"
          title="Aeroportlarda AI qo'llanilish yo'nalishlari"
          subtitle="Sun'iy intellekt texnologiyalari aeroportlarning har bir sohasi uchun innovatsion yechimlar taklif etadi. Quyidagi 10 ta asosiy yo'nalishni batafsil ko'rib chiqing."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiFeatures.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setSelectedFeature(feature)}
              className="group relative cursor-pointer p-6 rounded-2xl bg-gradient-to-br from-dark-50 to-white dark:from-dark-800 dark:to-dark-800/50 border border-dark-100 dark:border-dark-700 hover:border-primary-200 dark:hover:border-primary-500/30 transition-all duration-300 card-hover"
            >
              {/* Gradient accent on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              {/* Number badge */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-dark-100 dark:bg-dark-700 flex items-center justify-center">
                <span className="text-xs font-bold text-dark-400 dark:text-dark-500">{String(feature.id).padStart(2, '0')}</span>
              </div>

              <span className="text-4xl mb-4 block">{feature.icon}</span>
              <h3 className="text-lg font-bold text-dark-800 dark:text-white mb-2 pr-8">{feature.title}</h3>
              <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed mb-4">{feature.shortDesc}</p>

              <div className="flex items-center gap-1 text-primary-600 dark:text-primary-400 text-sm font-medium group-hover:gap-2 transition-all duration-200">
                <span>Batafsil</span>
                <HiArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedFeature && (
            <FeatureModal
              feature={selectedFeature}
              onClose={() => setSelectedFeature(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
