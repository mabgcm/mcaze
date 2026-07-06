import type { Service } from "@/lib/types";

const commonProcess = [
  "Site review and practical scope planning",
  "Clear proposal with schedule, allowances, and exclusions",
  "Permits, materials, and trade coordination where required",
  "Clean execution with progress updates and quality checks",
  "Final walkthrough, deficiencies, and care guidance",
];

const commonFaqs = [
  {
    question: "Do you provide written estimates?",
    answer:
      "Yes. McAze provides clear written estimates that define scope, assumptions, timelines, and exclusions before work begins.",
  },
  {
    question: "Can you work in occupied homes?",
    answer:
      "Yes. We plan dust control, access, protection, and daily cleanup around the realities of a lived-in home.",
  },
  {
    question: "Are permits included?",
    answer:
      "When a permit is needed, we identify it early and coordinate the correct path with the homeowner and municipality.",
  },
];

export const services: Service[] = [
  {
    slug: "kitchen-renovation",
    title: "Kitchen Renovation",
    shortTitle: "Kitchens",
    excerpt: "Thoughtfully planned kitchens built for daily use, storage, lighting, and long-term value.",
    description:
      "A kitchen renovation succeeds when layout, materials, trades, and timing are handled with discipline. McAze builds kitchens that feel calm, practical, and carefully finished, from demolition through cabinetry, surfaces, lighting, flooring, and final details.",
    image: "/placeholders/renovation-1.svg",
    benefits: ["Smarter layouts", "Durable finishes", "Coordinated trades", "Clean site protection"],
    process: commonProcess,
    faqs: commonFaqs,
    related: ["bathroom-renovation", "flooring", "electrical"],
  },
  {
    slug: "bathroom-renovation",
    title: "Bathroom Renovation",
    shortTitle: "Bathrooms",
    excerpt: "Clean, watertight bathroom renovations with careful waterproofing and refined finishes.",
    description:
      "Bathrooms demand precision. We focus on proper prep, ventilation, waterproofing, tile setting, fixture placement, and details that stand up to moisture and daily wear.",
    image: "/placeholders/renovation-2.svg",
    benefits: ["Waterproof assemblies", "Better ventilation", "Efficient layouts", "Polished tile work"],
    process: commonProcess,
    faqs: commonFaqs,
    related: ["drywall", "flooring", "electrical"],
  },
  {
    slug: "basement-renovation",
    title: "Basement Renovation",
    shortTitle: "Basements",
    excerpt: "Comfortable lower-level living spaces designed for family, rental, storage, or work.",
    description:
      "We convert unfinished or dated basements into usable living space with attention to insulation, lighting, ceiling heights, moisture considerations, and code-aware planning.",
    image: "/placeholders/renovation-3.svg",
    benefits: ["More living space", "Improved lighting", "Moisture-aware planning", "Code-conscious execution"],
    process: commonProcess,
    faqs: commonFaqs,
    related: ["drywall", "flooring", "painting"],
  },
  {
    slug: "painting",
    title: "Painting",
    shortTitle: "Painting",
    excerpt: "Interior and exterior painting with thorough preparation and a crisp finish.",
    description:
      "Good paint work starts before the first coat. McAze handles patching, sanding, priming, protection, and clean application for a finish that looks settled into the home.",
    image: "/placeholders/renovation-4.svg",
    benefits: ["Careful prep", "Clean lines", "Low disruption", "Interior and exterior work"],
    process: commonProcess,
    faqs: commonFaqs,
    related: ["drywall", "flooring", "kitchen-renovation"],
  },
  {
    slug: "drywall",
    title: "Drywall",
    shortTitle: "Drywall",
    excerpt: "Drywall installation, repair, taping, sanding, and finishing for renovation projects.",
    description:
      "From basement boards to patch repairs, we keep drywall work straight, smooth, and ready for paint. Proper boarding and finishing set the tone for every room that follows.",
    image: "/placeholders/renovation-5.svg",
    benefits: ["Smooth walls", "Reliable repairs", "Ready-for-paint finish", "Dust-conscious workflow"],
    process: commonProcess,
    faqs: commonFaqs,
    related: ["painting", "basement-renovation", "demolition"],
  },
  {
    slug: "flooring",
    title: "Flooring",
    shortTitle: "Flooring",
    excerpt: "Flooring installation and replacement with proper prep, transitions, and finishing.",
    description:
      "McAze installs flooring with a focus on substrate prep, layout, transitions, trims, and clean finishing so the result feels intentional from room to room.",
    image: "/placeholders/renovation-6.svg",
    benefits: ["Proper substrate prep", "Clean transitions", "Durable materials", "Consistent finish"],
    process: commonProcess,
    faqs: commonFaqs,
    related: ["kitchen-renovation", "basement-renovation", "painting"],
  },
  {
    slug: "deck-fence",
    title: "Deck & Fence",
    shortTitle: "Decks & Fences",
    excerpt: "Outdoor structures built with strong framing, clean lines, and weather-aware materials.",
    description:
      "We build and renew decks and fences with attention to layout, structure, drainage, fastening, and finishes suited to Canadian weather.",
    image: "/placeholders/renovation-7.svg",
    benefits: ["Solid framing", "Weather-ready details", "Better curb appeal", "Functional outdoor space"],
    process: commonProcess,
    faqs: commonFaqs,
    related: ["landscaping", "demolition", "painting"],
  },
  {
    slug: "landscaping",
    title: "Landscaping",
    shortTitle: "Landscaping",
    excerpt: "Landscape improvements that make exterior spaces cleaner, more usable, and easier to maintain.",
    description:
      "Our landscaping work focuses on practical exterior improvements, clean edges, usable surfaces, and details that support the home rather than overpower it.",
    image: "/placeholders/renovation-8.svg",
    benefits: ["Cleaner exterior spaces", "Improved access", "Seasonal planning", "Low-maintenance choices"],
    process: commonProcess,
    faqs: commonFaqs,
    related: ["deck-fence", "demolition", "snow-removal"],
  },
  {
    slug: "snow-removal",
    title: "Snow Removal",
    shortTitle: "Snow Removal",
    excerpt: "Dependable residential and light commercial snow clearing for winter access and safety.",
    description:
      "McAze provides seasonal snow removal support for driveways, walkways, and access areas, with responsive service during winter weather.",
    image: "/placeholders/renovation-9.svg",
    benefits: ["Safer access", "Reliable scheduling", "Residential support", "Winter-ready planning"],
    process: commonProcess,
    faqs: commonFaqs,
    related: ["landscaping", "deck-fence", "demolition"],
  },
  {
    slug: "demolition",
    title: "Demolition",
    shortTitle: "Demolition",
    excerpt: "Selective demolition with protection, cleanup, and respect for surrounding finishes.",
    description:
      "Renovation demolition should be controlled, not chaotic. We protect what stays, remove what must go, and prepare the space for the next trade.",
    image: "/placeholders/renovation-10.svg",
    benefits: ["Controlled removal", "Site protection", "Clean disposal", "Ready for rebuild"],
    process: commonProcess,
    faqs: commonFaqs,
    related: ["drywall", "basement-renovation", "kitchen-renovation"],
  },
  {
    slug: "electrical",
    title: "Electrical",
    shortTitle: "Electrical",
    excerpt: "Renovation electrical coordination for lighting, devices, upgrades, and fixture placement.",
    description:
      "Electrical details shape how a renovated space works. McAze coordinates electrical scope with licensed professionals where required, keeping placement, code, and finishes aligned.",
    image: "/placeholders/renovation-11.svg",
    benefits: ["Better lighting plans", "Code-aware coordination", "Fixture planning", "Clean finish integration"],
    process: commonProcess,
    faqs: commonFaqs,
    related: ["kitchen-renovation", "bathroom-renovation", "basement-renovation"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
