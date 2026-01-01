import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, MessageSquare, MapPin, Code2 } from "lucide-react";
import Image from "next/image";
import resumeImage from "@/assets/images/resume.jpg";
import { SiFlutter, SiPython, SiTypescript } from "react-icons/si";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-x-hidden py-16 md:py-0">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12">
        <div className="flex-1 space-y-6 md:space-y-8 animate-in fade-in slide-in-from-left duration-700 z-10 text-center md:text-left flex flex-col items-center md:items-start">
          <Badge
            variant="secondary"
            className="rounded-full px-4 py-1.5 bg-secondary/50 border-primary/20 text-primary flex w-fit items-center gap-2"
          >
            <MapPin className="size-3" />
            Tabogon, Cebu
          </Badge>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Hi, I'm <span className="text-foreground">Josuan.</span>
            </h1>

            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-primary leading-tight max-w-[90%] md:max-w-none mx-auto md:mx-0">
              Aspiring Full Stack Developer building modern
              <br className="hidden md:block" /> and web & mobile experiences.
            </h2>

            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-[450px]">
              Graduating IT student focused on React.js frontends, Python
              backends, Flutter mobile apps, and database development primarily
              using ORM-based workflows.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              size="lg"
              className="rounded-full px-8 bg-primary text-primary-foreground w-full sm:w-auto"
            >
              <Download className="mr-2 size-4" />
              Download Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-primary text-primary w-full sm:w-auto"
            >
              <MessageSquare className="mr-2 size-4" />
              Let's Chat
            </Button>
          </div>
        </div>

        <div className="flex-1 relative animate-in fade-in zoom-in duration-1000 flex justify-center w-full max-w-[300px] sm:max-w-[400px] md:max-w-none">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] md:blur-3xl opacity-50" />

          <div className="relative z-10 w-full aspect-square max-w-[280px] sm:max-w-[350px] lg:max-w-[450px]">
            <div className="relative h-full w-full rounded-3xl overflow-hidden border border-primary/20 shadow-2xl">
              <Image
                src={resumeImage}
                alt="Josuan Leonardo Hulom"
                fill
                priority
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="absolute top-2 -left-8 sm:top-4 sm:-left-12 bg-background/90 backdrop-blur-md border border-border p-1.5 sm:p-2 rounded-lg sm:rounded-xl shadow-lg z-20">
              <div className="flex flex-col items-center">
                <span className="text-[8px] sm:text-[10px] font-bold text-primary mb-1.5 uppercase tracking-wider">
                  Stack
                </span>
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="size-5 sm:size-7 flex items-center justify-center bg-white rounded-md border border-slate-200 shadow-sm">
                    <SiTypescript className="size-3 sm:size-4 text-[#3178C6]" />
                  </div>

                  <div className="size-5 sm:size-7 flex items-center justify-center bg-white rounded-md border border-slate-200 shadow-sm">
                    <SiPython className="size-3 sm:size-4 text-[#3776AB]" />
                  </div>

                  <div className="size-5 sm:size-7 flex items-center justify-center bg-white rounded-md border border-slate-200 shadow-sm">
                    <SiFlutter className="size-3 sm:size-4 text-[#02569B]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 bg-background/90 backdrop-blur-md border border-border p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl z-20">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="size-6 sm:size-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary font-bold text-[10px] sm:text-xs">
                  J
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-bold leading-none">
                    BSIT 2026
                  </p>
                  <p className="text-[8px] sm:text-[10px] text-muted-foreground mt-0.5 sm:mt-1 whitespace-nowrap">
                    Expected Graduation
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 bg-background/90 backdrop-blur-md border border-border p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl z-20">
              <div className="flex items-center gap-2">
                <div className="size-1.5 sm:size-2 rounded-full bg-primary animate-pulse" />
                <p className="text-[10px] sm:text-sm font-medium">
                  Available for Projects
                </p>
              </div>
              <p className="text-[8px] sm:text-[10px] text-muted-foreground mt-0.5 sm:mt-1 ml-3 sm:ml-4 whitespace-nowrap">
                Full Stack Development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
