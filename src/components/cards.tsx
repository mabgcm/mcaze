import Image from "next/image";
import Link from "next/link";
import type { City, Project, Service } from "@/lib/types";
import { getService } from "@/data/services";

export function ServiceCard({ service, image }: { service: Service; image?: string }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      aria-label={`View ${service.title} service`}
      className="group block rounded-2xl border border-[#eee9e1] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-xl bg-[#f7f3ed]">
        <Image src={image ?? service.image} alt="" fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover transition duration-300 group-hover:scale-105" />
      </div>
      <article>
        <h3 className="text-xl font-semibold text-[#161616]">{service.title}</h3>
        <p className="mt-3 leading-7 text-[#5d5a55]">{service.excerpt}</p>
        <span className="mt-5 inline-flex text-sm font-semibold text-[#b86f12]">View service</span>
      </article>
    </Link>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const service = getService(project.serviceSlug);

  return (
    <Link
      href={`/portfolio/${project.slug}`}
      aria-label={`View project: ${project.title}`}
      className="group block overflow-hidden rounded-2xl border border-[#eee9e1] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative aspect-[4/3] bg-[#f7f3ed]">
        <Image src={project.image} alt="" fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover transition duration-300 group-hover:scale-105" />
      </div>
      <article className="p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#b86f12]">Project Type</p>
        <p className="mt-2 text-sm font-semibold text-[#161616]">{service?.title ?? "Renovation"}</p>
        <h3 className="mt-2 text-xl font-semibold text-[#161616]">{project.title}</h3>
        <div className="mt-4 grid gap-1 text-sm">
          <span className="font-semibold text-[#161616]">Location</span>
          <span className="text-[#5d5a55]">{project.location}</span>
        </div>
        <p className="mt-4 text-sm font-semibold text-[#161616]">Brief Result</p>
        <p className="mt-2 leading-7 text-[#5d5a55]">{project.summary}</p>
        <span className="mt-5 inline-flex text-sm font-semibold text-[#b86f12]">View Project</span>
      </article>
    </Link>
  );
}

export function CityCard({ city }: { city: City }) {
  return (
    <Link href={`/service-areas/${city.slug}`} className="rounded-2xl border border-[#eee9e1] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-xl font-semibold text-[#161616]">{city.name}</h3>
      <p className="mt-3 leading-7 text-[#5d5a55]">{city.intro}</p>
      <p className="mt-5 font-semibold leading-7 text-[#161616]">
        Planning a renovation in {city.name}? McAze can help you review the scope before you commit.
      </p>
      <span className="mt-5 inline-flex text-sm font-semibold text-[#b86f12]">Renovations in {city.name}</span>
    </Link>
  );
}

export function FeatureCard({ title, copy }: { title: string; copy: string }) {
  return (
    <article className="rounded-2xl border border-[#eee9e1] bg-white p-7 shadow-sm">
      <FeatureIcon title={title} />
      <h3 className="text-xl font-semibold text-[#161616]">{title}</h3>
      <p className="mt-3 leading-7 text-[#5d5a55]">{copy}</p>
    </article>
  );
}

function FeatureIcon({ title }: { title: string }) {
  const normalizedTitle = title.toLowerCase();
  const hasSpecificIcon =
    normalizedTitle.includes("scope") ||
    normalizedTitle.includes("protected") ||
    normalizedTitle.includes("trade") ||
    normalizedTitle.includes("finish") ||
    normalizedTitle.includes("communication") ||
    normalizedTitle.includes("clean") ||
    normalizedTitle.includes("scheduling") ||
    normalizedTitle.includes("detail");

  return (
    <div className="mb-5 grid h-11 w-11 place-items-center rounded-full border border-[#F59D28]/35 bg-[#F59D28]/10 text-[#b86f12]" aria-hidden="true">
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
        {normalizedTitle.includes("scope") ? (
          <>
            <path d="M7 5h10" />
            <path d="M7 12h10" />
            <path d="M7 19h6" />
            <path d="M4 5h.01" />
            <path d="M4 12h.01" />
            <path d="M4 19h.01" />
          </>
        ) : null}
        {normalizedTitle.includes("protected") ? (
          <>
            <path d="M12 3 5 6v5c0 4.5 2.8 8.1 7 10 4.2-1.9 7-5.5 7-10V6l-7-3Z" />
            <path d="m9 12 2 2 4-4" />
          </>
        ) : null}
        {normalizedTitle.includes("trade") ? (
          <>
            <path d="M6 7h12" />
            <path d="M6 17h12" />
            <path d="M8 7v10" />
            <path d="M16 7v10" />
            <path d="M4 12h16" />
          </>
        ) : null}
        {normalizedTitle.includes("finish") ? (
          <>
            <path d="M5 19 19 5" />
            <path d="m14 5 5 5" />
            <path d="M5 19h5" />
            <path d="M5 14v5" />
          </>
        ) : null}
        {normalizedTitle.includes("communication") ? (
          <>
            <path d="M5 6h14v9H9l-4 3V6Z" />
            <path d="M8 10h8" />
            <path d="M8 13h5" />
          </>
        ) : null}
        {normalizedTitle.includes("clean") ? (
          <>
            <path d="M6 16c4-1 8-5 10-10l2 2c-5 2-9 6-10 10l-2-2Z" />
            <path d="M5 19h14" />
            <path d="M8 21h8" />
          </>
        ) : null}
        {normalizedTitle.includes("scheduling") ? (
          <>
            <path d="M7 3v3" />
            <path d="M17 3v3" />
            <path d="M4 8h16" />
            <path d="M5 5h14v15H5V5Z" />
            <path d="m9 14 2 2 4-5" />
          </>
        ) : null}
        {normalizedTitle.includes("detail") ? (
          <>
            <path d="M12 5v14" />
            <path d="M5 12h14" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
          </>
        ) : null}
        {!hasSpecificIcon ? (
          <>
            <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" />
            <path d="M8 12h8" />
            <path d="M12 8v8" />
          </>
        ) : null}
      </svg>
    </div>
  );
}
