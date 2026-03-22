"use client";

import { Mail, Phone, Github, MapPin, MessageSquare } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  const { t } = useLanguage();
  const co = t.contact;

  const contacts = [
    {
      icon: Mail,
      gradient: "from-violet-600 to-purple-700",
      label: co.cards.email.label,
      value: "vhhoang27062@gmail.com",
      href: "mailto:vhhoang27062@gmail.com",
      desc: co.cards.email.desc,
    },
    {
      icon: Phone,
      gradient: "from-cyan-500 to-blue-600",
      label: co.cards.phone.label,
      value: "0913 428 487",
      href: "tel:+84913428487",
      desc: co.cards.phone.desc,
    },
    {
      icon: Github,
      gradient: "from-gray-600 to-gray-700",
      label: co.cards.github.label,
      value: "github.com/ferr2764",
      href: "https://github.com/ferr2764",
      desc: co.cards.github.desc,
    },
    {
      icon: MapPin,
      gradient: "from-emerald-500 to-teal-600",
      label: co.cards.location.label,
      value: "An Phu, Ho Chi Minh City",
      href: null,
      desc: co.cards.location.desc,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-violet-500 dark:text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">{co.tag}</p>
            <h2 className="section-heading gradient-text">{co.title}</h2>
            <p className="section-subheading">{co.subtitle}</p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          {/* CTA Banner */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="glass gradient-border rounded-3xl p-10 text-center mb-10 relative overflow-hidden">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-violet-500/30 glow">
                <MessageSquare size={28} className="text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "var(--text-h)" }}>
                {co.ctaTitle}
              </h3>
              <p className="max-w-md mx-auto mb-8 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {co.ctaDesc}
              </p>
              <a
                href="mailto:vhhoang27062@gmail.com"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-semibold bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:opacity-90 transition-all duration-200 shadow-xl shadow-violet-500/30 hover:-translate-y-0.5"
              >
                <Mail size={18} />
                {co.sendEmail}
              </a>
            </div>
          </div>
          </ScrollReveal>

          {/* Contact Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {contacts.map(({ icon: Icon, gradient, label, value, href, desc }, i) => {
              const inner = (
                <ScrollReveal direction="up" delay={0.2 + i * 0.1} className="h-full">
                  <div className="glass gradient-border rounded-2xl p-5 text-center card-hover h-full flex flex-col items-center gap-3">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase mb-0.5" style={{ color: "var(--text-muted)" }}>{label}</p>
                    <p className="font-medium text-[13px] sm:text-sm break-all" style={{ color: "var(--text-h)" }}>{value}</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)", opacity: 0.7 }}>{desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            );

              return href ? (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
                  {inner}
                </a>
              ) : <div key={label}>{inner}</div>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
