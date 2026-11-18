export type GuideSection = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  link?: { href: string; label: string };
  video?: { src: string; poster: string; caption: string; duration: string };
};

export type TextSegment = { text: string; bold?: boolean };

export type ClosingSegment = { text: string } | { link: { label: string; href: string } };

export type BlogPostContent = {
  eyebrow: string;
  heroImageAlt: string;
  secondaryCta: { label: string; href: string };
  publishedLabel: string;
  disclaimer: string;
  shortAnswer: TextSegment[];
  costSection?: {
    eyebrow: string;
    title: string;
    intro: string;
    headers: [string, string, string];
    rows: [string, string, string][];
  };
  sections: GuideSection[];
  faqs: { question: string; answer: string }[];
  sidebarCta: { title: string; copy: string };
  closingSegments: ClosingSegment[];
  faqTitle: string;
  editorialNote: string;
  internalLinksTitle: string;
  internalLinks: { label: string; href: string }[];
  cta: { title: string; copy: string };
};

export const blogPostContent: Record<string, BlogPostContent> = {
  "bathroom-renovation-cost-vaughan-2027": {
    eyebrow: "2027 Vaughan Cost Guide",
    heroImageAlt: "Modern bathroom renovation in Vaughan",
    secondaryCta: { label: "Bathroom Renovation Service", href: "/services/bathroom-renovation" },
    publishedLabel: "October 4, 2026",
    disclaimer:
      "This is a 2027 planning guide, not a fixed-price menu. Figures are Canadian dollars. HST, design, permit fees and unusual concealed repairs may be additional unless included in the written scope.",
    shortAnswer: [
      { text: "A Vaughan powder-room refresh may start around " },
      { text: "$8,000–$15,000", bold: true },
      { text: ". A complete standard bathroom often falls around " },
      { text: "$18,000–$30,000", bold: true },
      { text: ", while a detailed mid-range renovation may reach " },
      { text: "$25,000–$45,000", bold: true },
      { text: ". Primary ensuites and major layout changes commonly begin around " },
      { text: "$45,000", bold: true },
      { text: " and can exceed " },
      { text: "$80,000", bold: true },
      { text: "." },
    ],
    costSection: {
      eyebrow: "2027 planning ranges",
      title: "Average bathroom renovation cost in Vaughan",
      intro:
        "Bathroom cost is driven more by scope and technical complexity than floor area alone. Even a compact room needs plumbing, electrical work, ventilation, waterproofing and several finishing trades. The ranges below assume professional construction, a written scope and normal residential access.",
      headers: ["Project level", "2027 range", "Typical scope"],
      rows: [
        ["Powder room or focused refresh", "$8,000–$15,000+", "Existing layout, standard fixtures and cosmetic updates"],
        ["Standard three-piece bathroom", "$18,000–$30,000+", "Full rebuild with dependable mid-range finishes"],
        ["Mid-range full bathroom", "$25,000–$45,000+", "New shower or tub, tile, vanity, lighting and coordinated trades"],
        ["Primary ensuite", "$45,000–$80,000+", "Larger footprint, custom shower, double vanity and detailed finishes"],
        ["Luxury or major layout change", "$80,000–$120,000+", "Premium products, custom work and extensive relocation"],
      ],
    },
    sections: [
      {
        id: "bathroom-type",
        eyebrow: "Room-by-room budgeting",
        title: "Bathroom renovation cost by bathroom type",
        paragraphs: [
          "A powder room avoids the bathtub, shower waterproofing and extensive wall tile found in a full bathroom. Work may include a vanity, toilet, faucet, mirror, lighting, flooring and paint. Keeping every fixture in its current position gives the budget the best chance of remaining near the lower end. Custom millwork, wall-mounted fixtures or premium surfaces can quickly raise the total.",
          "A standard three-piece family bathroom normally contains a toilet, vanity and tub-shower combination. A complete renovation involves controlled demolition, review of exposed conditions, plumbing and electrical coordination, wall preparation, waterproofing, tile, fixtures and finishing. Retaining the existing layout and choosing standard-size products generally produces the most predictable result.",
          "Primary ensuites cost more because they are usually larger and may include a custom shower, double vanity, freestanding tub, additional lighting, heated flooring or elaborate tile. Accessible bathrooms can also require careful floor, drainage and framing changes for a low-entry shower, grab-bar reinforcement, seating and suitable clearances. These decisions should be made before demolition so the related systems can be planned together.",
        ],
      },
      {
        id: "budget-breakdown",
        eyebrow: "What you are paying for",
        title: "Where does the bathroom renovation budget go?",
        paragraphs: [
          "Homeowners naturally notice tile, faucets and vanities, but much of a reliable renovation budget is spent on labour, coordination and work that disappears behind the finished surfaces. Protection and demolition, plumbing and electrical rough-ins, ventilation, waterproofing, substrate preparation, tile installation, cabinetry, fixtures, glass, painting and cleanup must happen in the correct sequence.",
          "A quote should also explain allowances. An allowance is an amount reserved until the actual product is selected; it is not automatically the final price. If tile, a vanity or plumbing fixtures cost more than the allowance, the contract value changes. Clear allowances let homeowners compare proposals and avoid discovering too late that the displayed products were never included.",
        ],
        bullets: [
          "Site protection, demolition and disposal",
          "Plumbing, electrical and ventilation",
          "Shower preparation and waterproofing",
          "Tile, grout and finishing details",
          "Vanity, countertop, fixtures and glass",
          "Project coordination, cleanup and walkthrough",
        ],
      },
      {
        id: "cost-factors",
        eyebrow: "Price drivers",
        title: "What changes the final bathroom renovation price?",
        paragraphs: [
          "Moving a toilet, shower, tub or vanity usually involves more than extending a visible water line. Drain slope, venting, joist direction, concrete slabs and access from below affect what is possible. A new layout may also require drawings, permits or inspections. Layout changes are worthwhile when they solve a genuine problem, but they should be priced as construction decisions rather than simple design preferences.",
          "Existing conditions matter just as much. Loose tile, swollen trim, staining, odour or a soft floor can indicate moisture beyond the visible surface. After demolition, the team may find damaged subfloor, framing, plumbing or incomplete waterproofing. The source must be corrected and unsuitable material repaired before new finishes conceal the area.",
          "Shower design and finish complexity are major variables. A tub surround and a curbless custom shower are different projects. Niches, benches, linear drains, mosaics, large-format tile and mitred corners add preparation and installation time. Tile and grout are not the waterproofing system; the full assembly must continue through corners, penetrations and the drain connection.",
          "Product quality, custom fabrication and site logistics also affect the total. Custom cabinetry, natural stone, imported fixtures and made-to-measure glass cost more and may carry longer lead times. In condominiums, elevator reservations, corridor protection, restricted work hours, water shutdowns and debris procedures add coordination that a detached home with direct access may not require.",
        ],
      },
      {
        id: "save",
        eyebrow: "Budget control",
        title: "How to reduce cost without cutting the wrong corners",
        paragraphs: [
          "The most effective savings usually come from simplifying scope, not hiding essential work. Keep plumbing in place where the existing layout functions well, confirm products before construction and use premium finishes where they create the most visible value. Standard-size fixtures and readily available materials can reduce both cost and delay.",
          "Do not sacrifice waterproofing, plumbing, electrical safety, ventilation or substrate preparation to afford a decorative upgrade. Avoid mid-project design changes that create return fees and rework. For many projects, a contingency of roughly 10 to 15 percent is a practical starting point; older homes or visible moisture concerns may justify a larger reserve.",
        ],
        bullets: [
          "Keep a functional layout",
          "Complete selections before demolition",
          "Use premium finishes selectively",
          "Choose standard sizes where practical",
          "Protect the budget for hidden technical work",
          "Maintain a realistic contingency",
        ],
      },
      {
        id: "permits",
        eyebrow: "Local requirements",
        title: "Do you need a permit for a bathroom renovation in Vaughan?",
        paragraphs: [
          "Permit requirements depend on what is changing. The City of Vaughan states that a building permit is required for an addition or alteration of plumbing fixtures, water services and sewer services. Its general guidance distinguishes regulated alterations from certain cosmetic work such as replacing cupboards and countertops. Electrical work is handled through the Electrical Safety Authority rather than the municipal building-permit process.",
          "Relocating fixtures, changing the plumbing system, altering structure, modifying ventilation or combining bathroom work with broader interior alterations can change the approval path. Condominium approval may also be required even when the municipal scope is limited. Define the work first, then confirm municipal, ESA and property-management requirements before construction begins.",
        ],
        link: {
          href: "https://www.vaughan.ca/residential/building-and-construction/building-permits/general-construction-permits/plumbing",
          label: "City of Vaughan plumbing permit guidance →",
        },
      },
      {
        id: "timeline",
        eyebrow: "Project schedule",
        title: "How long does a bathroom renovation take?",
        paragraphs: [
          "A cosmetic update may take roughly one to two weeks. A straightforward full bathroom renovation often needs approximately three to six weeks of active construction. A custom ensuite, major layout change or project involving inspections and concealed repairs can require six to ten weeks or longer.",
          "Construction time is only one part of the schedule. Planning, selections, permits, ordering and condominium approvals should happen before demolition. Custom glass is generally measured after tile is complete, and specialty products may carry long lead times. A realistic schedule identifies these dependencies instead of assuming every item will be available immediately.",
        ],
      },
      {
        id: "quotes",
        eyebrow: "Contractor selection",
        title: "How to compare bathroom renovation quotes",
        paragraphs: [
          "Two totals cannot be compared fairly unless their scopes are comparable. A lower number may omit demolition, disposal, waterproofing, plumbing, electrical work, glass, painting or permit coordination included in another proposal. It may also contain allowances too small to purchase the products used in the presentation.",
          "A useful quote identifies protection, demolition, repairs, licensed-trade responsibilities, waterproofing, fixtures, materials, allowances, exclusions, schedule assumptions, payment milestones and the change-order procedure. Ask who supplies each item, how concealed conditions are documented, what inspections are anticipated and how deficiencies are handled at the end.",
        ],
        bullets: [
          "Written and specific scope",
          "Clear allowances and exclusions",
          "Named plumbing and electrical responsibilities",
          "Waterproofing approach",
          "Permit and inspection responsibility",
          "Schedule and payment milestones",
          "Documented change procedure and warranty",
        ],
      },
      {
        id: "estimate",
        eyebrow: "Local planning",
        title: "Getting a bathroom renovation estimate in Vaughan",
        paragraphs: [
          "Online ranges help determine whether a project is financially realistic, but they cannot replace a review of the actual room. For a useful first conversation, provide the property location, bathroom type, approximate dimensions, photographs, desired layout changes, known moisture concerns, preferred finish level and ideal timing.",
          "McAze serves Vaughan and surrounding GTA communities with planning, trade coordination and complete bathroom renovation work. A site review turns broad online pricing into a property-specific written scope that identifies assumptions, selections, exclusions and practical next steps.",
        ],
      },
    ],
    faqs: [
      { question: "How much does a bathroom renovation cost in Vaughan in 2027?", answer: "A focused powder-room update may begin around $8,000 to $15,000. Complete standard bathrooms often require roughly $18,000 to $45,000, while larger primary ensuites and custom renovations commonly begin around $45,000 and can exceed $80,000." },
      { question: "Can a bathroom be fully renovated for $15,000?", answer: "Possibly, for a small and straightforward room with the existing layout, standard products and no major concealed damage. Extensive tile, custom showers, trade changes or premium fixtures normally require more." },
      { question: "What is the most expensive part?", answer: "Labour-intensive shower and tile work, plumbing changes, custom glass, cabinetry and concealed repairs are frequent cost drivers. Technical work behind the finishes can represent a substantial part of the budget." },
      { question: "Do I need a permit in Vaughan?", answer: "It depends on the scope. Vaughan requires permits for additions or alterations to plumbing fixtures, water and sewer services. Confirm the specific work with the City and use appropriate licensed trades." },
      { question: "How long does a full renovation take?", answer: "A straightforward full renovation often takes about three to six weeks of active construction after selections and materials are ready. Custom work, inspections and repairs can extend it." },
      { question: "Does McAze provide estimates in Vaughan?", answer: "Yes. McAze serves Vaughan and surrounding GTA communities. Photographs, dimensions, desired changes and a site review help create a useful written estimate." },
    ],
    sidebarCta: {
      title: "Planning a Vaughan bathroom?",
      copy: "A site-specific written estimate is more useful than a generic square-foot price.",
    },
    closingSegments: [
      { text: "Explore McAze " },
      { link: { label: "bathroom renovation services", href: "/services/bathroom-renovation" } },
      { text: ", our " },
      { link: { label: "Vaughan service area", href: "/service-areas/vaughan" } },
      { text: " and a documented " },
      { link: { label: "GTA bathroom project", href: "/portfolio/full-bathroom-renovation-gta" } },
      { text: "." },
    ],
    faqTitle: "Bathroom renovation cost FAQ",
    editorialNote:
      "Prepared by the McAze renovation team using project-planning experience and current Vaughan permit guidance. Pricing is an early 2027 planning range, not a quotation.",
    internalLinksTitle: "Continue planning your Vaughan renovation",
    internalLinks: [
      { label: "Bathroom renovation services", href: "/services/bathroom-renovation" },
      { label: "Home renovation services in Vaughan", href: "/service-areas/vaughan" },
      { label: "View a documented bathroom project", href: "/portfolio/full-bathroom-renovation-gta" },
    ],
    cta: {
      title: "Ready to price your Vaughan bathroom renovation?",
      copy: "Share the bathroom type, current condition, desired changes and preferred timing. McAze will review the scope and explain the next practical step toward a written estimate.",
    },
  },
  "basement-renovation-cost-toronto-2027": {
    eyebrow: "2027 Toronto Cost Guide",
    heroImageAlt: "Finished basement renovation in Toronto",
    secondaryCta: { label: "Basement Renovation Service", href: "/services/basement-renovation" },
    publishedLabel: "October 26, 2026",
    disclaimer:
      "This is a 2027 planning guide, not a fixed-price menu. Figures are Canadian dollars. HST, design, permit fees and unusual concealed repairs may be additional unless included in the written scope.",
    shortAnswer: [
      { text: "A basic Toronto basement finish may start around " },
      { text: "$35,000–$55,000", bold: true },
      { text: ". A family basement with a bathroom often falls around " },
      { text: "$55,000–$85,000", bold: true },
      { text: ", while a full finish with a bedroom and bathroom may reach " },
      { text: "$65,000–$100,000", bold: true },
      { text: ". A legal second suite commonly begins around " },
      { text: "$90,000", bold: true },
      { text: " and can exceed " },
      { text: "$150,000", bold: true },
      { text: "." },
    ],
    costSection: {
      eyebrow: "2027 planning ranges",
      title: "Average basement renovation cost in Toronto",
      intro:
        "Basement cost is driven more by moisture, ceiling height and code requirements than floor area alone. Even a compact lower level needs drainage review, framing, insulation, electrical work, ventilation and several finishing trades. The ranges below assume professional construction, a written scope and normal residential access.",
      headers: ["Project level", "2027 range", "Typical scope"],
      rows: [
        ["Basic finish (open rec room, no bathroom)", "$35,000–$55,000+", "Open living space, framing, insulation, drywall, flooring, lighting and paint"],
        ["Mid-range finish with bathroom", "$55,000–$85,000+", "Partitioned rooms, 3-piece bathroom, quality flooring and better lighting and trim"],
        ["Full finish with bedroom + bathroom", "$65,000–$100,000+", "Bedroom with egress window, full bathroom, storage and finished ceilings"],
        ["Legal second suite", "$90,000–$150,000+", "Separate entrance, full kitchen and bathroom, fire separation, alarms and permits"],
        ["Underpinning or benching (add-on)", "$50,000–$90,000+", "Engineered structural work to gain ceiling height; priced per project"],
      ],
    },
    sections: [
      {
        id: "budget-breakdown",
        eyebrow: "What you are paying for",
        title: "Where does the basement renovation budget go?",
        paragraphs: [
          "Homeowners naturally notice flooring and paint, but much of a reliable basement budget is spent on work that disappears behind the finished walls: moisture review, drainage, framing, insulation, electrical, plumbing, HVAC, drywall, ceilings, trim and cleanup. A bathroom adds plumbing, venting and fixtures; a bedroom adds an egress window; a suite adds fire separation, alarms and a separate entrance.",
          "A quote should also explain allowances. An allowance is an amount reserved until the actual product is selected; it is not automatically the final price. If flooring, fixtures or cabinetry cost more than the allowance, the contract value changes. Clear allowances let homeowners compare proposals and avoid discovering too late that the displayed products were never included.",
        ],
        bullets: [
          "Moisture review, drainage and waterproofing",
          "Framing, insulation and air sealing",
          "Electrical, plumbing and HVAC rough-ins",
          "Egress windows and separate entrances",
          "Drywall, ceilings, flooring and trim",
          "Project coordination, inspections, cleanup and walkthrough",
        ],
      },
      {
        id: "cost-factors",
        eyebrow: "Price drivers",
        title: "What changes the final basement renovation price?",
        paragraphs: [
          "Water is the first variable. Staining, efflorescence, musty odour or a damp floor can indicate drainage or foundation issues that must be corrected before finishes conceal them. Interior or exterior waterproofing, a sump pump or a backwater valve can add thousands, but finishing over an unresolved leak guarantees rework. Toronto's Basement Flooding Protection Subsidy Program can offset part of a backwater valve or sump pump.",
          "Ceiling height is the second variable. Many older Toronto basements sit below the roughly 1.95 m (6 ft 5 in) of clear height the Ontario Building Code requires for habitable space. Gaining height means bench footing, which is less invasive but gives up floor area, or underpinning, which keeps the footprint but is major structural work with an engineer and a permit — typically $50,000 to $90,000 before any finishing.",
          "Layout and plumbing decisions come next. Adding or moving a bathroom, laundry or wet bar involves drain slope, venting, concrete cutting and access from below. A bedroom needs an egress window, usually a new opening cut through a poured concrete foundation with a code-sized well — typically $3,000 to $8,500 per opening.",
          "Finish level and site logistics also affect the total. Custom built-ins, natural stone, imported fixtures and made-to-measure glass cost more and may carry longer lead times. Narrow side yards, townhome access and restricted work hours add coordination that a detached home with direct access may not require. Finishes are usually the smallest lever; technical work is where budgets move.",
        ],
      },
      {
        id: "save",
        eyebrow: "Budget control",
        title: "How to reduce cost without cutting the wrong corners",
        paragraphs: [
          "The most effective savings usually come from simplifying scope, not hiding essential work. Keep plumbing near existing drains where the layout functions well, confirm products before construction and use premium finishes where they create the most visible value. Standard sizes and readily available materials can reduce both cost and delay.",
          "Do not sacrifice waterproofing, drainage, electrical safety, ventilation, insulation or egress to afford a decorative upgrade. Avoid mid-project design changes that create return fees and rework. For many projects, a contingency of roughly 15 to 20 percent is a practical starting point; older homes or visible moisture concerns may justify a larger reserve.",
        ],
        bullets: [
          "Keep plumbing near existing drains",
          "Complete selections before demolition",
          "Use premium finishes selectively",
          "Choose standard sizes where practical",
          "Protect the budget for moisture and code work",
          "Maintain a realistic contingency",
        ],
      },
      {
        id: "permits",
        eyebrow: "Local requirements",
        title: "Do you need a permit to finish a basement in Toronto?",
        paragraphs: [
          "The City of Toronto states that finishing a basement may not require a building permit when there are no structural or material alterations, no additional dwelling unit and no new plumbing. A permit is generally required when the project adds or removes walls, creates rooms or a different use, changes windows or doors, installs new plumbing, makes structural alterations or creates another dwelling unit.",
          "A basement bathroom, new entrance, enlarged window, load-bearing change or secondary suite can introduce building, zoning, plumbing and other approval requirements. Electrical work follows the Electrical Safety Authority's notification and inspection process; a municipal building permit is not a substitute for electrical compliance. Permit fees for a typical basement often land around $1,000 to $1,500 plus $2,000 to $5,000 for required drawings, and approval commonly takes 2 to 8 weeks. Define the work first, then confirm municipal, ESA and property requirements before construction begins.",
        ],
        link: {
          href: "https://www.toronto.ca/services-payments/building-construction/building-permit/before-you-apply-for-a-building-permit/when-do-i-need-a-building-permit/",
          label: "City of Toronto permit guidance →",
        },
      },
      {
        id: "legal-suite",
        eyebrow: "Second suites",
        title: "What makes a basement apartment legal in Toronto?",
        paragraphs: [
          "A legal second suite must satisfy the Ontario Building Code and the Fire Code as a dwelling, not just look finished. The usual requirements include roughly 1.95 m (6 ft 5 in) of clear ceiling height over most of the suite, an egress window or a second exit from bedrooms, fire separation between the units, interconnected smoke and carbon monoxide alarms, ventilation and heating that do not move smoke between units, and a building permit with inspections.",
          "Toronto also requires the suite to comply with zoning and to be registered. An unpermitted apartment can cause trouble with insurance, a future sale and tenants, and can be ordered closed. Because a suite adds a kitchen, bathroom, entrance, fire separation and alarms, it is priced as a small apartment — commonly $90,000 to $150,000 or more — but it can also generate rental income and add appraised value.",
        ],
        link: {
          href: "https://www.toronto.ca/services-payments/building-construction/building-permit/before-you-apply-for-a-building-permit/building-permit-application-guides/additional-dwelling-unit-guides/secondary-suites/",
          label: "City of Toronto secondary-suite guide →",
        },
      },
      {
        id: "timeline",
        eyebrow: "Project schedule",
        title: "How long does a basement renovation take?",
        paragraphs: [
          "A straightforward open-plan finish often needs approximately 4 to 8 weeks of active construction. A basement with a bathroom, bedrooms or structural work commonly takes 8 to 12 weeks. A legal second suite often needs 3 to 5 months once permits are issued, and underpinning adds roughly 6 to 10 weeks.",
          "Construction time is only one part of the schedule. Planning, selections, drawings, permits, ordering and inspections should happen before demolition. Egress cutting, custom products and specialty materials may carry long lead times. A realistic schedule identifies these dependencies instead of assuming every item will be available immediately.",
        ],
      },
      {
        id: "quotes",
        eyebrow: "Contractor selection",
        title: "How to compare basement renovation quotes",
        paragraphs: [
          "Two totals cannot be compared fairly unless their scopes are comparable. A lower number may omit moisture work, drainage, permits, drawings, licensed trades, fire-safety work, egress windows or finish details included in another proposal. It may also contain allowances too small to purchase the products used in the presentation.",
          "A useful quote identifies moisture and drainage scope, protection, demolition, repairs, licensed-trade responsibilities, insulation, egress, fixtures, materials, allowances, exclusions, schedule assumptions, payment milestones and the change-order procedure. Ask who supplies each item, how concealed conditions are documented, what inspections are anticipated and how deficiencies are handled at the end.",
        ],
        bullets: [
          "Written and specific scope",
          "Moisture, drainage and waterproofing approach",
          "Clear allowances and exclusions",
          "Named plumbing and electrical responsibilities",
          "Egress, fire separation and alarm plan",
          "Permit and inspection responsibility",
          "Schedule and payment milestones",
          "Documented change procedure and warranty",
        ],
      },
      {
        id: "estimate",
        eyebrow: "Local planning",
        title: "Getting a basement renovation estimate in Toronto",
        paragraphs: [
          "Online ranges help determine whether a project is financially realistic, but they cannot replace a review of the actual basement. For a useful first conversation, provide the property location, approximate dimensions, ceiling height, photographs, signs of moisture, desired layout, bathroom or bedroom plans, known structural concerns and ideal timing.",
          "McAze serves Toronto and surrounding GTA communities with planning, trade coordination and complete basement renovation work. A site review turns broad online pricing into a property-specific written scope that identifies assumptions, selections, exclusions and practical next steps.",
        ],
      },
    ],
    faqs: [
      { question: "How much does a basement renovation cost in Toronto in 2027?", answer: "A basic finish may start around $35,000 to $55,000. A family basement with a bathroom often requires roughly $55,000 to $85,000, while a full finish with a bedroom and bathroom may reach $65,000 to $100,000. A legal second suite commonly begins around $90,000 and can exceed $150,000." },
      { question: "Can a basement be finished for $30,000?", answer: "Possibly, for a small, dry, open space with standard finishes and no bathroom, bedroom or structural work. Most family basements with a bathroom, partitions or moisture work normally require more." },
      { question: "What is the most expensive part of a basement renovation?", answer: "Moisture and drainage corrections, ceiling-height work such as underpinning, plumbing additions and legal-suite requirements (fire separation, egress, entrance) are frequent cost drivers. Technical work behind the finishes can represent a substantial part of the budget." },
      { question: "Do I need a permit to finish my basement in Toronto?", answer: "It depends on the scope. Toronto generally requires a permit when walls are added or removed, rooms or a different use are created, windows or doors change, new plumbing is installed, structure changes or a dwelling unit is created. Confirm the specific work with Toronto Building and use appropriate licensed trades." },
      { question: "What ceiling height is required for a finished basement?", answer: "The Ontario Building Code requires roughly 1.95 metres (6 ft 5 in) of clear height for habitable basement space. If the existing ceiling is lower, bench footing or underpinning may be needed before finishing." },
      { question: "Do basement bedrooms need an egress window?", answer: "Yes. The Ontario Building Code requires an egress window for a basement bedroom, with at least 0.35 square metres of unobstructed openable area and no dimension under 380 mm. A retrofit opening typically costs $3,000 to $8,500." },
      { question: "How long does a basement renovation take?", answer: "A straightforward finish often takes about 4 to 8 weeks of active construction after selections and materials are ready. Bathrooms, bedrooms, structural work and legal suites can extend it to several months." },
      { question: "Does McAze provide basement estimates in Toronto?", answer: "Yes. McAze serves Toronto and surrounding GTA communities. Photographs, dimensions, ceiling height, moisture notes and a site review help create a useful written estimate." },
    ],
    sidebarCta: {
      title: "Planning a Toronto basement?",
      copy: "A site-specific written estimate is more useful than a generic square-foot price.",
    },
    closingSegments: [
      { text: "Explore McAze " },
      { link: { label: "basement renovation services", href: "/services/basement-renovation" } },
      { text: ", our " },
      { link: { label: "Toronto service area", href: "/service-areas/toronto" } },
      { text: " and " },
      { link: { label: "renovation portfolio", href: "/portfolio" } },
      { text: "." },
    ],
    faqTitle: "Basement renovation cost FAQ",
    editorialNote:
      "Prepared by the McAze renovation team using project-planning experience and current Toronto permit guidance. Pricing is an early 2027 planning range, not a quotation.",
    internalLinksTitle: "Continue planning your Toronto basement renovation",
    internalLinks: [
      { label: "Basement renovation services", href: "/services/basement-renovation" },
      { label: "Home renovation services in Toronto", href: "/service-areas/toronto" },
      { label: "View renovation projects across the GTA", href: "/portfolio" },
    ],
    cta: {
      title: "Ready to price your Toronto basement renovation?",
      copy: "Share the basement size, ceiling height, moisture notes, desired rooms and preferred timing. McAze will review the scope and explain the next practical step toward a written estimate.",
    },
  },
  "hidden-water-leaks-repair-occupied-home": {
    eyebrow: "Water Damage Case Study",
    heroImageAlt: "Bathroom renovation after a hidden water leak repair",
    secondaryCta: { label: "Home Renovation Services", href: "/services" },
    publishedLabel: "November 16, 2026",
    disclaimer:
      "This case study describes one completed McAze project. Causes, repair methods and timelines vary by property. Concealed leaks should be investigated before finishes are replaced, and pricing depends on the damage and the agreed scope.",
    shortAnswer: [
      { text: "A cracked bathroom water-supply pipe, a concealed dishwasher supply leak, and construction debris blocking a drain caused lifting tiles, mould, and moisture under hardwood. McAze repaired all three problems and renovated the affected areas in about " },
      { text: "26–27 days", bold: true },
      { text: " — while the homeowner " },
      { text: "continued living in the house", bold: true },
      { text: "." },
    ],
    sections: [
      {
        id: "warning-signs",
        eyebrow: "The warning signs",
        title: "Hidden Leaks Do Not Have to Flood a Room",
        paragraphs: [
          "A water leak does not have to flood a room to cause significant damage. A small amount of water escaping behind a wall or beneath a floor can remain unnoticed for years.",
          "For one McAze Renovation customer, the warning signs appeared in several places: lifting bathroom tiles, mould behind finished surfaces, moisture beneath the living-room hardwood, and loose kitchen floor tiles.",
          "Our task was to find the sources, repair the leakage, and renovate the affected areas. Just as importantly, we needed to complete the work while the homeowner continued living in the house.",
          "The project took approximately 26–27 days, including investigation, repairs, removal of damaged materials, and renovation.",
        ],
      },
      {
        id: "what-was-happening",
        eyebrow: "The symptoms",
        title: "What Was Happening Inside the Home?",
        paragraphs: [
          "The homeowner was dealing with gradual water damage rather than a single major flooding event.",
          "Small, concealed leaks had allowed moisture to reach materials behind the bathroom tiles and beneath the flooring. Over time, the bathroom tiles began lifting, mould developed in concealed areas, and water reached beneath the living-room hardwood.",
          "The kitchen had its own problems. Floor tiles were loosening and rising, but the source of the moisture was not immediately visible.",
          "Although the symptoms appeared related, our investigation identified several separate issues that needed attention.",
        ],
      },
      {
        id: "bathroom-leak",
        eyebrow: "Source 1",
        title: "The Bathroom Leak: A Cracked Water-Supply Pipe",
        paragraphs: [
          "The bathroom leakage was traced to a cracked section of water-supply piping serving the bathroom, in the supply arrangement leading toward the shower tap.",
          "The leak was not coming from water spraying out of the showerhead. It was occurring within the concealed plumbing supply.",
          "Water had been escaping slowly from the crack and reaching the surrounding materials. Over time, the effects became visible in the bathroom finishes and extended into the living-room flooring area.",
          "We could identify the crack and address the leakage, but the original reason the pipe cracked was not confirmed. A manufacturing defect or another cause should not be assumed without supporting evidence.",
          "What mattered for the repair was locating the damaged pipe and stopping the water before rebuilding the affected areas.",
        ],
      },
      {
        id: "kitchen-leak",
        eyebrow: "Source 2",
        title: "The Kitchen Leak: A Concealed Dishwasher Supply Connection",
        paragraphs: [
          "In the kitchen, we found leakage at a connection supplying water to the dishwasher.",
          "The connection was in a concealed lower area around the appliance, making it difficult to spot during everyday use.",
          "Rather than creating an obvious puddle in the middle of the kitchen, water had been escaping out of sight and reaching the floor assembly. The kitchen tiles had gradually become loose and started lifting.",
          "This was another reason the investigation had to go beyond the visible surface. Replacing loose tiles would not have resolved an active leak beneath or behind the appliance.",
        ],
      },
      {
        id: "drain-blockage",
        eyebrow: "Separate discovery",
        title: "A Separate Discovery: Construction Debris in the Drain",
        paragraphs: [
          "During the kitchen investigation, we also discovered a blockage in the drainage serving the washing machine and dishwasher.",
          "The blockage contained remnants of construction materials, including pieces of drywall, apparently left from earlier renovation work.",
          "This was a separate issue from the leaking dishwasher supply connection. Both needed attention as part of resolving the kitchen's plumbing problems.",
          "The finding also highlighted a detail homeowners rarely see: materials left inside drainage can create problems long after renovation work appears complete.",
        ],
      },
      {
        id: "investigation",
        eyebrow: "Diagnosis",
        title: "Why the Investigation Took Several Days",
        paragraphs: [
          "Finding the causes took several days.",
          "There were multiple affected areas and more than one plumbing problem. We needed to distinguish the bathroom pipe leak, the concealed dishwasher supply leak, and the drainage blockage.",
          "The damaged tiles and flooring showed where moisture had caused problems. They did not immediately reveal every source.",
          "Taking time to investigate helped establish the repair sequence and the areas that needed to be opened. It also helped us avoid treating several different problems as though they came from one leak.",
        ],
      },
      {
        id: "repair-sequence",
        eyebrow: "Repair order",
        title: "Repairing the Causes Before Replacing the Finishes",
        paragraphs: [
          "Once the sources were identified, we addressed the leakage and drainage problems before proceeding with the main renovation. The homeowner needed the underlying problems resolved before investing in replacement tiles and flooring. The work followed a practical sequence:",
        ],
        bullets: [
          "Investigate the affected rooms and identify the sources.",
          "Repair the leaking plumbing and address the blocked drainage.",
          "Remove affected finishes and damaged materials.",
          "Repair and renovate the opened areas.",
          "Complete the finishing work with attention to the existing interior.",
        ],
      },
      {
        id: "occupied-home",
        eyebrow: "Living through renovation",
        title: "The Homeowner Stayed in the House Throughout the Renovation",
        paragraphs: [
          "One of the aspects the customer appreciated most was being able to remain at home during the work.",
          "They left in the morning and returned in the evening while our team carried out the renovation during the day. They did not have to move out for the project.",
          "Working inside an occupied home required care beyond the immediate repair areas. Furniture, belongings, and surrounding parts of the house needed protection while materials were removed and renovation work continued.",
          "We covered and screened off belongings and adjacent areas with protective plastic sheeting. Our team worked carefully around the homeowner's possessions, and no belongings were damaged during the project.",
          "For this customer, the way the work was carried out mattered alongside the finished result. They could continue their daily routine while their home was being repaired.",
          "Whether a homeowner can remain in place depends on the scope and conditions of each project. In this case, we were able to organise the work around continued occupancy.",
        ],
      },
      {
        id: "preserving-design",
        eyebrow: "Matching the existing interior",
        title: "Preserving Unaffected Materials and the Existing Design",
        paragraphs: [
          "The homeowner wanted to retain the existing appearance as much as possible.",
          "We therefore worked to preserve materials outside the water-affected areas wherever practical, while removing the damaged materials that required replacement.",
          "This distinction mattered. Repairing water damage did not mean automatically replacing every finish in every room.",
          "Matching the existing design was another priority. Tile collections and styles change, and finding a suitable match can become difficult years after an original installation.",
          "We made an effort to source tiles consistent with the existing design so the repaired areas would blend into the home. The aim was to minimise noticeable differences between the retained finishes and the renovated sections.",
          "The project combined essential repairs with respect for the interior the homeowner wanted to keep.",
        ],
      },
      {
        id: "timeline",
        eyebrow: "Duration",
        title: "How Long Did the Project Take?",
        paragraphs: [
          "The complete project took approximately 26–27 days—just under one month.",
          "That period included investigating the concealed problems, repairing the plumbing issues, removing damaged materials, and renovating the affected bathroom, living-room flooring area, and kitchen floor.",
          "It was not simply a tile replacement project. Several underlying issues had to be resolved, and the work had to be organised around a customer who continued living in the property.",
        ],
      },
      {
        id: "fair-pricing",
        eyebrow: "First-time customer",
        title: "Fair Pricing for a First-Time Customer",
        paragraphs: [
          "This was the homeowner's first project with McAze.",
          "We offered favourable first-time-client pricing to help make a project involving several affected areas more manageable.",
          "Our approach is to build lasting relationships through fair pricing, careful workmanship, and respect for the customer's home. We want clients to feel comfortable returning for future work and recommending us to people they know.",
          "Each estimate still depends on the property, the damage, and the agreed scope.",
        ],
      },
      {
        id: "testimonial-video",
        eyebrow: "Customer feedback",
        title: "A Customer Who Shared Their Experience on Video",
        paragraphs: [
          "After completion, the homeowner recorded and sent us a video describing their experience with McAze.",
          "They appreciated the clean, careful work and the way the renovation was handled while they remained in the house.",
          "Their feedback reflected more than the appearance of the repaired rooms. It also reflected the protection of their belongings, the care taken throughout the project, and the ability to continue living at home.",
        ],
        video: {
          src: "/images/af68fe20-70cd-41b1-83a5-e2d02f924a57.mp4",
          poster: "/images/site/testimonial-hidden-leaks-poster.webp",
          caption: "The homeowner describes the hidden leak repair and renovation, completed while they continued living in the house.",
          duration: "PT34S",
        },
      },
    ],
    faqs: [
      { question: "Can a small leak damage more than one room?", answer: "In this project, gradual bathroom leakage affected both the bathroom finishes and the living-room flooring area. The kitchen also had a separate concealed leak. When several rooms show damage, each area needs investigation rather than an assumption that one source explains everything." },
      { question: "Do lifting tiles always mean there is a water leak?", answer: "Lifting tiles alone do not establish the cause. In this home, concealed leakage was found during the investigation. The important step is understanding why the tiles are failing before deciding on the repair." },
      { question: "Does all the flooring have to be replaced?", answer: "The extent of replacement depends on the damage and the condition of the surrounding materials. Here, we worked to preserve unaffected materials wherever practical and renovate the areas that required repair." },
      { question: "Can replacement tiles match an older design?", answer: "Matching can be challenging because products and designs change. We worked to find tiles consistent with the existing interior, with the aim of making the repaired sections blend into the surrounding finishes." },
      { question: "Can I stay at home during water-damage renovation?", answer: "Our customer stayed in the house throughout this project. Whether that is practical for another home depends on the affected rooms, access, required work, and site conditions. It should be discussed when planning the renovation." },
    ],
    sidebarCta: {
      title: "Signs of a hidden leak?",
      copy: "Lifting tiles, loose flooring or moisture under hardwood? Tell us what you have noticed and we will discuss the next step.",
    },
    closingSegments: [
      { text: "If you are noticing lifting bathroom tiles, loose kitchen flooring, or signs of moisture beneath hardwood, " },
      { link: { label: "contact McAze", href: "/contact" } },
      { text: " to discuss the affected areas. Send us your location, photographs, and a brief description of what you have noticed. We can review the information and discuss the appropriate next step." },
    ],
    faqTitle: "Questions Homeowners Ask About Hidden Leaks and Renovation",
    editorialNote:
      "This case study is based on a completed McAze project. The causes described were specific to this home; similar symptoms can have different causes and should be investigated before repairs are planned.",
    internalLinksTitle: "Related McAze services",
    internalLinks: [
      { label: "Bathroom renovation services", href: "/services/bathroom-renovation" },
      { label: "Kitchen renovation services", href: "/services/kitchen-renovation" },
      { label: "Flooring services", href: "/services/flooring" },
    ],
    cta: {
      title: "Noticing lifting tiles or moisture under your floors?",
      copy: "Send us your location, photographs, and a brief description of what you have noticed. McAze will review the information and discuss the appropriate next step.",
    },
  },
};
