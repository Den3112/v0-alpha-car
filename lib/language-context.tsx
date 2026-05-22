"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("sk");

  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem("preferred-language") as Language;
    if (savedLang && (savedLang === "sk" || savedLang === "en" || savedLang === "ru")) {
      setLanguageState(savedLang);
    } else {
      // Try to match browser language
      const browserLang = navigator.language.split("-")[0];
      if (browserLang === "ru") {
        setLanguageState("ru");
      } else if (browserLang === "en") {
        setLanguageState("en");
      } else {
        setLanguageState("sk");
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("preferred-language", lang);
    // Dynamic lang attribute update for SEO and accessibility
    document.documentElement.lang = lang;
  };

  // Safe nested translation getter by dot-separated path (e.g. 'header.services')
  const t = (path: string): any => {
    const keys = path.split(".");
    let current: any = translations[language];
    for (const key of keys) {
      if (current && typeof current === "object" && key in current) {
        current = current[key];
      } else {
        // Fallback to English if translation is missing in current language
        let fallback: any = translations["en"];
        for (const fKey of keys) {
          if (fallback && typeof fallback === "object" && fKey in fallback) {
            fallback = fallback[fKey];
          } else {
            return path;
          }
        }
        return fallback;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
