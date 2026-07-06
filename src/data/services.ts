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
    excerpt:
      "Kitchen renovation work includes layout improvements, cabinetry coordination, flooring, lighting, surfaces, painting, and final finishing. Homeowners choose McAze when they want a practical kitchen that looks refined, works better every day, and is managed with clear scheduling. It is ideal for families updating dated kitchens, improving storage, or preparing a home for long-term value.",
    description:
      "A kitchen renovation succeeds when layout, materials, trades, and timing are handled with discipline. McAze builds kitchens that feel calm, practical, and carefully finished, from demolition through cabinetry, surfaces, lighting, flooring, and final details.",
    image: "/images/site/kitchen-renovation.webp",
    benefits: ["Smarter layouts", "Durable finishes", "Coordinated trades", "Clean site protection"],
    process: commonProcess,
    faqs: commonFaqs,
    related: ["bathroom-renovation", "flooring", "electrical"],
  },
  {
    slug: "bathroom-renovation",
    title: "Bathroom Renovation",
    shortTitle: "Bathrooms",
    excerpt:
      "Bathroom renovations include demolition, waterproofing coordination, tile, fixture placement, ventilation planning, drywall repair, painting, and finish details. Homeowners choose this service for cleaner layouts, better moisture protection, and a bathroom that feels easier to maintain. It is suited for main bathrooms, ensuites, powder rooms, and older spaces that need a dependable refresh.",
    description:
      "Bathrooms demand precision. We focus on proper prep, ventilation, waterproofing, tile setting, fixture placement, and details that stand up to moisture and daily wear.",
    image: "/images/site/bathroom-renovation.webp",
    benefits: ["Waterproof assemblies", "Better ventilation", "Efficient layouts", "Polished tile work"],
    process: commonProcess,
    faqs: commonFaqs,
    related: ["drywall", "flooring", "electrical"],
  },
  {
    slug: "basement-renovation",
    title: "Basement Renovation",
    shortTitle: "Basements",
    excerpt:
      "Basement renovation and finishing can include framing coordination, insulation planning, drywall, flooring, lighting, painting, storage, and trim. Homeowners choose it to add comfortable living space without moving. It works well for family rooms, home offices, guest areas, playrooms, gyms, and lower levels that need better lighting, warmth, and everyday function.",
    description:
      "We convert unfinished or dated basements into usable living space with attention to insulation, lighting, ceiling heights, moisture considerations, and code-aware planning.",
    image: "/images/site/basement-renovation.webp",
    benefits: ["More living space", "Improved lighting", "Moisture-aware planning", "Code-conscious execution"],
    process: commonProcess,
    faqs: commonFaqs,
    related: ["drywall", "flooring", "painting"],
  },
  {
    slug: "painting",
    title: "Painting",
    shortTitle: "Painting",
    excerpt:
      "Painting services include surface preparation, patching, sanding, priming, clean application, trim work, and interior or exterior touchups. Homeowners choose professional painting when they want sharp lines, durable coverage, and less disruption than a rushed DIY job. It is useful after renovations, before listing a home, or when rooms need a cleaner finished look.",
    description:
      "Good paint work starts before the first coat. McAze handles patching, sanding, priming, protection, and clean application for a finish that looks settled into the home.",
    image: "/images/site/painting.webp",
    benefits: ["Careful prep", "Clean lines", "Low disruption", "Interior and exterior work"],
    process: commonProcess,
    faqs: commonFaqs,
    related: ["drywall", "flooring", "kitchen-renovation"],
  },
  {
    slug: "drywall",
    title: "Drywall",
    shortTitle: "Drywall",
    excerpt:
      "Drywall work includes board installation, repairs, taping, mudding, sanding, ceiling patches, and ready-for-paint finishing. Homeowners choose McAze because smooth walls and clean corners affect the quality of every room. This service fits basements, kitchens, bathrooms, damaged walls, layout changes, and renovation areas that need a straight, finished surface.",
    description:
      "From basement boards to patch repairs, we keep drywall work straight, smooth, and ready for paint. Proper boarding and finishing set the tone for every room that follows.",
    image: "/images/site/drywall.webp",
    benefits: ["Smooth walls", "Reliable repairs", "Ready-for-paint finish", "Dust-conscious workflow"],
    process: commonProcess,
    faqs: commonFaqs,
    related: ["painting", "basement-renovation", "demolition"],
  },
  {
    slug: "flooring",
    title: "Flooring",
    shortTitle: "Flooring",
    excerpt:
      "Flooring services include removal, subfloor review, layout planning, installation, transitions, trims, and finishing details. Homeowners choose flooring updates to improve comfort, durability, resale value, and the way rooms connect visually. It is a strong fit for main floors, basements, kitchens, rental units, and homes where worn surfaces make the space feel dated.",
    description:
      "McAze installs flooring with a focus on substrate prep, layout, transitions, trims, and clean finishing so the result feels intentional from room to room.",
    image: "/images/site/flooring.webp",
    benefits: ["Proper substrate prep", "Clean transitions", "Durable materials", "Consistent finish"],
    process: commonProcess,
    faqs: commonFaqs,
    related: ["kitchen-renovation", "basement-renovation", "painting"],
  },
  {
    slug: "deck-fence",
    title: "Deck & Fence",
    shortTitle: "Decks & Fences",
    excerpt:
      "Deck and fence work includes repairs, replacement, framing coordination, boards, posts, gates, railings, staining, and weather-aware finishing. Homeowners choose it to improve privacy, outdoor use, curb appeal, and safety. It is useful for backyards, side yards, aging wood structures, and homes that need stronger exterior spaces for family use.",
    description:
      "We build and renew decks and fences with attention to layout, structure, drainage, fastening, and finishes suited to Canadian weather.",
    image: "/images/site/deck-fence.webp",
    benefits: ["Solid framing", "Weather-ready details", "Better curb appeal", "Functional outdoor space"],
    process: commonProcess,
    faqs: commonFaqs,
    related: ["landscaping", "demolition", "painting"],
  },
  {
    slug: "landscaping",
    title: "Landscaping",
    shortTitle: "Landscaping",
    excerpt:
      "Landscaping improvements can include cleanup, edging, grading awareness, planting coordination, walkways, surface improvements, and practical exterior repairs. Homeowners choose this service to make outdoor areas cleaner, safer, and easier to maintain. It is suited for front entries, backyards, rental properties, and homes where the exterior needs structure without overcomplication.",
    description:
      "Our landscaping work focuses on practical exterior improvements, clean edges, usable surfaces, and details that support the home rather than overpower it.",
    image: "/images/site/landscaping.webp",
    benefits: ["Cleaner exterior spaces", "Improved access", "Seasonal planning", "Low-maintenance choices"],
    process: commonProcess,
    faqs: commonFaqs,
    related: ["deck-fence", "demolition", "snow-removal"],
  },
  {
    slug: "snow-removal",
    title: "Snow Removal",
    shortTitle: "Snow Removal",
    excerpt:
      "Snow removal supports winter access with clearing for driveways, walkways, entrances, and light commercial areas when conditions require it. Homeowners choose dependable service to reduce slip risks and keep daily routines moving. It is best for families, seniors, rental properties, and homeowners who want reliable winter support during heavier weather.",
    description:
      "McAze provides seasonal snow removal support for driveways, walkways, and access areas, with responsive service during winter weather.",
    image: "/images/site/snow-removal.webp",
    benefits: ["Safer access", "Reliable scheduling", "Residential support", "Winter-ready planning"],
    process: commonProcess,
    faqs: commonFaqs,
    related: ["landscaping", "deck-fence", "demolition"],
  },
  {
    slug: "demolition",
    title: "Demolition",
    shortTitle: "Demolition",
    excerpt:
      "Selective demolition includes controlled removal, protection of surrounding finishes, debris handling, and preparation for the next renovation stage. Homeowners choose controlled demolition because it reduces damage, dust, and delays. It is useful before kitchens, bathrooms, basements, flooring, drywall repairs, and layout changes where careful removal matters.",
    description:
      "Renovation demolition should be controlled, not chaotic. We protect what stays, remove what must go, and prepare the space for the next trade.",
    image: "/images/site/demolition.webp",
    benefits: ["Controlled removal", "Site protection", "Clean disposal", "Ready for rebuild"],
    process: commonProcess,
    faqs: commonFaqs,
    related: ["drywall", "basement-renovation", "kitchen-renovation"],
  },
  {
    slug: "electrical",
    title: "Electrical",
    shortTitle: "Electrical",
    excerpt:
      "Electrical renovation coordination includes lighting layouts, fixture placement, device planning, rough-in coordination, and finish alignment with licensed professionals where required. Homeowners choose it because electrical details affect comfort, safety, and how renovated spaces function. It fits kitchens, bathrooms, basements, offices, and older homes needing better lighting plans.",
    description:
      "Electrical details shape how a renovated space works. McAze coordinates electrical scope with licensed professionals where required, keeping placement, code, and finishes aligned.",
    image: "/images/site/electrical.webp",
    benefits: ["Better lighting plans", "Code-aware coordination", "Fixture planning", "Clean finish integration"],
    process: commonProcess,
    faqs: commonFaqs,
    related: ["kitchen-renovation", "bathroom-renovation", "basement-renovation"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
