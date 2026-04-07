import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCog, HiInformationCircle } from 'react-icons/hi';
import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';
import InfoModal from '../ui/InfoModal';

export default function PredictiveMaintenance() {
  const [equipment, setEquipment] = useState('xray');
  const [hoursUsed, setHoursUsed] = useState(2500);
  const [temperature, setTemperature] = useState(35);
  const [vibration, setVibration] = useState(2.5);
  
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const equipmentMap = {
    xray: { name: 'X-Ray Tomograf (Terminal-B)', maxTemp: 45, maxVib: 5 },
    escalator: { name: 'Eskalator Tizimi (Gate A-4)', maxTemp: 60, maxVib: 8 },
    baggage: { name: 'Magistral Bagaj Lentasi (L-2)', maxTemp: 55, maxVib: 12 },
  };

  const analyze = () => {
    setIsAnalyzing(true);
    setResult(null);

    setTimeout(() => {
      const eq = equipmentMap[equipment];
      
      const tempRisk = Math.min(100, Math.max(0, (temperature / eq.maxTemp) * 100));
      const vibRisk = Math.min(100, Math.max(0, (vibration / eq.maxVib) * 100));
      const hoursRisk = Math.min(100, (hoursUsed / 5000) * 100); 
      
      const criticalRisk = (tempRisk * 0.4) + (vibRisk * 0.4) + (hoursRisk * 0.2);
      
      let status = 'Sog\'lom holat (Nominal)';
      let color = '#10b981'; 
      let daysLeft = 180 + Math.floor(Math.random() * 30);
      let action = 'Rejali texnik xizmat yetarli, hech qanday anomaliya tizimda belgilanmagan.';

      if (criticalRisk > 80 || tempRisk > 95 || vibRisk > 95) {
        status = 'Kritik xavf (Failure Pred.)';
        color = '#ef4444'; 
        daysLeft = Math.floor(Math.random() * 3);
        action = 'Zudlik bilan apparatni yoping! Jismoniy muhandis diagnostikasi (Level 3) talab qilinadi.';
      } else if (criticalRisk > 50) {
        status = 'Anomaliya / Diqqat talab';
        color = '#f59e0b'; 
        daysLeft = Math.floor(Math.random() * 10) + 5;
        action = 'Qisman emirilish kuzatildi, yaqin operatsion tanaffusda texnik tekshiruv shart.';
      }

      setResult({
        riskScore: Math.round(criticalRisk),
        status,
        color,
        daysLeft,
        action,
        tempRisk: Math.round(tempRisk),
        vibRisk: Math.round(vibRisk)
      });
      setIsAnalyzing(false);
    }, 1500);
  };

  const chartData = result ? [
    { name: 'Risk', value: result.riskScore, fill: result.color }
  ] : [];

  return (
    <div className="space-y-6">
      <div className="flex justify-end mb-4 max-w-6xl mx-auto">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-xl shadow-sm hover:shadow-md transition-all text-pink-600 dark:text-pink-400 font-semibold text-sm"
        >
          <HiInformationCircle className="text-lg" />
          Modul qanday ishlaydi?
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Input Panel */}
        <div className="bg-white dark:bg-dark-800 p-6 sm:p-10 rounded-3xl border border-dark-100 dark:border-dark-700 shadow-xl shadow-dark-200/50 dark:shadow-black/20 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-pink-50 dark:bg-pink-500/10 flex items-center justify-center relative overflow-hidden">
              <HiCog className="text-3xl text-pink-500 absolute animate-[spin_8s_linear_infinite]" />
            </div>
            <h3 className="text-2xl font-extrabold text-dark-800 dark:text-white">Sensordagi Ko'rsatkichlar</h3>
          </div>

          <div className="space-y-8 relative z-10">
            <div>
              <label className="block text-sm font-extrabold text-dark-700 dark:text-dark-300 mb-3 uppercase tracking-wider">IoT Sensor Maqsad (Uskuna turi)</label>
              <select 
                value={equipment} 
                onChange={(e) => setEquipment(e.target.value)} 
                className="w-full px-5 py-4 rounded-2xl bg-dark-50 dark:bg-dark-900 border-2 border-dark-200 dark:border-dark-700 text-dark-800 dark:text-white focus:border-pink-500 outline-none font-bold cursor-pointer transition-colors"
              >
                {Object.entries(equipmentMap).map(([k, v]) => (
                  <option key={k} value={k}>{v.name}</option>
                ))}
              </select>
            </div>

            <div className="bg-dark-50 dark:bg-dark-900 p-5 rounded-2xl border border-dark-100 dark:border-dark-800">
              <label className="block text-sm font-bold text-dark-700 dark:text-dark-300 mb-3 flex justify-between">
                <span>Ekspeditsiya vaqti (Soat)</span>
                <span className="text-pink-500 font-extrabold px-3 py-1 bg-pink-50 dark:bg-pink-500/10 rounded-lg">{hoursUsed} sr</span>
              </label>
              <input type="range" min="100" max="5000" step="100" value={hoursUsed} onChange={(e) => setHoursUsed(Number(e.target.value))} className="w-full h-2 bg-dark-200 dark:bg-dark-700 rounded-lg appearance-none cursor-pointer accent-pink-500" />
            </div>

            <div className="bg-dark-50 dark:bg-dark-900 p-5 rounded-2xl border border-dark-100 dark:border-dark-800">
              <label className="block text-sm font-bold text-dark-700 dark:text-dark-300 mb-3 flex justify-between">
                <span>Motor / Elektronika Harorati (°C)</span>
                <span className="text-amber-500 font-extrabold px-3 py-1 bg-amber-50 dark:bg-amber-500/10 rounded-lg">{temperature} °C</span>
              </label>
              <input type="range" min="20" max="100" value={temperature} onChange={(e) => setTemperature(Number(e.target.value))} className="w-full h-2 bg-dark-200 dark:bg-dark-700 rounded-lg appearance-none cursor-pointer accent-amber-500" />
            </div>

            <div className="bg-dark-50 dark:bg-dark-900 p-5 rounded-2xl border border-dark-100 dark:border-dark-800">
              <label className="block text-sm font-bold text-dark-700 dark:text-dark-300 mb-3 flex justify-between">
                <span>Vibratsiya chastotasi (mm/s)</span>
                <span className="text-indigo-500 font-extrabold px-3 py-1 bg-indigo-50 dark:bg-indigo-500/10 rounded-lg">{vibration} mm/s</span>
              </label>
              <input type="range" min="0" max="15" step="0.5" value={vibration} onChange={(e) => setVibration(Number(e.target.value))} className="w-full h-2 bg-dark-200 dark:bg-dark-700 rounded-lg appearance-none cursor-pointer accent-indigo-500" />
            </div>

            <button 
              onClick={analyze} 
              disabled={isAnalyzing}
              className={`w-full py-5 rounded-2xl font-extrabold text-white transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-xl shadow-pink-500/25 ${isAnalyzing ? 'bg-dark-400 cursor-not-allowed shadow-none' : 'bg-gradient-to-r from-pink-600 to-rose-600 hover:shadow-2xl hover:shadow-pink-500/40 hover:-translate-y-1'}`}
            >
              {isAnalyzing ? (
                <><HiCog className="animate-spin text-2xl" /> Digital Twin orqali tahlil...</>
              ) : (
                <><HiCog className="text-2xl" /> AI Modelda simulyatsiya qilish</>
              )}
            </button>
          </div>
        </div>

        {/* AI Output Panel */}
        <div className="bg-dark-50 dark:bg-dark-900/80 p-6 sm:p-10 rounded-3xl border border-dark-200 dark:border-dark-800 flex flex-col items-center justify-center relative shadow-inner">
          <AnimatePresence mode="wait">
            {!result && !isAnalyzing && (
              <motion.div key="empty" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="text-center text-dark-400 dark:text-dark-500 p-8">
                <HiCog className="text-7xl mx-auto mb-6 opacity-20" />
                <h4 className="text-2xl font-bold text-dark-800 dark:text-white mb-2">Tizim kutish holatida</h4>
                <p className="font-medium max-w-xs mx-auto">Sensordan kelayotgan sintetik ma'lumotlarni yuboruvchi tugmani bosing.</p>
              </motion.div>
            )}

            {isAnalyzing && (
              <motion.div key="scanning" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="w-full flex flex-col items-center justify-center min-h-[400px]">
                <div className="relative w-40 h-40">
                   <div className="absolute inset-0 border-8 border-transparent border-t-pink-500 border-b-rose-500 rounded-full animate-[spin_1.5s_linear_infinite]"></div>
                   <div className="absolute inset-4 border-4 border-transparent border-l-dark-800 border-r-dark-700 rounded-full animate-[spin_2s_linear_infinite_reverse]"></div>
                </div>
                <p className="mt-8 text-pink-500 font-extrabold uppercase tracking-widest text-sm animate-pulse">Diagnostika protokoli ishlamoqda...</p>
              </motion.div>
            )}

            {result && !isAnalyzing && (
              <motion.div key="result" initial={{opacity: 0, scale: 0.95, y: 20}} animate={{opacity: 1, scale: 1, y: 0}} className="w-full flex flex-col items-center py-4">
                
                {/* Radial Chart */}
                <div className="relative w-72 h-72 drop-shadow-2xl">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart cx="50%" cy="50%" innerRadius="70%" outerRadius="100%" barSize={24} data={chartData} startAngle={180} endAngle={0}>
                      <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                      <RadialBar minAngle={15} background={{ fill: '#334155', opacity: 0.1 }} clockWise dataKey="value" cornerRadius={12} />
                    </RadialBarChart>
                  </ResponsiveContainer>
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center pb-8">
                    <span className="text-7xl font-black text-dark-800 dark:text-white" style={{textShadow: `0 10px 30px ${result.color}40`}}>{result.riskScore}<span className="text-2xl opacity-50">%</span></span>
                    <span className="text-sm font-extrabold tracking-widest uppercase mt-2 px-3 py-1 rounded border drop-shadow-sm bg-white/50 dark:bg-dark-900/50 backdrop-blur-md" style={{color: result.color, borderColor: `${result.color}50`}}>{result.status}</span>
                  </div>
                </div>

                {/* Sub metrics */}
                <div className="w-full grid grid-cols-2 gap-4 mt-0 relative z-10 -top-8">
                  <div className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-md p-5 rounded-2xl border shadow-lg border-dark-100 dark:border-dark-700 text-center transform transition-transform hover:-translate-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-dark-500">Iqlim (Termal)</span>
                    <div className="text-3xl font-black mt-2 text-amber-500">{result.tempRisk}%</div>
                  </div>
                  <div className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-md p-5 rounded-2xl border shadow-lg border-dark-100 dark:border-dark-700 text-center transform transition-transform hover:-translate-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-dark-500">Mexanik yemirilish</span>
                     <div className="text-3xl font-black mt-2 text-indigo-500">{result.vibRisk}%</div>
                  </div>
                </div>

                {/* Action Box */}
                <div className="w-full p-6 rounded-2xl border-2 shadow-xl backdrop-blur-sm" style={{ backgroundColor: result.color + '10', borderColor: result.color + '30' }}>
                  <div className="flex items-start gap-4">
                    <span className="text-3xl mt-0.5" style={{color: result.color}}>
                      {result.status.includes('Sog\'lom') ? '🛡️' : result.status.includes('talab') ? '⚠️' : '🚨'}
                    </span>
                    <div>
                      <h4 className="font-extrabold text-lg text-dark-800 dark:text-white mb-2">Tizim Arxitektori Yechimi:</h4>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs tracking-wider uppercase font-bold text-dark-500">Life Expectancy:</span>
                        <span className="px-3 py-1 rounded bg-dark-800 text-white dark:bg-white dark:text-dark-900 text-sm font-bold shadow-md">~ {result.daysLeft} KUN</span>
                      </div>
                      <p className="text-sm font-bold opacity-90 leading-relaxed" style={{color: result.color}}>{result.action}</p>
                    </div>
                  </div>
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <InfoModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Predictive Maintenance (Buzilishlarni barvaqt aniqlash)"
        content={
          <div className="space-y-4">
            <p><strong>Maqsad:</strong> Aeroportdagi har bir daqiqada ishlayotgan million dollarlik texnikalarni (X-ray apparatlar, yuk tashiydigan lentalar, eskalatorlar) "qachon buziladi?" emas, "qachon ta'mir talab qilinadi (buzilmasidan avval)?" prinsiplari asosida diagnostika qilish.</p>
            <p><strong>Qanday ishlaydi:</strong> IoT (Internet of Things) sensorlar orqali uskunadan doimiy ravishda quyidagi ma'lumotlar oqib keladi deb faraz qilinadi va u AI modeliga solib hisoblanadi.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Motor Harorati:</strong> Maxsus infraqizil kameralar apparat motorining me'yoridan ortiq qizib ketish ehtimolini hisoblaydi (ishqalanish, moyning eskirishi).</li>
              <li><strong>Vibratsiya (Tebranish):</strong> Barcha yirik mexanik motorlar rezonans va silkinish diapazoniga ega. Uning odatdagidan (Normal limit) siljib ketishi ichidagi kichik detallarning uzilayotganidan darak beradi.</li>
              <li><strong>Model qarori (Deep Learning proxy):</strong> Tizim 0% dan 100% gacha apparatning joriy ishonchliligini chiqaradi va asosiysi <em>qachon butunlay to'xtab qolishini</em> "Life expectancy" kabi bashorat qilib, mutaxassislarga hisobot yuboradi.</li>
            </ul>
            <p>Natijada aeroport ma'muriyati uskuna buzilishidan avval extiyot qismni olib kelib tayyorlaydi. Bu orqali qimmatli xizmat ko'rsatish vaqti, pullar va 1000lab yo'lovchilar asablari asraladi.</p>
          </div>
        }
      />
    </div>
  );
}
