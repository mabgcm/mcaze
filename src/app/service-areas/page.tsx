import { CityCard } from "@/components/cards";
import { Cta } from "@/components/cta";
import { Hero } from "@/components/hero";
import { Container, Section, SectionHeader } from "@/components/section";
import { cities } from "@/data/locations";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Service Areas",
  description: "McAze provides renovation services in Vaughan, Markham, Richmond Hill, Toronto, North York, Mississauga, and nearby GTA communities.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <>
      <Hero
        eyebrow="Service Areas"
        title="Renovation services across the GTA."
        copy="McAze supports homeowners in established neighbourhoods, new communities, townhomes, detached homes, and urban properties throughout the region."
        image="/placeholders/renovation-4.svg"
        primaryCta={{ label: "Request a Quote", href: "/contact" }}
      />
      <Section>
        <Container>
          <SectionHeader title="Cities we serve" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <CityCard key={city.slug} city={city} />
            ))}
          </div>
        </Container>
      </Section>
      <Cta />
    </>
  );
}
