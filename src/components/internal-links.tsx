import Link from "next/link";
import { Container, Section, SectionHeader } from "@/components/section";

type InternalLinkItem = {
  label: string;
  href: string;
  description?: string;
};

type InternalLinksProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  links: InternalLinkItem[];
  compact?: boolean;
};

export function InternalLinks({ eyebrow = "Explore McAze", title, copy, links, compact = true }: InternalLinksProps) {
  return (
    <Section compact={compact} className="bg-[#faf7f1]">
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} copy={copy} />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((item) => (
            <Link
              key={`${item.href}-${item.label}`}
              href={item.href}
              className="group flex min-h-24 items-center justify-between gap-5 rounded-2xl border border-[#e5ded3] bg-white px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:border-[#F59D28] hover:shadow-md"
            >
              <span>
                <span className="block font-semibold text-[#171714] group-hover:text-[#a95e08]">{item.label}</span>
                {item.description ? <span className="mt-1 block text-sm leading-6 text-[#6b655c]">{item.description}</span> : null}
              </span>
              <span aria-hidden="true" className="shrink-0 text-xl text-[#b86f12] transition group-hover:translate-x-1">→</span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
