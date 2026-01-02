import { IconCloud } from "@/components/ui/icon-cloud";
import React, { useMemo } from "react";
const SLUGS = [
  "typescript",
  "javascript",
  "dart",
  "react",
  "flutter",
  "nodedotjs",
  "express",
  "nextdotjs",
  "python",
  "fastapi",
  "dotnet",
  "postgresql",
  "mongodb",
  "firebase",
  "vercel",
  "docker",
  "github",
  "visualstudiocode",
  "figma",
];
export default function SkillSection() {
  const images = useMemo(
    () => SLUGS.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`),
    []
  );

  return (
    <section className="max-w-7xl mx-auto py-12 px-6 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/2 space-y-6 text-left">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-foreground leading-none">
            Tools & <br />{" "}
            <span className="text-muted-foreground/60">Practice</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md">
            I spend my time working with these technologies to build web and
            mobile projects. It’s a mix of tools I use daily and things I’m
            currently exploring to solve specific problems.
          </p>

          <div className="flex gap-2 pt-2">
            <div className="h-1 w-12 bg-primary rounded-full" />
            <div className="h-1 w-4 bg-muted rounded-full" />
          </div>
        </div>

        {/* Right Side: Icon Cloud */}
        <div className="relative w-full md:w-1/2 flex items-center justify-center overflow-hidden h-[300px] md:h-[500px]">
          <IconCloud images={images} />
        </div>
      </div>
    </section>
  );
}
