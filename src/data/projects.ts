import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "vaughan-main-floor-renovation",
    title: "Main Floor Renovation",
    location: "Vaughan, ON",
    serviceSlug: "kitchen-renovation",
    summary:
      "A brighter main floor with improved circulation, updated kitchen finishes, new flooring, and coordinated painting.",
    scope: ["Kitchen refresh", "Flooring replacement", "Interior painting", "Lighting coordination"],
    year: "2026",
    image: "/images/site/portfolio-main-floor.webp",
    gallery: ["/images/site/portfolio-main-floor.webp", "/images/site/kitchen-renovation.webp", "/images/site/flooring.webp"],
  },
  {
    slug: "richmond-hill-basement-suite",
    title: "Finished Basement Suite",
    location: "Richmond Hill, ON",
    serviceSlug: "basement-renovation",
    summary:
      "A lower level planned for family use with drywall, flooring, lighting, storage, and a clean neutral finish.",
    scope: ["Framing coordination", "Drywall", "Flooring", "Painting"],
    year: "2026",
    image: "/images/site/portfolio-basement.webp",
    gallery: ["/images/site/portfolio-basement.webp", "/images/site/drywall.webp", "/images/site/painting.webp"],
  },
  {
    slug: "markham-bathroom-update",
    title: "Bathroom Update",
    location: "Markham, ON",
    serviceSlug: "bathroom-renovation",
    summary:
      "A compact bathroom renovation with improved storage, durable surfaces, updated fixtures, and a calm material palette.",
    scope: ["Demolition", "Waterproofing coordination", "Tile", "Fixture installation"],
    year: "2026",
    image: "/images/site/portfolio-bathroom.webp",
    gallery: ["/images/site/portfolio-bathroom.webp", "/images/site/bathroom-renovation.webp", "/images/site/portfolio-before-after.webp"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
