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
    copy:
      "We start by learning what you want to improve, how the space is used, and what timing or budget expectations matter. This first conversation helps us understand the property, identify obvious constraints, and decide whether a site visit is the right next step.",
  },
  {
    title: "Planning",
    copy:
      "After reviewing the space, we define the scope, materials, assumptions, schedule, and trade requirements. You receive a clear proposal that explains what is included, what is excluded, and what decisions are needed before construction begins.",
  },
  {
    title: "Construction",
    copy:
      "Work is scheduled in practical stages so demolition, rough work, finishes, and cleanup stay coordinated. We protect the home, communicate progress, manage trade handoffs, and keep the renovation moving without rushing details that affect the final result.",
  },
  {
    title: "Walkthrough",
    copy:
      "Before closing the project, we review the completed work with you, note touchups, answer care questions, and confirm any final details. The goal is a clean handoff where the space feels finished, usable, and ready for everyday life.",
  },
];

const trustSignals = [
  {
    title: "Licensed & Insured",
    copy: "Project scopes are reviewed with the right responsibilities in mind, including licensed trades where required.",
  },
  {
    title: "WSIB Covered",
    copy: "Coverage and site expectations are treated as part of professional project planning, not an afterthought.",
  },
  {
    title: "Transparent Pricing",
    copy: "Written estimates define scope, assumptions, exclusions, and payment milestones before work begins.",
  },
  {
    title: "Free Estimates",
    copy: "Homeowners can start with a practical conversation and clear next steps before committing to the project.",
  },
  {
    title: "Quality Materials",
    copy: "Material choices are discussed for durability, maintenance, appearance, and budget fit.",
  },
  {
    title: "Professional Workmanship",
    copy: "Finishing details, protection, cleanup, and final walkthroughs are built into the way the work is managed.",
  },
];

const reviewPlaceholders = [
  "Google review feed placeholder",
  "Recent homeowner feedback",
  "Rating summary placeholder",
];

const insightPlaceholders = [
  {
    title: "How to Plan a Kitchen Renovation Without Losing Daily Function",
    copy: "A future article covering layout decisions, material lead times, temporary kitchen planning, and what to confirm before demolition.",
  },
  {
    title: "Basement Finishing Questions Homeowners Should Ask Early",
    copy: "A future guide for moisture, lighting, ceiling height, flooring, storage, and permit considerations in GTA basements.",
  },
  {
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
        copy="McAze plans and completes Kitchen Renovations, Bathroom Renovations, Basement Finishing, Drywall, Painting, Flooring, Decks, Home Renovations, and Commercial Renovations with clear scopes, tidy job sites, and practical project management."
        image="/images/site/hero-renovation.webp"
        primaryCta={{ label: "Get Free Estimate", href: "/contact" }}
        secondaryCta={{ label: "Explore Services", href: "/services" }}
      />

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Services"
            title="Renovation services for real homes, real schedules, and real budgets."
            copy="From single-room updates to multi-stage renovations, McAze helps homeowners and light commercial clients define the scope, choose practical finishes, coordinate trades, and keep the work moving with less uncertainty."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3" aria-label="McAze renovation services">
            {services.map((service) => (
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
              copy="Renovations affect the most personal parts of a property. Our work is organized around clear communication, practical sequencing, and job sites that feel managed from start to finish."
            />
            <div className="grid gap-5 sm:grid-cols-2">
              <FeatureCard title="Clear scopes" copy="Every serious renovation needs a written scope before work begins. We define the work, assumptions, allowances, exclusions, and timing so homeowners understand what they are approving and where decisions may affect cost or schedule." />
              <FeatureCard title="Protected homes" copy="Renovation work is disruptive, but the property should still feel respected. We plan access, floor protection, dust-conscious habits, material storage, and daily cleanup around the rooms that remain in use." />
              <FeatureCard title="Trade coordination" copy="Good results depend on proper sequencing, not just good individual tasks. McAze coordinates handoffs between demolition, drywall, painting, flooring, electrical coordination, and finishing so each stage supports the next." />
              <FeatureCard title="Measured finish" copy="The final impression comes from details: transitions, trim, touchups, alignment, and cleanup. We treat those details as part of the project plan so the finished space feels complete rather than rushed." />
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
          <SectionHeader eyebrow="Testimonials" title="What homeowners notice most." copy="The best renovation experience is not only about the finished space. Homeowners remember whether communication was clear, the home was respected, and the work felt organized." />
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

      <Section className="bg-[#faf7f1]">
        <Container>
          <SectionHeader eyebrow="Google Reviews" title="Google Reviews placeholder" copy="This section is prepared for verified Google Reviews once the live review feed or approved review content is ready to connect." />
          <div className="mt-10 grid gap-5 md:grid-cols-3" aria-label="Google Reviews placeholders">
            {reviewPlaceholders.map((item) => (
              <article key={item} className="rounded-2xl border border-[#eee9e1] bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-[#b86f12]">Google Reviews</p>
                <h3 className="mt-3 text-xl font-semibold text-[#161616]">{item}</h3>
                <p className="mt-3 leading-7 text-[#5d5a55]">Reserved for authentic review content, rating context, and homeowner feedback once available.</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader eyebrow="Blog" title="Latest Renovation Insights" copy="Helpful renovation planning articles will appear here as the blog grows. These placeholders reserve space for practical homeowner guidance without adding unfinished posts." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {insightPlaceholders.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[#eee9e1] bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-[#b86f12]">Coming Soon</p>
                <h3 className="mt-3 text-xl font-semibold text-[#161616]">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#5d5a55]">{item.copy}</p>
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

      <Cta />
    </>
  );
}
