"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { Code, Layers, Database, Cloud, Zap } from "lucide-react";
import { FaJava, FaPython, FaDocker, FaAws, FaServer, FaMoneyBillWave } from "react-icons/fa";
import { 
  SiSpringboot, SiHibernate, SiSpring, SiJsonwebtokens, SiDotnet, SiReact, 
  SiNextdotjs, SiVite, SiTailwindcss, SiThreedotjs, SiFastapi, SiOpencv, 
  SiMysql, SiMongodb, SiPostgresql, SiRedis, 
  SiGooglecloud, SiGithubactions, SiVercel, SiFirebase, SiMqtt, 
  SiRabbitmq, SiApachekafka, SiTypescript, SiJavascript 
} from "react-icons/si";
import { TbBrandCSharp, TbSql, TbServerCog, TbApi, TbLayersIntersect, TbChartBar } from "react-icons/tb";

const TechIcon = ({ name }: { name: string }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconMap: Record<string, any> = {
    "Java": FaJava,
    "C#": TbBrandCSharp,
    "Python": FaPython,
    "TypeScript": SiTypescript,
    "JavaScript": SiJavascript,
    "SQL": TbSql,
    "Spring Boot": SiSpringboot,
    "JPA / Hibernate": SiHibernate,
    "Spring Mail": SiSpring,
    "JWT": SiJsonwebtokens,
    "Spring Eureka": SiSpring,
    "ASP.NET Core": SiDotnet,
    "SignalR": SiDotnet,
    "React": SiReact,
    "Next.js": SiNextdotjs,
    "React Native": SiReact,
    "Vite": SiVite,
    "TailwindCSS": SiTailwindcss,
    "ShadCN UI": Code, // generic fallback
    "Three.js": SiThreedotjs,
    "Python FastAPI": SiFastapi,
    "OpenCV": SiOpencv,
    "gRPC": TbServerCog, // generic rpc
    "MySQL": SiMysql,
    "MongoDB": SiMongodb,
    "PostgreSQL": SiPostgresql,
    "Microsoft SQL Server": TbSql,
    "Redis": SiRedis,
    "AWS (S3, Polly)": FaAws,
    "Google Cloud STT/TTS": SiGooglecloud,
    "Docker": FaDocker,
    "GitHub Actions (CI/CD)": SiGithubactions,
    "Physical Server": FaServer,
    "Vercel": SiVercel,
    "Fly.io": Cloud,
    "Codemagic": Cloud,
    "RESTful API Design": TbApi,
    "Firebase Auth": SiFirebase,
    "OOP": Code,
    "MQTT": SiMqtt,
    "RabbitMQ": SiRabbitmq,
    "Apache Kafka": SiApachekafka,
    "VNPay": FaMoneyBillWave,
    "MoMo": FaMoneyBillWave,
    "PayOS": FaMoneyBillWave,
    "Layered Architecture": TbLayersIntersect,
    "Microservices": TbServerCog,
    "Data Visualization": TbChartBar,
  };

  const IconComp = IconMap[name];
  if (!IconComp) return <span className="mr-1.5 opacity-60">•</span>;
  return <IconComp className="mr-1.5 text-[1.1em] text-violet-500/80 dark:text-violet-400/80 drop-shadow-sm transition-colors group-hover:text-violet-600 dark:group-hover:text-violet-300" />;
};

const skillData = [
  {
    icon: Code,
    gradient: "from-violet-600 to-purple-700",
    skills: ["Java", "C#", "Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    icon: Layers,
    gradient: "from-cyan-500 to-blue-600",
    skills: [
      "Spring Boot", "JPA / Hibernate", "Spring Mail", "JWT", "Spring Eureka",
      "ASP.NET Core", "SignalR", "React", "Next.js", "React Native",
      "Vite", "TailwindCSS", "ShadCN UI", "Three.js", "Python FastAPI", "OpenCV", "gRPC",
    ],
  },
  {
    icon: Database,
    gradient: "from-emerald-500 to-teal-600",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Microsoft SQL Server", "Redis"],
  },
  {
    icon: Cloud,
    gradient: "from-orange-500 to-amber-600",
    skills: [
      "AWS (S3, Polly)", "Google Cloud STT/TTS", "Docker",
      "GitHub Actions (CI/CD)", "Physical Server", "Vercel", "Fly.io", "Codemagic",
    ],
  },
  {
    icon: Zap,
    gradient: "from-rose-500 to-pink-600",
    skills: [
      "RESTful API Design", "Firebase Auth", "OOP",
      "MQTT", "RabbitMQ", "Apache Kafka",
      "VNPay", "MoMo", "PayOS",
      "Layered Architecture", "Microservices", "Data Visualization",
    ],
  },
];

export default function SkillsSection() {
  const { t } = useLanguage();
  const sk = t.skills;

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-500 dark:text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3">{sk.tag}</p>
          <h2 className="section-heading gradient-text">{sk.title}</h2>
          <p className="section-subheading">{sk.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillData.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div key={i} className="glass gradient-border rounded-2xl p-6 card-hover">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center shadow-lg border border-white/10`}>
                    <Icon size={20} className="text-white drop-shadow-md" />
                  </div>
                  <h3 className="text-base font-bold tracking-tight" style={{ color: "var(--text-h)" }}>
                    {sk.categories[i]}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((s) => (
                    <span key={s} className="skill-badge group flex items-center hover:shadow-md hover:bg-violet-500/10 hover:border-violet-500/30">
                      <TechIcon name={s} />
                      <span className="font-medium">{s}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 glass gradient-border rounded-2xl p-6 text-center">
          <p className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>{sk.learningNote}</p>
        </div>
      </div>
    </section>
  );
}
