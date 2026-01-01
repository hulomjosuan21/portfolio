"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Separator } from "@/components/ui/separator";

export type IconType =
  | LucideIcon
  | React.ComponentType<React.SVGProps<SVGSVGElement>>;

export interface DockItem {
  label: string;
  href: string;
  icon: IconType;
}

interface DockNavigationProps {
  className?: string;
  groups: DockItem[][];
}

export function DockNavigation({ groups, className }: DockNavigationProps) {
  const pathname = usePathname();

  return (
    <Dock
      direction="middle"
      className={cn("border-border p-2 rounded-full gap-2", className)}
    >
      {groups.map((group, groupIndex) => (
        <React.Fragment key={groupIndex}>
          {group.map((item) => {
            const isActive = pathname === item.href;

            return (
              <DockIcon
                key={item.label}
                className={cn(
                  "bg-transparent transition-all duration-300",
                  isActive && "w-auto!"
                )}
              >
                <Link
                  href={item.href}
                  aria-label={item.label}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "rounded-full transition-all duration-300 ease-in-out flex items-center justify-center",
                    isActive
                      ? "bg-primary text-zinc-950 px-4 w-auto hover:bg-primary shadow-md"
                      : "hover:bg-transparent"
                  )}
                >
                  <item.icon className="size-5 shrink-0" />

                  {isActive && (
                    <span className="ml-2 text-sm font-medium whitespace-nowrap">
                      {item.label}
                    </span>
                  )}
                </Link>
              </DockIcon>
            );
          })}

          {groupIndex < groups.length - 1 && (
            <div className="flex items-center px-1">
              <Separator
                orientation="vertical"
                className="h-4 w-px bg-zinc-700/50"
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </Dock>
  );
}
