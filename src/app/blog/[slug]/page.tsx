import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/breadcrumb";
import { Cta } from "@/components/cta";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { InternalLinks } from "@/components/internal-links";
import { Container, Section } from "@/components/section";
import { blogPosts, getPost } from "@/data/blog";
import { articleSchema, createMetadata, faqSchema } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

type Props = { params: Promise<{ slug: string }> };
type GuideSection = { id: string; eyebrow: string; title: string; paragraphs: string[]; bullets?: string[] };

const costs = [
  ["Powder room or focused refresh", "$8,000–$15,000+", "Existing layout, standard fixtures and cosmetic updates"],
  ["Standard three-piece bathroom", "$18,000–$30,000+", "Full rebuild with dependable mid-range finishes"],
  ["Mid-range full bathroom", "$25,000–$45,000+", "New shower or tub, tile, vanity, lighting and coordinated trades"],
  ["Primary ensuite", "$45,000–$80,000+", "Larger footprint, custom shower, double vanity and detailed finishes"],
  ["Luxury or major layout change", "$80,000–$120,000+", "Premium products, custom work and extensive relocation"],
];

const sections: GuideSection[] = [
  {
    id: "bathroom-type",
    eyebrow: "Room-by-room budgeting",
    title: "Bathroom renovation cost by bathroom type",
    paragraphs: [
      "A powder room avoids the bathtub, shower waterproofing and extensive wall tile found in a full bathroom. Work may include a vanity, toilet, faucet, mirror, lighting, flooring and paint. Keeping every fixture in its current position gives the budget the best chance of remaining near the lower end. Custom millwork, wall-mounted fixtures or premium surfaces can quickly raise the total.",
      "A standard three-piece family bathroom normally contains a toilet, vanity and tub-shower combination. A complete renovation involves controlled demolition, review of exposed conditions, plumbing and electrical coordination, wall preparation, waterproofing, tile, fixtures and finishing. Retaining the existing layout and choosing standard-size products generally produces the most predictable result.",
      "Primary ensuites cost more because they are usually larger and may include a custom shower, double vanity, freestanding tub, additional lighting, heated flooring or elaborate tile. Accessible bathrooms can also require careful floor, drainage and framing changes for a low-entry shower, grab-bar reinforcement, seating and suitable clearances. These decisions should be made before demolition so the related systems can be planned together."
    ]
  },
  {
    id: "budget-breakdown",
    eyebrow: "What you are paying for",
    title: "Where does the bathroom renovation budget go?",
    paragraphs: [
      "Homeowners naturally notice tile, faucets and vanities, but much of a reliable renovation budget is spent on labour, coordination and work that disappears behind the finished surfaces. Protection and demolition, plumbing and electrical rough-ins, ventilation, waterproofing, substrate preparation, tile installation, cabinetry, fixtures, glass, painting and cleanup must happen in the correct sequence.",
      "A quote should also explain allowances. An allowance is an amount reserved until the actual product is selected; it is not automatically the final price. If tile, a vanity or plumbing fixtures cost more than the allowance, the contract value changes. Clear allowances let homeowners compare proposals and avoid discovering too late that the displayed products were never included."
    ],
    bullets: ["Site protection, demolition and disposal", "Plumbing, electrical and ventilation", "Shower preparation and waterproofing", "Tile, grout and finishing details", "Vanity, countertop, fixtures and glass", "Project coordination, cleanup and walkthrough"]
  },
  {
    id: "cost-factors",
    eyebrow: "Price drivers",
    title: "What changes the final bathroom renovation price?",
    paragraphs: [
      "Moving a toilet, shower, tub or vanity usually involves more than extending a visible water line. Drain slope, venting, joist direction, concrete slabs and access from below affect what is possible. A new layout may also require drawings, permits or inspections. Layout changes are worthwhile when they solve a genuine problem, but they should be priced as construction decisions rather than simple design preferences.",
      "Existing conditions matter just as much. Loose tile, swollen trim, staining, odour or a soft floor can indicate moisture beyond the visible surface. After demolition, the team may find damaged subfloor, framing, plumbing or incomplete waterproofing. The source must be corrected and unsuitable material repaired before new finishes conceal the area.",
      "Shower design and finish complexity are major variables. A tub surround and a curbless custom shower are different projects. Niches, benches, linear drains, mosaics, large-format tile and mitred corners add preparation and installation time. Tile and grout are not the waterproofing system; the full assembly must continue through corners, penetrations and the drain connection.",
      "Product quality, custom fabrication and site logistics also affect the total. Custom cabinetry, natural stone, imported fixtures and made-to-measure glass cost more and may carry longer lead times. In condominiums, elevator reservations, corridor protection, restricted work hours, water shutdowns and debris procedures add coordination that a detached home with direct access may not require."
    ]
  },
  {
    id: "save",
    eyebrow: "Budget control",
    title: "How to reduce cost without cutting the wrong corners",
    paragraphs: [
      "The most effective savings usually come from simplifying scope, not hiding essential work. Keep plumbing in place where the existing layout functions well, confirm products before construction and use premium finishes where they create the most visible value. Standard-size fixtures and readily available materials can reduce both cost and delay.",
      "Do not sacrifice waterproofing, plumbing, electrical safety, ventilation or substrate preparation to afford a decorative upgrade. Avoid mid-project design changes that create return fees and rework. For many projects, a contingency of roughly 10 to 15 percent is a practical starting point; older homes or visible moisture concerns may justify a larger reserve."
    ],
    bullets: ["Keep a functional layout", "Complete selections before demolition", "Use premium finishes selectively", "Choose standard sizes where practical", "Protect the budget for hidden technical work", "Maintain a realistic contingency"]
  },
  {
    id: "permits",
    eyebrow: "Local requirements",
    title: "Do you need a permit for a bathroom renovation in Vaughan?",
    paragraphs: [
      "Permit requirements depend on what is changing. The City of Vaughan states that a building permit is required for an addition or alteration of plumbing fixtures, water services and sewer services. Its general guidance distinguishes regulated alterations from certain cosmetic work such as replacing cupboards and countertops. Electrical work is handled through the Electrical Safety Authority rather than the municipal building-permit process.",
      "Relocating fixtures, changing the plumbing system, altering structure, modifying ventilation or combining bathroom work with broader interior alterations can change the approval path. Condominium approval may also be required even when the municipal scope is limited. Define the work first, then confirm municipal, ESA and property-management requirements before construction begins."
    ]
  },
  {
    id: "timeline",
    eyebrow: "Project schedule",
    title: "How long does a bathroom renovation take?",
    paragraphs: [
      "A cosmetic update may take roughly one to two weeks. A straightforward full bathroom renovation often needs approximately three to six weeks of active construction. A custom ensuite, major layout change or project involving inspections and concealed repairs can require six to ten weeks or longer.",
      "Construction time is only one part of the schedule. Planning, selections, permits, ordering and condominium approvals should happen before demolition. Custom glass is generally measured after tile is complete, and specialty products may carry long lead times. A realistic schedule identifies these dependencies instead of assuming every item will be available immediately."
    ]
  },
  {
    id: "quotes",
    eyebrow: "Contractor selection",
    title: "How to compare bathroom renovation quotes",
    paragraphs: [
      "Two totals cannot be compared fairly unless their scopes are comparable. A lower number may omit demolition, disposal, waterproofing, plumbing, electrical work, glass, painting or permit coordination included in another proposal. It may also contain allowances too small to purchase the products used in the presentation.",
      "A useful quote identifies protection, demolition, repairs, licensed-trade responsibilities, waterproofing, fixtures, materials, allowances, exclusions, schedule assumptions, payment milestones and the change-order procedure. Ask who supplies each item, how concealed conditions are documented, what inspections are anticipated and how deficiencies are handled at the end."
    ],
    bullets: ["Written and specific scope", "Clear allowances and exclusions", "Named plumbing and electrical responsibilities", "Waterproofing approach", "Permit and inspection responsibility", "Schedule and payment milestones", "Documented change procedure and warranty"]
  },
  {
    id: "estimate",
    eyebrow: "Local planning",
    title: "Getting a bathroom renovation estimate in Vaughan",
    paragraphs: [
      "Online ranges help determine whether a project is financially realistic, but they cannot replace a review of the actual room. For a useful first conversation, provide the property location, bathroom type, approximate dimensions, photographs, desired layout changes, known moisture concerns, preferred finish level and ideal timing.",
      "McAze serves Vaughan and surrounding GTA communities with planning, trade coordination and complete bathroom renovation work. A site review turns broad online pricing into a property-specific written scope that identifies assumptions, selections, exclusions and practical next steps."
    ]
  }
];

const faqs = [
  { question: "How much does a bathroom renovation cost in Vaughan in 2027?", answer: "A focused powder-room update may begin around $8,000 to $15,000. Complete standard bathrooms often require roughly $18,000 to $45,000, while larger primary ensuites and custom renovations commonly begin around $45,000 and can exceed $80,000." },
  { question: "Can a bathroom be fully renovated for $15,000?", answer: "Possibly, for a small and straightforward room with the existing layout, standard products and no major concealed damage. Extensive tile, custom showers, trade changes or premium fixtures normally require more." },
  { question: "What is the most expensive part?", answer: "Labour-intensive shower and tile work, plumbing changes, custom glass, cabinetry and concealed repairs are frequent cost drivers. Technical work behind the finishes can represent a substantial part of the budget." },
  { question: "Do I need a permit in Vaughan?", answer: "It depends on the scope. Vaughan requires permits for additions or alterations to plumbing fixtures, water and sewer services. Confirm the specific work with the City and use appropriate licensed trades." },
  { question: "How long does a full renovation take?", answer: "A straightforward full renovation often takes about three to six weeks of active construction after selections and materials are ready. Custom work, inspections and repairs can extend it." },
  { question: "Does McAze provide estimates in Vaughan?", answer: "Yes. McAze serves Vaughan and surrounding GTA communities. Photographs, dimensions, desired changes and a site review help create a useful written estimate." }
];

export async function generateMetadata({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) return {};
  return createMetadata({ title: post.title, description: post.excerpt, path: "/blog/" + post.slug, image: post.image });
}

export default async function BlogPostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  return <>
    <Hero eyebrow="2027 Vaughan Cost Guide" title={post.title} copy={post.excerpt} image={post.image} imageAlt="Modern bathroom renovation in Vaughan" primaryCta={{ label: "Request a Free Estimate", href: "/contact" }} secondaryCta={{ label: "Bathroom Renovation Service", href: "/services/bathroom-renovation" }} compactTitle />
    <JsonLd data={articleSchema(post)} /><JsonLd data={faqSchema(faqs)} />
    <Section><Container className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
      <aside className="lg:sticky lg:top-28 lg:self-start">
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: post.title, href: "/blog/" + post.slug }]} />
        <div className="mt-8 rounded-2xl border border-[#eee9e1] bg-white p-5 shadow-sm"><h2 className="font-semibold">In this guide</h2><ol className="mt-4 space-y-3 text-sm text-[#5d5a55]">
          <li><a href="#average-cost">2027 cost ranges</a></li>{sections.map((section) => <li key={section.id}><a href={"#" + section.id}>{section.title}</a></li>)}<li><a href="#faq">Frequently asked questions</a></li>
        </ol></div>
        <div className="mt-5 rounded-2xl bg-[#171714] p-5 text-white"><p className="font-semibold">Planning a Vaughan bathroom?</p><p className="mt-2 text-sm leading-6 text-white/70">A site-specific written estimate is more useful than a generic square-foot price.</p><Link href="/contact" className="mt-4 inline-block font-semibold text-[#F59D28]">Request an estimate →</Link></div>
      </aside>
      <article className="min-w-0 text-[#3f3d38]">
        <div className="border-b border-[#e7e2d8] pb-8 text-sm text-[#6f6a62]"><p>By <Link href="/blog/author/mcaze-team" className="font-semibold text-[#a95e08]">McAze Team</Link> · Published October 4, 2026 · {post.readingTime}</p><p className="mt-3 leading-6">This is a 2027 planning guide, not a fixed-price menu. Figures are Canadian dollars. HST, design, permit fees and unusual concealed repairs may be additional unless included in the written scope.</p></div>
        <div className="mt-8 rounded-2xl border-l-4 border-[#F59D28] bg-[#fff8ed] p-6"><h2 className="text-xl font-semibold text-[#171714]">The short answer</h2><p className="mt-3 leading-8">A Vaughan powder-room refresh may start around <strong>$8,000–$15,000</strong>. A complete standard bathroom often falls around <strong>$18,000–$30,000</strong>, while a detailed mid-range renovation may reach <strong>$25,000–$45,000</strong>. Primary ensuites and major layout changes commonly begin around <strong>$45,000</strong> and can exceed <strong>$80,000</strong>.</p></div>
        <section id="average-cost" className="scroll-mt-28 pt-12"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a95e08]">2027 planning ranges</p><h2 className="mt-3 text-3xl font-semibold text-[#171714]">Average bathroom renovation cost in Vaughan</h2><p className="mt-5 text-lg leading-8">Bathroom cost is driven more by scope and technical complexity than floor area alone. Even a compact room needs plumbing, electrical work, ventilation, waterproofing and several finishing trades. The ranges below assume professional construction, a written scope and normal residential access.</p><div className="mt-8 overflow-x-auto rounded-2xl border bg-white"><table className="w-full min-w-[680px] text-left"><thead className="bg-[#171714] text-white"><tr><th className="p-4">Project level</th><th className="p-4">2027 range</th><th className="p-4">Typical scope</th></tr></thead><tbody>{costs.map(([level, range, scope]) => <tr key={level} className="border-t align-top"><td className="p-4 font-semibold">{level}</td><td className="p-4 whitespace-nowrap font-semibold text-[#a95e08]">{range}</td><td className="p-4 text-[#5d5a55]">{scope}</td></tr>)}</tbody></table></div></section>
        {sections.map((section) => <section key={section.id} id={section.id} className="scroll-mt-28 pt-12"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a95e08]">{section.eyebrow}</p><h2 className="mt-3 text-3xl font-semibold text-[#171714]">{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-5 leading-8">{paragraph}</p>)}{section.bullets ? <ul className="mt-6 space-y-3 rounded-2xl bg-[#faf7f1] p-6">{section.bullets.map((bullet) => <li key={bullet}>• {bullet}</li>)}</ul> : null}{section.id === "permits" ? <a href="https://www.vaughan.ca/residential/building-and-construction/building-permits/general-construction-permits/plumbing" target="_blank" rel="noreferrer" className="mt-5 inline-flex font-semibold text-[#a95e08]">City of Vaughan plumbing permit guidance →</a> : null}</section>)}
        <p className="mt-8 leading-8">Explore McAze <Link href="/services/bathroom-renovation" className="font-semibold text-[#a95e08]">bathroom renovation services</Link>, our <Link href="/service-areas/vaughan" className="font-semibold text-[#a95e08]">Vaughan service area</Link> and a documented <Link href="/portfolio/full-bathroom-renovation-gta" className="font-semibold text-[#a95e08]">GTA bathroom project</Link>.</p>
        <section id="faq" className="scroll-mt-28 pt-12"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a95e08]">Common questions</p><h2 className="mt-3 text-3xl font-semibold text-[#171714]">Bathroom renovation cost FAQ</h2><div className="mt-7 divide-y rounded-2xl border bg-white px-6">{faqs.map((faq) => <details key={faq.question} className="py-5"><summary className="cursor-pointer font-semibold text-[#171714]">{faq.question}</summary><p className="mt-3 leading-7 text-[#5d5a55]">{faq.answer}</p></details>)}</div></section>
        <div className="mt-12 border-t pt-6 text-sm leading-6 text-[#6f6a62]"><p><strong>Editorial note:</strong> Prepared by the McAze renovation team using project-planning experience and current Vaughan permit guidance. Pricing is an early 2027 planning range, not a quotation.</p></div>
      </article>
    </Container></Section>
    <InternalLinks title="Continue planning your Vaughan renovation" links={[{ label: "Bathroom renovation services", href: "/services/bathroom-renovation" }, { label: "Home renovation services in Vaughan", href: "/service-areas/vaughan" }, { label: "View a documented bathroom project", href: "/portfolio/full-bathroom-renovation-gta" }]} />
    <Cta title="Ready to price your Vaughan bathroom renovation?" copy="Share the bathroom type, current condition, desired changes and preferred timing. McAze will review the scope and explain the next practical step toward a written estimate." image="/images/site/contact-quote.webp" buttonLabel="Request a Free Estimate" />
  </>;
}
