import type { City } from "@/lib/types";

type LocalContent = NonNullable<City["pageContent"]>;
type Question = LocalContent["questions"][number];

const services = [
  "full-home-renovation",
  "kitchen-renovation",
  "bathroom-renovation",
  "basement-renovation",
  "general-contracting",
  "home-additions-custom-renovations",
];

function createLocalContent(input: {
  city: string;
  seoDescription: string;
  heroCopy: string;
  image: string;
  introQuestion: string;
  intro: string[];
  questions: Question[];
  preconstructionQuestion: string;
  preconstruction: string[];
  siteQuestion: string;
  sitePlanning: string[];
  neighborhoods: string;
  projectSlugs?: string[];
}): LocalContent {
  return {
    seoTitle: `Home Renovation Contractor in ${input.city}, ON`,
    seoDescription: input.seoDescription,
    heroEyebrow: `${input.city} Renovation Contractor`,
    heroTitle: `Home Renovation Contractor in ${input.city}, Ontario`,
    heroCopy: input.heroCopy,
    image: input.image,
    introQuestion: input.introQuestion,
    intro: input.intro,
    questions: [
      ...input.questions,
      { eyebrow: "Pre-construction", question: input.preconstructionQuestion, paragraphs: input.preconstruction },
      { eyebrow: "Site planning", question: input.siteQuestion, paragraphs: input.sitePlanning },
    ],
    serviceSlugs: services,
    projectSlugs: input.projectSlugs,
    faqs: [
      {
        question: `Does McAze provide renovation estimates in ${input.city}?`,
        answer: `Yes. Send the ${input.city} property address, photographs, intended scope and preferred timing. McAze will review whether the project is a fit and arrange the appropriate estimate step.`,
      },
      {
        question: `Which parts of ${input.city} does McAze serve?`,
        answer: `McAze reviews suitable projects across ${input.neighborhoods}, subject to scope, access, schedule and trade availability.`,
      },
      {
        question: `Can McAze help determine whether a ${input.city} renovation needs a permit?`,
        answer: `McAze can identify common approval triggers and coordinate construction information. The municipality and qualified design professionals determine the requirements for the actual address and proposed work.`,
      },
      {
        question: "Can the home remain occupied during construction?",
        answer: "Many focused renovations can proceed with controlled work zones and protection. The decision depends on safe access, dust, noise, utility interruptions and whether essential rooms remain usable.",
      },
      {
        question: "Do you work in condominiums and townhouses?",
        answer: "Suitable condo and townhouse projects can be reviewed. Property-management approval, working hours, elevators, parking, deliveries and protection requirements must be confirmed before scheduling.",
      },
      {
        question: "What should I send with an estimate request?",
        answer: "Provide the address, photographs, renovation goals, known damage, preferred materials, target timing and any drawings, permits, heritage information or condominium rules already available.",
      },
    ],
    ctaTitle: `Planning a renovation in ${input.city}?`,
    ctaCopy: `Tell McAze what you want to improve at the ${input.city} property. We will review the scope, existing conditions and practical next step toward a clear renovation estimate.`,
  };
}

export const richmondHillPageContent = createLocalContent({
  city: "Richmond Hill",
  seoDescription: "McAze provides kitchen, bathroom, basement and full-home renovation services in Richmond Hill with clear scopes, coordinated trades and careful finishing.",
  heroCopy: "McAze renovates homes in Richmond Hill with practical planning for kitchens, bathrooms, basements, additions and complete interior improvements—from first scope review to final walkthrough.",
  image: "/images/site/homepage-hero-mcaze-team.webp",
  introQuestion: "How should a Richmond Hill renovation respond to the property?",
  neighborhoods: "Richmond Hill, Oak Ridges, Mill Pond, Bayview Hill, Jefferson and nearby communities",
  preconstructionQuestion: "What should be completed before a Richmond Hill renovation start date is confirmed?",
  preconstruction: [
    "The address, intended rooms and desired outcome should be documented first. Permit-sensitive work, structural questions and product decisions can then be identified during the site review instead of after demolition. If drawings or engineering are needed, the schedule should allow those documents to be completed and reviewed before construction commitments depend on them.",
    "Long-lead cabinetry, windows, specialty fixtures and finish materials should be checked against verified dimensions. A selection list needs responsibility, budget and a decision date. Ordering early without coordinated dimensions creates a different risk from ordering late: products may arrive on time but not fit the approved work.",
    "McAze uses pre-construction to confirm approvals, scope, allowances, access, protection and the first trade sequence. A start date is most useful when the information and materials needed for the opening stages are genuinely ready.",
  ],
  siteQuestion: "How are occupied rooms and mature Richmond Hill properties protected during construction?",
  sitePlanning: [
    "Protection should reflect the actual route from the entrance to the work zone. Floors, stairs, doors and adjacent finished rooms may need different materials. Dust-control boundaries, tool storage, debris movement and daily cleanup should be defined before demolition spreads activity through the home.",
    "Mature lots can have restricted side access, landscaping close to work areas and limited locations for a bin or material staging. Deliveries and exterior work should account for trees, grade and neighbouring property instead of assuming an open new-construction site.",
    "The household also needs notice of water, power or room interruptions. McAze communicates those stages and maintains a controlled work area, while recognizing that certain structural or whole-home phases may still make temporary relocation the safer option.",
  ],
  intro: [
    "Richmond Hill includes older homes near Mill Pond, established family neighbourhoods, newer subdivisions, townhouses and custom properties around Oak Ridges and Bayview Hill. These homes do not share one construction profile. Age, lot grade, additions completed by previous owners and the condition of concealed systems can change both the renovation scope and the approvals required.",
    "McAze starts with how the household uses the property and what the existing building can support. The plan defines what stays, what changes, how trades will be sequenced and which decisions must be completed before demolition. For occupied homes, protection, temporary access and daily cleanup are treated as part of the project rather than informal extras.",
    "The questions below focus on Richmond Hill permit applications, basement planning, mature neighbourhoods, additions, kitchens, bathrooms and contractor selection. Municipal requirements are verified for the actual address because zoning, heritage status and conservation authority considerations cannot be assumed from a city-wide description.",
  ],
  questions: [
    { eyebrow:"Cost planning", question:"What determines the cost of a Richmond Hill home renovation?", paragraphs:[
      "Cost follows scope and existing conditions. Demolition, structural changes, plumbing, electrical, HVAC, insulation, drywall, cabinetry, tile, flooring and painting each create different labour and material requirements. Access, occupied-home protection, permit drawings and disposal also affect the total even though they are less visible than the finishes.",
      "A useful proposal separates defined work, allowances and contingency. Allowances cover products not yet selected; contingency addresses genuine unknowns. Homeowners should compare exclusions and quantities rather than assuming two short descriptions include the same work.",
      "McAze reviews visible conditions and records assumptions before pricing. If a wall, floor or shower must be opened to confirm damage, the proposal explains how that discovery will be documented and approved instead of hiding uncertainty inside an unrealistically firm promise."], bullets:["Written room-by-room scope","Product allowances","Permit and design responsibility","Protection and disposal","Change-order procedure","Final cleanup and walkthrough"] },
    { eyebrow:"Richmond Hill permits", question:"Which Richmond Hill renovations may require a building permit?", paragraphs:[
      "Richmond Hill accepts online residential permit applications for alterations and additions, decks and porches, finished basements, basement walkouts, garages, accessory buildings, demolitions and custom homes. The correct application depends on what is being constructed or altered, not simply whether the project is described as interior renovation.",
      "Structural work, new openings, additions, basement layouts and plumbing changes should be reviewed before construction. Electrical work follows Electrical Safety Authority requirements. Zoning and other applicable laws can affect the project even when the building work itself appears straightforward.",
      "The contract should state who prepares drawings, submits the application, pays fees, books inspections and answers examiner comments. McAze coordinates the construction scope with the approval route so demolition is not scheduled before essential documents are ready."], sourceLink:{label:"Richmond Hill building permit FAQs",href:"https://www.richmondhill.ca/en/online-services/Building-Permit-FAQs.aspx"} },
    { eyebrow:"Basement planning", question:"What should be checked before finishing a Richmond Hill basement?", paragraphs:[
      "A basement plan begins with moisture, foundation condition, ceiling height, stairs, windows, furnace and utility access. Finishes should not conceal active water entry or block equipment clearances. Room uses and any new plumbing need to be shown accurately when a permit is required.",
      "A recreation area, bedroom and additional residential unit have different life-safety and zoning considerations. Proposed exits, alarms, fire separation, ventilation and service capacity should be resolved before walls close. An attractive floor plan is not complete if it cannot be safely built.",
      "McAze reviews the visible shell and intended use before selecting insulation, framing, flooring or bathroom finishes. That order keeps design decisions connected to the building rather than forcing concealed work to fit choices made too early." ] },
    { eyebrow:"Kitchens and bathrooms", question:"How can Richmond Hill homeowners reduce delays in kitchen and bathroom projects?", paragraphs:[
      "Confirm products in the order they affect rough construction. Cabinet drawings determine appliance and countertop dimensions. Valves, tubs and vanities affect plumbing locations. Tile thickness changes transitions. Lighting and mirrors influence boxes and switching.",
      "Lead times should be checked before demolition, particularly for custom cabinetry, glass, specialty tile and plumbing fixtures. The schedule should identify owner decisions and required dates so a missing selection does not stop several trades.",
      "McAze coordinates demolition, repairs, rough-ins, inspections where applicable, wall preparation, installation and finishing. The written scope identifies supply responsibility and allowances so the homeowner, supplier and installer share the same expectations." ] },
    { eyebrow:"Mature neighbourhoods", question:"What risks are common when renovating an older Richmond Hill home?", paragraphs:[
      "Older homes may contain previous repairs, uneven framing, undersized services, concealed moisture or materials that require assessment before disturbance. These conditions are not proof that a house is unsuitable for renovation, but they change how demolition and contingency should be planned.",
      "New finishes can expose level differences and transitions that were hidden by carpet, trim or cabinets. Structural openings and additions need professional review because the existing building may not match assumptions made from surface measurements.",
      "McAze uses selective investigation where practical and documents discoveries during demolition. Work outside the original scope is explained with its effect on cost and schedule before proceeding whenever the condition permits." ] },
    { eyebrow:"Additions and exterior work", question:"How should a home addition or exterior renovation be planned in Richmond Hill?", paragraphs:[
      "An addition connects zoning, grading, foundation, structure, roof, insulation, windows and mechanical capacity. Design feasibility comes before finish budgeting. Property-specific setbacks, lot coverage and approvals should be confirmed before the footprint is treated as final.",
      "Exterior work also needs a water-management strategy. New windows, doors, cladding, roofs and decks must connect to existing assemblies without creating drainage paths into the home. Lot grading and runoff should not be treated as landscaping details after construction.",
      "McAze coordinates the buildable scope with designers and engineers where required, then sequences structural work, enclosure, rough-ins and interior finishing around approved information." ] },
    { eyebrow:"Hiring", question:"How do I choose a renovation contractor in Richmond Hill?", paragraphs:[
      "Compare written scope, exclusions, allowances and responsibilities—not only price. Ask who supervises trades, manages inspections, protects occupied areas, documents changes and completes deficiencies. Confirm insurance and the payment structure before work begins.",
      "Relevant evidence matters more than a large generic gallery. Ask what the contractor actually performed and whether the project resembles yours. A responsible contractor should distinguish verified work from inspiration images.",
      "McAze provides a clear route from site review to proposal, pre-construction decisions, active work and final walkthrough. The goal is to make responsibility visible before the home becomes a job site." ] },
  ],
});

export const thornhillPageContent = createLocalContent({
  city:"Thornhill",
  seoDescription:"McAze provides townhouse, kitchen, bathroom, flooring and complete home renovation services in Thornhill with municipality-aware planning and clear scopes.",
  heroCopy:"McAze plans Thornhill renovations around the home, neighbourhood and correct municipal jurisdiction—whether the address falls in Vaughan or Markham.",
  image:"/images/site/home-why-mcaze-teamwork.webp",
  introQuestion:"Why does the exact Thornhill address matter before renovation begins?",
  neighborhoods:"Thornhill, Thornhill Woods, Uplands, Crestwood-Springfarm and nearby neighbourhoods",
  preconstructionQuestion:"What should be confirmed before scheduling a Thornhill renovation?",
  preconstruction:[
    "First confirm whether the address is in Vaughan or Markham, then identify the correct permit, zoning and heritage contacts. The project description should state building type, occupied areas, proposed structural or plumbing changes and any condominium or townhouse-corporation requirements.",
    "Selections that affect rough work—cabinetry, appliances, plumbing fixtures, lighting and flooring buildup—should be resolved before trades are booked. In a multi-storey home, the material route and stair availability must also be included in the sequence.",
    "McAze converts this information into a written scope, allowance list and preliminary schedule. Approval and procurement dependencies remain visible rather than being buried inside a single promised start date.",
  ],
  siteQuestion:"How can construction disruption be reduced on a Thornhill townhouse or narrow lot?",
  sitePlanning:[
    "Townhouses and narrow lots often have one practical entrance and limited staging. Protection must follow the shared circulation route, and debris should be removed in controlled loads instead of accumulating where occupants or neighbours need access.",
    "Parking, visitor spaces, shared walls and corporation rules can limit deliveries and working hours. Noisy or dusty work should be grouped where practical, while fire routes and common areas remain unobstructed.",
    "McAze plans storage, cleanup and trade overlap around those limits. The result is not a disruption-free renovation, but a site where predictable inconvenience is communicated and avoidable damage is controlled.",
  ],
  projectSlugs:["three-storey-townhouse-renovation-gta"],
  intro:[
    "Thornhill spans the municipal boundary between Vaughan and Markham. Two homes with Thornhill mailing addresses can therefore follow different permit portals, zoning rules, heritage processes and municipal contacts. Confirming the jurisdiction is one of the first planning steps, especially for additions, basement entrances, structural alterations and exterior work.",
    "The area includes mature detached homes, townhouses, newer subdivisions and properties within or near the Thornhill heritage districts. McAze reviews building type, visible condition, access and household needs before defining the scope. This avoids treating a three-storey townhouse, older Main Street property and newer detached home as interchangeable projects.",
    "The page connects local approval questions with practical renovation issues such as floor transitions, stair refinishing, occupied-home sequencing and exterior heritage changes. The verified Thornhill townhouse project linked below documents actual inspection and repair conditions rather than a staged stock example.",
  ],
  questions:[
    {eyebrow:"Municipal boundary",question:"Is my Thornhill renovation governed by Vaughan or Markham?",paragraphs:[
      "The municipal address determines which building department, zoning by-law and application portal applies. A postal reference to Thornhill is not enough. Homeowners should confirm the municipality before relying on a checklist, fee or permit exemption found online.",
      "Vaughan and Markham both regulate common renovation work, but their submission processes and heritage districts are administered separately. Electrical inspections remain under the Electrical Safety Authority, while condominium approvals are private requirements in addition to municipal rules.",
      "McAze records the property address at the first review and connects the scope to the correct authority. This prevents permit assumptions from one side of Thornhill being copied to a property on the other." ]},
    {eyebrow:"Heritage",question:"What should owners know about renovating in a Thornhill heritage district?",paragraphs:[
      "Both Vaughan and Markham contain designated Thornhill heritage areas. Exterior changes to designated properties or buildings within a Heritage Conservation District can require heritage review. Windows, doors, additions, visible equipment, masonry, driveways and exterior colours may be affected depending on the district and proposal.",
      "Interior work generally follows the normal permit route unless it changes the exterior appearance or affects a protected feature. Routine repair exemptions are specific; owners should confirm them before ordering replacement products.",
      "McAze can coordinate construction details and material information, while the correct municipal heritage staff determine the approval. Heritage approval does not replace a building permit or zoning review."],sourceLink:{label:"Markham Thornhill heritage permit information",href:"https://www.markham.ca/economic-development-business/planning-development-services/planning-and-development-applications/heritage-permit-he"}},
    {eyebrow:"Townhouse renovation",question:"How should a three-storey Thornhill townhouse renovation be sequenced?",paragraphs:[
      "Multi-level work requires a route for materials, waste and daily access. Painting, flooring, stairs, doors and trim should be ordered so completed surfaces are not repeatedly crossed or damaged. Protection must account for the stairs because they are both a work item and the main circulation path.",
      "Flooring transitions, baseboards, door clearances and stair finishes are connected decisions. Cabinet or window repairs should be completed before final paint. Sanding and dusty preparation need separation from finished rooms.",
      "McAze’s documented Thornhill townhouse project included painting, carpet removal, linoleum, hardwood refinishing, staircase renewal and door, window and cabinet repairs. The project demonstrates the inspection and sequencing needed when many smaller conditions combine into a whole-home result." ]},
    {eyebrow:"Basements",question:"What approval questions apply to a Thornhill basement renovation?",paragraphs:[
      "The answer depends first on whether the property is in Vaughan or Markham. Finished rooms, new plumbing, a walkout, structural work or an additional unit can trigger permits and separate requirements. The intended use must be defined before drawings and pricing.",
      "Moisture, ceiling height, windows, stairs, mechanical clearances, fire safety and exits should be reviewed before finishes. A second suite is not simply a basement with a kitchen; it requires a compliant housing and life-safety plan.",
      "McAze reviews the shell and proposed layout, then coordinates the scope with the applicable municipal and professional requirements." ]},
    {eyebrow:"Interior updates",question:"How can kitchens, bathrooms and flooring be coordinated in one Thornhill renovation?",paragraphs:[
      "Set layout and rough-in decisions first, then align cabinets, tile, plumbing fixtures, lighting, flooring and trim. Moving services may affect permits and access below or behind finished areas. Product thicknesses determine transitions and door clearances.",
      "A whole-home schedule should protect the path used by later trades. Floors should not be finished before heavy demolition or repeated material deliveries. Final paint and touch-ups follow the work most likely to mark walls.",
      "McAze builds the sequence around dependencies and confirms which products are supplied by the homeowner, carried as allowances or included in the contract." ]},
    {eyebrow:"Occupied homes",question:"Can a Thornhill family remain home during renovation?",paragraphs:[
      "Focused work can often be separated, but a multi-floor project may affect the only stairs, kitchen or bathroom. Dust, noise, pets, children, remote work and utility interruptions should be discussed honestly before scheduling.",
      "The site plan should define work-zone boundaries, protection, storage, waste routes, cleanup and temporary access. Condominium or townhouse corporations can add working-hour and common-area rules.",
      "McAze aims to reduce avoidable disruption while maintaining a safe construction zone. Temporary relocation may still be the responsible choice for certain stages." ]},
    {eyebrow:"Contractor comparison",question:"What should a Thornhill renovation proposal include?",paragraphs:[
      "The proposal should identify the municipality, scope, permits, trade coordination, protection, materials, allowances, exclusions, changes and payment milestones. A generic one-page number is difficult to compare and leaves important responsibilities undefined.",
      "Ask for verified project evidence and clarify what the contractor performed. Review insurance and how deficiencies will be recorded at handover.",
      "McAze uses the site review to create a practical written scope and keeps approval-sensitive work visible before construction begins." ]},
  ],
});

export const northYorkPageContent = createLocalContent({
  city:"North York",
  seoDescription:"McAze provides condo, kitchen, bathroom, basement and full-home renovation services in North York with Toronto permit and property-management coordination.",
  heroCopy:"From North York condominiums to older detached homes, McAze coordinates renovation scope, access, trades and finishes around the property’s real constraints.",
  image:"/images/site/contractor-tablet.webp",
  introQuestion:"What planning issues shape a North York renovation?",
  neighborhoods:"North York, Willowdale, Bayview Village, Don Mills, York Mills and nearby Toronto neighbourhoods",
  preconstructionQuestion:"What belongs in pre-construction planning for a North York condo or house?",
  preconstruction:[
    "For a condo, obtain the corporation’s alteration rules, drawings requirements, insurance limits, deposits and booking process. For a house, confirm the intended structural, plumbing and exterior changes against Toronto permit guidance and assess access for waste and deliveries.",
    "Products should be selected against real dimensions and building constraints. Service-elevator size can limit cabinets or countertops; an older house may need electrical or mechanical review before a new appliance plan is accepted.",
    "McAze prepares the construction sequence only after these constraints are identified. This keeps property-management approvals, municipal permits, procurement and trade dates connected.",
  ],
  siteQuestion:"How is a North York renovation site managed when space is limited?",
  sitePlanning:[
    "Condo work requires protected common-area routes, booked elevators and timely debris removal. Residential streets can have restricted parking, narrow drives and little space for a waste container. Delivery size and timing should match the real route.",
    "Dust and noise need separation from occupants and neighbours. Temporary barriers, floor protection and daily cleanup are planned around the work zone, while any water or power shutdown is scheduled with the people or management responsible for the building.",
    "McAze treats logistics as part of production. A trade cannot work efficiently if materials cannot reach the room, and a beautiful finish is not successful if common areas or retained rooms are damaged along the way.",
  ],
  projectSlugs:["condo-full-renovation-north-york"],
  intro:[
    "North York renovation work ranges from high-rise condominiums and post-war bungalows to custom homes and busy mixed-use corridors. Municipal approvals are administered by the City of Toronto, while condominium projects also answer to a corporation or property manager. Access, parking, elevators, service shutdowns and noise rules can be as important as the room design.",
    "Older detached houses may contain previous alterations, aging drains, uneven framing or limited electrical and mechanical capacity. Condominiums usually restrict structural penetrations, plumbing shutdowns, common-area movement and working hours. McAze identifies these conditions before scheduling trades or promising a completion date.",
    "This page focuses on Toronto permits, condo logistics, basement and additional-unit planning, older-home renovation and verified North York project work. It does not treat North York as a separate municipality or copy suburban permit guidance into a Toronto address.",
  ],
  questions:[
    {eyebrow:"Toronto permits",question:"Which North York renovations need a City of Toronto building permit?",paragraphs:[
      "Toronto identifies basement finishing, secondary suites, new or altered plumbing or mechanical systems, enlarged window and door openings, additions, exterior basement entrances and decks above specified heights among work that generally requires a permit. Structural alterations and changes of use also require review.",
      "Cosmetic replacement does not automatically mean permit-free when the project changes concealed systems or building structure. Condominium approval is separate from a City permit, and electrical work follows Electrical Safety Authority requirements.",
      "McAze reviews the proposed scope against Toronto guidance and coordinates with designers or engineers where needed. Permit submission, fees, inspections and responses should have a named owner in the contract."],sourceLink:{label:"City of Toronto building permit guide",href:"https://www.toronto.ca/wp-content/uploads/2017/11/9273-Building-Permit-Guide-WEB.pdf"}},
    {eyebrow:"Condo renovation",question:"What must be arranged before renovating a North York condo?",paragraphs:[
      "Obtain the corporation’s renovation package before final pricing. It may require drawings, contractor insurance, deposits, working-hour limits, elevator bookings, floor protection and approval for plumbing, electrical or flooring work. Some buildings require acoustic test data or specific underlayment.",
      "Water shutdowns, deliveries and waste removal need reservations. Materials must fit the service elevator and route. The schedule should recognize that building management controls access that a contractor cannot override.",
      "McAze’s verified North York condo project included kitchen cabinetry, bathroom work, outlets and switches, lighting, silicone finishing, cleaning and furniture placement. The documented project is linked below as a real local example." ]},
    {eyebrow:"Older homes",question:"What hidden conditions are common in older North York houses?",paragraphs:[
      "Previous renovations, aging supply and drain lines, limited electrical capacity, settlement, concealed moisture and hazardous materials can affect the scope. These possibilities should inform investigation and contingency without being presented as confirmed defects before inspection.",
      "Opening walls can reveal framing or services that differ from assumptions. Structural changes require professional review, and older finishes may need testing or controlled handling before disturbance.",
      "McAze documents visible conditions and uses change orders when concealed work differs from the agreed basis. This protects the homeowner from vague additions and allows the schedule impact to be understood." ]},
    {eyebrow:"Basements and units",question:"How should a North York basement or additional residential unit be planned?",paragraphs:[
      "Toronto permits secondary suites and other housing forms subject to zoning and Building Code requirements. The proposed unit, exits, fire separation, alarms, plumbing, ventilation and electrical work must be planned as a complete living space—not added piecemeal after finishes.",
      "For any basement, moisture, drains, ceiling height, stairs, windows and mechanical equipment come before flooring or cabinetry. Exterior entrances and enlarged openings add structural and permit considerations.",
      "McAze can coordinate the construction scope with qualified design and trade requirements. The City determines zoning and permit compliance for the address." ]},
    {eyebrow:"Kitchens and bathrooms",question:"How can a North York kitchen or bathroom project stay on schedule?",paragraphs:[
      "Resolve layouts, fixtures, cabinetry and appliances before rough-ins. In condos, include management approvals and shutdown dates. In houses, confirm access below and behind the room so plumbing and electrical changes are realistic.",
      "Long-lead cabinets, shower glass, tile and specialty fixtures should be ordered against confirmed dimensions. Waterproofing and substrate work must not be rushed to recover time lost to late selections.",
      "McAze sequences demolition, repair, rough-ins, inspections, installation and finishing while recording owner-supplied items and allowances." ]},
    {eyebrow:"Access and neighbours",question:"How are parking, deliveries and neighbours managed on a North York renovation?",paragraphs:[
      "Urban projects may have narrow drives, street-parking restrictions, shared corridors or limited loading space. Delivery size, waste containers and material storage should be planned before demolition creates debris.",
      "Noise and dust affect neighbours and common areas. Work-zone separation, covered routes and daily cleanup help protect the property. Residential infill projects can also have public-notice and site requirements tied to permits.",
      "McAze includes access constraints in the schedule instead of assuming suburban staging space is available." ]},
    {eyebrow:"Hiring",question:"What should I ask a North York renovation contractor before signing?",paragraphs:[
      "Ask for a detailed scope, exclusions, allowances, permit responsibilities, condo requirements, trade coordination, insurance and change procedure. Confirm how access delays and concealed conditions will be handled.",
      "Review verified projects that resemble the building type. A condo fit-out is not evidence of structural house-addition experience, and the reverse is also true.",
      "McAze explains the proposed sequence and responsibility before work begins so the homeowner can compare the full project rather than only the headline price." ]},
  ],
});

export const woodbridgePageContent = createLocalContent({
  city:"Woodbridge",
  seoDescription:"McAze provides home and commercial renovation services in Woodbridge, including kitchens, bathrooms, basements, interiors and coordinated fit-outs.",
  heroCopy:"McAze renovates Woodbridge homes and suitable commercial spaces with Vaughan-aware permit planning, organized trades and verified local project experience.",
  image:"/images/site/home-process-construction.webp",
  introQuestion:"What should a Woodbridge renovation plan account for?",
  neighborhoods:"Woodbridge, East Woodbridge, West Woodbridge, Vellore Village and nearby Vaughan communities",
  preconstructionQuestion:"What should be ready before a Woodbridge renovation or fit-out begins?",
  preconstruction:[
    "Residential projects need an agreed layout, Vaughan approval review, selections and an occupied-home plan. Commercial projects additionally need the lease criteria, legal use, landlord approvals, equipment schedule and consultant information that define building-system requirements.",
    "Long-lead items should be connected to approved dimensions. Kitchen cabinets, commercial hoods, refrigeration, doors and specialty finishes can each control several later trades. Procurement status should be reviewed before demolition removes the existing operation or living space.",
    "McAze creates a responsibility matrix for suitable projects so owner-supplied equipment, vendor work, municipal approvals and McAze construction scope do not leave gaps.",
  ],
  siteQuestion:"How does site planning differ between a Woodbridge home and commercial unit?",
  sitePlanning:[
    "A home emphasizes household access, neighbour impact and protection of retained finishes. A commercial unit adds customers, employees, loading areas, fire routes, landlord-controlled systems and possible shutdown windows.",
    "Both project types need safe waste movement, material staging and permitted working times. A bin in the road allowance requires Vaughan approval, while a plaza or multi-tenant property may have its own delivery and disposal rules.",
    "McAze builds the daily plan around the actual site instead of applying one housekeeping checklist to every building type.",
  ],
  projectSlugs:["commercial-fast-food-renovation-woodbridge"],
  intro:[
    "Woodbridge combines mature neighbourhoods, newer family homes, townhouses, commercial corridors and a designated Heritage Conservation District. Residential and commercial projects therefore require different decisions about access, permits, building systems, occupancy and finish durability.",
    "McAze starts with the property use and existing conditions. A kitchen renovation in an occupied home needs a different protection and schedule plan from a restaurant fit-out involving equipment, ventilation and food-service finishes. Both still benefit from a written scope, verified approvals and clear handoffs between trades.",
    "The questions below emphasize Vaughan permits, the Woodbridge heritage district, basement and family-home planning, commercial renovation and actual local project evidence. City requirements are confirmed for the address rather than assumed from the neighbourhood name.",
  ],
  questions:[
    {eyebrow:"Vaughan approvals",question:"Do Woodbridge renovations follow City of Vaughan permit rules?",paragraphs:[
      "Yes. Woodbridge is within Vaughan, so City of Vaughan Building Standards administers applicable municipal building permits. Structural alterations, additions, finished basements, new plumbing, openings and many deck projects can require approval.",
      "Electrical inspections are handled by the Electrical Safety Authority. Zoning, heritage and road-occupancy requirements can apply separately, and commercial projects may add change-of-use, fire, mechanical or accessibility considerations.",
      "McAze identifies approval-sensitive work before scheduling construction and coordinates the scope with designers and specialized trades where required."],sourceLink:{label:"City of Vaughan building permits",href:"https://www.vaughan.ca/residential/building-and-construction/building-permits"}},
    {eyebrow:"Heritage district",question:"Can I alter windows, doors or the exterior in historic Woodbridge?",paragraphs:[
      "Properties within the Woodbridge Heritage Conservation District can require a Heritage Permit for additions, demolition and exterior changes. Approval considers the building, streetscape and applicable district guidelines. A heritage permit is separate from building and planning approvals.",
      "Confirm designation before ordering windows, doors, cladding, porches or exterior colours. Even a non-heritage building inside a district can be subject to district review.",
      "McAze can prepare construction and material information, while Vaughan heritage staff and Council processes determine approval for the proposal."],sourceLink:{label:"Vaughan heritage conservation districts",href:"https://www.vaughan.ca/residential/building-and-construction/building-permits/cultural-heritage-preservation/heritage-conservation-districts"}},
    {eyebrow:"Family homes",question:"How should a Woodbridge kitchen and main-floor renovation be organized?",paragraphs:[
      "Begin with circulation, storage, appliances and the relationship between kitchen, dining and family rooms. Wall removal needs structural review, while moved sinks, islands and lighting affect rough-ins and permits.",
      "Cabinet, appliance, countertop, flooring and lighting decisions should be coordinated before demolition. Temporary kitchen arrangements and occupied routes need protection throughout work.",
      "McAze sequences demolition, structural and rough work, inspections, cabinets, surfaces and finishing so each trade receives a prepared area." ]},
    {eyebrow:"Basements",question:"What makes a Woodbridge basement renovation practical and compliant?",paragraphs:[
      "Moisture, foundation condition, ceiling height, windows, stairs and mechanical clearances come first. Finished rooms and new plumbing can require Vaughan permits; a separate suite adds zoning and life-safety requirements.",
      "Insulation, framing and flooring should respond to the actual basement rather than a generic package. Water issues should be corrected before finishes conceal them.",
      "McAze defines intended uses and coordinates concealed work before decorative selections drive the plan." ]},
    {eyebrow:"Commercial fit-outs",question:"What is different about renovating a Woodbridge restaurant or commercial space?",paragraphs:[
      "Commercial work connects landlord criteria, approved use, fire safety, accessibility, electrical, plumbing, ventilation and equipment. The equipment schedule and operational workflow influence walls, services and clearances.",
      "Long-lead hoods, refrigerated units and specialty fixtures must be coordinated with openings, power and mechanical capacity. Inspection and commissioning stages belong in the schedule.",
      "McAze’s verified Woodbridge fast-food project included insulated panels, commercial kitchen equipment, exhaust hood, refrigerated display units, cold-room components and final equipment positioning." ]},
    {eyebrow:"Construction logistics",question:"How are waste, parking and working hours managed in Woodbridge?",paragraphs:[
      "Vaughan construction noise is generally permitted from 7 a.m. to 7 p.m., Monday through Saturday, excluding statutory holidays. Work outside those times can require an exemption.",
      "Bins or materials within the municipal road allowance require approval. Delivery access and driveway protection should be planned so the site does not create avoidable conflicts with neighbours or traffic.",
      "McAze includes staging, protection and waste routes in the project plan rather than leaving logistics to the first demolition day." ]},
    {eyebrow:"Choosing a contractor",question:"How should Woodbridge owners compare renovation proposals?",paragraphs:[
      "Compare identical scopes, materials, exclusions, allowances, permits and cleanup. Commercial owners should also confirm commissioning and equipment responsibilities; homeowners should review occupied-area protection and temporary services.",
      "Ask for real project evidence and clarify the contractor’s role. A large gallery without locations or scope descriptions is not a substitute for verified work.",
      "McAze documents assumptions and changes so price and schedule decisions remain visible throughout construction." ]},
  ],
});

export const maplePageContent = createLocalContent({
  city:"Maple",
  seoDescription:"McAze provides kitchen, bathroom, basement and whole-home renovation services in Maple, Vaughan with permit-aware planning and organized construction.",
  heroCopy:"McAze helps Maple homeowners improve established and newer homes with clear renovation scopes, Vaughan permit awareness and careful occupied-home coordination.",
  image:"/images/site/home-process-planning.webp",
  introQuestion:"How should a renovation reflect Maple’s mix of old and new homes?",
  neighborhoods:"Maple, Patterson, Rural Vaughan, Mackenzie Glen and nearby communities",
  preconstructionQuestion:"How should selections and approvals be organized before renovating in Maple?",
  preconstruction:[
    "The site review identifies whether work is cosmetic, structural, permit-dependent or potentially heritage-sensitive. That classification affects drawings, municipal contact and how confidently demolition can be scheduled.",
    "Cabinet layouts, plumbing fixtures, appliances, tile and flooring should be recorded with dimensions, supply responsibility and lead time. Older and newer Maple homes can have different wall, floor and mechanical conditions, so the product plan must correspond to the inspected property.",
    "McAze confirms scope, allowances, exclusions, access and the first construction stages before mobilization. Outstanding decisions remain on a visible list with dates tied to the schedule.",
  ],
  siteQuestion:"What job-site considerations matter in Maple’s established neighbourhoods?",
  sitePlanning:[
    "Mature landscaping, limited side yards and busy family routines can restrict staging. Protection and material routes should be planned before deliveries, especially when the only path crosses finished stairs or living areas.",
    "Exterior work must account for utilities, grading and heritage context where applicable. Interior work needs dust boundaries, storage and cleanup that keep unaffected rooms usable when the household remains home.",
    "McAze coordinates trade arrival and waste removal so the property is not used as uncontrolled storage throughout the project.",
  ],
  intro:[
    "Maple includes a historic village core, established neighbourhoods, newer subdivisions and growing family areas around major Vaughan corridors. Renovation priorities vary from repairing older assemblies and respecting heritage context to replacing builder-grade finishes or creating more useful space in newer homes.",
    "McAze reviews the house, lot, access and household needs before defining the scope. The plan connects permit questions, product selections, trade order and site protection. It also distinguishes verified conditions from potential risks so homeowners can reserve contingency without paying for imagined work.",
    "This page focuses on the Maple Heritage Conservation District, Vaughan basement and deck requirements, family-focused kitchens, whole-home finish coordination and contractor selection. The content is separate from the broader Vaughan page because Maple’s housing and heritage context deserves specific treatment.",
  ],
  questions:[
    {eyebrow:"Permit planning",question:"Which Maple home improvements should be checked with Vaughan Building Standards?",paragraphs:[
      "Finished basements, additions, structural alterations, new plumbing, changed openings, walkouts and attached or larger decks are common approval triggers. Cosmetic replacements may not require a building permit, but zoning and heritage rules can still apply.",
      "The exact scope and address determine the application. Electrical work follows Electrical Safety Authority inspections, and excavation should be coordinated with utility locating.",
      "McAze identifies permit-sensitive work during scope development so the schedule does not assume approval is automatic."],sourceLink:{label:"Vaughan residential building permits",href:"https://www.vaughan.ca/residential/building-and-construction/building-permits/permit-applications/residential-building-permits"}},
    {eyebrow:"Historic Maple",question:"What should I check before altering a property in the Maple heritage district?",paragraphs:[
      "Vaughan identifies Maple as one of its Heritage Conservation Districts. Work that changes the appearance of a designated property can require heritage review and a permit, including additions, exterior materials, windows, doors, porches, decks and landscaping changes.",
      "Routine maintenance and interior work may follow a simpler route, but owners should confirm before ordering products. Heritage approval does not replace zoning or a building permit.",
      "McAze coordinates construction details with the owner and design team while municipal heritage staff determine the applicable process."],sourceLink:{label:"Vaughan heritage review and permits",href:"https://www.vaughan.ca/residential/building-and-construction/building-permits/cultural-heritage-preservation/heritage-review-permits-and-clearances"}},
    {eyebrow:"Newer family homes",question:"How can a Maple home be personalized without unnecessary demolition?",paragraphs:[
      "Start by identifying functional problems: storage, lighting, circulation, durability or disconnected rooms. Keeping service locations and sound assemblies can direct more budget toward cabinetry, surfaces and details that improve daily use.",
      "Selective demolition requires accurate investigation because walls can contain structure and services even in newer homes. Product dimensions and transitions should be coordinated before removal begins.",
      "McAze develops targeted scopes when a full rebuild is not needed and larger coordinated plans when several rooms and systems should be addressed together." ]},
    {eyebrow:"Basement finishing",question:"How should a Maple basement be planned for family use?",paragraphs:[
      "Define whether the space is for recreation, work, guests, bedrooms or an additional unit. Each use affects layout, exits, plumbing, ventilation and approvals. Mechanical equipment and storage still need service access.",
      "Moisture and foundation conditions should be assessed before insulation and flooring. Ceiling bulkheads should follow real duct and beam locations, not force utilities into poor clearances.",
      "McAze coordinates framing, rough-ins, inspections, drywall and finishes around an approved use plan." ]},
    {eyebrow:"Kitchens and bathrooms",question:"What decisions should Maple homeowners make before demolition?",paragraphs:[
      "Confirm layout, cabinets, appliances, plumbing fixtures, tile and lighting far enough to establish rough-in locations and lead times. An allowance should still identify expected quality and installation responsibility.",
      "Waterproofing, ventilation and substrate repair belong in bathroom scope even though they disappear behind finishes. Kitchen ventilation and electrical capacity should be reviewed with the appliance plan.",
      "McAze records selections and owner-supplied products to prevent gaps between purchasing and installation." ]},
    {eyebrow:"Decks and yards",question:"Does a deck or backyard renovation in Maple need a permit?",paragraphs:[
      "Vaughan provides a limited exemption for certain small, low, unattached uncovered decks, but attached decks and other configurations require permits. Every deck remains subject to zoning.",
      "Grading, drainage, utilities and heritage status can affect exterior work. New hard surfaces should not redirect runoff toward the house or neighbours.",
      "McAze reviews the actual lot and intended structure before confirming the approval and construction route." ]},
    {eyebrow:"Hiring",question:"What should a Maple renovation contract make clear?",paragraphs:[
      "The contract should define scope, materials, allowances, permits, protection, disposal, schedule assumptions, payments, changes and warranty information. Exclusions should be as easy to find as included work.",
      "Ask how occupied areas are protected and who supervises specialized trades. Review relevant verified projects rather than relying on generic imagery.",
      "McAze uses written decisions and staged quality checks to keep responsibility visible from pre-construction through handover." ]},
  ],
});

export const concordPageContent = createLocalContent({
  city:"Concord",
  seoDescription:"McAze provides commercial and residential renovation services in Concord, Vaughan, including interiors, fit-outs, kitchens, bathrooms and general contracting.",
  heroCopy:"McAze coordinates Concord residential and commercial renovations around building use, access, Vaughan approvals and the practical sequence required for a durable result.",
  image:"/images/site/demolition.webp",
  introQuestion:"Why does building use matter so much in a Concord renovation?",
  neighborhoods:"Concord, Glen Shields, Dufferin Hill, Beverley Glen and nearby Vaughan areas",
  preconstructionQuestion:"What information is needed before pricing a Concord commercial or residential renovation?",
  preconstruction:[
    "Commercial clients should provide the existing and proposed use, lease or landlord criteria, equipment list, available services and operational deadline. Residential owners should identify rooms, functional goals, structural changes, product expectations and occupancy needs.",
    "The approval route is then matched to the scope. Drawings, engineering, fire or mechanical information may be needed before a complete price is possible. Owner, landlord, consultant, vendor and contractor responsibilities should be separated explicitly.",
    "McAze prices suitable work against that coordinated basis. This reduces allowances for undefined systems and prevents a cosmetic proposal from being mistaken for a complete operational fit-out.",
  ],
  siteQuestion:"How are active operations, loading and construction access handled in Concord?",
  sitePlanning:[
    "Industrial and plaza properties often control loading doors, waste areas, roof access and working hours. Equipment size must be compared with the delivery route, and shutdowns need approval from the people responsible for the building systems.",
    "Residential areas require a different plan for neighbours, driveway protection and occupied spaces. In either case, exits, fire routes and public circulation cannot become material storage.",
    "McAze establishes staging and access rules during pre-construction and adjusts trade sequencing to the real availability of the site.",
    "Emergency access, fire separations and neighbouring tenant operations remain active constraints throughout the work. These conditions are reviewed at daily coordination points so a delivery or temporary barrier does not create a new building-management problem.",
  ],
  intro:[
    "Concord has a strong mix of industrial, commercial, retail and residential properties. Renovating a detached home, tenant unit, restaurant or light-industrial space involves different code, accessibility, fire, ventilation and operational questions. The existing use and proposed use should be confirmed before a layout or construction budget is treated as final.",
    "McAze begins by identifying landlord requirements, municipal approvals, available services, access and occupancy constraints. Residential work focuses on household function and protection; commercial work also needs to consider customers, employees, equipment, egress and shutdown planning.",
    "This Concord page emphasizes commercial fit-outs and change-of-use awareness alongside residential kitchens, bathrooms and basements. It uses Vaughan municipal sources but does not repeat the residential emphasis of Vaughan, Woodbridge or Maple pages.",
  ],
  questions:[
    {eyebrow:"Project classification",question:"Is a Concord renovation residential, commercial or a change of use?",paragraphs:[
      "The legal use and proposed operation determine many requirements. Converting a unit to a restaurant, clinic or another occupancy can introduce building permits, zoning review, fire protection, accessibility, plumbing and mechanical work beyond a cosmetic fit-out.",
      "A landlord’s approval does not replace City approval, and a building permit does not replace trade inspections or business licensing. The lease should be reviewed for construction responsibilities and restoration clauses.",
      "McAze coordinates the construction scope around confirmed project information and identifies where architects, engineers or specialized consultants are required."],sourceLink:{label:"City of Vaughan permit applications",href:"https://www.vaughan.ca/residential/building-and-construction/building-permits/permit-applications"}},
    {eyebrow:"Commercial planning",question:"What belongs in a Concord commercial fit-out scope?",paragraphs:[
      "The scope can include demolition, partitions, ceilings, doors, finishes, plumbing, electrical, HVAC, fire protection, equipment supports and accessibility work. It should state which items are landlord, tenant, vendor or contractor responsibilities.",
      "Equipment schedules and service requirements need coordination before walls close. Deliveries, shutdowns, inspections and commissioning should appear in the schedule rather than being treated as last-minute events.",
      "McAze organizes suitable commercial projects with written trade interfaces and progress reporting so operational readiness is considered alongside appearance." ]},
    {eyebrow:"Occupied businesses",question:"Can a Concord business remain open during renovation?",paragraphs:[
      "Phasing may be possible when safe exits, fire systems, utilities and separation can be maintained. Dust, noise, customer routes and food or product protection may make closure safer for certain stages.",
      "The plan should define work zones, temporary barriers, deliveries, waste routes and service interruptions. Required inspections cannot be bypassed to preserve operating hours.",
      "McAze reviews operational constraints before scheduling and communicates which stages require restricted access or shutdown." ]},
    {eyebrow:"Residential renovations",question:"How are Concord kitchen, bathroom and basement renovations planned?",paragraphs:[
      "Residential work begins with household use, existing structure and concealed services. Kitchen layouts coordinate cabinetry, appliances and ventilation; bathrooms prioritize waterproofing and drainage; basements begin with moisture, exits and mechanical clearances.",
      "Structural changes, new plumbing, finished basement rooms and openings can require Vaughan permits. Product selections should be confirmed in the order they affect rough-ins.",
      "McAze combines related rooms into one sequence where practical so demolition, trades and finishing do not repeatedly disturb completed areas." ]},
    {eyebrow:"Industrial and equipment work",question:"What should be checked before installing equipment in a Concord unit?",paragraphs:[
      "Confirm weight, anchorage, power, ventilation, drainage, clearances and manufacturer requirements. Equipment may affect structure, fire protection, noise, electrical service or roof penetrations.",
      "Vendor drawings should be coordinated with the building design before rough construction. Final positioning alone does not solve incompatible utilities or access.",
      "McAze reviews suitable installation scopes and coordinates with licensed trades and professional design where required." ]},
    {eyebrow:"Permits and inspections",question:"Who coordinates approvals for a Concord renovation?",paragraphs:[
      "Responsibility should be written into the project documents. The owner, tenant, landlord, designer and contractor may each hold different information or obligations.",
      "Vaughan issues permits for residential, commercial, industrial, demolition, plumbing, HVAC and other work. Electrical and specialized systems can have separate authorities.",
      "McAze tracks construction-related submissions and inspections within the agreed scope while clearly identifying items that remain with the client or consultant." ]},
    {eyebrow:"Proposal review",question:"How should Concord owners compare general contractors?",paragraphs:[
      "Compare scope, exclusions, permits, consultant work, equipment interfaces, shutdowns, protection, disposal and commissioning. A low fit-out price may omit essential base-building or operational work.",
      "Verify experience relevant to the occupancy and ask who coordinates specialized trades. Review insurance and change procedures.",
      "McAze provides a practical sequence and written responsibilities so the proposal can be evaluated as a complete project plan." ]},
  ],
});

export const auroraPageContent = createLocalContent({
  city:"Aurora",
  seoDescription:"McAze provides kitchen, bathroom, basement, deck and whole-home renovation services in Aurora with permit-aware planning and careful construction.",
  heroCopy:"McAze helps Aurora homeowners plan durable interior and exterior renovations around the property, municipal approvals and everyday family use.",
  image:"/images/site/home-service-deck-fence-mcaze.webp",
  introQuestion:"What local conditions should guide an Aurora renovation?",
  neighborhoods:"Aurora, Aurora Heights, Bayview Wellington, Stonehaven and nearby York Region communities",
  preconstructionQuestion:"What should Aurora homeowners complete before construction starts?",
  preconstruction:[
    "Confirm the intended layout, Aurora permit route, zoning or heritage questions and whether drawings are required. The proposal should identify concealed work, finish work, homeowner-supplied products and reasonable contingency for conditions that cannot yet be inspected.",
    "Selections affecting rough-ins and dimensions should be made early. Cabinetry, appliances, valves, tubs, tile and exterior products can have lead times that influence the start sequence. Deck materials should follow an approved design rather than determine it.",
    "McAze reviews readiness before mobilization so permits, orders and trade bookings support the same schedule.",
  ],
  siteQuestion:"How should an Aurora property be protected during interior or exterior work?",
  sitePlanning:[
    "Interior protection follows entrances, stairs and retained rooms. Exterior planning considers driveway loading, landscaping, buried utilities and drainage. Mature lots can require smaller deliveries or more controlled material movement than open construction sites.",
    "Weather affects decks, exterior painting, roofing and open-envelope stages. Temporary protection and realistic seasonal sequencing are part of quality, not optional responses after a forecast changes.",
    "McAze defines storage, waste, cleanup and communication expectations so the property remains organized through each stage.",
    "Seasonal temperature and precipitation also affect exterior coatings, concrete, excavation and open wall conditions. The schedule uses appropriate installation windows instead of treating every exterior material as suitable for any day on the calendar.",
    "Homeowners are informed when weather changes an exterior sequence, what protection remains in place and which interior activities can continue without compromising the planned assembly.",
  ],
  intro:[
    "Aurora includes established neighbourhoods, newer family developments, larger homes and properties near the historic core. Renovation plans can involve interior modernization, basement finishing, decks, additions or repair of aging assemblies. Lot grading, mature landscaping and the relationship to neighbouring homes often matter for exterior work.",
    "McAze reviews the actual house and intended use before developing the scope. The plan connects permits, product decisions, trade sequencing, protection and cleanup. Potential hidden conditions are identified as risks rather than presented as facts without inspection.",
    "The questions below use Town of Aurora guidance for decks and electronic permit applications and address heritage awareness, basements, family spaces and contractor selection. The page is designed for Aurora rather than copied from another York Region municipality.",
  ],
  questions:[
    {eyebrow:"Aurora permits",question:"When should an Aurora renovation be submitted for a building permit?",paragraphs:[
      "Structural alterations, additions, finished basements, plumbing changes, decks above applicable thresholds and other construction can require approval. Aurora provides electronic submission guidance and project-specific application information.",
      "Zoning applies even when a structure is exempt from a building permit. Electrical work follows the Electrical Safety Authority, and conservation or heritage status can add separate review.",
      "McAze identifies approval-sensitive scope and coordinates with qualified designers where drawings or professional information are required."],sourceLink:{label:"Aurora permits and inspections",href:"https://www.aurora.ca/home-and-property/building-and-renovating/applications-permits-and-inspections/"}},
    {eyebrow:"Deck construction",question:"Does my Aurora deck need a permit and inspections?",paragraphs:[
      "Aurora states that decks less than two feet above finished grade do not require a building permit, but they must comply with zoning. Other decks require suitable plans and approval based on their configuration.",
      "Permit information can include a site plan, setbacks, framing, elevations and details. Residential deck projects have inspection stages, including foundation work before backfill and completion.",
      "McAze reviews height, attachment, access, utilities, drainage and intended use before confirming the construction route."],sourceLink:{label:"Town of Aurora deck requirements",href:"https://www.aurora.ca/home-and-property/building-and-renovating/decks/"}},
    {eyebrow:"Older Aurora",question:"What should be assessed in an older Aurora home before renovation?",paragraphs:[
      "Previous alterations, aging wiring or plumbing, settlement, moisture and older materials can affect the work. Investigation and contingency should be proportionate to the scope rather than based on assumptions about age alone.",
      "Structural openings and additions require professional review. Finishes can reveal uneven floors or transitions that should be planned before cabinets and trim are ordered.",
      "McAze records visible conditions and documents discoveries during controlled demolition so changes remain understandable." ]},
    {eyebrow:"Heritage awareness",question:"Could an Aurora exterior renovation require heritage approval?",paragraphs:[
      "Aurora contains designated properties and the Northeast Old Aurora Heritage Conservation District. Alterations or demolition within a designated area can require heritage approval in addition to a building permit.",
      "Owners should confirm status before changing windows, doors, cladding, porches, additions or other visible elements. Materials and design may need to respond to district policies.",
      "McAze can coordinate construction details while Aurora heritage staff determine the process applicable to the address." ]},
    {eyebrow:"Basement and interiors",question:"How should an Aurora basement, kitchen or bathroom renovation be sequenced?",paragraphs:[
      "Basements begin with moisture, exits, stairs and mechanical equipment. Kitchens begin with layout, cabinetry and appliances. Bathrooms begin with waterproofing, drainage and fixture clearances.",
      "Selections must be confirmed before the rough-ins they control. Permit inspections and curing periods should remain visible in the schedule.",
      "McAze sequences demolition, repairs, concealed work and finishes so completed areas are protected from later heavy work." ]},
    {eyebrow:"Additions",question:"What should Aurora homeowners confirm before designing an addition?",paragraphs:[
      "Zoning feasibility, setbacks, lot coverage, grading and service capacity shape what can be built. The connection between new and existing foundations, roofs and walls requires design and engineering information.",
      "A finish budget is premature until the buildable footprint and structural route are understood. Exterior water management and landscaping impacts should be considered with the design.",
      "McAze coordinates construction pricing and sequencing around approved information rather than an unverified concept sketch." ]},
    {eyebrow:"Contractor choice",question:"How do I compare renovation contractors in Aurora?",paragraphs:[
      "Compare written scope, allowances, exclusions, permit responsibility, protection, disposal and changes. Confirm insurance and who manages specialized trades.",
      "Ask for verified relevant projects and an explanation of the proposed sequence. A short completion promise should be supported by selections, lead times and approval status.",
      "McAze keeps assumptions and homeowner decisions visible so the contract provides a practical basis for construction." ]},
  ],
});

export const newmarketPageContent = createLocalContent({
  city:"Newmarket",
  seoDescription:"McAze provides kitchen, bathroom, basement, deck and complete home renovation services in Newmarket with organized scopes and permit-aware planning.",
  heroCopy:"McAze supports Newmarket homeowners with practical renovation planning for family homes, basements, interiors, decks and larger improvements.",
  image:"/images/site/home-process-consultation.webp",
  introQuestion:"How should a Newmarket renovation move from idea to construction?",
  neighborhoods:"Newmarket, Stonehaven, Glenway Estates, Summerhill Estates and nearby communities",
  preconstructionQuestion:"How do Newmarket homeowners know a renovation is ready to start?",
  preconstruction:[
    "A ready project has a defined scope, a confirmed permit or zoning route, realistic selections and a clear understanding of who supplies each product. Structural questions and additional-unit requirements should be resolved through suitable drawings before demolition depends on them.",
    "Lead times, access and household needs are converted into a sequence. A cabinet or window delivery date should be confirmed against field dimensions, while permit inspections and drying periods remain part of the active schedule.",
    "McAze reviews outstanding approvals, selections and site preparations before setting the mobilization plan. This is more reliable than choosing a date first and hoping required information catches up.",
  ],
  siteQuestion:"What site logistics affect renovation work in Newmarket neighbourhoods?",
  sitePlanning:[
    "Driveway space, on-street parking, side-yard access and neighbour proximity influence deliveries and waste removal. Deck and addition projects also need a safe route around excavations and located underground utilities.",
    "For occupied interiors, the plan defines floor protection, dust separation, storage, daily cleanup and notice of utility interruptions. Pets and children require a dependable boundary between living and construction areas.",
    "McAze coordinates these logistics with the work sequence so access limitations do not repeatedly interrupt trades or damage finished areas.",
  ],
  intro:[
    "Newmarket includes historic and established neighbourhoods, growing family communities, townhouses and larger detached homes. Projects may range from a focused bathroom or basement finish to additions, structural changes and exterior improvements. The municipality’s permit, zoning and conservation context should be checked before a start date is promised.",
    "McAze translates the homeowner’s goals into a scope that identifies approvals, trade dependencies, materials, protection and handover. The plan begins with how the space should function and the visible condition of the building, then adds finish decisions in the order they affect construction.",
    "This page focuses on Newmarket building permits, zoning preliminary review, additional residential units, decks, windows and doors, family-home scheduling and contractor comparison. It links to Town guidance rather than borrowing requirements from another municipality.",
  ],
  questions:[
    {eyebrow:"Newmarket permits",question:"Which Newmarket home renovations require a building permit?",paragraphs:[
      "The Town identifies additions, walls added or removed, basement walkouts, finished basements, enlarged openings, structural alterations, plumbing or HVAC changes and additional residential units among work that can require permits. Attached, larger or raised decks also have permit triggers.",
      "Replacing same-size doors and windows, painting, some repairs and certain small unattached structures are typically listed as permit-exempt. Zoning and other approvals can still apply.",
      "McAze reviews the proposed scope and coordinates construction information with qualified designers and the Town’s requirements before scheduling permit-dependent work."],sourceLink:{label:"Town of Newmarket building and renovating",href:"https://www.newmarket.ca/LivingHere/Pages/Building-and-Renovating.aspx"}},
    {eyebrow:"Zoning review",question:"When is a Newmarket Zoning Preliminary Review useful?",paragraphs:[
      "A Zoning Preliminary Review assesses a proposal against applicable zoning before the building permit route is finalized. It can clarify setbacks, lot coverage, height and other property controls that affect additions or exterior structures.",
      "The review is separate from a building permit and does not authorize construction. Conservation authority or heritage considerations may also apply to the property.",
      "For a larger project, resolving zoning feasibility before detailed construction pricing reduces redesign and gives the homeowner a more reliable basis for decisions." ]},
    {eyebrow:"Additional units",question:"How should an additional residential unit be planned in Newmarket?",paragraphs:[
      "An additional unit requires more than adding a kitchen. The plan must coordinate zoning, building permit, exits, fire separation, alarms, ventilation, plumbing, electrical work and the relationship to the primary dwelling.",
      "Basement moisture, ceiling height, stairs, windows and mechanical equipment should be assessed before a layout is treated as final. A new exterior entrance can add structural and grading work.",
      "McAze coordinates suitable construction scopes with approved drawings and licensed trades while the Town determines compliance for the address." ]},
    {eyebrow:"Decks and yards",question:"Does a Newmarket deck need a building permit?",paragraphs:[
      "Newmarket requires a permit for decks attached to a building and identifies other triggers based on area and height. A deck can still need to meet zoning setbacks when a building permit is not required.",
      "Planning should include footings, attachment, guards, stairs, utilities, drainage and access. Exterior work should not redirect runoff or damage municipal or neighbouring property.",
      "McAze reviews the site and intended deck before confirming plans, approvals and material quantities." ]},
    {eyebrow:"Windows and doors",question:"When does replacing a Newmarket window or door require more planning?",paragraphs:[
      "Same-size replacement is different from enlarging or creating an opening. Structural support, exterior cladding, flashing, insulation and interior repair all change when the rough opening changes.",
      "Newmarket lists new or enlarged windows and doors among permit-relevant work. Heritage status can add review for visible changes.",
      "McAze coordinates opening preparation, alignment, water management, air sealing and finishing so the installation is treated as part of the wall assembly." ]},
    {eyebrow:"Interior renovations",question:"How can a Newmarket kitchen, bathroom or basement project avoid rework?",paragraphs:[
      "Confirm layouts and products before rough-ins. Cabinet drawings, appliances, plumbing fixtures, tile thickness and lighting locations influence concealed work and finished transitions.",
      "Complete repairs and inspections before surfaces conceal them. Waterproofing and substrate preparation should not be shortened to recover time lost to late selections.",
      "McAze sequences work by dependency and records owner-supplied items, allowances and approvals." ]},
    {eyebrow:"Hiring",question:"What should a Newmarket homeowner expect in a renovation proposal?",paragraphs:[
      "Expect a defined scope, material responsibilities, allowances, exclusions, permit responsibilities, protection, disposal, payment milestones and a change-order process. The proposal should explain important schedule assumptions.",
      "Verify insurance and ask for relevant project evidence. Discuss how occupied rooms, pets, parking and daily cleanup will be managed.",
      "McAze uses the site review to create a practical construction route and keeps decisions visible through the final walkthrough." ]},
  ],
});

export const barriePageContent = createLocalContent({
  city:"Barrie",
  seoDescription:"McAze provides home renovation and construction services in Barrie, including basements, kitchens, bathrooms, additions, structural work and ICF foundations.",
  heroCopy:"McAze supports Barrie renovation and residential construction projects with organized scopes for interiors, basements, additions, structural work and site-sensitive construction.",
  image:"/images/portfolio/barrie-icf-foundation/icf-home-foundation-barrie-ontario-01.webp",
  introQuestion:"How should Barrie site conditions influence renovation and construction planning?",
  neighborhoods:"Barrie, South Barrie, Ardagh, Holly, Painswick and nearby Simcoe County communities",
  projectSlugs:["icf-home-foundation-barrie"],
  intro:[
    "Barrie projects can range from renovations in established in-town homes to additions, basement conversions and new construction on wooded or sloped properties. Access, changing grade, drainage, winter weather and distance between suppliers or specialized trades can influence the schedule as much as the room design.",
    "McAze reviews the existing building, intended use and physical site before defining the construction sequence. An interior renovation needs protection and service coordination; foundation or exterior work also needs excavation access, material staging, temporary support and weather planning.",
    "This page uses City of Barrie permit and additional residential unit guidance and connects to McAze’s verified Barrie ICF foundation project. Requirements are confirmed for the property because zoning, conservation and servicing conditions differ by address.",
  ],
  preconstructionQuestion:"What should be ready before a Barrie renovation or construction start date is confirmed?",
  preconstruction:[
    "The proposed use, drawings and permit route should be matched to the property before field dates depend on them. Structural work, finished basements, additions and additional units require more information than a cosmetic room update.",
    "Selections and long-lead materials should be coordinated with verified dimensions. For site work, equipment access, excavation limits, concrete scheduling and weather protection must be included with product procurement.",
    "McAze reviews scope, approvals, responsibilities, allowances and the first work sequence before mobilization so the start date corresponds to real project readiness.",
  ],
  siteQuestion:"How are access, weather and material staging managed on Barrie projects?",
  sitePlanning:[
    "Larger or wooded lots can still have restricted construction access once excavation, trees and grade are considered. Delivery routes, soil or waste storage and safe movement around open work should be planned before equipment arrives.",
    "Barrie weather can affect concrete, excavation, exterior coatings and open-envelope stages. Temporary protection and seasonal installation requirements belong in the schedule rather than being treated as emergency extras.",
    "For occupied interiors, McAze defines protected routes, dust boundaries, storage and cleanup. For exterior and structural scopes, daily coordination also checks temporary support, drainage and site housekeeping.",
  ],
  questions:[
    {eyebrow:"Barrie permits",question:"Which Barrie renovation and construction projects require a building permit?",paragraphs:[
      "Barrie states that construction involving modifications, alterations or new structural components requires a building permit. Residential resources cover plumbing, HVAC, additions and alterations, basements, decks, porches and balconies.",
      "The proposed scope may also need zoning or other applicable-law review. Electrical work follows Electrical Safety Authority requirements, and conservation or site-servicing considerations can be separate from the building permit.",
      "McAze identifies approval-sensitive work during scope development and coordinates construction information with qualified designers and engineers where required."],sourceLink:{label:"City of Barrie residential permits",href:"https://www.barrie.ca/planning-building-infrastructure/building-renovating/permits/residential-permits"}},
    {eyebrow:"Basements and units",question:"What should be checked before finishing a basement or creating an additional unit in Barrie?",paragraphs:[
      "Moisture, ceiling height, windows, stairs, exits and mechanical equipment come before the finish plan. The intended rooms and any new plumbing determine the drawings and concealed work needed.",
      "An additional residential unit requires a coordinated plan for zoning, parking, entrances, fire safety, alarms, ventilation and services. Barrie provides separate checklists for units within a main house and detached additional dwellings.",
      "McAze reviews the visible shell and proposed use before insulation, framing, flooring or cabinetry decisions are finalized."],sourceLink:{label:"City of Barrie additional residential units",href:"https://www.barrie.ca/planning-building-infrastructure/development/additional-residential-units"}},
    {eyebrow:"Foundations and structure",question:"What makes foundation and structural planning different on a Barrie property?",paragraphs:[
      "Foundation work connects survey and layout information with excavation, bearing conditions, drainage, reinforcement, concrete and the structure above. Sloped or wooded terrain can restrict access and create different grades around the building.",
      "Temporary bracing and inspection points are essential before concrete or finishes conceal work. Engineering requirements must be followed rather than copied from another property.",
      "McAze’s verified Barrie project documents ICF wall layout, reinforcement, openings, alignment and concrete-pour preparation on an uneven wooded site." ]},
    {eyebrow:"Interior renovations",question:"How should kitchens, bathrooms and flooring be coordinated in a Barrie home?",paragraphs:[
      "Kitchen cabinetry, appliances and ventilation determine rough-in locations. Bathroom waterproofing, drainage and fixture dimensions determine wall and floor preparation. Flooring thickness affects doors, stairs and transitions.",
      "Selections should be confirmed in the order they affect concealed work and lead times. A material allowance still needs an expected category and installation responsibility.",
      "McAze sequences demolition, repair, rough-ins, inspections, installation and finishing so completed surfaces are not repeatedly disturbed." ]},
    {eyebrow:"Additions",question:"What should be resolved before pricing a Barrie home addition?",paragraphs:[
      "Zoning feasibility, setbacks, lot coverage, grading and utility capacity shape the buildable design. Foundation, roof and exterior-wall connections require professional information before a dependable construction scope can be prepared.",
      "The budget should separate structure and enclosure from interior finishes and identify services that may need upgrades. Exterior drainage and restoration are part of the addition, not optional landscaping afterthoughts.",
      "McAze coordinates suitable construction pricing with approved drawings and an achievable sequence." ]},
    {eyebrow:"Occupied homes",question:"Can a Barrie family remain home during renovation?",paragraphs:[
      "Focused work may be separated with controlled access, but widespread demolition, loss of the only kitchen or bathroom, structural openings and major utility interruptions can make relocation safer.",
      "The plan should define floor protection, dust barriers, tool storage, debris routes, cleanup and notice of water or power shutdowns. Pets and children require a dependable work-zone boundary.",
      "McAze reduces avoidable disruption while communicating honestly about stages that cannot safely coexist with normal household use." ]},
    {eyebrow:"Contractor selection",question:"How should Barrie owners compare renovation and construction proposals?",paragraphs:[
      "Compare scope, drawings, permits, materials, allowances, exclusions, site logistics, disposal and changes. A project with significant site or structural work cannot be evaluated from a finish-only price.",
      "Verify insurance and relevant project evidence. Ask who manages specialized trades, inspections and concealed-condition decisions.",
      "McAze provides documented responsibilities and a practical sequence so the homeowner can compare the complete route rather than a headline total." ]},
  ],
});

export const torontoPageContent = createLocalContent({
  city:"Toronto",
  seoDescription:"McAze provides home and commercial renovation services in Toronto, including kitchens, bathrooms, basements, interiors and coordinated construction projects.",
  heroCopy:"McAze plans Toronto renovations around older-building conditions, urban access, permits, neighbours and the trade sequence needed for a durable finished space.",
  image:"/images/site/homepage-hero-mcaze-team.webp",
  introQuestion:"What makes a Toronto renovation logistically and technically different?",
  neighborhoods:"Toronto, Midtown, Leslieville, The Beaches, High Park and nearby city neighbourhoods",
  projectSlugs:["temporary-site-management-offices-competition-venues-toronto","temporary-competition-venue-seating-toronto"],
  intro:[
    "Toronto renovations often combine older construction with tight access, limited parking, close neighbours and municipal permit requirements. Condominiums add property-management rules; houses can reveal previous alterations, aging services and concealed materials. These conditions affect cost and schedule before a finish is selected.",
    "McAze begins with the address, building type, proposed work and access route. The scope identifies permits, professional design, specialized trades, protection, waste movement and decisions that control rough construction. A downtown condominium, semi-detached house and commercial venue are not priced or sequenced as variations of one generic package.",
    "This page focuses on Toronto Building requirements, older-home and basement planning, condo logistics, neighbour impact and verified Toronto commercial infrastructure work. North York retains its own dedicated page because its local search intent and documented condo project are distinct.",
  ],
  preconstructionQuestion:"What must be completed before a Toronto renovation is ready to start?",
  preconstruction:[
    "Confirm whether the work needs a Toronto building permit, zoning review, heritage approval, arborist information or condominium authorization. Structural, plumbing, mechanical and enlarged-opening work should be reflected in suitable drawings before demolition is scheduled.",
    "Selections and lead times are then coordinated with access. Cabinets, stone, large glass and equipment must fit the delivery route, while bins, street occupancy or elevator use can need separate arrangements.",
    "McAze reviews scope, approvals, procurement, neighbours and the first trade sequence before mobilization. Outstanding client decisions remain tied to dates that show their schedule effect.",
  ],
  siteQuestion:"How are access, neighbours and retained spaces protected on a Toronto project?",
  sitePlanning:[
    "Narrow drives, permit parking, shared walkways and common corridors limit staging. Deliveries and waste removal should be sized to the real route, and fire exits or public sidewalks cannot become storage.",
    "Dust and noise require separation from occupants and neighbours. Floor protection, temporary barriers, negative-air or dust-control methods where appropriate and daily cleanup are planned around the specific work.",
    "McAze communicates shutdowns and noisy stages and coordinates material movement to reduce avoidable conflict. Urban logistics remain part of the construction schedule rather than an informal daily improvisation.",
  ],
  questions:[
    {eyebrow:"Toronto permits",question:"Which Toronto home renovations generally need a building permit?",paragraphs:[
      "Toronto’s permit guide identifies basement finishes, secondary suites, altered plumbing or mechanical systems, new or enlarged openings, additions, exterior basement entrances and raised decks among work that generally requires approval.",
      "A cosmetic description does not remove the requirement when concealed systems or structure change. Electrical work follows Electrical Safety Authority inspections, and zoning or heritage approvals may apply separately.",
      "McAze reviews permit triggers and coordinates the construction scope with qualified design information where required."],sourceLink:{label:"City of Toronto building permit guide",href:"https://www.toronto.ca/wp-content/uploads/2017/11/9273-Building-Permit-Guide-WEB.pdf"}},
    {eyebrow:"Older houses",question:"What hidden conditions should be considered in an older Toronto home?",paragraphs:[
      "Previous alterations, aging drains or wiring, uneven framing, moisture and hazardous materials can affect the work. These are risks to investigate, not defects to claim without evidence.",
      "Structural openings and underpinning require professional design. Materials that may contain asbestos or other designated substances should be assessed before disturbance.",
      "McAze documents visible conditions and uses controlled investigation and written changes when demolition reveals a different basis." ]},
    {eyebrow:"Basements and housing",question:"How should a Toronto basement or additional unit be planned?",paragraphs:[
      "Moisture, ceiling height, exits, stairs, windows, drains and mechanical equipment come before finishes. A secondary suite or multiplex conversion adds zoning, fire, acoustic and service considerations.",
      "Exterior entrances, underpinning and enlarged openings introduce structural, excavation and neighbour risks. Approved drawings should establish the route before pricing assumes a final layout.",
      "McAze coordinates suitable construction work with designers and licensed trades while Toronto determines approvals for the property." ]},
    {eyebrow:"Condos",question:"What approvals and logistics apply to a Toronto condo renovation?",paragraphs:[
      "The corporation can require drawings, insurance, deposits, working hours, acoustic specifications, elevator bookings and approval for plumbing or electrical shutdowns. These private rules apply in addition to municipal permits.",
      "Materials must fit the elevator and protected route. Debris removal, water shutdowns and deliveries need reservations that a contractor cannot bypass.",
      "McAze includes management-controlled access in the schedule and clarifies client, building and contractor responsibilities before work starts." ]},
    {eyebrow:"Kitchens and bathrooms",question:"How can a Toronto kitchen or bathroom renovation avoid expensive rework?",paragraphs:[
      "Confirm layouts, cabinetry, appliances, valves, fixtures, tile and lighting before rough-ins. In older buildings, verify service locations and capacity rather than assuming a showroom plan can be connected directly.",
      "Waterproofing, ventilation and substrate repair belong in the scope even though they disappear. Product dimensions and lead times should be confirmed before demolition.",
      "McAze sequences concealed work, inspections and finishes around coordinated selections and actual building access." ]},
    {eyebrow:"Commercial and event work",question:"Can McAze coordinate commercial or temporary infrastructure projects in Toronto?",paragraphs:[
      "McAze reviews suitable commercial and event-infrastructure scopes involving modular buildings, temporary seating, washrooms, electrical, HVAC and associated installation. These projects require different engineering, safety and commissioning information from residential renovation.",
      "Venue access, public circulation, temporary structures, equipment and handover deadlines must be coordinated around operations. Specialized approvals and professional responsibilities are identified in the project documents.",
      "Verified Toronto competition-venue projects are linked below as evidence of completed modular-office and temporary-seating work." ]},
    {eyebrow:"Hiring",question:"How should Toronto owners compare renovation contractors?",paragraphs:[
      "Compare detailed scope, permits, consultant responsibility, access, protection, disposal, allowances, exclusions and changes. A lower total may simply omit urban logistics or concealed work.",
      "Verify insurance and project evidence relevant to the building type. Ask how neighbours, common areas and site notices will be managed.",
      "McAze explains the proposed sequence and records assumptions so the owner can compare a complete project route." ]},
  ],
});

export const mississaugaPageContent = createLocalContent({
  city:"Mississauga",
  seoDescription:"McAze provides home and commercial renovation services in Mississauga, including kitchens, bathrooms, basements, doors, windows and coordinated interiors.",
  heroCopy:"McAze plans Mississauga residential and commercial renovations around permits, property type, access and the concealed work required for a durable finish.",
  image:"/images/site/contractor-tablet.webp",
  introQuestion:"How should Mississauga property type shape the renovation plan?",
  neighborhoods:"Mississauga, Port Credit, Streetsville, Erin Mills, Cooksville and nearby Peel Region communities",
  projectSlugs:["commercial-door-window-replacement-mississauga"],
  intro:[
    "Mississauga includes detached homes, townhouses, condominiums, rental properties and commercial units. Established neighbourhoods and heritage properties present different constraints from newer subdivisions or plaza spaces. The correct plan begins with building use, municipal approvals and access—not a city-wide renovation package.",
    "McAze reviews the existing construction, intended changes and how the property must function during work. Residential scopes emphasize household protection and selections; commercial projects also coordinate landlord requirements, accessibility, fire safety, equipment and operational shutdowns.",
    "This page uses Mississauga permit, additional-unit and heritage guidance and connects to McAze’s verified commercial door and window project. It focuses on local questions that differ from Vaughan, Markham and Toronto pages.",
  ],
  preconstructionQuestion:"What should be confirmed before scheduling a Mississauga renovation?",
  preconstruction:[
    "Identify permit-sensitive work, zoning or heritage status, condominium or landlord approvals and design responsibilities. Basement entrances, additional units, structural changes, new openings and commercial use changes require early review.",
    "Cabinetry, windows, doors, plumbing fixtures, tile and equipment should be coordinated with field dimensions and lead times. The project list should show owner-supplied, allowance and contractor-supplied items separately.",
    "McAze confirms scope, approvals, procurement, access and the first trade sequence before mobilization so the proposed date corresponds to actual readiness.",
  ],
  siteQuestion:"How are deliveries, occupied areas and common property managed in Mississauga?",
  sitePlanning:[
    "Condominiums and plazas can restrict working hours, loading, elevators and waste disposal. Detached homes may have more space but still need driveway protection, neighbour awareness and controlled storage.",
    "Dust boundaries, floor protection and daily cleanup follow the route to the work zone. Water, power or access interruptions are scheduled with the household, building management or commercial operator.",
    "McAze includes these logistics in trade planning because a site that cannot receive materials or protect retained areas cannot maintain a reliable production sequence.",
  ],
  questions:[
    {eyebrow:"Mississauga permits",question:"Which Mississauga renovation projects require a building permit?",paragraphs:[
      "Mississauga lists finished basements, basement apartments, walkouts, new or enlarged openings, interior alterations, relocated plumbing, changed HVAC, higher decks and changes of use among common permit-required projects.",
      "Same-size replacements, cabinetry, painting and certain low structures are generally listed as permit-exempt, but zoning, heritage and other approvals can still apply.",
      "McAze reviews the proposed work against the address and coordinates construction information with qualified professionals when required."],sourceLink:{label:"City of Mississauga permit requirements",href:"https://www.mississauga.ca/services-and-programs/building-and-renovating/building-permits/when-a-building-permit-is-required/"}},
    {eyebrow:"Additional units",question:"What is required for a basement apartment or additional unit in Mississauga?",paragraphs:[
      "A self-contained second unit must meet Building Code, Fire Code and zoning requirements and be registered with the City. Existing units without signed-off permits may need a permit and inspections before registration.",
      "Drawings can include site statistics, room uses, walls, structure, alarms, plumbing, HVAC, doors, windows and exterior changes. A basement entrance has property-specific zoning provisions.",
      "McAze coordinates suitable construction scope with approved information while the City determines registration and compliance."],sourceLink:{label:"Mississauga second-unit registration",href:"https://www.mississauga.ca/services-and-programs/building-and-renovating/registering-a-second-unit/"}},
    {eyebrow:"Heritage properties",question:"When does a Mississauga renovation need heritage approval?",paragraphs:[
      "Most renovation, construction or demolition projects on heritage properties require City review. Window and door changes, roofing materials, facades, masonry, additions and visible mechanical equipment can trigger approval.",
      "Homeowners should confirm designation before ordering exterior products. Heritage approval is separate from building permits, zoning and conservation authority requirements.",
      "McAze can provide construction and material information while Mississauga heritage staff determine the required process."],sourceLink:{label:"Mississauga heritage approval guidance",href:"https://www.mississauga.ca/services-and-programs/building-and-renovating/heritage-properties/when-heritage-approval-is-required/"}},
    {eyebrow:"Doors and windows",question:"What makes commercial door and window replacement a coordinated Mississauga project?",paragraphs:[
      "Commercial entrances connect frame condition, glass, hardware, closers, security, weather sealing, accessibility and business access. Removing a component can expose deterioration that must be addressed before the replacement is aligned.",
      "New or enlarged openings need different permit and structural review from same-size replacement. Landlord or property-management approval can apply regardless of municipal permit status.",
      "McAze’s verified Mississauga project documents glass-door replacement, frame preparation, security-gate installation, closer hardware, sealing and final inspection." ]},
    {eyebrow:"Residential interiors",question:"How should Mississauga kitchen, bathroom and basement work be sequenced?",paragraphs:[
      "Kitchens begin with cabinets and appliances, bathrooms with waterproofing and fixture clearances, and basements with moisture, exits and mechanical access. These plans meet where flooring, electrical, plumbing and trim run through several rooms.",
      "Selections should be made before the rough-ins they control. Permit inspections and drying periods remain in the schedule instead of being compressed to recover late decisions.",
      "McAze coordinates related rooms in one sequence where practical and protects completed surfaces from later heavy work." ]},
    {eyebrow:"Commercial interiors",question:"What should a Mississauga commercial renovation proposal include?",paragraphs:[
      "The scope should define existing and proposed use, landlord criteria, demolition, partitions, ceilings, doors, finishes, plumbing, electrical, HVAC, fire protection and accessibility work.",
      "Equipment, shutdowns, inspections and commissioning need named responsibility. Operational deadlines should be tested against approvals and lead times.",
      "McAze reviews suitable commercial projects and identifies trade and consultant interfaces before work starts." ]},
    {eyebrow:"Hiring",question:"How should Mississauga owners compare renovation contractors?",paragraphs:[
      "Compare scope, exclusions, allowances, permits, landlord or condo requirements, protection, disposal and changes. Confirm insurance and who supervises specialized trades.",
      "Use verified local evidence relevant to the building type. A commercial door project demonstrates different capability from a full residential addition.",
      "Ask how discoveries behind walls, delayed selections and inspection comments will be documented. A useful proposal also explains payment milestones, warranty boundaries, cleanup expectations and the process for approving changes before extra work proceeds.",
      "McAze documents the proposed route so price and schedule can be evaluated against visible responsibilities. The goal is a comparison based on the same deliverables, assumptions and site constraints—not only the lowest initial number." ]},
  ],
});
