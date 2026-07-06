import { notFound } from "next/navigation";
import { ServiceCard } from "@/components/cards";
import { Cta } from "@/components/cta";
import { FaqList } from "@/components/faq";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { ProcessSteps } from "@/components/process";
import { Container, Section, SectionHeader } from "@/components/section";
import { getService, services } from "@/data/services";
import { createMetadata, serviceSchema } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return createMetadata({
    title: service.title,
    description: service.excerpt,
    path: `/services/${service.slug}`,
    image: service.image,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const related = service.related.map(getService).filter(Boolean);

  return (
    <>
      <Hero eyebrow="Service" title={service.title} copy={service.description} image={service.image} primaryCta={{ label: "Get Free Estimate", href: "/contact" }} secondaryCta={{ label: "Explore Services", href: "/services" }} />
      <JsonLd data={serviceSchema(service)} />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader eyebrow="Overview" title={`A practical approach to ${service.title.toLowerCase()}.`} />
          <p className="text-lg leading-8 text-[#5d5a55]">{service.description}</p>
        </Container>
      </Section>
      <Section className="bg-[#faf7f1]">
        <Container>
          <SectionHeader eyebrow="Benefits" title="What this service is designed to improve." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((benefit) => (
              <div key={benefit} className="rounded-2xl border border-[#eee9e1] bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-[#161616]">{benefit}</h2>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeader eyebrow="Process" title="How the work is planned and completed." />
          <div className="mt-10">
            <ProcessSteps steps={service.process} />
          </div>
        </Container>
      </Section>
      <Section className="bg-[#faf7f1]">
        <Container>
          <SectionHeader eyebrow="FAQ" title={`Questions about ${service.title.toLowerCase()}.`} />
          <div className="mt-10">
            <FaqList items={service.faqs} withSchema />
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeader eyebrow="Related Services" title="Connected work homeowners often plan together." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((item) => (item ? <ServiceCard key={item.slug} service={item} /> : null))}
          </div>
        </Container>
      </Section>
      <Cta title={`Planning a ${service.title.toLowerCase()} project?`} />
    </>
  );
}
