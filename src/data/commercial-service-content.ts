import type { Service } from "@/lib/types";

export const commercialServiceContent: NonNullable<Service["pageContent"]> = {
  heroEyebrow: "Commercial Renovation in Toronto & the GTA",
  heroCopy:
    "McAze plans and completes commercial renovations, tenant improvements and fit-outs for offices, retail spaces, restaurants and other business properties with coordinated permits, trades, equipment, finishes and opening-date priorities.",
  secondaryCta: { label: "View Commercial Projects", href: "/portfolio" },
  introQuestion: "What should a business know before starting a commercial renovation?",
  intro: [
    "A commercial renovation is both a construction project and a business decision. The layout, approvals, lease obligations, accessibility, building systems, equipment, brand requirements and opening schedule must work together. A space can look complete and still be unable to operate if the permit, inspection, utility or landlord requirements were not resolved in the correct order.",
    "McAze supports commercial renovation and fit-out projects across Toronto and the Greater Toronto Area. Relevant work includes restaurant and food-service spaces, storefront doors and windows, security upgrades, temporary management offices and event infrastructure. The scope can range from targeted repairs in an operating property to a complete fit-out of an empty unit.",
    "The questions on this page reflect recurring search themes among Toronto business owners, tenants and property managers. They address cost, schedule, permits, change of use, lease review, accessibility, occupied-space planning, restaurant requirements, contractor selection and handover. The goal is to help decision-makers define the project before construction commitments affect rent, staffing and revenue.",
  ],
  questions: [
    {
      eyebrow: "Budget planning",
      question: "How much does a commercial renovation cost in Toronto?",
      paragraphs: [
        "There is no reliable universal price per square foot for every commercial renovation. An office refresh using an existing layout is different from a medical space, retail fit-out or restaurant that needs new plumbing, ventilation, electrical capacity, fire protection and food-service equipment. The condition and permitted use of the unit can matter as much as its floor area.",
        "Major cost factors include demolition, design, permits, landlord standards, partitions, ceilings, flooring, millwork, washrooms, accessibility, electrical service, lighting, HVAC, plumbing, fire-alarm or sprinkler changes, storefront work and specialty equipment. Work-hour restrictions, parking, elevator access and occupied-neighbour protection can also affect labour and logistics.",
        "McAze prepares a project-specific proposal after reviewing the unit, intended use, available drawings and responsibilities under the lease. Business owners should compare the same scope, allowances and exclusions. A low number may omit design, regulated trades, equipment connections, inspections, after-hours work or restoration required by the landlord.",
      ],
      bullets: [
        "Existing condition and intended business use",
        "Shell fit-out, full renovation or targeted update",
        "Permit, design and engineering requirements",
        "Electrical, plumbing, HVAC and fire-protection scope",
        "Accessibility and public washroom work",
        "Equipment, millwork and specialty finishes",
        "Landlord standards and building access rules",
        "Phasing, shutdowns and after-hours construction",
      ],
    },
    {
      eyebrow: "Schedule planning",
      question: "How long does a commercial renovation take?",
      paragraphs: [
        "The active construction period is only one part of a commercial renovation schedule. Lease review, site investigation, measured drawings, design, landlord approval, permit review, tendering, material procurement, utility coordination and inspections may all occur before the business can open. Specialty equipment and custom millwork often have longer lead times than general finishes.",
        "A straightforward office or retail refresh can move faster than a restaurant, clinic or change-of-use project. Construction normally follows a controlled sequence: protection and demolition, exposed-condition review, framing, mechanical and electrical rough-ins, inspections, walls and ceilings, flooring, millwork, equipment, final connections, testing and deficiencies.",
        "McAze builds the working schedule around real dependencies rather than an opening date alone. The owner should avoid announcing a firm launch until permit, equipment and inspection risks are understood. A practical plan also includes time for merchandising, staff training, cleaning, authority sign-offs and any landlord turnover requirements.",
      ],
      bullets: [
        "Due diligence and lease review",
        "Design, engineering and landlord approval",
        "Permit application and review",
        "Long-lead materials and equipment procurement",
        "Construction, inspections and connections",
        "Testing, deficiencies and final cleaning",
        "Business setup and operational handover",
      ],
    },
    {
      eyebrow: "Toronto permits",
      question: "Do commercial renovations require a building permit in Toronto?",
      paragraphs: [
        "Many commercial interior alterations require a building permit, particularly when the project changes partitions, exits, plumbing, building systems, fire-safety features, accessibility or the use of the premises. The City of Toronto maintains a specific application guide for non-residential interior alterations where the building area does not increase and notes that the use may also change.",
        "Permit drawings generally need to be scaled, dimensioned and prepared by appropriately qualified professionals where required. Mechanical, plumbing, electrical, fire-protection, signage, heritage, public-health and other approvals may follow separate processes. A landlord's approval does not replace municipal or provincial requirements.",
        "McAze identifies likely approval and regulated-trade dependencies during pre-construction. The owner, tenant and property manager should confirm who is responsible for drawings, permit fees, submissions and inspection closeout. Construction should not proceed on the assumption that the previous tenant's use or alterations automatically cover the new business.",
      ],
      sourceLink: {
        label: "Review Toronto's non-residential interior-alteration permit guide",
        href: "https://www.toronto.ca/services-payments/building-construction/building-permit/before-you-apply-for-a-building-permit/building-permit-application-guides/guides-for-other-buildings/interior-alterations-non-residential/",
      },
    },
    {
      eyebrow: "Use and occupancy",
      question: "What is a commercial change of use and why does it matter?",
      paragraphs: [
        "A change of use occurs when the proposed business creates a different occupancy or building-code condition from the approved existing use, even if the renovation appears limited. Converting an office or retail unit into a restaurant, clinic, assembly space or another specialized operation can change requirements for exits, occupant load, washrooms, ventilation, fire protection and accessibility.",
        "This question should be investigated before a lease is signed or a final layout is approved. An attractive vacant unit may not have the electrical service, plumbing, exhaust route, fire separations or occupancy conditions needed for the intended business. Correcting those gaps can affect cost, usable area and opening date.",
        "McAze uses the confirmed intended use as the basis for construction planning. Where change-of-use analysis, architectural work or engineering is required, those responsibilities are coordinated before trade work begins. The permit authority and qualified designer determine the applicable requirements for the property.",
      ],
    },
    {
      eyebrow: "Lease due diligence",
      question: "What should you check in a commercial lease before renovating?",
      paragraphs: [
        "The lease and landlord construction manual can define what the tenant may alter, which contractors can work in the building, who pays for base-building upgrades and what must be removed when the lease ends. They may also set insurance limits, deposits, work hours, elevator bookings, noise rules, utility shutdown procedures and drawing-review requirements.",
        "Tenant-improvement allowances should be understood in detail. The agreement may specify eligible costs, documentation, lien releases, inspection milestones and the point at which reimbursement occurs. A rent-free fixturing period is not automatically long enough for design, permits and construction, especially where the existing unit needs major service upgrades.",
        "McAze asks for the available lease-related construction requirements during scope planning. Legal and leasing advice remains with the owner's advisors, but the construction proposal should reflect access rules and division of responsibility. Ambiguity between tenant work and landlord work is a common source of delay.",
      ],
      bullets: [
        "Permitted use and exclusivity provisions",
        "Landlord approval and drawing requirements",
        "Base-building versus tenant responsibilities",
        "Tenant-improvement allowance conditions",
        "Fixturing period and rent commencement",
        "Contractor insurance and building access",
        "Utility shutdown and after-hours rules",
        "End-of-lease restoration obligations",
      ],
    },
    {
      eyebrow: "Business continuity",
      question: "Can a commercial renovation happen while the business stays open?",
      paragraphs: [
        "Some commercial renovations can be phased around an operating business, but not every scope can be completed safely or efficiently that way. Noise, dust, odour, temporary barriers, blocked exits, utility shutdowns and customer circulation must be evaluated. Food, health-care and other regulated environments may have additional restrictions.",
        "Phasing can involve isolating one zone, scheduling disruptive work after hours or arranging short closures for demolition and service connections. The trade-off is that repeated setup, protection and mobilization may extend the schedule and cost more than a single continuous shutdown. Customers and staff also need clear separation from construction.",
        "McAze develops a site logistics plan around the approved scope and property rules. Emergency routes, public access and essential services cannot be compromised for convenience. Where uninterrupted operation is unrealistic, a planned closure with a defined reopening sequence may be the safer business decision.",
      ],
    },
    {
      eyebrow: "Accessibility",
      question: "When should accessibility be considered in a commercial renovation?",
      paragraphs: [
        "Accessibility should be considered at the beginning, not after walls, doors and washrooms are installed. Entrance thresholds, door clearances, circulation, service counters, ramps, washrooms, controls, signage and customer seating can all influence the plan. Applicable requirements depend on the building, occupancy, scope and approval pathway.",
        "Improving access can also make a business easier to use for parents with strollers, delivery workers, older customers and people with temporary injuries. Some Toronto incentive programs have recognized eligible accessibility improvements such as accessible washrooms and interior ramps, although program availability and eligibility must be checked before relying on funding.",
        "McAze coordinates construction with the approved design and selected fixtures. A qualified designer or accessibility specialist may be required to determine the correct solution. Early review protects usable floor area and helps avoid the expensive discovery that a door, counter or washroom layout must be rebuilt.",
      ],
      sourceLink: {
        label: "Review Toronto's current Commercial Space Renovation Grant information",
        href: "https://www.toronto.ca/business-economy/business-operation-growth/business-incentives/commercial-space-renovation-grant-program/",
      },
    },
    {
      eyebrow: "Office interiors",
      question: "What is included in an office renovation or tenant improvement?",
      paragraphs: [
        "An office renovation may include reception, meeting rooms, private offices, collaborative areas, kitchenettes, washrooms, storage, acoustic treatments and updated circulation. Construction can involve selective demolition, partitions, doors, ceilings, flooring, painting, millwork, lighting, power, data coordination and HVAC adjustments.",
        "The layout should reflect headcount, privacy, hybrid work, visitor flow and future growth rather than copying a generic office plan. Existing windows, columns, sprinkler locations and mechanical zones affect where rooms can be placed. Furniture and technology decisions should be made early enough to coordinate outlets, floor boxes, screens and lighting.",
        "McAze plans trade sequencing and finishes around the confirmed drawings and building requirements. Durable surfaces, acoustic control and access to services often provide more long-term value than decorative features alone. The handover should leave the business ready for furniture, technology commissioning and staff occupancy.",
      ],
    },
    {
      eyebrow: "Retail spaces",
      question: "What should be planned in a retail store renovation?",
      paragraphs: [
        "Retail planning begins with how customers enter, understand the offer, move through the space and complete a purchase. Storefront visibility, security, displays, lighting, point-of-sale locations, stock storage and staff circulation should work as one system. A visually impressive plan that ignores deliveries or inventory can make daily operations difficult.",
        "Commercial-grade doors, hardware, glazing and security systems need to suit traffic and building conditions. Lighting should support products without creating glare or excessive energy use. Permanently fixed counters and displays must be coordinated with power, data and accessibility requirements before fabrication.",
        "McAze's Mississauga commercial project documents entrance-door, window-frame, hydraulic closer and security-gate work. It demonstrates how targeted building-envelope and security upgrades can improve operation without inventing a full interior fit-out that did not occur.",
      ],
    },
    {
      eyebrow: "Food-service construction",
      question: "What makes a restaurant renovation different from other commercial work?",
      paragraphs: [
        "Restaurants combine public occupancy with food preparation, grease, heat, water, refrigeration, ventilation and intensive cleaning. The equipment list drives electrical loads, gas or plumbing connections, exhaust, make-up air, clearances and workflow. These systems must be understood before the kitchen and service counter are fixed.",
        "The project may involve health requirements, fire suppression, exhaust hoods, floor and wall finishes, cold rooms, grease management, handwashing, accessible customer areas and equipment commissioning. Existing retail or office services are not automatically adequate for food operations. Utility capacity and the exhaust route should be checked during lease due diligence.",
        "McAze's documented Woodbridge fast-food project includes insulated wall and ceiling panels, commercial kitchen equipment, exhaust hood systems, refrigerated displays, cold-room components and final positioning. It provides real evidence of coordinated commercial food-service installation.",
      ],
    },
    {
      eyebrow: "Building systems",
      question: "How are electrical, plumbing and HVAC systems coordinated?",
      paragraphs: [
        "Commercial equipment and occupancy can place demands on a unit that the previous use never required. The electrical service, panel capacity, HVAC performance, plumbing, drainage and ventilation should be reviewed against the final plan and equipment schedule. A connection point shown on a drawing is not proof that the base building has sufficient capacity.",
        "Trade drawings must coordinate with ceilings, partitions, millwork, fire protection and maintenance access. Restaurant equipment, point-of-sale systems, server areas, washrooms and specialized tools all require accurate locations. Late equipment substitutions can change voltage, heat load, exhaust and clearances.",
        "McAze sequences openings, supports, rough-ins and final connections with the responsible licensed trades. Required notifications and inspections are kept distinct from the building permit. Testing and commissioning are included in handover planning so systems are not merely installed but ready for their intended operation.",
      ],
    },
    {
      eyebrow: "Durable materials",
      question: "Which finishes work best in a high-traffic commercial space?",
      paragraphs: [
        "The best finish depends on traffic, cleaning, moisture, impact, acoustics and replacement strategy. Commercial flooring should suit the substrate and rolling loads. Wall finishes near queues, equipment or deliveries may need more protection than a standard painted surface. Washrooms and food-service areas require materials appropriate for repeated cleaning and wet conditions.",
        "Durability should be considered together with repairability. A finish that looks premium on opening day may be difficult to patch when one section is damaged. Modular flooring, replaceable wall protection and accessible service panels can reduce future disruption. Slip resistance, transitions and maintenance instructions also affect everyday safety.",
        "McAze reviews material specifications and installation conditions rather than selecting by appearance alone. Samples should be considered under the actual lighting and brand palette. The final schedule should identify manufacturer, colour, finish and location so pricing and replacement records remain clear.",
      ],
    },
    {
      eyebrow: "Project risk",
      question: "How can a business reduce commercial renovation delays?",
      paragraphs: [
        "Delay risk falls when decisions and responsibilities are resolved before demolition. Confirm the permitted use, lease requirements, existing services, design team, permit path, equipment schedule, long-lead products and landlord approvals. A construction start date should be connected to these milestones rather than chosen in isolation.",
        "Maintain a decision log and approve changes in writing. Owner-supplied equipment and finishes need delivery dates, dimensions and technical data. Unknown existing conditions should have an agreed review process and contingency, especially in older units where drawings may be incomplete.",
        "McAze provides progress communication and sequences work around inspections and trade dependencies. No contractor can remove every risk, but a transparent schedule shows what is controlling the opening date. Fast responses from the owner, designer, landlord and suppliers are part of keeping construction moving.",
      ],
      bullets: [
        "Complete site and service due diligence",
        "Confirm permitted use before final design",
        "Obtain landlord approval and permit strategy",
        "Freeze equipment and long-lead selections",
        "Define owner-supplied item deadlines",
        "Approve scope changes in writing",
        "Track inspections and commissioning",
        "Keep an opening-date contingency",
      ],
    },
    {
      eyebrow: "Contractor selection",
      question: "How do you choose a commercial renovation contractor in Toronto?",
      paragraphs: [
        "Choose a contractor who asks about the business operation, lease, property rules, approvals and equipment—not only the visible finishes. The proposal should define demolition, construction, regulated trades, allowances, exclusions, schedule assumptions, site access and the process for concealed conditions and changes.",
        "Review projects that resemble the actual scope and confirm that the photographs represent the contractor's work. Ask who coordinates drawings and permits, how inspections are tracked, how occupied neighbours are protected and what documentation is provided at handover. Insurance, licensing and trade responsibilities should be addressed before access is granted.",
        "McAze publishes real commercial projects covering restaurant equipment installation, storefront openings and temporary event facilities. These examples show different commercial conditions rather than presenting stock photographs as completed work. The appropriate team and specialist involvement are then matched to the proposed project.",
      ],
    },
    {
      eyebrow: "McAze workflow",
      question: "How does the McAze commercial renovation process work?",
      paragraphs: [
        "The process begins with the business use, address, lease status, target opening date and available drawings. A site review considers access, existing construction, base-building services, neighbouring occupants and visible constraints. McAze then helps define a construction scope and identifies where qualified design or specialist review is needed.",
        "Before construction, landlord approval, permits, insurance, selections, equipment information and procurement responsibilities are coordinated. The work area and access routes are protected, demolition is controlled and exposed conditions are reviewed. Rough construction and trades proceed according to the approved documents and inspection sequence.",
        "Finishing stages include walls, ceilings, flooring, doors, millwork, painting, equipment placement and final connections as applicable. Testing, cleaning, deficiencies and documentation support the handover. The exact workflow changes by business type, but the objective is an operational space rather than an incomplete collection of finishes.",
      ],
      bullets: [
        "Business-use and lease-requirement review",
        "Site assessment and preliminary scope",
        "Design, permit and landlord coordination",
        "Estimate, selections and procurement schedule",
        "Protection, demolition and rough construction",
        "Inspections, finishes and equipment installation",
        "Testing, deficiencies and operational handover",
      ],
    },
    {
      eyebrow: "Service area",
      question: "Where does McAze provide commercial renovation services?",
      paragraphs: [
        "McAze serves commercial clients across Toronto and the Greater Toronto Area, including Vaughan, Woodbridge, Mississauga, Markham, Richmond Hill and North York, subject to project type and availability. Municipal approvals and property-management requirements are confirmed for the specific address.",
        "The current portfolio includes a Woodbridge fast-food kitchen fit-out, Mississauga commercial door and window replacement, and temporary Toronto competition-venue infrastructure. These projects demonstrate experience with equipment, insulated panels, storefront systems, security, modular structures, HVAC and electrical coordination.",
        "To request an estimate, provide the address, intended business use, approximate area, lease or ownership status, desired opening date, available plans, landlord manual, equipment list and current photographs. McAze can then identify whether a site visit and design-team discussion are the appropriate next steps.",
      ],
    },
  ],
  projectSlugs: [
    "commercial-fast-food-renovation-woodbridge",
    "commercial-door-window-replacement-mississauga",
    "temporary-site-management-offices-competition-venues-toronto",
  ],
  projectQuestion: "Which real McAze commercial projects can you review?",
  relatedQuestion: "Which services are often coordinated with a commercial renovation?",
  faqQuestion: "What else do businesses ask about commercial renovations?",
  ctaQuestion: "Are you planning a commercial renovation in Toronto or the GTA?",
  ctaCopy:
    "Tell McAze about the property, intended business use, lease requirements, target opening date and available drawings to begin a practical commercial scope review.",
};
