"use client";

import React from "react";
import { Mail, Phone, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 md:px-16 lg:px-24 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto pt-12 md:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] tracking-tighter text-foreground">
              Let's have <br />
              <span className="text-primary">a Chat</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto lg:mx-0">
              Want to discuss full-stack development, cross-platform apps, or
              just grab a coffee? Hit me up!
            </p>
            <Button
              size="lg"
              className="font-bold px-8 py-6 rounded-full text-lg transition-transform hover:scale-105 w-full sm:w-auto"
              onClick={() =>
                (window.location.href = "mailto:hulomjosuan@gmail.com")
              }
            >
              Let's Chat
            </Button>
          </div>

          <div className="space-y-10 md:space-y-12 lg:pl-12">
            <div className="space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold mb-4">
                  Get in Touch
                </p>
                <div className="space-y-4">
                  <a
                    href="mailto:hulomjosuan@gmail.com"
                    className="flex items-center gap-3 text-lg sm:text-xl md:text-2xl font-medium text-foreground hover:text-primary transition-colors truncate"
                  >
                    <Mail className="size-5 md:size-6 text-muted-foreground shrink-0" />
                    hulomjosuan@gmail.com
                  </a>
                  <div className="flex items-center gap-3 text-lg sm:text-xl md:text-2xl font-medium text-foreground/80">
                    <Phone className="size-5 md:size-6 text-muted-foreground shrink-0" />
                    +63 968 200 6456
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold mb-4">
                Follow Me
              </p>
              <div className="flex gap-4 justify-start">
                <a
                  href="mailto:hulomjosuan@gmail.com"
                  className="p-4 rounded-xl border border-border bg-card/50 hover:border-primary/50 hover:bg-accent transition-all group"
                  title="Email"
                >
                  <Mail className="size-6 text-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-24 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-[10px] sm:text-xs">
          <p className="text-center md:text-left text-foreground/60 font-medium">
            © {new Date().getFullYear()} Josuan. All rights reserved.
          </p>
          <p className="italic opacity-80 font-light">
            Made with passion in Tabogon, Cebu
          </p>
        </div>
      </div>
    </section>
  );
}
