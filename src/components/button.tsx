import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#F59D28] focus:ring-offset-2",
        variant === "primary" && "bg-[#F59D28] text-[#161616] shadow-sm hover:bg-[#e78f18]",
        variant === "secondary" && "border border-[#dedbd5] bg-white text-[#161616] hover:border-[#161616]",
        variant === "ghost" && "text-[#161616] hover:text-[#F59D28]",
        className,
      )}
    >
      {children}
    </Link>
  );
}
