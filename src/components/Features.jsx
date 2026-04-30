import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import {
  Camera,
  Brain,
  Type,
  Volume2,
  History,
  Settings,
  Shield,
  Heart,
  ArrowRight,
} from "lucide-react";
import FeatureLearnMoreModal from "./FeatureLearnMoreModal";

const content = {
  en: {
    badge: "FEATURES",
    title1: "Powerful",
    title2: "Features",
    description:
      "SignBridge combines Computer Vision and Deep Learning to deliver accurate sign language recognition and natural speech output.",
    learnMore: "Learn more",
    features: [
      {
        id: "detection",
        icon: <Camera size={28} />,
        color: "purple",
        title: "Real-time Detection",
        desc: "Detects hand gestures in real-time using your webcam or video input with high accuracy.",
      },
      {
        id: "ai",
        icon: <Brain size={28} />,
        color: "blue",
        title: "AI-Powered Recognition",
        desc: "Deep learning model (YOLOv8 + CNN + LSTM) recognizes signs and understands their context.",
      },
      {
        id: "text",
        icon: <Type size={28} />,
        color: "teal",
        title: "Text Conversion",
        desc: "Recognized signs are converted into clear and readable text instantly.",
      },
      {
        id: "speech",
        icon: <Volume2 size={28} />,
        color: "orange",
        title: "Speech Output",
        desc: "Converts the recognized text into natural speech to help communication flow smoothly.",
      },
      {
        id: "history",
        icon: <History size={28} />,
        color: "pink",
        title: "History & Logging",
        desc: "Keeps a history of recognized signs, texts, and audio for easy review and tracking.",
      },
      {
        id: "settings",
        icon: <Settings size={28} />,
        color: "purple",
        title: "Customizable Settings",
        desc: "Adjust confidence threshold, speech rate, language and more to fit your needs.",
      },
    ],
    accessibility: {
      title: "Built for Accessibility",
      desc: "SignBridge is designed to bridge the communication gap and make the world more inclusive for everyone.",
      btn: "Accessible for All",
    },
  },
  ar: {
    badge: "المميزات",
    title1: "مميزات قوية",
    title2: "ومتطورة",
    description:
      "يجمع SignBridge بين رؤية الحاسوب والتعلم العميق لتقديم تعرف دقيق على لغة الإشارة مع تحويلها إلى كلام طبيعي.",
    learnMore: "اعرف المزيد",
    features: [
      {
        id: "detection",
        icon: <Camera size={28} />,
        color: "purple",
        title: "الكشف في الوقت الفعلي",
        desc: "يكتشف حركات اليد في الوقت الفعلي باستخدام كاميرا الويب أو إدخال الفيديو بدقة عالية.",
      },
      {
        id: "ai",
        icon: <Brain size={28} />,
        color: "blue",
        title: "التعرف المدعوم بالذكاء الاصطناعي",
        desc: "يستخدم نموذج تعلم عميق (YOLOv8 + CNN + LSTM) للتعرف على إشارات لغة الإشارة وفهم سياقها.",
      },
      {
        id: "text",
        icon: <Type size={28} />,
        color: "teal",
        title: "تحويل إلى نص",
        desc: "يتم تحويل الإشارات المعروفة إلى نص واضح وسهل القراءة فوراً دون تأخير.",
      },
      {
        id: "speech",
        icon: <Volume2 size={28} />,
        color: "orange",
        title: "إخراج صوتي",
        desc: "يحول النص المعترف عليه إلى كلام طبيعي لتسهيل التواصل بسلاسة مع الآخرين.",
      },
      {
        id: "history",
        icon: <History size={28} />,
        color: "pink",
        title: "السجل والتاريخ",
        desc: "يحفظ سجل الإشارات والنصوص والصوتيات لسهولة المراجعة والمتابعة لاحقاً.",
      },
      {
        id: "settings",
        icon: <Settings size={28} />,
        color: "purple",
        title: "إعدادات قابلة للتخصيص",
        desc: "يمكنك ضبط مستوى الثقة وسرعة الكلام واللغة والمزيد بما يتناسب مع احتياجاتك.",
      },
    ],
    accessibility: {
      title: "مصمم لسهولة الوصول",
      desc: "تم تصميم SignBridge لتقريب التواصل بين الجميع وجعل العالم أكثر شمولاً وسهولة للجميع.",
      btn: "شامل للجميع",
    },
  },
};

const colorMap = {
  purple: { bg: "bg-primary/15", border: "border-primary/30", text: "text-primary", glow: "0 0 25px rgba(108,61,232,0.4)" },
  blue:   { bg: "bg-blue-500/15", border: "border-blue-400/30", text: "text-blue-400", glow: "0 0 25px rgba(59,130,246,0.4)" },
  teal:   { bg: "bg-secondary/15", border: "border-secondary/30", text: "text-secondary", glow: "0 0 25px rgba(45,191,160,0.4)" },
  orange: { bg: "bg-orange-500/15", border: "border-orange-400/30", text: "text-orange-400", glow: "0 0 25px rgba(251,146,60,0.4)" },
  pink:   { bg: "bg-pink-500/15", border: "border-pink-400/30", text: "text-pink-400", glow: "0 0 25px rgba(244,114,182,0.4)" },
};

function DotPattern({ side }) {
  return (
    <div className={`absolute top-20 ${side === "left" ? "left-8" : "right-8"} grid grid-cols-5 gap-2 opacity-30`}>
      {Array.from({ length: 25 }).map((_, i) => (
        <div
          key={i}
          className="w-1 h-1 rounded-full"
          style={{
            background: i % 2 === 0 ? "#6C3DE8" : "#3B82F6",
            boxShadow: `0 0 4px ${i % 2 === 0 ? "#6C3DE8" : "#3B82F6"}`,
          }}
        />
      ))}
    </div>
  );
}

function FeatureCard({ feature, lang, isRTL, onLearnMore, index }) {
  const colors = colorMap[feature.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group bg-card/40 backdrop-blur-sm border border-white/8 rounded-2xl p-6 transition-all duration-300 hover:border-white/20 hover:bg-card/60 cursor-pointer"
      onClick={() => onLearnMore(feature.id)}
    >
      <div className={`flex items-start gap-5 ${isRTL ? "flex-row-reverse" : ""}`}>
        <div
          className={`w-14 h-14 rounded-2xl ${colors.bg} ${colors.border} border flex items-center justify-center ${colors.text} shrink-0 transition-transform duration-300 group-hover:scale-110`}
          style={{ boxShadow: colors.glow }}
        >
          {feature.icon}
        </div>

        <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
          <h3 className={`text-white text-base font-bold mb-2 ${lang === "ar" ? "font-arabic" : ""}`}>
            {feature.title}
          </h3>
          <p className={`text-white/55 text-xs leading-relaxed mb-4 ${lang === "ar" ? "font-arabic" : ""}`}>
            {feature.desc}
          </p>

          <button
            onClick={(e) => { e.stopPropagation(); onLearnMore(feature.id); }}
            className={`flex items-center gap-1.5 text-primary text-xs font-semibold hover:gap-2.5 transition-all duration-200 ${lang === "ar" ? "font-arabic flex-row-reverse" : ""}`}
          >
            <span>{lang === "ar" ? "اعرف المزيد" : "Learn more"}</span>
            <ArrowRight size={12} className={isRTL ? "rotate-180" : ""} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const { lang } = useLang();
  const c = content[lang];
  const isRTL = lang === "ar";
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-card/15 to-bg" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[300px] bg-blue-500/5 rounded-full blur-3xl" />

      <DotPattern side="left" />
      <DotPattern side="right" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-primary/40 mb-6">
            <span className="text-primary text-xs font-bold tracking-[0.3em]">{c.badge}</span>
          </div>
          <h2 className={`text-5xl md:text-6xl font-extrabold mb-5 ${lang === "ar" ? "font-arabic" : ""}`}>
            <span className="text-white">{c.title1} </span>
            <span
              className="bg-gradient-to-r from-primary via-purple-400 to-blue-400 bg-clip-text text-transparent"
              style={{ filter: "drop-shadow(0 0 20px rgba(108,61,232,0.3))" }}
            >
              {c.title2}
            </span>
          </h2>
          <p className={`text-white/55 text-base max-w-2xl mx-auto leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>
            {c.description}
          </p>
        </motion.div>

        {/* 6 CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {c.features.map((feature, i) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              lang={lang}
              isRTL={isRTL}
              onLearnMore={setSelectedId}
              index={i}
            />
          ))}
        </div>

        {/* ACCESSIBILITY BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 md:p-8"
          style={{ boxShadow: "0 0 40px rgba(108,61,232,0.1)" }}
        >
          <div className={`flex flex-col md:flex-row items-center gap-6 ${isRTL ? "md:flex-row-reverse" : ""}`}>
            <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
              <div
                className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shrink-0"
                style={{ boxShadow: "0 0 20px rgba(108,61,232,0.4)" }}
              >
                <Shield size={26} />
              </div>
              <h3 className={`text-white text-xl md:text-2xl font-bold whitespace-nowrap ${lang === "ar" ? "font-arabic" : ""}`}>
                {c.accessibility.title}
              </h3>
            </div>

            <p className={`text-white/55 text-sm leading-relaxed flex-1 text-center ${isRTL ? "md:text-right" : "md:text-left"} ${lang === "ar" ? "font-arabic" : ""}`}>
              {c.accessibility.desc}
            </p>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm shrink-0 ${lang === "ar" ? "font-arabic" : ""}`}
              style={{
                background: "linear-gradient(135deg, #6C3DE8 0%, #8B5CF6 100%)",
                boxShadow: "0 0 25px rgba(108,61,232,0.5)",
              }}
            >
              <Heart size={16} fill="white" />
              {c.accessibility.btn}
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* MODAL */}
      {selectedId && (
        <FeatureLearnMoreModal
          featureId={selectedId}
          lang={lang}
          onClose={() => setSelectedId(null)}
        />
      )}
    </section>
  );
}