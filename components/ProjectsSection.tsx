"use client";

import { Github, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const projects = [
  {
    title: "Alpha Code",
    subtitle: { en: "AI Robot Education Platform", vi: "Nền Tảng Giáo Dục Robot AI" },
    period: "08/2025 – 12/2025",
    type: { en: "Capstone Project · Team of 5", vi: "Đồ Án Tốt Nghiệp · Nhóm 5 người" },
    role: "BACKEND",
    gradient: "from-violet-600 to-purple-600",
    glowColor: "#7c3aed",
    description: {
      en: "Application for Extending Alpha Mini Robot with AI Communication, IoT, and Kid Programming Education. Designed for interactive learning experiences.",
      vi: "Ứng dụng mở rộng Robot Alpha Mini với Giao tiếp AI, IoT và Giáo dục Lập trình cho Trẻ em. Thiết kế cho trải nghiệm học tương tác.",
    },
    bullets: {
      en: [
        "Designed RESTful APIs with Spring Boot + WebSocket for real-time robot interaction",
        "Developed AI services with FastAPI for face & emotion recognition, gesture detection",
        "Integrated Google Cloud STT/TTS and Firebase Auth + JWT authentication",
        "Configured CI/CD with GitHub Actions, deployed via Docker on physical server",
        "Implemented data caching with Redis, PostgreSQL; IoT control with MQTT; microservices with gRPC",
      ],
      vi: [
        "Thiết kế RESTful API với Spring Boot + WebSocket cho tương tác robot thời gian thực",
        "Xây dựng AI service với FastAPI cho nhận diện khuôn mặt, cảm xúc và cử chỉ",
        "Tích hợp Google Cloud STT/TTS và xác thực Firebase Auth + JWT",
        "Cấu hình CI/CD với GitHub Actions, triển khai Docker trên máy chủ vật lý",
        "Cache với Redis, PostgreSQL; điều khiển IoT với MQTT; microservices với gRPC",
      ],
    },
    tech: ["Java Spring Boot", "Python FastAPI", "PostgreSQL", "Redis", "RabbitMQ", "OpenCV", "Google Cloud", "MQTT", "gRPC", "Docker"],
    github: "https://github.com/SEP-AlphaCode",
    live: "https://alpha-code.site/",
    featured: true,
  },
  {
    title: "Pulseras",
    subtitle: { en: "E-commerce & 3D Customization", vi: "Thương Mại Điện Tử & Tùy Chỉnh 3D" },
    period: "05/2025 – 08/2025",
    type: { en: "Team Project · Team of 4", vi: "Dự Án Nhóm · 4 người" },
    role: "FULLSTACK",
    gradient: "from-cyan-500 to-blue-600",
    glowColor: "#0891b2",
    description: {
      en: "E-commerce platform with interactive 3D bracelet customization using Three.js.",
      vi: "Nền tảng thương mại điện tử với tùy chỉnh vòng tay 3D tương tác sử dụng Three.js.",
    },
    bullets: {
      en: [
        "Built e-commerce with 3D bracelet customization via Three.js",
        "Designed RESTful APIs with Spring Boot + MongoDB",
        "Integrated Firebase Auth + JWT and PayOS payment",
        "Deployed on physical server with GitHub Actions CI/CD",
      ],
      vi: [
        "Nền tảng thương mại điện tử với tùy chỉnh vòng 3D qua Three.js",
        "Thiết kế API REST với Spring Boot + MongoDB",
        "Tích hợp xác thực Firebase Auth + JWT và thanh toán PayOS",
        "Triển khai trên máy chủ vật lý với GitHub Actions CI/CD",
      ],
    },
    tech: ["Spring Boot", "MongoDB", "React Vite", "TypeScript", "Three.js", "ShadCN UI", "AWS", "PayOS"],
    github: "https://github.com/Pulseras-System",
    live: "https://www.pulseras.xyz/",
    featured: false,
  },
  {
    title: "Rubber Factory",
    subtitle: { en: "Industrial WPF Management", vi: "Quản Lý Nhà Máy Cao Su" },
    period: "09/2024 – 11/2024",
    type: { en: "Team Project · Team of 4", vi: "Dự Án Nhóm · 4 người" },
    role: "FULLSTACK",
    gradient: "from-emerald-500 to-teal-600",
    glowColor: "#10b981",
    description: {
      en: "Desktop WPF app for rubber factory: production management, sales tracking, real-time device monitoring via MQTT.",
      vi: "Ứng dụng desktop WPF cho nhà máy cao su: quản lý sản xuất, theo dõi doanh số, giám sát thiết bị thời gian thực qua MQTT.",
    },
    bullets: {
      en: [
        "Developed WPF modules for sales, production, and customer management",
        "Real-time communication with MQTT to connect factory devices",
        "Dashboard with day/week/month/year statistics",
      ],
      vi: [
        "Phát triển các module WPF quản lý bán hàng, sản xuất và khách hàng",
        "Giao tiếp thời gian thực với MQTT kết nối thiết bị nhà máy",
        "Dashboard thống kê theo ngày/tuần/tháng/năm",
      ],
    },
    tech: ["C# WPF", "Microsoft SQL Server", "MQTT", ".NET"],
    github: "https://github.com/ferr2764/WPF_NhaMayCaoSu",
    live: null,
    featured: false,
  },
];

export default function ProjectsSection() {
  const { t, lang } = useLanguage();
  const pr = t.projects;

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-500 dark:text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">{pr.tag}</p>
          <h2 className="section-heading gradient-text">{pr.title}</h2>
          <p className="section-subheading">{pr.subtitle}</p>
        </div>

        <div className="space-y-8">
          {/* Featured */}
          {projects.filter((p) => p.featured).map((p) => (
            <div key={p.title} className="glass gradient-border rounded-3xl p-8 card-hover relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-40 pointer-events-none"
                style={{ background: `radial-gradient(circle, ${p.glowColor}30, transparent)` }} />

              <div className="relative z-10">
                <div className="flex items-start gap-3 mb-4 flex-wrap">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-2xl font-bold" style={{ color: "var(--text-h)" }}>{p.title}</h3>
                      <span className="px-2 py-0.5 rounded-md text-xs font-bold bg-violet-500/15 text-violet-600 dark:text-violet-300 border border-violet-500/25">{pr.featured}</span>
                      <span className="px-2 py-0.5 rounded-md text-xs font-bold skill-badge">{p.role}</span>
                    </div>
                    <p className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>
                      {p.subtitle[lang]} · {p.type[lang]} · {p.period}
                    </p>
                  </div>
                </div>

                <p className="mb-5 leading-relaxed" style={{ color: "var(--text-body)" }}>{p.description[lang]}</p>

                <ul className="space-y-2 mb-6">
                  {p.bullets[lang].map((b, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm" style={{ color: "var(--text-muted)" }}>
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-violet-400 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((tech) => <span key={tech} className="skill-badge">{tech}</span>)}
                </div>

                <div className="flex gap-4">
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass text-sm font-medium hover:bg-[--glass-hover] transition-all"
                    style={{ color: "var(--text-body)" }}>
                    <Github size={16} />{pr.github}
                  </a>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-sm font-semibold text-white hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/20">
                      <ExternalLink size={16} />{pr.liveDemo}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter((p) => !p.featured).map((p) => (
              <div key={p.title} className="glass gradient-border rounded-2xl p-6 card-hover relative overflow-hidden flex flex-col">
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-40 pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${p.glowColor}30, transparent)` }} />

                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg font-bold" style={{ color: "var(--text-h)" }}>{p.title}</h3>
                        <span className="skill-badge text-xs">{p.role}</span>
                      </div>
                      <p className="text-xs" style={{ color: "var(--text-muted)" }}>{p.type[lang]} · {p.period}</p>
                    </div>
                  </div>

                  <p className="text-sm mb-4 leading-relaxed" style={{ color: "var(--text-body)" }}>{p.description[lang]}</p>

                  <ul className="space-y-1.5 mb-4">
                    {p.bullets[lang].map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tech.map((tech) => <span key={tech} className="skill-badge text-xs">{tech}</span>)}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-xs font-medium hover:bg-[--glass-hover] transition-all"
                      style={{ color: "var(--text-body)" }}>
                      <Github size={14} />{pr.github}
                    </a>
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${p.gradient} text-xs font-semibold text-white hover:opacity-90 transition-opacity`}>
                        <ExternalLink size={14} />{pr.liveDemo}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
