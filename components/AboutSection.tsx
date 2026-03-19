"use client";

import { GraduationCap, MapPin, Briefcase, Calendar } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();
  const ab = t.about;

  const cards = [
    {
      icon: GraduationCap,
      color: "from-violet-500 to-purple-600",
      ...ab.cards.education,
    },
    {
      icon: MapPin,
      color: "from-cyan-500 to-blue-600",
      ...ab.cards.location,
    },
    {
      icon: Briefcase,
      color: "from-emerald-500 to-teal-600",
      ...ab.cards.status,
    },
    {
      icon: Calendar,
      color: "from-orange-500 to-amber-600",
      ...ab.cards.experience,
    },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-500 dark:text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">
            {ab.tag}
          </p>
          <h2 className="section-heading gradient-text">{ab.title}</h2>
          <p className="section-subheading">{ab.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-5">
            <p className="text-lg leading-relaxed" style={{ color: "var(--text-body)" }}>
              {ab.p1.includes("Java") ? (
                <>
                  {ab.p1.split("Java")[0]}
                  <span className="text-violet-600 dark:text-violet-300 font-semibold">Java</span>
                  {ab.p1.split("Java")[1].split("Spring Boot")[0]}
                  <span className="text-violet-600 dark:text-violet-300 font-semibold">Spring Boot</span>
                  {ab.p1.split("Spring Boot")[1]}
                </>
              ) : ab.p1}
            </p>
            <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>{ab.p2}</p>
            <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>{ab.p3}</p>

            <div className="flex gap-4 pt-4">
              <a
                href="mailto:vhhoang27062@gmail.com"
                className="px-6 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/20"
              >
                {ab.getInTouch}
              </a>
              <a
                href="https://github.com/ferr2764"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-xl text-sm font-semibold glass hover:bg-[--glass-hover] transition-all"
                style={{ color: "var(--text-body)" }}
              >
                {ab.githubProfile}
              </a>
            </div>
          </div>

          {/* Right: Info Cards */}
          <div className="grid grid-cols-1 gap-4">
            {cards.map(({ icon: Icon, color, title, main, sub, extra }) => (
              <div key={title} className="glass gradient-border rounded-2xl p-5 flex items-start gap-4 card-hover">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <Icon size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-0.5" style={{ color: "var(--text-muted)" }}>
                    {title}
                  </p>
                  <p className="font-semibold" style={{ color: "var(--text-h)" }}>{main}</p>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>{sub}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)", opacity: 0.7 }}>{extra}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
