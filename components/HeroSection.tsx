"use client";

import { useEffect, useState } from "react";
import { Github, Mail, ChevronDown } from "lucide-react";
import ThreeBackground from "@/components/ThreeBackground";
import { useLanguage } from "@/lib/LanguageContext";

const roles = {
  en: [
    "Backend Developer",
    "Java Spring Boot Engineer",
    "Microservices Architect",
    "Cloud & DevOps Enthusiast",
  ],
  vi: [
    "Lập Trình Viên Backend",
    "Java Spring Boot Engineer",
    "Kiến Trúc Microservices",
    "Đam Mê Cloud & DevOps",
  ],
};

export default function HeroSection() {
  const { t, lang } = useLanguage();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const currentRoles = roles[lang];

  useEffect(() => {
    setDisplayed("");
    setCharIndex(0);
    setRoleIndex(0);
    setIsDeleting(false);
  }, [lang]);

  useEffect(() => {
    const currentRole = currentRoles[roleIndex];
    let timeout: NodeJS.Timeout;
    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentRole.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 70);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentRole.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 38);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % currentRoles.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, currentRoles]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Three.js canvas background */}
      <ThreeBackground />

      {/* Static gradient blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0 0 0 / 60%) 1px, transparent 1px), linear-gradient(90deg, oklch(0 0 0 / 60%) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-center relative z-10">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span style={{ color: "var(--text-muted)" }}>{t.hero.badge}</span>
        </div>

        {/* Name */}
        <h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 animate-fade-in-up"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          <span style={{ color: "var(--text-h)" }}>Vo Huy </span>
          <span className="gradient-text">Hoang</span>
        </h1>

        {/* Typing role */}
        <div
          className="text-2xl md:text-3xl font-semibold mb-6 h-10 animate-fade-in-up"
          style={{ animationDelay: "0.3s", opacity: 0, color: "var(--text-body)" }}
        >
          <span>{displayed}</span>
          <span className="animate-blink text-violet-500">|</span>
        </div>

        {/* Description */}
        <p
          className="max-w-2xl mx-auto text-lg leading-relaxed mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.4s", opacity: 0, color: "var(--text-muted)" }}
        >
          {lang === "en" ? (
            <>
              Fresher Backend Developer with a strong foundation in{" "}
              <span className="text-violet-600 dark:text-violet-300 font-medium">Java &amp; Spring Boot</span>{" "}
              for building RESTful APIs and scalable backend systems. Passionate about
              microservices, cloud deployment, and solving complex problems.
            </>
          ) : (
            <>
              Fresher Backend Developer với nền tảng vững chắc về{" "}
              <span className="text-violet-600 dark:text-violet-300 font-medium">Java &amp; Spring Boot</span>
              , xây dựng RESTful API và hệ thống backend có khả năng mở rộng. Đam mê microservices, cloud và giải quyết bài toán phức tạp.
            </>
          )}
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-in-up"
          style={{ animationDelay: "0.5s", opacity: 0 }}
        >
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
            className="px-8 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:opacity-90 transition-all duration-200 shadow-lg shadow-violet-500/30 hover:-translate-y-0.5"
          >
            {t.hero.viewWork}
          </a>
          <a
            href="https://github.com/ferr2764"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl font-semibold glass flex items-center gap-2 hover:bg-[--glass-hover] transition-all"
            style={{ color: "var(--text-body)" }}
          >
            <Github size={18} />
            {t.hero.github}
          </a>
          <a
            href="mailto:vhhoang27062@gmail.com"
            className="px-8 py-3.5 rounded-xl font-semibold glass flex items-center gap-2 hover:bg-[--glass-hover] transition-all"
            style={{ color: "var(--text-body)" }}
          >
            <Mail size={18} />
            {t.hero.contactMe}
          </a>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 max-w-sm mx-auto gap-6 animate-fade-in-up"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          {[
            { value: "3+", label: t.hero.stats.projects },
            { value: "1+", label: t.hero.stats.internship },
            { value: "10+", label: t.hero.stats.technologies },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold gradient-text">{s.value}</div>
              <div className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll cue */}
        <div className="mt-16 flex justify-center animate-float">
          <button
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            className="p-2 rounded-full glass hover:bg-[--glass-hover] transition-colors"
            style={{ color: "var(--text-muted)" }}
          >
            <ChevronDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
