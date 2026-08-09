import { notFound } from "next/navigation";
import Link from "next/link";
import { ProjectCard, ServiceCard } from "@/components/cards";
import { Breadcrumb } from "@/components/breadcrumb";
import { Cta } from "@/components/cta";
import { FaqList } from "@/components/faq";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { Container, Section, SectionHeader } from "@/components/section";
import { cities, getCity } from "@/data/locations";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { createMetadata, localServiceSchema } from "@/lib/seo";

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
  const content = city.pageContent;
  return createMetadata({
    title: content?.seoTitle ?? `Renovation Company in ${city.name}`,
    description: content?.seoDescription ?? city.intro,
    path: `/service-areas/${city.slug}`,
    image: content?.image,
  });
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) notFound();
  const content = city.pageContent;

  if (content) {
    const featuredServices = content.serviceSlugs
      .map((slug) => services.find((service) => service.slug === slug))
      .filter((service): service is NonNullable<typeof service> => Boolean(service))
      .sort((a, b) => a.title.localeCompare(b.title, "en", { sensitivity: "base" }));
    const featuredProjects = (content.projectSlugs ?? [])
      .map((slug) => projects.find((project) => project.slug === slug))
      .filter((project): project is NonNullable<typeof project> => Boolean(project));

    return (
      <>
        <JsonLd data={localServiceSchema(city.name, content.seoDescription, `/service-areas/${city.slug}`)} />
        <Hero eyebrow={content.heroEyebrow} title={content.heroTitle} copy={content.heroCopy} image={content.image} primaryCta={{ label: "Get Free Estimate", href: "/contact" }} />
        <Section className="pb-0">
          <Container>
            <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Service Areas", href: "/service-areas" }, { name: city.name, href: `/service-areas/${city.slug}` }]} />
          </Container>
        </Section>
        <Section>
          <Container className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <SectionHeader eyebrow={`Renovating in ${city.name}`} title={content.introQuestion} />
            <div className="space-y-5 text-base leading-8 text-[#5d5a55] sm:text-lg">
              {content.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <div className="flex flex-wrap gap-3 pt-3">
                {city.neighborhoods.map((neighborhood) => <span key={neighborhood} className="rounded-full border border-[#dedbd5] px-4 py-2 text-sm font-semibold text-[#4c4842]">{neighborhood}</span>)}
              </div>
            </div>
          </Container>
        </Section>
        <Section className="bg-[#faf7f1]">
          <Container>
            <SectionHeader eyebrow="Renovation Services" title={`What renovation services does McAze provide in ${city.name}?`} copy="Choose the service that best matches your scope. Each page explains planning considerations, process, related project evidence and the next step for an estimate." />
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {featuredServices.map((service) => <ServiceCard key={service.slug} service={service} />)}
            </div>
          </Container>
        </Section>
        {content.questions.map((section, index) => (
          <Section key={section.question} className={index % 2 ? "bg-[#faf7f1]" : undefined}>
            <Container className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
              <SectionHeader eyebrow={section.eyebrow} title={section.question} />
              <div className="space-y-5 leading-8 text-[#5d5a55]">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets ? <ul className="grid gap-3 rounded-2xl border border-[#eee9e1] bg-white p-6 text-[#4c4842] sm:grid-cols-2">{section.bullets.map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F59D28]" />{item}</li>)}</ul> : null}
                {section.sourceLink ? <p className="pt-2 text-sm"><Link href={section.sourceLink.href} target="_blank" rel="noreferrer" className="font-semibold text-[#b86f12] underline decoration-[#F59D28]/40 underline-offset-4">{section.sourceLink.label}</Link></p> : null}
              </div>
            </Container>
          </Section>
        ))}
        {featuredProjects.length ? <Section className="bg-[#faf7f1]"><Container><SectionHeader eyebrow="Verified Project" title={`What completed McAze work can ${city.name} homeowners review?`} copy="Only documented McAze projects with confirmed locations are connected to local service-area pages." /><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></Container></Section> : null}
        <Section>
          <Container>
            <SectionHeader eyebrow="Frequently Asked Questions" title={`What do homeowners ask about renovating in ${city.name}?`} />
            <div className="mt-10"><FaqList items={content.faqs} withSchema /></div>
          </Container>
        </Section>
        <Cta title={content.ctaTitle} copy={content.ctaCopy} />
      </>
    );
  }

  return (
    <>
      <Hero eyebrow="Service Area" title={`Renovation Company in ${city.name}`} copy={city.intro} image="/images/site/service-area.webp" primaryCta={{ label: "Get Free Estimate", href: "/contact" }} />
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
