import Image from "next/image";
import { Button } from "@/components/button";
import { Container, Section } from "@/components/section";

export function Cta({
  title = "Ready to discuss your renovation?",
  copy = "Request a free, no-obligation estimate. We will review your scope, explain practical next steps, and outline a clear written path before any construction decisions are made.",
  image,
  buttonLabel = "Get Free Estimate",
}: {
  title?: string;
  copy?: string;
  image?: string;
  buttonLabel?: string;
}) {
  return (
    <Section>
      <Container>
        <div className="relative overflow-hidden rounded-md bg-[#171714] px-6 py-12 text-white shadow-[12px_12px_0_rgba(245,157,40,0.28)] sm:px-10 lg:flex lg:min-h-[390px] lg:items-center lg:justify-between lg:gap-10">
          {image ? (
            <>
              <Image
                src={image}
                alt=""
                fill
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/20" aria-hidden="true" />
            </>
          ) : null}
          <div className="relative z-10 max-w-2xl">
            <h2 className="display-title text-balance text-3xl leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
            <p className="mt-4 text-pretty leading-8 text-white/70">{copy}</p>
          </div>
          <div className="relative z-10 mt-8 shrink-0 lg:mt-0">
            <Button href="/contact">{buttonLabel}</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
