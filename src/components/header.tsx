import Link from "next/link";
import { mainNav, siteConfig } from "@/data/site";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#eee9e1] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center" aria-label={`${siteConfig.name} home`}>
          <BrandLogo priority />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-[#4c4842] transition hover:text-[#F59D28]">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button href="/contact">Request a Quote</Button>
        </div>
        <details className="group relative lg:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-[#dedbd5] text-[#161616]">
            <span className="sr-only">Open menu</span>
            <span className="block h-0.5 w-5 bg-current shadow-[0_6px_0_current,0_-6px_0_current]" />
          </summary>
          <div className="absolute right-0 mt-3 w-[min(88vw,360px)] rounded-2xl border border-[#eee9e1] bg-white p-4 shadow-xl">
            <nav className="grid gap-1" aria-label="Mobile navigation">
              {mainNav.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-xl px-4 py-3 text-sm font-medium text-[#161616] hover:bg-[#faf7f1]">
                  {item.label}
                </Link>
              ))}
              <Button href="/contact" className="mt-3 w-full">
                Request a Quote
              </Button>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
