import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX, HiLogout, HiGlobeAlt, HiChevronDown } from 'react-icons/hi';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'uz', label: "O'zbekcha", flag: '🇺🇿' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'kk', label: 'Қазақша', flag: '🇰🇿' },
  { code: 'tg', label: 'Тоҷикӣ', flag: '🇹🇯' },
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  { code: 'tk', label: 'Türkmençe', flag: '🇹🇲' },
  { code: 'ky', label: 'Кыргызча', flag: '🇰🇬' },
  { code: 'fa', label: 'فارسی', flag: '🇮🇷' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
];

export default function Header({ activeTab }) {
  const { t, i18n } = useTranslation();
  const { user, logout } = useAuth();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  
  const profileRef = useRef(null);
  const langRef = useRef(null);

  const navLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#simulator', label: t('nav.simulator') },
    { href: '#analyzer', label: t('nav.analyzer') },
    { href: '#analytics', label: t('nav.analytics') },
    { href: '#maintenance', label: t('nav.maintenance') },
    { href: '#report', label: t('nav.report') },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = () => setIsMobileMenuOpen(false);

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem('site_lang', langCode);
    setIsLangOpen(false);
  };

  const activeLangObj = languages.find(l => l.code === i18n.language) || languages[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || activeTab !== 'home'
          ? 'bg-white/90 dark:bg-dark-900/90 backdrop-blur-xl shadow-lg shadow-dark-900/5 dark:shadow-dark-950/20 border-b border-dark-100 dark:border-dark-800'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3 group translate-y-0 notranslate">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/25 group-hover:shadow-primary-500/40 transition-shadow duration-300">
            <img src="/logo.svg" alt="AeroAI" className="w-7 h-7 object-contain" />
          </div>
          <div className={`hidden sm:block transition-colors duration-300 ${!isScrolled && activeTab === 'home' ? 'text-white' : 'text-dark-800 dark:text-white'}`}>
            <span className="text-lg font-black tracking-tight">Aero<span className="text-primary-400 dark:text-primary-400 font-black">AI</span></span>
            <p className="text-[10px] opacity-50 -mt-0.5 font-medium">Airport Intelligence</p>
          </div>
        </a>

        <div className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = link.href.replace('#', '') === activeTab;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-bold transition-all duration-200 rounded-lg ${
                  isActive
                  ? 'bg-primary-50 text-primary-700 dark:bg-primary-500/10 dark:text-primary-400'
                  : !isScrolled && activeTab === 'home'
                      ? 'text-white/80 hover:text-white hover:bg-white/10'
                      : 'text-dark-500 hover:bg-dark-100 dark:text-dark-300 dark:hover:bg-dark-800'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2 sm:gap-4 relative text-sm">
          <div className="relative" ref={langRef}>
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className={`flex items-center gap-1.5 px-2 py-1.5 rounded-xl border transition-colors ${!isScrolled && activeTab === 'home' ? 'border-white/20 text-white hover:bg-white/10' : 'border-dark-200 dark:border-dark-700 text-dark-700 dark:text-dark-200 hover:bg-dark-50 dark:hover:bg-dark-800'}`}
            >
              <HiGlobeAlt className="text-lg opacity-70" />
              <span className="font-bold relative -top-[1px]">{activeLangObj.flag}</span>
              <HiChevronDown className={`transition-transform opacity-50 ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-3 w-40 rounded-2xl bg-white dark:bg-dark-800 border border-dark-100 dark:border-dark-700 shadow-xl overflow-y-auto max-h-64 py-2 z-50 custom-scrollbar"
                  >
                    {languages.map(lang => (
                      <button 
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full text-left px-4 py-2 text-sm font-semibold flex items-center gap-2 transition-colors ${i18n.language === lang.code ? 'bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-400' : 'text-dark-700 dark:text-dark-300 hover:bg-dark-50 dark:hover:bg-dark-700'}`}
                      >
                         <span className="text-base">{lang.flag}</span>
                         <span className="notranslate">{lang.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
            </AnimatePresence>
          </div>

          {user ? (
            <div className="relative" ref={profileRef}>
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className={`flex items-center gap-2 px-2 py-1.5 rounded-xl border transition-colors ${!isScrolled && activeTab === 'home' ? 'border-white/20 text-white hover:bg-white/10' : 'border-dark-200 dark:border-dark-700 text-dark-700 dark:text-dark-200 hover:bg-dark-50 dark:hover:bg-dark-800'}`}
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary-600 to-accent-600 flex items-center justify-center text-white font-bold text-sm notranslate">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
                <div className="hidden sm:block text-left mr-1 notranslate">
                  <span className="block text-xs font-bold leading-none">{user.name.split(' ')[0]}</span>
                  <span className="block text-[10px] opacity-70 mt-0.5">{user.role}</span>
                </div>
              </button>

              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-3 w-56 rounded-2xl bg-white dark:bg-dark-800 border border-dark-100 dark:border-dark-700 shadow-xl overflow-hidden py-2 z-50"
                  >
                    <div className="px-4 py-3 border-b border-dark-100 dark:border-dark-700 mb-1 notranslate">
                      <p className="text-sm font-bold text-dark-800 dark:text-white truncate">{user.name}</p>
                      <p className="text-xs text-dark-500 dark:text-dark-400 truncate mt-0.5">{user.email}</p>
                    </div>
                    <button 
                      onClick={logout}
                      className="w-full text-left px-4 py-2 text-sm font-semibold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 flex items-center gap-2 transition-colors"
                    >
                      <HiLogout className="text-lg" /> {t('nav.logout')}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div className="hidden sm:block">
               <a href="#auth" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 font-bold text-white shadow-lg shadow-primary-500/20 hover:-translate-y-0.5 hover:shadow-primary-500/30 transition-all active:scale-95 leading-none">
                 {t('nav.login')}
               </a>
            </div>
          )}

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`xl:hidden p-2 rounded-xl transition-colors ${!isScrolled && activeTab === 'home' ? 'text-white hover:bg-white/10' : 'text-dark-600 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-800'}`}
            aria-label="Menyu"
          >
            {isMobileMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-white/95 dark:bg-dark-900/95 backdrop-blur-xl border-t border-dark-200 dark:border-dark-700 overflow-hidden"
          >
            <div className="container-custom px-4 py-4 flex flex-col gap-1 max-h-[70vh] overflow-y-auto">
              {navLinks.map((link) => {
                const isActive = link.href.replace('#', '') === activeTab;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    className={`px-4 py-3 rounded-xl font-bold transition-all duration-200 ${
                      isActive 
                      ? 'bg-primary-50 text-primary-600 dark:bg-primary-500/20 dark:text-primary-400' 
                      : 'text-dark-700 dark:text-dark-200 hover:bg-dark-50 dark:hover:bg-dark-800'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              {!user && (
                 <a href="#auth" onClick={handleNavClick} className="mt-2 text-center px-4 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 font-bold text-white shadow-lg shadow-primary-500/20">
                   {t('nav.login')}
                 </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
