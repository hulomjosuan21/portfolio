"use client";

import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { ScrollProgress } from "./ui/scroll-progress";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      <div className="w-full border-b border-border/20 bg-background/50 backdrop-blur-xl">
        <div className="mx-auto flex h-14 items-center justify-between px-6 sm:px-10 md:px-16 lg:px-24">
          <div className="text-lg font-bold uppercase tracking-tighter text-foreground">
            Josuan
          </div>

          <div className="flex items-center origin-right">
            <AnimatedThemeToggler duration={600} />
          </div>
        </div>
      </div>
      <ScrollProgress className="relative w-full" />
    </header>
  );
}
