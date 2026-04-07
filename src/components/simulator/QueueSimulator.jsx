import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { HiCog, HiCheckCircle, HiExclamation, HiShieldExclamation, HiInformationCircle } from 'react-icons/hi';
import InfoModal from '../ui/InfoModal';

export default function QueueSimulator() {
  const [passengers, setPassengers] = useState(500);
  const [checkpoints, setCheckpoints] = useState(5);
  const [processTime, setProcessTime] = useState(45); 
  const [timeRange, setTimeRange] = useState(60); 
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = useMemo(() => {
    const capacityPerCheckpoint = (timeRange * 60) / processTime;
    const totalCapacity = Math.floor(capacityPerCheckpoint * checkpoints);
    
    const queueLength = Math.max(0, passengers - totalCapacity);
    const utilization = Math.min(100, (passengers / totalCapacity) * 100);
    
    let waitTime = 0;
    if (queueLength > 0) {
      waitTime = (queueLength * processTime) / (60 * checkpoints);
    }

    return {
      totalCapacity,
      queueLength,
      waitTime: waitTime.toFixed(1),
      utilization: utilization.toFixed(1)
    };
  }, [passengers, checkpoints, processTime, timeRange]);

  const chartData = useMemo(() => {
    const data = [];
    for (let c = 1; c <= 15; c++) {
      const cap = Math.floor(((timeRange * 60) / processTime) * c);
      const qLen = Math.max(0, passengers - cap);
      const wt = qLen > 0 ? (qLen * processTime) / (60 * c) : 0;
      data.push({
        checkpoints: c,
        waitTime: parseFloat(wt.toFixed(1))
      });
    }
    return data;
  }, [passengers, processTime, timeRange]);

  const severity = stats.waitTime > 30 ? 'red' : stats.waitTime > 10 ? 'amber' : 'green';
  const recommendation = stats.waitTime > 30 
    ? "Kritik holat! O'rtacha kutish vaqti juda yuqori. Zudlik bilan qo'shimcha " + Math.ceil(chartData.find(d => d.waitTime <= 15)?.checkpoints - checkpoints + 1 || 5) + " ta nazorat punkti (checkpoint) ochish kerak."
    : stats.waitTime > 10
    ? "O'rtacha holat. Navbatlar yig'ila boshlagan, " + (Math.ceil(chartData.find(d => d.waitTime <= 5)?.checkpoints - checkpoints) > 0 ? Math.ceil(chartData.find(d => d.waitTime <= 5)?.checkpoints - checkpoints) + " ta qo'shimcha punkt " : "biroz ko'proq resurslar ") + "vaziyatni yaxshilaydi."
    : stats.utilization < 40 
    ? "Diqqat: Resurslar haddan tashqari ko'p sarflanmoqda (utilizatsiya " + stats.utilization + "%). Xarajatlarni kamaytirish uchun " + Math.max(1, checkpoints - Math.floor(chartData.find(d => d.waitTime <= 5)?.checkpoints || 0)) + " ta punkti yopish mumkin."
    : "Optimal holat. Yo'lovchilar oqimi va xizmat ko'rsatish tezligi mukammal muvozanatda.";

  return (
    <div className="space-y-6">
      <div className="flex justify-end mb-4">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-xl shadow-sm hover:shadow-md transition-all text-primary-600 dark:text-primary-400 font-semibold text-sm"
        >
          <HiInformationCircle className="text-lg" />
          Modul qanday ishlaydi?
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Controls */}
        <div className="w-full md:w-1/3 bg-white dark:bg-dark-800 rounded-3xl p-6 border border-dark-100 dark:border-dark-700 shadow-xl shadow-dark-200/50 dark:shadow-black/20">
          <h3 className="text-xl font-extrabold mb-8 text-dark-800 dark:text-white flex items-center gap-2">
            <HiCog className="text-primary-500 animate-spin-slow" /> Simulyatsiya Parametrlari
          </h3>
          
          <div className="space-y-8">
            <div className="group">
              <div className="flex justify-between mb-3">
                <label className="text-sm font-bold text-dark-700 dark:text-dark-300">Yo'lovchilar oqimi</label>
                <span className="text-sm font-black text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-500/10 px-2 py-0.5 rounded-md">{passengers} kishi</span>
              </div>
              <input type="range" min="50" max="2000" step="10" value={passengers} onChange={(e) => setPassengers(Number(e.target.value))} className="w-full h-2 bg-dark-100 dark:bg-dark-700 rounded-lg appearance-none cursor-pointer accent-primary-500" />
            </div>

            <div className="group">
              <div className="flex justify-between mb-3">
                <label className="text-sm font-bold text-dark-700 dark:text-dark-300">Faol Postlar (Kassalar)</label>
                <span className="text-sm font-black text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-500/10 px-2 py-0.5 rounded-md">{checkpoints} ta</span>
              </div>
              <input type="range" min="1" max="15" step="1" value={checkpoints} onChange={(e) => setCheckpoints(Number(e.target.value))} className="w-full h-2 bg-dark-100 dark:bg-dark-700 rounded-lg appearance-none cursor-pointer accent-primary-500" />
            </div>

            <div className="group">
              <div className="flex justify-between mb-3">
                <label className="text-sm font-bold text-dark-700 dark:text-dark-300">Bitta mijoz uchun sarf (sek)</label>
                <span className="text-sm font-black text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-500/10 px-2 py-0.5 rounded-md">{processTime} sek</span>
              </div>
              <input type="range" min="10" max="120" step="5" value={processTime} onChange={(e) => setProcessTime(Number(e.target.value))} className="w-full h-2 bg-dark-100 dark:bg-dark-700 rounded-lg appearance-none cursor-pointer accent-primary-500" />
            </div>

            <div className="group">
              <div className="flex justify-between mb-3">
                <label className="text-sm font-bold text-dark-700 dark:text-dark-300">Vaqt oynasi (Simulyatsiya)</label>
                <span className="text-sm font-black text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-500/10 px-2 py-0.5 rounded-md">{timeRange} daq</span>
              </div>
              <input type="range" min="15" max="180" step="15" value={timeRange} onChange={(e) => setTimeRange(Number(e.target.value))} className="w-full h-2 bg-dark-100 dark:bg-dark-700 rounded-lg appearance-none cursor-pointer accent-primary-500" />
            </div>
          </div>
        </div>

        {/* Dashboard / KPIs */}
        <div className="w-full md:w-2/3 space-y-6">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-dark-800 p-6 rounded-3xl border border-dark-100 dark:border-dark-700 shadow-xl shadow-dark-200/50 dark:shadow-black/20 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl" />
              <span className="text-sm font-semibold text-dark-500 dark:text-dark-400 mb-2">Tizim Quvvati</span>
              <span className="text-4xl font-black text-blue-600 dark:text-blue-500">{stats.totalCapacity}</span>
              <span className="text-xs font-medium text-dark-400 mt-2">yo'lovchi qabul qila oladi</span>
            </div>
            
            <div className="bg-white dark:bg-dark-800 p-6 rounded-3xl border border-dark-100 dark:border-dark-700 shadow-xl shadow-dark-200/50 dark:shadow-black/20 flex flex-col justify-center relative overflow-hidden">
              <div className={`absolute -right-4 -top-4 w-16 h-16 rounded-full blur-xl ${stats.queueLength > 0 ? 'bg-amber-500/10' : 'bg-green-500/10'}`} />
              <span className="text-sm font-semibold text-dark-500 dark:text-dark-400 mb-2">Qolgan navbat uzunligi</span>
              <span className={`text-4xl font-black ${stats.queueLength > 0 ? 'text-amber-500' : 'text-green-500'}`}>{stats.queueLength}</span>
              <span className="text-xs font-medium text-dark-400 mt-2">kutayotgan odamlar ko'rsatkichi</span>
            </div>

            <div className={`p-6 rounded-3xl border shadow-xl flex flex-col justify-center relative overflow-hidden transition-colors duration-300 ${severity === 'red' ? 'bg-red-50 dark:bg-red-500/5 border-red-200 dark:border-red-500/20 shadow-red-500/10' : severity === 'amber' ? 'bg-amber-50 dark:bg-amber-500/5 border-amber-200 dark:border-amber-500/20 shadow-amber-500/10' : 'bg-green-50 dark:bg-green-500/5 border-green-200 dark:border-green-500/20 shadow-green-500/10'}`}>
               <div className={`absolute -right-4 -top-4 w-16 h-16 rounded-full blur-xl ${severity === 'red' ? 'bg-red-500/20' : severity === 'amber' ? 'bg-amber-500/20' : 'bg-green-500/20'}`} />
              <span className="text-sm font-semibold text-dark-600 dark:text-dark-300 mb-2">O'rtacha kutish vaqti</span>
              <span className={`text-4xl font-black ${severity === 'red' ? 'text-red-600 dark:text-red-500' : severity === 'amber' ? 'text-amber-600 dark:text-amber-500' : 'text-green-600 dark:text-green-500'}`}>{stats.waitTime} <span className="text-lg font-bold">daq</span></span>
              <span className="text-xs font-medium mt-2 opacity-70">har bir yo'lovchi uchun</span>
            </div>
          </div>

          <div className={`p-6 rounded-3xl border shadow-lg flex items-start gap-4 transition-colors duration-300 ${severity === 'red' ? 'bg-gradient-to-r from-red-50 to-white dark:from-red-500/10 dark:to-dark-800 border-red-200 dark:border-red-500/20 text-red-700 dark:text-red-400 shadow-red-500/5' : severity === 'amber' ? 'bg-gradient-to-r from-amber-50 to-white dark:from-amber-500/10 dark:to-dark-800 border-amber-200 dark:border-amber-500/20 text-amber-700 dark:text-amber-400 shadow-amber-500/5' : 'bg-gradient-to-r from-green-50 to-white dark:from-green-500/10 dark:to-dark-800 border-green-200 dark:border-green-500/20 text-green-700 dark:text-green-400 shadow-green-500/5'}`}>
            <span className="text-3xl mt-1">{severity === 'red' ? <HiShieldExclamation /> : severity === 'amber' ? <HiExclamation /> : <HiCheckCircle />}</span>
            <div>
              <h4 className="font-extrabold mb-2 text-lg">Harakat Boyicha AI Tavsiyasi (Resurslarni optimallashtirish)</h4>
              <p className="text-base font-medium opacity-90 leading-relaxed">{recommendation}</p>
            </div>
          </div>

          <div className="bg-white dark:bg-dark-800 p-8 rounded-3xl border border-dark-100 dark:border-dark-700 shadow-xl shadow-dark-200/50 dark:shadow-black/20">
            <h4 className="font-extrabold mb-6 text-dark-800 dark:text-white">Trend Analitikasi: Parametrik bog'liqlik grafiki</h4>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.1} vertical={false} />
                  <XAxis dataKey="checkpoints" tick={{fontSize: 12}} axisLine={false} tickLine={false} />
                  <YAxis tick={{fontSize: 12}} axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
                    itemStyle={{ fontWeight: 'bold' }}
                  />
                  <Line 
                    type="natural" 
                    dataKey="waitTime" 
                    name="Kutish vaqti (daq)"
                    stroke="#3b82f6" 
                    strokeWidth={4} 
                    dot={{r: 5, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff'}} 
                    activeDot={{r: 8, strokeWidth: 0, shadow: '0 0 10px rgba(59,130,246,0.5)'}} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      <InfoModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Q-Simulator (Navbat boshqaruvi)"
        content={
          <div className="space-y-4">
            <p><strong>Maqsad:</strong> Tizim aeroportda xavfsizlik, bilet yoki bojxona nazorat punktlarida yo'lovchilar oqimi qanday boshqarilishini oldindan modellashtirish uchun mo'ljallangan.</p>
            <p><strong>Qanday ishlaydi:</strong> Ushbu dastur hisoblashlar uchun standart "Queuing Theory" (M/M/c logikasi) ning soddalashtirilgan interaktiv shablonidan foydalanadi.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Yo'lovchilar oqimi:</strong> Ma'lum bir vaqt oralig'ida (masalan 1 soat) aeroport postiga kelib tushadigan insonlar soni.</li>
              <li><strong>Faol Postlar (c):</strong> Ayni vaqtda xizmat ko'rsatayotgan darchalar/xodimlar soni. Buni uzgartirganingizda, grafikda qanday qilib o'rtacha kutish vaqti keskin pasayishi/oshishini ko'rishingiz mumkin.</li>
              <li><strong>Bitta mijoz uchun sarf:</strong> O'rtacha bir kishini tekshirish uchun qancha soniya sarflanadi (masalan biometrik pasport orqali o'tish ancha tezroq: ~20sek).</li>
            </ul>
            <p>Jami oqim va o'tkazuvchanlik quvvati (Capacity) hisob-kitob qilinib, "Xizmat olinmagan" insonlar (navbatdagi insonlar qoldig'i) kelib chiqadi va unga ko'ra barcha darchalar bo'yicha proporsional O'rtacha Kutish vaqti olinadi. AI esa (Tavsiya bloki) yuzaga kelgan sharoitni tahlil qilib, punktlarni optimal ishlatish chorasini tayyorlaydi.</p>
          </div>
        }
      />
    </div>
  );
}
