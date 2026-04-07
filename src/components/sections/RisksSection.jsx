import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'

const risks = [
  {
    icon: '🔒',
    title: 'Maxfiylik muammolari',
    desc: "Yuzni aniqlash va kuzatuv tizimlari shaxsiy hayot daxlsizligi huquqiga to'g'ridan-to'g'ri ta'sir qiladi. Yo'lovchilarning biometrik ma'lumotlarini yig'ish, saqlash va qayta ishlash jarayonida maxfiylik qoidalariga qat'iy rioya qilish zarur. GDPR va boshqa xalqaro ma'lumotlar himoyasi standartlariga muvofiqlik ta'minlanishi kerak.",
    severity: 'Yuqori',
    severityColor: 'text-red-500 bg-red-50 dark:bg-red-500/10'
  },
  {
    icon: '🛡️',
    title: "Ma'lumotlar xavfsizligi",
    desc: "AI tizimlari juda katta hajmdagi shaxsiy va operatsion ma'lumotlarni qayta ishlaydi. Bu ma'lumotlarning kiberhujumlardan himoyalanishi, shifrlash va xavfsiz saqlash masalalari muhim ahamiyatga ega. Ma'lumotlar bazasiga ruxsatsiz kirish butun aeroport tizimini xavf ostiga qo'yishi mumkin.",
    severity: 'Yuqori',
    severityColor: 'text-red-500 bg-red-50 dark:bg-red-500/10'
  },
  {
    icon: '⚠️',
    title: "Noto'g'ri aniqlash xavfi",
    desc: "AI tizimlari 100% aniqlikka erisha olmaydi. False positive (xato alarm) va false negative (xavfni o'tkazib yuborish) holatlari yuzaga kelishi mumkin. Ayniqsa, yuzni aniqlash tizimlarida irqiy va etnik noaniqliklar muammosi hali to'liq hal qilinmagan.",
    severity: "O'rtacha",
    severityColor: 'text-amber-500 bg-amber-50 dark:bg-amber-500/10'
  },
  {
    icon: '💸',
    title: "Yuqori boshlang'ich xarajatlar",
    desc: "AI infratuzilmasini joriy etish juda katta moliyaviy investitsiya talab qiladi. Server, GPU, kamera, sensor va boshqa uskunalar, dasturiy ta'minot litsenziyalari, mutaxassis kadrlar tayyorlash va tizim integratsiyasi — bularning barchasi yirik xarajatlar qatoriga kiradi.",
    severity: "O'rtacha",
    severityColor: 'text-amber-500 bg-amber-50 dark:bg-amber-500/10'
  },
  {
    icon: '🔧',
    title: 'Texnik nosozliklar',
    desc: "AI tizimlari murakkab dasturiy va apparat ta'minotga asoslanadi. Tizim ishdan chiqishi yoki noto'g'ri ishlashi butun aeroport operatsiyasini to'xtatib qo'yishi mumkin. Zaxira tizimlar va muqobil rejalar mavjud bo'lishi shart.",
    severity: "O'rtacha",
    severityColor: 'text-amber-500 bg-amber-50 dark:bg-amber-500/10'
  },
  {
    icon: '⚖️',
    title: 'Etik masalalar',
    desc: "AI algoritmlar qanday qaror qabul qilayotgani ko'pincha 'qora quti' (black box) bo'lib qoladi. Algoritmlarning shaffof va adolatli ishlashi, algoritmik bias (tarafkashlik) muammosi va AI qarorlariga kim javobgar ekanligi masalasi hali hal qilinmagan.",
    severity: 'Muhim',
    severityColor: 'text-orange-500 bg-orange-50 dark:bg-orange-500/10'
  },
  {
    icon: '👤',
    title: "Inson omili bilan bog'liq qarshiliklar",
    desc: "Xodimlar AI ning o'z ish o'rinlarini egallashidan xavotirlanishi mumkin. Shuningdek, ba'zi yo'lovchilar biometrik tekshiruvlardan voz kechishlari yoki AI tizimlariga ishonchsizlik bildirishi mumkin. Inson omilini e'tiborga olgan holda bosqichma-bosqich joriy etish strategiyasi zarur.",
    severity: "O'rtacha",
    severityColor: 'text-amber-500 bg-amber-50 dark:bg-amber-500/10'
  }
]

export default function RisksSection() {
  return (
    <section id="muammolar" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <SectionTitle
          badge="⚠️ Muammolar va xavflar"
          title="AI joriy etishdagi qiyinchiliklar"
          subtitle="Sun'iy intellekt texnologiyalarini aeroportlarda qo'llashda e'tiborga olinishi zarur bo'lgan muammolar va xavflar"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {risks.map((risk, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-6 rounded-2xl bg-gradient-to-br from-dark-50 to-white dark:from-dark-800 dark:to-dark-800/50 border border-dark-100 dark:border-dark-700 hover:border-red-200 dark:hover:border-red-500/20 transition-all duration-300 card-hover"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl shrink-0">{risk.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-lg font-bold text-dark-800 dark:text-white">{risk.title}</h3>
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${risk.severityColor}`}>
                      {risk.severity}
                    </span>
                  </div>
                  <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed">{risk.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
