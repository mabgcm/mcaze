import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
};

export function Button({ href, children, variant = "primary", className, onClick }: ButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-md px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#F59D28] focus:ring-offset-2",
        variant === "primary" && "bg-[#F59D28] text-[#161616] shadow-[4px_4px_0_#171714] hover:-translate-y-0.5 hover:bg-[#e78f18] hover:shadow-[6px_6px_0_#171714]",
        variant === "secondary" && "border border-[#cfc8ba] bg-white text-[#161616] hover:border-[#161616] hover:bg-[#faf7f1]",
        variant === "ghost" && "text-[#161616] hover:text-[#F59D28]",
        className,
      )}
    >
      {children}
    </Link>
  );
}
