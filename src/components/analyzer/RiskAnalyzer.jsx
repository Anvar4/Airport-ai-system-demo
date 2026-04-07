import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiBriefcase, HiSearchCircle, HiRefresh, HiChip, HiInformationCircle } from 'react-icons/hi';
import InfoModal from '../ui/InfoModal';

export default function RiskAnalyzer() {
  const [bagType, setBagType] = useState('hand');
  const [weight, setWeight] = useState(5);
  const [content, setContent] = useState('clothes');
  
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const simulateScan = () => {
    setIsScanning(true);
    setResult(null);
    
    setTimeout(() => {
      let score = 5; 
      if (bagType === 'large') score += 15;
      if (weight > 20) score += 20;
      if (content === 'electronics') score += 30;
      if (content === 'liquid') score += 50;
      if (content === 'unknown') score += 85;

      score = Math.min(99, score + Math.floor(Math.random() * 10)); 
      
      const status = score > 70 ? 'Xavfli' : score > 35 ? 'Shubhali' : 'Xavfsiz';
      
      setResult({ score, status });
      setIsScanning(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-end mb-4 max-w-5xl mx-auto">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-xl shadow-sm hover:shadow-md transition-all text-accent-600 dark:text-accent-400 font-semibold text-sm"
        >
          <HiInformationCircle className="text-lg" />
          Modul qanday ishlaydi?
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-white dark:bg-dark-800 p-6 sm:p-8 rounded-3xl border border-dark-100 dark:border-dark-700 shadow-xl shadow-dark-200/50 dark:shadow-black/20 relative overflow-hidden">
          {/* subtle gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center gap-3 mb-8 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-accent-50 dark:bg-accent-500/10 flex items-center justify-center">
              <HiBriefcase className="text-2xl text-accent-500" />
            </div>
            <h3 className="text-2xl font-extrabold text-dark-800 dark:text-white">Bagaj Parametrlari</h3>
          </div>

          <div className="space-y-8 relative z-10">
            <div>
              <label className="block text-sm font-bold text-dark-700 dark:text-dark-300 mb-3">Kategoriya turlari</label>
              <div className="grid grid-cols-2 gap-4">
                <button onClick={() => setBagType('hand')} className={`py-4 px-4 rounded-2xl text-sm font-bold transition-all border-2 ${bagType === 'hand' ? 'bg-accent-50 dark:bg-accent-500/10 border-accent-500 text-accent-600 dark:text-accent-400 shadow-md shadow-accent-500/10' : 'bg-dark-50 dark:bg-dark-900 border-dark-200 dark:border-dark-700 text-dark-500 hover:bg-dark-100 dark:hover:bg-dark-800'}`}>Qo'l yuki</button>
                <button onClick={() => setBagType('large')} className={`py-4 px-4 rounded-2xl text-sm font-bold transition-all border-2 ${bagType === 'large' ? 'bg-accent-50 dark:bg-accent-500/10 border-accent-500 text-accent-600 dark:text-accent-400 shadow-md shadow-accent-500/10' : 'bg-dark-50 dark:bg-dark-900 border-dark-200 dark:border-dark-700 text-dark-500 hover:bg-dark-100 dark:hover:bg-dark-800'}`}>Katta bagaj</button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-dark-700 dark:text-dark-300 mb-3 flex justify-between">
                <span>Rengten tasdiqlagan og'irlik ko'rsatkichi</span>
                <span className="text-accent-500 font-extrabold bg-accent-50 dark:bg-accent-500/10 px-2 py-0.5 rounded-md">{weight} kg</span>
              </label>
              <input type="range" min="1" max="40" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="w-full h-2 bg-dark-100 dark:bg-dark-700 rounded-lg appearance-none cursor-pointer accent-accent-500" />
            </div>

            <div>
              <label className="block text-sm font-bold text-dark-700 dark:text-dark-300 mb-3">Vision datchiklar aniqlagan tarkib</label>
              <select value={content} onChange={(e) => setContent(e.target.value)} className="w-full px-4 py-4 rounded-2xl bg-dark-50 dark:bg-dark-900 border-2 border-dark-200 dark:border-dark-700 text-dark-800 dark:text-white focus:border-accent-500 focus:bg-white dark:focus:bg-dark-800 outline-none font-medium transition-colors cursor-pointer">
                <option value="clothes">Kiyim va shaxsiy buyumlar (Xavfsiz)</option>
                <option value="electronics">Elektronika/Akkumlyator (Diqqat)</option>
                <option value="liquid">Suyuqlik me'yordan oshiq (Risk!)</option>
                <option value="unknown">Noma'lum zich modda (Critik Xavf!)</option>
              </select>
            </div>

            <button 
              onClick={simulateScan} 
              disabled={isScanning}
              className={`w-full py-4 mt-6 rounded-2xl font-extrabold text-white transition-all duration-300 flex items-center justify-center gap-2 text-lg shadow-xl shadow-accent-500/25 ${isScanning ? 'bg-dark-400 cursor-not-allowed shadow-none' : 'bg-gradient-to-r from-accent-600 to-primary-600 hover:shadow-2xl hover:shadow-accent-500/40 hover:-translate-y-1'}`}
            >
              {isScanning ? (
                <><HiRefresh className="animate-spin text-2xl" /> Neural Tahlil ketmoqda...</>
              ) : (
                <><HiSearchCircle className="text-3xl" /> Xavfsizlik Skriptini Ishga Tushirish</>
              )}
            </button>
          </div>
        </div>

        <div className="bg-dark-900 dark:bg-dark-950 p-6 sm:p-8 rounded-3xl border border-dark-800 shadow-2xl flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: '16px 16px'}} />

          <div className="relative z-10 w-full flex flex-col items-center justify-center min-h-[400px]">
            <AnimatePresence mode="wait">
              {!result && !isScanning && (
                <motion.div key="empty" initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -10}} className="text-center text-dark-400">
                  <HiChip className="text-6xl mx-auto mb-6 opacity-40" />
                  <h4 className="text-xl font-bold text-white mb-2">Platforma Kutish Rejimida</h4>
                  <p className="text-sm">Bagaj xususiyatlarini yuboring va xavfsizlik logikasini vizual sinab ko'ring.</p>
                </motion.div>
              )}

              {isScanning && (
                <motion.div key="scanning" initial={{opacity: 0, scale: 0.9}} animate={{opacity: 1, scale: 1}} exit={{opacity: 0}} className="flex flex-col items-center justify-center">
                  <div className="relative w-32 h-32 flex items-center justify-center">
                     <div className="absolute inset-0 border-4 border-dark-800 rounded-full"></div>
                     <div className="absolute inset-0 border-4 border-transparent border-t-accent-500 rounded-full animate-spin"></div>
                     <HiSearchCircle className="text-4xl text-accent-500 animate-pulse" />
                  </div>
                  <p className="mt-8 text-accent-400 font-bold tracking-widest uppercase text-sm animate-pulse">Tensor xisoblash...</p>
                </motion.div>
              )}

              {result && !isScanning && (
                <motion.div key="result" initial={{opacity: 0, scale: 0.8}} animate={{opacity: 1, scale: 1}} className="flex flex-col items-center text-center w-full">
                  <div className="relative mb-8 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                    <svg className="w-56 h-56 transform -rotate-90">
                      <circle cx="112" cy="112" r="100" fill="transparent" strokeWidth="16" className="stroke-dark-800" />
                      <motion.circle 
                        initial={{strokeDashoffset: 628}}
                        animate={{strokeDashoffset: 628 - (628 * result.score) / 100}}
                        transition={{duration: 2, ease: "easeOut"}}
                        cx="112" cy="112" r="100" fill="transparent" strokeWidth="16" 
                        className={result.score > 70 ? 'stroke-red-500' : result.score > 35 ? 'stroke-amber-500' : 'stroke-green-500'} 
                        strokeDasharray="628" strokeLinecap="round" 
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-6xl font-black text-white">{result.score}<span className="text-2xl text-dark-400">%</span></span>
                      <span className="uppercase tracking-widest text-xs font-bold mt-2 text-dark-500">Risk Indeksi</span>
                    </div>
                  </div>

                  <div className={`px-6 py-3 rounded-xl font-black text-lg mb-8 border-2 shadow-lg backdrop-blur-sm ${result.score > 70 ? 'bg-red-500/10 border-red-500/50 text-red-400 shadow-red-500/20' : result.score > 35 ? 'bg-amber-500/10 border-amber-500/50 text-amber-400 shadow-amber-500/20' : 'bg-green-500/10 border-green-500/50 text-green-400 shadow-green-500/20'}`}>
                    {result.status} Bagaj
                  </div>

                  <div className="w-full text-left">
                    <div className="bg-dark-800 p-5 rounded-2xl border border-dark-700">
                      <p className="text-xs font-bold tracking-widest uppercase text-dark-400 mb-2">AI Xulosasi (Action Required)</p>
                      <p className="text-sm text-white/90 leading-relaxed font-medium">
                        {result.score > 70 ? 'CRITICAL ALERT! Tizim yuqori xavf darajasini ko\'rsatmoqda. Bagaj avtomatik linadan chiqarilishi, operatorlar va xavfsizlik xizmatiga darhol bildirishnoma ketishi tayinlandi. Qo\'lda tekshiruv shart.' : 
                         result.score > 35 ? 'YENGIL UCHRASH: Shubhali elementlar indeksatsiyasi kuzatildi. Markaziy tizimga jo\'natildi. Operator tomonidan qo\'shimcha rentgen nazorati yetarli.' : 
                         'TIZIM TOZALANDI: Hech qanday anomaliya kuzatilmadi. Algoritm yashil yo\'lak bo\'yicha avtomatik o\'tkazishni maslahat beradi.'}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <InfoModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Risk Analyzer (Bagaj profaylingi)"
        content={
          <div className="space-y-4">
            <p><strong>Maqsad:</strong> Xavfsizlik xodimlari va rentgen(ray) uskunalari AI logikasi orqali har bir yuk uchun qanday qilib avtomatik "Xavflilik koeffitsienti" berishini tushuntirish.</p>
            <p><strong>Qanday ishlaydi:</strong> Ushbu mudol oddiy chiziqli "Weighted Scoring System" (Vaznli baholash) mock-tizimidan foydalanadi.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Mashinaviy Ko'rish (Computer Vision):</strong> Agar kamera (tarkib opsiyasi) yuk ichida zich yuzali noma'lum buyum his qilsa, ssenariy bo'yicha bazaviy ball +85 gacha sakraydi.</li>
              <li><strong>Og'irlik anomaliyasi (Weight):</strong> Qo'l yuki standartidan ortiqcha og'irlik (masalan kichik sumka lekin 25kg) portlovchi modda anomaliyasi deb qabul qilinadi va +20 xavf yoziladi.</li>
              <li><strong>Birlashtirish (Ensemble logic):</strong> Bir tekshiruvda olingalar datchiklar yig'indisi foizda (%) ekranga tasvirlanadi. Natija 70% dan oshsa tizim g'ayritabiiy harakat doirasida bloklash(avto-reject) funksiyasini qo'llaydi.</li>
            </ul>
            <p>Tizim nafaqat xavflarni topishda, balki aniq xavfsiz( <span className="text-green-500 font-bold">Risk {`<`} 35%</span> ) sumkalarni xodimga ko'rsatmasdan tranzit o'tkazish orqali aeroport o'tkazuvchanligini oshirishda xizmat qiladi.</p>
          </div>
        }
      />
    </div>
  );
}
