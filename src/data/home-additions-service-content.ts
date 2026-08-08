import type { Service } from "@/lib/types";

export const homeAdditionsServiceContent: NonNullable<Service["pageContent"]> = {
  heroEyebrow: "Home Additions & Custom Renovations in Toronto",
  heroCopy:
    "McAze coordinates carefully planned additions and custom renovations that connect new space to the existing home through clear design, approvals, structure, building systems and finish details.",
  secondaryCta: { label: "Explore General Contracting", href: "/services/general-contracting" },
  introQuestion: "What should you know before planning a home addition?",
  intro: [
    "A home addition is not simply another room attached to a house. The project changes zoning measurements, foundations, structure, drainage, insulation, heating and cooling, electrical demand, interior circulation and the way old and new finishes meet. Early feasibility work is therefore more important than choosing finishes.",
    "McAze supports suitable rear, side and upper-storey additions and custom whole-home renovations across Toronto and the Greater Toronto Area. Work is developed around approved design and a coordinated construction scope. Architects, designers, engineers, surveyors and licensed trades are involved where the property and approvals require them.",
    "This guide answers common homeowner questions about cost, zoning, minor variances, building permits, drawings, timelines, foundations, structural connections, mechanical systems, living through construction, neighbours, development charges and selecting an addition contractor.",
  ],
  questions: [
    {
      eyebrow: "Feasibility",
      question: "Can you build an addition on any Toronto house?",
      paragraphs: [
        "No. A property must be reviewed for zoning, lot dimensions, existing building location, setbacks, permitted height and floor area, access, trees, grading, utilities and the condition of the existing house. Easements, heritage status and ravine or conservation restrictions can also affect a proposal.",
        "A concept that fits physically may still exceed a zoning limit or create a difficult structural and servicing problem. A current survey and measured information help the design team test options before detailed drawings or construction pricing.",
        "McAze begins with buildability rather than promising a size from photographs. The appropriate designer and consultants confirm what can be approved and how the addition should connect to the property.",
      ],
      sourceLink: {
        label: "Review how Toronto zoning regulates additions",
        href: "https://www.toronto.ca/city-government/planning-development/zoning-by-law-preliminary-zoning-reviews/zoning-in-toronto/",
      },
    },
    {
      eyebrow: "Budget planning",
      question: "How much does a home addition cost in Toronto?",
      paragraphs: [
        "Cost depends on size, storeys, excavation, soil, structure, exterior envelope, new openings, mechanical upgrades, interior finishes and access. Design, surveys, engineering, permits, temporary protection, demolition and restoration also belong in the budget even though they are not part of the finished room.",
        "A simple square-foot figure can be misleading. Kitchens and bathrooms cost more per area than open living space, while underpinning, major steel, utility relocation, restricted access or extensive renovation of the existing house can change the total substantially.",
        "McAze builds pricing from the approved design and defined assumptions. Early budgets use ranges and allowances; a construction proposal becomes more reliable as drawings, specifications and site information are completed.",
      ],
      bullets: [
        "Survey, design, engineering and approvals",
        "Excavation, foundations and drainage",
        "Structure and connection to the house",
        "Roofing, windows and exterior finishes",
        "Electrical, plumbing and HVAC changes",
        "Interior finishes and existing-home restoration",
        "Access, disposal, protection and temporary services",
      ],
    },
    {
      eyebrow: "Zoning approval",
      question: "What happens if a proposed addition does not comply with zoning?",
      paragraphs: [
        "The design may be revised to comply, or the owner may seek planning relief when appropriate. Toronto's Committee of Adjustment considers minor variances for issues such as setbacks, height, lot coverage or other zoning standards; approval is not automatic.",
        "A proper zoning review identifies the exact variances. The Committee process includes a public record and can involve neighbours, City staff, conditions and appeal periods, so it should be reflected in the project schedule before permit drawings are treated as final.",
        "McAze does not start regulated addition work on the assumption that a variance will be granted later. Planning and design professionals establish the approval path first.",
      ],
      sourceLink: {
        label: "Learn about Toronto's Committee of Adjustment",
        href: "https://www.toronto.ca/city-government/planning-development/committee-of-adjustment/",
      },
    },
    {
      eyebrow: "Building permit",
      question: "Does a home addition require a building permit in Toronto?",
      paragraphs: [
        "Yes. Toronto provides a dedicated permit process for additions to detached, semi-detached and townhouse properties. The application must address applicable zoning and law as well as Building Code design.",
        "Required submissions can include site information, plans, elevations, sections, structural details, energy information and forms prepared by qualified designers. Other reviews may apply for trees, grading, plumbing, utilities or site-specific conditions.",
        "McAze builds from the issued permit documents and coordinates inspection stages. Construction changes that affect approved work are reviewed before implementation rather than left for the final inspection.",
      ],
      sourceLink: {
        label: "Review Toronto's small residential addition permit guide",
        href: "https://www.toronto.ca/services-payments/building-construction/building-permit/before-you-apply-for-a-building-permit/building-permit-application-guides/renovation-and-new-house-guides/small-residential-additions/",
      },
    },
    {
      eyebrow: "Design team",
      question: "Do you need an architect or engineer for a home addition?",
      paragraphs: [
        "The required professionals depend on the building, size and design. A qualified designer or architect can coordinate code, zoning and permit drawings, while an engineer commonly designs structural foundations, beams, posts, openings and connections.",
        "Surveyors, arborists, grading consultants, mechanical designers or energy advisers may also be needed. Their information should be integrated rather than produced as unrelated documents after construction decisions are made.",
        "McAze reviews constructability with the design team and prices the same documents submitted for approval. Professional design responsibility remains with the qualified person who prepares and seals the applicable work.",
      ],
    },
    {
      eyebrow: "Addition type",
      question: "Is a rear addition or second-storey addition better?",
      paragraphs: [
        "A rear addition may offer straightforward circulation and fewer disruptions to the existing roof, but it uses yard area and can affect setbacks, trees and drainage. A second-storey addition preserves more ground area but requires careful review of the existing foundation, walls, roof removal, stairs and temporary weather protection.",
        "Side additions can improve width or access where zoning permits them. The best direction depends on the lot, existing structure and the rooms being created—not only on apparent available space.",
        "McAze compares the construction consequences of the approved options so the owner understands what must be altered in the original house as well as what will be newly built.",
      ],
    },
    {
      eyebrow: "Foundation and soil",
      question: "What foundation does a home addition need?",
      paragraphs: [
        "The foundation is designed for soil, loads, frost, groundwater, drainage and the intended use of the new space. Options may include a full basement, crawlspace, frost-protected foundation or other engineered system appropriate to the design.",
        "Excavation near the existing house must protect the original footing and utilities. Unknown fill, weak soil, high water or a desired basement connection can change the solution after investigation.",
        "McAze follows the approved structural design and inspection sequence. Concrete, reinforcement, waterproofing, drainage and backfill are treated as coordinated stages rather than concealed items to be simplified in the field.",
      ],
    },
    {
      eyebrow: "Old and new structure",
      question: "How is a new addition connected to an existing house?",
      paragraphs: [
        "The connection must transfer loads while controlling water, air leakage, heat loss and movement. New openings may need temporary support and engineered beams, posts or foundations. Roof and wall intersections require continuous flashing and envelope details.",
        "Existing houses are rarely perfectly level or square. The drawings establish critical elevations, but selective opening may be needed to confirm framing direction, hidden services and previous alterations before final fabrication.",
        "McAze coordinates structural work with exterior enclosure and interior finish transitions. A sound connection is more important than forcing every new line to follow an irregular existing surface without correction.",
      ],
    },
    {
      eyebrow: "Building envelope",
      question: "How do you prevent leaks and drafts where an addition meets the house?",
      paragraphs: [
        "Water, air and thermal layers must remain continuous across the joint. Roof flashing, wall membranes, windows, doors, insulation, vapour control and penetrations are detailed as a system rather than separate products.",
        "Snow, wind-driven rain and freeze-thaw conditions make low roof intersections and complex valleys especially sensitive. Exterior cladding should have suitable clearances and drainage paths, and temporary protection is needed while the original wall or roof is open.",
        "McAze sequences enclosure work to make the addition weather-resistant before vulnerable interior finishes proceed. Manufacturer and approved design requirements guide each transition.",
      ],
    },
    {
      eyebrow: "Mechanical capacity",
      question: "Can the existing HVAC, electrical and plumbing systems support an addition?",
      paragraphs: [
        "They must be assessed. Added floor area, fixtures and appliances can exceed the capacity or practical layout of existing systems. Duct routes, panel capacity, water service, drains and ventilation may require upgrades or redesign.",
        "A larger furnace is not automatically the solution; heat-loss calculations, zoning, return air and distribution matter. Electrical and plumbing work must follow the applicable licensed and inspection requirements.",
        "McAze coordinates system decisions before framing closes. Rough-in locations are checked against structure, cabinets and finish layouts so one trade does not block another.",
      ],
    },
    {
      eyebrow: "Project schedule",
      question: "How long does it take to design and build a home addition?",
      paragraphs: [
        "The complete timeline includes feasibility, design, zoning review, possible variance, permit review, procurement and construction. Approvals can take longer than the visible building work, especially when revisions or Committee of Adjustment proceedings are required.",
        "Construction duration depends on excavation, structure, weather, inspections, material lead times and the amount of renovation inside the existing house. Windows, structural steel, cabinetry and utility work often influence critical dates.",
        "McAze separates pre-construction milestones from site construction and updates the working sequence as approvals and selections are confirmed. A realistic plan includes contingency for weather and concealed conditions.",
      ],
    },
    {
      eyebrow: "Living arrangements",
      question: "Can you live in your house during an addition?",
      paragraphs: [
        "Sometimes. A rear addition may allow the original house to remain partially separated for part of the project, while a second-storey addition or major custom renovation can expose the home to weather and disrupt stairs, utilities and safe exits.",
        "Noise, dust, security, temporary heat, bathrooms, kitchen access, pets and children must be considered. Staying can also slow work when protection must be repeatedly installed and removed.",
        "McAze defines the likely occupancy phases before work. Owners should plan alternative accommodation for periods when the building cannot safely or practically function as a home.",
      ],
    },
    {
      eyebrow: "Neighbours and access",
      question: "How does a home addition affect neighbours and site access?",
      paragraphs: [
        "Deliveries, bins, excavation equipment, scaffolding and temporary protection need space. Narrow side yards, shared driveways and closely spaced homes can restrict equipment and require more manual handling.",
        "Construction must respect property boundaries, permitted hours, safe pedestrian access and approved tree or grading conditions. Party-wall or access questions may require professional or legal agreements rather than informal assumptions.",
        "McAze establishes material routes, protection and disruptive stages before mobilization. Clear notice helps neighbours prepare, but it does not replace required permissions.",
      ],
    },
    {
      eyebrow: "Trees and drainage",
      question: "How are trees and drainage handled around a home addition?",
      paragraphs: [
        "Excavation can injure roots, while added roof and paving areas change runoff. Protected trees may require arborist documentation and approved protection zones before equipment reaches the site.",
        "Final grades must direct water appropriately without trapping it at the new foundation or creating problems for adjacent properties. Downspouts, foundation drainage, swales and hard surfaces are coordinated with the site plan.",
        "McAze follows approved tree, grading and drainage information. Major or unclear site conditions are resolved by the appropriate consultant rather than improvised during excavation.",
      ],
    },
    {
      eyebrow: "Fees and charges",
      question: "Are there extra municipal fees for a Toronto home addition?",
      paragraphs: [
        "Permit, planning and consultant fees should be budgeted separately from construction. A minor variance has its own application fee, and other reviews or deposits may apply depending on the property.",
        "Toronto explains that development charges can apply to certain development or redevelopment, while the enlargement of an existing dwelling unit is listed among legislative exemptions. Adding units or changing use can produce a different analysis, and the owner must demonstrate eligibility for an exemption.",
        "McAze identifies known approval allowances, but municipal fees and legal eligibility are confirmed by the City and project professionals before the construction budget is finalized.",
      ],
      sourceLink: {
        label: "Review Toronto's development charge overview",
        href: "https://www.toronto.ca/city-government/budget-finances/city-finance/development-charges/development-charges-overview/",
      },
    },
    {
      eyebrow: "Custom renovation",
      question: "When is a custom renovation better than building an addition?",
      paragraphs: [
        "A poorly arranged house may gain enough function through a better layout, storage, openings and mechanical improvements without adding floor area. Reworking underused rooms can avoid some foundation and exterior costs.",
        "An addition becomes more compelling when the required rooms cannot fit within the existing envelope or when circulation, daylight and connection to the yard need fundamental change. Often the best project combines a focused addition with selective renovation rather than rebuilding every room.",
        "McAze helps compare construction scope and disruption after the design team tests the space. The goal is useful area, not maximum area without regard to budget and daily function.",
      ],
    },
    {
      eyebrow: "Contractor selection",
      question: "How do you choose a home addition contractor in Toronto?",
      paragraphs: [
        "Look for experience coordinating permits, structure, exterior enclosure, licensed trades and work inside occupied or existing homes. The proposal should reference drawings, identify exclusions and explain allowances, changes, inspections and site supervision.",
        "Ask how weather protection, neighbour access, temporary utilities and concealed conditions will be handled. Confirm insurance and who is responsible for consultants, permits, long-lead products and final documentation.",
        "McAze connects pre-construction decisions with a buildable sequence. Owners receive one coordinated scope rather than separate trade prices with no responsibility for the gaps between them.",
      ],
      bullets: [
        "Is the estimate tied to approved drawings?",
        "Are design and permit responsibilities clear?",
        "How are structure and weather protection managed?",
        "Who coordinates licensed trades and inspections?",
        "How are changes and concealed conditions approved?",
        "What is included at final handover?",
      ],
    },
    {
      eyebrow: "McAze workflow",
      question: "How does the McAze home addition process work?",
      paragraphs: [
        "The process begins with goals, property information, an existing survey if available, budget and timing. The design and consultant team tests zoning, structure, services and site constraints before construction commitments are made.",
        "Approved drawings and selections support a written construction proposal and working schedule. Site protection, excavation, foundation, structure, enclosure, rough-ins, inspections and finishes then follow a coordinated sequence.",
        "Owners receive progress updates and approve documented changes. The project concludes with testing, cleanup, deficiency review, inspection follow-up and appropriate warranty and maintenance information.",
      ],
      bullets: [
        "Property and feasibility review",
        "Design, zoning and consultant coordination",
        "Permit and construction planning",
        "Written scope, selections and schedule",
        "Foundation, structure and enclosure",
        "Rough-ins, inspections and finishes",
        "Walkthrough and documented handover",
      ],
    },
    {
      eyebrow: "Service area",
      question: "Where does McAze build home additions and custom renovations?",
      paragraphs: [
        "McAze serves suitable projects in Toronto and GTA communities including Vaughan, Markham, Richmond Hill, North York and Mississauga, subject to scope and availability.",
        "Each municipality and property has different zoning, permit, tree, grading and access conditions. The project is reviewed against its actual address rather than a generic GTA approval assumption.",
        "To begin, share the address, survey and drawings if available, current photographs, desired rooms, approximate budget and target timing. McAze can then identify the appropriate feasibility and construction-planning step.",
      ],
    },
  ],
  projectSlugs: ["three-storey-townhouse-renovation-gta", "condo-full-renovation-north-york"],
  projectQuestion: "Which McAze projects demonstrate custom multi-trade renovation work?",
  relatedQuestion: "Which services are commonly planned with a home addition?",
  faqQuestion: "What else do homeowners ask about additions and custom renovations?",
  ctaQuestion: "Are you considering a home addition in Toronto or the GTA?",
  ctaCopy:
    "Send McAze your address, survey or drawings if available, photographs and the spaces you want to create. We will review the feasibility and coordination needs for a practical next step.",
};
