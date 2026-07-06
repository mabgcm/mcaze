import { Cta } from "@/components/cta";
import { FaqList } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Container, Section } from "@/components/section";
import { faqs } from "@/data/faqs";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "FAQ",
  description: "Answers to common questions about McAze renovation services, quotes, timelines, service areas, and project planning.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <Hero eyebrow="FAQ" title="Clear answers before the first site visit." copy="Renovation decisions are easier when the basics are explained plainly. These answers cover the questions homeowners ask most often." image="/images/site/faq-consultation.webp" />
      <Section>
        <Container>
          <FaqList items={faqs} withSchema />
        </Container>
      </Section>
      <Cta />
    </>
  );
}
