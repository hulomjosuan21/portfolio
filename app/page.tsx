"use client";

import { DockItem, DockNavigation } from "@/components/dock-navigation";
import { Home, Code2, Cpu, Trophy, Github, Mail } from "lucide-react";
import HeroSection from "./sections/HeroSection";
import ProjectShowcase from "./sections/FeatureProjectSection";
import Header from "@/components/Header";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

export default function Page() {
  const navItems: DockItem[] = [
    { label: "Home", href: "#hero", icon: Home },
    { label: "Capstone", href: "#projects", icon: Code2 },
    { label: "Skills", href: "#skills", icon: Cpu },
    { label: "Achievements", href: "#awards", icon: Trophy },
    { label: "GitHub", href: "https://github.com/yourusername", icon: Github },
    { label: "Contact", href: "mailto:hulomjosuan@gmail.com", icon: Mail },
  ];

  return (
    <div className="relative scroll-smooth">
      <Header />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="projects">
          <ProjectShowcase />
        </section>
      </main>

      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
        <DockNavigation groups={[navItems]} />
      </div>
      <SmoothCursor />
    </div>
  );
}
