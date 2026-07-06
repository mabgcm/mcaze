import { ContactForm } from "@/components/form";
import { Hero } from "@/components/hero";
import { Container, Section, SectionHeader } from "@/components/section";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description: "Contact McAze for renovation quotes and project planning across Vaughan, Markham, Richmond Hill, Toronto, North York, and Mississauga.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Hero eyebrow="Contact" title="Tell us what you want to improve." copy="Share the project location, rough scope, timeline, and any details that will help us understand the work. McAze will follow up with practical next steps." image="/placeholders/renovation-10.svg" />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeader title="Request a quote" copy="This form is ready to connect to a server action, CRM, or future CMS workflow when required." />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
          <aside className="space-y-6">
            <div className="rounded-2xl border border-[#eee9e1] bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[#161616]">Business information</h2>
              <div className="mt-5 space-y-3 leading-7 text-[#5d5a55]">
                <p>{siteConfig.phone}</p>
                {siteConfig.emails.map((email) => (
                  <p key={email}>
                    <a href={`mailto:${email}`} className="transition hover:text-[#F59D28]">
                      {email}
                    </a>
                  </p>
                ))}
                <p>
                  <a href={siteConfig.url} className="transition hover:text-[#F59D28]">
                    {siteConfig.displayUrl}
                  </a>
                </p>
                <p>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.region} {siteConfig.address.postalCode}
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-[#eee9e1] bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[#161616]">Opening hours</h2>
              <ul className="mt-5 space-y-3 leading-7 text-[#5d5a55]">
                {siteConfig.hours.map((hour) => (
                  <li key={hour}>{hour}</li>
                ))}
              </ul>
            </div>
            <div className="grid aspect-[4/3] place-items-center rounded-2xl border border-[#eee9e1] bg-[#f7f3ed] p-6 text-center text-sm font-semibold text-[#6f6a62] shadow-sm">
              Google Map placeholder
            </div>
          </aside>
        </Container>
      </Section>
    </>
  );
}
