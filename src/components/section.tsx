import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({ children, className, compact = false }: { children: ReactNode; className?: string; compact?: boolean }) {
  return <section className={cn(compact ? "py-16 sm:py-20 lg:py-24" : "py-16 sm:py-24 lg:py-28", className)}>{children}</section>;
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8", className)}>{children}</div>;
}

export function SectionHeader({
  eyebrow,
  title,
  copy,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <p className="eyebrow-rule mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#a95e08]">{eyebrow}</p> : null}
      <h2 className="display-title text-balance text-3xl leading-[1.05] text-[#171714] sm:text-4xl lg:text-5xl">{title}</h2>
      {copy ? <p className="mt-5 text-pretty text-base leading-8 text-[#5d5a55] sm:text-lg">{copy}</p> : null}
    </div>
  );
}
