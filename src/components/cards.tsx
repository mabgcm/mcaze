import Image from "next/image";
import Link from "next/link";
import type { City, Project, Service } from "@/lib/types";
import { getService } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/services/${service.slug}`} className="group block rounded-2xl border border-[#eee9e1] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-xl bg-[#f7f3ed]">
        <Image src={service.image} alt="" fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover transition duration-300 group-hover:scale-105" />
      </div>
      <h3 className="text-xl font-semibold text-[#161616]">{service.title}</h3>
      <p className="mt-3 leading-7 text-[#5d5a55]">{service.excerpt}</p>
      <span className="mt-5 inline-flex text-sm font-semibold text-[#b86f12]">View service</span>
    </Link>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const service = getService(project.serviceSlug);

  return (
    <Link href={`/portfolio/${project.slug}`} className="group block overflow-hidden rounded-2xl border border-[#eee9e1] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative aspect-[4/3] bg-[#f7f3ed]">
        <Image src={project.image} alt="" fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover transition duration-300 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <p className="text-sm font-semibold text-[#b86f12]">{service?.title ?? "Renovation"}</p>
        <h3 className="mt-2 text-xl font-semibold text-[#161616]">{project.title}</h3>
        <p className="mt-3 leading-7 text-[#5d5a55]">{project.location}</p>
      </div>
    </Link>
  );
}

export function CityCard({ city }: { city: City }) {
  return (
    <Link href={`/service-areas/${city.slug}`} className="rounded-2xl border border-[#eee9e1] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-xl font-semibold text-[#161616]">{city.name}</h3>
      <p className="mt-3 leading-7 text-[#5d5a55]">{city.intro}</p>
      <span className="mt-5 inline-flex text-sm font-semibold text-[#b86f12]">Renovations in {city.name}</span>
    </Link>
  );
}

export function FeatureCard({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="rounded-2xl border border-[#eee9e1] bg-white p-6 shadow-sm">
      <div className="mb-5 h-10 w-10 rounded-full bg-[#F59D28]/15" />
      <h3 className="text-xl font-semibold text-[#161616]">{title}</h3>
      <p className="mt-3 leading-7 text-[#5d5a55]">{copy}</p>
    </div>
  );
}
