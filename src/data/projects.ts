import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "vaughan-main-floor-renovation",
    title: "Complete Kitchen Remodel - Vaughan",
    location: "Vaughan, ON",
    serviceSlug: "kitchen-renovation",
    summary:
      "A Vaughan kitchen and main-floor update with improved circulation, updated finishes, new flooring, coordinated painting, and lighting details planned around daily family use.",
    scope: ["Kitchen refresh", "Flooring replacement", "Interior painting", "Lighting coordination"],
    year: "2026",
    image: "/images/site/portfolio-main-floor.webp",
    gallery: ["/images/site/portfolio-main-floor.webp", "/images/site/kitchen-renovation.webp", "/images/site/flooring.webp"],
  },
  {
    slug: "richmond-hill-basement-suite",
    title: "Basement Finishing - Markham",
    location: "Markham, ON",
    serviceSlug: "basement-renovation",
    summary:
      "A Markham basement finishing project planned for practical family space, with drywall, flooring, lighting coordination, storage, and a clean neutral finish.",
    scope: ["Framing coordination", "Drywall", "Flooring", "Painting"],
    year: "2026",
    image: "/images/site/portfolio-basement.webp",
    gallery: ["/images/site/portfolio-basement.webp", "/images/site/drywall.webp", "/images/site/painting.webp"],
  },
  {
    slug: "markham-bathroom-update",
    title: "Modern Bathroom Renovation - Richmond Hill",
    location: "Richmond Hill, ON",
    serviceSlug: "bathroom-renovation",
    summary:
      "A Richmond Hill bathroom renovation with improved storage, durable surfaces, updated fixtures, careful waterproofing coordination, and a calm material palette.",
    scope: ["Demolition", "Waterproofing coordination", "Tile", "Fixture installation"],
    year: "2026",
    image: "/images/site/portfolio-bathroom.webp",
    gallery: ["/images/site/portfolio-bathroom.webp", "/images/site/bathroom-renovation.webp", "/images/site/portfolio-before-after.webp"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
