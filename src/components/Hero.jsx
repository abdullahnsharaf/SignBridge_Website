import { motion } from "framer-motion";
import { Play } from "lucide-react";
import deviceHero from "../assets/signbridge_device_hero.png";
import { useLang } from "../context/LanguageContext";

const content = {
  en: {
    badge: ["100% Offline", "Real-Time AI", "Private & Secure"],
    tagline: "We Give Sign a Voice",
    description:
      "AI-powered device that translates Arabic Sign Language into speech and voice into text — enabling two-way communication, even offline.",
    cta1: "Try Demo",
    cta2: "View on GitHub",
  },
  ar: {
    badge: ["يعمل بدون إنترنت", "ذكاء اصطناعي فوري", "آمن وخاص"],
    tagline: "نمنح الإشارة صوتاً",
    description:
      "جهاز مدعوم بالذكاء الاصطناعي يحول لغة الإشارة العربية إلى صوت، والصوت إلى نص، لتمكين التواصل ثنائي الاتجاه حتى بدون إنترنت.",
    cta1: "جرّب الآن",
    cta2: "عرض على GitHub",
  },
};

function DeviceHeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -14, 0],
      }}
      transition={{
        opacity: { duration: 0.8, delay: 0.3 },
        scale: { duration: 0.8, delay: 0.3 },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{ scale: 1.03 }}
      className="relative z-10 w-full flex justify-center"
    >
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-8 left-1/2 h-24 w-96 -translate-x-1/2 rounded-full bg-secondary/15 blur-3xl" />

      {/* Image */}
      <img
        src={deviceHero}
        alt="SignBridge Device"
        className="relative w-[390px] sm:w-[500px] md:w-[620px] lg:w-[760px] max-w-none object-contain
        drop-shadow-[0_40px_100px_rgba(108,61,232,0.35)]"
      />
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
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen overflow-hidden pt-28 flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-bg to-secondary/5" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(108,61,232,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(108,61,232,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div
          className={`grid md:grid-cols-2 items-center gap-8 lg:gap-10 ${
            isRTL ? "md:[direction:rtl]" : ""
          }`}
        >
          {/* TEXT */}
          <div className={`${isRTL ? "text-right" : "text-left"}`}>
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-6 flex ${isRTL ? "justify-end" : "justify-start"}`}
            >
              <div className="flex flex-wrap gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 backdrop-blur-md">
                {c.badge.map((item) => (
                  <span key={item} className="text-xs text-secondary font-semibold">
                    • {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* HEADLINE */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-5 max-w-3xl text-[clamp(2.6rem,4.2vw,4.8rem)] font-extrabold leading-[1.08] ${
                lang === "ar" ? "font-arabic" : ""
              }`}
            >
              {lang === "en" ? (
                <>
                  <span className="text-white">Real-Time Arabic Sign Language</span>
                  <br />
                  <span className="text-secondary">to Speech</span>
                </>
              ) : (
                <>
                  <span className="text-white">ترجمة لغة الإشارة العربية</span>
                  <br />
                  <span className="text-white">إلى </span>
                  <span className="text-secondary">صوت</span>
                  <br />
                  <span className="text-white">في الوقت الحقيقي</span>
                </>
              )}
            </motion.h1>

            {/* Tagline */}
            <p className="text-primary font-bold mb-4 text-lg">
              {c.tagline}
            </p>

            {/* Description */}
            <p className="text-white/60 mb-8 max-w-xl">
              {c.description}
            </p>

            {/* CTA */}
            <div className="flex gap-4">
              <a
                href="https://huggingface.co/spaces/Khaled0wleed/SignBridge"
                target="_blank"
                className="flex items-center gap-2 px-7 py-3 rounded-xl bg-primary text-white font-bold"
              >
                <Play size={16} fill="white" />
                {c.cta1}
              </a>

              <a
                href="https://github.com/khh4lid/SignBridge"
                target="_blank"
                className="px-7 py-3 rounded-xl border border-white/20 text-white"
              >
                {c.cta2}
              </a>
            </div>
          </div>

          {/* DEVICE */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative flex min-h-[520px] items-center justify-center"
          >
            <DeviceHeroImage />
          </motion.div>
        </div>
      </div>
    </section>
  );
}