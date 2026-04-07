import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'

const steps = [
  {
    step: '01',
    title: "Ma'lumotlarni yig'ish",
    desc: "Kameralar, sensorlar, IoT qurilmalar va tizimlardan real vaqtda ma'lumotlar oqimi yig'iladi.",
    icon: '📡',
    details: 'CCTV, Wi-Fi, Bluetooth, boarding tizim, meteorologik stansiya'
  },
  {
    step: '02',
    title: "Ma'lumotlarni qayta ishlash",
    desc: "Yig'ilgan xom ma'lumotlar tozalanadi, strukturalanadi va tahlilga tayyorlanadi.",
    icon: '⚙️',
    details: 'Data pipeline, ETL jarayoni, real-time stream processing'
  },
  {
    step: '03',
    title: 'AI tahlili',
    desc: "Machine Learning va Deep Learning algoritmlari ma'lumotlarni chuqur tahlil qiladi.",
    icon: '🧠',
    details: 'CNN, RNN, NLP, anomaly detection, pattern recognition'
  },
  {
    step: '04',
    title: 'Natijalar va bashorat',
    desc: "AI modellari tahlil natijalarini chiqaradi, bashoratlar va tavsiyalar beradi.",
    icon: '📊',
    details: "Xavf darajasi, navbat bashorati, uskunalar holati, kechikish ehtimoli"
  },
  {
    step: '05',
    title: 'Qaror qabul qilish',
    desc: "Avtomatlashtirilgan yoki yarim avtomatik qarorlar qabul qilinadi va harakatga o'tiladi.",
    icon: '✅',
    details: "Ogohlantirish, resurs taqsimlash, jadval o'zgartirish, xodimlarni yo'naltirish"
  },
  {
    step: '06',
    title: "Monitoring va takomillashtirish",
    desc: "Natijalar doimiy monitoring qilinadi, AI modellari qayta o'rgatiladi va optimallashtiriladi.",
    icon: '🔄',
    details: "Feedback loop, model retraining, performance metrics, KPI tracking"
  }
]

export default function ProcessFlow() {
  return (
    <section className="section-padding bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary-500/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent-500/10 blur-[100px]" />

      <div className="container-custom relative">
        <SectionTitle
          badge="🔄 Ishlash jarayoni"
          title="Aeroportda AI qanday ishlaydi?"
          subtitle="Sun'iy intellekt tizimining aeroportdagi to'liq ishlash jarayoni — ma'lumot yig'ishdan qaror qabul qilishgacha"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full">
                {/* Step number */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-xs font-bold text-primary-400 bg-primary-400/10 px-2.5 py-1 rounded-full">
                    QADAM {item.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">{item.desc}</p>

                {/* Tech details */}
                <div className="px-3 py-2 rounded-lg bg-white/5 border border-white/5">
                  <p className="text-xs text-white/40">
                    <span className="text-primary-400 font-medium">Texnologiyalar: </span>
                    {item.details}
                  </p>
                </div>
              </div>

              {/* Connector line (hidden on last in row) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-primary-500/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
