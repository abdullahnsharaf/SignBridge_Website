import { motion } from "framer-motion";
import { Play, Wifi, Shield, Zap } from "lucide-react";
import { useLang } from "../context/LanguageContext";

const content = {
  en: {
    badges: ["100% Offline", "Real-Time AI", "Private & Secure"],
    tagline: "We Give Sign a Voice",
    description:
      "AI-powered device that translates Arabic Sign Language into speech and voice into text — enabling two-way communication, even offline.",
    cta1: "Try Demo",
    cta2: "View on GitHub",
    trust: [
      { icon: <Wifi size={14} />, label: "Works Offline" },
      { icon: <Shield size={14} />, label: "Private & Secure" },
      { icon: <Zap size={14} />, label: "Real-Time Output" },
    ],
    deviceText1: "Real-Time",
    deviceText2: "Sign Language",
    deviceText3: "to Speech",
    signMode: "Sign Mode",
    voiceMode: "Voice Mode",
  },
  ar: {
    badges: ["يعمل بدون إنترنت", "ذكاء اصطناعي فوري", "آمن وخاص"],
    tagline: "نمنح الإشارة صوتاً",
    description:
      "جهاز مدعوم بالذكاء الاصطناعي يحول لغة الإشارة العربية إلى صوت، والصوت إلى نص — لتمكين التواصل ثنائي الاتجاه حتى بدون إنترنت.",
    cta1: "جرّب الآن",
    cta2: "عرض على GitHub",
    trust: [
      { icon: <Wifi size={14} />, label: "يعمل بدون إنترنت" },
      { icon: <Shield size={14} />, label: "آمن وخاص" },
      { icon: <Zap size={14} />, label: "استجابة فورية" },
    ],
    deviceText1: "ترجمة الإشارة",
    deviceText2: "إلى",
    deviceText3: "صوت",
    signMode: "وضع الإشارة",
    voiceMode: "وضع الصوت",
  },
};

const DEMO_URL = "https://huggingface.co/spaces/Khaled0wleed/SignBridge";
const GITHUB_URL = "https://github.com/khh4lid/SignBridge";

const GitHubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

/* Background sweeping waveform */
function BackgroundWaveform() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <div className="flex items-center gap-[3px] h-72 w-full px-4">
        {Array.from({ length: 90 }).map((_, i) => {
          const isPurple = i < 45;
          return (
            <motion.div
              key={i}
              className="flex-1 rounded-full"
              style={{
                background: isPurple ? "#6C3DE8" : "#2DBFA0",
                opacity: 0.35,
              }}
              animate={{
                height: [
                  `${10 + Math.sin(i * 0.4) * 50}px`,
                  `${30 + Math.sin(i * 0.4 + 1.5) * 80}px`,
                  `${10 + Math.sin(i * 0.4) * 50}px`,
                ],
              }}
              transition={{
                duration: 1.5 + (i % 5) * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.02,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

function ParticleDots() {
  return (
    <>
      {Array.from({ length: 25 }).map((_, i) => {
        const left = (i * 53) % 100;
        const top = (i * 37) % 100;
        const isP = i % 2 === 0;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: i % 3 === 0 ? "3px" : "2px",
              height: i % 3 === 0 ? "3px" : "2px",
              background: isP ? "#6C3DE8" : "#2DBFA0",
              boxShadow: `0 0 8px ${isP ? "#6C3DE8" : "#2DBFA0"}`,
            }}
            animate={{
              opacity: [0.2, 0.9, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + (i % 3),
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        );
      })}
    </>
  );
}

/* ─── ORIGINAL GOOD DEVICE MOCKUP ─── */
function DeviceMockup({ lang }) {
  const c = content[lang];
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-64 md:w-80 mx-auto"
    >
      {/* Glow platform */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-6 bg-primary/40 blur-2xl rounded-full" />
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-64 h-3 bg-secondary/20 blur-xl rounded-full" />

      {/* Device body */}
      <div className="relative bg-gradient-to-b from-gray-200 to-gray-300 rounded-3xl p-3 shadow-2xl border-2 border-white/20">
        {/* Camera */}
        <div className="flex justify-center mb-2">
          <div className="w-10 h-10 rounded-full bg-gray-800 border-4 border-gray-600 flex items-center justify-center shadow-inner">
            <div className="w-4 h-4 rounded-full bg-gray-900 border border-gray-700" />
          </div>
        </div>

        {/* Screen */}
        <div className="bg-bg rounded-2xl p-4 min-h-[160px] border border-primary/30 shadow-[inset_0_0_20px_rgba(108,61,232,0.2)]">
          {/* Status bar */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1">
              <span className="text-[8px] text-white/60 font-medium">SignBridge</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              <span className="text-[8px] text-secondary">Active</span>
            </div>
          </div>

          {/* Display text */}
          <div className={`text-center mb-4 ${lang === "ar" ? "font-arabic" : ""}`}>
            <p className="text-white text-sm font-bold leading-snug">{c.deviceText1}</p>
            <p className="text-white text-sm font-bold">{c.deviceText2}</p>
            <p className="text-secondary text-sm font-bold">{c.deviceText3}</p>
          </div>

          {/* Mode buttons */}
          <div className="flex gap-2">
            <button className={`flex-1 bg-primary/80 rounded-lg py-1.5 text-[9px] text-white font-semibold flex items-center justify-center gap-1 ${lang === "ar" ? "font-arabic" : ""}`}>
              <span>✋</span> {c.signMode}
            </button>
            <button className={`flex-1 bg-white/10 rounded-lg py-1.5 text-[9px] text-white/70 font-semibold flex items-center justify-center gap-1 ${lang === "ar" ? "font-arabic" : ""}`}>
              <span>🎤</span> {c.voiceMode}
            </button>
          </div>
        </div>

        {/* Speaker grille */}
        <div className="flex justify-center gap-1 mt-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="w-1 h-3 bg-gray-500/60 rounded-full" />
          ))}
        </div>

        {/* Bottom logo */}
        <div className="flex items-center justify-center gap-1 mt-2">
          <span className="text-[9px] text-gray-600 font-bold">SignBridge</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const { lang } = useLang();
  const c = content[lang];
  const isRTL = lang === "ar";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-12"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg via-card to-bg" />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(108,61,232,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(108,61,232,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-secondary/15 rounded-full blur-3xl" />

      <BackgroundWaveform />
      <ParticleDots />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

          {/* LEFT: Text */}
          <div className={`relative z-10 ${isRTL ? "text-right lg:order-2" : "text-left lg:order-1"}`}>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`inline-flex items-center gap-3 px-5 py-2 rounded-full border border-secondary/30 bg-secondary/10 backdrop-blur-sm mb-8 ${isRTL ? "flex-row-reverse" : ""}`}
              style={{ boxShadow: "0 0 20px rgba(45,191,160,0.15)" }}
            >
              {c.badges.map((badge, i) => (
                <span
                  key={i}
                  className={`flex items-center gap-1.5 text-xs font-medium text-secondary ${
                    i > 0
                      ? isRTL
                        ? "border-r border-secondary/20 pr-3"
                        : "border-l border-secondary/20 pl-3"
                      : ""
                  } ${lang === "ar" ? "font-arabic" : ""}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" style={{ boxShadow: "0 0 6px #2DBFA0" }} />
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6 ${lang === "ar" ? "font-arabic" : ""}`}
            >
              {lang === "en" ? (
                <>
                  <span className="text-white block">Real-Time Arabic</span>
                  <span className="text-white block">Sign Language</span>
                  <span className="text-secondary block" style={{ textShadow: "0 0 30px rgba(45,191,160,0.5)" }}>
                    to Speech
                  </span>
                </>
              ) : (
                <>
                  <span className="text-white block">ترجمة لغة الإشارة العربية</span>
                  <span className="text-white block">
                    إلى{" "}
                    <span className="text-secondary" style={{ textShadow: "0 0 30px rgba(45,191,160,0.5)" }}>
                      صوت
                    </span>
                  </span>
                  <span className="text-white block text-4xl md:text-5xl lg:text-6xl mt-1">
                    في الوقت الحقيقي
                  </span>
                </>
              )}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-primary font-bold text-xl mb-4 ${lang === "ar" ? "font-arabic" : ""}`}
              style={{ textShadow: "0 0 20px rgba(108,61,232,0.4)" }}
            >
              {c.tagline}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`text-white/60 text-base leading-relaxed mb-8 max-w-xl ${lang === "ar" ? "font-arabic" : ""}`}
            >
              {c.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`flex flex-wrap gap-4 mb-10 ${isRTL ? "flex-row-reverse justify-end" : ""}`}
            >
              <motion.a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-bold text-sm border border-primary/40 transition-all duration-300 ${lang === "ar" ? "font-arabic" : ""}`}
                style={{
                  background: "linear-gradient(135deg, #6C3DE8 0%, #8B5CF6 100%)",
                  boxShadow: "0 0 30px rgba(108,61,232,0.5), inset 0 1px 0 rgba(255,255,255,0.2)",
                }}
              >
                <Play size={16} fill="white" />
                {c.cta1}
              </motion.a>

              <motion.a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-2 px-8 py-3.5 rounded-xl border border-white/20 text-white font-bold text-sm bg-white/5 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm transition-all duration-300 ${lang === "ar" ? "font-arabic" : ""}`}
              >
                <GitHubIcon size={16} />
                {c.cta2}
              </motion.a>
            </motion.div>

            {/* Trust */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className={`flex flex-wrap items-center gap-x-6 gap-y-3 ${isRTL ? "flex-row-reverse" : ""}`}
            >
              {c.trust.map((item, i) => (
                <div key={i} className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <span className="text-secondary" style={{ filter: "drop-shadow(0 0 6px rgba(45,191,160,0.5))" }}>
                    {item.icon}
                  </span>
                  <span className={`text-xs text-white/60 font-medium ${lang === "ar" ? "font-arabic" : ""}`}>
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Device */}
          <div className={`flex justify-center items-center relative ${isRTL ? "lg:order-1" : "lg:order-2"}`}>
            <DeviceMockup lang={lang} />
          </div>
        </div>
      </div>
    </section>
  );
}