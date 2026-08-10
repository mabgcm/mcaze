import { FeatureCard } from "@/components/cards";
import { Cta } from "@/components/cta";
import { Hero } from "@/components/hero";
import { InternalLinks } from "@/components/internal-links";
import { Container, Section, SectionHeader } from "@/components/section";
import { Stats } from "@/components/stats";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "McAze Renovation | Trusted Home & Commercial Renovation Experts in GTA",
  description: "McAze provides residential and commercial renovation across the GTA with quality craftsmanship, reliable project management, and clear service.",
  path: "/about",
});

const workPrinciples = [
  "Integrity in every project",
  "Clear communication",
  "On-time project delivery",
  "Professional workmanship",
  "Clean and organized job sites",
  "Continuous improvement",
  "Respect for every client and property",
];

const whyMcAze = [
  "Experienced renovation professionals",
  "Residential and commercial expertise",
  "High-quality materials",
  "Transparent pricing",
  "Reliable project management",
  "Attention to detail",
  "On-time completion",
  "Clean workmanship",
  "Excellent customer service",
  "Free estimates",
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About McAze"
        title="Renovation work led by practical planning and pride in the finish."
        copy="McAze was built for homeowners who want a renovation partner that communicates clearly, protects the home, and takes the details seriously."
        image="/images/site/about-consultation.webp"
        primaryCta={{ label: "Schedule a Consultation", href: "/contact" }}
      />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader eyebrow="Company Story" title="A steady, detail-led approach to improving homes." />
          <div className="space-y-5 text-lg leading-8 text-[#5d5a55]">
            <p>
              McAze serves homeowners who value clean workmanship, realistic timelines, and direct communication. Our work spans kitchens, bathrooms, basements, finishing, exterior improvements, and seasonal property support.
            </p>
            <p>
              We believe good renovation work is not loud. It is organized, well protected, properly sequenced, and finished with the kind of care that makes a space feel settled.
            </p>
          </div>
        </Container>
      </Section>
      <Section className="bg-[#faf7f1]">
        <Container>
          <SectionHeader eyebrow="Mission & Values" title="We build trust by making the work easier to understand." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <FeatureCard title="Clarity" copy="Scopes, schedules, and changes are communicated plainly so homeowners can make confident decisions." />
            <FeatureCard title="Respect" copy="Homes are protected, neighbours are considered, and daily cleanup is treated as part of the job." />
            <FeatureCard title="Durability" copy="Material choices and installation details are planned for long-term use, not only the first impression." />
          </div>
        </Container>
      </Section>
      <Section className="overflow-hidden bg-[#171714] text-white">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F59D28]">Our Foundation</p>
            <h2 className="mt-4 text-balance text-4xl font-bold tracking-[-0.04em] sm:text-5xl">The purpose and direction behind every McAze project.</h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[2rem] bg-white/15 lg:grid-cols-2">
            <article className="bg-[#22221e] p-8 sm:p-12">
              <span className="text-sm font-bold text-[#F59D28]">01</span>
              <h3 className="mt-8 text-3xl font-bold">Mission</h3>
              <p className="mt-5 text-lg leading-8 text-white/72">To deliver high-quality renovation and construction solutions with craftsmanship, transparency, and reliable service that add lasting value to every property.</p>
            </article>
            <article className="bg-[#F59D28] p-8 text-[#171714] sm:p-12">
              <span className="text-sm font-bold">02</span>
              <h3 className="mt-8 text-3xl font-bold">Vision</h3>
              <p className="mt-5 text-lg leading-8 text-[#171714]/75">To become one of the GTA’s most trusted renovation companies, recognized for excellence, innovation, and long-term customer satisfaction.</p>
            </article>
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <SectionHeader eyebrow="Quality" title="Durable results begin with disciplined standards." />
          <div className="space-y-8">
            <p className="text-lg leading-8 text-[#5d5a55]">We use premium materials, skilled professionals, and proven installation methods to ensure durable, safe, and high-quality results. Every project is completed with attention to detail and strict quality control.</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {["Premium materials", "Skilled professionals", "Strict quality control"].map((item) => <div key={item} className="border-l-4 border-[#F59D28] bg-[#faf7f1] p-5 font-semibold text-[#171714]">{item}</div>)}
            </div>
          </div>
        </Container>
      </Section>
      <Section className="bg-[#faf7f1]">
        <Container>
          <SectionHeader eyebrow="Work Principles" title="The standards that guide how we plan, communicate, and build." copy="These principles apply from the first conversation through site preparation, construction, quality review, and final handover." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {workPrinciples.map((principle, index) => <article key={principle} className="min-h-40 rounded-2xl border border-[#e7e2d8] bg-white p-6 shadow-sm"><span className="text-xs font-bold tracking-[0.18em] text-[#b86f12]">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-8 text-xl font-semibold leading-7 text-[#171714]">{principle}</h3></article>)}
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeader eyebrow="Our Commitments" title="Professional responsibility at every stage of the work." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <FeatureCard title="Customer Commitment" copy="Our clients come first. We listen carefully, provide honest recommendations, maintain transparent pricing, and keep customers informed throughout every stage. Our goal is to exceed expectations and build long-term relationships based on trust." />
            <FeatureCard title="Safety" copy="Safety is a priority on every project. We follow industry best practices, maintain clean work areas, use proper protective equipment, and complete work according to applicable building standards and regulations." />
            <FeatureCard title="Responsibility" copy="We take responsibility for workmanship, project management, and customer satisfaction while respecting deadlines, budgets, properties, the environment, and professional standards from start to finish." />
          </div>
        </Container>
      </Section>
      <Section className="bg-[#171714] text-white">
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F59D28]">Why McAze</p>
            <h2 className="mt-4 text-balance text-4xl font-bold tracking-[-0.04em] sm:text-5xl">A renovation partner built around value, reliability, and care.</h2>
            <p className="mt-6 text-lg leading-8 text-white/68">Residential and commercial clients choose McAze for organized project delivery, transparent communication, and workmanship designed to last.</p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl bg-white/15 sm:grid-cols-2">
            {whyMcAze.map((reason) => <div key={reason} className="flex min-h-20 items-center gap-4 bg-[#22221e] px-5 py-4"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#F59D28] text-xs font-bold text-[#171714]">✓</span><span className="font-semibold text-white/88">{reason}</span></div>)}
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeader eyebrow="Experience" title="Built for real renovation conditions." copy="Occupied homes, tight access, older assemblies, weather, permits, and changing site conditions all require measured decisions. McAze plans with those realities in mind." />
          <div className="mt-10">
            <Stats />
          </div>
        </Container>
      </Section>
      <InternalLinks title="Learn more about the people and work behind McAze" links={[
        { label: "Meet the McAze team", href: "/team", description: "Meet the people guiding field work and company direction." },
        { label: "View completed projects", href: "/portfolio", description: "Review documented residential and commercial work." },
        { label: "Explore careers", href: "/careers", description: "See current field, coordination and trade opportunities." },
      ]} />
      <Cta title="Ready to transform your property?" copy="Contact McAze today for a free consultation and receive a customized renovation solution tailored to your needs." />
    </>
  );
}
