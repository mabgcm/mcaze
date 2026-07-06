import { CityCard, FeatureCard, ProjectCard, ServiceCard } from "@/components/cards";
import { Cta } from "@/components/cta";
import { FaqList } from "@/components/faq";
import { Hero } from "@/components/hero";
import { ProcessSteps } from "@/components/process";
import { Container, Section, SectionHeader } from "@/components/section";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";
import { faqs } from "@/data/faqs";
import { cities } from "@/data/locations";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  description:
    "McAze is a premium Canadian renovation company serving Vaughan, Markham, Richmond Hill, Toronto, North York, Mississauga, and the GTA.",
});

const process = ["Consultation", "Detailed scope", "Scheduling", "Construction", "Final walkthrough"];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Canadian renovation company"
        title="Renovation work with calm planning and sharp execution."
        copy="McAze helps GTA homeowners improve kitchens, bathrooms, basements, interiors, and exterior spaces with organized project management and carefully finished work."
        image="/images/site/hero-renovation.webp"
        primaryCta={{ label: "Request a Quote", href: "/contact" }}
        secondaryCta={{ label: "View Services", href: "/services" }}
      />

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Services"
            title="Focused renovation services for the way homes are actually used."
            copy="Every project starts with a clear scope and a practical plan. We coordinate the details so the finished space feels considered, durable, and easy to live with."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-[#faf7f1]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeader
              eyebrow="Why McAze"
              title="A renovation company built around clarity, respect, and clean workmanship."
              copy="Renovations affect the most personal parts of a home. Our process is designed to reduce uncertainty and keep decisions grounded."
            />
            <div className="grid gap-5 sm:grid-cols-2">
              <FeatureCard title="Clear scopes" copy="Written proposals define the work, assumptions, allowances, and exclusions before the schedule is set." />
              <FeatureCard title="Protected homes" copy="We plan access, dust control, daily cleanup, and protection around the rooms that remain in use." />
              <FeatureCard title="Trade coordination" copy="Scheduling, sequencing, and handoffs are managed so each stage supports the next one." />
              <FeatureCard title="Measured finish" copy="Details, transitions, and final touchups are treated as part of the project, not an afterthought." />
            </div>
          </div>
          <div className="mt-12">
            <Stats />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader eyebrow="Process" title="A straightforward path from first visit to final walkthrough." />
          <div className="mt-10">
            <ProcessSteps steps={process} />
          </div>
        </Container>
      </Section>

      <Section className="bg-[#faf7f1]">
        <Container>
          <SectionHeader eyebrow="Featured Projects" title="Recent work shaped by practical design and careful construction." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader eyebrow="Testimonials" title="What homeowners notice most." />
          <div className="mt-10">
            <Testimonials />
          </div>
        </Container>
      </Section>

      <Section className="bg-[#faf7f1]">
        <Container>
          <SectionHeader eyebrow="Service Areas" title="Renovation services across the Greater Toronto Area." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <CityCard key={city.slug} city={city} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader eyebrow="FAQ" title="Common renovation questions, answered plainly." />
          <div className="mt-10">
            <FaqList items={faqs.slice(0, 4)} withSchema />
          </div>
        </Container>
      </Section>

      <Cta />
    </>
  );
}
