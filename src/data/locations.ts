import type { City } from "@/lib/types";

export const cities: City[] = [
  {
    slug: "barrie",
    name: "Barrie",
    intro:
      "Barrie construction and renovation projects range from established in-town homes to new residential properties on larger wooded or sloped sites. McAze supports homeowners and builders with organized site preparation, foundation and structural coordination, interior renovation work, drywall, painting, flooring, and exterior improvements. We plan access, material movement, changing grades, weather exposure, and trade sequencing early so each completed stage gives the next crew a reliable starting point.",
    neighborhoods: ["South Barrie", "Ardagh", "Holly", "Painswick"],
  },
  {
    slug: "vaughan",
    name: "Vaughan",
    intro:
      "Vaughan renovation projects often range from newer subdivision homes that need personalization to established properties ready for larger updates. McAze works with homeowners planning kitchens, bathrooms, basements, drywall, painting, flooring, and exterior improvements across family homes, townhomes, and custom properties. We focus on practical scopes, clear scheduling, and tidy job sites so the finished space feels upgraded without making the renovation harder than it needs to be.",
    neighborhoods: ["Maple", "Woodbridge", "Kleinburg", "Thornhill Woods"],
  },
  {
    slug: "markham",
    name: "Markham",
    intro:
      "In Markham, many renovations happen in busy homes where family routines, parking, neighbours, and finished living areas all matter. McAze helps plan kitchen renovations, bathroom updates, basement finishing, painting, flooring, drywall, decks, and general improvements for detached homes, townhomes, and older properties. Our approach is straightforward: define the scope early, protect the home carefully, and keep homeowners informed before decisions become urgent.",
    neighborhoods: ["Unionville", "Cornell", "Berczy Village", "Buttonville"],
  },
  {
    slug: "richmond-hill",
    name: "Richmond Hill",
    intro:
      "Richmond Hill homeowners often want renovations that feel polished but still practical for everyday family life. McAze supports bathroom renovations, kitchen remodeling, basement finishing, drywall, painting, flooring, and exterior work with careful attention to access, materials, timing, and cleanup. Whether the goal is a cleaner layout, better storage, or a more durable finish, we keep the planning grounded in how the home is actually used.",
    neighborhoods: ["Oak Ridges", "Bayview Hill", "Mill Pond", "Jefferson"],
  },
  {
    slug: "toronto",
    name: "Toronto",
    intro:
      "Toronto renovation work usually comes with extra logistics: older home conditions, tight access, condo rules, parking limits, neighbours, and material handling. McAze plans those details before the work starts, especially for occupied homes where daily life continues around the project. We handle kitchen and bathroom updates, drywall, painting, flooring, selective demolition, and finishing work with clear communication and realistic sequencing.",
    neighborhoods: ["Midtown", "The Beaches", "Leslieville", "High Park"],
  },
  {
    slug: "north-york",
    name: "North York",
    intro:
      "North York includes many home styles, from older detached houses and bungalows to condos and newer family properties. McAze helps homeowners make targeted updates or larger improvements involving kitchens, bathrooms, basements, flooring, painting, drywall, and exterior work. We pay attention to existing conditions, protection, and trade order so each stage supports the next instead of creating avoidable rework.",
    neighborhoods: ["Willowdale", "Bayview Village", "Don Mills", "York Mills"],
  },
  {
    slug: "mississauga",
    name: "Mississauga",
    intro:
      "Mississauga properties can vary widely, from established detached homes and townhouses to condos, rental units, and light commercial spaces. McAze brings organized planning to kitchen renovations, bathroom updates, basement finishing, painting, flooring, drywall, decks, and general improvements. The work is built around clear expectations, practical material choices, and steady communication so the project improves comfort without adding unnecessary complexity.",
    neighborhoods: ["Port Credit", "Streetsville", "Erin Mills", "Cooksville"],
  },
];

export function getCity(slug: string) {
  return cities.find((city) => city.slug === slug);
}
