import type { Service } from "@/lib/types";

export const demolitionServiceContent: NonNullable<Service["pageContent"]> = {
  heroEyebrow: "Selective Demolition Services in Toronto & the GTA",
  heroCopy:
    "McAze provides controlled interior and renovation demolition with careful protection, practical dust management, organized debris removal and a clean handoff for the trades rebuilding the space.",
  secondaryCta: { label: "Explore Renovation Services", href: "/services" },
  introQuestion: "What should you know before starting a demolition project?",
  intro: [
    "Demolition for a renovation is not simply breaking materials and carrying them outside. The work must separate what is being removed from what must remain, identify utilities and concealed risks, protect occupied areas, control dust and leave framing and substrates in a condition the next trade can understand. A rushed start can damage plumbing, wiring, structure, neighbouring finishes and the schedule that follows.",
    "McAze focuses on selective interior demolition for homes, condominiums, basements and commercial renovation spaces across Toronto and the Greater Toronto Area. Typical scopes include removing cabinets, counters, flooring, drywall, ceilings, fixtures, non-structural finishes and selected partitions as part of an approved renovation plan. Complete building demolition, hazardous-material abatement and engineered structural removal are distinct scopes requiring their own approvals and qualified resources.",
    "The questions below reflect common Toronto demolition searches and the decisions property owners face before work begins. They explain pricing, permits, asbestos, utilities, dust, waste, structural walls, occupied properties, salvage and the condition in which a professional demolition contractor should leave the site.",
  ],
  questions: [
    {
      eyebrow: "Budget planning",
      question: "How much do demolition services cost in Toronto?",
      paragraphs: [
        "Demolition pricing depends on the exact materials, quantity, access and risk—not only the room's floor area. A written estimate may include protection, utility coordination, labour, tools, equipment, temporary barriers, controlled removal, loading, bins, hauling, disposal fees, recycling, final cleanup and preparation for the next trade. Tile set in mortar, concrete, plaster, masonry and multiple floor layers require different effort from cabinets or ordinary drywall.",
        "Condominium elevators, narrow stairs, distant parking, limited work hours and occupied-home protection add handling time. Structural uncertainty, water damage and older materials can require investigation before a fixed price is responsible. Heavy debris may need smaller loads or special equipment, while reusable cabinets or fixtures take longer to remove intact than material intended for disposal.",
        "McAze defines what is removed, what stays, the debris route and the required handoff before pricing. Homeowners should compare complete scopes rather than a low labour-only number. Ask whether bins, disposal, permits, hazardous-material testing, utility disconnection and patching are included or excluded.",
      ],
      bullets: [
        "Materials and total removal quantity",
        "Selective interior work or complete building demolition",
        "Structural, mechanical and utility involvement",
        "Occupied-home or condominium protection",
        "Stairs, elevator, parking and loading access",
        "Bins, hauling, disposal and recycling",
        "Testing and specialized hazardous-material work",
        "Condition required for the rebuilding trades",
      ],
    },
    {
      eyebrow: "Scope definition",
      question: "What is selective demolition?",
      paragraphs: [
        "Selective demolition removes identified finishes, fixtures or assemblies while preserving the parts of the property that remain. It may involve taking out kitchen cabinets, a bathroom finish package, flooring, ceiling areas, damaged drywall or an approved non-structural partition. The goal is to expose what the renovation needs without creating unnecessary repair elsewhere.",
        "The process relies on drawings, markings and a pre-work review. Doors, floors, windows, stairs, common corridors and nearby occupied rooms are protected. Utilities are identified and isolated as required. Removal then proceeds in a sequence that reveals concealed conditions without destabilizing adjacent work.",
        "McAze uses selective demolition as the first construction stage of a renovation. The result should be a legible, safe work area where the designer and trades can verify framing, plumbing, electrical routes, moisture damage and actual dimensions before rebuilding begins.",
      ],
    },
    {
      eyebrow: "Demolition types",
      question: "Is interior renovation demolition different from demolishing a house?",
      paragraphs: [
        "Yes. Interior renovation demolition usually retains the building and removes a defined portion of finishes or assemblies. Complete building demolition involves the structure, site, utility services, neighbouring properties, environmental requirements and a formal demolition permit path. Equipment, engineering, fencing and public protection can be substantially different.",
        "Even an interior project can become structural or permit-related if it alters load-bearing walls, exits, fire separations, plumbing systems or the number and layout of dwelling units. The word 'interior' does not make every removal cosmetic.",
        "McAze's service page focuses on controlled renovation and selective demolition. Whole-building demolition is reviewed as a separate project and is not represented as equivalent to removing a kitchen or opening an approved interior area.",
      ],
    },
    {
      eyebrow: "Permits",
      question: "Do you need a demolition permit in Toronto?",
      paragraphs: [
        "Demolishing a building requires the applicable demolition permit, while an interior renovation may require a building permit based on the complete alteration. Structural changes, new rooms, changes to exits or fire separations and coordinated plumbing or mechanical work can trigger approvals even when only part of a property is being removed.",
        "The City of Toronto has a residential demolition permit guide for removal of an existing house where a replacement is planned. It requires project documentation and identifies related forms and site considerations. Other demolition circumstances should be confirmed with the responsible Toronto Building district office rather than assumed to follow the same route.",
        "McAze reviews likely approval needs during scope planning. The owner, designer and municipality confirm the permit path for the actual property, and required inspections or releases are obtained before work proceeds or concealed areas are rebuilt.",
      ],
      sourceLink: {
        label: "Review Toronto's Residential Demolition Permit guide",
        href: "https://www.toronto.ca/services-payments/building-construction/building-permit/before-you-apply-for-a-building-permit/building-permit-application-guides/renovation-and-new-house-guides/residential-demolition-permit-with-replacement-building/",
      },
    },
    {
      eyebrow: "Structural safety",
      question: "Can you remove an interior wall during demolition?",
      paragraphs: [
        "A wall should not be removed until its structural and building-system roles are understood. It may carry floor, roof or stair loads; brace the building; contain plumbing, ducts or wiring; or form part of a fire and acoustic separation. Visual appearance alone cannot reliably classify every wall.",
        "Where structural work is proposed, drawings and engineering may be required, along with temporary support, a defined removal sequence and inspections. A new beam or opening also affects ceilings, flooring, mechanical routes and finishes beyond the line of the former wall.",
        "McAze follows the approved scope and does not treat an uncertain wall as disposable. Exploratory openings can help qualified professionals verify conditions, but investigation is controlled and documented before structural demolition is authorized.",
      ],
    },
    {
      eyebrow: "Utilities",
      question: "How are electrical, plumbing and gas services handled before demolition?",
      paragraphs: [
        "Utilities must be identified and made safe before materials concealment is disturbed. Turning off one breaker or closing a nearby valve is not always sufficient; circuits may pass through the work area, pipes may serve another room and gas or mechanical systems require the appropriate licensed trade.",
        "Fixtures and appliances are disconnected according to the project plan. Lines that remain are protected, capped or repositioned as required, and live services needed by occupants are clearly separated from the demolition zone. The location of panels, shutoffs and emergency access remains available.",
        "McAze coordinates demolition with qualified electrical, plumbing, gas and HVAC professionals where required. This sequencing reduces damage and prevents the rebuilding team from discovering that an essential service was cut or buried without a plan.",
      ],
    },
    {
      eyebrow: "Hazardous materials",
      question: "Should a Toronto home be tested for asbestos before demolition?",
      paragraphs: [
        "Older buildings may contain asbestos in insulation, plaster, drywall joint compound, texture coats, floor tile, sheet flooring, adhesive, pipe wrap, cement products and other materials. Age and appearance cannot confirm whether a product contains asbestos. Breaking, sanding or removing suspect materials before assessment can spread fibres and change the required work procedure.",
        "Ontario's asbestos regulation applies to construction, repair, alteration and demolition work. Provincial guidance explains that before arranging work, an owner must determine whether material likely to be disturbed is asbestos-containing or treat it as asbestos in accordance with the regulation. Testing and abatement belong with appropriately qualified providers.",
        "McAze separates ordinary demolition from hazardous-material assessment and removal. Existing designated-substance reports and laboratory results should be supplied before pricing. If an unexpected suspect material appears, work pauses in that area until the correct path is established.",
      ],
      sourceLink: {
        label: "Read Ontario's asbestos regulation guidance",
        href: "https://www.ontario.ca/document/guide-regulation-respecting-asbestos-construction-projects-and-buildings-and-repair-1",
      },
    },
    {
      eyebrow: "Lead and coatings",
      question: "What other hazardous materials can affect demolition?",
      paragraphs: [
        "Asbestos is not the only concern. Older painted surfaces may contain lead, while mould, contaminated soil, mercury devices, refrigerants, fuels, chemicals and biological contamination can require different controls. Commercial and former industrial spaces deserve particular attention because historic operations may not be obvious from the current use.",
        "The correct response depends on the material, condition and work that will disturb it. A contractor should not mix unknown substances into ordinary debris or use a general dust barrier as a substitute for a required hazardous-material procedure.",
        "McAze reviews known building history and visible warning signs during planning. Where the concern falls outside normal renovation demolition, the appropriate testing, consultant or specialist is identified before the schedule and disposal route are confirmed.",
      ],
    },
    {
      eyebrow: "Dust control",
      question: "How is demolition dust controlled in an occupied home?",
      paragraphs: [
        "Dust control begins before removal. The work zone is separated from occupied areas, floors and fixed items are protected, debris routes are established and air movement is considered. Suitable extraction, temporary barriers and regular cleanup reduce migration, although active demolition cannot honestly be described as completely dust-free.",
        "Return-air openings, smoke alarms, electronics, kitchens, children's rooms and pets need specific planning. Debris should be contained for transport rather than carried loose through the property. Doors used by occupants should remain safe, and emergency access must not be blocked by materials or bins.",
        "McAze matches the protection system to the project. A cabinet removal in an empty kitchen differs from plaster demolition beside occupied bedrooms. The written scope states the work zone, access route, daily cleanup and any periods when occupants should remain away.",
      ],
    },
    {
      eyebrow: "Noise and neighbours",
      question: "How disruptive is interior demolition?",
      paragraphs: [
        "Demolition creates impact noise, vibration, dust and repeated debris movement. The intensity depends on whether the work involves cabinets, tile, concrete, plaster, flooring or masonry. Tool selection and removal sequence can reduce unnecessary disturbance but cannot eliminate construction noise.",
        "In condominiums and attached homes, building work hours, elevator bookings and neighbour communication matter. Vibration-sensitive finishes and shared walls deserve care, and loading activities should not obstruct common routes. Commercial work may be scheduled around customers, tenants or operating hours.",
        "McAze provides a practical sequence and communicates especially disruptive stages. Predictable working hours, clean common areas and organized deliveries are often as important to neighbours as the total duration.",
      ],
    },
    {
      eyebrow: "Condominium projects",
      question: "Can demolition be completed in a Toronto condo?",
      paragraphs: [
        "Yes, after the corporation's requirements and project approvals are confirmed. Management may request drawings, contractor insurance, deposits, work-hour compliance, elevator reservations, corridor protection and a waste plan. Units may contain common elements, fire separations, post-tensioned slabs or shared services that cannot be altered casually.",
        "Materials and bins must fit the approved loading route. Water shutdowns, detector isolation and noisy work may require advance booking. Structural drilling or slab penetrations should never be assumed from an interior design drawing alone.",
        "McAze plans the demolition around the approved condo scope. Owners should obtain the current renovation package before pricing so access and protection requirements are included rather than added after scheduling.",
      ],
    },
    {
      eyebrow: "Kitchen demolition",
      question: "What is included in kitchen demolition?",
      paragraphs: [
        "A kitchen scope can include appliance coordination, cabinet and counter removal, backsplash removal, selected flooring, bulkheads, drywall and non-structural finishes. Plumbing, gas and electrical disconnects are coordinated separately where required. Items to be reused are identified before work starts.",
        "Removing finishes often reveals the real wall condition, previous layouts and concealed services. The rebuilding plan should anticipate patching, substrate preparation and corrections rather than assuming demolition leaves a new surface behind.",
        "McAze marks what stays, protects adjacent rooms and leaves openings ready for measurement and trade review. Cabinetry intended for donation or reuse is removed more carefully and requires a different schedule than material being discarded.",
      ],
    },
    {
      eyebrow: "Bathroom demolition",
      question: "What should happen before bathroom demolition begins?",
      paragraphs: [
        "The team should confirm water shutoffs, fixture disconnection, ventilation, access and protection. Tile and mortar are heavy, and wet-area demolition can expose leakage, rot, mould, damaged subfloor or inappropriate previous waterproofing. These possibilities belong in the contingency plan.",
        "The scope should distinguish finishes from structure and clarify whether tubs, glass, vanities and fixtures are reused. Plumbing locations may remain until the approved new layout is finalized. Concealed damage should be documented before reconstruction decisions are made.",
        "McAze coordinates bathroom demolition with plumbing, electrical, waterproofing and tile work so the room is opened only as far as the next stage needs. A clean, inspectable substrate is more valuable than fast uncontrolled removal.",
      ],
    },
    {
      eyebrow: "Flooring removal",
      question: "Can old flooring and tile be removed without damaging the subfloor?",
      paragraphs: [
        "Careful removal can reduce damage, but the result depends on the floor system and adhesive. Floating materials may lift cleanly, while tile, mortar beds, glued wood, vinyl and multiple historic layers can remain strongly bonded. Some subfloor repair or levelling should be anticipated after exposure.",
        "Height transitions, heating systems, plumbing and potentially hazardous flooring or adhesive require review before tools are selected. Aggressive grinding may create dust and remove more substrate than necessary.",
        "McAze defines the desired handoff—such as exposed plywood, concrete or a surface ready for further preparation. Testing and unforeseen substrate work are addressed before the new flooring schedule is locked.",
      ],
    },
    {
      eyebrow: "Salvage and reuse",
      question: "Can cabinets, doors and fixtures be saved during demolition?",
      paragraphs: [
        "Some components can be salvaged when their condition, fastening and access allow careful removal. Reuse, donation and resale should be decided before demolition because intact removal takes more time, space and protection than ordinary disposal. Thin stone counters, glued mirrors and brittle tile may not survive even with care.",
        "Saved items need labels, hardware storage and an agreed location away from dust and impact. The owner should confirm which party accepts the risk of hidden damage and who transports donated material.",
        "McAze records designated salvage items in the scope rather than relying on a conversation after work starts. Everything not specifically listed is not automatically assumed to be reusable.",
      ],
    },
    {
      eyebrow: "Waste handling",
      question: "Where does renovation and demolition debris go?",
      paragraphs: [
        "Construction debris should follow an appropriate hauling and disposal route. Drywall, wood, metal, concrete, masonry, fixtures and hazardous materials have different handling requirements. Sorting selected materials can improve recycling and keep prohibited substances out of ordinary loads.",
        "Toronto's drop-off depot rules list construction, demolition and renovation waste among prohibited materials at City depots, so homeowners should not assume renovation debris can be taken with ordinary household waste. The selected private facility and hauler must accept the actual material stream.",
        "McAze plans bins, loading and debris removal according to access and volume. Hazardous or regulated material is not mixed into general demolition waste, and reusable items are separated before the work zone becomes congested.",
      ],
      sourceLink: {
        label: "Review Toronto drop-off depot prohibited-waste rules",
        href: "https://www.toronto.ca/services-payments/recycling-organics-garbage/drop-off-depots/regulations-prohibited-waste/",
      },
    },
    {
      eyebrow: "Timeline",
      question: "How long does a selective demolition project take?",
      paragraphs: [
        "Duration depends on material, quantity, access, testing, utility coordination and the care required around retained finishes. One empty room with direct exterior access differs from several occupied floors or a condo with limited elevator periods. Heavy tile, plaster and concrete also slow loading and disposal.",
        "The complete timeline includes approvals, protection setup, disconnects, removal, debris hauling, exposed-condition review and cleanup. Discovering water damage or suspect material can pause a portion of the work for testing or revised direction.",
        "McAze schedules demolition to support the next trade rather than opening the property too early. The written plan identifies expected duration and decision points, while reasonable contingency remains for conditions that could not be seen before removal.",
      ],
    },
    {
      eyebrow: "Occupied properties",
      question: "Can you stay in your home during demolition?",
      paragraphs: [
        "Sometimes, depending on scope, utilities, access and occupants. A localized room renovation can often be isolated, while full-floor removal, extensive plaster, hazardous-material work or loss of the only kitchen or bathroom may make temporary relocation more practical. Children, pets, respiratory sensitivities and home-working needs should be discussed honestly.",
        "Safe circulation, emergency exits, usable utilities and clean separation from debris are essential. Occupants should not enter the active work zone, move barriers or operate shutoffs and equipment reserved for the crew.",
        "McAze plans daily access and cleanup with the household. If the work cannot be separated responsibly, that limitation is identified before demolition begins rather than after the home is opened.",
      ],
    },
    {
      eyebrow: "Heritage properties",
      question: "Can demolition affect a Toronto heritage property?",
      paragraphs: [
        "Yes. Designated properties and buildings in Heritage Conservation Districts can require heritage approval for alterations or demolition affecting identified attributes. Some protected attributes may be interior elements, so work should not be assumed harmless because it is behind the façade.",
        "The City of Toronto Heritage Permit Guide explains that permission is required before altering or removing protected attributes and that proposed removals should be documented in drawings and specifications. Approval may be required even where a separate building permit is not.",
        "McAze works from the confirmed heritage and permit scope. Owners should establish property status and protected attributes before investigative or demolition work begins.",
      ],
      sourceLink: {
        label: "Review the City of Toronto Heritage Permit Guide",
        href: "https://www.toronto.ca/city-government/planning-development/heritage-preservation/heritage-permit-guide/",
      },
    },
    {
      eyebrow: "Contractor selection",
      question: "How do you choose a demolition contractor in Toronto?",
      paragraphs: [
        "Look for a contractor who defines the removal boundaries, retained items, protection, utilities, permits, testing, waste route, access, cleanup and final condition in writing. A vague promise to 'gut the room' leaves too much room for damage and disputed extras.",
        "Ask how structural uncertainty and suspect materials are handled, who coordinates licensed trades and what happens when hidden conditions appear. Condominium and commercial contractors should understand management documents, common areas and operating constraints.",
        "McAze treats demolition as the beginning of construction quality. The best result is not the largest pile of debris; it is a protected property, useful exposed information and a work area ready for the approved rebuild.",
      ],
      bullets: [
        "Is the exact removal scope marked and written?",
        "Are retained finishes and salvage items identified?",
        "Who isolates utilities and confirms inspections?",
        "How are asbestos and other hazards addressed?",
        "Are protection, bins, hauling and disposal included?",
        "What condition will be handed to the next trade?",
        "How are concealed conditions documented and approved?",
      ],
    },
    {
      eyebrow: "McAze workflow",
      question: "How does McAze manage a renovation demolition project?",
      paragraphs: [
        "The process begins with the renovation plan, property conditions and what must remain. McAze reviews access, neighbouring finishes, utilities, suspected hazards, permits and the rebuilding sequence. Removal limits, salvage items and exclusions are documented in the proposal.",
        "Before demolition, approvals and testing are confirmed, required disconnects are coordinated and protection is installed. The team removes materials in a controlled sequence, separates debris, maintains access and records significant concealed conditions for the client and relevant trades.",
        "The area is cleaned and reviewed at handoff. Exposed framing and substrates remain available for measurement, repair decisions and required inspections. Only after those decisions are resolved should insulation, drywall, flooring or cabinetry conceal the work again.",
      ],
      bullets: [
        "Site review and renovation-scope coordination",
        "Permit, utility and hazard checks",
        "Protection, access and debris planning",
        "Controlled selective removal",
        "Concealed-condition documentation",
        "Hauling, sorting and cleanup",
        "Inspection-ready handoff for rebuilding",
      ],
    },
    {
      eyebrow: "Service area",
      question: "Where does McAze provide demolition services?",
      paragraphs: [
        "McAze provides selective renovation demolition in Toronto and GTA communities including Vaughan, Markham, Richmond Hill, North York and Mississauga, subject to project scope and availability.",
        "Properties are reviewed individually. Older homes may need material testing, condos require management coordination, commercial sites may need phased work, and occupied residences need stronger separation and access planning.",
        "To request an estimate, share the address, property type, photographs, drawings if available, materials to be removed, items to remain, known building age, condo rules and the renovation planned afterward. This allows McAze to identify the safest practical next step.",
      ],
    },
  ],
  relatedQuestion: "Which services usually follow selective demolition?",
  faqQuestion: "What else do property owners ask about demolition?",
  ctaQuestion: "Are you planning selective demolition in Toronto or the GTA?",
  ctaCopy:
    "Send McAze photographs, drawings and a clear list of what should be removed and retained. We will review access, approvals, risks and the rebuilding sequence before preparing a practical written estimate.",
};
