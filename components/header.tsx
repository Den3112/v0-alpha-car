"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/421950261896?text=${encodeURIComponent(t("whatsappTemplates.booking"))}`;

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md rounded-full" : "bg-transparent"}`}
      style={{
        boxShadow: isScrolled
          ? "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px"
          : "none",
      }}
    >
      <div className="flex items-center justify-between transition-all duration-300 px-2 pl-5 py-2">
        {/* Logo */}
        <Link
          href="#"
          className="group flex items-center gap-3 transition-all duration-300"
        >
          {/* Shield Logo Icon */}
          <div className="relative w-9 h-9 transition-transform duration-300 group-hover:scale-105 drop-shadow-lg">
            <Image
              src="/logo-alpha.svg"
              alt="Alpha Car Service logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          {/* Brand Text */}
          <div className="flex flex-col leading-none">
            <span className={`font-black tracking-[0.18em] text-[13px] md:text-[15px] uppercase transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-white"}`}>
              ALPHA
            </span>
            <span className={`font-semibold tracking-[0.3em] text-[7px] md:text-[8px] uppercase transition-colors duration-300 ${isScrolled ? "text-red-500" : "text-red-400"}`}>
              Car Service
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#services"
            className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"}`}
          >
            {t("header.services")}
          </Link>
          <Link
            href="#contact"
            className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"}`}
          >
            {t("header.contact")}
          </Link>
          
          {/* Language Toggle */}
          <div className={`flex items-center gap-1.5 text-xs ${isScrolled ? "text-muted-foreground" : "text-white/70"}`}>
            <button
              type="button"
              onClick={() => setLanguage("sk")}
              className={`transition-colors hover:text-foreground/90 cursor-pointer ${language === "sk" ? (isScrolled ? "text-foreground font-bold" : "text-white font-bold") : ""}`}
            >
              SK
            </button>
            <span className="text-[10px] opacity-40">|</span>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`transition-colors hover:text-foreground/90 cursor-pointer ${language === "en" ? (isScrolled ? "text-foreground font-bold" : "text-white font-bold") : ""}`}
            >
              EN
            </button>
            <span className="text-[10px] opacity-40">|</span>
            <button
              type="button"
              onClick={() => setLanguage("ru")}
              className={`transition-colors hover:text-foreground/90 cursor-pointer ${language === "ru" ? (isScrolled ? "text-foreground font-bold" : "text-white font-bold") : ""}`}
            >
              RU
            </button>
          </div>
        </nav>

        {/* CTA: Phone + Book */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:+421950261896"
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
          >
            <Phone size={14} />
            +421 950 261 896
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 text-sm font-medium transition-all rounded-full ${isScrolled ? "bg-foreground text-background hover:opacity-80" : "bg-white text-foreground hover:bg-white/90"}`}
          >
            {t("header.book")}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`transition-colors md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
          aria-label="Otvoriť menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-border bg-background px-6 py-8 md:hidden rounded-b-2xl">
          <nav className="flex flex-col gap-6">
            <Link
              href="#services"
              className="text-lg text-foreground font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.services")}
            </Link>
            <Link
              href="#contact"
              className="text-lg text-foreground font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.contact")}
            </Link>
            
            {/* Mobile Language Selection */}
            <div className="flex items-center gap-4 text-base font-semibold border-y border-border py-3">
              <button
                type="button"
                onClick={() => {
                  setLanguage("sk");
                  setIsMenuOpen(false);
                }}
                className={`transition-colors py-1 px-2 rounded ${language === "sk" ? "bg-secondary text-foreground font-bold" : "text-muted-foreground"}`}
              >
                Slovak (SK)
              </button>
              <button
                type="button"
                onClick={() => {
                  setLanguage("en");
                  setIsMenuOpen(false);
                }}
                className={`transition-colors py-1 px-2 rounded ${language === "en" ? "bg-secondary text-foreground font-bold" : "text-muted-foreground"}`}
              >
                English (EN)
              </button>
              <button
                type="button"
                onClick={() => {
                  setLanguage("ru");
                  setIsMenuOpen(false);
                }}
                className={`transition-colors py-1 px-2 rounded ${language === "ru" ? "bg-secondary text-foreground font-bold" : "text-muted-foreground"}`}
              >
                Русский (RU)
              </button>
            </div>

            <a
              href="tel:+421950261896"
              className="flex items-center gap-2 text-lg text-foreground font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone size={18} />
              +421 950 261 896
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-foreground px-5 py-3 text-center text-sm font-medium text-background rounded-full block"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.book")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

