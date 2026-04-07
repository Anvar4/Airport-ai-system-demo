import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { HiDocumentText, HiDownload, HiSparkles, HiCheckCircle, HiExclamation, HiPrinter } from 'react-icons/hi';
import { useAuth } from '../../context/AuthContext';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function AIReportModule() {
  const { user } = useAuth();
  const [isGenerating, setIsGenerating] = useState(false);
  const [report, setReport] = useState(null);
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const reportRef = useRef(null);

  const reportId = useRef(`REP-${Math.floor(Math.random() * 100000)}-AI`);

  const generateReport = () => {
    setIsGenerating(true);
    setReport(null);
    setDisplayedText('');
    setIsTypingDone(false);
    reportId.current = `REP-${Math.floor(Math.random() * 100000)}-AI`;

    setTimeout(() => {
      const generatedReport = {
        date: new Date().toLocaleDateString('uz-UZ'),
        time: new Date().toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' }),
        author: user ? user.name : 'Tizim Auditori',
        summaryText: `Hurmatli ${user ? user.name : 'Menejer'}, tizim so'nggi 24 soatlik barcha AI terminallari ishidan kelib chiqib, yig'ilgan metamaʼlumotlarni analiz qildi. Quyida umumiy ko'rsatkichlar va AI arxitektorining xulosalari keltirilgan.`,
        sections: [
          {
            title: "Yo'lovchilar Navbati (Q-Simulator)",
            statusColor: '#22c55e',
            statusLabel: 'OPTIMAL',
            text: "Navbat uzunligi va postlar balansi 85% dan yuqori utilizatsiyani saqlab turibdi. Hech qanday qo'shimcha kassa ochishga ehtiyoj yo'q. Bir kishi uchun sarf vaqti normada (45 sek)."
          },
          {
            title: "Bagaj Xavfsizligi (Risk Analyzer)",
            statusColor: '#f59e0b',
            statusLabel: 'OGOHLANTIRISH',
            text: "Terminal B da katta yuklar orasida bir qancha zichligi noma'lum anomaliyalar bloklandi (Risk >70%). Ushbu sumkalar 2-darajali tekshiruv xonasida izolyatsiya qilingan."
          },
          {
            title: "Trafik va Kechikish (Weekly Analytics)",
            statusColor: '#22c55e',
            statusLabel: 'OPTIMAL',
            text: "Kechikishlar ko'rsatkichi 16.8 daqiqani tashkil etib, avvalgi haftadan 2.1% ga yaxshilangan. Yomg'irli kunlar bo'yicha ehtimoliy kechikish xavfi ham kompensatsiya qilingan."
          },
          {
            title: "Smart Maintenance (Uskunalar holati)",
            statusColor: '#ef4444',
            statusLabel: 'KRITIK',
            text: "Gate A-4 dagi Eskalator tizimi vibratsiya sensori kritik (7/8) darajaga yaqinlashmoqda. Eskalatorni zudlik bilan texnik ko'rik uchun to'xtatish rejalashtirilsin."
          }
        ],
        finalThought: "TIZIM XULOSASI: Aeroport qisman barqaror. Xavfsizlik chora-tadbirlari va apparatlar ta'mirlanishi uchun texnik bo'limga 2 ta buyurtma avtomatik shakllantirildi. Yo'lovchi oqimi optimal nazoratda."
      };

      setReport(generatedReport);
      setIsGenerating(false);

      // Typewriter effect
      const fullText = generatedReport.summaryText;
      let i = 0;
      const timer = setInterval(() => {
        i++;
        setDisplayedText(fullText.substring(0, i));
        if (i >= fullText.length) {
          clearInterval(timer);
          setIsTypingDone(true);
        }
      }, 18);
    }, 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = async () => {
    if (!reportRef.current) return;
    setIsDownloading(true);

    try {
      const element = reportRef.current;

      // Temporarily force white background for PDF
      const prevBg = element.style.background;
      element.style.background = '#ffffff';

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
        windowWidth: 900,
      });

      element.style.background = prevBg;

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      // First page
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      // Additional pages if content overflows
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      const fileName = `AeroAI_Hisobot_${report.date.replace(/\./g, '-')}_${reportId.current}.pdf`;
      pdf.save(fileName);
    } catch (err) {
      console.error('PDF yaratishda xatolik:', err);
      alert("PDF yaratishda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Generator Header */}
      <div className="bg-dark-800 p-8 rounded-3xl border border-dark-700 shadow-xl text-center relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />

        <HiSparkles className="text-5xl text-primary-400 mx-auto mb-4" />
        <h2 className="text-3xl font-extrabold text-white mb-4">Umumiy AI Hisobotini Shakllantirish</h2>
        <p className="text-dark-400 mb-8 max-w-lg mx-auto">
          Deep Learning modellarimiz orqali aeroportning barcha bo'limlaridan olingan ma'lumotlarni tahlil qiling va tayyor PDF hisobotga ega bo'ling.
        </p>

        <button
          onClick={generateReport}
          disabled={isGenerating}
          className={`px-8 py-4 rounded-xl font-bold text-white transition-all shadow-xl flex items-center justify-center gap-2 mx-auto min-w-[280px] ${
            isGenerating
              ? 'bg-dark-600 shadow-none cursor-wait opacity-70'
              : 'bg-gradient-to-r from-primary-600 to-accent-600 hover:-translate-y-1 hover:shadow-primary-500/30'
          }`}
        >
          {isGenerating ? (
            <>
              <HiDocumentText className="animate-spin" size={22} />
              <span>AI ma'lumotlarni yig'moqda...</span>
            </>
          ) : (
            <>
              <HiSparkles size={22} />
              <span>AI Hisobotini Generatsiya qilish</span>
            </>
          )}
        </button>
      </div>

      {/* Generated Report */}
      {report && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Print / PDF action bar */}
          <div className="flex justify-end gap-3 mb-4">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold bg-dark-700 text-dark-300 hover:bg-dark-600 hover:text-white transition-colors text-sm"
            >
              <HiPrinter className="text-lg" /> Chop etish
            </button>
            <button
              onClick={handleDownloadPDF}
              disabled={!isTypingDone || isDownloading}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white text-sm shadow-lg transition-all ${
                !isTypingDone || isDownloading
                  ? 'bg-dark-600 opacity-60 cursor-not-allowed'
                  : 'bg-primary-600 hover:bg-primary-500 shadow-primary-500/20 hover:-translate-y-0.5'
              }`}
            >
              {isDownloading ? (
                <><HiDocumentText className="animate-spin text-lg" /> PDF tayyorlanmoqda...</>
              ) : (
                <><HiDownload className="text-lg" /> PDF Yuklash</>
              )}
            </button>
          </div>

          {/* Report Paper */}
          <div
            ref={reportRef}
            className="bg-white border border-dark-200 p-10 rounded-2xl shadow-2xl"
            style={{ color: '#1e293b', fontFamily: 'Inter, sans-serif' }}
          >
            {/* Report Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '2px solid #e2e8f0', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: 'white', fontSize: '18px' }}>✈</span>
                  </div>
                  <span style={{ fontWeight: '900', fontSize: '22px', color: '#1e293b' }}>Aero<span style={{ color: '#3b82f6' }}>AI</span></span>
                </div>
                <h1 style={{ fontSize: '26px', fontWeight: '900', color: '#0f172a', textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>
                  Vaziyat Hisoboti
                </h1>
                <p style={{ fontSize: '13px', color: '#64748b', marginTop: '4px', fontWeight: '600' }}>
                  ID: {reportId.current}
                </p>
              </div>
              <div style={{ textAlign: 'right', fontSize: '13px', fontWeight: '700', color: '#64748b', background: '#f8fafc', padding: '12px 16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <p>Sana: <strong style={{ color: '#1e293b' }}>{report.date}</strong></p>
                <p>Vaqt: <strong style={{ color: '#1e293b' }}>{report.time}</strong></p>
                <p>Muallif: <strong style={{ color: '#2563eb' }}>{report.author}</strong></p>
              </div>
            </div>

            {/* Summary */}
            <div style={{ borderLeft: '4px solid #3b82f6', paddingLeft: '16px', background: '#eff6ff', borderRadius: '0 8px 8px 0', padding: '12px 16px', marginBottom: '2rem' }}>
              <p style={{ fontSize: '15px', lineHeight: '1.7', fontWeight: '500', color: '#1e40af' }}>
                {displayedText}
                {!isTypingDone && (
                  <span style={{ display: 'inline-block', width: '8px', height: '20px', background: '#3b82f6', marginLeft: '4px', animation: 'pulse 1s infinite' }} />
                )}
              </p>
            </div>

            {/* Sections */}
            {isTypingDone && (
              <>
                <h3 style={{ fontSize: '14px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '2px', textAlign: 'center', background: '#f1f5f9', color: '#475569', padding: '10px', borderRadius: '8px', marginBottom: '1.5rem' }}>
                  Modullar Bo'yicha Tahlil
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '2rem' }}>
                  {report.sections.map((section, idx) => (
                    <div key={idx} style={{ padding: '18px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <h4 style={{ fontWeight: '700', fontSize: '13px', color: '#1e293b', margin: 0 }}>{section.title}</h4>
                        <span style={{ fontSize: '10px', fontWeight: '800', color: 'white', background: section.statusColor, padding: '2px 8px', borderRadius: '20px' }}>
                          {section.statusLabel}
                        </span>
                      </div>
                      <p style={{ fontSize: '12.5px', color: '#475569', lineHeight: '1.6', margin: 0 }}>{section.text}</p>
                    </div>
                  ))}
                </div>

                {/* Final Conclusion */}
                <div style={{ background: '#0f172a', borderRadius: '12px', padding: '20px 24px', color: 'white' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{ fontSize: '24px', flexShrink: 0 }}>✨</span>
                    <div>
                      <h4 style={{ fontWeight: '900', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#a78bfa', marginBottom: '8px' }}>
                        Yakuniy Xulosa va Rezolyutsiya
                      </h4>
                      <p style={{ fontWeight: '700', lineHeight: '1.6', color: 'rgba(255,255,255,0.9)', margin: 0 }}>{report.finalThought}</p>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div style={{ marginTop: '2rem', paddingTop: '16px', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#94a3b8' }}>
                  <span>© {new Date().getFullYear()} AeroAI Airport Intelligence System</span>
                  <span>Tangirova Barchinoy | AT fakulteti, 4-bosqich KIDT</span>
                </div>
              </>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}
