import { AnimatePresence, motion as Motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HiArrowRight, HiLockClosed, HiMail, HiUser } from 'react-icons/hi';
import { useAuth } from '../context/AuthContext';

export default function AuthPage() {
  const { t } = useTranslation();
  const { login, register } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const redirectToHome = () => {
    window.location.hash = 'home';
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (isLogin) {
      const res = login(formData.email, formData.password);
      if (!res.success) {
        setError(res.error);
      } else {
        redirectToHome();
      }
    } else {
      if (!formData.name || !formData.email || !formData.password) {
        setError("Barcha maydonlarni to'ldiring"); // Keeping functional errors untranslated for quick scope
        return;
      }
      const res = register(formData.name, formData.email, formData.password);
      if (!res.success) {
        setError(res.error);
      } else {
        redirectToHome();
      }
    }
  };

  return (
    <div className="min-h-screen flex bg-dark-50 dark:bg-dark-950 font-sans">
      <div className="hidden lg:flex lg:w-1/2 relative bg-linear-to-br from-primary-900 to-dark-900 overflow-hidden items-center justify-center p-12">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary-400 via-transparent to-transparent bg-size-[50px_50px]" />

        <div className="relative z-10 w-full max-w-lg text-white">
          <div className="mb-8 inline-flex items-center gap-4 notranslate">
            <img src="/logo.svg" alt="AeroAI Logo" className="w-16 h-16 rounded-2xl object-contain shadow-xl shadow-primary-500/35 animate-float" />
            <div>
              <h1 className="text-5xl font-black leading-none">AeroAI</h1>
              <p className="text-2xl text-primary-100/70 font-semibold mt-2">Airport Intelligence</p>
            </div>
          </div>
          <h2 className="text-4xl font-extrabold mb-4 leading-tight whitespace-pre-wrap">{t('auth.welcomeTitle')}</h2>
          <p className="text-primary-100/80 text-lg mb-8 leading-relaxed">
            {t('auth.welcomeDesc')}
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative">
        {/* <div className="absolute top-8 left-6 sm:left-8">
          <a href="#home" className="inline-flex items-center gap-2 notranslate">
            <img src="/logo.svg" alt="AeroAI Logo" className="w-9 h-9 rounded-lg object-contain shadow-md shadow-primary-500/20" />
            <span className="text-sm sm:text-base font-extrabold text-dark-700 dark:text-dark-100">AeroAI</span>
          </a>
        </div> */}

        <div className="absolute top-8 right-8">
          <a href="/" className="text-sm font-semibold text-dark-500 hover:text-primary-500 transition-colors">{t('nav.home')}</a>
        </div>

        <div className="w-full max-w-md">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-5 notranslate">
                <img src="/logo.svg" alt="AeroAI Logo" className="w-11 h-11 rounded-xl object-contain shadow-md shadow-primary-500/20" />
                <div>
                  <p className="text-xl font-extrabold text-dark-800 dark:text-white leading-none">AeroAI</p>
                  <p className="text-xs text-dark-500 dark:text-dark-400 mt-1">Airport Intelligence</p>
                </div>
              </div>
              <h2 className="text-3xl font-extrabold text-dark-800 dark:text-white mb-2">
                {isLogin ? t('auth.loginTitle') : t('auth.registerTitle')}
              </h2>
              <p className="text-dark-500 dark:text-dark-400">
                {isLogin ? t('auth.loginDesc') : t('auth.registerDesc')}
              </p>
            </div>

            {error && (
              <Motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mb-6 p-4 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 rounded-xl text-sm font-medium">
                {error}
              </Motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <AnimatePresence mode="wait">
                {!isLogin && (
                  <Motion.div
                    key="name"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <label className="text-sm font-bold text-dark-700 dark:text-dark-300 mb-1.5 flex items-center gap-2">
                      {t('auth.name')} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <HiUser className="text-dark-400 text-lg" />
                      </div>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-700 text-dark-800 dark:text-white placeholder-dark-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all shadow-sm"
                        placeholder="John Doe"
                      />
                    </div>
                  </Motion.div>
                )}
              </AnimatePresence>

              <div>
                <label className="text-sm font-bold text-dark-700 dark:text-dark-300 mb-1.5 flex items-center gap-2">
                  {t('auth.email')} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <HiMail className="text-dark-400 text-lg" />
                  </div>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-700 text-dark-800 dark:text-white placeholder-dark-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all shadow-sm"
                    placeholder="admin@aihub.co"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-sm font-bold text-dark-700 dark:text-dark-300 flex items-center gap-2">
                    {t('auth.password')} <span className="text-red-500">*</span>
                  </label>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <HiLockClosed className="text-dark-400 text-lg" />
                  </div>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-700 text-dark-800 dark:text-white placeholder-dark-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all shadow-sm"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full group mt-6 bg-linear-to-r from-primary-600 to-accent-600 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isLogin ? t('auth.loginBtn') : t('auth.registerBtn')}
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="mt-8 text-center border-t border-dark-100 dark:border-dark-800 pt-6">
              <p className="text-sm text-dark-500 dark:text-dark-400">
                {isLogin ? t('auth.noAccount') : t('auth.hasAccount')}
                <button
                  onClick={() => { setIsLogin(!isLogin); setError(''); setFormData({ name: '', email: '', password: '' }); }}
                  className="ml-2 font-bold text-primary-600 dark:text-primary-400 hover:underline"
                >
                  {isLogin ? t('auth.registerBtn') : t('auth.loginBtn')}
                </button>
              </p>
            </div>
          </Motion.div>
        </div>
      </div>
    </div>
  );
}
