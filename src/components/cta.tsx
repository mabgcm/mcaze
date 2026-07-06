import { Button } from "@/components/button";
import { Container, Section } from "@/components/section";

export function Cta({
  title = "Ready to discuss your renovation?",
  copy = "Request a free, no-obligation estimate. We will review your scope, explain practical next steps, and outline a clear written path before any construction decisions are made.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <Section>
      <Container>
        <div className="rounded-3xl bg-[#161616] px-6 py-12 text-white shadow-sm sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-3xl">
            <h2 className="text-balance text-3xl font-semibold sm:text-4xl">{title}</h2>
            <p className="mt-4 text-pretty leading-8 text-white/70">{copy}</p>
          </div>
          <div className="mt-8 shrink-0 lg:mt-0">
            <Button href="/contact">Get Free Estimate</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
