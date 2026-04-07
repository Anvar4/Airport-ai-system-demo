import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const t = (uz, ru, en, kk, tg, tr, tk, ky, fa, fr, de) => ({ uz, ru, en, kk, tg, tr, tk, ky, fa, fr, de });

// ─── SHARED TRANSLATIONS TABLE ───────────────────────────────────────────────
const T = {
  home:        t("Bosh sahifa","Главная","Home","Басты бет","Асосӣ","Ana Sayfa","Baş sahypa","Башкы бет","خانه","Accueil","Startseite"),
  simulator:   t("Q-Simulator","Q-Симулятор","Q-Simulator","Q-Симулятор","Q-Симулятор","Q-Simülatör","Simulýator","Симулятор","شبیه‌ساز","Simulateur","Simulator"),
  analyzer:    t("Risk Analyzer","Анализатор","Risk Analyzer","Тәуекел анализаторы","Таҳлилгар","Risk Analizörü","Analizator","Анализатор","تحلیلگر","Analyseur","Analysator"),
  analytics:   t("AI Analytics","AI Аналитика","AI Analytics","AI Аналитика","AI Аналитика","AI Analitik","Analitika","Аналитика","هوش مصنوعی","Analytique","Analytik"),
  maintenance: t("Smart Maintenance","Техобслуживание","Maintenance","Қызмет көрсету","Хизматрасонӣ","Akıllı Bakım","Bejeriş","Оңдоо","نگهداری","Maintenance","Wartung"),
  report:      t("Umumiy Hisobot","Общий отчет","AI Report","Есеп","Ҳисобот","Rapor","Hasabat","Отчет","گزارش","Rapport","Bericht"),
  login:       t("Kirish","Войти","Login","Кіру","Вуруд","Giriş Yap","Giriş","Кирүү","ورود","Connexion","Anmelden"),
  logout:      t("Tizimdan chiqish","Выйти","Logout","Шығу","Хуруҷ","Çıkış","Çykyş","Чыгуу","خروج","Déconnexion","Abmelden"),
  info:        t("Loyiha haqida","О проекте","About","Жоба туралы","Дар бораи лоиҳа","Proje Hakkında","Taslama barada","Долбоор жөнүндө","درباره پروژه","À propos","Über das Projekt"),

  // Auth
  welcomeTitle: t(
    "AeroAI'ga\nXush Kelibsiz","Добро пожаловать\nв AeroAI","Welcome to\nAeroAI Platform",
    "AeroAI-ға\nҚош келдіңіз","Ба AeroAI\nХуш омадед","AeroAI'a\nHoş Geldiniz",
    "AeroAI-a\nHoş geldiňiz","AeroAI'га\nКош келиңиз","به AeroAI\nخوش آمدید",
    "Bienvenue sur\nAeroAI","Willkommen bei\nAeroAI"
  ),
  welcomeDesc: t(
    "Aeroport yo'lovchi oqimini va xavfsizligini boshqaruvchi AI platforma.",
    "AI-платформа управления пассажиропотоком и безопасностью аэропорта.",
    "AI platform for managing airport passenger flow and security.",
    "Әуежай жолаушы ағымын және қауіпсіздігін басқаратын AI платформасы.",
    "Платформаи AI барои идоракунии ҷараёни мусофирон ва амнияти фурудгоҳ.",
    "Havalimanı yolcu akışı ve güvenliğini yöneten AI platformu.",
    "Howa menziliniň ýolagçy akymyny we howpsuzlygyny dolandyrýan AI platformasy.",
    "Аэропорттун жолоочу агымын жана коопсуздугун башкаруучу AI платформасы.",
    "پلتفرم هوش مصنوعی برای مدیریت جریان مسافران و امنیت فرودگاه.",
    "Plateforme IA pour la gestion des flux passagers et la sécurité aéroportuaire.",
    "KI-Plattform zur Verwaltung von Passagierströmen und Flughafensicherheit."
  ),
  loginTitle:    t("Tizimga kirish","Вход в систему","Sign In","Жүйеге кіру","Вуруд ба система","Giriş Yap","Ulgama giriş","Системага кируу","ورود به سیستم","Connexion","Anmelden"),
  loginDesc:     t("Hisobingizga kiring","Войдите в аккаунт","Log in to your account","Аккаунтыңызға кіріңіз","Ба ҳисоби худ ворид шавед","Hesabınıza giriş yapın","Hasabyňyza giriň","Аккаунтуңузга кириңиз","وارد حساب خود شوید","Connectez-vous à votre compte","In Ihr Konto einloggen"),
  registerTitle: t("Ro'yxatdan o'tish","Регистрация","Create Account","Тіркелу","Бақайдгирӣ","Kayıt Ol","Hasaba alynmak","Каттоо","ثبت نام","Créer un compte","Registrieren"),
  registerDesc:  t("Yangi hisob yarating","Создайте новый аккаунт","Create a new account","Жаңа аккаунт жасаңыз","Ҳисоби нав созед","Yeni hesap oluşturun","Täze hasap dörediň","Жаңы аккаунт түзүңүз","حساب جدید ایجاد کنید","Créer un nouveau compte","Neues Konto erstellen"),
  nameLabel:     t("F.I.SH","Ф.И.О","Full Name","Аты-жөні","Ном","Ad Soyad","Ady","Аты-жөнү","نام","Nom complet","Name"),
  emailLabel:    t("Email","Email","Email","Email","Email","Email","Email","Email","ایمیل","Email","E-Mail"),
  passwordLabel: t("Parol","Пароль","Password","Құпия сөз","Рамз","Şifre","Parol","Сыр сөз","رمز عبور","Mot de passe","Passwort"),
  loginBtn:      t("Kirish","Войти","Sign In","Кіру","Вуруд","Giriş Yap","Giriş","Кирүү","ورود","Se connecter","Einloggen"),
  registerBtn:   t("Ro'yxatdan o'tish","Зарегистрироваться","Sign Up","Тіркелу","Бақайдгирӣ","Kayıt Ol","Hasaba alynmak","Катталуу","ثبت نام","S'inscrire","Registrieren"),
  noAccount:     t("Hisobingiz yo'qmi?","Нет аккаунта?","No account?","Аккаунт жоқ па?","Ҳисоб надоред?","Hesabınız yok mu?","Hasabyňyz ýokmy?","Аккаунтуңуз жокпу?","حساب ندارید؟","Pas de compte?","Kein Konto?"),
  hasAccount:    t("Hisobingiz bormi?","Уже есть аккаунт?","Have an account?","Аккаунт бар ма?","Ҳисоб доред?","Hesabınız var mı?","Hasabyňyz barmy?","Аккаунтуңуз барбы?","حساب دارید؟","Déjà un compte?","Haben Sie ein Konto?"),

  // Hero
  heroBadge:    t("AI Platformasi 2.0","AI Платформа 2.0","AI Platform 2.0","AI Платформасы 2.0","Платформаи AI 2.0","AI Platformu 2.0","AI Platformasy 2.0","AI Платформасы 2.0","پلتفرم AI 2.0","Plateforme IA 2.0","KI-Plattform 2.0"),
  heroTitle1:   t("Aeroport boshqaruvini","Управление аэропортом с","Airport management with","Әуежайды","Идоракунии фурудгоҳ бо","Havalimanı yönetimini","Aýraporty","Аэропортту","کنترل فرودگاه با","Gérez l'aéroport avec","Flughafenmanagement mit"),
  heroHL:       t("Sun'iy Intellekt","Искусственным Интеллектом","Artificial Intelligence","Жасанды Интеллектпен","Зеҳни Сунъӣ","Yapay Zeka","Emeli aň","Жасалма Интеллект","هوش مصنوعی","l'Intelligence Artificielle","Künstlicher Intelligenz"),
  heroTitle2:   t("bilan avtomatlashtiring","","","басқаруды автоматтандырыңыз","","ile otomatikleştirin","bilen dolandyryň","менен автоматташтырыңыз","","",""),
  heroSubtitle: t(
    "Terminal navbatlarini, xavfsizlik tahlilini va uskunalar holatini real vaqtda kuzating.",
    "Мониторинг очередей, анализ безопасности и состояния оборудования в реальном времени.",
    "Monitor terminal queues, security analysis and equipment status in real time.",
    "Терминал кезектерін, қауіпсіздік талдауын және жабдықтар күйін нақты уақытта бақылаңыз.",
    "Навбатҳои терминал, таҳлили амният ва ҳолати таҷҳизотро дар вақти воқеӣ назорат кунед.",
    "Terminal kuyruklarını, güvenlik analizini ve ekipman durumunu gerçek zamanlı izleyin.",
    "Terminal nobatlaryny, howpsuzlyk analizini we enjam ýagdaýyny real wagtda gözegçilik ediň.",
    "Терминал кезектерин, коопсуздук талдоосун жана жабдыктардын абалын реалдуу убакытта көзөмөлдөңүз.",
    "صف‌های ترمینال، تحلیل امنیتی و وضعیت تجهیزات را در زمان واقعی نظارت کنید.",
    "Surveillez les files d'attente, l'analyse de sécurité et l'état des équipements en temps réel.",
    "Überwachen Sie Terminalwarteschlangen, Sicherheitsanalysen und Gerätestatus in Echtzeit."
  ),
  heroStart:    t("Tizimga kirish","Войти в систему","Access System","Жүйеге кіру","Вуруд ба система","Sisteme Gir","Ulgama giriş","Системага кирүү","ورود به سیستم","Accéder","Zugriff"),
  heroInfo:     t("Batafsil","Подробнее","Learn More","Толығырақ","Маълумоти бештар","Daha fazla","Giňişleýin","Кененирээк","بیشتر","En savoir plus","Mehr erfahren"),

  // Module headings
  simTitle:    t("Yo'lovchi oqimi simulyatori","Симулятор пассажиропотока","Passenger Flow Simulator","Жолаушылар ағымының симуляторы","Симулятори ҷараёни мусофирон","Yolcu Akışı Simülatörü","Ýolagçy akym simulýatory","Жолоочулар агымынын симулятору","شبیه‌ساز جریان مسافران","Simulateur de flux passagers","Passagierfluss-Simulator"),
  simDesc:     t("Real vaqtda turli parametrlarni o'zgartirib navbatni optimallashtiring.","Оптимизируйте очередь, изменяя параметры в реальном времени.","Optimize queues by changing parameters in real time.","Нақты уақытта параметрлерді өзгертіп, кезекті оңтайландырыңыз.","Навбатро бо тағйир додани параметрҳо дар вақти воқеӣ оптималӣ кунед.","Gerçek zamanlı parametreler değiştirerek kuyruğu optimize edin.","Real wagtda parametrleri üýtgedip nobaty optimizirläň.","Реалдуу убакытта параметрлерди өзгөртүп, кезекти оптималдаштырыңыз.","با تغییر پارامترها در زمان واقعی صف را بهینه کنید.","Optimisez les files en modifiant les paramètres en temps réel.","Optimieren Sie Warteschlangen durch Parametervorgaben in Echtzeit."),
  riskTitle:   t("Bagaj Xavfsizligi Analizatori","Анализатор безопасности багажа","Baggage Security Analyzer","Багаж қауіпсіздік анализаторы","Анализатори амнияти боркалла","Bagaj Güvenlik Analizörü","Goşuny howpsuzlyk analizatory","Жүк коопсуздук анализатору","آنالیزگر امنیت بار","Analyseur de sécurité bagages","Gepäcksicherheitsanalysator"),
  riskDesc:    t("CV va ML algoritmlari yordamida yukning xavflilik darajasini baholang.","Оценка уровня опасности груза с помощью CV и ML алгоритмов.","Assess baggage risk level using CV and ML algorithms.","CV және ML алгоритмдері арқылы жүктің қауіп деңгейін бағалаңыз.","Дараҷаи хатари бор бо CV ва ML алгоритмҳо арзёбӣ кунед.","CV ve ML algoritmaları kullanarak bagaj risk düzeyini değerlendirin.","CV we ML algoritmlerini ulanyp ýüküň howp derejesini bahalandyryň.","CV жана ML алгоритмдери аркылуу жүктүн коопсуздук деңгээлин баалаңыз.","با الگوریتم‌های CV و ML سطح خطر بار را ارزیابی کنید.","Évaluez le niveau de risque des bagages avec les algorithmes CV et ML.","Bewerten Sie das Gepäckrisiko mit CV- und ML-Algorithmen."),
  analyticsTitle: t("Haftalik Tahlillar va Bashorat","Еженедельная аналитика и прогноз","Weekly Analytics & Forecast","Апталық талдау және болжам","Таҳлили ҳафтагӣ ва пешгӯӣ","Haftalık Analiz ve Tahmin","Hepdelik seljermeler we çaklamalar","Жумалык аналитика жана болжом","تحلیل هفتگی و پیش‌بینی","Analyse hebdomadaire et prévisions","Wöchentliche Analyse & Prognose"),
  analyticsDesc: t("Yo'lovchilar oqimi va parvoz kechikishlarini AI bashoratlar orqali tahlil qiling.","Анализ пассажиропотока и задержек рейсов через AI-прогнозы.","Analyze passenger flow and flight delays through AI forecasts.","Жолаушылар ағымы мен рейс кешігуін AI болжамдар арқылы талдаңыз.","Ҷараёни мусофиронро бо пешгӯиҳои AI таҳлил кунед.","Yolcu akışını ve uçuş gecikmelerini AI tahminleriyle analiz edin.","Ýolagçy akymyny we uçuş gijikmelerini AI çaklamalary arkaly seljeriň.","Жолоочулар агымын жана кечигүүлөрдү AI болжомдор аркылуу анализдеңиз.","جریان مسافران و تأخیرات پرواز را از طریق پیش‌بینی‌های هوش مصنوعی تحلیل کنید.","Analysez les flux passagers et retards via les prévisions IA.","Analysieren Sie Passagierströme und Verspätungen durch KI-Prognosen."),
  mainTitle:   t("Aqlli Profilaktika","Умное техобслуживание","Smart Maintenance","Ақылды техқызмет","Нигоҳдории оқилона","Akıllı Bakım","Akylly hyzmat","Акылдуу тейлөө","نگهداری هوشمند","Maintenance Intelligente","Intelligente Wartung"),
  mainDesc:    t("Aeroport uskunalari sensorlari orqali nosozlikni oldindan aniqlang.","Предсказывайте поломки оборудования аэропорта через датчики.","Predict airport equipment failures through sensors.","Датчиктер арқылы ұшу аймағы жабдықтарының ақауларын болжаңыз.","Тавассути сенсорҳо хатои таҷҳизоти фурудгоҳро пешгӯӣ кунед.","Sensörler aracılığıyla havalimanı ekipman arızalarını önceden tahmin edin.","Sensorlar arkaly howa menzili enjamynyň döwülmegini öňünden çaklaň.","Сенсорлор аркылуу аэропорт жабдыктарынын бузулушун алдын ала болжолдоңуз.","از طریق سنسورها خرابی‌های تجهیزات فرودگاه را پیش‌بینی کنید.","Prédisez les pannes d'équipements via les capteurs.","Prognostizieren Sie Geräteausfälle über Sensoren."),
  reportTitle: t("Umumiy AI Hisobot","Общий AI Отчет","General AI Report","Жалпы AI есебі","Ҳисоботи умумии AI","Genel AI Raporu","Umumy AI hasabat","Жалпы AI Отчет","گزارش کلی هوش مصنوعی","Rapport IA Général","Allgemeiner KI-Bericht"),

  // Footer
  footerDesc:  t("Aeroportlarda AI asosida operatsiyalarni boshqarish bo'yicha ilmiy-amaliy platforma.","Научно-практическая платформа управления аэропортом на основе ИИ.","Scientific-practical AI airport operations management platform.","Ауежайда AI негізінде операцияларды басқару платформасы.","Платформаи илмию амалии идоракунии фурудгоҳ дар асоси AI.","Havalimanı AI tabanlı operasyon yönetim platformu.","Howa menzilini AI esasynda dolandyrmak üçin ylmy-amaly platforma.","Аэропортту AI негизинде башкаруу илимий-практикалык платформасы.","پلتفرم علمی-عملی مدیریت عملیات فرودگاه مبتنی بر هوش مصنوعی.","Plateforme scientifique et pratique de gestion aéroportuaire basée sur l'IA.","Wissenschaftlich-praktische KI-basierte Flughafenmanagement-Plattform."),
  footerModules: t("Modullar","Модули","Modules","Модульдер","Модулҳо","Modüller","Modullar","Модулдер","ماژول‌ها","Modules","Module"),
  footerAuthor: t("Loyiha Muallifi","Автор проекта","Project Author","Жоба авторы","Муаллифи лоиҳа","Proje Yazarı","Taslamanyň awtory","Долбоор автору","نویسنده پروژه","Auteur du projet","Projektautor"),
  allRights:   t("Barcha huquqlar himoyalangan.","Все права защищены.","All rights reserved.","Барлық құқықтар қорғалған.","Ҳамаи ҳуқуқҳо муҳофизат карда мешаванд.","Tüm hakları saklıdır.","Ähli hukuklar goralan.","Бардык укуктар корголгон.","تمامی حقوق محفوظ است.","Tous droits réservés.","Alle Rechte vorbehalten."),
};

// ─── BUILD RESOURCES OBJECT ──────────────────────────────────────────────────
const LANGS = ['uz','ru','en','kk','tg','tr','tk','ky','fa','fr','de'];

const resources = {};
LANGS.forEach((lang, idx) => {
  resources[lang] = {
    translation: {
      nav: {
        home: T.home[lang], simulator: T.simulator[lang], analyzer: T.analyzer[lang],
        analytics: T.analytics[lang], maintenance: T.maintenance[lang],
        report: T.report[lang], login: T.login[lang], logout: T.logout[lang], info: T.info[lang],
      },
      auth: {
        welcomeTitle: T.welcomeTitle[lang], welcomeDesc: T.welcomeDesc[lang],
        loginTitle: T.loginTitle[lang], loginDesc: T.loginDesc[lang],
        registerTitle: T.registerTitle[lang], registerDesc: T.registerDesc[lang],
        name: T.nameLabel[lang], email: T.emailLabel[lang], password: T.passwordLabel[lang],
        loginBtn: T.loginBtn[lang], registerBtn: T.registerBtn[lang],
        noAccount: T.noAccount[lang], hasAccount: T.hasAccount[lang],
      },
      hero: {
        badge: T.heroBadge[lang], title1: T.heroTitle1[lang],
        titleHighlight: T.heroHL[lang], title2: T.heroTitle2[lang],
        subtitle: T.heroSubtitle[lang], startBtn: T.heroStart[lang], infoBtn: T.heroInfo[lang],
      },
      modules: {
        simTitle: T.simTitle[lang], simDesc: T.simDesc[lang],
        riskTitle: T.riskTitle[lang], riskDesc: T.riskDesc[lang],
        analyticsTitle: T.analyticsTitle[lang], analyticsDesc: T.analyticsDesc[lang],
        mainTitle: T.mainTitle[lang], mainDesc: T.mainDesc[lang],
        reportTitle: T.reportTitle[lang],
      },
      footer: {
        desc: T.footerDesc[lang], modules: T.footerModules[lang],
        author: T.footerAuthor[lang], allRights: T.allRights[lang],
      },
    }
  };
});

// ─── INIT ─────────────────────────────────────────────────────────────────────
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('site_lang') || 'uz',
    fallbackLng: 'uz',
    interpolation: { escapeValue: false },
  });

export default i18n;
