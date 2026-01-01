"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-60 bg-transparent">
      <div className="px-6 sm:px-10 md:px-16 lg:px-24 h-20 flex items-center justify-between">
        {/* LOGO */}
        <div className="text-2xl font-black uppercase tracking-tighter text-foreground">
          Josuan
        </div>

        <AnimatedThemeToggler duration={600} />
      </div>
    </header>
  );
}
