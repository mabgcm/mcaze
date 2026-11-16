import type { BlogPost } from "@/lib/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "hidden-water-leaks-repair-occupied-home",
    title: "Hidden Water Leaks Behind Tiles and Under Hardwood: How McAze Repaired an Occupied Home",
    excerpt:
      "Lifting tiles, mould and moisture under hardwood pointed to hidden leaks. See how McAze found three separate problems and repaired an occupied home in 27 days.",
    category: "Renovation Planning",
    author: "McAze Team",
    publishedAt: "2026-11-16",
    updatedAt: "2026-11-16",
    readingTime: "7 min read",
    image: "/images/site/bathroom-renovation.webp",
    headings: [
      "Hidden leaks do not have to flood a room",
      "What was happening inside the home",
      "The bathroom leak: a cracked water-supply pipe",
      "The kitchen leak: a concealed dishwasher supply connection",
      "Construction debris in the drain",
      "Why the investigation took several days",
      "Repairing the causes before replacing the finishes",
      "Staying in the house during renovation",
      "Preserving materials and the existing design",
      "How long the project took",
      "Fair pricing for a first-time customer",
      "A customer who shared their experience on video",
      "Frequently asked questions",
    ],
  },
  {
    slug: "basement-renovation-cost-toronto-2027",
    title: "Basement Renovation Cost in Toronto: 2027 Price Guide",
    excerpt:
      "Planning a basement renovation in Toronto? Compare 2027 costs for a basic finish, a family basement with bathroom, and a legal second suite.",
    category: "Renovation Planning",
    author: "McAze Team",
    publishedAt: "2026-10-26",
    updatedAt: "2026-10-26",
    readingTime: "16 min read",
    image: "/images/site/basement-renovation.webp",
    headings: [
      "2027 Toronto basement renovation costs",
      "Basement renovation cost by project type",
      "Where the basement budget goes",
      "What changes the final price",
      "Permits and inspections",
      "Legal second suites",
      "Timelines",
      "How to compare quotes",
      "Frequently asked questions",
    ],
  },
  {
    slug: "bathroom-renovation-cost-vaughan-2027",
    title: "Bathroom Renovation Cost in Vaughan: 2027 Price Guide",
    excerpt:
      "Planning a bathroom renovation in Vaughan? Compare realistic 2027 budget ranges, see what changes the price, and learn how to evaluate contractor quotes.",
    category: "Renovation Planning",
    author: "McAze Team",
    publishedAt: "2026-10-04",
    updatedAt: "2026-10-04",
    readingTime: "14 min read",
    image: "/images/site/bathroom-renovation.webp",
    headings: [
      "2027 Vaughan bathroom renovation costs",
      "Cost by bathroom type",
      "Where the budget goes",
      "What changes the final price",
      "Permits and inspections",
      "Timelines",
      "How to compare quotes",
      "Frequently asked questions",
    ],
  },
];

export const blogCategories = [
  {
    slug: "renovation-planning",
    title: "Renovation Planning",
    description: "Guides for budgeting, scheduling, permits, and preparing for renovation work.",
  },
  {
    slug: "materials-finishes",
    title: "Materials & Finishes",
    description: "Practical notes on finishes, durability, maintenance, and product decisions.",
  },
  {
    slug: "home-maintenance",
    title: "Home Maintenance",
    description: "Seasonal and ongoing home care advice for Canadian homeowners.",
  },
];

export const authors = [
  {
    slug: "mcaze-team",
    name: "McAze Team",
    bio: "Renovation planning, project coordination, and home improvement notes from the McAze team.",
  },
];

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getCategory(slug: string) {
  return blogCategories.find((category) => category.slug === slug);
}

export function getAuthor(slug: string) {
  return authors.find((author) => author.slug === slug);
}
