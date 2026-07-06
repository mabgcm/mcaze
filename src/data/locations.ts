import type { City } from "@/lib/types";

export const cities: City[] = [
  {
    slug: "vaughan",
    name: "Vaughan",
    intro:
      "McAze helps Vaughan homeowners plan and complete renovations with clear communication, tidy job sites, and finishes that suit established and newer homes alike.",
    neighborhoods: ["Maple", "Woodbridge", "Kleinburg", "Thornhill Woods"],
  },
  {
    slug: "markham",
    name: "Markham",
    intro:
      "From townhomes to detached homes, our Markham renovation work is built around practical planning, careful protection, and dependable trade coordination.",
    neighborhoods: ["Unionville", "Cornell", "Berczy Village", "Buttonville"],
  },
  {
    slug: "richmond-hill",
    name: "Richmond Hill",
    intro:
      "McAze delivers renovation services in Richmond Hill with a focus on clean execution, durable materials, and spaces that support everyday family life.",
    neighborhoods: ["Oak Ridges", "Bayview Hill", "Mill Pond", "Jefferson"],
  },
  {
    slug: "toronto",
    name: "Toronto",
    intro:
      "Toronto renovations require careful logistics. We plan around access, neighbours, parking, material handling, and the realities of working in dense neighbourhoods.",
    neighborhoods: ["Midtown", "The Beaches", "Leslieville", "High Park"],
  },
  {
    slug: "north-york",
    name: "North York",
    intro:
      "We support North York homeowners with well-managed interior and exterior renovation work, from targeted updates to multi-room improvements.",
    neighborhoods: ["Willowdale", "Bayview Village", "Don Mills", "York Mills"],
  },
  {
    slug: "mississauga",
    name: "Mississauga",
    intro:
      "McAze brings organized renovation planning and polished workmanship to Mississauga homes, with service designed to keep projects moving smoothly.",
    neighborhoods: ["Port Credit", "Streetsville", "Erin Mills", "Cooksville"],
  },
];

export function getCity(slug: string) {
  return cities.find((city) => city.slug === slug);
}
