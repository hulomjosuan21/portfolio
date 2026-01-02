"use client";

import { DockItem, DockNavigation } from "@/components/dock-navigation";
import { Home, Code2, Cpu, Trophy, Github, Mail } from "lucide-react";
import HeroSection from "./sections/HeroSection";
import Header from "@/components/Header";
import FeatureProjectSection from "./sections/FeatureProjectSection";
import SkillSection from "./sections/SkillSection";
import AchievementSection from "./sections/AchievementSection";
import ContactSection from "./sections/ContactSection";

export default function Page() {
  const navItems: DockItem[] = [
    { label: "Home", href: "#hero", icon: Home },
    { label: "Skills", href: "#skills", icon: Cpu },
    { label: "Capstone", href: "#projects", icon: Code2 },
    { label: "Achievements", href: "#awards", icon: Trophy },
    { label: "GitHub", href: "https://github.com/hulomjosuan21", icon: Github },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <div className="relative scroll-smooth">
      <Header />
      <main className="">
        <section id="hero">
          <HeroSection />
        </section>
        <section className="skills">
          <SkillSection />
        </section>
        <section id="projects">
          <FeatureProjectSection />
        </section>
        <section id="awards">
          <AchievementSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
        <DockNavigation groups={[navItems]} />
      </div>
    </div>
  );
}
