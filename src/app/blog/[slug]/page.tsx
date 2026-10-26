import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/breadcrumb";
import { Cta } from "@/components/cta";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { InternalLinks } from "@/components/internal-links";
import { Container, Section } from "@/components/section";
import { blogPosts, getPost } from "@/data/blog";
import { blogPostContent } from "@/data/blog-content";
import { articleSchema, createMetadata, faqSchema } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) return {};
  return createMetadata({ title: post.title, description: post.excerpt, path: "/blog/" + post.slug, image: post.image });
}

export default async function BlogPostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const content = blogPostContent[post.slug];
  if (!content) notFound();
  return <>
    <Hero eyebrow={content.eyebrow} title={post.title} copy={post.excerpt} image={post.image} imageAlt={content.heroImageAlt} primaryCta={{ label: "Request a Free Estimate", href: "/contact" }} secondaryCta={content.secondaryCta} compactTitle />
    <JsonLd data={articleSchema(post)} /><JsonLd data={faqSchema(content.faqs)} />
    <Section><Container className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
      <aside className="lg:sticky lg:top-28 lg:self-start">
        <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: post.title, href: "/blog/" + post.slug }]} />
        <div className="mt-8 rounded-2xl border border-[#eee9e1] bg-white p-5 shadow-sm"><h2 className="font-semibold">In this guide</h2><ol className="mt-4 space-y-3 text-sm text-[#5d5a55]">
          <li><a href="#average-cost">2027 cost ranges</a></li>{content.sections.map((section) => <li key={section.id}><a href={"#" + section.id}>{section.title}</a></li>)}<li><a href="#faq">Frequently asked questions</a></li>
        </ol></div>
        <div className="mt-5 rounded-2xl bg-[#171714] p-5 text-white"><p className="font-semibold">{content.sidebarCta.title}</p><p className="mt-2 text-sm leading-6 text-white/70">{content.sidebarCta.copy}</p><Link href="/contact" className="mt-4 inline-block font-semibold text-[#F59D28]">Request an estimate →</Link></div>
      </aside>
      <article className="min-w-0 text-[#3f3d38]">
        <div className="border-b border-[#e7e2d8] pb-8 text-sm text-[#6f6a62]"><p>By <Link href="/blog/author/mcaze-team" className="font-semibold text-[#a95e08]">McAze Team</Link> · Published {content.publishedLabel} · {post.readingTime}</p><p className="mt-3 leading-6">{content.disclaimer}</p></div>
        <div className="mt-8 rounded-2xl border-l-4 border-[#F59D28] bg-[#fff8ed] p-6"><h2 className="text-xl font-semibold text-[#171714]">The short answer</h2><p className="mt-3 leading-8">{content.shortAnswer.map((segment, index) => segment.bold ? <strong key={index}>{segment.text}</strong> : <span key={index}>{segment.text}</span>)}</p></div>
        <section id="average-cost" className="scroll-mt-28 pt-12"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a95e08]">{content.costSection.eyebrow}</p><h2 className="mt-3 text-3xl font-semibold text-[#171714]">{content.costSection.title}</h2><p className="mt-5 text-lg leading-8">{content.costSection.intro}</p><div className="mt-8 overflow-x-auto rounded-2xl border bg-white"><table className="w-full min-w-[680px] text-left"><thead className="bg-[#171714] text-white"><tr>{content.costSection.headers.map((header) => <th key={header} className="p-4">{header}</th>)}</tr></thead><tbody>{content.costSection.rows.map(([level, range, scope]) => <tr key={level} className="border-t align-top"><td className="p-4 font-semibold">{level}</td><td className="p-4 whitespace-nowrap font-semibold text-[#a95e08]">{range}</td><td className="p-4 text-[#5d5a55]">{scope}</td></tr>)}</tbody></table></div></section>
        {content.sections.map((section) => <section key={section.id} id={section.id} className="scroll-mt-28 pt-12"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a95e08]">{section.eyebrow}</p><h2 className="mt-3 text-3xl font-semibold text-[#171714]">{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-5 leading-8">{paragraph}</p>)}{section.bullets ? <ul className="mt-6 space-y-3 rounded-2xl bg-[#faf7f1] p-6">{section.bullets.map((bullet) => <li key={bullet}>• {bullet}</li>)}</ul> : null}{section.link ? <a href={section.link.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex font-semibold text-[#a95e08]">{section.link.label}</a> : null}</section>)}
        <p className="mt-8 leading-8">{content.closingSegments.map((segment, index) => "link" in segment ? <Link key={index} href={segment.link.href} className="font-semibold text-[#a95e08]">{segment.link.label}</Link> : <span key={index}>{segment.text}</span>)}</p>
        <section id="faq" className="scroll-mt-28 pt-12"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a95e08]">Common questions</p><h2 className="mt-3 text-3xl font-semibold text-[#171714]">{content.faqTitle}</h2><div className="mt-7 divide-y rounded-2xl border bg-white px-6">{content.faqs.map((faq) => <details key={faq.question} className="py-5"><summary className="cursor-pointer font-semibold text-[#171714]">{faq.question}</summary><p className="mt-3 leading-7 text-[#5d5a55]">{faq.answer}</p></details>)}</div></section>
        <div className="mt-12 border-t pt-6 text-sm leading-6 text-[#6f6a62]"><p><strong>Editorial note:</strong> {content.editorialNote}</p></div>
      </article>
    </Container></Section>
    <InternalLinks title={content.internalLinksTitle} links={content.internalLinks} />
    <Cta title={content.cta.title} copy={content.cta.copy} image="/images/site/contact-quote.webp" buttonLabel="Request a Free Estimate" />
  </>;
}
