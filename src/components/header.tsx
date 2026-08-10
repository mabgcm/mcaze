"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { mainNav, siteConfig } from "@/data/site";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/button";

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const sortedNavigation = useMemo(
    () => [...mainNav].sort((a, b) => a.label.localeCompare(b.label)),
    [],
  );

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setIsMenuOpen(false);
      requestAnimationFrame(() => menuButtonRef.current?.focus());
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#e7e2d8] bg-white/95 shadow-[0_8px_30px_rgba(23,23,20,0.04)] backdrop-blur">
        <div className="hidden border-b border-[#eee9e1] bg-[#171714] text-white sm:block">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/75">
            <span>Renovation & construction across the GTA</span>
            <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="transition hover:text-[#F59D28]">
              {siteConfig.phone}
            </a>
          </div>
        </div>

        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8">
          <Link href="/" className="flex items-center" aria-label={`${siteConfig.name} home`}>
            <BrandLogo priority />
          </Link>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden lg:block">
              <Button href="/contact">Get Free Estimate</Button>
            </div>
            <button
              ref={menuButtonRef}
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="site-navigation-drawer"
              aria-label="Open navigation menu"
              onClick={() => setIsMenuOpen(true)}
              className="group flex h-11 items-center gap-3 rounded-full border border-[#d9d2c6] bg-[#faf7f1] px-4 text-[#171714] transition hover:border-[#F59D28] hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#F59D28] focus:ring-offset-2"
            >
              <span className="hidden text-[11px] font-bold uppercase tracking-[0.18em] sm:block">Menu</span>
              <span aria-hidden="true" className="grid w-5 gap-[5px]">
                <span className="h-0.5 w-5 rounded-full bg-current transition group-hover:translate-x-0.5" />
                <span className="ml-auto h-0.5 w-3.5 rounded-full bg-current transition group-hover:w-5" />
                <span className="h-0.5 w-5 rounded-full bg-current transition group-hover:translate-x-0.5" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[80] transition ${isMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!isMenuOpen}
      >
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={closeMenu}
          className={`absolute inset-0 bg-[#171714]/55 backdrop-blur-[2px] transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
          tabIndex={isMenuOpen ? 0 : -1}
        />

        <aside
          id="site-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className={`absolute right-0 top-0 flex h-full w-[min(92vw,500px)] flex-col overflow-hidden bg-[#fbf8f2] shadow-[-24px_0_70px_rgba(0,0,0,0.22)] transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between border-b border-[#ded7cb] px-6 py-5 sm:px-9 sm:py-7">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a95e08]">Explore McAze</p>
              <p className="mt-1 text-sm text-[#6b655c]">Renovation & construction across the GTA</p>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation menu"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#d3cabd] bg-white text-[#171714] transition hover:border-[#F59D28] hover:text-[#a95e08] focus:outline-none focus:ring-2 focus:ring-[#F59D28] focus:ring-offset-2"
            >
              <span aria-hidden="true" className="relative block h-5 w-5 transition group-hover:rotate-90">
                <span className="absolute left-0 top-[9px] h-0.5 w-5 rotate-45 rounded-full bg-current" />
                <span className="absolute left-0 top-[9px] h-0.5 w-5 -rotate-45 rounded-full bg-current" />
              </span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-7 sm:px-9 sm:py-9">
            <nav aria-label="Main navigation">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a8378]">Navigation</p>
              <div className="grid grid-cols-2 gap-x-4 border-t border-[#ded7cb]">
                {sortedNavigation.map((item, index) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className={`group flex min-h-[58px] items-center justify-between border-b border-[#ded7cb] py-3 text-[15px] font-semibold transition sm:min-h-[64px] sm:text-base ${index % 2 === 0 ? "pr-3" : "border-l pl-4"} ${isActive ? "text-[#a95e08]" : "text-[#201f1c] hover:text-[#a95e08]"}`}
                    >
                      <span>{item.label}</span>
                      <span aria-hidden="true" className="text-lg font-light text-[#c4771a] transition group-hover:translate-x-1">→</span>
                    </Link>
                  );
                })}
              </div>
            </nav>

          </div>

          <div className="border-t border-[#ded7cb] bg-white px-6 py-5 sm:px-9 sm:py-6">
            <Button href="/contact" onClick={closeMenu} className="w-full sm:hidden">
              Get Free Estimate
            </Button>
            <div className="mt-4 flex items-center justify-between gap-4 sm:mt-0">
              <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="text-sm font-semibold text-[#171714] transition hover:text-[#a95e08]">
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="text-sm text-[#6b655c] transition hover:text-[#a95e08]">
                {siteConfig.email}
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
