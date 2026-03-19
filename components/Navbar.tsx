"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2, Sun, Moon, Globe } from "lucide-react";
import { useTheme } from "@/lib/ThemeContext";
import { useLanguage } from "@/lib/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t, lang, toggleLang } = useLanguage();

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-strong shadow-lg shadow-black/10" : "bg-transparent"
        }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-lg group-hover:shadow-violet-500/40 transition-shadow">
            <Code2 size={18} className="text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight gradient-text">Vo Huy Hoang</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-muted hover:text-h hover:bg-[--glass-hover] transition-all duration-200"
                style={{ color: "var(--text-muted)" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="hidden md:flex items-center gap-2">
          {/* Language Toggle */}
          <button
            id="lang-toggle"
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold glass border-[--glass-border] hover:bg-[--glass-hover] transition-all"
            style={{ color: "var(--text-muted)" }}
            aria-label="Toggle language"
          >
            <Globe size={15} />
            <span>{lang === "en" ? "VI" : "EN"}</span>
          </button>

          {/* Theme Toggle */}
          <button
            id="theme-toggle"
            onClick={toggleTheme}
            className="p-2 rounded-xl glass border-[--glass-border] hover:bg-[--glass-hover] transition-all"
            style={{ color: "var(--text-muted)" }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Hire Me */}
          <a
            href="mailto:vhhoang27062@gmail.com"
            className="px-5 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/25"
          >
            {t.nav.hire}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggleLang} className="p-2 rounded-lg hover:bg-[--glass-hover]" style={{ color: "var(--text-muted)" }}>
            <Globe size={17} />
          </button>
          <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-[--glass-hover]" style={{ color: "var(--text-muted)" }}>
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-[--glass-hover] transition-all"
            style={{ color: "var(--text-muted)" }}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="glass-strong border-t border-[--glass-border] px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="px-4 py-3 rounded-lg text-sm font-medium hover:bg-[--glass-hover] transition-all"
              style={{ color: "var(--text-muted)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:vhhoang27062@gmail.com"
            className="mt-2 px-4 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-center"
          >
            {t.nav.hire}
          </a>
        </div>
      </div>
    </header>
  );
}
