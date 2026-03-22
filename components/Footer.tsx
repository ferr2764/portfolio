"use client";

import { Github, Mail, Code2, Heart } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 px-6" style={{ borderTop: "1px solid var(--glass-border)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-lg">
              <Code2 size={18} className="text-white" />
            </div>
            <div>
              <p className="font-bold" style={{ color: "var(--text-h)" }}>Vo Huy Hoang</p>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>{t.footer.role}</p>
            </div>
          </div>

          {/* <p className="text-sm flex items-center gap-1.5" style={{ color: "var(--text-muted)" }}>
            {t.footer.builtWith}{" "}
            <Heart size={13} className="text-rose-500 fill-rose-500" />
            {" "}{t.footer.using}{" "}
            <span style={{ color: "var(--text-body)" }}>Next.js</span>
            {" "}·{" "}
            <span style={{ color: "var(--text-body)" }}>TailwindCSS</span>
            {" "}·{" "}
            <span style={{ color: "var(--text-body)" }}>Three.js</span>
          </p> */}

          <div className="flex items-center gap-4">
            <a href="https://github.com/ferr2764" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-[--glass-hover] transition-all"
              style={{ color: "var(--text-muted)" }}>
              <Github size={18} />
            </a>
            <a href="mailto:vhhoang27062@gmail.com"
              className="p-2 rounded-lg hover:bg-[--glass-hover] transition-all"
              style={{ color: "var(--text-muted)" }}>
              <Mail size={18} />
            </a>
            <span className="text-sm" style={{ color: "var(--text-muted)", opacity: 0.6 }}>© {year} Vo Huy Hoang</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
