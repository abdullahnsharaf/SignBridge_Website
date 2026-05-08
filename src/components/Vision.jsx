import { motion } from "framer-motion";
import {
  Eye,
  Database,
  Brain,
  Mic,
  UserCircle,
  GraduationCap,
  Building2,
  Users,
  Heart,
} from "lucide-react";
import { useLang } from "../context/LanguageContext";
import logoImg from "../assets/signbridge_logo_transparent.png";

const content = {
  en: {
    badge: "VISION",
    title1: "A Future Where Communication Has",
    title2: "No Barriers",
    subtitle:
      "We envision a world where Arabic sign language users can communicate naturally, privately, and instantly — anywhere.",

    visionTitle: "Our Vision",
    visionQuote:
      "To make real-time Arabic sign language translation accessible, affordable, and offline for every deaf person who needs it.",

    futureDirectionTitle: "Our Future Direction",
    futureDirections: [
      {
        icon: <Database size={20} />,
        title: "Expand the Arabic sign dataset",
        desc: "Increase the number of samples for better detection.",
      },
      {
        icon: <Brain size={20} />,
        title: "Improve model accuracy",
        desc: "Use advanced deep learning and hyperparameter tuning.",
      },
      {
        icon: <Mic size={20} />,
        title: "Add offline speech-to-text (Flow 1)",
        desc: "Develop a mode to translate speech to text offline on the device.",
      },
      {
        icon: <UserCircle size={20} />,
        title: "Introduce avatar-based translation (Flow 2)",
        desc: "Develop a feature that displays sign language using an avatar.",
      },
    ],

    impactTitle: "Our Long-Term Impact",
    impacts: [
      {
        icon: <GraduationCap size={28} />,
        title: "Education",
        desc: "Supporting deaf students in learning environments and empowering their future.",
      },
      {
        icon: <Building2 size={28} />,
        title: "Public Services",
        desc: "Enhancing communication in hospitals, offices, and public spaces for better accessibility.",
      },
      {
        icon: <Users size={28} />,
        title: "Daily Life",
        desc: "Making everyday conversations easier and creating a more inclusive society.",
      },
    ],

    finalQuote1: "Our vision is not only to build a device —",
    finalQuote2: "it is to build understanding.",
  },
  ar: {
    badge: "الرؤية",
    title1: "مستقبل بلا حواجز في",
    title2: "التواصل",
    subtitle:
      "نتطلع إلى عالم يستطيع فيه مستخدمو لغة الإشارة العربية التواصل بشكل طبيعي وخاص وفوري — في أي مكان.",

    visionTitle: "رؤيتنا",
    visionQuote:
      "جعل ترجمة لغة الإشارة العربية في الوقت الفعلي متاحة وميسرة وقابلة للعمل بدون إنترنت لكل شخص أصم يحتاجها.",

    futureDirectionTitle: "توجهنا المستقبلي",
    futureDirections: [
      {
        icon: <Database size={20} />,
        title: "توسيع مجموعة بيانات الإشارات العربية",
        desc: "زيادة عدد العينات لكشف أدق وأفضل.",
      },
      {
        icon: <Brain size={20} />,
        title: "تحسين دقة النموذج",
        desc: "استخدام تقنيات التعلم العميق المتقدمة وضبط المعاملات.",
      },
      {
        icon: <Mic size={20} />,
        title: "إضافة تحويل الكلام إلى نص بدون إنترنت (المسار 1)",
        desc: "تطوير وضع لترجمة الكلام إلى نص بدون اتصال على الجهاز.",
      },
      {
        icon: <UserCircle size={20} />,
        title: "ترجمة بواسطة شخصية افتراضية (المسار 2)",
        desc: "تطوير ميزة تعرض لغة الإشارة باستخدام شخصية افتراضية.",
      },
    ],

    impactTitle: "أثرنا على المدى البعيد",
    impacts: [
      {
        icon: <GraduationCap size={28} />,
        title: "التعليم",
        desc: "دعم الطلاب الصم في بيئات التعلم وتمكينهم لمستقبل أفضل.",
      },
      {
        icon: <Building2 size={28} />,
        title: "الخدمات العامة",
        desc: "تعزيز التواصل في المستشفيات والمكاتب والأماكن العامة للوصول الأفضل.",
      },
      {
        icon: <Users size={28} />,
        title: "الحياة اليومية",
        desc: "تسهيل المحادثات اليومية وبناء مجتمع أكثر شمولاً.",
      },
    ],

    finalQuote1: "رؤيتنا ليست فقط بناء جهاز —",
    finalQuote2: "بل بناء التفاهم.",
  },
};

/* Globe SVG decoration */
function GlobeDecoration({ size = 180 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      <defs>
        <radialGradient id="globeGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6C3DE8" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#6C3DE8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="80" fill="url(#globeGrad)" />
      {/* Globe wireframe with continents-like dots */}
      <circle cx="100" cy="100" r="80" stroke="#6C3DE8" strokeWidth="0.8" fill="none" opacity="0.5" />
      {/* Latitude lines */}
      {[20, 40, 60, 80, 100, 120, 140, 160, 180].map((y, i) => {
        const radius = Math.sqrt(80 * 80 - (y - 100) * (y - 100));
        if (isNaN(radius)) return null;
        return (
          <ellipse
            key={i}
            cx="100"
            cy="100"
            rx={radius}
            ry="12"
            stroke="#6C3DE8"
            strokeWidth="0.5"
            fill="none"
            opacity="0.4"
          />
        );
      })}
      {/* Longitude lines */}
      {[0, 30, 60, 90, 120, 150].map((angle, i) => (
        <ellipse
          key={i}
          cx="100"
          cy="100"
          rx="20"
          ry="80"
          stroke="#6C3DE8"
          strokeWidth="0.5"
          fill="none"
          opacity="0.4"
          transform={`rotate(${angle} 100 100)`}
        />
      ))}
      {/* Dot pattern overlay */}
      {Array.from({ length: 60 }).map((_, i) => {
        const angle = (i / 60) * 360 * (Math.PI / 180);
        const radius = 30 + (i % 3) * 20;
        const x = 100 + Math.cos(angle) * radius;
        const y = 100 + Math.sin(angle) * radius;
        return (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r="0.8"
            fill="#A78BFA"
            animate={{ opacity: [0.3, 0.9, 0.3] }}
            transition={{ duration: 2, delay: i * 0.05, repeat: Infinity }}
          />
        );
      })}
    </svg>
  );
}

/* Hand with waveform decoration (left) */
function HandWaveformDecoration({ size = 140 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 140 140" fill="none">
      <defs>
        <linearGradient id="handVisionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6C3DE8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#2DBFA0" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      {/* Circle background */}
      <circle cx="70" cy="70" r="62" stroke="url(#handVisionGrad)" strokeWidth="1.5" fill="none" opacity="0.4" />
      <circle cx="70" cy="70" r="55" stroke="url(#handVisionGrad)" strokeWidth="0.8" fill="none" opacity="0.2" />
      {/* Hand */}
      <motion.path
        d="M50 100 L50 70 Q50 62 56 62 L56 35 Q56 28 62 28 Q68 28 68 35 L68 60 L72 60 L72 30 Q72 22 78 22 Q84 22 84 30 L84 60 L88 60 L88 38 Q88 32 92 32 Q96 32 96 38 L96 65 L82 90 L82 100 Z"
        stroke="url(#handVisionGrad)"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      />
      {/* Sound waves on right */}
      {[0, 1, 2, 3].map((i) => (
        <motion.path
          key={i}
          d={`M${100 + i * 5} ${50 + i * 3} Q${110 + i * 5} ${70} ${100 + i * 5} ${90 - i * 3}`}
          stroke="#6C3DE8"
          strokeWidth="1.5"
          fill="none"
          opacity={0.7 - i * 0.15}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
        />
      ))}
    </svg>
  );
}

export default function Vision() {
  const { lang } = useLang();
  const c = content[lang];
  const isRTL = lang === "ar";

  return (
    <section id="vision" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-card/15 to-bg" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-secondary/8 rounded-full blur-3xl" />

      {/* Decorative dots */}
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${(i * 53) % 100}%`,
            top: `${(i * 37) % 100}%`,
            background: i % 2 === 0 ? "#6C3DE8" : "#2DBFA0",
            boxShadow: `0 0 4px ${i % 2 === 0 ? "#6C3DE8" : "#2DBFA0"}`,
          }}
          animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.3, 1] }}
          transition={{ duration: 2 + (i % 3), repeat: Infinity, delay: i * 0.2 }}
        />
      ))}

      {/* Hand decoration (top-left) */}
      <div className="absolute top-12 left-4 md:left-12 opacity-80 hidden md:block">
        <HandWaveformDecoration size={140} />
      </div>

      {/* Globe decoration (top-right) */}
      <div className="absolute top-8 right-4 md:right-12 opacity-70 hidden md:block">
        <GlobeDecoration size={180} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Badge with decorative lines */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="hidden sm:block w-16 h-px bg-gradient-to-r from-transparent to-secondary/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-secondary hidden sm:block" />
            <div className="inline-flex items-center gap-2 px-6 py-1.5 rounded-full border-2 border-secondary/50">
              <span className={`text-secondary text-xs font-bold tracking-[0.4em] ${lang === "ar" ? "font-arabic" : ""}`}>
                {c.badge}
              </span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-secondary hidden sm:block" />
            <div className="hidden sm:block w-16 h-px bg-gradient-to-l from-transparent to-secondary/60" />
          </div>

          <h2 className={`text-3xl md:text-5xl font-extrabold mb-3 ${lang === "ar" ? "font-arabic" : ""}`}>
            <span className="text-white">{c.title1} </span>
            <span className="text-secondary" style={{ textShadow: "0 0 30px rgba(45,191,160,0.5)" }}>
              {c.title2}
            </span>
          </h2>

          {/* Decorative dots under title */}
          <div className="flex items-center justify-center gap-2 mb-5">
            <div className="w-12 h-px bg-secondary/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-secondary" style={{ boxShadow: "0 0 6px #2DBFA0" }} />
            <div className="w-12 h-px bg-secondary/40" />
          </div>

          <p className={`text-white/60 text-base max-w-2xl mx-auto leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>
            {c.subtitle}
          </p>
        </motion.div>

        {/* TWO-COLUMN: Vision + Future Direction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">

          {/* OUR VISION CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card/40 backdrop-blur-sm border border-secondary/20 rounded-2xl p-6 md:p-8"
            style={{ boxShadow: "0 0 30px rgba(45,191,160,0.1)" }}
          >
            <div className={`flex items-start gap-5 ${isRTL ? "flex-row-reverse" : ""}`}>
              {/* Eye icon with crosshair */}
              <div className="shrink-0">
                <div
                  className="relative w-20 h-20 rounded-full bg-secondary/15 border-2 border-secondary/40 flex items-center justify-center text-secondary"
                  style={{ boxShadow: "0 0 25px rgba(45,191,160,0.4)" }}
                >
                  <Eye size={36} />
                  {/* Corner brackets */}
                  <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-secondary rounded-tl" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-secondary rounded-tr" />
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-secondary rounded-bl" />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-secondary rounded-br" />
                </div>
              </div>

              {/* Content */}
              <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
                <h3
                  className={`text-secondary text-2xl font-bold mb-3 ${lang === "ar" ? "font-arabic" : ""}`}
                  style={{ textShadow: "0 0 15px rgba(45,191,160,0.4)" }}
                >
                  {c.visionTitle}
                </h3>

                {/* Quote */}
                <div className="relative">
                  <span
                    className={`absolute ${isRTL ? "right-0" : "left-0"} -top-3 text-secondary/40 text-3xl leading-none select-none pointer-events-none`}
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    "
                  </span>
                  <p className={`text-white/75 text-base leading-relaxed pl-4 pr-4 ${lang === "ar" ? "font-arabic" : ""}`}>
                    {c.visionQuote}
                  </p>
                  <span
                    className={`absolute ${isRTL ? "left-0" : "right-0"} -bottom-2 text-secondary/40 text-3xl leading-none select-none pointer-events-none`}
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    "
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FUTURE DIRECTION CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card/40 backdrop-blur-sm border border-secondary/20 rounded-2xl p-6 md:p-8"
            style={{ boxShadow: "0 0 30px rgba(45,191,160,0.1)" }}
          >
            <h3
              className={`text-secondary text-xl font-bold mb-5 text-center ${lang === "ar" ? "font-arabic" : ""}`}
              style={{ textShadow: "0 0 15px rgba(45,191,160,0.4)" }}
            >
              {c.futureDirectionTitle}
            </h3>
            <div className="h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent mb-5" />

            <div className="flex flex-col gap-3">
              {c.futureDirections.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isRTL ? 10 : -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex items-start gap-3 ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className="w-10 h-10 rounded-lg bg-secondary/10 border border-secondary/30 flex items-center justify-center text-secondary shrink-0"
                    style={{ boxShadow: "0 0 8px rgba(45,191,160,0.2)" }}
                  >
                    {item.icon}
                  </div>
                  <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
                    <h4 className={`text-white text-sm font-bold mb-0.5 ${lang === "ar" ? "font-arabic" : ""}`}>
                      {item.title}
                    </h4>
                    <p className={`text-white/55 text-xs leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* LONG-TERM IMPACT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card/40 backdrop-blur-sm border border-secondary/20 rounded-2xl p-6 md:p-8 mb-5"
          style={{ boxShadow: "0 0 30px rgba(45,191,160,0.1)" }}
        >
          {/* Header with side lines */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="flex-1 max-w-[120px] h-px bg-gradient-to-r from-transparent to-secondary/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-secondary" style={{ boxShadow: "0 0 6px #2DBFA0" }} />
            <h3
              className={`text-secondary text-xl md:text-2xl font-bold ${lang === "ar" ? "font-arabic" : ""}`}
              style={{ textShadow: "0 0 15px rgba(45,191,160,0.4)" }}
            >
              {c.impactTitle}
            </h3>
            <div className="w-1.5 h-1.5 rounded-full bg-secondary" style={{ boxShadow: "0 0 6px #2DBFA0" }} />
            <div className="flex-1 max-w-[120px] h-px bg-gradient-to-l from-transparent to-secondary/40" />
          </div>

          {/* 3 impact columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.impacts.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex flex-col items-center text-center ${i > 0 ? "md:border-l md:border-white/10 md:pl-6" : ""}`}
              >
                <div
                  className="w-16 h-16 rounded-full bg-secondary/15 border-2 border-secondary/40 flex items-center justify-center text-secondary mb-4"
                  style={{ boxShadow: "0 0 20px rgba(45,191,160,0.4)" }}
                >
                  {item.icon}
                </div>
                <h4
                  className={`text-secondary text-lg font-bold mb-2 ${lang === "ar" ? "font-arabic" : ""}`}
                  style={{ textShadow: "0 0 10px rgba(45,191,160,0.3)" }}
                >
                  {item.title}
                </h4>
                <p className={`text-white/60 text-sm leading-relaxed max-w-xs ${lang === "ar" ? "font-arabic" : ""}`}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FINAL QUOTE BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl p-6 md:p-10 overflow-hidden border border-secondary/30"
          style={{
            background: "linear-gradient(135deg, rgba(108,61,232,0.1) 0%, rgba(45,191,160,0.08) 100%)",
            boxShadow: "0 0 40px rgba(45,191,160,0.15)",
          }}
        >
          {/* Decorative wave bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-12 opacity-40 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 1200 50" preserveAspectRatio="none">
              <motion.path
                d="M0,25 Q300,5 600,25 T1200,25"
                stroke="#2DBFA0"
                strokeWidth="1"
                fill="none"
                animate={{
                  d: [
                    "M0,25 Q300,5 600,25 T1200,25",
                    "M0,25 Q300,45 600,25 T1200,25",
                    "M0,25 Q300,5 600,25 T1200,25",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </svg>
          </div>

          {/* Floating particles */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                left: `${(i * 13) % 100}%`,
                top: `${(i * 17) % 100}%`,
                background: i % 2 === 0 ? "#6C3DE8" : "#2DBFA0",
                boxShadow: `0 0 6px ${i % 2 === 0 ? "#6C3DE8" : "#2DBFA0"}`,
              }}
              animate={{ opacity: [0.3, 0.9, 0.3], y: [0, -10, 0] }}
              transition={{ duration: 3 + (i % 2), repeat: Infinity, delay: i * 0.2 }}
            />
          ))}

          <div className={`relative flex items-center gap-5 ${isRTL ? "flex-row-reverse" : ""}`}>
            {/* Hands holding heart icon */}
            <div className="shrink-0">
              <div
                className="w-16 h-16 rounded-full bg-secondary/15 border-2 border-secondary/40 flex items-center justify-center text-secondary"
                style={{ boxShadow: "0 0 25px rgba(45,191,160,0.4)" }}
              >
                <Heart size={28} fill="currentColor" />
              </div>
            </div>

            {/* Quote text */}
            <div className={`flex-1 text-center ${isRTL ? "md:text-right" : "md:text-left"}`}>
              <p
                className={`text-white text-xl md:text-2xl font-bold leading-snug mb-1 ${lang === "ar" ? "font-arabic" : ""}`}
              >
                {c.finalQuote1}
              </p>
              <p
                className={`text-secondary text-xl md:text-2xl font-bold leading-snug ${lang === "ar" ? "font-arabic" : ""}`}
                style={{ textShadow: "0 0 20px rgba(45,191,160,0.5)" }}
              >
                {c.finalQuote2}
              </p>
            </div>

            {/* SignBridge logo on the right */}
            <div className="hidden sm:flex shrink-0 items-center gap-2">
              <img src={logoImg} alt="SignBridge" className="h-12 w-auto opacity-90" />
              <div className="hidden md:flex flex-col">
                <span className="text-primary text-sm font-extrabold leading-none">Sign</span>
                <span className="text-secondary text-sm font-extrabold leading-none">Bridge</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}