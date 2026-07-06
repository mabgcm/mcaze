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
};

export function Hero({ eyebrow, title, copy, image = "/placeholders/hero.svg", primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="border-b border-[#eee9e1] bg-white">
      <Container className="grid min-h-[calc(100svh-5rem)] items-center gap-12 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        <div className="max-w-3xl">
          {eyebrow ? <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#b86f12]">{eyebrow}</p> : null}
          <h1 className="text-balance text-5xl font-semibold tracking-normal text-[#161616] sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-[#5d5a55]">{copy}</p>
          {(primaryCta || secondaryCta) ? (
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {primaryCta ? <Button href={primaryCta.href}>{primaryCta.label}</Button> : null}
              {secondaryCta ? (
                <Button href={secondaryCta.href} variant="secondary">
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          ) : null}
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[#eee9e1] bg-[#f7f3ed] shadow-sm">
          <Image src={image} alt="" fill priority sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" />
        </div>
      </Container>
    </section>
  );
}
