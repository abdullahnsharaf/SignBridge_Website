import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import { ExternalLink, Shield, Hand, Type, Zap, Volume2, Info, Camera, Brain, Monitor } from "lucide-react";

const content = {
  en: {
    badge: "DEMO",
    title1: "Try",
    title2: "SignBridge",
    title3: "Live",
    description:
      "An interactive demo showing how SignBridge uses AI to convert sign language into text and speech in real time.",
    leftTitle: "Live Demo Preview",
    boxTitle: "Hugging Face Demo",
    boxDesc1: "The interactive SignBridge model will appear here",
    boxDesc2: "(Hugging Face Space)",
    openBtn: "Open Demo",
    securityNote: "The demo will open in a new tab on Hugging Face",
    rightTitle: "What does this demo show?",
    features: [
      {
        icon: <Hand size={22} />,
        title: "Hand gesture recognition",
        desc: "The model detects hand movements and sign language patterns.",
        color: "primary",
      },
      {
        icon: <Type size={22} />,
        title: "Sign to text conversion",
        desc: "AI translates gestures into readable text.",
        color: "secondary",
      },
      {
        icon: <Zap size={22} />,
        title: "Real-time results",
        desc: "Text is displayed instantly on screen.",
        color: "primary",
      },
      {
        icon: <Volume2 size={22} />,
        title: "Speech output concept",
        desc: "Demonstrates how text can be converted into voice.",
        color: "secondary",
      },
    ],
    howTitle: "How the demo works",
    steps: [
      {
        icon: <Camera size={28} />,
        title: "Input (Camera / Upload)",
        desc: "The user provides a sign via camera or upload.",
        color: "primary",
      },
      {
        icon: <Brain size={28} />,
        title: "AI Processing",
        desc: "The AI model analyzes the sign and predicts the meaning.",
        color: "blue",
      },
      {
        icon: <Monitor size={28} />,
        title: "Output (Text / Voice)",
        desc: "The result is shown as text and can be converted to speech.",
        color: "secondary",
      },
    ],
  },
  ar: {
    badge: "التجربة",
    title1: "جرّب",
    title2: "SignBridge",
    title3: "مباشرة",
    description:
      "تجربة تفاعلية توضح كيف يستخدم SignBridge الذكاء الاصطناعي لتحويل لغة الإشارة إلى نص وصوت بشكل فوري.",
    leftTitle: "عرض التجربة المباشرة",
    boxTitle: "عرض نموذج Hugging Face",
    boxDesc1: "سيتم عرض نموذج SignBridge التفاعلي هنا",
    boxDesc2: "(Hugging Face Space)",
    openBtn: "فتح التجربة",
    securityNote: "سيتم فتح التجربة في نافذة جديدة على Hugging Face",
    rightTitle: "ماذا تعرض هذه التجربة؟",
    features: [
      {
        icon: <Hand size={22} />,
        title: "التعرف على إشارات اليد",
        desc: "يكتشف النموذج حركات اليد وأنماط لغة الإشارة بدقة عالية.",
        color: "primary",
      },
      {
        icon: <Type size={22} />,
        title: "تحويل الإشارة إلى نص",
        desc: "يقوم الذكاء الاصطناعي بتحويل الإشارات إلى نص قابل للقراءة.",
        color: "secondary",
      },
      {
        icon: <Zap size={22} />,
        title: "عرض النتائج بشكل فوري",
        desc: "يتم عرض النص الناتج مباشرة على الشاشة.",
        color: "primary",
      },
      {
        icon: <Volume2 size={22} />,
        title: "توضيح فكرة إخراج الصوت",
        desc: "يوضح كيف يمكن تحويل النص إلى صوت مسموع.",
        color: "secondary",
      },
    ],
    howTitle: "كيف تعمل التجربة؟",
    steps: [
      {
        icon: <Camera size={28} />,
        title: "إدخال الإشارة",
        desc: "يقوم المستخدم بإدخال الإشارة عبر الكاميرا أو رفع ملف فيديو/صورة.",
        color: "primary",
      },
      {
        icon: <Brain size={28} />,
        title: "معالجة الذكاء الاصطناعي",
        desc: "يقوم نموذج الذكاء الاصطناعي بتحليل الإشارة والتنبؤ بمعناها.",
        color: "blue",
      },
      {
        icon: <Monitor size={28} />,
        title: "عرض النتيجة",
        desc: "يتم عرض النص الناتج ويمكن تحويله إلى صوت مسموع.",
        color: "secondary",
      },
    ],
  },
};

const DEMO_URL = "https://huggingface.co/spaces/Khaled0wleed/SignBridge";

/* Color helper */
const colorMap = {
  primary: { bg: "bg-primary/15", border: "border-primary/30", text: "text-primary", glow: "shadow-[0_0_20px_rgba(108,61,232,0.4)]" },
  secondary: { bg: "bg-secondary/15", border: "border-secondary/30", text: "text-secondary", glow: "shadow-[0_0_20px_rgba(45,191,160,0.4)]" },
  blue: { bg: "bg-blue-500/15", border: "border-blue-400/30", text: "text-blue-400", glow: "shadow-[0_0_20px_rgba(59,130,246,0.4)]" },
};

/* Dashed arrow between flow steps */
function DashedArrow({ color, number, isRTL }) {
  const stroke = color === "primary" ? "#6C3DE8" : "#2DBFA0";
  return (
    <div className={`flex-1 flex items-center justify-center relative min-w-[80px] ${isRTL ? "scale-x-[-1]" : ""}`}>
      {/* Dashed line */}
      <svg width="100%" height="2" className="absolute">
        <line x1="0" y1="1" x2="100%" y2="1" stroke={stroke} strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6"/>
      </svg>
      {/* Number circle */}
      <div
        className="relative z-10 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border"
        style={{
          background: "#0D0D1A",
          borderColor: stroke,
          color: stroke,
        }}
      >
        {number}
      </div>
    </div>
  );
}

export default function Demo() {
  const { lang } = useLang();
  const c = content[lang];
  const isRTL = lang === "ar";

  return (
    <section id="demo" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-[#0a0a1a] to-bg" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/6 rounded-full blur-3xl" />

      {/* Decorative dots */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary/40 rounded-full animate-pulse" />
      <div className="absolute top-40 left-20 w-1 h-1 bg-secondary/60 rounded-full animate-pulse" />
      <div className="absolute bottom-32 right-16 w-2 h-2 bg-secondary/40 rounded-full animate-pulse" />
      <div className="absolute top-32 right-24 w-1.5 h-1.5 bg-primary/50 rounded-full animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="text-primary text-sm font-semibold tracking-[0.3em]">( {c.badge} )</span>
          </div>
          <h2 className={`text-4xl md:text-6xl font-extrabold mb-5 ${lang === "ar" ? "font-arabic" : ""}`}>
            <span className="text-white">{c.title1} </span>
            <span className="bg-gradient-to-r from-primary via-purple-400 to-blue-400 bg-clip-text text-transparent">
              {c.title2}
            </span>
            <span className="text-white"> {c.title3}</span>
          </h2>
          <p className={`text-white/50 text-base max-w-2xl mx-auto leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>
            {c.description}
          </p>
        </motion.div>

        {/* ── TWO-COLUMN GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

          {/* LEFT: Live Demo Preview */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-card/50 backdrop-blur-sm border border-white/8 rounded-2xl p-6"
          >
            {/* Title */}
            <div className={`flex items-center gap-2 mb-5 ${isRTL ? "flex-row-reverse" : ""}`}>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <h3 className={`text-white font-bold text-base ${lang === "ar" ? "font-arabic" : ""}`}>
                {c.leftTitle}
              </h3>
            </div>

            {/* Dashed border box */}
            <div className="rounded-2xl border-2 border-dashed border-primary/40 bg-primary/5 p-10 mb-4">
              <div className="flex flex-col items-center text-center">
                {/* 3D box icon */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="mb-5"
                >
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <path
                      d="M30 5L52 17V42L30 54L8 42V17L30 5Z"
                      stroke="#6C3DE8"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path d="M30 5V30M30 30L8 17M30 30L52 17M30 30V54" stroke="#6C3DE8" strokeWidth="1.5" opacity="0.5" />
                  </svg>
                </motion.div>

                {/* Box title */}
                <h4 className={`text-white text-xl font-bold mb-3 ${lang === "ar" ? "font-arabic" : ""}`}>
                  {c.boxTitle}
                </h4>
                <p className={`text-white/50 text-sm mb-1 ${lang === "ar" ? "font-arabic" : ""}`}>
                  {c.boxDesc1}
                </p>
                <p className={`text-white/40 text-xs mb-6 ${lang === "ar" ? "font-arabic" : ""}`}>
                  {c.boxDesc2}
                </p>

                {/* Open Demo button */}
                <motion.a
                  href={DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex items-center gap-2.5 px-8 py-3 rounded-xl border-2 border-primary/60 text-white font-bold text-sm
                    hover:bg-primary/10 hover:border-primary transition-all duration-300
                    shadow-[0_0_20px_rgba(108,61,232,0.3)] hover:shadow-[0_0_35px_rgba(108,61,232,0.5)]
                    ${lang === "ar" ? "font-arabic" : ""}`}
                >
                  <ExternalLink size={16} className="text-primary" />
                  {c.openBtn}
                </motion.a>
              </div>
            </div>

            {/* Security note */}
            <div className={`flex items-center gap-2 justify-center text-white/40 text-xs ${isRTL ? "flex-row-reverse font-arabic" : ""}`}>
              <Shield size={12} />
              <span>{c.securityNote}</span>
            </div>
          </motion.div>

          {/* RIGHT: What does this demo show */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-card/50 backdrop-blur-sm border border-white/8 rounded-2xl p-6"
          >
            {/* Title */}
            <div className={`flex items-center justify-between mb-5 ${isRTL ? "flex-row-reverse" : ""}`}>
              <h3 className={`text-white font-bold text-base ${lang === "ar" ? "font-arabic" : ""}`}>
                {c.rightTitle}
              </h3>
              <div className="w-7 h-7 rounded-md border border-primary/40 flex items-center justify-center">
                <Info size={14} className="text-primary" />
              </div>
            </div>

            {/* Feature cards */}
            <div className="space-y-3">
              {c.features.map((feat, i) => {
                const colors = colorMap[feat.color];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ y: -2 }}
                    className={`bg-bg/60 border ${colors.border} rounded-xl p-4 flex items-start gap-4
                      ${isRTL ? "flex-row-reverse" : ""}`}
                  >
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center ${colors.text} shrink-0`}>
                      {feat.icon}
                    </div>
                    <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
                      <h4 className={`text-white text-sm font-bold mb-1 ${lang === "ar" ? "font-arabic" : ""}`}>
                        {feat.title}
                      </h4>
                      <p className={`text-white/50 text-xs leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>
                        {feat.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* ── HOW THE DEMO WORKS ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-card/50 backdrop-blur-sm border border-white/8 rounded-2xl p-8"
        >
          {/* Title */}
          <h3 className={`text-white font-bold text-lg text-center mb-10 ${lang === "ar" ? "font-arabic" : ""}`}>
            {c.howTitle}
          </h3>

          {/* Steps */}
          <div className={`flex flex-col md:flex-row items-center justify-between gap-6 ${isRTL ? "md:flex-row-reverse" : ""}`}>
            {c.steps.map((step, i) => {
              const colors = colorMap[step.color];
              return (
                <>
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="flex flex-col items-center text-center max-w-[200px]"
                  >
                    {/* Big icon circle with glow */}
                    <div className={`relative w-20 h-20 rounded-full ${colors.bg} ${colors.border} border-2 flex items-center justify-center ${colors.text} ${colors.glow} mb-4`}>
                      {step.icon}
                      {/* Outer ring */}
                      <div className={`absolute inset-0 rounded-full ${colors.border} border-2 animate-pulse opacity-30 scale-110`} />
                    </div>
                    <h4 className={`text-white text-base font-bold mb-2 ${lang === "ar" ? "font-arabic" : ""}`}>
                      {step.title}
                    </h4>
                    <p className={`text-white/50 text-xs leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>
                      {step.desc}
                    </p>
                  </motion.div>

                  {/* Dashed arrow with number (between steps) */}
                  {i < c.steps.length - 1 && (
                    <DashedArrow
                      color={i === 0 ? "primary" : "secondary"}
                      number={i + 1}
                      isRTL={isRTL}
                    />
                  )}
                </>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}