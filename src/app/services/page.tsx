import { ServiceCard } from "@/components/cards";
import { Cta } from "@/components/cta";
import { Hero } from "@/components/hero";
import { Container, Section, SectionHeader } from "@/components/section";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Services",
  description: "Explore McAze renovation services including kitchens, bathrooms, basements, painting, drywall, flooring, landscaping, and more.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Services"
        title="Renovation services with one clear standard."
        copy="From full room renovations to focused finishing work, McAze brings structure, clean execution, and practical recommendations to every scope."
        image="/images/site/contractor-tablet.webp"
        primaryCta={{ label: "Request a Quote", href: "/contact" }}
      />
      <Section>
        <Container>
          <SectionHeader title="All services" copy="Each service page is structured for future expansion, search visibility, and easy content updates." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </Section>
      <Cta />
    </>
  );
}
