import { motion } from "framer-motion";
import {
  Crown,
  Brain,
  Mic,
  Palette,
  Megaphone,
  Mail,
  Briefcase,
  Settings,
  Users,
} from "lucide-react";
import { useLang } from "../context/LanguageContext";

// ─── Team member photos ─────────────────────────────
import khaledPhoto from "../assets/team/khaled waleed.jpeg";
import abdullahWaleedPhoto from "../assets/team/abdullah walled.jpeg";
import abdullahSharafPhoto from "../assets/team/abdullah sharaf (2).png";
import abdulqaderPhoto from "../assets/team/abdulqader.jpeg";
import ashrafPhoto from "../assets/team/asheaf.jpeg";

// ─── Brand icons (custom SVGs) ──────────────────────
const GitHubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedInIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GITHUB_URL = "https://github.com/khh4lid/SignBridge";

const team = {
  technical: [
    {
      id: "khaled",
      photo: khaledPhoto,
      icon: <Crown size={18} />,
      iconColor: "primary",
      ringColor: "primary",
      lead: true,
      en: {
        name: "Khaled Ba Tais",
        role: "Hardware & Integration Lead",
        bio: "Raspberry Pi 5 setup, camera integration, system pipeline & project management.",
      },
      ar: {
        name: "خالد باتيس",
        role: "قائد العتاد والتكامل",
        bio: "إعداد Raspberry Pi 5، تكامل الكاميرا، بناء مسار النظام بالكامل وإدارة المشروع.",
      },
      links: {
        github: "https://github.com/khh4lid",
        linkedin: "https://www.linkedin.com/in/khaled-ba-tais-43b9153b2",
        email: "Khaled0wleed@gmail.com",
      },
    },
    {
      id: "abdullah-waleed",
      photo: abdullahWaleedPhoto,
      icon: <Brain size={18} />,
      iconColor: "secondary",
      ringColor: "secondary",
      en: {
        name: "Abdullah Waleed",
        role: "AI & Data Engineer",
        bio: "Model training, MediaPipe landmark extraction & 78-feature algorithm achieving 94.3% accuracy.",
      },
      ar: {
        name: "عبدالله وليد",
        role: "مهندس ذكاء اصطناعي وبيانات",
        bio: "تدريب النموذج، استخراج معالم الجسم باستخدام MediaPipe وبناء خوارزمية بـ 78 ميزة حققت دقة 94.3%.",
      },
      links: {
        github: "https://github.com/3bdullah-waleed",
        linkedin: "https://www.linkedin.com/in/abdullah-waleed-100294308",
        email: "ffkkller@gmail.com",
      },
    },
    {
      id: "abdullah-sharaf",
      photo: abdullahSharafPhoto,
      icon: <Mic size={18} />,
      iconColor: "blue",
      ringColor: "blue",
      en: {
        name: "Abdullah Sharaf",
        role: "Audio Engineer & Web Dev",
        bio: "Arabic TTS integration, Bluetooth speaker, and built & published the full project website.",
      },
      ar: {
        name: "عبدالله شرف",
        role: "مهندس صوت وتطوير ويب",
        bio: "دمج تحويل النص إلى كلام باللغة العربية، مكبر صوت بلوتوث، وبناء وتطوير ونشر الموقع الإلكتروني للمشروع بالكامل.",
      },
      links: {
        github: "https://github.com/abdullahnsharaf",
        linkedin: "https://www.linkedin.com/in/abdullah-sharaf-41a848407",
        email: "abdullah.n.sharaf@gmail.com",
      },
    },
  ],
  business: [
    {
      id: "abdulqader",
      photo: abdulqaderPhoto,
      icon: <Palette size={18} />,
      iconColor: "orange",
      ringColor: "orange",
      en: {
        name: "Abdulqader Al-Saqqaf",
        role: "Design & Business Lead",
        bio: "Product design, UX, business plan, market research & deployment roadmap for Saudi Arabia.",
      },
      ar: {
        name: "عبدالقادر السقاف",
        role: "قائد التصميم والأعمال",
        bio: "تصميم المنتج وتجربة المستخدم، إعداد خطة العمل، أبحاث السوق، وخارطة طريق لنشر المشروع في المملكة العربية السعودية.",
      },
      links: {
        github: "https://github.com/Alsaggaf2005",
        linkedin: "https://www.linkedin.com/in/abdulgader-alsaggaf-517906280",
        email: "a.alsggaf.a@gmail.com",
      },
    },
    {
      id: "ashraf",
      photo: ashrafPhoto,
      icon: <Megaphone size={18} />,
      iconColor: "primary",
      ringColor: "primary",
      en: {
        name: "Ashraf Al-Junaidi",
        role: "Marketing & Strategy Lead",
        bio: "Brand identity, digital marketing, target market definition & Darb 2025 hackathon presentation.",
      },
      ar: {
        name: "أشرف الجنيدي",
        role: "قائد التسويق والاستراتيجية",
        bio: "بناء الهوية التجارية، التسويق الرقمي، تحديد الشريحة المستهدفة، وإعداد عرض مشروع هاكاثون درب 2025.",
      },
      links: {
        github: "https://github.com/IQ-zero",
        linkedin: "https://www.linkedin.com/in/asharf-fuad-algunaid-4b47b6391",
        email: "ashrafalgunaid@gmail.com",
      },
    },
  ],
};

const content = {
  en: {
    badge: "MEET THE TEAM",
    title1: "The People Behind",
    title2: "SignBridge",
    subtitle: "Giving Voice to the Silent — إعطاء صوت للصامتين",
    description:
      "A group of passionate students, innovators, and problem solvers building inclusive technology for the Deaf community.",

    quoteP1:
      "We are a team of AI and Data Science students from Taylor's University, one of the world's top 100 institutions — and we believe the most powerful application of intelligence is empathy.",
    quoteP2a:
      "SignBridge was born from a shared conviction: real-time Arabic Sign Language translation should not be a luxury, should not require the cloud, and should not cost more than what an average family can afford.",
    quoteP3a: "At ",
    quoteP3hl1: "Darb Hackathon 2025",
    quoteP3b:
      ", we engineered a complete hardware-AI pipeline — from a 16MP autofocus camera and Raspberry Pi 5 to a custom-trained model achieving ",
    quoteP3hl2: "94.3% accuracy",
    quoteP3c: " with sub-second latency — running ",
    quoteP3hl3: "entirely offline",
    quoteP3d: ", in the hands of anyone who needs it.",
    quoteP4: "Our academic foundation gave us the tools. Our humanity gave us the reason.",

    technicalTeam: "Technical Team",
    businessTeam: "Business & Marketing Team",

    ctaTitle: "Want to collaborate or learn more?",
    ctaDesc:
      "We're always open to new ideas, partnerships, and opportunities to create impact together.",
    ctaContact: "Get in Touch",
    ctaGithub: "View on GitHub",
  },
  ar: {
    badge: "تعرف على الفريق",
    title1: "الأشخاص وراء",
    title2: "SignBridge",
    subtitle: "إعطاء صوت للصامتين",
    description:
      "فريق من الطلاب الشغوفين والمبتكرين وخلال المشاكل، نعمل على بناء تقنية شاملة تخدم مجتمع الصم وضعاف السمع.",

    quoteP1:
      "نحن فريق من طلاب الذكاء الاصطناعي وعلوم البيانات في جامعة تايلورز، واحدة من أفضل 100 جامعة في العالم — ونؤمن بأن أعظم تطبيق للذكاء هو التعاطف.",
    quoteP2a:
      "ولدت فكرة SignBridge من قناعة مشتركة: أن ترجمة لغة الإشارة العربية في الوقت الحقيقي لا يجب أن تكون رفاهية، ولا أن تتطلب الاتصال بالسحابة، ولا أن تكلف أكثر مما يمكن أن تتحمله العائلة المتوسطة.",
    quoteP3a:
      "في هاكاثون درب 2025، قمنا ببناء منظومة متكاملة تجمع بين العتاد والذكاء الاصطناعي — من كاميرا بدقة 16MP مع تركيز تلقائي وRaspberry Pi 5 إلى نموذج مخصص بدقة ",
    quoteP3hl1: "Darb Hackathon 2025",
    quoteP3b: "",
    quoteP3hl2: "94.3%",
    quoteP3c: " وزمن استجابة أقل من ثانية — يعمل بالكامل دون اتصال بالإنترنت، وفي متناول كل من يحتاجه.",
    quoteP3hl3: "بالكامل دون إنترنت",
    quoteP3d: "",
    quoteP4: "أساسنا الأكاديمي مَنَحنا الأدوات، وإنسانيتنا مَنَحتنا السبب.",

    technicalTeam: "الفريق التقني",
    businessTeam: "فريق الأعمال والتسويق",

    ctaTitle: "هل ترغب في التعاون معنا؟",
    ctaDesc: "نحن دائماً منفتحون للأفكار والشراكات والفرص التي تصنع أثراً حقيقياً معاً.",
    ctaContact: "تواصل معنا",
    ctaGithub: "عرض على GitHub",
  },
};

const colorMap = {
  primary: {
    hex: "#6C3DE8",
    rgba: "108,61,232",
    bg: "bg-primary/15",
    border: "border-primary/40",
    text: "text-primary",
    glow: "0 0 20px rgba(108,61,232,0.5)",
  },
  secondary: {
    hex: "#2DBFA0",
    rgba: "45,191,160",
    bg: "bg-secondary/15",
    border: "border-secondary/40",
    text: "text-secondary",
    glow: "0 0 20px rgba(45,191,160,0.5)",
  },
  blue: {
    hex: "#3B82F6",
    rgba: "59,130,246",
    bg: "bg-blue-500/15",
    border: "border-blue-400/40",
    text: "text-blue-400",
    glow: "0 0 20px rgba(59,130,246,0.5)",
  },
  orange: {
    hex: "#FB923C",
    rgba: "251,146,60",
    bg: "bg-orange-400/15",
    border: "border-orange-400/40",
    text: "text-orange-400",
    glow: "0 0 20px rgba(251,146,60,0.5)",
  },
};

/* Single team member card */
function TeamCard({ member, lang, isRTL, index }) {
  const colors = colorMap[member.iconColor];
  const data = member[lang];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="relative bg-card/40 backdrop-blur-sm border border-white/8 rounded-2xl p-6 transition-all duration-300 hover:border-white/20"
    >
      {/* Top-left badge icon */}
      <div
        className={`absolute top-4 ${isRTL ? "right-4" : "left-4"} w-9 h-9 rounded-lg ${colors.bg} ${colors.border} border flex items-center justify-center ${colors.text}`}
        style={{ boxShadow: colors.glow }}
      >
        {member.icon}
      </div>

      {/* Lead badge */}
      {member.lead && (
        <div
          className={`absolute top-4 ${isRTL ? "left-4" : "right-4"} text-[10px] font-bold text-primary tracking-wider`}
        >
          LEAD
        </div>
      )}

      {/* Photo with glowing ring */}
      <div className="flex justify-center mb-4 mt-4">
        <div
          className="relative w-32 h-32 rounded-full p-1"
          style={{
            background: `linear-gradient(135deg, ${colors.hex} 0%, transparent 70%)`,
            boxShadow: colors.glow,
          }}
        >
          <img
            src={member.photo}
            alt={data.name}
            className="w-full h-full rounded-full object-cover border-2 border-bg"
          />
        </div>
      </div>

      {/* Name */}
      <h3 className={`text-white text-lg font-bold text-center mb-1 ${lang === "ar" ? "font-arabic" : ""}`}>
        {data.name}
      </h3>

      {/* Role */}
      <p
        className={`text-center text-sm font-semibold mb-1 ${colors.text} ${lang === "ar" ? "font-arabic" : ""}`}
      >
        {data.role}
      </p>

      {/* Underline */}
      <div className="flex justify-center mb-4">
        <div
          className="w-12 h-0.5 rounded-full"
          style={{ background: colors.hex, boxShadow: colors.glow }}
        />
      </div>

      {/* Bio */}
      <p
        className={`text-white/55 text-xs leading-relaxed text-center mb-5 min-h-[60px] ${lang === "ar" ? "font-arabic" : ""}`}
      >
        {data.bio}
      </p>

      {/* Social links */}
      <div className="flex items-center justify-center gap-3">
        <SocialLink href={member.links.github} icon={<GitHubIcon size={14} />} label="GitHub" />
        <SocialLink href={member.links.linkedin} icon={<LinkedInIcon size={14} />} label="LinkedIn" />
        <SocialLink
          href={`mailto:${member.links.email}`}
          icon={<Mail size={14} />}
          label="Email"
          external={false}
        />
      </div>
    </motion.div>
  );
}

function SocialLink({ href, icon, label, external = true }) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="w-9 h-9 rounded-full border border-white/15 bg-white/5 hover:bg-primary/15 hover:border-primary/40 flex items-center justify-center text-white/70 hover:text-primary transition-all duration-200"
    >
      {icon}
    </motion.a>
  );
}

export default function Team() {
  const { lang } = useLang();
  const c = content[lang];
  const isRTL = lang === "ar";

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="team" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-card/15 to-bg" />
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-[450px] h-[450px] bg-secondary/6 rounded-full blur-3xl" />

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
          <h2 className={`text-4xl md:text-6xl font-extrabold mb-4 ${lang === "ar" ? "font-arabic" : ""}`}>
            <span className="text-white">{c.title1} </span>
            <span
              className="bg-gradient-to-r from-primary via-purple-400 to-blue-400 bg-clip-text text-transparent"
              style={{ filter: "drop-shadow(0 0 20px rgba(108,61,232,0.3))" }}
            >
              {c.title2}
            </span>
          </h2>
          <p
            className={`text-primary font-bold text-base md:text-lg mb-3 ${lang === "ar" ? "font-arabic" : ""}`}
            style={{ textShadow: "0 0 15px rgba(108,61,232,0.4)" }}
          >
            {c.subtitle}
          </p>
          <p
            className={`text-white/55 text-base max-w-2xl mx-auto leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}
          >
            {c.description}
          </p>
        </motion.div>

        {/* QUOTE STORY CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-card/40 backdrop-blur-sm border border-white/8 rounded-2xl p-6 md:p-8 mb-12 overflow-hidden"
        >
          {/* Big quote mark */}
          <div
            className={`absolute top-4 ${isRTL ? "right-6" : "left-6"} text-primary/30 select-none pointer-events-none`}
            style={{ fontSize: "120px", lineHeight: "1", fontFamily: "Georgia, serif" }}
          >
            "
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center relative z-10 ${isRTL ? "md:[direction:rtl]" : ""}`}
          >
            {/* Text content */}
            <div className={`flex flex-col gap-4 ${isRTL ? "text-right md:pr-12" : "md:pl-12"}`}>
              <p className={`text-white/75 text-sm md:text-base leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>
                {c.quoteP1}
              </p>
              <p className={`text-white/75 text-sm md:text-base leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>
                {c.quoteP2a}
              </p>
              <p className={`text-white/75 text-sm md:text-base leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>
                {lang === "en" ? (
                  <>
                    {c.quoteP3a}
                    <span className="text-primary font-semibold">{c.quoteP3hl1}</span>
                    {c.quoteP3b}
                    <span className="text-secondary font-semibold">{c.quoteP3hl2}</span>
                    {c.quoteP3c}
                    <span className="text-primary font-semibold">{c.quoteP3hl3}</span>
                    {c.quoteP3d}
                  </>
                ) : (
                  <>
                    {c.quoteP3a}
                    <span className="text-secondary font-semibold">{c.quoteP3hl2}</span>
                    {c.quoteP3c}
                  </>
                )}
              </p>
              <p className={`text-white font-semibold text-sm md:text-base leading-relaxed ${lang === "ar" ? "font-arabic" : ""}`}>
                {c.quoteP4}
              </p>
            </div>

            {/* Hand illustration */}
            <div className="hidden md:flex items-center justify-center">
              <svg viewBox="0 0 120 140" className="w-32 h-40" fill="none">
                <defs>
                  <linearGradient id="handGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6C3DE8" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#2DBFA0" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M40 130 L40 80 Q40 70 50 70 L50 30 Q50 20 60 20 Q70 20 70 30 L70 60 L75 60 L75 25 Q75 15 85 15 Q95 15 95 25 L95 65 L80 90 L80 130 Z"
                  stroke="url(#handGrad)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2 }}
                />
                {[
                  { cx: 30, cy: 50, r: 1.5 },
                  { cx: 105, cy: 70, r: 1.5 },
                  { cx: 25, cy: 100, r: 1 },
                  { cx: 100, cy: 30, r: 1 },
                ].map((dot, i) => (
                  <motion.circle
                    key={i}
                    cx={dot.cx}
                    cy={dot.cy}
                    r={dot.r}
                    fill="#6C3DE8"
                    animate={{ opacity: [0.3, 0.9, 0.3] }}
                    transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                    style={{ filter: "drop-shadow(0 0 4px #6C3DE8)" }}
                  />
                ))}
              </svg>
            </div>
          </div>
        </motion.div>

        {/* TECHNICAL TEAM */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="flex-1 max-w-[100px] h-px bg-gradient-to-r from-transparent to-primary/40" />
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary"
                style={{ boxShadow: "0 0 15px rgba(108,61,232,0.3)" }}
              >
                <Settings size={18} />
              </div>
              <h3 className={`text-white text-2xl font-bold ${lang === "ar" ? "font-arabic" : ""}`}>
                {c.technicalTeam}
              </h3>
            </div>
            <div className="flex-1 max-w-[100px] h-px bg-gradient-to-l from-transparent to-primary/40" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.technical.map((member, i) => (
              <TeamCard key={member.id} member={member} lang={lang} isRTL={isRTL} index={i} />
            ))}
          </div>
        </div>

        {/* BUSINESS TEAM */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="flex-1 max-w-[100px] h-px bg-gradient-to-r from-transparent to-primary/40" />
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary"
                style={{ boxShadow: "0 0 15px rgba(108,61,232,0.3)" }}
              >
                <Briefcase size={18} />
              </div>
              <h3 className={`text-white text-2xl font-bold ${lang === "ar" ? "font-arabic" : ""}`}>
                {c.businessTeam}
              </h3>
            </div>
            <div className="flex-1 max-w-[100px] h-px bg-gradient-to-l from-transparent to-primary/40" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {team.business.map((member, i) => (
              <TeamCard key={member.id} member={member} lang={lang} isRTL={isRTL} index={i} />
            ))}
          </div>
        </div>

        {/* CTA STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl p-6 md:p-8 relative overflow-hidden border border-primary/30"
          style={{
            background: "linear-gradient(135deg, rgba(108,61,232,0.15) 0%, rgba(45,191,160,0.05) 100%)",
            boxShadow: "0 0 40px rgba(108,61,232,0.15)",
          }}
        >
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
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-white font-bold text-sm border border-primary/40 transition-all ${lang === "ar" ? "font-arabic" : ""}`}
                style={{
                  background: "linear-gradient(135deg, #6C3DE8 0%, #8B5CF6 100%)",
                  boxShadow: "0 0 20px rgba(108,61,232,0.5)",
                }}
              >
                <Mail size={14} />
                {c.ctaContact}
              </motion.button>

              <motion.a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-white/20 text-white font-bold text-sm bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all ${lang === "ar" ? "font-arabic" : ""}`}
              >
                <GitHubIcon size={14} />
                {c.ctaGithub}
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}