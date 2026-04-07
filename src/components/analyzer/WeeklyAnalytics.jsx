import { useState } from 'react';
import { HiChartBar, HiTrendingUp, HiExclamation, HiCheckCircle, HiInformationCircle } from 'react-icons/hi';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend, ComposedChart, Line
} from 'recharts';
import InfoModal from '../ui/InfoModal';

const weeklyTrafficData = [
  { name: 'Dush', passengers: 12000, capacity: 15000, delayAvg: 12 },
  { name: 'Sesh', passengers: 11000, capacity: 15000, delayAvg: 10 },
  { name: 'Chor', passengers: 10500, capacity: 15000, delayAvg: 8 },
  { name: 'Pay', passengers: 13500, capacity: 15000, delayAvg: 15 },
  { name: 'Juma', passengers: 18000, capacity: 15000, delayAvg: 25 }, 
  { name: 'Shan', passengers: 19500, capacity: 15000, delayAvg: 30 }, 
  { name: 'Yak', passengers: 15500, capacity: 15000, delayAvg: 18 },
];

const delayData = [
  { time: '00:00-06:00', onTime: 40, delayed: 5 },
  { time: '06:00-12:00', onTime: 85, delayed: 15 },
  { time: '12:00-18:00', onTime: 110, delayed: 35 },
  { time: '18:00-24:00', onTime: 65, delayed: 20 },
];

export default function WeeklyAnalytics() {
  const [activeTab, setActiveTab] = useState('traffic');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div className="flex justify-end mb-2">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-xl shadow-sm hover:shadow-md transition-all text-indigo-600 dark:text-indigo-400 font-semibold text-sm"
        >
          <HiInformationCircle className="text-lg" />
          Modul qanday ishlaydi?
        </button>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Hajm bo'yicha trafik (Haftalik)", value: "100.0K", trend: "+12.5%", isUp: true, color: "text-indigo-500" },
          { title: "Kechikish tendentsiyasi (+)", value: "16.8 daq", trend: "-2.1%", isUp: false, color: "text-amber-500" }, 
          { title: "Tizim yuklanish indeksi", value: "88%", trend: "+5.0%", isUp: true, color: "text-pink-500" },
          { title: "AI Bashorat (Kelasi o'sish)", value: "105.5K", trend: "+5.5%", isUp: true, color: "text-green-500" },
        ].map((kpi, i) => (
          <div key={i} className="bg-white dark:bg-dark-800 p-6 rounded-3xl border border-dark-100 dark:border-dark-700 shadow-xl shadow-dark-200/50 dark:shadow-black/20 flex flex-col justify-center relative overflow-hidden group">
            <div className={`absolute -right-6 -bottom-6 w-24 h-24 ${kpi.color.replace('text-', 'bg-')}/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`} />
            <span className="text-xs font-bold text-dark-500 dark:text-dark-400 mb-3 uppercase tracking-wider">{kpi.title}</span>
            <div className="flex items-end gap-3 relative z-10">
              <span className={`text-4xl font-black ${kpi.color}`}>{kpi.value}</span>
              <span className={`text-sm font-extrabold mb-1 px-2 py-0.5 rounded-md ${kpi.isUp ? 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400' : 'bg-green-50 text-green-600 dark:bg-green-500/10 dark:text-green-400'}`}>
                {kpi.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left side Charts */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white dark:bg-dark-800 p-8 rounded-3xl border border-dark-100 dark:border-dark-700 shadow-xl shadow-dark-200/50 dark:shadow-black/20">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <h3 className="text-xl font-extrabold text-dark-800 dark:text-white flex items-center gap-2">
                <HiChartBar className="text-indigo-500" /> Analitik Ma'lumotlar Datamarti
              </h3>
              <div className="flex gap-2 p-1 bg-dark-50 dark:bg-dark-900 rounded-xl border border-dark-100 dark:border-dark-800">
                <button onClick={() => setActiveTab('traffic')} className={`px-4 py-2 text-sm font-bold rounded-lg transition-colors ${activeTab === 'traffic' ? 'bg-indigo-500 text-white shadow-md' : 'text-dark-500 hover:text-dark-800 dark:hover:text-white'}`}>Trafik Hajmi</button>
                <button onClick={() => setActiveTab('delays')} className={`px-4 py-2 text-sm font-bold rounded-lg transition-colors ${activeTab === 'delays' ? 'bg-indigo-500 text-white shadow-md' : 'text-dark-500 hover:text-dark-800 dark:hover:text-white'}`}>Xromometraj (Vaqt)</button>
              </div>
            </div>

            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                {activeTab === 'traffic' ? (
                  <AreaChart data={weeklyTrafficData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorPassengers" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.6}/>
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 600}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 600}} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                      itemStyle={{ fontWeight: 'bold' }}
                    />
                    <Area type="monotone" dataKey="passengers" name="Yo'lovchilar" stroke="#6366f1" strokeWidth={4} fillOpacity={1} fill="url(#colorPassengers)" />
                    <Line type="stepAfter" dataKey="capacity" name="Tizim Nominal Quvvati" stroke="#f43f5e" strokeWidth={3} strokeDasharray="6 6" dot={false} />
                  </AreaChart>
                ) : (
                  <ComposedChart data={delayData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} />
                    <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 600}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 600}} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                      itemStyle={{ fontWeight: 'bold' }}
                    />
                    <Legend wrapperStyle={{ paddingTop: '20px', fontWeight: 'bold' }} />
                    <Bar dataKey="onTime" name="Jadval bo'yicha parvoz" stackId="a" fill="#10b981" radius={[0, 0, 6, 6]} barSize={40} />
                    <Bar dataKey="delayed" name="Kechikkan (Riskli)" stackId="a" fill="#f59e0b" radius={[6, 6, 0, 0]} barSize={40} />
                  </ComposedChart>
                )}
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Right side AI Insights */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-indigo-900 to-indigo-800 p-8 rounded-3xl shadow-2xl border border-indigo-700 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-40 h-40 rounded-full bg-white/10 blur-3xl"></div>
            
            <h3 className="text-xl font-extrabold mb-6 flex items-center gap-2">
              <HiTrendingUp className="text-accent-400 text-2xl" /> Neural AI Xulosalari
            </h3>
            
            <div className="space-y-4">
               <div className="bg-dark-950/20 p-5 rounded-2xl backdrop-blur-md border border-white/10 hover:border-white/20 transition-colors">
                <p className="text-sm text-white/90 leading-relaxed font-bold">
                  Bashorat (Prediction): Yakshanba kuni soat 14:00 da "Haj" davri tufayli yo'lovchilar oqimi kutilganidan 15% ko'p bo'lishi ehtimoli 85% ni tashkil qiladi.
                </p>
                <div className="mt-4 flex items-center justify-between text-xs font-semibold">
                  <span className="text-white/40">Manba: Tarixiy Data (TS)</span>
                  <span className="bg-green-500/20 text-green-300 border border-green-500/30 px-3 py-1 rounded-lg">Accuracy: 92%</span>
                </div>
               </div>

               <div className="bg-dark-950/20 p-5 rounded-2xl backdrop-blur-md border border-amber-500/30 shadow-[inset_0_0_20px_rgba(245,158,11,0.05)]">
                <div className="flex items-start gap-3">
                  <HiExclamation className="text-amber-400 shrink-0 mt-0.5 text-xl" />
                  <p className="text-sm text-amber-50 leading-relaxed font-bold">
                    Risk Assessment: Juma oqshomidagi yomg'irli siklon mahalliy reyslarda 20 daqiqalik massiv kechikish generatsiya qilishi mumkin.
                  </p>
                </div>
               </div>
            </div>
          </div>

          <div className="bg-white dark:bg-dark-800 p-8 rounded-3xl border border-dark-100 dark:border-dark-700 shadow-xl shadow-dark-200/50 dark:shadow-black/20">
            <h3 className="text-lg font-extrabold text-dark-800 dark:text-white mb-6">Rejalashtirilgan intervensiyalar (AI Ops)</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 p-3 rounded-xl hover:bg-dark-50 dark:hover:bg-dark-900 transition-colors border border-transparent hover:border-dark-100 dark:hover:border-dark-800">
                <HiCheckCircle className="text-green-500 text-2xl shrink-0 mt-0.5" />
                <span className="text-dark-600 dark:text-dark-300 text-sm font-semibold">Dam olish kunlari uchun zaxira postlar grafigiga 3 ta qo'shimcha birlik avtomatik kiritildi.</span>
              </li>
              <li className="flex items-start gap-4 p-3 rounded-xl hover:bg-dark-50 dark:hover:bg-dark-900 transition-colors border border-transparent hover:border-dark-100 dark:hover:border-dark-800">
                <HiCheckCircle className="text-green-500 text-2xl shrink-0 mt-0.5" />
                <span className="text-dark-600 dark:text-dark-300 text-sm font-semibold">Konditsionerlar HVAC tizimi payshanba pik uchun +20% quvvat rejimiga moslandi.</span>
              </li>
              <li className="flex items-start gap-4 p-3 rounded-xl hover:bg-amber-50 dark:hover:bg-amber-500/5 transition-colors border border-transparent hover:border-amber-200 dark:hover:border-amber-500/20">
                <HiExclamation className="text-amber-500 text-2xl shrink-0 mt-0.5" />
                <span className="text-amber-700 dark:text-amber-500 text-sm font-bold">Siklon tahdidi tufayli VIP zalda logistika menejerlariga ogohlantirish xabar qilingan.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <InfoModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Weekly Analytics (AI Backend logikasi)"
        content={
          <div className="space-y-4">
            <p><strong>Maqsad:</strong> BI (Business Intelligence) orqali yig'ilgan kunlik ma'lumotlarni tahlil qilish va Time-Series modifikatsiyasi orqali keyingi "Pik" davrlarni aniqlash.</p>
            <p><strong>Bashoratlash logikasi (Tafsilotlar):</strong></p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Time-Series Forecasting (ARIMA / LSTM model konsepti):</strong> AI tizim oldingi haftalar tarixidan o'xshash kunlarni, mavsumiylik va ob-havoni o'rganadi yakshanbaga prognoz tuzadi.</li>
              <li><strong>Kechikish tahlili (Delay Patterns):</strong> ComposedChart grafikasida bar orqali vaqtida uchgan reyslar va kechikkan reyslar korrelyatsiyasi (masalan kechga tomon kechikish ko'payadi). AI buni ob-havo fronti yoki "turnaround time" ning cho'zilishi deb o'qib, boshqaruvchiga sabab ko'rsatadi.</li>
              <li><strong>Intervensiya (Autoremediation):</strong> Faqat bashorat qilib qolmasdan AI tizim aeroportdagi boshqa IoT (Internet of things) zveno tizimlariga (HVAC isitish/sovutish, ishchi xodimlar grafigi) elektron ko'rsatma yuborish (avtomatizatsiya) takliflarini ekranga chiqarmoqda.</li>
            </ul>
            <p>Ushbu vizualizatsiya aeroport "Crisis Management" menejerining ertalabki asosiy qutqaruvchi oynasi sifatida gavdalantirilgan.</p>
          </div>
        }
      />
    </div>
  );
}
