import type { Service } from "@/lib/types";

export const deckConstructionServiceContent: NonNullable<Service["pageContent"]> = {
  heroEyebrow: "Deck Construction in Toronto & the GTA",
  heroCopy:
    "McAze plans and builds residential decks with permit-aware layouts, durable framing, safe stairs and guards, weather-suited materials and details designed for practical outdoor living.",
  secondaryCta: { label: "Explore Exterior Services", href: "/services" },
  introQuestion: "What should homeowners know before building a deck?",
  intro: [
    "A deck is both an outdoor living surface and a structure exposed to Toronto's freeze-thaw cycles, rain, snow, sun and seasonal movement. Its long-term performance depends on more than the colour of the boards. Zoning, footings, ledger connections, beams, joists, drainage, ventilation, stairs, guards, fasteners and the transition at the house all need to work together.",
    "McAze provides deck construction and replacement across Toronto and the Greater Toronto Area. Projects can include pressure-treated wood, cedar or approved composite decking, along with framing, stairs, landings, railings, privacy details and coordinated removal of an existing deck. The correct solution depends on the property, design, code requirements, access, material system and how the family expects to use the space.",
    "The questions below reflect common Toronto deck searches and the decisions homeowners make before requesting an estimate. They cover cost, permits, zoning, materials, foundations, ledgers, railings, maintenance, winter performance, old-deck replacement and the information that belongs in a professional proposal.",
  ],
  questions: [
    {
      eyebrow: "Budget planning",
      question: "How much does it cost to build a deck in Toronto?",
      paragraphs: [
        "Deck pricing depends on size, height, shape, access and the complete structural and finish package. A responsible estimate may include design coordination, permits, removal, excavation, footings, posts, beams, joists, ledger details, decking, fascia, stairs, landings, guards, gates, privacy screens, hardware, disposal and site restoration. A low platform on open ground is different from an elevated deck with several stair runs.",
        "Material price is only one variable. Composite boards may cost more than common pressure-treated lumber, yet complicated geometry, hidden fasteners and detailed borders can add substantial labour to either system. Difficult excavation, limited access, utilities, sloped yards and hand-carried materials also affect the total.",
        "McAze prepares a written estimate after reviewing the property and intended design. Homeowners should compare complete scopes rather than a single square-foot rate. Ask whether drawings, permits, demolition, footings, railings, stairs, taxes and disposal are included and how unforeseen soil or existing-house conditions will be handled.",
      ],
      bullets: [
        "Deck area, height, shape and number of levels",
        "Permit drawings and approval coordination",
        "Existing-deck removal and disposal",
        "Footing type, excavation and site access",
        "Framing spans, stairs, guards and landings",
        "Wood, cedar or composite finish system",
        "Fascia, borders, lighting and privacy details",
        "Grading and restoration around construction",
      ],
    },
    {
      eyebrow: "Permits",
      question: "Do you need a building permit for a deck in Toronto?",
      paragraphs: [
        "Many decks require a building permit, particularly elevated decks. Toronto's homeowner permit guide identifies a deck, porch or balcony more than 60 centimetres above grade as work that generally requires a permit. The complete project must also comply with zoning even where a building permit is not required.",
        "Permit drawings can need a site plan, footing details, post, beam and joist information, stairs, guards and the connection to the house. Property-specific conditions, roofed structures, hot tubs, ravines, heritage status or changes to exits can add other reviews.",
        "McAze identifies likely requirements early and builds from approved information. The municipality and qualified designer confirm the exact path for the property; required inspections are booked before work is concealed or loaded.",
      ],
      sourceLink: {
        label: "Review Toronto's building permit application guides",
        href: "https://www.toronto.ca/services-payments/building-construction/building-permit/before-you-apply-for-a-building-permit/building-permit-application-guides/",
      },
    },
    {
      eyebrow: "Zoning",
      question: "How close can a deck be to a Toronto property line?",
      paragraphs: [
        "Setbacks and permitted projections depend on the property's zoning, the deck's location, height and relationship to the building. There is no responsible universal distance for every Toronto lot. A design that fits physically may still conflict with zoning or privacy-related rules.",
        "The site plan should show lot lines, the house, the proposed deck, stairs and relevant structures. A survey is often valuable because fences and landscaping do not prove the legal boundary. If the proposal does not comply, a redesign or planning approval may be needed before construction.",
        "McAze does not use a neighbour's deck as zoning evidence. Property-specific zoning and permit review guide the footprint so structural materials are not ordered for a layout the City cannot approve.",
      ],
      sourceLink: {
        label: "Learn how zoning standards affect Toronto building permits",
        href: "https://www.toronto.ca/city-government/planning-development/zoning-by-law-preliminary-zoning-reviews/zoning-in-toronto/",
      },
    },
    {
      eyebrow: "Material selection",
      question: "Is pressure-treated wood, cedar or composite best for a deck?",
      paragraphs: [
        "Each material has tradeoffs. Pressure-treated lumber is widely used for structural framing and economical deck surfaces, but it changes dimension as it dries and needs appropriate finishing and maintenance. Cedar offers a distinctive natural appearance and lighter feel, while species, grade and exposure affect durability.",
        "Composite decking can reduce routine staining but is not maintenance-free. Products differ in expansion, span limits, heat, traction, fastening and warranty requirements. The framing below still needs proper structure, drainage and ventilation, and darker boards can become hot in direct sun.",
        "McAze compares budget, appearance, maintenance, exposure and manufacturer requirements. A mixed system—treated framing with another approved surface—is common, provided compatible fasteners and details are used.",
      ],
    },
    {
      eyebrow: "Foundations",
      question: "What type of footings does a deck need in Toronto?",
      paragraphs: [
        "Footings transfer deck loads to suitable ground and must address frost movement, soil, deck height and design loads. The required size, depth, spacing and reinforcement belong to the approved design. Surface blocks are not an automatic substitute for a properly designed foundation.",
        "Excavation can reveal fill, roots, buried concrete, poor soil or utilities. Sloped yards and areas near the house need particular attention to drainage and access. Footing positions must align with beams and posts rather than being placed wherever digging is easiest.",
        "McAze lays out footings from the plan, confirms utility considerations and arranges required inspection stages. The structure is not advanced in a way that prevents the footing work from being examined where approval requires it.",
      ],
    },
    {
      eyebrow: "House connection",
      question: "Should a deck be attached to the house or freestanding?",
      paragraphs: [
        "An attached deck commonly uses a ledger connected to suitable house structure, with careful flashing and water management. The connection must transfer loads without relying on cladding, veneer or finishes that cannot support the deck. Poor ledger detailing can lead to water damage and serious structural failure.",
        "A freestanding design uses its own support system and may be preferable where the house construction, waterproofing, cladding or access makes a ledger unsuitable. Freestanding does not mean unengineered; lateral stability, footing layout and the relationship to doors still require design.",
        "McAze reviews the house condition and approved plans before choosing the connection. Exterior finishes are opened only as needed, and flashing is integrated so water is directed away rather than trapped behind the ledger.",
      ],
    },
    {
      eyebrow: "Framing",
      question: "How should deck beams and joists be designed?",
      paragraphs: [
        "Member sizes and spacing depend on species, grade, span, loads, cantilevers and the decking system. Rules of thumb cannot replace the approved design. Composite products may require closer joist spacing, particularly on diagonal layouts or stairs.",
        "Connections matter as much as lumber size. Posts, beams, joists and ledgers need approved hardware and fasteners suitable for exterior exposure and treated wood. Notches, holes and field changes can reduce capacity if they are made without review.",
        "McAze follows the confirmed structural layout and checks alignment before decking hides the frame. Blocking, bracing and hardware are coordinated so the deck feels stable and the finished board pattern has proper support.",
      ],
    },
    {
      eyebrow: "Water management",
      question: "How do you prevent water damage where a deck meets the house?",
      paragraphs: [
        "Water must be directed away from the wall assembly and ledger connection. Flashing, membranes, cladding transitions, door thresholds and drainage gaps should work as one system. Sealant alone is not a reliable substitute for layered water management.",
        "The deck surface should not trap water against siding or cover required drainage paths. Boards need appropriate gaps, and framing should be detailed to dry. Roof runoff, downspouts and grading can concentrate water around posts and the foundation if ignored.",
        "McAze reviews the transition before installation and coordinates repairs if existing cladding or sheathing is damaged. The goal is a connection that remains inspectable and sheds water through normal seasonal exposure.",
      ],
    },
    {
      eyebrow: "Stairs and guards",
      question: "What safety requirements apply to deck stairs and railings?",
      paragraphs: [
        "Stairs, landings, handrails and guards are life-safety components. Their need and dimensions depend on deck height, stair geometry and applicable code requirements. Consistent risers and treads, secure stringers, adequate landings and guards that resist required loads are fundamental.",
        "Decorative rail systems must be approved for the intended application and installed with the manufacturer's specified posts, spacing and fasteners. Mixing components or extending post spacing can invalidate the tested system. Gates and privacy screens add forces that need support.",
        "McAze builds from the approved details and checks stair geometry against real finished elevations. Inspection occurs at the required stages rather than treating railings as decoration added after the deck is used.",
      ],
    },
    {
      eyebrow: "Existing decks",
      question: "Should an old deck be repaired or completely replaced?",
      paragraphs: [
        "A repair may be practical when the structure, foundations and house connection are sound and deterioration is localized. Replacing surface boards alone is not a complete assessment; posts, beams, joists, ledger, flashing, stairs, guards and hardware should be reviewed.",
        "Widespread rot, movement, undersized framing, failed footings or an unsafe ledger can make full replacement more predictable. New composite boards are not a structural upgrade if installed on a frame that cannot support the product and current layout.",
        "McAze documents visible conditions and defines the limits of repair. Concealed areas can require a decision after boards are removed. The estimate should explain whether reused framing is accepted as-is, repaired or brought into a new approved design.",
      ],
    },
    {
      eyebrow: "Deck removal",
      question: "Is removal of the existing deck included in construction?",
      paragraphs: [
        "It can be included when identified in the proposal. Removal involves utility and attachment checks, controlled dismantling, separation of salvage items, loading and disposal. Old concrete, buried footings or inaccessible structures can add work beyond visible lumber.",
        "Treated wood and mixed materials should follow appropriate disposal requirements. Health Canada recommends protective measures when cutting or handling treated wood and directs owners to dispose of debris under local and provincial rules.",
        "McAze separates removal from new construction so the handoff is clear. Existing house damage, grading problems or unsuitable foundations exposed during removal are documented before rebuilding proceeds.",
      ],
      sourceLink: {
        label: "Read Health Canada's treated-wood safety guidance",
        href: "https://www.canada.ca/en/health-canada/services/consumer-product-safety/reports-publications/pesticides-pest-management/fact-sheets-other-resources/staying-safe-around-treated-wood.html",
      },
    },
    {
      eyebrow: "Surface layout",
      question: "Which deck-board layout is most practical?",
      paragraphs: [
        "Board direction affects appearance, waste, framing support and water drainage. Straight layouts are efficient, while diagonal patterns, picture frames and breaker boards can create a refined finish but require blocking and more cuts. Long composite runs may need planned butt joints or divider boards based on product movement.",
        "The layout should anticipate stairs, doors, posts and visible edges. Narrow filler boards and random end joints can make a large surface look unresolved. Fastener type and edge distances must follow the selected product.",
        "McAze confirms a board plan before installation and builds the framing to support it. This avoids redesigning the visible pattern after structural members are already fixed.",
      ],
    },
    {
      eyebrow: "Under-deck space",
      question: "How should drainage and ventilation be handled under a deck?",
      paragraphs: [
        "The area below should drain away from the home and avoid creating persistent wet zones around posts and foundations. Vegetation, soil contact and trapped debris can reduce drying and accelerate deterioration. Ground treatment depends on height, use and site conditions.",
        "If the space below will be used for storage or as a patio, an under-deck drainage system may be considered. It must be planned with framing, outlets and maintenance access rather than improvised after boards are installed. Enclosing sides can affect ventilation and access for inspection.",
        "McAze reviews grading, downspouts and intended use as part of deck planning. The deck should improve the yard without sending runoff toward the basement or hiding an area that cannot be maintained.",
      ],
    },
    {
      eyebrow: "Privacy and features",
      question: "Can a deck include privacy screens, lighting or a pergola?",
      paragraphs: [
        "Yes, when these features are included in design, zoning and structural review. Privacy screens catch wind and add load to posts. Pergolas, roofs and shade structures can change permit and setback requirements. Lighting requires outdoor-rated components and appropriate electrical coordination.",
        "Planters, benches and outdoor kitchens also add concentrated loads and affect circulation. Hot tubs require particularly careful structural, electrical, access and safety planning and should never be placed based only on available floor area.",
        "McAze integrates approved features with the frame rather than attaching them to finished boards without support. Early planning produces cleaner wiring routes, stronger posts and a more coherent layout.",
      ],
    },
    {
      eyebrow: "Winter climate",
      question: "How does Toronto weather affect deck construction?",
      paragraphs: [
        "Toronto decks experience snow, rain, freeze-thaw cycles, sun and large seasonal temperature changes. Wood expands, contracts and checks; composite systems move according to their formulation and installation temperature. Footings and drainage must address frost and water rather than only summer use.",
        "Snow storage, roof discharge and shaded wet areas influence maintenance. Metal connectors and fasteners need compatibility with treated lumber and exterior exposure. Leaves and debris should not remain trapped against the house or between framing members.",
        "McAze selects details for year-round conditions and follows product-specific spacing. Construction timing is planned around excavation, inspections and material requirements rather than promising that every stage is unaffected by weather.",
      ],
    },
    {
      eyebrow: "Maintenance",
      question: "How often should a wood deck be stained or sealed?",
      paragraphs: [
        "There is no universal annual schedule for every product. Exposure, wood species, previous coating, surface preparation and manufacturer instructions determine when maintenance is needed. Horizontal surfaces and stairs often weather faster than protected vertical faces.",
        "Cleaning and coating should occur only when the wood is suitable for the selected finish. Applying a film over damp or poorly prepared boards can lead to peeling. Fasteners, guards, stairs, ledgers and signs of decay should be inspected separately from appearance.",
        "McAze provides material-specific care guidance where available. Homeowners should keep product names and colours so future cleaning and recoating use compatible systems.",
      ],
    },
    {
      eyebrow: "Composite care",
      question: "Is composite decking maintenance-free?",
      paragraphs: [
        "No. Composite decking generally avoids the same staining cycle as wood, but it still requires cleaning and inspection. Dirt, pollen, food, grease, snow and organic growth can affect appearance and traction. Manufacturer-approved methods should be used because harsh chemicals, pressure or heat can damage some products.",
        "The frame, ledger, flashing, stairs and railings remain structural components that need inspection regardless of the board material. Scratches, heat exposure and colour change also vary by product, and isolated board replacement may be difficult if colours are discontinued.",
        "McAze explains the selected system's care and warranty conditions. Low maintenance should mean a planned reduction in coating work, not ignoring the deck after construction.",
      ],
    },
    {
      eyebrow: "Project timeline",
      question: "How long does it take to build a deck?",
      paragraphs: [
        "Construction duration depends on design, approvals, demolition, excavation, inspections, size, access, material availability and weather. A simple ground-level platform differs from a multi-level elevated deck with stairs, privacy structures and custom railings.",
        "The full timeline includes site review, design, permit and zoning decisions, ordering, removal, footings, framing, inspections, decking, stairs, guards and cleanup. Concrete and coatings may require curing or drying before the next step.",
        "McAze provides a working sequence after the design and approval path are known. Permit review and custom material lead times are not represented as active construction days, helping homeowners understand when the yard will actually be disrupted.",
      ],
    },
    {
      eyebrow: "Contractor selection",
      question: "How do you choose a deck contractor in Toronto?",
      paragraphs: [
        "A deck proposal should define dimensions, height, materials, footings, framing, house connection, decking, stairs, guards, fasteners, demolition, permits, disposal and exclusions. Ask who prepares drawings and how inspection stages are coordinated. Product brand and colour alone do not describe a complete deck.",
        "The contractor should be willing to discuss zoning, drainage, flashing and concealed conditions. For composite systems, confirm that framing spacing and fasteners follow manufacturer requirements. For an old deck, understand what existing components are being reused and why.",
        "McAze treats the deck as a structure first and an outdoor finish second. Clear scope, approved details and organized site work are the foundation of a deck that feels solid after the new appearance is no longer new.",
      ],
      bullets: [
        "Are drawings, permits and inspections included?",
        "Is the footing and framing system identified?",
        "How is the deck connected and flashed at the house?",
        "Are stairs, guards and hardware fully specified?",
        "Who removes and disposes of the old deck?",
        "How are drainage and grading protected?",
        "What product care and warranty information is provided?",
      ],
    },
    {
      eyebrow: "McAze workflow",
      question: "How does the McAze deck construction process work?",
      paragraphs: [
        "The process begins with the yard, house connection, intended use, size, height, access and material preferences. McAze reviews zoning and permit considerations, existing conditions and related landscaping or electrical work. The confirmed design supports a written proposal and material plan.",
        "After approvals and utility considerations are addressed, removal and site protection proceed. Footings, posts, beams and framing are completed through required inspection stages. Flashing, decking, stairs, guards, fascia and approved features follow in sequence.",
        "The site is cleaned and the completed deck is reviewed with the homeowner. Care guidance, permit closeout responsibilities and any documented deficiencies are addressed at handover.",
      ],
      bullets: [
        "Consultation and site measurement",
        "Design, zoning and permit coordination",
        "Written scope and material confirmation",
        "Removal, layout and footing work",
        "Framing, flashing and inspections",
        "Decking, stairs, guards and details",
        "Cleanup, walkthrough and care guidance",
      ],
    },
    {
      eyebrow: "Service area",
      question: "Where does McAze build decks?",
      paragraphs: [
        "McAze provides deck construction and replacement in Toronto and GTA communities including Vaughan, Markham, Richmond Hill, North York and Mississauga, subject to property conditions, scope and availability.",
        "Municipal rules and lots differ. A Toronto infill property may have restricted access and close neighbours, while a suburban yard may involve grading, mature trees or a larger stair system. Each design is reviewed for its actual location.",
        "To request an estimate, share the address, survey if available, approximate dimensions and height, photographs of the house and yard, preferred material, existing-deck condition and desired features. McAze can then identify the next design and approval steps.",
      ],
    },
  ],
  relatedQuestion: "Which services are commonly planned with deck construction?",
  faqQuestion: "What else do homeowners ask about building a deck?",
  ctaQuestion: "Are you planning a new deck in Toronto or the GTA?",
  ctaCopy:
    "Send McAze photographs, approximate dimensions, your preferred material and a survey if available. We will review the site, approval path and practical construction scope before preparing a written estimate.",
};
