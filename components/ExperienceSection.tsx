"use client";

import { Briefcase } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import ScrollReveal from "./ScrollReveal";

export default function ExperienceSection() {
  const { t } = useLanguage();
  const ex = t.experience;

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-violet-500 dark:text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">
              {ex.tag}
            </p>
            <h2 className="section-heading gradient-text">{ex.title}</h2>
            <p className="section-subheading">{ex.subtitle}</p>
          </div>
        </ScrollReveal>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet-600 via-cyan-500 to-transparent hidden sm:block" />

          <ScrollReveal direction="up" delay={0.1}>
            <div className="relative flex gap-8 sm:pl-16 mb-6">
              <div className="absolute left-0 top-6 sm:flex hidden">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center shadow-lg shadow-violet-500/30 glow-sm">
                  <Briefcase size={20} className="text-white" />
                </div>
              </div>

              <div className="flex-1 glass gradient-border rounded-2xl p-7 card-hover">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: "var(--text-h)" }}>{ex.role}</h3>
                    <p className="text-violet-600 dark:text-violet-300 font-semibold">{ex.company}</p>
                    <p className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>{ex.type}</p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-300 whitespace-nowrap h-fit">
                    {ex.period}
                  </span>
                </div>

                <ul className="space-y-2.5 mb-5">
                  {ex.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm" style={{ color: "var(--text-body)" }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {["C# WPF", ".NET", "MSSQL", "MQTT"].map((t) => (
                    <span key={t} className="skill-badge text-xs">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Coming soon */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="relative flex gap-8 sm:pl-16 opacity-40">
              <div className="absolute left-0 top-4 sm:flex hidden">
                <div className="w-12 h-12 rounded-2xl border-2 border-dashed border-gray-400 dark:border-gray-700 flex items-center justify-center">
                  <span className="text-gray-400 dark:text-gray-600 text-lg">+</span>
                </div>
              </div>
              <div className="flex-1 glass rounded-2xl p-6 border border-dashed" style={{ borderColor: "var(--glass-border)" }}>
                <p className="text-sm italic" style={{ color: "var(--text-muted)" }}>{ex.lookingFor}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
