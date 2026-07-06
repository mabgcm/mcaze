import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({ children, className }: { children: ReactNode; className?: string }) {
  return <section className={cn("py-16 sm:py-20 lg:py-24", className)}>{children}</section>;
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
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#b86f12]">{eyebrow}</p> : null}
      <h2 className="text-balance text-3xl font-semibold tracking-normal text-[#161616] sm:text-4xl">{title}</h2>
      {copy ? <p className="mt-5 text-pretty text-base leading-8 text-[#5d5a55] sm:text-lg">{copy}</p> : null}
    </div>
  );
}
