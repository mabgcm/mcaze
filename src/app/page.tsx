import Image from "next/image";
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
  title: "Home Renovation Contractor in Vaughan, Markham & Richmond Hill",
  description:
    "McAze is a home renovation contractor serving Vaughan, Markham, Richmond Hill, and the Greater Toronto Area with kitchen, bathroom, basement, drywall, painting, flooring, deck, and commercial renovation services.",
});

const process = [
  {
    title: "Consultation",
    image: "/images/site/home-process-consultation.webp",
    copy:
      "We start by learning what you want to improve, how the space is used, and what timing or budget expectations matter. This first conversation helps us understand the property, identify obvious constraints, and decide whether a site visit is the right next step.",
  },
  {
    title: "Planning",
    image: "/images/site/home-process-planning.webp",
    copy:
      "After reviewing the space, we define the scope, materials, assumptions, schedule, and trade requirements. You receive a clear proposal that explains what is included, what is excluded, and what decisions are needed before construction begins.",
  },
  {
    title: "Construction",
    image: "/images/site/home-process-construction.webp",
    copy:
      "Work is scheduled in practical stages so demolition, rough work, finishes, and cleanup stay coordinated. We protect the home, communicate progress, manage trade handoffs, and keep the renovation moving without rushing details that affect the final result.",
  },
  {
    title: "Walkthrough",
    image: "/images/site/home-process-walkthrough.webp",
    copy:
      "Before closing the project, we review the completed work with you, note touchups, answer care questions, and confirm any final details. The goal is a clean handoff where the space feels finished, usable, and ready for everyday life.",
  },
];

const homeServiceImages: Record<string, string> = {
  "kitchen-renovation": "/images/site/home-service-kitchen-mcaze.webp",
  "bathroom-renovation": "/images/site/home-service-bathroom-mcaze.webp",
  "basement-renovation": "/images/site/home-service-basement-mcaze.webp",
  painting: "/images/site/home-service-painting-mcaze.webp",
  drywall: "/images/site/home-service-drywall-mcaze.webp",
  flooring: "/images/site/home-service-flooring-mcaze.webp",
  "deck-fence": "/images/site/home-service-deck-fence-mcaze.webp",
  landscaping: "/images/site/home-service-landscaping-mcaze.webp",
  "snow-removal": "/images/site/home-service-snow-removal-mcaze.webp",
  demolition: "/images/site/home-service-demolition-mcaze.webp",
  electrical: "/images/site/home-service-electrical-mcaze.webp",
};

const trustBar = [
  "Licensed & Insured",
  "WSIB Covered",
  "Free Written Estimates",
  "Transparent Pricing",
  "Quality Workmanship",
  "Warranty Available",
];

const conversionStats = [
  { value: "GTA", label: "Years serving GTA", note: "Local renovation focus" },
  { value: "Project-based", label: "Completed projects", note: "Portfolio numbers coming soon" },
  { value: "Google", label: "Rating", note: "Ready for live review data" },
  { value: "1 business day", label: "Response time", note: "For most estimate requests" },
];

const trustSignals = [
  {
    title: "Licensed & Insured",
    copy: "Renovation work is planned with proper coverage, clear responsibilities, and licensed trade coordination where the scope requires it.",
  },
  {
    title: "WSIB Covered",
    copy: "Coverage expectations are handled as part of the project setup so the site is managed with professional standards from the start.",
  },
  {
    title: "Free Written Estimates",
    copy: "Homeowners receive practical written estimates that define the scope, assumptions, timing, and next steps before committing.",
  },
  {
    title: "Transparent Pricing",
    copy: "Pricing conversations stay tied to real scope, material choices, exclusions, and milestone expectations so there are fewer surprises.",
  },
  {
    title: "Quality Materials",
    copy: "Selections are reviewed for durability, maintenance, appearance, and budget fit instead of choosing finishes on looks alone.",
  },
  {
    title: "Warranty",
    copy: "Product and workmanship expectations are reviewed before work begins and confirmed through the final walkthrough process.",
  },
];

const insightPlaceholders = [
  {
    category: "Planning",
    date: "Coming Soon",
    readingTime: "5 min read",
    title: "How to Plan a Kitchen Renovation Without Losing Daily Function",
    copy: "A future article covering layout decisions, material lead times, temporary kitchen planning, and what to confirm before demolition.",
  },
  {
    category: "Basements",
    date: "Coming Soon",
    readingTime: "6 min read",
    title: "Basement Finishing Questions Homeowners Should Ask Early",
    copy: "A future guide for moisture, lighting, ceiling height, flooring, storage, and permit considerations in GTA basements.",
  },
  {
    category: "Finishes",
    date: "Coming Soon",
    readingTime: "4 min read",
    title: "Choosing Paint, Flooring, and Trim Finishes That Work Together",
    copy: "A future finish-selection note focused on durability, maintenance, colour flow, and avoiding expensive rework.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Canadian renovation company"
        title="Home Renovation Contractor in Vaughan, Markham, Richmond Hill & the Greater Toronto Area (GTA)"
        copy="McAze helps homeowners and businesses plan Kitchen Renovations, Bathroom Renovations, Basement Finishing, Drywall, Painting, Flooring, Decks, Home Renovations, and Commercial Renovations with practical advice, careful scheduling, and workmanship that respects the property."
        image="/images/site/homepage-hero-mcaze-team.webp"
        primaryCta={{ label: "Get Free Estimate", href: "/contact" }}
        secondaryCta={{ label: "Explore Services", href: "/services" }}
        reassuranceItems={["No obligation", "Written scope before construction", "Clear timelines and pricing"]}
      />

      <section className="border-b border-[#eee9e1] bg-white" aria-label="McAze trust credentials">
        <Container className="py-5">
          <div className="grid gap-3 text-sm font-semibold text-[#4c4842] sm:grid-cols-2 lg:grid-cols-6">
            {trustBar.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-[#F59D28]/35 bg-[#F59D28]/10 text-xs text-[#b86f12]" aria-hidden="true">
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-none stroke-current stroke-[2]">
                    <path d="m4 8 2.5 2.5L12 5" />
                  </svg>
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#faf7f1]" aria-label="McAze renovation confidence indicators">
        <Container className="py-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {conversionStats.map((stat) => (
              <article key={stat.label} className="rounded-2xl border border-[#eee9e1] bg-white p-5 shadow-sm">
                <p className="text-2xl font-semibold text-[#161616]">{stat.value}</p>
                <h2 className="mt-2 text-sm font-semibold text-[#161616]">{stat.label}</h2>
                <p className="mt-1 text-sm leading-6 text-[#6f6a62]">{stat.note}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Services"
            title="Renovation services for real homes, real schedules, and real budgets."
            copy="From single-room updates to multi-stage renovations, McAze helps homeowners and light commercial clients define the scope, choose practical finishes, coordinate trades, and keep the work moving with less uncertainty."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3" aria-label="McAze renovation services">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} image={homeServiceImages[service.slug]} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-[#faf7f1]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionHeader
                eyebrow="Why McAze"
                title="A renovation company built around clarity, respect, and clean workmanship."
                copy="Renovations affect the most personal parts of a property. Our work is organized around clear communication, practical sequencing, and job sites that feel managed from start to finish."
              />
              <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-2xl bg-[#f7f3ed] shadow-sm lg:aspect-[5/4]">
                <Image
                  src="/images/site/home-why-mcaze-teamwork.webp"
                  alt="McAze renovation team coordinating work on an active job site"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <FeatureCard title="Clear communication" copy="Homeowners should not have to chase updates or guess what happens next. We explain scope, timing, decisions, and changes in plain language so the renovation feels organized from the first visit." />
              <FeatureCard title="Clean job sites" copy="Renovation work is disruptive, but the home should still be respected. We plan access, floor protection, dust-conscious habits, material storage, and daily cleanup around the rooms that remain in use." />
              <FeatureCard title="Reliable scheduling" copy="Good results depend on practical sequencing, not rushed promises. McAze coordinates demolition, drywall, painting, flooring, electrical coordination, and finishing so each stage supports the next." />
              <FeatureCard title="Attention to detail" copy="The final impression comes from transitions, trim, touchups, alignment, and cleanup. We treat those details as part of the project plan so the finished space feels complete rather than patched together." />
            </div>
          </div>
          <div className="mt-12">
            <Stats />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader eyebrow="Process" title="A straightforward renovation process from first visit to final walkthrough." copy="A clear process helps homeowners understand what happens next, when decisions are needed, and how the project will be managed once work begins." />
          <div className="mt-10">
            <ProcessSteps steps={process} />
          </div>
        </Container>
      </Section>

      <Section className="bg-[#faf7f1]">
        <Container>
          <SectionHeader eyebrow="Featured Projects" title="Project examples shaped around practical design and careful construction." copy="These project templates show the type of renovation work McAze supports across the GTA. Full case studies and photography can be added as completed projects are documented." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader eyebrow="Google Reviews" title="What McAze customers say on Google." copy="Recent feedback from customers who shared their experience on McAze Renovation's public Google Business Profile." />
          <div className="mt-10">
            <Testimonials />
          </div>
        </Container>
      </Section>

      <Section className="bg-[#faf7f1]">
        <Container>
          <SectionHeader eyebrow="Service Areas" title="Renovation services across Vaughan, Markham, Richmond Hill and the GTA." copy="McAze works across a range of GTA homes, from established detached houses to townhomes, condos, rental spaces, and light commercial properties." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <CityCard key={city.slug} city={city} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader eyebrow="FAQ" title="Common renovation questions, answered plainly." copy="These answers cover the questions homeowners often ask before comparing estimates, choosing materials, or booking a renovation contractor." />
          <div className="mt-10">
            <FaqList items={faqs} withSchema />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader eyebrow="Blog" title="Latest Renovation Insights" copy="Helpful renovation planning articles will appear here as the blog grows. These placeholders reserve space for practical homeowner guidance without adding unfinished posts." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {insightPlaceholders.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[#eee9e1] bg-white p-6 shadow-sm">
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm font-semibold text-[#b86f12]">
                  <span>{item.category}</span>
                  <span className="text-[#5d5a55]">{item.date}</span>
                  <span className="text-[#5d5a55]">{item.readingTime}</span>
                </div>
                <h3 className="mt-3 text-xl font-semibold text-[#161616]">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#5d5a55]">{item.copy}</p>
                <span className="mt-5 inline-flex text-sm font-semibold text-[#b86f12]">Continue Reading</span>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-[#faf7f1]">
        <Container>
          <SectionHeader eyebrow="Trust Signals" title="Professional renovation standards, without unnecessary complexity." copy="Before inviting a contractor into your home, you should understand how pricing, protection, materials, coverage, and workmanship will be handled." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {trustSignals.map((signal) => (
              <article key={signal.title} className="rounded-2xl border border-[#eee9e1] bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#161616]">{signal.title}</h3>
                <p className="mt-3 leading-7 text-[#5d5a55]">{signal.copy}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Cta image="/images/site/home-cta-mcaze-team.webp" />
    </>
  );
}
