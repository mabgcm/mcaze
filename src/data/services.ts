import type { Service } from "@/lib/types";
import { bathroomServiceContent } from "@/data/bathroom-service-content";
import { basementServiceContent } from "@/data/basement-service-content";
import { commercialServiceContent } from "@/data/commercial-service-content";
import { flooringServiceContent } from "@/data/flooring-service-content";

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
      "A kitchen renovation can involve layout changes, cabinetry coordination, counters, lighting, flooring, painting, and finishing details. McAze helps families create kitchens that work better for cooking, storage, and daily traffic. This service suits dated kitchens, awkward layouts, and homeowners who want a refined update without losing sight of budget, timing, and long-term value.",
    description:
      "A kitchen renovation succeeds when layout, materials, trades, and timing are handled with discipline. McAze builds kitchens that feel calm, practical, and carefully finished, from demolition through cabinetry, surfaces, lighting, flooring, and final details.",
    image: "/images/site/home-service-kitchen-mcaze.webp",
    benefits: ["Smarter layouts", "Durable finishes", "Coordinated trades", "Clean site protection"],
    process: commonProcess,
    faqs: commonFaqs,
    related: ["bathroom-renovation", "flooring", "electrical"],
  },
  {
    slug: "bathroom-renovation",
    title: "Bathroom Renovation",
    seoTitle: "Bathroom Renovation Toronto & GTA",
    seoDescription:
      "Plan a full bathroom renovation in Toronto or the GTA with McAze. Explore costs, timelines, permits, waterproofing, tile, showers and the renovation process.",
    shortTitle: "Bathrooms",
    excerpt:
      "Bathroom work needs careful planning because small rooms carry plumbing, ventilation, tile, waterproofing, fixtures, and storage decisions. We renovate ensuites, powder rooms, family bathrooms, and older spaces that need better moisture control. Homeowners usually come to us for cleaner layouts, durable finishes, and a bathroom that feels easier to maintain every day.",
    description:
      "Bathrooms demand precision. We focus on proper prep, ventilation, waterproofing, tile setting, fixture placement, and details that stand up to moisture and daily wear.",
    image: "/images/site/home-service-bathroom-mcaze.webp",
    benefits: ["Waterproof assemblies", "Better ventilation", "Efficient layouts", "Polished tile work"],
    process: commonProcess,
    faqs: [
      {
        question: "Do you provide a written bathroom renovation estimate?",
        answer:
          "Yes. McAze prepares a written estimate based on the existing bathroom, intended scope, selections, allowances, access conditions and known trade requirements.",
      },
      {
        question: "Can McAze repair water damage during the renovation?",
        answer:
          "Yes, where the damage falls within the agreed scope. The source and extent are assessed after affected finishes are opened, and specialized assessment may be recommended for major structural or mould-related concerns.",
      },
      {
        question: "Can you renovate a bathroom in an occupied home?",
        answer:
          "Yes. McAze plans protection, controlled demolition, debris removal and daily cleanup. Homeowners should retain access to another bathroom or arrange an alternative where the property has only one.",
      },
      {
        question: "Do you renovate condominium bathrooms?",
        answer:
          "Yes, subject to the building's renovation rules. Owners should obtain the property-management requirements for insurance, work hours, elevator access, protection and water shutdowns before scheduling.",
      },
      {
        question: "Are bathroom renovation permits included?",
        answer:
          "Permit requirements depend on the work. McAze identifies likely coordination needs during scope planning, while the exact municipal, electrical and condominium requirements are confirmed for the property.",
      },
      {
        question: "Does McAze serve areas outside Toronto?",
        answer:
          "McAze provides bathroom renovation services across the Greater Toronto Area, including Vaughan, Markham, Richmond Hill, North York and Mississauga, subject to project scope and availability.",
      },
    ],
    related: ["drywall", "flooring", "electrical"],
    pageContent: bathroomServiceContent,
  },
  {
    slug: "basement-renovation",
    title: "Basement Renovation",
    seoTitle: "Basement Renovation Toronto & GTA",
    seoDescription:
      "Plan a basement renovation in Toronto or the GTA with McAze. Learn about costs, timelines, permits, legal suites, moisture, insulation, flooring and our process.",
    shortTitle: "Basements",
    excerpt:
      "Basement finishing turns underused lower levels into practical living space for work, guests, kids, fitness, storage, or family time. McAze plans framing coordination, insulation considerations, drywall, flooring, lighting, trim, and painting around the existing conditions. It is a strong option for homeowners who need more room but want to stay in the same home.",
    description:
      "We convert unfinished or dated basements into usable living space with attention to insulation, lighting, ceiling heights, moisture considerations, and code-aware planning.",
    image: "/images/site/home-service-basement-mcaze.webp",
    benefits: ["More living space", "Improved lighting", "Moisture-aware planning", "Code-conscious execution"],
    process: commonProcess,
    faqs: [
      {
        question: "Does McAze provide a written basement renovation estimate?",
        answer:
          "Yes. McAze prepares a written estimate based on the basement condition, intended use, plans, approvals, selections, allowances and known trade requirements.",
      },
      {
        question: "Can McAze finish an unfinished basement?",
        answer:
          "Yes. The scope can include framing, insulation, drywall, ceilings, flooring, lighting, trim and painting after moisture, mechanical, permit and trade requirements are reviewed.",
      },
      {
        question: "Can you add a bathroom to a basement?",
        answer:
          "A basement bathroom is possible in many homes. Drainage, venting, water supply, ceiling height, electrical work, ventilation and permit requirements must be assessed before the location and price are confirmed.",
      },
      {
        question: "Does McAze build legal basement apartments?",
        answer:
          "McAze can review and coordinate secondary-suite construction subject to the property, approved design, permits, zoning and required licensed-professional involvement.",
      },
      {
        question: "Should a basement be waterproofed before renovation?",
        answer:
          "Active leakage and known moisture problems should be resolved before new finishes conceal the foundation. The appropriate repair or flood-protection work depends on the source and may require a specialist.",
      },
      {
        question: "Does McAze renovate basements outside Toronto?",
        answer:
          "McAze provides basement renovation services across the GTA, including Vaughan, Markham, Richmond Hill, North York and Mississauga, subject to project scope and availability.",
      },
    ],
    related: ["drywall", "flooring", "painting"],
    pageContent: basementServiceContent,
  },
  {
    slug: "commercial-renovation",
    title: "Commercial Renovation",
    seoTitle: "Commercial Renovation Toronto & GTA",
    seoDescription:
      "Plan a commercial renovation, tenant improvement or fit-out in Toronto and the GTA with McAze. Explore costs, timelines, permits, leases and our process.",
    shortTitle: "Commercial",
    excerpt:
      "Commercial renovations need to support operations, approvals, customers, staff and the opening schedule. McAze coordinates offices, retail spaces, restaurants and other business properties around permits, landlord requirements, building systems, equipment and durable finishes.",
    description:
      "McAze plans commercial renovations and tenant improvements around the intended business use, property requirements, regulated trades, durable finishes and operational handover.",
    image:
      "/images/portfolio/woodbridge-fast-food-renovation/commercial-kitchen-equipment-installation-woodbridge.webp",
    benefits: [
      "Business-focused planning",
      "Permit and trade coordination",
      "Durable commercial finishes",
      "Operational handover",
    ],
    process: commonProcess,
    faqs: [
      {
        question: "Does McAze provide written commercial renovation estimates?",
        answer:
          "Yes. The estimate is based on the intended business use, site conditions, drawings, lease requirements, approvals, trade scope, selections, allowances and exclusions.",
      },
      {
        question: "Can McAze renovate an occupied commercial property?",
        answer:
          "Some projects can be phased or completed after hours. Safety, exits, dust, noise, utilities, property rules and the business operation must be reviewed before an occupied-work plan is confirmed.",
      },
      {
        question: "Does McAze complete restaurant fit-outs?",
        answer:
          "Yes, subject to scope and required specialists. McAze's Woodbridge project included insulated panels, kitchen equipment, exhaust-hood systems, refrigerated displays and cold-room installation.",
      },
      {
        question: "Are commercial renovation permits included?",
        answer:
          "Permit and design responsibilities are defined during scope planning. Requirements depend on the use, alterations and municipality, and may involve qualified designers, engineers and separate trade approvals.",
      },
      {
        question: "Can McAze work with landlord construction requirements?",
        answer:
          "Yes. The available lease requirements and building construction manual are reviewed so access, insurance, work hours, protection, shutdowns and submission obligations can be reflected in the plan.",
      },
      {
        question: "Where does McAze provide commercial renovation services?",
        answer:
          "McAze serves Toronto and GTA communities including Vaughan, Woodbridge, Mississauga, Markham, Richmond Hill and North York, subject to project type and availability.",
      },
    ],
    related: ["demolition", "drywall", "electrical"],
    pageContent: commercialServiceContent,
  },
  {
    slug: "painting",
    title: "Painting",
    shortTitle: "Painting",
    excerpt:
      "Professional painting starts with preparation: patching, sanding, priming, masking, clean application, and trim attention. We handle interior refreshes, exterior touchups, post-renovation painting, and pre-sale updates. Homeowners choose this service when they want rooms to feel finished, colours to look consistent, and the work to happen with less mess than a rushed DIY approach.",
    description:
      "Good paint work starts before the first coat. McAze handles patching, sanding, priming, protection, and clean application for a finish that looks settled into the home.",
    image: "/images/site/home-service-painting-mcaze.webp",
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
      "Drywall is the base layer for how a renovated room finally feels. McAze installs boards, repairs damage, tapes, muds, sands, patches ceilings, and prepares surfaces for paint. This service fits basements, layout changes, kitchens, bathrooms, and damaged walls where clean corners, smooth surfaces, and dust-conscious work make the next finish look better.",
    description:
      "From basement boards to patch repairs, we keep drywall work straight, smooth, and ready for paint. Proper boarding and finishing set the tone for every room that follows.",
    image: "/images/site/home-service-drywall-mcaze.webp",
    benefits: ["Smooth walls", "Reliable repairs", "Ready-for-paint finish", "Dust-conscious workflow"],
    process: commonProcess,
    faqs: commonFaqs,
    related: ["painting", "basement-renovation", "demolition"],
  },
  {
    slug: "flooring",
    title: "Flooring",
    seoTitle: "Flooring Installation Toronto & GTA",
    seoDescription:
      "Plan flooring installation in Toronto and the GTA with McAze. Compare hardwood, engineered wood, vinyl and laminate, plus costs, preparation and timelines.",
    shortTitle: "Flooring",
    excerpt:
      "New flooring can change how a home feels underfoot and how rooms connect visually. We review existing surfaces, removal needs, subfloor conditions, layout direction, transitions, trims, and installation details. It works well for main floors, basements, kitchens, rentals, and homes where worn materials are making otherwise good spaces feel tired.",
    description:
      "McAze installs flooring with a focus on substrate prep, layout, transitions, trims, and clean finishing so the result feels intentional from room to room.",
    image: "/images/site/home-service-flooring-mcaze.webp",
    benefits: ["Proper substrate prep", "Clean transitions", "Durable materials", "Consistent finish"],
    process: commonProcess,
    faqs: [
      {
        question: "Does McAze provide a written flooring installation estimate?",
        answer:
          "Yes. The estimate identifies the measured scope, selected product, removal, preparation assumptions, installation method, trims, transitions, allowances and exclusions.",
      },
      {
        question: "Can McAze remove the existing flooring?",
        answer:
          "Yes, when included in the agreed scope. Suspected hazardous materials or concealed conditions may require testing, specialist work or a separately approved change before removal continues.",
      },
      {
        question: "Can you repair or level the subfloor?",
        answer:
          "McAze can complete appropriate preparation within the confirmed scope. The exact work is often determined after the existing floor is removed and the substrate can be inspected.",
      },
      {
        question: "Does McAze install flooring in condominiums?",
        answer:
          "Yes, subject to the corporation's approval, acoustic requirements, work hours, elevator booking, protection rules and contractor documentation.",
      },
      {
        question: "Can flooring be installed in an occupied home?",
        answer:
          "Often yes. Rooms, furniture, access, pets, dust and product-specific curing requirements must be planned before the installation sequence is confirmed.",
      },
      {
        question: "Where does McAze install flooring?",
        answer:
          "McAze serves Toronto and GTA communities including Vaughan, Markham, Richmond Hill, North York and Mississauga, subject to scope and availability.",
      },
    ],
    related: ["kitchen-renovation", "basement-renovation", "painting"],
    pageContent: flooringServiceContent,
  },
  {
    slug: "deck-fence",
    title: "Deck & Fence",
    shortTitle: "Decks & Fences",
    excerpt:
      "Deck and fence projects improve privacy, safety, curb appeal, and how a backyard can actually be used. McAze handles repairs, replacement planning, framing coordination, boards, posts, gates, railings, staining, and weather-aware finishing. It is useful for aging wood structures, side yards, family outdoor areas, and homes that need a stronger exterior setup.",
    description:
      "We build and renew decks and fences with attention to layout, structure, drainage, fastening, and finishes suited to Canadian weather.",
    image: "/images/site/home-service-deck-fence-mcaze.webp",
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
      "Landscaping support focuses on practical exterior improvements rather than overbuilt features. Depending on the property, work may include cleanup, edging, grading awareness, planting coordination, walkways, surface repairs, and tidier outdoor circulation. Homeowners use this service for front entries, backyards, rental properties, and exterior spaces that need structure, safety, and easier maintenance.",
    description:
      "Our landscaping work focuses on practical exterior improvements, clean edges, usable surfaces, and details that support the home rather than overpower it.",
    image: "/images/site/home-service-landscaping-mcaze.webp",
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
      "Snow removal keeps driveways, walkways, entrances, and small commercial access points usable during winter weather. The service is designed for homeowners, seniors, families, rental properties, and businesses that need dependable clearing when conditions become difficult. It helps reduce slip concerns, protect routines, and keep the property accessible after heavier snowfall.",
    description:
      "McAze provides seasonal snow removal support for driveways, walkways, and access areas, with responsive service during winter weather.",
    image: "/images/site/home-service-snow-removal-mcaze.webp",
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
      "Selective demolition should prepare a space without creating unnecessary damage. McAze handles controlled removal, protection of nearby finishes, debris handling, and readiness for the next trade. It is commonly needed before kitchens, bathrooms, basements, flooring, drywall repairs, and layout adjustments where a careful start can prevent delays later.",
    description:
      "Renovation demolition should be controlled, not chaotic. We protect what stays, remove what must go, and prepare the space for the next trade.",
    image: "/images/site/home-service-demolition-mcaze.webp",
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
      "Electrical planning affects how comfortable and useful a renovated space becomes. McAze coordinates lighting layouts, fixture placement, switch and device planning, rough-in timing, and finish alignment with licensed professionals where required. It is important for kitchens, bathrooms, basements, offices, additions, and older homes that need safer, better-positioned lighting.",
    description:
      "Electrical details shape how a renovated space works. McAze coordinates electrical scope with licensed professionals where required, keeping placement, code, and finishes aligned.",
    image: "/images/site/home-service-electrical-mcaze.webp",
    benefits: ["Better lighting plans", "Code-aware coordination", "Fixture planning", "Clean finish integration"],
    process: commonProcess,
    faqs: commonFaqs,
    related: ["kitchen-renovation", "bathroom-renovation", "basement-renovation"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
