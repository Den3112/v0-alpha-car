"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          className={`text-base font-semibold tracking-tight transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-white"}`}
        >
          ALPHA CAR SERVICE
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#services"
            className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"}`}
          >
            Služby
          </Link>
          <Link
            href="#contact"
            className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"}`}
          >
            Kontakt
          </Link>
          {/* Language Toggle */}
          <div className={`flex items-center gap-1 text-sm ${isScrolled ? "text-muted-foreground" : "text-white/70"}`}>
            <button type="button" className={`transition-colors ${isScrolled ? "text-foreground font-medium" : "text-white font-medium"}`}>
              SK
            </button>
            <span>/</span>
            <button type="button" className={`transition-colors hover:${isScrolled ? "text-foreground" : "text-white"}`}>
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
          <Link
            href="#book"
            className={`px-4 py-2 text-sm font-medium transition-all rounded-full ${isScrolled ? "bg-foreground text-background hover:opacity-80" : "bg-white text-foreground hover:bg-white/90"}`}
          >
            Objednať termín
          </Link>
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
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Služby
            </Link>
            <Link
              href="#contact"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </Link>
            <div className="flex items-center gap-3 text-lg">
              <button type="button" className="font-medium text-foreground">SK</button>
              <span className="text-muted-foreground">/</span>
              <button type="button" className="text-muted-foreground">RU</button>
            </div>
            <a
              href="tel:+421950261896"
              className="flex items-center gap-2 text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone size={18} />
              +421 950 261 896
            </a>
            <Link
              href="#book"
              className="mt-4 bg-foreground px-5 py-3 text-center text-sm font-medium text-background rounded-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Objednať termín
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
