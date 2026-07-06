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
      <Hero eyebrow="Contact" title="Request a free renovation estimate." copy="Share the project location, rough scope, timeline, and any details that will help us understand the work. McAze will follow up with practical next steps, no obligation, and a clear path toward a written estimate." image="/images/site/contact-quote.webp" />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeader title="Tell us about your project." copy="You do not need final drawings or material selections to start. A rough scope is enough for us to understand the project, explain next steps, and prepare a practical estimate conversation." />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
          <aside className="space-y-6">
            <div className="rounded-2xl border border-[#eee9e1] bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[#161616]">Business information</h2>
              <div className="mt-5 grid gap-5 leading-7 text-[#5d5a55]">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#b86f12]">Phone</h3>
                  <p className="mt-1">
                    <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="transition hover:text-[#F59D28]">
                      {siteConfig.phone}
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#b86f12]">Email</h3>
                  <div className="mt-1 space-y-1">
                    {siteConfig.emails.map((email) => (
                      <p key={email}>
                        <a href={`mailto:${email}`} className="transition hover:text-[#F59D28]">
                          {email}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#b86f12]">Website</h3>
                  <div className="mt-1 space-y-1">
                    {siteConfig.websites.map((website) => (
                      <p key={website.href}>
                        <a href={website.href} className="transition hover:text-[#F59D28]">
                          {website.label}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#b86f12]">Office Address</h3>
                  <address className="mt-1 not-italic">
                    <a href={siteConfig.mapUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-[#F59D28]">
                      {siteConfig.address.street}
                      <br />
                      {siteConfig.address.city}, {siteConfig.address.region} {siteConfig.address.postalCode}
                    </a>
                  </address>
                </div>
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
            <div className="overflow-hidden rounded-2xl border border-[#eee9e1] bg-white shadow-sm">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-[#161616]">Office location</h2>
                <p className="mt-2 leading-7 text-[#5d5a55]">
                  5 Abbotsfield Gate Ln, Scarborough, ON M1T 1N9
                </p>
              </div>
              <iframe
                src={siteConfig.mapEmbedUrl}
                title="Map to McAze office at 5 Abbotsfield Gate Ln, Scarborough"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block aspect-[4/3] w-full border-0"
              />
              <div className="border-t border-[#eee9e1] px-6 py-4">
                <a href={siteConfig.mapUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#b86f12] transition hover:text-[#F59D28]">
                  Open in Google Maps
                </a>
              </div>
            </div>
          </aside>
        </Container>
      </Section>
    </>
  );
}
