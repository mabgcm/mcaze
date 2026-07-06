import { Button } from "@/components/button";
import { Container, Section } from "@/components/section";

export function Cta({
  title = "Ready to plan a renovation with fewer surprises?",
  copy = "Tell us what you want to improve. We will review the scope, explain the practical next steps, and provide a clear path forward.",
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
            <Button href="/contact">Request a Quote</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
