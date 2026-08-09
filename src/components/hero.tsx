import Image from "next/image";
import { Button } from "@/components/button";
import { Container } from "@/components/section";

type HeroProps = {
  eyebrow?: string;
  title: string;
  copy: string;
  image?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  reassuranceItems?: string[];
  compactTitle?: boolean;
};

export function Hero({ eyebrow, title, copy, image = "/placeholders/hero.svg", primaryCta, secondaryCta, reassuranceItems, compactTitle = false }: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[#e7e2d8] bg-[#fbfaf7]">
      <div className="absolute right-0 top-0 hidden h-full w-[42%] bg-[#f1ece3] lg:block" aria-hidden="true" />
      <Container className="relative grid min-h-[calc(100svh-6.5rem)] items-center gap-10 py-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-0 lg:py-16">
        <div className="relative z-10 max-w-3xl lg:pr-10">
          {eyebrow ? <p className="eyebrow-rule mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#a95e08]">{eyebrow}</p> : null}
          <h1 className={`display-title text-balance text-4xl leading-[1.02] text-[#171714] sm:text-5xl ${compactTitle ? "lg:text-[2.75rem] xl:text-[3rem]" : "lg:text-[3.45rem] xl:text-[3.75rem]"}`}>{title}</h1>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-[#5d5a55]">{copy}</p>
          {(primaryCta || secondaryCta) ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryCta ? <Button href={primaryCta.href}>{primaryCta.label}</Button> : null}
              {secondaryCta ? (
                <Button href={secondaryCta.href} variant="secondary">
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          ) : null}
          {reassuranceItems?.length ? (
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-[#6f6a62]">
              {reassuranceItems.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F59D28]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-[#d9d2c5] bg-[#f7f3ed] shadow-[14px_14px_0_rgba(245,157,40,0.28)] lg:-mr-6">
          <Image src={image} alt="" fill priority sizes="(min-width: 1024px) 56vw, 100vw" className="object-cover" />
          <div className="absolute inset-x-0 bottom-0 h-1 bg-[#F59D28]" aria-hidden="true" />
        </div>
      </Container>
    </section>
  );
}
