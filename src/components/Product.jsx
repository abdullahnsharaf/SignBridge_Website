import React from "react";
import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";

const content = {
  en: {
    badge: "PRODUCT",
    titleWhite: "Meet the",
    titleColored: "SignBridge",
    titleEnd: "Device",
    description:
      "A compact AI-powered device that enables real-time communication between sign language and speech — even without internet.",
    anatomyTitle: "Device Anatomy",
    howTitle: "How It Works",
    leftCallouts: [
      { icon: "📷", title: "IMX519 Camera", desc: "Captures hand movements at 60fps" },
      { icon: "📱", title: "Touch Display", desc: "2.8-inch IPS screen. Shows text, mode and system info" },
      { icon: "🔊", title: "Speaker", desc: "Delivers clear voice output" },
      { icon: "🎤", title: "Microphone", desc: "High sensitivity mic for voice input" },
    ],
    rightCallouts: [
      { icon: "⚡", title: "Power Button", desc: "Turn on / off the device" },
      { icon: "🔉", title: "Volume", desc: "Adjust volume + / -" },
      { icon: "🖥️", title: "Raspberry Pi 5", desc: "Quad core 4GB RAM" },
      { icon: "🔋", title: "Battery", desc: "3000mAh Up to 6 hours" },
      { icon: "🔌", title: "USB-C Port", desc: "For charging and updates" },
    ],
    flow1Label: "Flow 1:",
    flow1Title: "Sign Language → Speech Output",
    flow1Steps: [
      { icon: "✋", label: "User performs sign language" },
      { icon: "📷", label: "Camera captures hand movements" },
      { icon: "🧠", label: "AI analyzes landmarks" },
      { icon: "🔤", label: "Sign converted to text" },
      { icon: "🔊", label: "Speaker outputs voice" },
    ],
    flow2Label: "Flow 2:",
    flow2Title: "Voice Input → Text Display",
    flow2Steps: [
      { icon: "🎤", label: "User speaks to device" },
      { icon: "🎙️", label: "Microphone captures voice" },
      { icon: "🧠", label: "AI converts speech to text" },
      { icon: "🔤", label: "Text appears on screen" },
      { icon: "👁️", label: "Text is read and understood" },
    ],
    signMode: "Sign Mode",
    voiceMode: "Voice Mode",
    helpText: "I need help",
  },
  ar: {
    badge: "المنتج",
    titleWhite: "تعرّف على جهاز",
    titleColored: "SignBridge",
    titleEnd: "",
    description:
      "جهاز ذكي يعمل بالذكاء الاصطناعي يتيح التواصل الفوري بين لغة الإشارة والصوت حتى بدون إنترنت.",
    anatomyTitle: "تشريح الجهاز",
    howTitle: "كيف يعمل الجهاز",
    leftCallouts: [
      { icon: "📷", title: "كاميرا IMX519", desc: "تلتقط حركات اليد بسرعة 60 إطاراً/ثانية" },
      { icon: "📱", title: "شاشة تعمل باللمس", desc: "شاشة 2.8 بوصة تعرض النص والوضع ومعلومات النظام" },
      { icon: "🔊", title: "السماعة", desc: "تخرج الصوت بوضوح عالٍ" },
      { icon: "🎤", title: "الميكروفون", desc: "ميكروفون حساس لإدخال الصوت" },
    ],
    rightCallouts: [
      { icon: "⚡", title: "زر التشغيل", desc: "تشغيل / إيقاف الجهاز" },
      { icon: "🔉", title: "التحكم في الصوت", desc: "رفع / خفض مستوى الصوت +/-" },
      { icon: "🖥️", title: "Raspberry Pi 5", desc: "معالج رباعي النواة 4GB RAM" },
      { icon: "🔋", title: "البطارية", desc: "3000mAh تعمل حتى 6 ساعات" },
      { icon: "🔌", title: "منفذ USB-C", desc: "للشحن والتحديثات" },
    ],
    flow1Label: "تدفق 1:",
    flow1Title: "لغة الإشارة ← صوت",
    flow1Steps: [
      { icon: "✋", label: "المستخدم يؤدي لغة الإشارة" },
      { icon: "📷", label: "الكاميرا تلتقط حركات اليد" },
      { icon: "🧠", label: "الذكاء الاصطناعي يحلل النقاط" },
      { icon: "🔤", label: "يتم تحويل الإشارة إلى نص" },
      { icon: "🔊", label: "يتم إخراج الصوت عبر السماعة" },
    ],
    flow2Label: "تدفق 2:",
    flow2Title: "صوت ← نص",
    flow2Steps: [
      { icon: "🎤", label: "يتحدث المستخدم إلى الجهاز" },
      { icon: "🎙️", label: "الميكروفون يلتقط الصوت" },
      { icon: "🧠", label: "يقوم الذكاء الاصطناعي بتحويل الصوت إلى نص" },
      { icon: "🔤", label: "يظهر النص على الشاشة" },
      { icon: "👁️", label: "يتم قراءة النص وفهمه" },
    ],
    signMode: "وضع الإشارة",
    voiceMode: "وضع الصوت",
    helpText: "أحتاج إلى المساعدة",
  },
};

/* ── Animated waveform inside device screen ── */
function Waveform() {
  return (
    <div className="flex items-end justify-center gap-[2px] h-8">
      {Array.from({ length: 16 }).map((_, i) => (
        <motion.div
          key={i}
          className="w-[3px] rounded-full bg-secondary"
          animate={{
            height: [
              `${4 + Math.sin(i * 0.7) * 8}px`,
              `${10 + Math.sin(i * 0.7 + 1.5) * 12}px`,
              `${4 + Math.sin(i * 0.7) * 8}px`,
            ],
          }}
          transition={{
            duration: 0.8 + (i % 4) * 0.15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.06,
          }}
        />
      ))}
    </div>
  );
}

/* ── Device mockup ── */
function DeviceMockup({ lang }) {
  const c = content[lang];
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-52"
    >
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-40 h-5 bg-primary/40 blur-2xl rounded-full" />
      <div className="absolute inset-0 rounded-3xl bg-primary/10 blur-2xl scale-110" />

      <div className="relative bg-gradient-to-b from-[#e8e8e8] to-[#c8c8c8] rounded-3xl p-3 shadow-2xl border-2 border-white/30">
        {/* Camera */}
        <div className="flex justify-center mb-2">
          <div className="w-10 h-10 rounded-full bg-gray-800 border-[3px] border-gray-600 flex items-center justify-center shadow-inner">
            <div className="w-4 h-4 rounded-full bg-[#111] border border-gray-600 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-gray-900" />
            </div>
          </div>
        </div>

        {/* Screen */}
        <div className="bg-[#080818] rounded-2xl px-3 py-3 border border-primary/40 shadow-[inset_0_0_20px_rgba(108,61,232,0.25)]">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              <span className="text-[8px] text-secondary font-semibold">Active</span>
            </div>
            <span className="text-[8px] text-white/40 font-medium">SignBridge</span>
          </div>

          <div className="text-center mb-3">
            <p className={`text-white text-sm font-bold leading-snug${lang === "ar" ? " font-arabic" : ""}`}>{c.helpText}</p>
            <p className={`text-secondary text-[13px] font-bold${lang === "ar" ? " font-arabic" : ""}`}>{c.helpText}</p>
          </div>

          <div className="mb-3">
            <Waveform />
          </div>

          <div className="flex gap-1.5">
            <button className="flex-1 bg-primary rounded-lg py-1.5 text-[9px] text-white font-bold">
              {c.signMode}
            </button>
            <button className="flex-1 bg-white/10 rounded-lg py-1.5 text-[9px] text-white/50">
              {c.voiceMode}
            </button>
          </div>
        </div>

        {/* Speaker grille */}
        <div className="flex justify-center gap-[3px] mt-2.5 mb-1">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="w-[3px] h-4 bg-gray-500/50 rounded-full" />
          ))}
        </div>

        <div className="flex items-center justify-center gap-1">
          <img
            src="/logo.png"
            alt="logo"
            className="w-4 h-4 object-contain"
            onError={(e) => (e.target.style.display = "none")}
          />
          <span className="text-[9px] text-gray-500 font-bold">SignBridge</span>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Single callout item ── */
function Callout({ item, align, lang, color = "primary" }) {
  const isRight = align === "right";
  return (
    <div className={`flex items-start gap-3 ${isRight ? "flex-row-reverse" : ""}`}>
      <div
        className={`w-9 h-9 rounded-xl flex items-center justify-center text-base shrink-0 border
          ${
            color === "secondary"
              ? "bg-secondary/15 border-secondary/25"
              : "bg-primary/15 border-primary/25"
          }`}
      >
        {item.icon}
      </div>
      <div className={isRight ? "text-right" : "text-left"}>
        <p className={`text-white text-xs font-bold leading-tight ${lang === "ar" ? "font-arabic" : ""}`}>
          {item.title}
        </p>
        <p className={`text-white/40 text-[10px] leading-tight mt-0.5 ${lang === "ar" ? "font-arabic" : ""}`}>
          {item.desc}
        </p>
      </div>
    </div>
  );
}

/* ── Flow section — FIXED: circles row + labels row separated ── */
function FlowSteps({ steps, isRTL, lang }) {
  const displaySteps = isRTL ? [...steps].reverse() : steps;
  return (
    <div>
      {/* Row 1: circles aligned with arrows at the same height */}
      <div className={`flex items-center ${isRTL ? "flex-row-reverse" : ""}`}>
        {displaySteps.map((step, i) => (
          <React.Fragment key={i}>
            {/* Circle */}
            <div className="w-14 h-14 rounded-full bg-[#12122A] border border-white/10 flex items-center justify-center text-2xl shadow-lg flex-shrink-0">
              {step.icon}
            </div>

            {/* Arrow — only between steps, not after the last */}
            {i < displaySteps.length - 1 && (
              <div className="flex items-center flex-1 mx-1 min-w-[20px]">
                <div className="h-px flex-1 bg-white/20" />
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  className="flex-shrink-0"
                  style={{ transform: isRTL ? "scaleX(-1)" : "none" }}
                >
                  <path
                    d="M1 4H11M11 4L8 1M11 4L8 7"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Row 2: labels below each circle */}
      <div className={`flex mt-2 ${isRTL ? "flex-row-reverse" : ""}`}>
        {displaySteps.map((step, i) => (
          <div
            key={i}
            className={`flex justify-center ${i < displaySteps.length - 1 ? "flex-1" : "w-14"}`}
          >
            <p
              className={`text-[10px] text-white/50 text-center leading-tight max-w-[68px] ${
                lang === "ar" ? "font-arabic" : ""
              }`}
            >
              {step.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Product() {
  const { lang } = useLang();
  const c = content[lang];
  const isRTL = lang === "ar";

  return (
    <section id="product" className="relative py-24 overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-[#0f0f22] to-bg" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-5">
            <span className="text-primary text-xs font-semibold tracking-widest">( {c.badge} )</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 ${lang === "ar" ? "font-arabic" : ""}`}>
            <span className="text-white">{c.titleWhite} </span>
            <span className="text-primary">{c.titleColored}</span>
            {c.titleEnd && <span className="text-white"> {c.titleEnd}</span>}
          </h2>
          <p className={`text-white/50 text-base max-w-2xl mx-auto leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>
            {c.description}
          </p>
        </motion.div>

        {/* ── DEVICE ANATOMY ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-card/50 backdrop-blur-sm border border-white/8 rounded-2xl p-8 mb-6"
        >
          <h3
            className={`text-white font-bold text-xl mb-8 ${
              isRTL ? "font-arabic text-right" : "text-left"
            }`}
          >
            {c.anatomyTitle}
          </h3>

          <div className="grid grid-cols-[1fr_auto_1fr] gap-6 items-center">

            {/* LEFT callouts */}
            <div className="flex flex-col gap-5">
              {c.leftCallouts.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Callout
                    item={item}
                    align={isRTL ? "right" : "left"}
                    lang={lang}
                    color="primary"
                  />
                  <div className="mt-2 h-px w-full bg-gradient-to-r from-primary/30 to-transparent" />
                </motion.div>
              ))}
            </div>

            {/* CENTER — Device */}
            <div className="flex justify-center px-4">
              <DeviceMockup lang={lang} />
            </div>

            {/* RIGHT callouts */}
            <div className="flex flex-col gap-5">
              {c.rightCallouts.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Callout
                    item={item}
                    align={isRTL ? "left" : "right"}
                    lang={lang}
                    color="secondary"
                  />
                  <div className="mt-2 h-px w-full bg-gradient-to-l from-secondary/30 to-transparent" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── HOW IT WORKS ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-card/50 backdrop-blur-sm border border-white/8 rounded-2xl p-8"
        >
          <h3
            className={`text-white font-bold text-xl mb-6 ${
              isRTL ? "font-arabic text-right" : "text-left"
            }`}
          >
            {c.howTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Flow 1 */}
            <div className="bg-bg/60 rounded-xl p-5 border border-secondary/20 overflow-hidden">
              <p className={`text-sm font-bold mb-5 ${isRTL ? "font-arabic text-right" : ""}`}>
                <span className="text-white">{c.flow1Label} </span>
                <span className="text-secondary">{c.flow1Title}</span>
              </p>
              <FlowSteps steps={c.flow1Steps} isRTL={isRTL} lang={lang} />
            </div>

            {/* Flow 2 */}
            <div className="bg-bg/60 rounded-xl p-5 border border-primary/20 overflow-hidden">
              <p className={`text-sm font-bold mb-5 ${isRTL ? "font-arabic text-right" : ""}`}>
                <span className="text-white">{c.flow2Label} </span>
                <span className="text-primary">{c.flow2Title}</span>
              </p>
              <FlowSteps steps={c.flow2Steps} isRTL={isRTL} lang={lang} />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}