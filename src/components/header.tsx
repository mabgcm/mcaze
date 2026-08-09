"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { mainNav, siteConfig } from "@/data/site";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/button";

export function Header() {
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const closeMenuOnOutsideInteraction = (event: PointerEvent) => {
      const menu = mobileMenuRef.current;
      if (!menu?.open || menu.contains(event.target as Node)) return;

      menu.open = false;
    };

    document.addEventListener("pointerdown", closeMenuOnOutsideInteraction);
    return () => document.removeEventListener("pointerdown", closeMenuOnOutsideInteraction);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e7e2d8] bg-white/95 shadow-[0_8px_30px_rgba(23,23,20,0.04)] backdrop-blur">
      <div className="hidden border-b border-[#eee9e1] bg-[#171714] text-white sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/75">
          <span>Renovation & construction across the GTA</span>
          <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="transition hover:text-[#F59D28]">{siteConfig.phone}</a>
        </div>
      </div>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center" aria-label={`${siteConfig.name} home`}>
          <BrandLogo priority />
        </Link>
        <nav className="hidden items-center gap-6 xl:flex" aria-label="Main navigation">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-xs font-bold uppercase tracking-[0.1em] text-[#4c4842] transition hover:text-[#a95e08]">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden xl:block">
          <Button href="/contact">Get Free Estimate</Button>
        </div>
        <details ref={mobileMenuRef} className="group relative xl:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-md border border-[#161616] text-[#161616] transition hover:border-[#F59D28] hover:text-[#F59D28] focus:outline-none focus:ring-2 focus:ring-[#F59D28] focus:ring-offset-2 [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Open menu</span>
            <span aria-hidden="true" className="relative block h-5 w-5">
              <span className="absolute left-0 top-1 h-0.5 w-5 rounded-full bg-current transition duration-200 group-open:top-[9px] group-open:rotate-45" />
              <span className="absolute left-0 top-[9px] h-0.5 w-5 rounded-full bg-current transition duration-200 group-open:opacity-0" />
              <span className="absolute bottom-1 left-0 h-0.5 w-5 rounded-full bg-current transition duration-200 group-open:bottom-auto group-open:top-[9px] group-open:-rotate-45" />
            </span>
          </summary>
          <div className="absolute right-0 mt-3 w-[min(88vw,360px)] rounded-md border border-[#e7e2d8] bg-white p-4 shadow-2xl">
            <nav className="grid gap-1" aria-label="Mobile navigation">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    if (mobileMenuRef.current) mobileMenuRef.current.open = false;
                  }}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-[#161616] hover:bg-[#faf7f1]"
                >
                  {item.label}
                </Link>
              ))}
              <Button href="/contact" className="mt-3 w-full">
                Get Free Estimate
              </Button>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
