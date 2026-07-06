import { Container, Section, SectionHeader } from "@/components/section";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "Read the McAze privacy policy for website inquiries, contact details, analytics, and customer communication.",
  path: "/privacy-policy",
});

const sections = [
  {
    title: "Information We Collect",
    copy:
      "When you contact McAze, we may collect your name, phone number, email address, property address, project details, and any information you choose to include in your message.",
  },
  {
    title: "How We Use Information",
    copy:
      "We use inquiry details to respond to requests, prepare estimates, schedule consultations, manage project communication, and improve the website experience.",
  },
  {
    title: "Analytics",
    copy:
      "This website may use privacy-conscious analytics tools to understand traffic, performance, and page usage. Analytics are used to improve the site and do not replace direct project communication.",
  },
  {
    title: "Sharing",
    copy:
      "McAze does not sell personal information. Project details may be shared with trusted trades or service providers only when needed to review, quote, or complete requested work.",
  },
  {
    title: "Contact",
    copy: `Questions about this policy can be sent to ${siteConfig.email}.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Section>
        <Container>
          <SectionHeader
            eyebrow="Privacy"
            title="Privacy Policy"
            copy="This page explains how McAze handles information submitted through the website and during renovation inquiries."
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
