import { ProjectCard } from "@/components/cards";
import { Cta } from "@/components/cta";
import { Hero } from "@/components/hero";
import { Container, Section, SectionHeader } from "@/components/section";
import { projects } from "@/data/projects";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Renovation Projects & Portfolio",
  description: "Explore McAze renovation and construction projects across Markham and the GTA, including detailed scopes, installation methods and project galleries.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <Hero
        eyebrow="Portfolio"
        title="Real project details. Careful work from preparation to finish."
        copy="Explore completed McAze work across Markham and the Greater Toronto Area, with project scopes, construction-stage details, galleries, and the decisions behind each result."
        image="/images/portfolio/markham-window-door/markham-new-construction-windows-side-elevation.webp"
        primaryCta={{ label: "Discuss Your Project", href: "/contact" }}
      />
      <Section>
        <Container>
          <SectionHeader title="Featured projects" copy="See how McAze plans, coordinates, and completes renovation and construction work across the GTA." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </Section>
      <Cta />
    </>
  );
}
