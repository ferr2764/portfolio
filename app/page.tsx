import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent mx-6" />
        <AboutSection />
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent mx-6" />
        <ExperienceSection />
        <div className="h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent mx-6" />
        <ProjectsSection />
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent mx-6" />
        <SkillsSection />
        <div className="h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent mx-6" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
