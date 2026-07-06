import type { City } from "@/lib/types";

export const cities: City[] = [
  {
    slug: "vaughan",
    name: "Vaughan",
    intro:
      "McAze supports Vaughan homeowners with kitchen renovations, bathroom updates, basement finishing, drywall, painting, flooring, and exterior improvements planned around real home conditions. We understand the mix of newer subdivisions, established family homes, townhomes, and custom properties across Vaughan. Our work focuses on practical scopes, tidy job sites, and finishes that suit daily life while improving long-term comfort and value.",
    neighborhoods: ["Maple", "Woodbridge", "Kleinburg", "Thornhill Woods"],
  },
  {
    slug: "markham",
    name: "Markham",
    intro:
      "Markham homes often need renovation planning that respects busy family schedules, finished living areas, and neighbourhood logistics. McAze helps with kitchens, bathrooms, basements, painting, flooring, drywall, decks, and general home improvements across townhomes, detached homes, and older properties. We focus on clear estimates, careful protection, and dependable coordination so the project feels organized from the first visit to the final walkthrough.",
    neighborhoods: ["Unionville", "Cornell", "Berczy Village", "Buttonville"],
  },
  {
    slug: "richmond-hill",
    name: "Richmond Hill",
    intro:
      "In Richmond Hill, McAze works with homeowners who want cleaner layouts, better finishes, and practical upgrades without losing control of the project. Our renovation services include bathrooms, kitchens, basement finishing, painting, drywall, flooring, and exterior work. We plan around access, material choices, trade timing, and household routines so the finished space feels polished, durable, and comfortable for everyday family life.",
    neighborhoods: ["Oak Ridges", "Bayview Hill", "Mill Pond", "Jefferson"],
  },
  {
    slug: "toronto",
    name: "Toronto",
    intro:
      "Toronto renovations require careful logistics, especially in older homes, narrow lots, condos, and busy neighbourhoods. McAze plans around access, parking, neighbours, material handling, protection, and the realities of renovating occupied spaces. From bathroom and kitchen updates to drywall, painting, flooring, and selective demolition, we keep the scope practical and the communication clear throughout the project.",
    neighborhoods: ["Midtown", "The Beaches", "Leslieville", "High Park"],
  },
  {
    slug: "north-york",
    name: "North York",
    intro:
      "North York homeowners rely on renovation planning that balances older building conditions, family routines, and modern finish expectations. McAze supports targeted updates and larger home renovations, including kitchens, bathrooms, basements, flooring, painting, drywall, and exterior improvements. We take time to define the scope, protect the home, and coordinate the work so each stage supports the next.",
    neighborhoods: ["Willowdale", "Bayview Village", "Don Mills", "York Mills"],
  },
  {
    slug: "mississauga",
    name: "Mississauga",
    intro:
      "Mississauga homes range from established detached properties to townhomes, condos, and rental spaces that need practical renovation support. McAze brings organized planning to kitchen renovations, bathroom updates, basement finishing, painting, flooring, drywall, decks, and general improvements. Homeowners choose us for clear scopes, steady communication, and workmanship that improves comfort without making the process harder than it needs to be.",
    neighborhoods: ["Port Credit", "Streetsville", "Erin Mills", "Cooksville"],
  },
];

export function getCity(slug: string) {
  return cities.find((city) => city.slug === slug);
}
