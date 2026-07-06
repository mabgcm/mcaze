import { notFound } from "next/navigation";
import { ServiceCard } from "@/components/cards";
import { Cta } from "@/components/cta";
import { Hero } from "@/components/hero";
import { Container, Section, SectionHeader } from "@/components/section";
import { cities, getCity } from "@/data/locations";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

type CityPageProps = {
  params: Promise<{ city: string }>;
};

export async function generateMetadata({ params }: CityPageProps) {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) return {};
  return createMetadata({
    title: `Renovation Company in ${city.name}`,
    description: city.intro,
    path: `/service-areas/${city.slug}`,
  });
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) notFound();

  return (
    <>
      <Hero eyebrow="Service Area" title={`Renovation Company in ${city.name}`} copy={city.intro} image="/images/site/service-area.webp" primaryCta={{ label: "Request a Quote", href: "/contact" }} />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader eyebrow={city.name} title={`Home renovation services in ${city.name}.`} />
          <div>
            <p className="text-lg leading-8 text-[#5d5a55]">
              McAze helps {city.name} homeowners plan renovations with a clear scope, tidy site habits, and workmanship suited to everyday Canadian homes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {city.neighborhoods.map((neighborhood) => (
                <span key={neighborhood} className="rounded-full border border-[#dedbd5] px-4 py-2 text-sm font-semibold text-[#4c4842]">
                  {neighborhood}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Section>
      <Section className="bg-[#faf7f1]">
        <Container>
          <SectionHeader eyebrow="Services" title={`Popular services in ${city.name}.`} />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </Section>
      <Cta title={`Planning renovation work in ${city.name}?`} />
    </>
  );
}
