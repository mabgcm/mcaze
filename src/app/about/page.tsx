import { FeatureCard } from "@/components/cards";
import { Cta } from "@/components/cta";
import { Hero } from "@/components/hero";
import { Container, Section, SectionHeader } from "@/components/section";
import { Stats } from "@/components/stats";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About",
  description: "Learn about McAze, a Canadian renovation company serving homeowners across the Greater Toronto Area.",
  path: "/about",
});

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
      <Section>
        <Container>
          <SectionHeader eyebrow="Experience" title="Built for real renovation conditions." copy="Occupied homes, tight access, older assemblies, weather, permits, and changing site conditions all require measured decisions. McAze plans with those realities in mind." />
          <div className="mt-10">
            <Stats />
          </div>
        </Container>
      </Section>
      <Cta />
    </>
  );
}
