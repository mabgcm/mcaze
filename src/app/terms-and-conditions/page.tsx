import { Container, Section, SectionHeader } from "@/components/section";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms & Conditions",
  description: "Read the McAze website terms and conditions for renovation inquiries, estimates, content, and service information.",
  path: "/terms-and-conditions",
});

const sections = [
  {
    title: "Website Information",
    copy:
      "The information on this website is provided for general renovation planning and service awareness. It should not be treated as a final quote, technical specification, or permit approval.",
  },
  {
    title: "Estimates",
    copy:
      "Project pricing depends on scope, site conditions, materials, permits, timing, and trade requirements. Written estimates define the specific assumptions and exclusions for each project.",
  },
  {
    title: "Project Work",
    copy:
      "Final schedules, payment milestones, warranties, and responsibilities are confirmed through written project documentation before work begins.",
  },
  {
    title: "Images and Content",
    copy:
      "Website images and project examples are used to describe service capabilities and may be updated as documented project photography becomes available.",
  },
  {
    title: "Contact",
    copy: `Questions about these terms can be sent to ${siteConfig.email}.`,
  },
];

export default function TermsAndConditionsPage() {
  return (
    <>
      <Section>
        <Container>
          <SectionHeader
            eyebrow="Terms"
            title="Terms & Conditions"
            copy="These terms outline how to use the McAze website and how renovation information should be interpreted before a written project agreement is prepared."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {sections.map((section) => (
              <article key={section.title} className="rounded-2xl border border-[#eee9e1] bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-[#161616]">{section.title}</h2>
                <p className="mt-3 leading-7 text-[#5d5a55]">{section.copy}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
