import { useTranslation } from 'react-i18next';
import { HiHeart, HiAcademicCap } from 'react-icons/hi';
import { FaTelegram, FaGithub, FaLinkedin } from 'react-icons/fa';

// Logo component — reused from Header
export function AeroLogo({ size = 10 }) {
  return (
    <div className={`w-${size} h-${size} rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/25 shrink-0`}>
      <img src="/logo.svg" alt="AeroAI Logo" className="w-3/4 h-3/4 object-contain" />
    </div>
  );
}

export default function Footer() {
  const { t } = useTranslation();

  const footerLinks = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.simulator'), href: '#simulator' },
    { label: t('nav.analyzer'), href: '#analyzer' },
    { label: t('nav.analytics'), href: '#analytics' },
    { label: t('nav.maintenance'), href: '#maintenance' },
    { label: t('nav.report'), href: '#report' },
  ];

  return (
    <footer className="bg-dark-900 dark:bg-dark-950 text-dark-300 border-t border-dark-800">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg">
                <img src="/logo.svg" alt="AeroAI" className="w-7 h-7 object-contain" />
              </div>
              <div>
                <span className="text-lg font-black text-white">Aero<span className="text-primary-400">AI</span></span>
                <p className="text-xs text-dark-500 -mt-0.5">Airport Intelligence System</p>
              </div>
            </div>
            <p className="text-dark-400 text-sm leading-relaxed max-w-xs">
              {t('footer.desc')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.modules')}</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-dark-400 hover:text-primary-400 transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Author */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.author')}</h3>
            <div className="space-y-3 mb-6 bg-dark-800/50 p-4 rounded-xl border border-dark-800">
              <div className="flex items-start gap-3">
                <HiAcademicCap className="text-primary-400 text-2xl shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-white">Tangirova Barchinoy</p>
                  <p className="text-xs text-dark-400 mt-1">Axborot texnologiyalari fakulteti</p>
                  <p className="text-xs text-dark-400">4-bosqich KIDT talabasi</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-800 pt-8 mt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-dark-500">
              © {new Date().getFullYear()} AeroAI Airport System. {t('footer.allRights')}
            </p>
            <div className="flex gap-3">
              {[FaTelegram, FaGithub, FaLinkedin].map((Icon, i) => (
                <a key={i} href="#"
                  className="w-10 h-10 rounded-xl bg-dark-800 hover:bg-primary-600 flex items-center justify-center text-dark-400 hover:text-white transition-all duration-200">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
