import type { Service } from "@/lib/types";
import { bathroomServiceContent } from "@/data/bathroom-service-content";
import { basementServiceContent } from "@/data/basement-service-content";
import { commercialServiceContent } from "@/data/commercial-service-content";
import { flooringServiceContent } from "@/data/flooring-service-content";
import { paintingServiceContent } from "@/data/painting-service-content";
import { exteriorPaintingServiceContent } from "@/data/exterior-painting-service-content";
import { drywallServiceContent } from "@/data/drywall-service-content";
import { demolitionServiceContent } from "@/data/demolition-service-content";
import { deckConstructionServiceContent } from "@/data/deck-construction-service-content";
import { fenceInstallationServiceContent } from "@/data/fence-installation-service-content";
import { landscapingServiceContent } from "@/data/landscaping-service-content";
import { generalContractingServiceContent } from "@/data/general-contracting-service-content";
import { homeAdditionsServiceContent } from "@/data/home-additions-service-content";
import { roofingServiceContent } from "@/data/roofing-service-content";
import { homeRenovationServiceContent } from "@/data/home-renovation-service-content";
import { kitchenServiceContent } from "@/data/kitchen-service-content";

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
    slug: "full-home-renovation",
    title: "Full Home Renovation",
    seoTitle: "Full Home Renovation Toronto & GTA | McAze",
    seoDescription:
      "Plan a full home renovation in Toronto with McAze. Learn about costs, permits, timelines, layout, structural work, trades, contracts and project handover.",
    shortTitle: "Home Renovation",
    excerpt:
      "A full home renovation coordinates layout, structure, building systems, kitchens, bathrooms and finishes through one organized plan. McAze manages suitable major residential renovations across Toronto and the GTA.",
    description:
      "McAze coordinates whole-home renovations from defined design and permits through construction, trade sequencing, quality control and documented handover.",
    image: "/images/site/homepage-hero-mcaze-team.webp",
    benefits: ["One coordinated plan", "Whole-home trade sequencing", "Clear change control", "Organized handover"],
    process: commonProcess,
    faqs: [
      { question: "Does McAze provide written full-home renovation estimates?", answer: "Yes. The proposal defines scope, allowances, exclusions, trade responsibilities, approvals, payment milestones and the change process." },
      { question: "Does a full renovation require permits?", answer: "Permit needs depend on the work. Structural, layout, plumbing and other material alterations commonly require approval, while some cosmetic work may not." },
      { question: "Can McAze coordinate designers and licensed trades?", answer: "Yes, when included in the scope. Appropriate qualified designers, engineers and licensed trades are coordinated for the work they are responsible for." },
      { question: "Can homeowners stay during construction?", answer: "Sometimes, but whole-home work often disrupts safe access and utilities. The occupancy and temporary-relocation plan is established before scheduling." },
      { question: "How are unexpected conditions handled?", answer: "The condition is documented, reviewed and addressed through an approved scope, price and schedule change before related work proceeds whenever practical." },
      { question: "Where does McAze renovate homes?", answer: "McAze serves Toronto and GTA communities including Vaughan, Markham, Richmond Hill, North York and Mississauga, subject to scope and availability." },
    ],
    related: ["general-contracting", "kitchen-renovation", "bathroom-renovation"],
    pageContent: homeRenovationServiceContent,
  },
  {
    slug: "kitchen-renovation",
    title: "Kitchen Renovation",
    seoTitle: "Kitchen Renovation Toronto & GTA | McAze",
    seoDescription:
      "Plan a kitchen renovation in Toronto or the GTA with McAze. Explore costs, timelines, permits, layouts, cabinets, counters, electrical work and our process.",
    shortTitle: "Kitchens",
    excerpt:
      "A kitchen renovation can involve layout changes, cabinetry coordination, counters, lighting, flooring, painting, and finishing details. McAze helps families create kitchens that work better for cooking, storage, and daily traffic. This service suits dated kitchens, awkward layouts, and homeowners who want a refined update without losing sight of budget, timing, and long-term value.",
    description:
      "A kitchen renovation succeeds when layout, materials, trades, and timing are handled with discipline. McAze builds kitchens that feel calm, practical, and carefully finished, from demolition through cabinetry, surfaces, lighting, flooring, and final details.",
    image: "/images/site/home-service-kitchen-mcaze.webp",
    benefits: ["Smarter layouts", "Durable finishes", "Coordinated trades", "Clean site protection"],
    process: commonProcess,
    faqs: [
      { question: "Does McAze provide written kitchen renovation estimates?", answer: "Yes. The proposal defines the intended scope, known trade work, allowances, exclusions, responsibilities and schedule assumptions for the property." },
      { question: "Can McAze change the kitchen layout?", answer: "Yes, where the structure, services, clearances, approvals and budget support the proposed layout. The practical options are reviewed before ordering." },
      { question: "Does a kitchen renovation require a permit?", answer: "Permit needs depend on the work. Structural or material alterations and certain plumbing or mechanical changes can require municipal approval; electrical work follows ESA requirements." },
      { question: "Can homeowners stay during a kitchen renovation?", answer: "Often yes, with a safe temporary food-preparation plan. Larger structural or main-floor projects may make temporary relocation more practical." },
      { question: "Does McAze renovate condo kitchens?", answer: "Yes, subject to the condominium corporation's approval, access, protection, work-hour and utility-shutdown requirements." },
      { question: "Where does McAze renovate kitchens?", answer: "McAze serves Toronto and GTA communities including Vaughan, Markham, Richmond Hill, North York and Mississauga, subject to scope and availability." },
    ],
    related: ["bathroom-renovation", "flooring", "general-contracting"],
    pageContent: kitchenServiceContent,
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
    title: "Interior Painting",
    seoTitle: "Interior Painting Toronto & GTA",
    seoDescription:
      "Plan professional interior painting in Toronto and the GTA with McAze. Learn about costs, preparation, primer, paint sheen, VOCs, timing and our process.",
    shortTitle: "Interior Painting",
    excerpt:
      "Professional painting starts with preparation: patching, sanding, priming, masking, clean application, and trim attention. We handle interior refreshes, exterior touchups, post-renovation painting, and pre-sale updates. Homeowners choose this service when they want rooms to feel finished, colours to look consistent, and the work to happen with less mess than a rushed DIY approach.",
    description:
      "McAze provides interior painting with careful protection, surface preparation, drywall repairs, priming, clean application and detailed final touchups.",
    image: "/images/site/home-service-painting-mcaze.webp",
    benefits: ["Careful prep", "Clean lines", "Low disruption", "Interior and exterior work"],
    process: commonProcess,
    faqs: [
      {
        question: "Does McAze provide a written interior painting estimate?",
        answer:
          "Yes. The estimate identifies included rooms and surfaces, preparation assumptions, primer, paint products, coat assumptions, protection, cleanup and exclusions.",
      },
      {
        question: "Can McAze repair drywall before painting?",
        answer:
          "Yes, when included in the agreed scope. Small holes, stable cracks and damaged areas can be prepared appropriately, while movement, moisture or extensive failure may require further assessment.",
      },
      {
        question: "Can you paint an occupied home?",
        answer:
          "Often yes. McAze plans room access, furniture, protection, ventilation, children, pets and daily cleanup so the household understands which areas remain available.",
      },
      {
        question: "Does McAze paint condominium interiors?",
        answer:
          "Yes, subject to the building's renovation rules, contractor requirements, work hours, parking, elevator bookings, protection and waste procedures.",
      },
      {
        question: "Do you paint ceilings, trim and doors?",
        answer:
          "These surfaces can be included in the written scope. Their condition, preparation, primer, product and sheen are reviewed separately from the walls.",
      },
      {
        question: "Where does McAze provide interior painting?",
        answer:
          "McAze serves Toronto and GTA communities including Vaughan, Markham, Richmond Hill, North York and Mississauga, subject to scope and availability.",
      },
    ],
    related: ["drywall", "flooring", "kitchen-renovation"],
    pageContent: paintingServiceContent,
  },
  {
    slug: "exterior-painting",
    title: "Exterior Painting",
    seoTitle: "Exterior Painting Toronto & GTA",
    seoDescription:
      "Plan exterior painting in Toronto and the GTA with McAze. Learn about costs, weather, preparation, wood, masonry, primer, heritage approval and our process.",
    shortTitle: "Exterior Painting",
    excerpt:
      "Exterior painting protects and renews approved wood, trim, doors, railings, stucco and other suitable surfaces. McAze plans preparation, repairs, access, primers and coatings around the property's condition and Toronto weather rather than treating the work as a simple colour change.",
    description:
      "McAze provides exterior painting with weather-aware scheduling, safe access planning, careful preparation, compatible primers and surface-specific finish coatings.",
    image: "/images/site/home-why-mcaze-teamwork.webp",
    benefits: ["Weather-aware planning", "Careful surface preparation", "Safe access review", "Clean property protection"],
    process: commonProcess,
    faqs: [
      {
        question: "Does McAze provide a written exterior painting estimate?",
        answer:
          "Yes. The estimate identifies included elevations and components, preparation, repair assumptions, primer, finish products, coat assumptions, access, protection and exclusions.",
      },
      {
        question: "Can McAze repair damaged exterior wood before painting?",
        answer:
          "Appropriate localized repairs can be included after inspection. Widespread rot, structural damage, active leakage or specialty restoration may require a separate scope or specialist assessment.",
      },
      {
        question: "Can exterior painting proceed if rain is forecast?",
        answer:
          "Only when the selected product, dry surface and forecast provide a suitable application and curing window. McAze pauses or reschedules coating when conditions are not appropriate.",
      },
      {
        question: "Does McAze paint brick?",
        answer:
          "Previously unpainted masonry is assessed carefully rather than automatically coated. Moisture behaviour, condition, reversibility and heritage requirements may make another approach or specialist advice more appropriate.",
      },
      {
        question: "Does exterior painting require heritage approval?",
        answer:
          "It can for designated properties or work affecting heritage attributes. Owners should confirm the property status and required City of Toronto approval before work starts.",
      },
      {
        question: "Where does McAze provide exterior painting?",
        answer:
          "McAze serves Toronto and GTA communities including Vaughan, Markham, Richmond Hill, North York and Mississauga, subject to scope, access and seasonal availability.",
      },
    ],
    related: ["painting", "deck-construction", "landscaping"],
    pageContent: exteriorPaintingServiceContent,
  },
  {
    slug: "drywall",
    title: "Drywall Installation & Repair",
    seoTitle: "Drywall Installation & Repair Toronto & GTA",
    seoDescription:
      "Plan drywall installation or repair in Toronto and the GTA with McAze. Learn about costs, patches, ceilings, water damage, finish levels, permits and dust control.",
    shortTitle: "Drywall",
    excerpt:
      "Drywall is the base layer for how a renovated room finally feels. McAze installs boards, repairs damage, tapes, muds, sands, patches ceilings, and prepares surfaces for paint. This service fits basements, layout changes, kitchens, bathrooms, and damaged walls where clean corners, smooth surfaces, and dust-conscious work make the next finish look better.",
    description:
      "From basement boards to patch repairs, we keep drywall work straight, smooth, and ready for paint. Proper boarding and finishing set the tone for every room that follows.",
    image: "/images/site/home-service-drywall-mcaze.webp",
    benefits: ["Smooth walls", "Reliable repairs", "Ready-for-paint finish", "Dust-conscious workflow"],
    process: commonProcess,
    faqs: [
      {
        question: "Does McAze provide written drywall estimates?",
        answer:
          "Yes. The estimate identifies the measured scope, installation or repair method, board type, finish expectation, protection, cleanup and whether primer or painting is included.",
      },
      {
        question: "Can McAze repair ceiling and wall holes?",
        answer:
          "Yes. McAze repairs suitable wall and ceiling openings after the surrounding material, support and reason for the damage have been reviewed.",
      },
      {
        question: "Can water-damaged drywall be replaced?",
        answer:
          "Yes, after the water source is corrected and the assembly is dry. Mould, extensive contamination or unresolved leakage may require specialized assessment before reconstruction.",
      },
      {
        question: "Is painting included with drywall repair?",
        answer:
          "It can be included. The written scope states whether the surface will be left sanded, primed or fully painted so the handoff is clear.",
      },
      {
        question: "Can McAze work in occupied homes and condos?",
        answer:
          "Yes. McAze plans barriers, floor protection, dust management, debris routes and daily cleanup around occupants and condominium requirements.",
      },
      {
        question: "Where does McAze provide drywall services?",
        answer:
          "McAze serves Toronto and GTA communities including Vaughan, Markham, Richmond Hill, North York and Mississauga, subject to project scope and availability.",
      },
    ],
    related: ["painting", "basement-renovation", "demolition"],
    pageContent: drywallServiceContent,
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
    slug: "deck-construction",
    title: "Deck Construction",
    seoTitle: "Deck Construction Toronto & GTA",
    seoDescription:
      "Plan deck construction in Toronto and the GTA with McAze. Learn about costs, permits, zoning, footings, framing, materials, stairs, guards and maintenance.",
    shortTitle: "Decks",
    excerpt:
      "Deck and fence projects improve privacy, safety, curb appeal, and how a backyard can actually be used. McAze handles repairs, replacement planning, framing coordination, boards, posts, gates, railings, staining, and weather-aware finishing. It is useful for aging wood structures, side yards, family outdoor areas, and homes that need a stronger exterior setup.",
    description:
      "We build and renew decks and fences with attention to layout, structure, drainage, fastening, and finishes suited to Canadian weather.",
    image: "/images/site/home-service-deck-fence-mcaze.webp",
    benefits: ["Solid framing", "Weather-ready details", "Better curb appeal", "Functional outdoor space"],
    process: commonProcess,
    faqs: [
      { question: "Does McAze provide written deck estimates?", answer: "Yes. The estimate identifies the design basis, materials, structural scope, stairs, guards, approvals, removal, disposal and exclusions." },
      { question: "Can McAze replace an existing deck?", answer: "Yes. The old structure is reviewed to determine whether controlled removal, full replacement or a clearly defined repair is appropriate." },
      { question: "Does a Toronto deck require a permit?", answer: "Many decks do, particularly elevated structures. Permit and zoning requirements are confirmed for the specific property before construction." },
      { question: "Does McAze build composite decks?", answer: "Yes, where an approved composite system suits the project. Framing, spacing, fasteners and movement details follow the selected manufacturer." },
      { question: "Can stairs and railings be included?", answer: "Yes. Approved stairs, landings, guards, handrails and related details can be included in the complete deck scope." },
      { question: "Where does McAze build decks?", answer: "McAze serves Toronto and GTA communities including Vaughan, Markham, Richmond Hill, North York and Mississauga, subject to scope and availability." },
    ],
    related: ["fence-installation", "landscaping", "painting"],
    pageContent: deckConstructionServiceContent,
  },
  {
    slug: "fence-installation",
    title: "Fence Installation",
    seoTitle: "Fence Installation Toronto & GTA",
    seoDescription:
      "Plan fence installation in Toronto and the GTA with McAze. Learn about costs, height bylaws, property lines, materials, posts, gates, pool fences and repairs.",
    shortTitle: "Fences",
    excerpt:
      "Fence installation improves privacy, safety and the way a yard is organized. McAze plans property-aware layouts, strong posts, practical gates and weather-ready materials for new fences and replacements across Toronto and the GTA.",
    description:
      "McAze installs and replaces residential fences with careful line planning, durable post foundations, reliable gates and details suited to Canadian weather.",
    image: "/images/site/home-service-deck-fence-mcaze.webp",
    benefits: ["Clear yard boundaries", "Stronger privacy", "Reliable gates", "Weather-ready details"],
    process: commonProcess,
    faqs: [
      { question: "Does McAze provide written fence estimates?", answer: "Yes. The estimate defines length, height, materials, posts, concrete, gates, removal, disposal, finishing and exclusions." },
      { question: "Does a Toronto fence need a permit?", answer: "Ordinary fences are governed by the Fence Bylaw, while pool enclosures require a specific zoning and permit process. Property-specific requirements are confirmed before work." },
      { question: "Who confirms the property line?", answer: "The property owner is responsible for confirming the legal line, normally using a current survey or appropriate professional advice where the boundary is uncertain." },
      { question: "Can McAze remove the old fence?", answer: "Yes, when included in the scope and after ownership, neighbour coordination, salvage items and access are confirmed." },
      { question: "Can gates be included?", answer: "Yes. Person gates, selected double gates and suitable exterior hardware can be planned with properly supported posts and clearances." },
      { question: "Where does McAze install fences?", answer: "McAze serves Toronto and GTA communities including Vaughan, Markham, Richmond Hill, North York and Mississauga, subject to scope and availability." },
    ],
    related: ["deck-construction", "landscaping", "exterior-painting"],
    pageContent: fenceInstallationServiceContent,
  },
  {
    slug: "landscaping",
    title: "Landscaping",
    seoTitle: "Landscaping Services Toronto & GTA",
    seoDescription:
      "Plan landscaping in Toronto and the GTA with McAze. Learn about costs, drainage, grading, interlock, plants, sod, tree permits and low-maintenance yards.",
    shortTitle: "Landscaping",
    excerpt:
      "Landscaping support focuses on practical exterior improvements rather than overbuilt features. Depending on the property, work may include cleanup, edging, grading awareness, planting coordination, walkways, surface repairs, and tidier outdoor circulation. Homeowners use this service for front entries, backyards, rental properties, and exterior spaces that need structure, safety, and easier maintenance.",
    description:
      "Our landscaping work focuses on practical exterior improvements, clean edges, usable surfaces, and details that support the home rather than overpower it.",
    image: "/images/site/home-service-landscaping-mcaze.webp",
    benefits: ["Cleaner exterior spaces", "Improved access", "Seasonal planning", "Low-maintenance choices"],
    process: commonProcess,
    faqs: [
      { question: "Does McAze provide written landscaping estimates?", answer: "Yes. The estimate identifies measured areas, removal, preparation, materials, plant sizes, disposal, restoration and exclusions." },
      { question: "Can landscaping improve yard drainage?", answer: "Suitable surface issues may be improved after the cause and lawful outlet are understood. Complex or permit-related drainage can require qualified design." },
      { question: "Does McAze install interlock and walkways?", answer: "McAze can install or repair appropriate walkway and surface scopes with attention to excavation, base preparation, edges, drainage and transitions." },
      { question: "Can McAze install sod and planting beds?", answer: "Yes. Soil preparation, sod, mulch and planting can be included with site-suited selections and clear establishment-care responsibilities." },
      { question: "Are tree permits included?", answer: "Protected-tree work requires the applicable City process and qualified arborist documentation. These requirements are identified and coordinated separately where needed." },
      { question: "Where does McAze provide landscaping?", answer: "McAze serves Toronto and GTA communities including Vaughan, Markham, Richmond Hill, North York and Mississauga, subject to scope and availability." },
    ],
    related: ["deck-construction", "fence-installation", "demolition"],
    pageContent: landscapingServiceContent,
  },
  {
    slug: "general-contracting",
    title: "General Contracting",
    seoTitle: "General Contractor Toronto & GTA | McAze",
    seoDescription:
      "Plan a Toronto renovation with McAze general contracting. Learn about costs, contracts, permits, trades, schedules, change orders, inspections and handover.",
    shortTitle: "General Contracting",
    excerpt:
      "General contracting brings design, permits, materials, trades, inspections and finishing into one organized construction sequence. McAze manages suitable residential and commercial renovations across Toronto and the GTA with written scopes and clear owner decisions.",
    description:
      "McAze coordinates multi-trade renovation projects from scope and approvals through construction, quality control and documented handover.",
    image: "/images/site/home-why-mcaze-team.webp",
    benefits: ["One coordinated plan", "Clear trade sequencing", "Documented changes", "Organized handover"],
    process: commonProcess,
    faqs: [
      { question: "Does McAze provide written general contracting estimates?", answer: "Yes. The proposal identifies the confirmed scope, allowances, exclusions, trade coordination, approvals, payment milestones and change process." },
      { question: "Can McAze coordinate permits?", answer: "Permit preparation and coordination can be included when stated in the contract, while the property owner remains responsible for ensuring required approvals are obtained." },
      { question: "Does McAze hire and schedule subcontractors?", answer: "Yes. McAze coordinates appropriate qualified trades, prerequisites, site access, inspections and handoffs within the confirmed project scope." },
      { question: "How are unexpected conditions handled?", answer: "The condition is documented, options are reviewed and any material price or schedule change is approved before related work continues whenever practical." },
      { question: "Can McAze manage occupied-home renovations?", answer: "Suitable projects can be phased around occupancy with defined protection, access and shutdown plans. Some scopes may require temporary relocation." },
      { question: "Where does McAze provide general contracting?", answer: "McAze serves Toronto and GTA communities including Vaughan, Markham, Richmond Hill, North York and Mississauga, subject to scope and availability." },
    ],
    related: ["full-home-renovation", "kitchen-renovation", "basement-renovation"],
    pageContent: generalContractingServiceContent,
  },
  {
    slug: "home-additions-custom-renovations",
    title: "Home Additions & Custom Renovations",
    seoTitle: "Home Additions Toronto & Custom Renovations | McAze",
    seoDescription:
      "Plan a Toronto home addition with McAze. Learn about costs, zoning, minor variances, permits, design, foundations, structure, timelines and custom renovations.",
    shortTitle: "Home Additions",
    excerpt:
      "Home additions and custom renovations create space by coordinating zoning, design, structure, building systems and finishes with the existing property. McAze manages suitable projects across Toronto and the GTA from buildable scope through handover.",
    description:
      "McAze coordinates carefully planned additions and custom renovations that connect approved design, durable construction and the everyday function of the existing home.",
    image: "/images/site/home-process-construction.webp",
    benefits: ["Feasibility-first planning", "Coordinated structure", "Integrated building systems", "Documented handover"],
    process: commonProcess,
    faqs: [
      { question: "Does every home addition require a permit?", answer: "Yes. Toronto additions require building permits and must satisfy zoning and other applicable law before approved construction proceeds." },
      { question: "Can McAze coordinate design and engineering?", answer: "Appropriate designers, engineers and other consultants can be coordinated when included in the scope. Professional design responsibility remains with the qualified provider." },
      { question: "Can McAze build a second-storey addition?", answer: "Suitable second-storey additions can be considered after zoning, foundation, structure, stairs, services and temporary weather protection are properly assessed." },
      { question: "Can homeowners stay during construction?", answer: "Sometimes, depending on safe access, utilities, weather exposure and project phasing. Major structural stages may require temporary relocation." },
      { question: "How are unexpected conditions handled?", answer: "Concealed conditions are documented, reviewed with the applicable designer where needed and addressed through an approved scope, price and schedule change." },
      { question: "Where does McAze build additions?", answer: "McAze serves Toronto and GTA communities including Vaughan, Markham, Richmond Hill, North York and Mississauga, subject to scope and availability." },
    ],
    related: ["general-contracting", "full-home-renovation", "demolition"],
    pageContent: homeAdditionsServiceContent,
  },
  {
    slug: "roofing-services",
    title: "Roofing Services",
    seoTitle: "Roofing Services Toronto & GTA | McAze",
    seoDescription:
      "Plan roof repair or replacement in Toronto with McAze. Learn about costs, leaks, shingles, ice dams, ventilation, decking, flashing, permits and warranties.",
    shortTitle: "Roofing",
    excerpt:
      "Roofing protects the full building through coordinated shingles or membranes, underlayment, flashing, ventilation and sound decking. McAze assesses suitable residential repair and replacement scopes across Toronto and the GTA.",
    description:
      "McAze plans suitable roof repairs and replacements around the complete water-shedding system, safe access, property protection and clear documentation.",
    image: "/images/site/hero-renovation.webp",
    benefits: ["Evidence-based assessment", "Complete roof-system scope", "Weather-aware scheduling", "Thorough cleanup"],
    process: commonProcess,
    faqs: [
      { question: "Does McAze provide written roofing estimates?", answer: "Yes. The proposal defines removal, materials, underlayment, flashing, ventilation, disposal, known repairs, concealed-condition pricing and exclusions." },
      { question: "Can McAze repair a roof leak?", answer: "Suitable localized leaks can be assessed and repaired when the source, surrounding roof condition and safe access support a durable scope." },
      { question: "Does shingle replacement require a Toronto permit?", answer: "Replacing existing roofing material generally does not require a permit when no structural work is involved. Structural or other regulated alterations require confirmation." },
      { question: "Will damaged roof decking be replaced?", answer: "Damaged sheathing can be replaced within the agreed method or unit pricing after tear-off exposes its actual condition. Structural framing issues require separate review." },
      { question: "Can roofing be completed in winter?", answer: "Some work can proceed when access, weather and manufacturer temperature requirements allow. Wet, icy or unsafe conditions can require delay or temporary protection." },
      { question: "Where does McAze provide roofing services?", answer: "McAze serves suitable residential roofing scopes in Toronto and GTA communities including Vaughan, Markham, Richmond Hill, North York and Mississauga." },
    ],
    related: ["exterior-painting", "home-additions-custom-renovations", "general-contracting"],
    pageContent: roofingServiceContent,
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
    related: ["landscaping", "deck-construction", "demolition"],
  },
  {
    slug: "demolition",
    title: "Demolition Services",
    seoTitle: "Selective Demolition Services Toronto & GTA",
    seoDescription:
      "Plan selective demolition in Toronto and the GTA with McAze. Learn about costs, permits, asbestos, structural walls, dust control, disposal and our process.",
    shortTitle: "Demolition",
    excerpt:
      "Selective demolition should prepare a space without creating unnecessary damage. McAze handles controlled removal, protection of nearby finishes, debris handling, and readiness for the next trade. It is commonly needed before kitchens, bathrooms, basements, flooring, drywall repairs, and layout adjustments where a careful start can prevent delays later.",
    description:
      "Renovation demolition should be controlled, not chaotic. We protect what stays, remove what must go, and prepare the space for the next trade.",
    image: "/images/site/home-service-demolition-mcaze.webp",
    benefits: ["Controlled removal", "Site protection", "Clean disposal", "Ready for rebuild"],
    process: commonProcess,
    faqs: [
      {
        question: "Does McAze provide written demolition estimates?",
        answer:
          "Yes. The estimate identifies what is removed and retained, protection, access, debris handling, cleanup, exclusions and the intended handoff for rebuilding.",
      },
      {
        question: "Does McAze remove load-bearing walls?",
        answer:
          "Structural removal proceeds only within an approved scope supported by the required drawings, engineering, permits, temporary support and inspections.",
      },
      {
        question: "Is asbestos testing included?",
        answer:
          "Testing and abatement are separate specialist services unless expressly included. Suspect materials must be assessed before ordinary demolition disturbs them.",
      },
      {
        question: "Can demolition happen in an occupied home?",
        answer:
          "Often yes for a suitable localized scope. McAze plans barriers, access, dust management, debris routes and daily cleanup around the household.",
      },
      {
        question: "Can items be saved for reuse or donation?",
        answer:
          "Potentially. Salvage items must be identified before work because careful removal, storage and transport require a different scope from disposal.",
      },
      {
        question: "Where does McAze provide demolition services?",
        answer:
          "McAze serves Toronto and GTA communities including Vaughan, Markham, Richmond Hill, North York and Mississauga, subject to scope and availability.",
      },
    ],
    related: ["drywall", "basement-renovation", "kitchen-renovation"],
    pageContent: demolitionServiceContent,
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
