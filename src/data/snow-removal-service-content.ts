import type { Service } from "@/lib/types";

export const snowRemovalServiceContent: NonNullable<Service["pageContent"]> = {
  heroEyebrow: "Snow Removal in Toronto & the GTA",
  heroCopy:
    "McAze provides planned residential and light-commercial snow clearing for driveways, walkways, steps, entrances and agreed access areas across suitable Toronto and GTA properties.",
  introQuestion: "What should property owners know before arranging snow removal?",
  intro: [
    "Snow removal is an access and safety service, not simply a matter of making a driveway look tidy. The right plan identifies which surfaces must remain usable, where snow can be stored, how ice will be managed and when the crew can safely begin. A narrow urban driveway, a corner-lot sidewalk and a small commercial entrance each require a different approach.",
    "McAze supports suitable homes, rental properties and light-commercial sites across Toronto and the Greater Toronto Area. Service can be arranged around defined areas such as driveways, private walks, steps, ramps, entrances and parking access. The exact response depends on the property, storm conditions, accumulation, travel safety and the written service agreement.",
    "The questions below address the issues owners commonly research before winter: pricing, seasonal agreements, trigger depths, timing, de-icing, snow storage and municipal responsibilities. Clear expectations matter because a winter plan must still work during a prolonged storm, overnight freeze or large accumulation.",
  ],
  questions: [
    {
      eyebrow: "Service pricing",
      question: "How much does snow removal cost in Toronto?",
      paragraphs: [
        "There is no responsible universal price for snow removal. A short single-car driveway with nearby snow storage is different from a corner property with long walks, stairs, parking spaces and repeated service needs. Pricing can be per visit, per event, monthly or seasonal, depending on the agreement and the property.",
        "Important factors include the area and shape of the surfaces, manual or machine access, slope, parked vehicles, snow-storage space, service trigger, response expectations, return visits, de-icing materials and the length of the winter term. Large storms may require more than one visit or special handling where ordinary storage areas become full.",
        "McAze reviews the property and defines the included areas before quoting. Owners should compare the same trigger, service window, return-visit policy, ice treatment and exclusions. A low price that does not define these items can create confusion during the first significant storm.",
      ],
      bullets: ["Driveway and parking area size", "Walkways, stairs, ramps and entrances", "Machine access and manual clearing", "Snow storage limitations", "Per-visit or seasonal service", "De-icing and return visits", "Residential or commercial access needs"],
    },
    {
      eyebrow: "Service agreements",
      question: "Is seasonal snow removal better than paying per visit?",
      paragraphs: [
        "A seasonal agreement gives the property a defined service plan for the contract period and can make budgeting easier. It suits owners who want recurring coverage without arranging help after every forecast. A per-visit arrangement can suit occasional needs, but availability during widespread storms may be more limited.",
        "The contract should state the accumulation trigger, covered surfaces, approximate response framework, treatment of continuous snowfall, return visits, ice management, snow relocation and events outside the normal assumptions. Seasonal does not mean every flurry automatically produces the same operation; the written trigger and conditions control the response.",
        "McAze confirms the service format and property priorities before the winter plan is accepted. Owners should keep contact details current and disclose access changes, construction, tenants, gates or parked vehicles that could affect safe service.",
      ],
    },
    {
      eyebrow: "Timing",
      question: "How quickly is snow cleared after a storm?",
      paragraphs: [
        "Response time depends on when the agreed trigger is reached, whether snow is still falling, storm duration, road conditions and the established service route. A short snowfall may be handled once after it ends, while a long or heavy event can require staged visits to keep priority access manageable.",
        "It is more accurate to use a documented response framework than promise an exact minute for every storm. Municipal plows can create a new driveway windrow after private clearing, and freezing rain may require treatment different from ordinary snow. Extreme conditions can slow all road users, including service crews.",
        "McAze prioritizes safe, route-based operations and communicates material service changes when practical. Customers should identify medical, accessibility, delivery or business-opening needs early so the suitability of the requested service can be assessed before winter.",
      ],
    },
    {
      eyebrow: "Toronto responsibilities",
      question: "Who is responsible for clearing snow from private property in Toronto?",
      paragraphs: [
        "The City of Toronto states that property owners are responsible for clearing snow and ice from private property, including driveways, parking spaces, steps, ramps and landings, within 24 hours after snowfall ends so people and vehicles have safe access. Public-sidewalk responsibilities vary with accumulation and current City operations.",
        "Toronto currently reports City clearing for public sidewalks when snowfall reaches at least two centimetres. For lower accumulation, residents and businesses are directed to clear adjacent sidewalks within 12 hours after the snowfall ends. Rules and service levels can change, so owners should review the current City page for their situation.",
        "A private contractor helps perform an agreed scope but does not transfer every legal or property-management responsibility away from the owner. The owner should monitor conditions between visits, report hazards and make separate arrangements for areas that are outside the contract.",
      ],
      sourceLink: { label: "Review Toronto's current sidewalk and private-property clearing guidance", href: "https://www.toronto.ca/services-payments/streets-parking-transportation/road-maintenance/winter-maintenance/clearing-snow-and-ice-from-your-property/" },
    },
    {
      eyebrow: "Service scope",
      question: "What areas can a snow removal service clear?",
      paragraphs: [
        "A residential scope can include a driveway, private walkway, front steps, side entrance, ramp, landing and a defined route to waste bins or utility equipment. A light-commercial scope may include staff and customer entrances, short walks, limited parking access and loading or service routes where the equipment and site conditions are suitable.",
        "Every included surface should be identified before the first storm. Public roads, broad parking lots, roofs, neighbouring property and inaccessible or unsafe areas are not assumed to be included. Fire hydrants, catch basins and emergency exits should remain visible and accessible, but responsibilities must be clearly assigned.",
        "McAze documents the agreed service zones and any special instructions. Photos or a simple site plan can prevent uncertainty after fresh snow hides curbs, landscape edges, drains and changes in elevation.",
      ],
    },
    {
      eyebrow: "Snow storage",
      question: "Where should cleared snow be placed?",
      paragraphs: [
        "Snow should be stored in an agreed area on the property where it will not block sightlines, drains, walkways, entrances, accessible routes or neighbouring access. The storage plan must also consider what happens after several storms, when piles become larger and denser.",
        "Toronto advises that residents must not push snow from private property onto sidewalks, roads or bike lanes. Doing so creates hazards and can result in enforcement. Snow should also be kept away from building vents and equipment where accumulation could interfere with operation.",
        "McAze reviews practical storage areas during setup. Where a site lacks capacity, relocation or off-site hauling is a different service and must be expressly arranged rather than assumed within ordinary plowing or shovelling.",
      ],
    },
    {
      eyebrow: "Ice control",
      question: "Does snow removal include salting or de-icing?",
      paragraphs: [
        "Snow clearing and ice treatment are related but separate operations. Mechanical or manual clearing removes accumulation, while an appropriate de-icer can help manage bonded ice and refreezing under suitable conditions. The material, application rate, surface type and temperature all affect performance.",
        "No product makes every winter surface risk-free. Meltwater can refreeze, drifting can cover a cleared route and freezing rain can create new hazards after a visit. Some products can affect concrete, masonry, metal, vegetation or pets, so property priorities should be discussed before the treatment plan is chosen.",
        "The written scope should say whether de-icing is included, optional or billed separately. Owners and site managers should continue inspecting high-traffic areas and report changing conditions rather than assuming one application will last through the entire event.",
      ],
    },
    {
      eyebrow: "Equipment and surfaces",
      question: "Can snow removal equipment damage driveways or landscaping?",
      paragraphs: [
        "Any snow-clearing method interacts with the surface beneath it. Raised pavers, loose gravel, cracked asphalt, decorative borders, low lighting and hidden landscape features can be damaged when covered by snow. Metal blades, snow blowers and hand tools each have different limitations.",
        "Pre-season inspection and visible markers help identify curbs, edges, steps, drains and delicate features. Vehicles, hoses, cords, toys and temporary objects should be removed from service areas. The owner should disclose known damage or unusual surfaces before equipment is used.",
        "McAze selects the method according to access and observed conditions, but hidden or deteriorated components remain a risk. Documenting the property before winter gives both parties a clearer reference and supports a more careful operating plan.",
      ],
    },
    {
      eyebrow: "Driveway windrows",
      question: "Will the driveway be cleared again after the City plow passes?",
      paragraphs: [
        "A municipal plow can leave a dense ridge, called a windrow, across a driveway after private clearing has already occurred. Whether a return visit is included depends on the agreement, the accumulation and route logistics. It should not be assumed unless the contract explains it.",
        "Toronto provides windrow-opening service at some eligible residential properties when conditions and operating thresholds are met, but availability and timing vary. Private owners may still need a plan for access before municipal operations are complete.",
        "McAze explains the applicable return-visit approach for the selected service. Customers should avoid pushing the windrow back onto the road and should communicate urgent access concerns through the agreed contact method.",
      ],
      sourceLink: { label: "Read the City of Toronto's winter road operations overview", href: "https://www.toronto.ca/news/city-of-toronto-winter-road-operations/" },
    },
    {
      eyebrow: "Commercial properties",
      question: "What should businesses include in a commercial snow plan?",
      paragraphs: [
        "A business plan should identify opening hours, priority doors, accessible routes, employee access, deliveries, waste collection, emergency exits and responsibility for inspections between contractor visits. The service route should support operations without moving snow into customer sightlines or traffic paths.",
        "High-traffic properties often need documented monitoring and repeat treatment because conditions change throughout the day. A contractor's visit is one part of the winter-risk plan; site management still needs a way to record hazards, place warnings and request additional attention.",
        "McAze reviews suitable light-commercial properties individually. Large plazas, extensive parking lots, round-the-clock critical sites or specialized heavy-equipment scopes may require a provider structured specifically for that scale.",
      ],
    },
    {
      eyebrow: "Preparation",
      question: "How should a property be prepared before the first snowfall?",
      paragraphs: [
        "Remove movable objects from the clearing zones, repair obvious trip hazards where possible and mark low curbs, landscape beds, drains and other features that will disappear beneath snow. Confirm gate access, lighting, parking arrangements and a lawful snow-storage area.",
        "Provide current contact information and instructions for tenants, pets, alarms or restricted areas. Commercial properties should establish who can authorize extra work. Owners should also keep an emergency supply of appropriate traction material because conditions can change between scheduled visits.",
        "McAze uses the pre-season review to confirm access and scope. Updating the service provider after construction, new landscaping or parking changes helps prevent winter surprises.",
      ],
    },
    {
      eyebrow: "McAze service",
      question: "How does McAze snow removal service work?",
      paragraphs: [
        "The process begins with the property address, service areas, usage needs and preferred agreement type. A review confirms access, equipment suitability, surface conditions, snow storage and special priorities. The written plan then defines triggers, included work, exclusions and communication.",
        "During winter events, service is organized around conditions and the agreed route. Clearing, optional ice treatment and any defined return visit are recorded according to the plan. Customers remain responsible for monitoring the property and notifying McAze about obstacles or changing hazards.",
        "The objective is practical winter access with realistic expectations. Weather remains variable, so a clear agreement and responsive communication are more valuable than an absolute promise that ignores storm duration, road safety or refreezing.",
      ],
      bullets: ["Property and access review", "Defined clearing zones", "Trigger and response framework", "Snow-storage plan", "Optional ice-management scope", "Storm communication", "Season-end review"],
    },
    {
      eyebrow: "Service area",
      question: "Where does McAze provide snow removal services?",
      paragraphs: [
        "McAze considers suitable residential and light-commercial snow-removal properties across Toronto and GTA communities, subject to route capacity, scope and seasonal availability. Because timely service depends on route density, acceptance should be confirmed for the exact address before winter.",
        "To request a quote, provide the address, photographs, driveway size, walkways and stairs to be cleared, accessibility needs, business hours where applicable, snow-storage limitations and the preferred per-visit or seasonal arrangement. Early inquiries allow more time to assess route fit before the first major storm.",
      ],
    },
  ],
  relatedQuestion: "Which exterior services can be planned with seasonal property care?",
  faqQuestion: "What else do property owners ask about snow removal?",
  ctaQuestion: "Do you need a snow removal plan for a Toronto or GTA property?",
  ctaCopy: "Send McAze the property address, photos, priority access areas and preferred service format to confirm scope, route availability and a written quote.",
};
