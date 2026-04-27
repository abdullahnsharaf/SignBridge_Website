import { createContext, useContext, useState } from "react";
import { translations } from "../i18n/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  const toggleLang = (l) => setLang(l);

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      <div dir={t.dir} lang={t.lang} className={t.lang === "ar" ? "font-arabic" : "font-sans"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);