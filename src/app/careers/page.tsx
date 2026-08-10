import Image from "next/image";
import Link from "next/link";
import { CareerForm } from "@/components/career-form";
import { Hero } from "@/components/hero";
import { InternalLinks } from "@/components/internal-links";
import { Container, Section, SectionHeader } from "@/components/section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Careers in Renovation & Construction",
  description: "Explore construction and renovation career opportunities with McAze across Toronto and the GTA. Submit a career inquiry for field, coordination and subcontractor roles.",
  path: "/careers",
  image: "/images/site/home-cta-mcaze-team.webp",
});

const opportunities = [
  { title: "Experienced Carpenter", tag: "Field · Toronto & GTA", copy: "Lead accurate framing, installation, finish carpentry and repair work in occupied homes and active commercial properties.", requirements: ["5+ years of relevant carpentry or renovation experience", "Confident reading plans, measuring, laying out and solving site conditions", "Professional conduct, reliable transportation and safe work habits"] },
  { title: "Renovation Technician / Multi-trade", tag: "Field · Toronto & GTA", copy: "Support renovation scopes across demolition, drywall, flooring, trim, painting, fixture installation and final deficiencies.", requirements: ["Practical experience across several renovation trades", "Careful protection, cleanup and occupied-property awareness", "Ability to work independently and communicate progress clearly"] },
  { title: "Project Coordinator / Site Lead", tag: "Operations · Toronto & GTA", copy: "Coordinate people, materials, schedules and quality checks while keeping clients and trade partners informed.", requirements: ["Construction coordination or site-lead experience", "Strong scheduling, documentation and client communication", "Ability to identify risks early and maintain professional job sites"] },
  { title: "Qualified Trade Partner", tag: "Subcontract · GTA", copy: "Partner with McAze on clearly scoped residential, commercial and temporary-infrastructure work.", requirements: ["Relevant licensing, insurance and certifications", "Dependable scheduling and written scope discipline", "Safety-focused crews and consistent finish quality"] },
];

const values = [
  ["01", "Craft with purpose", "We care about the details people see and the concealed work that makes a renovation last."],
  ["02", "Communicate clearly", "Questions, changes and site conditions are raised early so the team can make informed decisions."],
  ["03", "Respect the property", "Protection, cleanup and considerate conduct are part of the work—not optional extras."],
  ["04", "Finish as a team", "Reliable handoffs and shared accountability matter more than individual shortcuts."],
];

type CareersPageProps = { searchParams: Promise<{ sent?: string; error?: string }> };

export default async function CareersPage({ searchParams }: CareersPageProps) {
  const params = await searchParams;
  const status = params.sent === "1" ? "sent" : params.error === "config" ? "config-error" : params.error ? "error" : undefined;

  return (
    <>
      <Hero eyebrow="Careers at McAze" title="Build work you are proud to put your name on." copy="Join a renovation and construction team that values preparation, skill, accountability and respect for the client’s property. Explore current areas of hiring and submit a complete application online." image="/images/site/home-cta-mcaze-team.webp" primaryCta={{ label: "See Open Positions", href: "#opportunities" }} secondaryCta={{ label: "Apply Now", href: "#apply" }} reassuranceItems={["26+ years of experience", "Residential & commercial projects", "Toronto and GTA job sites"]} />

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <SectionHeader eyebrow="Working at McAze" title="A professional crew built around trust, preparation and finish quality." copy="We are interested in people who understand that construction is both technical and personal. Clients invite us into active homes and businesses, so skill must come with reliability, awareness and professional conduct." />
            <Link href="#apply" className="mt-7 inline-flex border-b-2 border-[#F59D28] pb-1 text-sm font-bold uppercase tracking-[0.1em] text-[#171714]">Introduce yourself →</Link>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-[#ddd6ca] shadow-[12px_12px_0_rgba(245,157,40,0.22)]">
            <Image src="/images/site/home-why-mcaze-teamwork.webp" alt="McAze team coordinating renovation work on site" fill sizes="(min-width:1024px) 58vw, 100vw" className="object-cover" />
          </div>
        </Container>
      </Section>

      <Section className="border-y border-[#e7e2d8] bg-white">
        <Container>
          <SectionHeader eyebrow="How we work" title="Standards that travel from the first walkthrough to the final handover." />
          <div className="mt-12 grid border-y border-[#dcd5c8] md:grid-cols-2 lg:grid-cols-4">
            {values.map(([number, title, copy]) => <article key={number} className="border-b border-[#dcd5c8] p-6 md:border-r lg:border-b-0 lg:last:border-r-0"><span className="display-title text-sm text-[#a95e08]">{number}</span><h3 className="display-title mt-8 text-xl leading-tight">{title}</h3><p className="mt-4 leading-7 text-[#5e5b54]">{copy}</p></article>)}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div id="opportunities" className="scroll-mt-36">
          <SectionHeader eyebrow="Open positions" title="Find the role that matches your experience." copy="Each position has a clear purpose and practical expectations. Applications are reviewed against current staffing and project needs." />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {opportunities.map((item, index) => <article key={item.title} className="group flex flex-col border border-[#dcd5c8] bg-white p-7 shadow-[8px_8px_0_rgba(245,157,40,0.10)] transition hover:-translate-y-1 hover:border-[#F59D28] sm:p-8"><div className="flex items-start justify-between gap-5"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a95e08]">{item.tag}</p><span className="text-sm font-bold text-[#b6afa3]">0{index + 1}</span></div><h3 className="mt-5 text-2xl font-bold tracking-[-0.03em]">{item.title}</h3><p className="mt-4 leading-7 text-[#5e5b54]">{item.copy}</p><p className="mt-6 text-xs font-bold uppercase tracking-[0.14em]">What we are looking for</p><ul className="mt-3 grid gap-3 text-sm leading-6 text-[#5e5b54]">{item.requirements.map((requirement) => <li key={requirement} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 bg-[#F59D28]" />{requirement}</li>)}</ul><a href="#apply" className="mt-7 inline-flex w-fit border-b-2 border-[#F59D28] pb-1 text-sm font-bold uppercase tracking-[0.08em] text-[#171714]">Apply for this role <span className="ml-2">→</span></a></article>)}
          </div>
          </div>
        </Container>
      </Section>

      <section className="relative min-h-[420px] overflow-hidden bg-[#171714]">
        <Image src="/images/site/homepage-hero-mcaze-team.webp" alt="McAze renovation professionals working together on site" fill sizes="100vw" className="object-cover object-center opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/15" />
        <Container className="relative z-10 flex min-h-[420px] items-center py-16 text-white"><div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F59D28]">More than a job site</p><h2 className="mt-5 text-3xl font-bold tracking-[-0.04em] sm:text-5xl">Skill grows where standards are shared.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-white/78">McAze brings field crews, coordinators and trade partners together around clear scopes, safe execution, honest communication and a finish everyone can stand behind.</p></div></Container>
      </section>

      <Section className="bg-[#f1ece3]">
        <Container className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div className="lg:sticky lg:top-36">
            <SectionHeader eyebrow="Join the team" title="Tell us about your experience." copy="Share the kind of work you are looking for and the skills you bring. We will review inquiries against current project and staffing needs." />
            <div className="mt-8 border-l-4 border-[#171714] pl-5 text-sm leading-7 text-[#5e5b54]"><strong className="text-[#171714]">Prefer email?</strong><br /><a href="mailto:info@mcaze.ca" className="font-semibold text-[#a95e08]">info@mcaze.ca</a></div>
          </div>
          <CareerForm status={status} />
        </Container>
      </Section>
      <InternalLinks title="Learn more about McAze before you apply" links={[
        { label: "Meet the team", href: "/team" },
        { label: "About McAze", href: "/about" },
        { label: "View our project portfolio", href: "/portfolio" },
      ]} />
    </>
  );
}
