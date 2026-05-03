import { motion } from "framer-motion";
import {
  BookOpen,
  Target,
  Eye,
  Users,
  ArrowRight,
} from "lucide-react";
import { useLang } from "../context/LanguageContext";

// ─── REAL ASSETS ────────────────────────────────────
const storyPhoto = "/assets/about/storyPhoto.png";
const sdg3Logo = "/assets/about/sdg3Logo.png";
const sdg4Logo = "/assets/about/sdg4Logo.png";
const sdg10Logo = "/assets/about/sdg10Logo.png";
const taylorsLogo = "/assets/about/taylorsLogo.png";
const darbLogo = "/assets/about/darbLogo.png";

const GitHubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const GITHUB_URL = "https://github.com/khh4lid/SignBridge";

const content = {
  en: {
    badge: "ABOUT US",
    title1: "Bridging Worlds",
    title2: "Through Sign",
    subtitle:
      "A passionate team of students building inclusive AI for the Arabic-speaking deaf community.",

    storyTitle: "Our Story",
    storyP1:
      "SignBridge was born at Darb Hackathon 2026 — a vision to break down communication barriers between the Deaf and hearing communities using affordable, offline-first AI hardware.",
    storyP2:
      "We are a team of students passionate about accessibility and inclusion. Our goal is to empower Arabic sign language users through innovative, private, and real-world solutions.",
    githubBtn: "View on GitHub",

    missionTitle: "Our Mission",
    missionDesc:
      "To give every Arabic sign language user a voice — empowering real-time, private, offline communication for the 30+ million Deaf individuals in the Arab world.",

    visionTitle: "Our Vision",
    visionDesc:
      "A world where language is never a barrier — where Deaf and hearing communities connect seamlessly, anywhere, even without internet.",

    sdgTitle: "Aligned with the UN Sustainable Development Goals",
    sdgSubtitle:
      "SignBridge directly contributes to global goals for equity, accessibility, and innovation.",
    sdgs: [
      {
        num: "3",
        title: "Good Health & Well-being",
        desc: "Improving mental well-being and social inclusion by enabling accessible communication.",
      },
      {
        num: "4",
        title: "Quality Education",
        desc: "Supporting inclusive and equitable learning opportunities for Deaf students and communities.",
      },
      {
        num: "10",
        title: "Reduced Inequalities",
        desc: "Bridging communication gaps and promoting equal participation in society.",
      },
    ],

    stats: [
      { value: "94.3%", label: "Recognition Accuracy", color: "primary" },
      { value: "<1s", label: "Response Latency", color: "secondary" },
      { value: "31", label: "Arabic Letters Supported", color: "primary" },
      { value: "100%", label: "Offline Operation", color: "secondary" },
    ],

    ctaTitle: "Want to learn more or contribute?",
    ctaDesc: "Check out our project, or meet the people behind SignBridge.",
    ctaGithub: "View on GitHub",
    ctaTeam: "Meet the Team",
  },
  ar: {
    badge: "من نحن",
    title1: "نجعل التواصل",
    title2: "ممكنًا للجميع",
    subtitle:
      "فريق شغوف من الطلاب والمبتكرين يعمل على بناء حلول ذكية لتمكين التواصل بلغة الإشارة بشكل أبسط وأكثر سهولة.",

    storyTitle: "قصتنا",
    storyP1:
      "بدأ مشروع SignBridge في هاكاثون Darb Hackathon 2026 كفكرة تهدف إلى كسر حواجز التواصل بين مجتمع الصم ومجتمع السامعين باستخدام تقنيات ذكاء اصطناعي.",
    storyP2:
      "نسعى إلى تقديم حل عملي يعمل دون الحاجة إلى اتصال بالإنترنت، ليكون متاحًا في أي وقت ومكان، ويجعل التواصل أكثر سلاسة وفعالية.",
    githubBtn: "عرض المشروع على GitHub",

    missionTitle: "مهمتنا",
    missionDesc:
      "تمكين مستخدمي لغة الإشارة من التواصل بسهولة من خلال حلول ذكية توفر ترجمة فورية وخاصة وبدون إنترنت.",

    visionTitle: "رؤيتنا",
    visionDesc:
      "عالم لا تكون فيه اللغة عائقًا، حيث يمكن للجميع التواصل بسلاسة بغض النظر عن طريقة التعبير.",

    sdgTitle: "متوافق مع أهداف التنمية المستدامة",
    sdgSubtitle:
      "يساهم SignBridge في تعزيز الشمولية وتقليل الفجوات في التواصل باستخدام التكنولوجيا.",
    sdgs: [
      {
        num: "3",
        title: "الصحة الجيدة والرفاه",
        desc: "تحسين جودة الحياة من خلال تسهيل التواصل وتمكين الوصول إلى الخدمات الصحية.",
      },
      {
        num: "4",
        title: "التعليم الجيد",
        desc: "دعم التعلم والتفاعل لذوي الإعاقة السمعية من خلال أدوات ذكية تسهل الوصول للمعلومات.",
      },
      {
        num: "10",
        title: "الحد من عدم المساواة",
        desc: "تمكين التواصل للجميع دون حواجز وتقليل الفجوات داخل المجتمع وخارجه.",
      },
    ],

    stats: [
      { value: "94.3%", label: "دقة التعرف", color: "primary" },
      { value: "<1 ثانية", label: "زمن الاستجابة", color: "secondary" },
      { value: "31", label: "حرف عربي مدعوم", color: "primary" },
      { value: "100%", label: "يعمل بدون إنترنت", color: "secondary" },
    ],

    ctaTitle: "هل تريد معرفة المزيد أو المساهمة؟",
    ctaDesc: "نرحب دائمًا بالمتطوعين والداعمين لنشر تأثير إيجابي أكبر.",
    ctaGithub: "عرض المشروع على GitHub",
    ctaTeam: "تعرف على الفريق",
  },
};

/* ── SDG Badge using real logos ── */
function SDGBadge({ num }) {
  const logos = { "3": sdg3Logo, "4": sdg4Logo, "10": sdg10Logo };
  return (
    <div className="rounded-lg shrink-0 overflow-hidden shadow-lg" style={{ width: "100px", height: "100px" }}>
      <img
        src={logos[num]}
        alt={`SDG ${num}`}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default function About() {
  const { lang } = useLang();
  const c = content[lang];
  const isRTL = lang === "ar";

  const scrollToTeam = () => {
    document.getElementById("team")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-card/15 to-bg" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-secondary/6 rounded-full blur-3xl" />

      {/* Decorative dots */}
      {Array.from({ length: 15 }).map((_, i) => (
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
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-primary/40 mb-6">
            <span className={`text-primary text-xs font-bold tracking-[0.3em] ${lang === "ar" ? "font-arabic" : ""}`}>
              ( {c.badge} )
            </span>
          </div>
          <h2 className={`text-4xl md:text-6xl font-extrabold mb-5 ${lang === "ar" ? "font-arabic" : ""}`}>
            <span className="text-white">{c.title1} </span>
            <span className="text-secondary" style={{ textShadow: "0 0 30px rgba(45,191,160,0.4)" }}>
              {c.title2}
            </span>
          </h2>
          <p className={`text-white/55 text-base max-w-2xl mx-auto leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>
            {c.subtitle}
          </p>
        </motion.div>

        {/* OUR STORY CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-card/40 backdrop-blur-sm border border-white/8 rounded-2xl p-6 md:p-8 mb-5"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* LEFT: Story text */}
            <div className={isRTL ? "lg:order-2" : "lg:order-1"}>
              <div className={`flex items-center gap-3 mb-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                <div
                  className="w-12 h-12 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shrink-0"
                  style={{ boxShadow: "0 0 15px rgba(108,61,232,0.3)" }}
                >
                  <BookOpen size={20} />
                </div>
                <h3 className={`text-white text-2xl font-bold ${lang === "ar" ? "font-arabic" : ""}`}>
                  {c.storyTitle}
                </h3>
              </div>

              <div className={`flex flex-col gap-4 mb-5 ${isRTL ? "text-right" : "text-left"}`}>
                <p className={`text-white/65 text-sm leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>
                  {c.storyP1}
                </p>
                <p className={`text-white/65 text-sm leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>
                  {c.storyP2}
                </p>
              </div>

              <div className={isRTL ? "text-right" : "text-left"}>
                <motion.a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 text-white font-semibold text-sm transition-all duration-300 ${lang === "ar" ? "font-arabic flex-row-reverse" : ""}`}
                >
                  <GitHubIcon size={14} />
                  <span>{c.githubBtn}</span>
                  <ArrowRight size={14} className={isRTL ? "rotate-180" : ""} />
                </motion.a>
              </div>
            </div>

            {/* RIGHT: Story Photo */}
            <div className={isRTL ? "lg:order-1" : "lg:order-2"}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-primary/25 transition-shadow duration-500"
                style={{ boxShadow: "0 0 30px rgba(108,61,232,0.2)" }}
              >
                <img
                  src={storyPhoto}
                  alt="SignBridge Team"
                  className="w-full h-full object-cover"
                />
                {/* Cinematic gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-bg/10 to-transparent" />
                {/* Inner ring accent */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/30 pointer-events-none" />
                {/* Corner brackets accent */}
                <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-primary/60 rounded-tl-md" />
                <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-secondary/60 rounded-tr-md" />
                <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-secondary/60 rounded-bl-md" />
                <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-primary/60 rounded-br-md" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* MISSION & VISION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {/* MISSION */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-6"
            style={{ boxShadow: "0 0 25px rgba(108,61,232,0.1)" }}
          >
            <div className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
              <div
                className="w-14 h-14 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center text-primary shrink-0"
                style={{ boxShadow: "0 0 20px rgba(108,61,232,0.4)" }}
              >
                <Target size={24} />
              </div>
              <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
                <h3 className={`text-white text-xl font-bold mb-2 ${lang === "ar" ? "font-arabic" : ""}`}>
                  {c.missionTitle}
                </h3>
                <p className={`text-white/60 text-sm leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>
                  {c.missionDesc}
                </p>
              </div>
            </div>
          </motion.div>

          {/* VISION */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card/40 backdrop-blur-sm border border-secondary/20 rounded-2xl p-6"
            style={{ boxShadow: "0 0 25px rgba(45,191,160,0.1)" }}
          >
            <div className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
              <div
                className="w-14 h-14 rounded-full bg-secondary/15 border border-secondary/40 flex items-center justify-center text-secondary shrink-0"
                style={{ boxShadow: "0 0 20px rgba(45,191,160,0.4)" }}
              >
                <Eye size={24} />
              </div>
              <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
                <h3 className={`text-white text-xl font-bold mb-2 ${lang === "ar" ? "font-arabic" : ""}`}>
                  {c.visionTitle}
                </h3>
                <p className={`text-white/60 text-sm leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>
                  {c.visionDesc}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SDG IMPACT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-card/40 backdrop-blur-sm border border-white/8 rounded-2xl p-6 md:p-8 mb-5"
        >
          <div className="text-center mb-6">
            <h3 className={`text-white text-xl md:text-2xl font-bold mb-2 ${lang === "ar" ? "font-arabic" : ""}`}>
              {c.sdgTitle}
            </h3>
            <p className={`text-white/55 text-sm max-w-2xl mx-auto ${lang === "ar" ? "font-arabic" : ""}`}>
              {c.sdgSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {c.sdgs.map((sdg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-bg/60 border border-white/10 rounded-xl p-4 flex items-start gap-4 hover:border-white/20 transition-colors ${isRTL ? "flex-row-reverse" : ""}`}
              >
                <SDGBadge num={sdg.num} />
                <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
                  <h4 className={`text-white text-sm font-bold mb-1 ${lang === "ar" ? "font-arabic" : ""}`}>
                    SDG {sdg.num}: {sdg.title}
                  </h4>
                  <p className={`text-white/55 text-xs leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>
                    {sdg.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* PARTNERSHIPS ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          {/* Taylor's */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            whileHover={{ y: -3 }}
            className="bg-card/40 backdrop-blur-sm border border-white/8 rounded-2xl p-5 hover:border-primary/25 transition-all"
          >
            <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
              <div className="bg-white rounded-xl shrink-0 overflow-hidden shadow-lg" style={{ width: "120px", height: "90px" }}>
  <img
    src={taylorsLogo}
    alt="Taylor's University"
    className="w-full h-full object-cover"
  />
</div>
              <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
                <p className={`text-primary text-xs font-bold mb-0.5 ${lang === "ar" ? "font-arabic" : ""}`}>
                  {lang === "ar" ? "الشريك الأكاديمي" : "Academic Partner"}
                </p>
                <p className={`text-white/55 text-[11px] leading-tight ${lang === "ar" ? "font-arabic" : ""}`}>
                  {lang === "ar" ? "كلية علوم الحاسوب والهندسة" : "School of Computer Science & Engineering"}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Darb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -3 }}
            className="bg-card/40 backdrop-blur-sm border border-white/8 rounded-2xl p-5 hover:border-primary/25 transition-all"
          >
            <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
              <div className="bg-white rounded-xl shrink-0 overflow-hidden shadow-lg" style={{ width: "120px", height: "90px" }}>
  <img
    src={darbLogo}
    alt="Darb Hackathon 2026"
    className="w-full h-full object-cover"
  />
</div>
              <div className={`flex-1 ${isRTL ? "text-right" : "text-left"}`}>
                <p className={`text-primary text-xs font-bold mb-0.5 ${lang === "ar" ? "font-arabic" : ""}`}>
                  {lang === "ar" ? "هاكاثون درب 2026" : "Built at Darb Hackathon 2026"}
                </p>
                <p className={`text-white/55 text-[11px] leading-tight ${lang === "ar" ? "font-arabic" : ""}`}>
                  {lang === "ar" ? "مسار الابتكار لإمكانية الوصول" : "Innovation for Accessibility Track"}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* STATS BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card/40 backdrop-blur-sm border border-primary/15 rounded-2xl p-6 md:p-8 mb-5"
          style={{ boxShadow: "0 0 30px rgba(108,61,232,0.1)" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2">
            {c.stats.map((stat, i) => (
              <div
                key={i}
                className={`text-center ${i > 0 ? "md:border-l md:border-white/10" : ""}`}
              >
                <div
                  className={`text-3xl md:text-5xl font-extrabold mb-2 ${
                    stat.color === "primary" ? "text-primary" : "text-secondary"
                  }`}
                  style={{
                    textShadow:
                      stat.color === "primary"
                        ? "0 0 20px rgba(108,61,232,0.4)"
                        : "0 0 20px rgba(45,191,160,0.4)",
                  }}
                >
                  {stat.value}
                </div>
                <div className={`text-white/55 text-xs md:text-sm font-medium ${lang === "ar" ? "font-arabic" : ""}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl p-6 md:p-8 relative overflow-hidden border border-primary/30"
          style={{
            background:
              "linear-gradient(135deg, rgba(108,61,232,0.15) 0%, rgba(45,191,160,0.05) 100%)",
            boxShadow: "0 0 40px rgba(108,61,232,0.15)",
          }}
        >
          {/* floating particles */}
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

          <div className={`relative flex flex-col md:flex-row items-center gap-5 ${isRTL ? "md:flex-row-reverse" : ""}`}>
            <div
              className="w-14 h-14 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center text-primary shrink-0"
              style={{ boxShadow: "0 0 20px rgba(108,61,232,0.4)" }}
            >
              <Users size={24} />
            </div>

            <div className={`flex-1 text-center ${isRTL ? "md:text-right" : "md:text-left"}`}>
              <h3 className={`text-white text-lg md:text-xl font-bold mb-1 ${lang === "ar" ? "font-arabic" : ""}`}>
                {c.ctaTitle}
              </h3>
              <p className={`text-white/55 text-xs md:text-sm ${lang === "ar" ? "font-arabic" : ""}`}>
                {c.ctaDesc}
              </p>
            </div>

            <div className={`flex flex-col sm:flex-row gap-3 shrink-0 ${isRTL ? "sm:flex-row-reverse" : ""}`}>
              <motion.a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-white font-bold text-sm border border-primary/40 transition-all ${lang === "ar" ? "font-arabic" : ""}`}
                style={{
                  background: "linear-gradient(135deg, #6C3DE8 0%, #8B5CF6 100%)",
                  boxShadow: "0 0 20px rgba(108,61,232,0.5)",
                }}
              >
                <GitHubIcon size={14} />
                {c.ctaGithub}
              </motion.a>

              <motion.button
                onClick={scrollToTeam}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-white/20 text-white font-bold text-sm bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all ${lang === "ar" ? "font-arabic" : ""}`}
              >
                <span>{c.ctaTeam}</span>
                <ArrowRight size={14} className={isRTL ? "rotate-180" : ""} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}