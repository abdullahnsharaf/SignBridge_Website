import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import logo from "../assets/signbridge_logo_transparent.png";

const navLinks = ["home", "product", "demo", "features", "about", "team", "contact"];

export default function Navbar() {
  const { lang, t, toggleLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

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
          ? "bg-bg/70 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_40px_rgba(108,61,232,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between h-16 md:h-20 ${isRTL ? "flex-row-reverse" : ""}`}>

          {/* ✅ LOGO */}
          <button
            onClick={() => scrollTo("home")}
            className={`flex items-center gap-3 group ${isRTL ? "flex-row-reverse" : ""}`}
          >
            <img
              src={logo}
              alt="SignBridge Logo"
              className="h-12 md:h-14 lg:h-16 w-auto object-contain"
            />
            <div className={`${isRTL ? "text-right" : "text-left"}`}>
              <span className="text-xl font-extrabold tracking-tight">
                <span className="text-primary">Sign</span>
                <span className="text-white">Bridge</span>
              </span>
              <p className="text-[10px] text-secondary leading-none mt-0.5 font-medium">
                {t.tagline}
              </p>
            </div>
          </button>

          {/* ✅ DESKTOP NAV LINKS */}
          <div className={`hidden md:flex items-center gap-1 ${isRTL ? "flex-row-reverse" : ""}`}>
            {navLinks.map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg
                  ${active === id ? "text-secondary" : "text-white/60 hover:text-white"}`}
              >
                {t.nav[id]}
                {active === id && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-secondary rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          {/* ✅ RIGHT: CTA + LANGUAGE TOGGLE */}
          <div className={`hidden md:flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
            {/* Language Toggle */}
            <div className="flex items-center gap-1 p-1 rounded-xl border border-white/10 bg-white/5">
              <button
                onClick={() => toggleLang("ar")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200
                  ${lang === "ar" ? "bg-primary text-white shadow-[0_0_12px_rgba(108,61,232,0.5)]" : "text-white/50 hover:text-white"}`}
              >
                🇸🇦 العربية
              </button>
              <button
                onClick={() => toggleLang("en")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200
                  ${lang === "en" ? "bg-primary text-white shadow-[0_0_12px_rgba(108,61,232,0.5)]" : "text-white/50 hover:text-white"}`}
              >
                🇬🇧 EN
              </button>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("demo")}
              className="px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-bold
                shadow-[0_0_20px_rgba(108,61,232,0.4)] hover:shadow-[0_0_30px_rgba(108,61,232,0.65)]
                transition-shadow duration-300 border border-primary/60"
            >
              {t.nav.cta}
            </motion.button>
          </div>

          {/* ✅ MOBILE HAMBURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white/70 hover:text-white p-2"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ✅ MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-card/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className={`px-4 py-6 flex flex-col gap-2 ${isRTL ? "items-end" : "items-start"}`}>
              {navLinks.map((id, i) => (
                <motion.button
                  key={id}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(id)}
                  className={`w-full py-3 px-4 rounded-lg text-sm font-medium transition-colors
                    ${isRTL ? "text-right" : "text-left"}
                    ${active === id ? "bg-primary/20 text-secondary" : "text-white/70 hover:bg-white/5 hover:text-white"}`}
                >
                  {t.nav[id]}
                </motion.button>
              ))}

              {/* Mobile Lang Toggle */}
              <div className={`flex gap-2 pt-4 border-t border-white/10 w-full ${isRTL ? "flex-row-reverse" : ""}`}>
                <button
                  onClick={() => { toggleLang("ar"); setMenuOpen(false); }}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-semibold transition-all
                    ${lang === "ar" ? "bg-primary text-white" : "bg-white/5 text-white/50"}`}
                >
                  🇸🇦 العربية
                </button>
                <button
                  onClick={() => { toggleLang("en"); setMenuOpen(false); }}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-semibold transition-all
                    ${lang === "en" ? "bg-primary text-white" : "bg-white/5 text-white/50"}`}
                >
                  🇬🇧 English
                </button>
              </div>

              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("demo")}
                className="w-full mt-2 py-3 rounded-xl bg-primary text-white text-sm font-bold
                  shadow-[0_0_20px_rgba(108,61,232,0.4)]"
              >
                {t.nav.cta}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}