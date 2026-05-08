import { motion } from "framer-motion";
import {
  Trophy,
  Users,
  GraduationCap,
  Building2,
  Handshake,
} from "lucide-react";
import { useLang } from "../context/LanguageContext";

// ─── Real assets ─────────────────────────────────
import winningPhoto from "../assets/achievements/winning-photo.jpg";
import logoImg from "../assets/signbridge_logo_transparent.png";
import taylorsLogo from "../assets/about/taylorsLogo.png";
import darbLogo from "../assets/about/darbLogo.png";

const content = {
  en: {
    badge: "ACHIEVEMENTS",
    title1: "Recognition &",
    title2: "Milestones",
    subtitle: "Celebrating the journey, the impact, and the people behind",
    subtitleBrand: "SignBridge.",

    placeBadge: "1ST PLACE",
    winnerTitle: "Winner —",
    winnerEvent: "DARB Hackathon 2026",
    winnerTrack: "Digital Education & Learning Technology Track",
    winnerP1:
      "SignBridge was awarded first place at DARB Hackathon 2026 — the first Arab hackathon held in Malaysia.",
    winnerP2:
      "Built by Yemeni students studying AI at Taylor's University, SignBridge was created to bridge communication barriers for the Arabic Deaf community through real-time offline translation.",
    statValue: "18 million",
    statText:
      "Arabic Deaf individuals live in a world designed primarily for spoken communication. SignBridge was built to help change that.",

    presentationDesc:
      "The award was presented by the Ambassador of Yemen to Malaysia, with the presence of industry professionals, academic judges, and innovation leaders during DARB Hackathon 2026.",
    officialPresence: "Official Presence",
    officialPresenceSub: "& Support",

    pillar1Label: "Recognized by",
    pillar1Title: "Taylor's University",
    pillar1Desc:
      "An AI and accessibility innovation project representing the School of Computing & IT.",

    pillar2Label: "Built for Impact",
    pillar2Title: "Driven by Purpose",
    pillar2Desc:
      "Our mission is to reduce communication barriers and create a more inclusive world through accessible technology.",

    pillar3Label: "Proudly Built in",
    pillar3Title: "Yemen",
    pillar3Desc:
      "Built with purpose, accessibility, and belief in meaningful technology.",

    finalQuoteTitle: "This is only the beginning.",
    finalQuoteP1: "We believe technology should not separate people —",
    finalQuoteP2: "it should help them understand each other.",
  },
  ar: {
    badge: "إنجازاتنا",
    title1: "الإنجازات و",
    title2: "المحطات",
    subtitle: "نحتفل بالرحلة والأثر والأشخاص الذين كان لهم دور في وصول",
    subtitleBrand: "SignBridge",

    placeBadge: "فخورون بالفوز",
    winnerTitle: "المركز الأول —",
    winnerEvent: "هاكاثون درب 2026",
    winnerTrack: "مسار التعليم الرقمي وتكنولوجيا التعلم",
    winnerP1:
      "فاز مشروع SignBridge بالمركز الأول في هاكاثون درب 2026، أول هاكاثون عربي على أرض ماليزيا.",
    winnerP2:
      "مشروع طلابي من اليمن، يهدف إلى بناء جسر تواصل حقيقي لمجتمع الصم العربي من خلال جهاز ذكاء اصطناعي يترجم لغة الإشارة العربية إلى صوت في أقل من ثانية وبدون إنترنت.",
    statValue: "18 مليون",
    statText:
      "شخص من مجتمع الصم العربي يعيشون في عالم صُمم أساساً للتواصل الصوتي. SignBridge وُجد ليساعد على تغيير ذلك.",

    presentationDesc:
      "تم تسليم الجائزة من قِبل سفير الجمهورية اليمنية لدى ماليزيا، بحضور ممثلين رسميين وخبراء في المجالين الأكاديمي والتقني ضمن هاكاثون درب 2026.",
    officialPresence: "دعم وحضور",
    officialPresenceSub: "رسمي",

    pillar1Label: "معترف به من",
    pillar1Title: "جامعة تايلورز",
    pillar1Desc:
      "مشروع ابتكاري في الذكاء الاصطناعي وإمكانية الوصول يمثل كلية الحوسبة وتكنولوجيا المعلومات.",

    pillar2Label: "صُمم لأجل الأثر",
    pillar2Title: "ودافع للتغيير",
    pillar2Desc:
      "نؤمن أن التكنولوجيا يجب أن تُبنى لتقريب الناس من بعضهم البعض، وليس لإبعادهم.",

    pillar3Label: "صُنع في",
    pillar3Title: "اليمن",
    pillar3Desc:
      "بفخر وهدف ورسالة. نحن نؤمن أن اليمن مليء بالعقول القادرة على الابتكار وصناعة المستقبل.",

    finalQuoteTitle: "هذه ليست سوى البداية.",
    finalQuoteP1: "نؤمن أن التكنولوجيا لا يجب أن تفصل الناس —",
    finalQuoteP2: "بل تساعدهم على فهم بعضهم البعض.",
  },
};

/* Decorative laurel branch SVG */
function LaurelBranch({ flip = false, size = 100 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      style={{ transform: flip ? "scaleX(-1)" : "none" }}
    >
      <defs>
        <linearGradient id={`laurelGrad${flip ? "R" : "L"}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6C3DE8" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <motion.path
        d="M50 95 Q40 70 30 50 Q20 30 25 10"
        stroke={`url(#laurelGrad${flip ? "R" : "L"})`}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      {[
        { x: 32, y: 75, rot: -30 },
        { x: 25, y: 60, rot: -45 },
        { x: 22, y: 45, rot: -55 },
        { x: 22, y: 30, rot: -65 },
        { x: 25, y: 15, rot: -75 },
        { x: 42, y: 80, rot: 30 },
        { x: 38, y: 65, rot: 20 },
        { x: 35, y: 50, rot: 10 },
        { x: 32, y: 35, rot: 0 },
        { x: 30, y: 20, rot: -10 },
      ].map((leaf, i) => (
        <motion.ellipse
          key={i}
          cx={leaf.x}
          cy={leaf.y}
          rx="6"
          ry="2.5"
          fill={`url(#laurelGrad${flip ? "R" : "L"})`}
          transform={`rotate(${leaf.rot} ${leaf.x} ${leaf.y})`}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
        />
      ))}
      {[
        { cx: 15, cy: 25, r: 1 },
        { cx: 45, cy: 15, r: 0.8 },
        { cx: 50, cy: 5, r: 1.2 },
      ].map((d, i) => (
        <motion.circle
          key={i}
          cx={d.cx}
          cy={d.cy}
          r={d.r}
          fill="#A78BFA"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
          style={{ filter: "drop-shadow(0 0 4px #A78BFA)" }}
        />
      ))}
    </svg>
  );
}

/* Yemen flag circular badge */
function YemenFlag({ size = 56 }) {
  return (
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
}

export default function Achievements() {
  const { lang } = useLang();
  const c = content[lang];
  const isRTL = lang === "ar";

  return (
    <section id="achievements" className="relative py-24 overflow-hidden">
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

      {/* Laurel decorations */}
      <div className="absolute top-12 left-4 md:left-16 hidden md:block">
        <LaurelBranch size={100} />
      </div>
      <div className="absolute top-12 right-4 md:right-16 hidden md:block">
        <LaurelBranch size={100} flip />
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
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 border-secondary/50 mb-6">
            <Trophy size={14} className="text-secondary" />
            <span className={`text-secondary text-xs font-bold tracking-[0.3em] ${lang === "ar" ? "font-arabic" : ""}`}>
              {c.badge}
            </span>
          </div>

          <h2 className={`text-4xl md:text-6xl font-extrabold mb-4 ${lang === "ar" ? "font-arabic" : ""}`}>
            <span className="text-white">{c.title1} </span>
            <span className="text-secondary" style={{ textShadow: "0 0 30px rgba(45,191,160,0.5)" }}>
              {c.title2}
            </span>
          </h2>

          <p className={`text-white/65 text-base md:text-lg max-w-3xl mx-auto leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>
            {c.subtitle}{" "}
            <span className="text-primary font-semibold" style={{ textShadow: "0 0 12px rgba(108,61,232,0.4)" }}>
              {c.subtitleBrand}
            </span>
          </p>
        </motion.div>

        {/* MAIN: Photo + Winner Description */}
        <div className={`grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-5 mb-5 ${isRTL ? "lg:[direction:rtl]" : ""}`}>

          {/* LEFT: Winning Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.01 }}
            className="relative rounded-2xl overflow-hidden border border-primary/30"
            style={{ boxShadow: "0 0 40px rgba(108,61,232,0.2)" }}
          >
            <img
              src={winningPhoto}
              alt="SignBridge team winning DARB Hackathon 2026"
              className="w-full h-full object-cover"
              style={{ minHeight: "400px" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-primary/70 rounded-tl-md pointer-events-none" />
            <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-secondary/70 rounded-tr-md pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-secondary/70 rounded-bl-md pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-primary/70 rounded-br-md pointer-events-none" />
          </motion.div>

          {/* RIGHT: Winner Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-card/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-7"
            style={{ boxShadow: "0 0 30px rgba(108,61,232,0.1)" }}
          >
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/50 bg-yellow-500/10 mb-4 ${isRTL ? "flex-row-reverse" : ""}`}>
              <Trophy size={14} className="text-yellow-400" fill="currentColor" />
              <span className={`text-yellow-400 text-xs font-bold tracking-wider ${lang === "ar" ? "font-arabic" : ""}`}>
                {c.placeBadge}
              </span>
            </div>

            <h3 className={`text-2xl md:text-3xl font-extrabold mb-1 ${isRTL ? "text-right" : "text-left"} ${lang === "ar" ? "font-arabic" : ""}`}>
              <span className="text-white">{c.winnerTitle} </span>
              <span className="text-secondary" style={{ textShadow: "0 0 15px rgba(45,191,160,0.4)" }}>
                {c.winnerEvent}
              </span>
            </h3>
            <p className={`text-primary text-sm font-semibold mb-2 ${isRTL ? "text-right" : "text-left"} ${lang === "ar" ? "font-arabic" : ""}`}>
              {c.winnerTrack}
            </p>

            <div className={`h-0.5 w-16 bg-primary/40 rounded-full mb-4 ${isRTL ? "ml-auto" : ""}`} />

            <div className={`flex flex-col gap-3 mb-5 ${isRTL ? "text-right" : "text-left"}`}>
              <p className={`text-white/70 text-sm leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>
                {c.winnerP1}
              </p>
              <p className={`text-white/70 text-sm leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>
                {c.winnerP2}
              </p>
            </div>

            <div
              className="bg-bg/60 border border-secondary/25 rounded-xl p-4"
              style={{ boxShadow: "0 0 15px rgba(45,191,160,0.1)" }}
            >
              <div className={`flex items-start gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                <div
                  className="w-10 h-10 rounded-lg bg-secondary/15 border border-secondary/30 flex items-center justify-center text-secondary shrink-0"
                  style={{ boxShadow: "0 0 10px rgba(45,191,160,0.3)" }}
                >
                  <Users size={20} />
                </div>
                <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
                  <span
                    className={`text-secondary text-lg font-extrabold ${lang === "ar" ? "font-arabic" : ""}`}
                    style={{ textShadow: "0 0 10px rgba(45,191,160,0.4)" }}
                  >
                    {c.statValue}
                  </span>{" "}
                  <span className={`text-white/65 text-xs leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>
                    {c.statText}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ─── PRESENTATION ROW (REDESIGNED) ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-7 mb-5"
          style={{ boxShadow: "0 0 25px rgba(108,61,232,0.08)" }}
        >
          <div className={`grid grid-cols-1 lg:grid-cols-[1.4fr_auto_auto] gap-6 items-center ${isRTL ? "lg:[direction:rtl]" : ""}`}>

            {/* LEFT: Description with Yemeni Ambassador highlighted */}
            <div className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
              <div
                className="w-14 h-14 rounded-full bg-primary/15 border-2 border-primary/40 flex items-center justify-center text-primary shrink-0"
                style={{ boxShadow: "0 0 20px rgba(108,61,232,0.4)" }}
              >
                <Building2 size={22} />
              </div>
              <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
                <p className={`text-white/75 text-sm md:text-base leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>
                  {lang === "en" ? (
                    <>
                      The award was presented by the{" "}
                      <span
                        className="text-secondary font-semibold"
                        style={{ textShadow: "0 0 10px rgba(45,191,160,0.4)" }}
                      >
                        Ambassador of Yemen to Malaysia
                      </span>
                      , with the presence of industry professionals, academic judges, and innovation leaders during DARB Hackathon 2026.
                    </>
                  ) : (
                    <>
                      تم تسليم الجائزة من قِبل{" "}
                      <span
                        className="text-secondary font-semibold"
                        style={{ textShadow: "0 0 10px rgba(45,191,160,0.4)" }}
                      >
                        سفير الجمهورية اليمنية لدى ماليزيا
                      </span>
                      ، بحضور ممثلين رسميين وخبراء في المجالين الأكاديمي والتقني ضمن هاكاثون درب 2026.
                    </>
                  )}
                </p>
              </div>
            </div>

            {/* MIDDLE: Logos with vertical dividers */}
            <div className={`flex items-center justify-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
              {/* Vertical divider */}
              <div className="hidden lg:block w-px h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

              {/* DARB Logo */}
              <div className="flex flex-col items-center gap-2">
                <div
                  className="bg-white rounded-xl shrink-0 overflow-hidden shadow-lg"
                  style={{ width: "85px", height: "65px" }}
                >
                  <img src={darbLogo} alt="DARB Hackathon" className="w-full h-full object-cover" />
                </div>
                <span className={`text-white/60 text-[10px] font-semibold tracking-wide ${lang === "ar" ? "font-arabic" : ""}`}>
                  DARB 2026
                </span>
              </div>

              {/* Vertical divider */}
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

              {/* Taylor's Logo */}
              <div className="flex flex-col items-center gap-2">
                <div
                  className="bg-white rounded-xl shrink-0 overflow-hidden shadow-lg"
                  style={{ width: "85px", height: "65px" }}
                >
                  <img src={taylorsLogo} alt="Taylor's University" className="w-full h-full object-cover" />
                </div>
                <span className={`text-white/60 text-[10px] font-semibold tracking-wide ${lang === "ar" ? "font-arabic" : ""}`}>
                  {lang === "en" ? "TAYLOR'S UNI" : "تايلورز"}
                </span>
              </div>

              {/* Vertical divider */}
              <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            </div>

            {/* RIGHT: Official Presence */}
            <div className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
              <div
                className="w-12 h-12 rounded-full bg-secondary/15 border-2 border-secondary/40 flex items-center justify-center text-secondary shrink-0"
                style={{ boxShadow: "0 0 15px rgba(45,191,160,0.4)" }}
              >
                <Handshake size={20} />
              </div>
              <div className={isRTL ? "text-right" : "text-left"}>
                <p
                  className={`text-secondary text-sm font-bold leading-tight ${lang === "ar" ? "font-arabic" : ""}`}
                  style={{ textShadow: "0 0 10px rgba(45,191,160,0.4)" }}
                >
                  {c.officialPresence}
                </p>
                <p className={`text-white/55 text-xs ${lang === "ar" ? "font-arabic" : ""}`}>
                  {c.officialPresenceSub}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* THREE PILLAR ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            whileHover={{ y: -3 }}
            className="bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-5 hover:border-primary/40 transition-all"
            style={{ boxShadow: "0 0 25px rgba(108,61,232,0.08)" }}
          >
            <div className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
              <div
                className="w-14 h-14 rounded-full bg-primary/15 border-2 border-primary/40 flex items-center justify-center text-primary shrink-0"
                style={{ boxShadow: "0 0 18px rgba(108,61,232,0.4)" }}
              >
                <GraduationCap size={24} />
              </div>
              <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
                <p className={`text-white text-sm font-semibold mb-0.5 ${lang === "ar" ? "font-arabic" : ""}`}>
                  {c.pillar1Label}
                </p>
                <p className={`text-primary text-base font-bold mb-2 ${lang === "ar" ? "font-arabic" : ""}`}
                   style={{ textShadow: "0 0 10px rgba(108,61,232,0.4)" }}>
                  {c.pillar1Title}
                </p>
                <p className={`text-white/55 text-xs leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>
                  {c.pillar1Desc}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -3 }}
            className="bg-card/40 backdrop-blur-sm border border-secondary/20 rounded-2xl p-5 hover:border-secondary/40 transition-all"
            style={{ boxShadow: "0 0 25px rgba(45,191,160,0.08)" }}
          >
            <div className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
              <div
                className="w-14 h-14 rounded-full bg-secondary/15 border-2 border-secondary/40 flex items-center justify-center text-secondary shrink-0"
                style={{ boxShadow: "0 0 18px rgba(45,191,160,0.4)" }}
              >
                <Users size={24} />
              </div>
              <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
                <p className={`text-white text-sm font-semibold mb-0.5 ${lang === "ar" ? "font-arabic" : ""}`}>
                  {c.pillar2Label}
                </p>
                <p className={`text-secondary text-base font-bold mb-2 ${lang === "ar" ? "font-arabic" : ""}`}
                   style={{ textShadow: "0 0 10px rgba(45,191,160,0.4)" }}>
                  {c.pillar2Title}
                </p>
                <p className={`text-white/55 text-xs leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>
                  {c.pillar2Desc}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -3 }}
            className="bg-card/40 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-secondary/40 transition-all"
          >
            <div className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
              <YemenFlag size={56} />
              <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
                <p className={`text-white text-sm font-semibold mb-0.5 ${lang === "ar" ? "font-arabic" : ""}`}>
                  {c.pillar3Label}
                </p>
                <p className={`text-secondary text-base font-bold mb-2 ${lang === "ar" ? "font-arabic" : ""}`}
                   style={{ textShadow: "0 0 10px rgba(45,191,160,0.4)" }}>
                  {c.pillar3Title}
                </p>
                <p className={`text-white/55 text-xs leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>
                  {c.pillar3Desc}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FINAL QUOTE BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl p-6 md:p-8 overflow-hidden border border-primary/30"
          style={{
            background: "linear-gradient(135deg, rgba(108,61,232,0.12) 0%, rgba(45,191,160,0.06) 100%)",
            boxShadow: "0 0 40px rgba(108,61,232,0.15)",
          }}
        >
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
            <div className="shrink-0 hidden sm:block">
              <span
                className="text-primary/60 select-none pointer-events-none"
                style={{ fontSize: "100px", lineHeight: "0.8", fontFamily: "Georgia, serif" }}
              >
                "
              </span>
            </div>

            <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
              <h3 className={`text-white text-xl md:text-2xl font-extrabold mb-2 ${lang === "ar" ? "font-arabic" : ""}`}>
                {c.finalQuoteTitle}
              </h3>
              <p className={`text-white/75 text-sm md:text-base leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>
                {c.finalQuoteP1}
              </p>
              <p
                className={`text-secondary text-sm md:text-base leading-relaxed font-semibold ${lang === "ar" ? "font-arabic" : ""}`}
                style={{ textShadow: "0 0 15px rgba(45,191,160,0.4)" }}
              >
                {c.finalQuoteP2}
              </p>
            </div>

            <div className="hidden md:flex shrink-0 items-center gap-2">
              <img src={logoImg} alt="SignBridge" className="h-12 w-auto opacity-90" />
              <div className="flex flex-col">
                <span className="text-primary text-base font-extrabold leading-none">Sign</span>
                <span className="text-secondary text-base font-extrabold leading-none">Bridge</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}