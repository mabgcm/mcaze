import Image from "next/image";
import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/cards";
import { Cta } from "@/components/cta";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { Container, Section, SectionHeader } from "@/components/section";
import { getProject, projects } from "@/data/projects";
import { getService } from "@/data/services";
import { createMetadata, imageObjectSchema } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return createMetadata({
    title: project.title,
    description: project.summary,
    path: `/portfolio/${project.slug}`,
    image: project.image,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const service = getService(project.serviceSlug);
  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 2);

  return (
    <>
      <Hero eyebrow={project.location} title={project.title} copy={project.summary} image={project.image} primaryCta={{ label: "Request Similar Work", href: "/contact" }} secondaryCta={{ label: "Back to Portfolio", href: "/portfolio" }} />
      <JsonLd data={imageObjectSchema(project.image, project.title)} />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeader eyebrow="Project Details" title="Scope and context" />
            <dl className="mt-8 grid gap-4 text-sm">
              <div className="rounded-xl border border-[#eee9e1] p-4">
                <dt className="font-semibold text-[#161616]">Service</dt>
                <dd className="mt-1 text-[#5d5a55]">{service?.title ?? "Renovation"}</dd>
              </div>
              <div className="rounded-xl border border-[#eee9e1] p-4">
                <dt className="font-semibold text-[#161616]">Location</dt>
                <dd className="mt-1 text-[#5d5a55]">{project.location}</dd>
              </div>
              <div className="rounded-xl border border-[#eee9e1] p-4">
                <dt className="font-semibold text-[#161616]">Year</dt>
                <dd className="mt-1 text-[#5d5a55]">{project.year}</dd>
              </div>
            </dl>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {project.scope.map((item) => (
              <div key={item} className="rounded-2xl border border-[#eee9e1] bg-white p-6 shadow-sm">
                <h2 className="font-semibold text-[#161616]">{item}</h2>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <Section className="bg-[#faf7f1]">
        <Container>
          <SectionHeader eyebrow="Gallery" title="Project gallery placeholder" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {project.gallery.map((image) => (
              <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#eee9e1] bg-white shadow-sm">
                <Image src={image} alt="" fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" />
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeader eyebrow="Before / After" title="A dedicated comparison section for future project photography." copy="Add before and after images here once project photography is available. The layout is ready for side-by-side visual comparisons." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {["Before", "After"].map((label) => (
              <div key={label} className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[#eee9e1] bg-[#f7f3ed] shadow-sm">
                <Image src="/placeholders/before-after.svg" alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#161616] shadow-sm">{label}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <Section className="bg-[#faf7f1]">
        <Container>
          <SectionHeader eyebrow="Related Projects" title="More project templates." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {related.map((item) => (
              <ProjectCard key={item.slug} project={item} />
            ))}
          </div>
        </Container>
      </Section>
      <Cta />
    </>
  );
}
