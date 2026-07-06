import { ProjectCard } from "@/components/cards";
import { Cta } from "@/components/cta";
import { Hero } from "@/components/hero";
import { Container, Section, SectionHeader } from "@/components/section";
import { projects } from "@/data/projects";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Portfolio",
  description: "View McAze renovation project placeholders and portfolio templates for kitchens, bathrooms, basements, and full-home improvements.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <Hero
        eyebrow="Portfolio"
        title="Project pages ready for real renovation work."
        copy="These portfolio templates are structured for galleries, details, before-and-after sections, related projects, and strong internal linking."
        image="/images/site/portfolio-main-floor.webp"
        primaryCta={{ label: "Start a Project", href: "/contact" }}
      />
      <Section>
        <Container>
          <SectionHeader title="Featured projects" copy="Replace the placeholder images and project notes with completed McAze work as the portfolio grows." />
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
