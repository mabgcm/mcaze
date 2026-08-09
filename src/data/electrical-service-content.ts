import type { Service } from "@/lib/types";

export const electricalServiceContent: NonNullable<Service["pageContent"]> = {
  heroEyebrow: "Electrical Renovation Coordination in Toronto & the GTA",
  heroCopy:
    "McAze coordinates renovation electrical work with appropriately licensed electrical contractors, aligning circuits, lighting, devices and inspections with kitchens, bathrooms, basements and full interior projects.",
  introQuestion: "How should electrical work be planned during a renovation?",
  intro: [
    "Electrical planning determines how safely and comfortably a renovated space works after the finishes are complete. Receptacles, lighting, switches, appliances, ventilation and equipment loads must be considered before walls close or cabinets arrive. Treating them as last-minute details often leads to visible compromises or costly rework.",
    "McAze integrates the electrical scope into suitable residential and commercial renovation projects across Toronto and the GTA. In Ontario, electrical work for hire must be completed through a Licensed Electrical Contractor, subject to limited statutory exemptions. McAze coordinates the construction sequence and finish interfaces while the licensed contractor remains responsible for regulated electrical work, notifications and inspections within its scope.",
    "The questions below address common searches about electrical renovation costs, ESA notifications, panel capacity, rewiring, lighting and contractor selection. They are intended for project planning, not as do-it-yourself instructions; energized systems and concealed wiring can create fire, shock and property risks.",
  ],
  questions: [
    {
      eyebrow: "Budget planning",
      question: "How much does electrical work cost during a renovation?",
      paragraphs: [
        "There is no dependable universal price because the scope can range from relocating several devices to adding circuits, replacing a panel or rewiring a large portion of an older home. The number of points matters, but access, service capacity, wall condition and the need to repair finishes can affect labour just as much.",
        "Cost factors include investigation, drawings where needed, ESA notification and inspection, circuits, panel or service changes, cable routes, receptacles, switches, lighting controls, fixtures, smoke or carbon-monoxide devices, appliance connections and patching. Finished ceilings, masonry, condominiums and occupied spaces can add access or protection requirements.",
        "McAze defines the renovation scope and coordinates pricing from the responsible Licensed Electrical Contractor where electrical work is included. Homeowners should compare the same inclusions and avoid estimates that do not explain notifications, devices, fixture installation, access assumptions or repair of opened finishes.",
      ],
      bullets: ["New devices or complete rewiring", "Existing panel and service capacity", "Accessible or concealed cable routes", "Fixture supply and installation", "ESA notification and inspection", "Drywall and finish repairs", "House, condo or commercial access"],
    },
    {
      eyebrow: "Licensed work",
      question: "Who is legally allowed to do electrical work in an Ontario home?",
      paragraphs: [
        "The Electrical Safety Authority states that only Licensed Electrical Contractors may perform electrical work for hire in Ontario, with limited exemptions. A general contractor cannot perform residential electrical work merely because it is managing the broader renovation; it must retain an appropriately licensed electrical subcontractor unless it holds the required licence itself.",
        "ESA also notes that an owner or occupant may perform work in their own home, but that person assumes responsibility for compliance and required notifications. This is not the same as being allowed to hire an unlicensed individual. Electrical work carries serious shock, fire and insurance consequences when completed improperly.",
        "McAze's role is clear: we coordinate construction timing, locations and finish interfaces while regulated electrical work is assigned to the Licensed Electrical Contractor responsible for its work. Customers can verify a contractor through ESA's public resources.",
      ],
      sourceLink: { label: "Read ESA's guidance on who can do electrical work", href: "https://esasafe.com/doing-electrical-work/who-can-do-electrical-work-at-my-property/" },
    },
    {
      eyebrow: "ESA process",
      question: "Does renovation electrical work require an ESA notification?",
      paragraphs: [
        "Most new electrical wiring and device work requires a notification to ESA, although exemptions exist for specific minor work and circumstances. The applicable requirements depend on the actual scope, so the responsible Licensed Electrical Contractor should determine and manage the correct notification and inspection path.",
        "A municipal building permit does not replace electrical authorization. The two processes may run alongside one another on a kitchen, basement, addition or commercial renovation. Required work should remain accessible until the appropriate inspection stage has been completed.",
        "McAze incorporates electrical milestones into the broader schedule so insulation, drywall, cabinets and finishes do not conceal work prematurely. Documentation responsibilities are identified in the proposal rather than assumed after construction begins.",
      ],
      sourceLink: { label: "Review ESA's homeowner electrical-safety handbook", href: "https://esasafe.com/assets/files/esasafe/pdf/Homeowner/ESA_Homeowner-Handbook-INSIDE.pdf" },
    },
    {
      eyebrow: "Older homes",
      question: "When should an older house be rewired?",
      paragraphs: [
        "Age alone does not prove that a house needs complete rewiring. The decision should be based on the wiring type and condition, previous modifications, grounding, panel capacity, observed damage, insurance concerns and the demands of the proposed renovation. A qualified assessment is more useful than a generic age threshold.",
        "Warning signs can include recurring breaker trips, damaged devices, heat marks, flickering associated with loose connections, exposed conductors or unapproved alterations. These symptoms should be evaluated promptly rather than hidden behind new finishes. Homeowners should never open or test energized components without appropriate knowledge and authorization.",
        "A renovation creates access that may make necessary upgrades more practical. McAze coordinates investigation before walls close and separates confirmed work from concealed conditions that could not reasonably be known in advance.",
      ],
    },
    {
      eyebrow: "Electrical capacity",
      question: "Do you need a new electrical panel for a renovation?",
      paragraphs: [
        "Not every renovation requires a panel replacement. The answer depends on the existing service, panel condition and available capacity, as well as new loads from cooking equipment, HVAC, laundry, electric-vehicle charging or additional living space. Spare breaker spaces alone do not prove adequate capacity.",
        "The Licensed Electrical Contractor reviews the intended loads and existing equipment. A service or panel change may involve the utility, metering, permits, shutdowns and coordination beyond the interior renovation. Those steps can affect both budget and schedule.",
        "McAze gathers appliance and equipment information early so capacity questions are not left until installation day. If the existing system cannot support the design, options can be evaluated before cabinets, ceilings or exterior work limit access.",
      ],
    },
    {
      eyebrow: "Kitchen planning",
      question: "What electrical work is commonly needed in a kitchen renovation?",
      paragraphs: [
        "A kitchen electrical plan can include countertop receptacles, dedicated appliance circuits, lighting, controls, island power, range or cooktop connections, dishwasher, refrigerator and exhaust equipment. The exact requirements depend on the layout, appliances and current Ontario Electrical Safety Code.",
        "Appliance specifications should be available before rough-in. Cabinet dimensions, backsplash height and under-cabinet lighting affect device placement, while ventilation and cooking equipment may involve other regulated trades. Guessing from a showroom layout can create conflicts at installation.",
        "McAze coordinates cabinet drawings, appliance information and finish elevations with the Licensed Electrical Contractor. This joined review helps devices align with the completed kitchen rather than landing behind drawers, appliances or decorative panels.",
      ],
    },
    {
      eyebrow: "Bathrooms",
      question: "What electrical planning is required in a bathroom renovation?",
      paragraphs: [
        "Bathrooms combine electricity, water and restricted clearances, so receptacles, lighting, switches, fans, heated floors and other equipment need code-aware placement. Product suitability and the relationship to tubs, showers and sinks must be confirmed by the responsible licensed professional.",
        "Ventilation, mirror dimensions, vanity height and medicine cabinets should be coordinated before rough-in. A decorative fixture cannot be assumed suitable for every wet or damp location. Electric floor heat also needs to be matched to the floor assembly and controlled according to the approved system.",
        "McAze brings the electrical, ventilation, waterproofing, tile and cabinetry sequence together. Required inspections occur before finishes conceal relevant work, and final devices are installed after the surrounding surfaces are ready.",
      ],
    },
    {
      eyebrow: "Basements and additions",
      question: "How is electrical work planned for a basement or home addition?",
      paragraphs: [
        "A basement or addition introduces new rooms, lighting, receptacles and equipment loads. The intended use matters: a recreation room, bedroom, office, bathroom or secondary suite can have different requirements. Heating, ventilation, alarms, exits and fire separations must be coordinated with the electrical plan and the building permit documents.",
        "New framing provides clear cable routes, but ceiling congestion from ducts, plumbing and structure requires coordination. Panel capacity and service routes should be reviewed before layout decisions become fixed. A legal secondary suite also involves multiple building and fire-safety requirements beyond electrical work alone.",
        "McAze sequences the licensed electrical work with framing, mechanical systems, insulation, drywall and inspections. This reduces trade conflicts and provides a clearer path from rough-in to final fixtures and occupancy-ready finishes.",
      ],
    },
    {
      eyebrow: "Lighting design",
      question: "How do you plan lighting for a renovation?",
      paragraphs: [
        "Good lighting uses layers. General light supports safe movement, task light serves work surfaces and accent light adds depth or highlights architecture. Fixture quantity alone does not guarantee a comfortable room; placement, beam spread, glare, colour appearance, controls and daylight all matter.",
        "Furniture, cabinets, mirrors and work zones should be planned before electrical locations. Dimmer and smart-control compatibility must be confirmed across the selected lamps, drivers and controls. Decorative fixtures also need appropriate support and mounting conditions.",
        "McAze reviews lighting locations in relation to the finished plan and coordinates the rough-in with ceiling, millwork and drywall work. Final fixture selections should be available early enough to confirm size, weight, voltage and location suitability.",
      ],
    },
    {
      eyebrow: "Occupied properties",
      question: "Can electrical upgrades be completed while you live at home?",
      paragraphs: [
        "Many localized upgrades can be completed in an occupied property, but planned shutdowns, noise, dust and temporary openings should be expected. Larger rewiring or panel work can interrupt power to significant parts of the home and may make short-term alternative arrangements more practical.",
        "Sensitive electronics should be shut down safely, work areas cleared and access maintained to the panel and affected rooms. Families should identify medical equipment, security systems, internet needs, pets and work-from-home requirements before scheduling outages.",
        "McAze coordinates protection and finish repairs around the electrical sequence. The Licensed Electrical Contractor controls electrical safety and shutdown procedures, while residents follow the instructions provided for the work area.",
      ],
    },
    {
      eyebrow: "Condominiums",
      question: "What is different about electrical work in a Toronto condo?",
      paragraphs: [
        "Condominium work is governed by the corporation's renovation rules in addition to ESA requirements. Management may require drawings, contractor insurance, approved work hours, elevator bookings and advance notice of shutdowns. Building systems and common elements cannot be altered as though they belong solely to the unit owner.",
        "Concrete walls and ceilings can restrict cable routes, while shared services and fire-rated assemblies require careful treatment. Fixture and device changes should respect the unit's actual supply and building conditions. Owners should obtain the current renovation package before scheduling.",
        "McAze's North York condo project included outlet and switch replacement, lighting installation and finish coordination within a full renovation. That project demonstrates why electrical decisions, cabinets, bathroom work, decoration and final setup should follow one coordinated plan.",
      ],
    },
    {
      eyebrow: "Commercial projects",
      question: "Can electrical work be coordinated for commercial renovations?",
      paragraphs: [
        "Yes. Offices, retail units, restaurants and temporary facilities can require lighting, panels, equipment connections, emergency systems, HVAC power and landlord or base-building coordination. The intended occupancy and equipment schedule should be understood before rough-in begins.",
        "Commercial work may involve engineered drawings, municipal permits, utility coordination and specialized systems beyond a typical residential project. Shutdowns and work hours must be planned around neighbouring tenants and business operations. The appropriately licensed and qualified parties remain responsible for their regulated scopes.",
        "McAze has coordinated electrical and lighting components within commercial renovation and temporary competition-venue infrastructure. The project plan connects those systems to modular buildings, HVAC, equipment placement, access and final commissioning.",
      ],
    },
    {
      eyebrow: "Contractor selection",
      question: "How do you choose an electrical contractor in Ontario?",
      paragraphs: [
        "Verify that the business is a Licensed Electrical Contractor through ESA rather than relying on a verbal claim that an individual is an electrician. Ask who will file the notification, arrange inspections and provide the applicable documentation. The quote should describe the intended devices, circuits, fixtures and exclusions.",
        "Avoid any proposal that asks the homeowner to take out a notification so an unlicensed person can work for hire. ESA explains that licensed contracting businesses carry required qualifications, insurance and accountability. A general contractor should be able to identify the licensed electrical subcontractor used for the project.",
        "McAze keeps the electrical responsibility visible within the renovation plan. The licensed contractor handles regulated electrical decisions and work; McAze manages the surrounding construction interfaces and schedule where included.",
      ],
      sourceLink: { label: "Review ESA guidance for general contractors and homeowners", href: "https://esasafe.com/compliance/general-contractors/" },
    },
    {
      eyebrow: "McAze workflow",
      question: "How does McAze coordinate electrical work during a renovation?",
      paragraphs: [
        "The process begins with the room layout, equipment, lighting goals and known electrical concerns. McAze records finish dimensions and construction dependencies, then coordinates review by the Licensed Electrical Contractor responsible for the proposed electrical scope.",
        "Before walls close, locations and rough-ins are checked against cabinets, plumbing, HVAC, structure and finishes. ESA notification and inspection stages are incorporated where required. Changes are documented so related work does not proceed on an outdated assumption.",
        "After finishes are ready, final devices and fixtures are installed and the relevant electrical work is completed through the licensed contractor's process. McAze then addresses surrounding finish items and includes the area in the renovation walkthrough.",
      ],
      bullets: ["Scope and layout review", "Licensed electrical contractor coordination", "Capacity and equipment confirmation", "Notification and inspection planning", "Rough-in interface checks", "Final devices and fixtures", "Finish review and handover"],
    },
    {
      eyebrow: "Service area",
      question: "Where does McAze coordinate renovation electrical services?",
      paragraphs: [
        "McAze coordinates electrical work as part of suitable renovation and construction projects across Toronto and GTA communities including Vaughan, Markham, Richmond Hill, North York and Mississauga, subject to scope and availability. Stand-alone requests are reviewed individually to confirm fit and licensed-contractor availability.",
        "To request an estimate, provide the property address, room or project type, photographs, known panel information, proposed appliances or equipment, lighting goals and timing. Do not remove panel covers or expose wiring for photographs; ordinary exterior views and existing plans are sufficient for the initial conversation.",
      ],
    },
  ],
  projectSlugs: ["condo-full-renovation-north-york", "temporary-site-management-offices-competition-venues-toronto"],
  projectQuestion: "Where has McAze coordinated electrical work within completed projects?",
  relatedQuestion: "Which renovation services commonly require electrical coordination?",
  faqQuestion: "What else do property owners ask about renovation electrical work?",
  ctaQuestion: "Does your Toronto or GTA renovation require electrical coordination?",
  ctaCopy: "Tell McAze about the property, renovation scope, equipment and lighting goals so the work can be reviewed with the appropriate Licensed Electrical Contractor.",
};
