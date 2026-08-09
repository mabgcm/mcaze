import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/breadcrumb";
import { Button } from "@/components/button";
import { ProjectCard } from "@/components/cards";
import { Cta } from "@/components/cta";
import { JsonLd } from "@/components/json-ld";
import { Container, Section, SectionHeader } from "@/components/section";
import { getProject, projects } from "@/data/projects";
import { getService } from "@/data/services";
import { createMetadata, faqSchema, projectSchema } from "@/lib/seo";

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
    title: project.seoTitle ?? project.title,
    description: project.seoDescription ?? project.summary,
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
  const galleryItems =
    project.galleryItems ??
    project.gallery.map((image, index) => ({
      image,
      alt: `${project.title} project view ${index + 1}`,
      caption: `Project view ${index + 1}`,
      orientation: "landscape" as const,
    }));
  const intro = project.intro ?? [project.summary];
  const challenge = project.challenge ?? [
    "The work required careful coordination of the existing conditions, selected materials and the trades responsible for the next stages.",
  ];
  const solution = project.solution ?? [
    "McAze organized the work around practical sequencing, careful site preparation and clear quality checks before the finishing stages.",
  ];

  return (
    <>
      <JsonLd data={projectSchema(project)} />
      {project.faqs?.length ? <JsonLd data={faqSchema(project.faqs)} /> : null}

      <section className="relative isolate min-h-[680px] overflow-hidden bg-[#161616] text-white">
        <Image
          src={project.image}
          alt={project.imageAlt ?? project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/72 to-black/18" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/15" aria-hidden="true" />
        <Container className="relative z-10 flex min-h-[680px] flex-col justify-end py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F59D28]">
              Featured Project · {project.location}
            </p>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.06] sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-pretty text-base leading-8 text-white/82 sm:text-lg">{project.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Request a Project Estimate</Button>
              <Button href="#project-gallery" variant="secondary">
                View Project Gallery
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <div className="border-b border-[#eee9e1] bg-white">
        <Container className="py-5">
          <Breadcrumb
            items={[
              { name: "Home", href: "/" },
              { name: "Portfolio", href: "/portfolio" },
              { name: project.title, href: `/portfolio/${project.slug}` },
            ]}
          />
        </Container>
      </div>

      <nav aria-label="Project sections" className="sticky top-0 z-30 border-b border-[#eee9e1] bg-white/95 backdrop-blur">
        <Container className="flex gap-6 overflow-x-auto py-4 text-sm font-semibold text-[#5d5a55]">
          {[
            ["Overview", "#overview"],
            ["Scope", "#scope"],
            ["Approach", "#approach"],
            ["Gallery", "#project-gallery"],
            ["FAQ", "#project-faq"],
          ].map(([label, href]) => (
            <Link key={href} href={href} className="whitespace-nowrap transition hover:text-[#b86f12]">
              {label}
            </Link>
          ))}
        </Container>
      </nav>

      <Section compact>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
            <article id="overview" className="scroll-mt-24">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b86f12]">Project overview</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold sm:text-4xl">
                {project.overviewTitle ?? `A carefully coordinated ${project.projectType?.toLowerCase() ?? "construction"} project`}
              </h2>
              <div className="mt-7 space-y-5 text-pretty text-base leading-8 text-[#5d5a55] sm:text-lg">
                {intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>

            <aside className="h-fit rounded-3xl border border-[#eee9e1] bg-[#faf7f1] p-6 shadow-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b86f12]">Project snapshot</p>
              <dl className="mt-6 divide-y divide-[#e6dfd4]">
                {[
                  ["Location", project.location],
                  ["Project type", project.projectType ?? service?.title ?? "Renovation"],
                  ["Completed", project.year],
                  ["Primary focus", project.categories?.slice(0, 3).join(", ") ?? service?.title ?? "Renovation"],
                ].map(([term, detail]) => (
                  <div key={term} className="py-4 first:pt-0 last:pb-0">
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#77716a]">{term}</dt>
                    <dd className="mt-2 font-semibold leading-6 text-[#161616]">{detail}</dd>
                  </div>
                ))}
              </dl>
              <Button href="/contact" className="mt-7 w-full">
                Plan a Similar Project
              </Button>
            </aside>
          </div>
        </Container>
      </Section>

      <Section compact className="bg-[#161616] text-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <article>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F59D28]">The challenge</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold sm:text-4xl">
                {project.challengeTitle ?? "Site conditions, sequencing and construction accuracy"}
              </h2>
              <div className="mt-7 space-y-5 leading-8 text-white/68">
                {challenge.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
            <article>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F59D28]">The solution</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold sm:text-4xl">
                {project.solutionTitle ?? "A measured, stage-by-stage construction process"}
              </h2>
              <div className="mt-7 space-y-5 leading-8 text-white/68">
                {solution.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          </div>
        </Container>
      </Section>

      <Section compact>
        <Container>
          <div id="scope" className="scroll-mt-24">
            <SectionHeader
              eyebrow="Complete scope"
              title={project.scopeTitle ?? "A coordinated project scope from preparation to quality control"}
              copy={
                project.scopeCopy ??
                "The work was planned as one connected scope so each completed stage would provide a reliable starting point for the next."
              }
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.scope.map((item, index) => (
                <article key={item} className="rounded-2xl border border-[#eee9e1] bg-white p-6 shadow-sm">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#F59D28]/12 text-sm font-semibold text-[#b86f12]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-semibold leading-6 text-[#161616]">{item}</h3>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <section className="relative min-h-[520px] overflow-hidden bg-[#161616]">
        <Image
          src={project.featureImage ?? galleryItems[0]?.image ?? project.image}
          alt={project.featureImage ? project.featureTitle ?? project.title : galleryItems[0]?.alt ?? project.title}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/58 to-transparent" aria-hidden="true" />
        <Container className="relative z-10 flex min-h-[520px] items-center py-16 text-white">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F59D28]">
              {project.featureEyebrow ?? "Project coordination"}
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold sm:text-4xl">
              {project.featureTitle ?? "Construction details coordinated across the complete project"}
            </h2>
            <p className="mt-6 text-pretty leading-8 text-white/72">
              {project.featureCopy ??
                "The project was reviewed both detail by detail and as a complete assembly, supporting accurate follow-on work and a consistent finished result."}
            </p>
          </div>
        </Container>
      </section>

      <Section compact>
        <Container>
          <div id="approach" className="mx-auto max-w-4xl scroll-mt-24">
            {project.contentSections?.map((section, index) => (
              <article key={section.title} className="border-b border-[#eee9e1] py-12 first:pt-0 last:border-0 last:pb-0">
                {section.eyebrow ? (
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b86f12]">{section.eyebrow}</p>
                ) : null}
                <h2 className="mt-4 text-balance text-3xl font-semibold text-[#161616] sm:text-4xl">{section.title}</h2>
                <div className="mt-7 space-y-5 text-pretty leading-8 text-[#5d5a55]">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets?.length ? (
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex gap-3 rounded-xl bg-[#faf7f1] p-4 leading-7 text-[#4f4b45]">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#F59D28]" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {index === 1 && galleryItems[5] ? (
                  <figure className="mt-10 overflow-hidden rounded-3xl border border-[#eee9e1] bg-[#faf7f1]">
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={galleryItems[5].image}
                        alt={galleryItems[5].alt}
                        fill
                        sizes="(min-width: 1024px) 896px, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="p-5 text-sm leading-6 text-[#5d5a55]">{galleryItems[5].caption}</figcaption>
                  </figure>
                ) : null}
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section compact className="bg-[#faf7f1]">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-[#e8e1d7] bg-white p-7 shadow-sm sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b86f12]">Visible materials</p>
              <h2 className="mt-4 text-2xl font-semibold">Products and assembly components</h2>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {(project.materials ?? []).map((item) => (
                  <li key={item} className="flex gap-3 leading-7 text-[#5d5a55]">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#F59D28]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl bg-[#161616] p-7 text-white shadow-sm sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F59D28]">Quality control</p>
              <h2 className="mt-4 text-2xl font-semibold">Checks before the work is concealed</h2>
              <ul className="mt-7 grid gap-3">
                {(project.qualityChecks ?? []).map((item) => (
                  <li key={item} className="flex gap-3 leading-7 text-white/72">
                    <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-[#F59D28]/50 text-xs text-[#F59D28]">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </Container>
      </Section>

      <Section compact>
        <Container>
          <div id="project-gallery" className="scroll-mt-24">
            <SectionHeader
              eyebrow="Project gallery"
              title={project.galleryTitle ?? `${project.title} construction details`}
              copy={
                project.galleryCopy ??
                "These photographs document the active construction stage, including preparation, installation details and coordination before the completed finishes."
              }
            />
            <div className="mt-10 grid auto-rows-[260px] gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {galleryItems.map((item, index) => (
                <figure
                  key={item.image}
                  className={`group relative overflow-hidden rounded-2xl bg-[#e8e2d9] shadow-sm ${
                    index === 0 ? "sm:col-span-2 lg:row-span-2" : ""
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes={index === 0 ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 50vw"}
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/86 to-transparent px-5 pb-5 pt-16">
                    <figcaption className="text-sm leading-6 text-white/88">{item.caption}</figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {project.faqs?.length ? (
        <Section compact className="bg-[#faf7f1]">
          <Container>
            <div id="project-faq" className="grid scroll-mt-24 gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
              <SectionHeader
                eyebrow="Project FAQ"
                title={project.faqTitle ?? "Questions about this project and construction approach"}
                copy={
                  project.faqCopy ??
                  `Helpful planning context based on the scope documented in this ${project.location} project.`
                }
              />
              <div className="divide-y divide-[#ded7cc] border-y border-[#ded7cc]">
                {project.faqs.map((item) => (
                  <details key={item.question} className="group py-6">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-5 font-semibold text-[#161616]">
                      {item.question}
                      <span className="text-xl text-[#b86f12] transition group-open:rotate-45" aria-hidden="true">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 max-w-3xl leading-8 text-[#5d5a55]">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      ) : null}

      <Section compact>
        <Container>
          <div className="rounded-3xl border border-[#eee9e1] bg-white p-7 shadow-sm sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b86f12]">
                  {project.localEyebrow ?? `Serving ${project.location} and surrounding communities`}
                </p>
                <h2 className="mt-4 text-balance text-3xl font-semibold">
                  {project.localTitle ?? `Planning a construction or renovation project in ${project.location}?`}
                </h2>
                <p className="mt-5 max-w-3xl leading-8 text-[#5d5a55]">
                  {project.localCopy ??
                    "Request an estimate to review the property, intended scope, site conditions and practical next steps before construction begins."}
                </p>
                {project.relatedLinks?.length ? (
                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
                    {[...project.relatedLinks]
                      .sort((a, b) => a.label.localeCompare(b.label, "en", { sensitivity: "base" }))
                      .map((item) => (
                      <Link key={`${item.href}-${item.label}`} href={item.href} className="text-[#b86f12] hover:text-[#8f540a]">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
              <Button href={project.localHref ?? "/contact"} variant="secondary">
                {project.localLinkLabel ?? "Discuss Your Project"}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section compact className="bg-[#faf7f1]">
        <Container>
          <SectionHeader eyebrow="Related projects" title="More McAze renovation work" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {related.map((item) => (
              <ProjectCard key={item.slug} project={item} />
            ))}
          </div>
        </Container>
      </Section>

      <Cta
        title={project.ctaTitle ?? "Discuss your construction or renovation project"}
        copy={
          project.ctaCopy ??
          "Request a free estimate and tell us what you are planning. McAze will review the scope, site conditions and sequencing needed to move the work forward clearly."
        }
        buttonLabel={project.ctaLabel}
        image={project.image}
      />
    </>
  );
}
