import { motion } from "framer-motion";
import {
  Camera,
  Cpu,
  Brain,
  Languages,
  WifiOff,
  Volume2,
  GraduationCap,
  Trophy,
} from "lucide-react";
import { useLang } from "../context/LanguageContext";
import logoImg from "../assets/signbridge_logo_transparent.png";
import taylorsLogo from "../assets/about/taylorsLogo.png";
import darbLogo from "../assets/about/darbLogo.png";
const INSTAGRAM_URL = "https://instagram.com/sign_bridge.ar";
const INSTAGRAM_HANDLE = "@sign_bridge.ar";

/* Custom Instagram brand SVG */
const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="ftrIgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F58529" />
        <stop offset="50%" stopColor="#DD2A7B" />
        <stop offset="100%" stopColor="#8134AF" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#ftrIgGrad)" strokeWidth="2" />
    <circle cx="12" cy="12" r="4" stroke="url(#ftrIgGrad)" strokeWidth="2" />
    <circle cx="17.5" cy="6.5" r="1" fill="url(#ftrIgGrad)" />
  </svg>
);

/* Yemen flag circular badge */
const YemenFlag = ({ size = 44 }) => (
  <div
    className="rounded-full overflow-hidden border-2 border-secondary/40 shrink-0"
    style={{
      width: size,
      height: size,
      boxShadow: "0 0 15px rgba(45,191,160,0.4)",
    }}
  >
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 bg-[#CE1126]" />
      <div className="flex-1 bg-white" />
      <div className="flex-1 bg-black" />
    </div>
  </div>
);

const content = {
  en: {
    /* Left column */
    tagline: "Giving Voice to the Silent",
    description:
      "AI-powered communication that translates Arabic sign language into speech and text — bridging the gap and creating a more inclusive world.",
    universityName: "Taylor's University",
    universityDept: "School of Computing & IT",
    universityLocation: "Malaysia",
    followLabel: "Follow our journey",

    /* Middle column */
    componentsTitle: "Project Components",
    components: [
      {
        icon: <Camera size={18} />,
        title: "Smart Camera (16MP Autofocus)",
        desc: "Captures clear hand gestures in real-time.",
      },
      {
        icon: <Cpu size={18} />,
        title: "Raspberry Pi 5 Processing",
        desc: "Powerful and efficient edge computing.",
      },
      {
        icon: <Brain size={18} />,
        title: "AI Gesture Recognition (94.3%)",
        desc: "High-accuracy recognition using MediaPipe.",
      },
      {
        icon: <Languages size={18} />,
        title: "Real-time Translation",
        desc: "Instant Arabic sign to text & speech.",
      },
      {
        icon: <WifiOff size={18} />,
        title: "Offline System (No Cloud)",
        desc: "Works without internet. 100% local.",
      },
      {
        icon: <Volume2 size={18} />,
        title: "Audio Output (Arabic TTS)",
        desc: "Clear voice output for better understanding.",
      },
    ],

    /* Right column */
    hackathonTitle: "Hackathon",
    darbName: "DARB Hackathon 2025",
    darbTrack: "Built for Accessibility Track",
    darbDesc: "Real-world AI solution for communication and inclusion.",
    yemenTitle: "Proudly Built in Yemen",
    yemenDesc: "Made with passion, purpose, and innovation.",
    affiliatedWith: "Affiliated with",

    /* Bottom */
    copyright: "© 2026 SignBridge. All rights reserved.",
  },
  ar: {
    tagline: "إعطاء صوت للصامتين",
    description:
      "نستخدم الذكاء الاصطناعي لتحويل لغة الإشارة العربية إلى كلام ونص في الوقت الحقيقي، لربط الفجوة في التواصل وبناء عالم أكثر شمولاً.",
    universityName: "جامعة تايلورز",
    universityDept: "كلية الحوسبة وتقنية المعلومات",
    universityLocation: "ماليزيا",
    followLabel: "تابع رحلتنا",

    componentsTitle: "مكونات المشروع",
    components: [
      {
        icon: <Camera size={18} />,
        title: "كاميرا ذكية (16 ميجابكسل)",
        desc: "تلتقط حركات اليد بوضوح في الوقت الحقيقي.",
      },
      {
        icon: <Cpu size={18} />,
        title: "معالجة قوية (Raspberry Pi 5)",
        desc: "أداء عالٍ وكفاءة في المعالجة الطرفية.",
      },
      {
        icon: <Brain size={18} />,
        title: "التعرف على الإشارات (94.3%)",
        desc: "دقة عالية باستخدام نموذج ذكاء اصطناعي متطور.",
      },
      {
        icon: <Languages size={18} />,
        title: "ترجمة فورية",
        desc: "تحويل الإشارة العربية إلى نص وكلام فوراً.",
      },
      {
        icon: <WifiOff size={18} />,
        title: "نظام يعمل بدون إنترنت",
        desc: "يعمل بالكامل دون الحاجة إلى اتصال بالإنترنت.",
      },
      {
        icon: <Volume2 size={18} />,
        title: "إخراج صوتي (نطق عربي)",
        desc: "إخراج صوتي واضح وطبيعي لتحسين الفهم.",
      },
    ],

    hackathonTitle: "هاكاثون",
    darbName: "هاكاثون DARB 2025",
    darbTrack: "مسار الحلول التقنية لإتاحة الوصول",
    darbDesc: "حلول ذكاء اصطناعي واقعية تحدث تأثيراً حقيقياً في التواصل.",
    yemenTitle: "نفخر بأننا صنعنا في اليمن",
    yemenDesc: "صُنع بشغف، بهدف، وابتكار من أجل مستقبل أفضل.",
    affiliatedWith: "بالشراكة مع",

    copyright: "© 2026 SignBridge. جميع الحقوق محفوظة.",
  },
};

export default function Footer() {
  const { lang } = useLang();
  const c = content[lang];
  const isRTL = lang === "ar";

  return (
    <footer className="relative bg-bg overflow-hidden border-t border-white/8">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-primary/60 blur-md rounded-full" />

      {/* Background ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-card/10 to-bg" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/6 rounded-full blur-3xl" />

      {/* Decorative dots */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${(i * 53) % 100}%`,
            top: `${(i * 37) % 100}%`,
            background: i % 2 === 0 ? "#6C3DE8" : "#2DBFA0",
            boxShadow: `0 0 4px ${i % 2 === 0 ? "#6C3DE8" : "#2DBFA0"}`,
          }}
          animate={{ opacity: [0.2, 0.7, 0.2], scale: [1, 1.3, 1] }}
          transition={{ duration: 2 + (i % 3), repeat: Infinity, delay: i * 0.2 }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-10 ${isRTL ? "lg:[direction:rtl]" : ""}`}>

          {/* ─────── COLUMN 1: Brand + University + Social ─────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={isRTL ? "text-right" : "text-left"}
          >
            {/* Logo */}
            <div className={`flex items-center gap-3 mb-4 ${isRTL ? "flex-row-reverse" : ""}`}>
              <img src={logoImg} alt="SignBridge" className="h-12 w-auto" />
              <div className="flex items-center gap-1">
                <span className="text-2xl font-extrabold text-primary">Sign</span>
                <span className="text-2xl font-extrabold text-secondary">Bridge</span>
              </div>
            </div>

            {/* Tagline */}
            <p
              className={`text-secondary font-bold text-base mb-4 ${lang === "ar" ? "font-arabic" : ""}`}
              style={{ textShadow: "0 0 15px rgba(45,191,160,0.4)" }}
            >
              {c.tagline}
            </p>

            {/* Description */}
            <p className={`text-white/55 text-sm leading-relaxed mb-6 ${lang === "ar" ? "font-arabic" : ""}`}>
              {c.description}
            </p>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

            {/* University block */}
            <div className={`flex items-start gap-3 mb-6 ${isRTL ? "flex-row-reverse" : ""}`}>
              <div
                className="w-11 h-11 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shrink-0"
                style={{ boxShadow: "0 0 12px rgba(108,61,232,0.3)" }}
              >
                <GraduationCap size={20} />
              </div>
              <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
                <h4 className={`text-white font-bold text-base mb-0.5 ${lang === "ar" ? "font-arabic" : ""}`}>
                  {c.universityName}
                </h4>
                <p className={`text-white/55 text-xs leading-tight ${lang === "ar" ? "font-arabic" : ""}`}>
                  {c.universityDept}
                </p>
                <p className={`text-white/55 text-xs leading-tight ${lang === "ar" ? "font-arabic" : ""}`}>
                  {c.universityLocation}
                </p>
              </div>
            </div>

            {/* Follow our journey */}
            <div>
              <p
                className={`text-white text-sm font-semibold mb-3 ${lang === "ar" ? "font-arabic" : ""}`}
              >
                {c.followLabel}
              </p>
              <motion.a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, x: isRTL ? -3 : 3 }}
                className={`inline-flex items-center gap-3 px-3 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-pink-500/30 transition-all ${isRTL ? "flex-row-reverse" : ""}`}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                  <InstagramIcon size={20} />
                </div>
                <span className="text-white text-sm font-semibold">{INSTAGRAM_HANDLE}</span>
              </motion.a>
            </div>
          </motion.div>

          {/* ─────── COLUMN 2: Project Components ─────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={isRTL ? "text-right" : "text-left"}
          >
            <h3 className={`text-white text-xl font-bold mb-6 ${lang === "ar" ? "font-arabic" : ""}`}>
              {c.componentsTitle}
            </h3>

            <div className="flex flex-col gap-3">
              {c.components.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isRTL ? 10 : -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`flex items-start gap-3 pb-3 border-b border-white/5 last:border-b-0 ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/25 flex items-center justify-center text-primary shrink-0"
                    style={{ boxShadow: "0 0 8px rgba(108,61,232,0.2)" }}
                  >
                    {item.icon}
                  </div>
                  <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
                    <h4
                      className={`text-white text-sm font-bold mb-0.5 ${lang === "ar" ? "font-arabic" : ""}`}
                    >
                      {item.title}
                    </h4>
                    <p
                      className={`text-white/50 text-xs leading-tight ${lang === "ar" ? "font-arabic" : ""}`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ─────── COLUMN 3: Hackathon + Yemen + Taylor's ─────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={isRTL ? "text-right" : "text-left"}
          >
            <h3 className={`text-white text-xl font-bold mb-4 ${lang === "ar" ? "font-arabic" : ""}`}>
              {c.hackathonTitle}
            </h3>

            {/* DARB Hackathon Card */}
            <motion.div
              whileHover={{ y: -2 }}
              className="bg-card/40 backdrop-blur-sm border border-primary/20 rounded-xl p-5 mb-5 hover:border-primary/40 transition-all"
              style={{ boxShadow: "0 0 20px rgba(108,61,232,0.08)" }}
            >
             <div className={`flex items-start gap-3 mb-3 ${isRTL ? "flex-row-reverse" : ""}`}>
  <div
    className="bg-white rounded-lg shrink-0 overflow-hidden"
    style={{ width: "60px", height: "50px", boxShadow: "0 0 10px rgba(108,61,232,0.3)" }}
  >
    <img
      src={darbLogo}
      alt="Darb Hackathon 2025"
      className="w-full h-full object-cover"
    />
  </div>
  <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
    <h4 className={`text-white text-sm font-bold mb-0.5 ${lang === "ar" ? "font-arabic" : ""}`}>
      {c.darbName}
    </h4>
    <p
      className={`text-primary text-xs font-semibold ${lang === "ar" ? "font-arabic" : ""}`}
    >
      {c.darbTrack}
    </p>
  </div>
</div>
              <div className="h-px bg-white/10 mb-3" />
              <p className={`text-white/55 text-xs leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>
                {c.darbDesc}
              </p>
            </motion.div>

            {/* Yemen Pride */}
            <div className={`flex items-start gap-3 mb-6 ${isRTL ? "flex-row-reverse" : ""}`}>
              <YemenFlag size={48} />
              <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
                <h4
                  className={`text-secondary text-base font-bold mb-1 ${lang === "ar" ? "font-arabic" : ""}`}
                  style={{ textShadow: "0 0 12px rgba(45,191,160,0.4)" }}
                >
                  {c.yemenTitle}
                </h4>
                <p className={`text-white/55 text-xs leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>
                  {c.yemenDesc}
                </p>
              </div>
            </div>

            {/* Affiliated with */}
            <div>
              <p
                className={`text-primary text-sm font-bold mb-3 ${lang === "ar" ? "font-arabic" : ""}`}
              >
                {c.affiliatedWith}
              </p>
              <motion.div
                whileHover={{ y: -2 }}
                className="bg-card/40 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-primary/30 transition-all"
              >
                <div className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <div
                    className="bg-white rounded-lg shrink-0 overflow-hidden"
                    style={{ width: "60px", height: "50px" }}
                  >
                    <img
                      src={taylorsLogo}
                      alt="Taylor's University"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
                    <h4 className={`text-white text-sm font-bold mb-0.5 ${lang === "ar" ? "font-arabic" : ""}`}>
                      {c.universityName}
                    </h4>
                    <p className={`text-white/55 text-[11px] leading-tight ${lang === "ar" ? "font-arabic" : ""}`}>
                      {c.universityDept}
                    </p>
                    <p className={`text-white/55 text-[11px] leading-tight ${lang === "ar" ? "font-arabic" : ""}`}>
                      {c.universityLocation}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ─────── BOTTOM BAR ─────── */}
        <div className="mt-12 pt-6 relative">
          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent mb-6" />

          {/* Centered Instagram + copyright */}
          <div className="flex flex-col items-center gap-4">
            <motion.a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-12 h-12 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-pink-500/40 flex items-center justify-center transition-all"
            >
              <InstagramIcon size={22} />
            </motion.a>

            <p className={`text-white/50 text-sm ${lang === "ar" ? "font-arabic" : ""}`}>
              <span>© 2026 </span>
              <span
                className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent font-semibold"
              >
                SignBridge
              </span>
              <span>. {lang === "ar" ? "جميع الحقوق محفوظة." : "All rights reserved."}</span>
            </p>
          </div>
        </div>

        {/* Bottom glow line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-secondary/40 blur-md rounded-full" />
      </div>
    </footer>
  );
}