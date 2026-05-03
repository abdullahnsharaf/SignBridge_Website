import { motion } from "framer-motion";
import {
  Send,
  Mail,
  User,
  MessageSquare,
  Clock,
  Edit3,
  ExternalLink,
  Users,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useLang } from "../context/LanguageContext";

// ─────────────────────────────────────────────────────
// 🔧 CONFIG — Update these with your info
// ─────────────────────────────────────────────────────
const EMAIL = "support.signbridge@gmail.com"; // your team email
const INSTAGRAM_HANDLE = "@sign_bridge.ar";
const INSTAGRAM_URL = "https://instagram.com/sign_bridge.ar";

// EmailJS credentials (get these from emailjs.com dashboard)
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";       // e.g., "service_abc123"
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";     // e.g., "template_xyz456"
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";       // e.g., "aBcDeFgHiJk123"

// Set this to true once you've configured EmailJS above
const USE_EMAILJS = false; // ← change to true after EmailJS setup
// ─────────────────────────────────────────────────────

/* Custom Instagram brand SVG with gradient */
const InstagramIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="igGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F58529" />
        <stop offset="50%" stopColor="#DD2A7B" />
        <stop offset="100%" stopColor="#8134AF" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#igGrad)" strokeWidth="2" />
    <circle cx="12" cy="12" r="4" stroke="url(#igGrad)" strokeWidth="2" />
    <circle cx="17.5" cy="6.5" r="1" fill="url(#igGrad)" />
  </svg>
);

const HandshakeIllustration = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <defs>
      <linearGradient id="handsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6C3DE8" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#2DBFA0" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    <motion.path
      d="M10 45 L20 38 L28 35 L35 38 L40 42 L40 50 L35 55 L25 58 L15 55 Z"
      stroke="url(#handsGrad)"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    />
    <motion.path
      d="M70 45 L60 38 L52 35 L45 38 L40 42 L40 50 L45 55 L55 58 L65 55 Z"
      stroke="url(#handsGrad)"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0.3 }}
    />
    <motion.line
      x1="35" y1="42" x2="45" y2="42"
      stroke="url(#handsGrad)" strokeWidth="2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1.5 }}
    />
    {[
      { cx: 15, cy: 30, r: 1 },
      { cx: 65, cy: 32, r: 1 },
      { cx: 40, cy: 25, r: 1.5 },
    ].map((d, i) => (
      <motion.circle
        key={i}
        cx={d.cx} cy={d.cy} r={d.r}
        fill="#6C3DE8"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
      />
    ))}
  </svg>
);

const content = {
  en: {
    badge: "CONTACT",
    title1: "Get in Touch with",
    title2: "SignBridge",
    subtitle: "We'd love to hear from you — whether it's feedback, collaboration, or support.",

    emailLabel: "EMAIL",
    emailDesc: "Click to email us directly. We'll get back to you soon.",

    instagramLabel: "INSTAGRAM",
    instagramDesc: "Follow us for updates, demos, and project progress.",
    visitIG: "Visit Instagram",

    collabTitle: "We are always open to new ideas,",
    collabDesc: "partnerships, and opportunities to create impact together.",

    formTitle: "Send Us a Message",
    formDesc: "Fill out the form below and we'll get back to you.",
    nameLabel: "Your Name",
    namePlaceholder: "Enter your name",
    emailFieldLabel: "Your Email",
    emailFieldPlaceholder: "Enter your email",
    messageLabel: "Message",
    messagePlaceholder: "Type your message here...",
    sendBtn: "Send Message",
    sendingBtn: "Sending...",
    responseTime: "We typically respond within 24-48 hours.",
    successMsg: "Message sent successfully! We'll be in touch soon.",
    errorMsg: "Could not send. Please email us directly at",
    emailSubject: "SignBridge Inquiry",
  },
  ar: {
    badge: "تواصل معنا",
    title1: "تواصل مع",
    title2: "SignBridge",
    subtitle: "يسعدنا تواصلك معنا — سواء للاستفسار، الدعم، أو فرص التعاون.",

    emailLabel: "البريد الإلكتروني",
    emailDesc: "اضغط لمراسلتنا مباشرة، وسنتواصل معك في أقرب وقت.",

    instagramLabel: "إنستجرام",
    instagramDesc: "تابعنا للاطلاع على التحديثات والعروض والتجارب الخاصة بالمشروع.",
    visitIG: "زيارة الحساب",

    collabTitle: "نحن منفتحون للتعاون",
    collabDesc: "نحن منفتحون دائماً للأفكار الجديدة، الشراكات، وفرص صنع أثر حقيقي معاً.",

    formTitle: "أرسل لنا رسالة",
    formDesc: "النموذج أدناه وسنقوم بالرد عليك في أقرب وقت ممكن.",
    nameLabel: "الاسم",
    namePlaceholder: "اكتب اسمك",
    emailFieldLabel: "البريد الإلكتروني",
    emailFieldPlaceholder: "اكتب بريدك الإلكتروني",
    messageLabel: "الرسالة",
    messagePlaceholder: "اكتب رسالتك هنا...",
    sendBtn: "إرسال الرسالة",
    sendingBtn: "جاري الإرسال...",
    responseTime: "نرد عادة خلال 24-48 ساعة.",
    successMsg: "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.",
    errorMsg: "تعذر الإرسال. يرجى مراسلتنا مباشرة على",
    emailSubject: "استفسار من موقع SignBridge",
  },
};

export default function Contact() {
  const { lang } = useLang();
  const c = content[lang];
  const isRTL = lang === "ar";

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    if (USE_EMAILJS) {
      // ─── Real email sending via EmailJS ───
      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_email: EMAIL,
          },
          EMAILJS_PUBLIC_KEY
        );
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 6000);
      } catch (err) {
        console.error("EmailJS error:", err);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 8000);
      }
    } else {
      // ─── Fallback: mailto: opens user's email client ───
      const body = encodeURIComponent(
        lang === "en"
          ? `Hi SignBridge team,\n\nMy name is ${formData.name}\nMy email: ${formData.email}\n\n${formData.message}\n\nBest regards,\n${formData.name}`
          : `مرحباً فريق SignBridge،\n\nاسمي ${formData.name}\nبريدي: ${formData.email}\n\n${formData.message}\n\nمع التقدير،\n${formData.name}`
      );
      const subject = encodeURIComponent(c.emailSubject);
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

      setTimeout(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 6000);
      }, 800);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isSending = status === "sending";

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-card/15 to-bg" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-secondary/6 rounded-full blur-3xl" />

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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/40 mb-6">
            <Send size={14} className="text-primary" />
            <span className={`text-primary text-xs font-bold tracking-[0.3em] ${lang === "ar" ? "font-arabic" : ""}`}>
              {c.badge}
            </span>
          </div>
          <h2 className={`text-4xl md:text-6xl font-extrabold mb-4 ${lang === "ar" ? "font-arabic" : ""}`}>
            <span className="text-white">{c.title1} </span>
            <span
              className="bg-gradient-to-r from-primary via-purple-400 to-blue-400 bg-clip-text text-transparent"
              style={{ filter: "drop-shadow(0 0 20px rgba(108,61,232,0.3))" }}
            >
              {c.title2}
            </span>
          </h2>
          <p className={`text-white/55 text-base max-w-2xl mx-auto leading-relaxed mb-3 ${lang === "ar" ? "font-arabic" : ""}`}>
            {c.subtitle}
          </p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="w-12 h-px bg-primary/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary" style={{ boxShadow: "0 0 6px #6C3DE8" }} />
          </div>
        </motion.div>

        {/* MAIN GRID */}
        <div className={`grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-5 ${isRTL ? "lg:[direction:rtl]" : ""}`}>

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-5">

            {/* EMAIL CARD */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -3 }}
              className="bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all"
              style={{ boxShadow: "0 0 25px rgba(108,61,232,0.08)" }}
            >
              <div className={`flex items-center gap-5 ${isRTL ? "flex-row-reverse" : ""}`}>
                <div
                  className="w-16 h-16 rounded-full bg-primary/15 border-2 border-primary/40 flex items-center justify-center text-primary shrink-0"
                  style={{ boxShadow: "0 0 25px rgba(108,61,232,0.4)" }}
                >
                  <Mail size={28} />
                </div>
                <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
                  <p className={`text-primary text-xs font-bold tracking-widest mb-2 ${lang === "ar" ? "font-arabic" : ""}`}>
                    {c.emailLabel}
                  </p>
                  <a
                    href={`mailto:${EMAIL}?subject=${encodeURIComponent(c.emailSubject)}`}
                    className="text-white text-base font-semibold hover:text-primary transition-colors block mb-2 break-all"
                  >
                    {EMAIL}
                  </a>
                  <p className={`text-white/55 text-xs leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>
                    {c.emailDesc}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* INSTAGRAM CARD */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -3 }}
              className="bg-card/40 backdrop-blur-sm border border-pink-500/20 rounded-2xl p-6 hover:border-pink-500/40 transition-all"
              style={{ boxShadow: "0 0 25px rgba(221,42,123,0.08)" }}
            >
              <div className={`flex items-center gap-5 ${isRTL ? "flex-row-reverse" : ""}`}>
                <div
                  className="w-16 h-16 rounded-full border-2 flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(221,42,123,0.08)",
                    borderColor: "rgba(221,42,123,0.4)",
                    boxShadow: "0 0 25px rgba(221,42,123,0.4)",
                  }}
                >
                  <InstagramIcon size={28} />
                </div>
                <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
                  <p className={`text-pink-400 text-xs font-bold tracking-widest mb-2 ${lang === "ar" ? "font-arabic" : ""}`}>
                    {c.instagramLabel}
                  </p>
                  <p className="text-white text-base font-semibold mb-2">{INSTAGRAM_HANDLE}</p>
                  <p className={`text-white/55 text-xs leading-relaxed mb-3 ${lang === "ar" ? "font-arabic" : ""}`}>
                    {c.instagramDesc}
                  </p>
                  <motion.a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-pink-500/40 text-pink-400 hover:bg-pink-500/10 hover:border-pink-500/60 font-semibold text-xs transition-all ${lang === "ar" ? "font-arabic flex-row-reverse" : ""}`}
                  >
                    <ExternalLink size={12} />
                    {c.visitIG}
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* COLLABORATION CARD */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -3 }}
              className="bg-card/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all"
            >
              <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                <div
                  className="w-14 h-14 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shrink-0"
                  style={{ boxShadow: "0 0 15px rgba(108,61,232,0.3)" }}
                >
                  <Users size={22} />
                </div>
                <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
                  <p className={`text-primary text-sm font-bold mb-1 ${lang === "ar" ? "font-arabic" : ""}`}>
                    {c.collabTitle}
                  </p>
                  <p className={`text-white/60 text-xs leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>
                    {c.collabDesc}
                  </p>
                </div>
                <div className="hidden sm:block shrink-0">
                  <HandshakeIllustration size={70} />
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Form */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-card/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8"
            style={{ boxShadow: "0 0 30px rgba(108,61,232,0.08)" }}
          >
            <div className={`flex items-center gap-4 mb-6 ${isRTL ? "flex-row-reverse" : ""}`}>
              <div
                className="w-12 h-12 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center text-primary shrink-0"
                style={{ boxShadow: "0 0 15px rgba(108,61,232,0.4)" }}
              >
                <Edit3 size={20} />
              </div>
              <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
                <h3 className={`text-white text-xl md:text-2xl font-bold mb-1 ${lang === "ar" ? "font-arabic" : ""}`}>
                  {c.formTitle}
                </h3>
                <p className={`text-white/55 text-xs ${lang === "ar" ? "font-arabic" : ""}`}>
                  {c.formDesc}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              <div>
                <label
                  htmlFor="name"
                  className={`flex items-center gap-2 text-white text-sm font-semibold mb-2 ${isRTL ? "flex-row-reverse" : ""} ${lang === "ar" ? "font-arabic" : ""}`}
                >
                  <User size={14} className="text-primary" />
                  {c.nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSending}
                  placeholder={c.namePlaceholder}
                  className={`w-full px-4 py-3 rounded-xl border border-white/10 bg-bg/60 text-white placeholder:text-white/30 outline-none focus:border-primary/50 focus:bg-bg/80 transition-all duration-300 disabled:opacity-50 ${isRTL ? "text-right" : "text-left"} ${lang === "ar" ? "font-arabic" : ""}`}
                  style={{ boxShadow: "inset 0 0 10px rgba(108,61,232,0.05)" }}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`flex items-center gap-2 text-white text-sm font-semibold mb-2 ${isRTL ? "flex-row-reverse" : ""} ${lang === "ar" ? "font-arabic" : ""}`}
                >
                  <Mail size={14} className="text-primary" />
                  {c.emailFieldLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSending}
                  placeholder={c.emailFieldPlaceholder}
                  className={`w-full px-4 py-3 rounded-xl border border-white/10 bg-bg/60 text-white placeholder:text-white/30 outline-none focus:border-primary/50 focus:bg-bg/80 transition-all duration-300 disabled:opacity-50 ${isRTL ? "text-right" : "text-left"} ${lang === "ar" ? "font-arabic" : ""}`}
                  style={{ boxShadow: "inset 0 0 10px rgba(108,61,232,0.05)" }}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`flex items-center gap-2 text-white text-sm font-semibold mb-2 ${isRTL ? "flex-row-reverse" : ""} ${lang === "ar" ? "font-arabic" : ""}`}
                >
                  <MessageSquare size={14} className="text-primary" />
                  {c.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSending}
                  placeholder={c.messagePlaceholder}
                  className={`w-full px-4 py-3 rounded-xl border border-white/10 bg-bg/60 text-white placeholder:text-white/30 outline-none focus:border-primary/50 focus:bg-bg/80 transition-all duration-300 resize-none disabled:opacity-50 ${isRTL ? "text-right" : "text-left"} ${lang === "ar" ? "font-arabic" : ""}`}
                  style={{ boxShadow: "inset 0 0 10px rgba(108,61,232,0.05)" }}
                />
              </div>

              {/* SEND BUTTON */}
              <motion.button
                type="submit"
                disabled={isSending}
                whileHover={!isSending ? { scale: 1.02, y: -2 } : {}}
                whileTap={!isSending ? { scale: 0.98 } : {}}
                className={`w-full flex items-center justify-center gap-3 py-3.5 rounded-xl text-white font-bold text-base transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed ${lang === "ar" ? "font-arabic" : ""}`}
                style={{
                  background: "linear-gradient(135deg, #6C3DE8 0%, #8B5CF6 50%, #2DBFA0 100%)",
                  boxShadow: "0 0 30px rgba(108,61,232,0.5)",
                }}
              >
                {isSending ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    />
                    {c.sendingBtn}
                  </>
                ) : (
                  <>
                    <Send size={18} className={isRTL ? "rotate-180" : ""} />
                    {c.sendBtn}
                  </>
                )}
              </motion.button>

              {/* SUCCESS MESSAGE */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl bg-secondary/15 border border-secondary/40 p-3 text-center"
                  style={{ boxShadow: "0 0 15px rgba(45,191,160,0.2)" }}
                >
                  <p className={`text-secondary text-sm font-semibold ${lang === "ar" ? "font-arabic" : ""}`}>
                    ✓ {c.successMsg}
                  </p>
                </motion.div>
              )}

              {/* ERROR MESSAGE */}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl bg-red-500/15 border border-red-500/40 p-3"
                >
                  <div className={`flex items-start gap-2 ${isRTL ? "flex-row-reverse text-right" : ""}`}>
                    <AlertCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
                    <p className={`text-red-300 text-sm ${lang === "ar" ? "font-arabic" : ""}`}>
                      {c.errorMsg}{" "}
                      <a href={`mailto:${EMAIL}`} className="underline font-semibold hover:text-red-200">
                        {EMAIL}
                      </a>
                    </p>
                  </div>
                </motion.div>
              )}

              <div className={`flex items-center justify-center gap-2 text-white/50 text-xs ${isRTL ? "flex-row-reverse font-arabic" : ""}`}>
                <Clock size={12} />
                <span>{c.responseTime}</span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}