"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  SiPython,
  SiPostgresql,
  SiReact,
  SiFlutter,
  SiShadcnui,
  SiTailwindcss,
  SiDart,
} from "react-icons/si";
import { Timeline } from "@/components/ui/timeline";
import { Laptop, Phone, Smartphone } from "lucide-react";
import dashboardImg from "@/assets/images/dashboardImage.png";
export default function FeatureProjectSection() {
  const data = [
    {
      title: "Backend & Security",
      content: (
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge
              variant="outline"
              className="flex gap-1 items-center border-primary/20 bg-primary/5"
            >
              <SiPython className="text-[#3776AB]" /> Python (Quart)
            </Badge>
            <Badge
              variant="outline"
              className="flex gap-1 items-center border-primary/20 bg-primary/5"
            >
              <SiPostgresql className="text-[#336791]" /> SQLAlchemy
            </Badge>
          </div>
          <p className="text-xs md:text-sm font-normal text-neutral-800 dark:text-neutral-200 leading-relaxed">
            Built the backend for a league management system as part of an
            academic project. Implemented basic
            <strong> role-based access control (RBAC)</strong> to manage user
            permissions and improve data organization and security.
          </p>
        </div>
      ),
    },
    {
      title: "Web Dashboard",
      content: (
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge
              variant="outline"
              className="flex gap-1 items-center border-primary/20 bg-primary/5"
            >
              <SiReact className="text-[#61DAFB]" /> React.js
            </Badge>
            <Badge
              variant="outline"
              className="text-xs border-primary/20 bg-primary/5"
            >
              <SiTailwindcss /> Tailwind CSS
            </Badge>
            <Badge
              variant="outline"
              className="text-xs border-primary/20 bg-primary/5"
            >
              <SiShadcnui /> Shadcnui
            </Badge>
          </div>
          <p className="text-xs md:text-sm font-normal text-neutral-800 dark:text-neutral-200 leading-relaxed">
            Developed a web-based dashboard for managing league data. Focused on
            building reusable UI components and implementing features such as
            match scheduling.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="relative h-44 md:h-80 w-full rounded-lg overflow-hidden border border-primary/10 shadow-2xl">
                <Image
                  src={dashboardImg}
                  alt="BogoBallers Web Dashboard Preview"
                  fill
                  className="object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Mobile App",
      content: (
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge
              variant="outline"
              className="flex gap-1 items-center border-primary/20 bg-primary/5"
            >
              <SiFlutter className="text-[#02569B]" /> Flutter
            </Badge>
            <Badge
              variant="outline"
              className="text-xs border-primary/20 bg-primary/5"
            >
              <SiDart className="text-[#02569B]" />
              Dart
            </Badge>
          </div>
          <p className="text-xs md:text-sm font-normal text-neutral-800 dark:text-neutral-200 leading-relaxed">
            Created a mobile application prototype focused on displaying league
            and match information. Practiced integrating backend APIs and
            building responsive layouts.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-9/16 rounded-lg bg-zinc-900 border border-primary/10 flex items-center justify-center p-2">
              <Smartphone className="text-zinc-800" />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return <Timeline data={data} />;
}
