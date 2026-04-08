import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import HeroSection from './components/sections/HeroSection';
import QueueSimulator from './components/simulator/QueueSimulator';
import RiskAnalyzer from './components/analyzer/RiskAnalyzer';
import WeeklyAnalytics from './components/analyzer/WeeklyAnalytics';
import PredictiveMaintenance from './components/analyzer/PredictiveMaintenance';
import AboutProject from './components/sections/AboutProject';
import FAQSection from './components/sections/FAQSection';
import Footer from './components/Footer';
import AuthPage from './components/AuthPage';
import AIReportModule from './components/analyzer/AIReportModule';
import { useAuth } from './context/AuthContext';
import { HiLightningBolt, HiShieldCheck, HiChartPie, HiCog, HiDocumentText } from 'react-icons/hi';

function App() {
  const { t } = useTranslation();
  const { user, loading } = useAuth();
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      let hash = window.location.hash.replace('#', '') || 'home';
      setActiveTab(hash);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (user && activeTab === 'auth') {
      window.location.hash = 'home';
    }
  }, [user, activeTab]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#0f172a' }}>
        <div className="w-16 h-16 border-4 rounded-full animate-spin" style={{ borderColor: 'rgba(59,130,246,0.3)', borderTopColor: '#3b82f6' }} />
      </div>
    );
  }

  const protectedRoutes = ['simulator', 'analyzer', 'analytics', 'maintenance', 'report'];
  if (!user && (protectedRoutes.includes(activeTab) || activeTab === 'auth')) {
    return <AuthPage />;
  }

  const ModuleHeader = ({ icon: Icon, color, label, title, desc }) => (
    <div className="mb-10 text-center animate-fade-in">
      <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-4 ${color}`}>
        <Icon className="text-lg" /> {label}
      </span>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-800 dark:text-white mb-4">{title}</h2>
      <p className="text-dark-500 dark:text-dark-400 max-w-2xl mx-auto">{desc}</p>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300" style={{ background: 'var(--bg)' }}>
      <Header activeTab={activeTab} />
      <main className="flex-1 mt-16 sm:mt-20">

        {activeTab === 'home' && <HeroSection />}

        {activeTab === 'simulator' && (
          <div className="container-custom section-padding">
            <ModuleHeader icon={HiLightningBolt} color="bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400" label="AI Queue" title={t('modules.simTitle')} desc={t('modules.simDesc')} />
            <QueueSimulator />
          </div>
        )}

        {activeTab === 'analyzer' && (
          <div className="container-custom section-padding">
            <ModuleHeader icon={HiShieldCheck} color="bg-accent-50 dark:bg-accent-500/10 text-accent-600 dark:text-accent-400" label="AI Security" title={t('modules.riskTitle')} desc={t('modules.riskDesc')} />
            <RiskAnalyzer />
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="container-custom section-padding">
            <ModuleHeader icon={HiChartPie} color="bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400" label="AI Analytics" title={t('modules.analyticsTitle')} desc={t('modules.analyticsDesc')} />
            <WeeklyAnalytics />
          </div>
        )}

        {activeTab === 'maintenance' && (
          <div className="container-custom section-padding">
            <ModuleHeader icon={HiCog} color="bg-pink-50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400" label="AI Maintenance" title={t('modules.mainTitle')} desc={t('modules.mainDesc')} />
            <PredictiveMaintenance />
          </div>
        )}

        {activeTab === 'report' && (
          <div className="container-custom section-padding">
            <AIReportModule />
          </div>
        )}

        {activeTab === 'info' && (
          <div className="animate-fade-in">
            <AboutProject />
            <FAQSection />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
