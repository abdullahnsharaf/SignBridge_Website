import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Play, ChevronDown } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import logo from "../assets/signbridge_logo_transparent.png";

const navLinks = ["home", "product", "demo", "features", "about", "achievements", "vision", "team", "contact"];

export default function Navbar() {
  const { lang, t, toggleLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers = [];
    navLinks.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const isRTL = lang === "ar";

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-2xl border-b border-white/8 shadow-[0_4px_40px_rgba(108,61,232,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between h-24 ${isRTL ? "flex-row-reverse" : ""}`}>

          {/* ── BIG LOGO ── */}
          <button
            onClick={() => scrollTo("home")}
            className={`flex items-center gap-3 group ${isRTL ? "flex-row-reverse" : ""}`}
          >
            <img
              src={logo}
              alt="SignBridge Logo"
              className="h-16 w-16 md:h-20 md:w-20 object-contain drop-shadow-[0_0_20px_rgba(108,61,232,0.5)] transition-transform duration-300 group-hover:scale-105"
            />
            <div className={isRTL ? "text-right" : "text-left"}>
              <div className="text-2xl md:text-3xl font-extrabold tracking-tight leading-none">
                <span className="text-primary">Sign</span>
                <span className="text-secondary">Bridge</span>
              </div>
              <p className={`text-xs text-white/55 leading-tight mt-1.5 font-medium ${lang === "ar" ? "font-arabic" : ""}`}>
                {t.tagline}
              </p>
            </div>
          </button>

          {/* ── DESKTOP NAV LINKS ── */}
          <div className={`hidden lg:flex items-center gap-1 ${isRTL ? "flex-row-reverse" : ""}`}>
            {navLinks.map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200
                  ${active === id ? "text-secondary" : "text-white/70 hover:text-white"}
                  ${lang === "ar" ? "font-arabic" : ""}`}
              >
                {t.nav[id]}
                {active === id && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-secondary rounded-full"
                    style={{ boxShadow: "0 0 8px rgba(45,191,160,0.6)" }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* ── RIGHT: CTA + LANG TOGGLE ── */}
          <div className={`hidden lg:flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("demo")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-white text-sm font-bold border border-primary/40 transition-shadow duration-300 ${lang === "ar" ? "font-arabic" : ""}`}
              style={{
                background: "linear-gradient(135deg, #6C3DE8 0%, #8B5CF6 100%)",
                boxShadow: "0 0 20px rgba(108,61,232,0.4)",
              }}
            >
              <Play size={14} fill="white" />
              {t.nav.cta}
            </motion.button>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 transition-all duration-200 text-sm"
              >
                <span className="text-base">{lang === "en" ? "🇬🇧" : "🇸🇦"}</span>
                <span className="text-white/90 font-semibold text-xs">{lang === "en" ? "EN" : "AR"}</span>
                <ChevronDown size={14} className={`text-white/60 transition-transform ${langOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 right-0 bg-card/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden min-w-[140px] shadow-xl"
                  >
                    <button
                      onClick={() => { toggleLang("en"); setLangOpen(false); }}
                      className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-primary/20 transition-colors ${lang === "en" ? "bg-primary/15 text-secondary" : "text-white/80"}`}
                    >
                      <span>🇬🇧</span>
                      <span className="font-semibold">English</span>
                    </button>
                    <button
                      onClick={() => { toggleLang("ar"); setLangOpen(false); }}
                      className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-primary/20 transition-colors font-arabic ${lang === "ar" ? "bg-primary/15 text-secondary" : "text-white/80"}`}
                    >
                      <span>🇸🇦</span>
                      <span className="font-semibold">العربية</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-card/95 backdrop-blur-xl border-t border-white/8"
          >
            <div className={`px-4 py-6 flex flex-col gap-1.5 ${isRTL ? "items-end" : "items-start"}`}>
              {navLinks.map((id, i) => (
                <motion.button
                  key={id}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => scrollTo(id)}
                  className={`w-full py-3 px-4 rounded-lg text-sm font-medium transition-colors
                    ${isRTL ? "text-right" : "text-left"}
                    ${lang === "ar" ? "font-arabic" : ""}
                    ${active === id ? "bg-primary/20 text-secondary" : "text-white/70 hover:bg-white/5 hover:text-white"}`}
                >
                  {t.nav[id]}
                </motion.button>
              ))}

              <div className={`flex gap-2 pt-4 mt-2 border-t border-white/10 w-full ${isRTL ? "flex-row-reverse" : ""}`}>
                <button
                  onClick={() => { toggleLang("en"); setMenuOpen(false); }}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all
                    ${lang === "en" ? "bg-primary text-white" : "bg-white/5 text-white/60"}`}
                >
                  🇬🇧 English
                </button>
                <button
                  onClick={() => { toggleLang("ar"); setMenuOpen(false); }}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all font-arabic
                    ${lang === "ar" ? "bg-primary text-white" : "bg-white/5 text-white/60"}`}
                >
                  🇸🇦 العربية
                </button>
              </div>

              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("demo")}
                className={`w-full mt-2 py-3 rounded-xl bg-primary text-white text-sm font-bold flex items-center justify-center gap-2 ${lang === "ar" ? "font-arabic" : ""}`}
                style={{ boxShadow: "0 0 20px rgba(108,61,232,0.4)" }}
              >
                <Play size={14} fill="white" />
                {t.nav.cta}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}