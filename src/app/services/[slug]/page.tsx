import { notFound } from "next/navigation";
import Link from "next/link";
import { ProjectCard, ServiceCard } from "@/components/cards";
import { Cta } from "@/components/cta";
import { FaqList } from "@/components/faq";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { InternalLinks } from "@/components/internal-links";
import { ProcessSteps } from "@/components/process";
import { Container, Section, SectionHeader } from "@/components/section";
import { getService, services } from "@/data/services";
import { projects } from "@/data/projects";
import { cities } from "@/data/locations";
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
    title: service.seoTitle ?? service.title,
    description: service.seoDescription ?? service.excerpt,
    path: `/services/${service.slug}`,
    image: service.image,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const related = service.related
    .map(getService)
    .filter(Boolean)
    .sort((a, b) => a!.title.localeCompare(b!.title, "en", { sensitivity: "base" }));
  const pageContent = service.pageContent;
  const featuredProjects = pageContent?.projectSlugs
    ?.map((projectSlug) => projects.find((project) => project.slug === projectSlug))
    .filter((project) => project !== undefined);
  const priorityAreaSlugs = ["toronto", "vaughan", "markham", "richmond-hill", "north-york", "mississauga"];
  const serviceAreaLinks = priorityAreaSlugs
    .map((areaSlug) => cities.find((city) => city.slug === areaSlug))
    .filter((city): city is NonNullable<typeof city> => Boolean(city))
    .map((city) => ({
      label: `${service.shortTitle} in ${city.name}`,
      href: `/service-areas/${city.slug}`,
      description: `Planning and service information for ${city.name}.`,
    }));

  if (pageContent) {
    return (
      <>
        <Hero
          eyebrow={pageContent.heroEyebrow}
          title={service.title}
          copy={pageContent.heroCopy}
          image={service.image}
          primaryCta={{ label: "Get Free Estimate", href: "/contact" }}
          secondaryCta={pageContent.secondaryCta ?? { label: "View Bathroom Project", href: "/portfolio/full-bathroom-renovation-gta" }}
        />
        <JsonLd data={serviceSchema(service)} />
        <Section>
          <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeader eyebrow="Planning Guide" title={pageContent.introQuestion} />
            <div className="space-y-5 text-base leading-8 text-[#5d5a55] sm:text-lg">
              {pageContent.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </Container>
        </Section>
        {pageContent.questions.map((section, index) => (
          <Section key={section.question} className={index % 2 === 0 ? "bg-[#faf7f1]" : undefined}>
            <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <SectionHeader eyebrow={section.eyebrow} title={section.question} />
              <div>
                <div className="space-y-5 text-base leading-8 text-[#5d5a55] sm:text-lg">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                {section.bullets ? (
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="rounded-xl border border-[#eee9e1] bg-white px-4 py-3 text-sm font-medium leading-6 text-[#383531]">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {section.sourceLink ? (
                  <Link href={section.sourceLink.href} target="_blank" rel="noreferrer" className="mt-7 inline-flex text-sm font-semibold text-[#b86f12] underline decoration-[#b86f12]/35 underline-offset-4">
                    {section.sourceLink.label}
                  </Link>
                ) : null}
              </div>
            </Container>
          </Section>
        ))}
        {featuredProjects?.length ? (
          <Section className="bg-[#faf7f1]">
            <Container>
              <SectionHeader eyebrow="Real McAze Work" title={pageContent.projectQuestion ?? "What does this service look like in a real project?"} />
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
              </div>
            </Container>
          </Section>
        ) : null}
        <Section>
          <Container>
            <SectionHeader eyebrow="Related Services" title={pageContent.relatedQuestion ?? "Which services are often planned together?"} />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {related.map((item) => (item ? <ServiceCard key={item.slug} service={item} /> : null))}
            </div>
          </Container>
        </Section>
        <InternalLinks
          eyebrow="Service Areas"
          title={`Where does McAze provide ${service.title.toLowerCase()}?`}
          copy="Connect this service with local renovation guidance for the communities McAze serves across Toronto and the GTA."
          links={serviceAreaLinks}
        />
        <Section className="bg-[#faf7f1]">
          <Container>
            <SectionHeader eyebrow="Frequently Asked Questions" title={pageContent.faqQuestion ?? `What do homeowners ask about ${service.title.toLowerCase()}?`} />
            <div className="mt-10">
              <FaqList items={service.faqs} withSchema />
            </div>
          </Container>
        </Section>
        <Cta title={pageContent.ctaQuestion ?? `Are you planning a ${service.title.toLowerCase()} project?`} copy={pageContent.ctaCopy} />
      </>
    );
  }

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
      <InternalLinks
        eyebrow="Service Areas"
        title={`Explore ${service.title.toLowerCase()} across the GTA`}
        links={serviceAreaLinks}
      />
      <Cta title={`Planning a ${service.title.toLowerCase()} project?`} />
    </>
  );
}
