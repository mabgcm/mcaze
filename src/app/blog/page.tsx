import Link from "next/link";
import { Cta } from "@/components/cta";
import { Hero } from "@/components/hero";
import { Container, Section, SectionHeader } from "@/components/section";
import { blogCategories, blogPosts } from "@/data/blog";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Blog",
  description: "McAze renovation blog system with listing, categories, authors, related posts, table of contents, and article schema support.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <Hero
        eyebrow="Blog"
        title="Renovation insights, ready for future articles."
        copy="The blog system is structured for planning guides, material notes, maintenance advice, categories, authors, related posts, and article schema."
        image="/images/site/blog-renovation.webp"
      />
      <Section>
        <Container>
          <SectionHeader title="Latest articles" copy="No articles have been published yet. Add posts in the structured blog data when content is ready." />
          <div className="mt-10 rounded-2xl border border-[#eee9e1] bg-white p-8 text-[#5d5a55] shadow-sm">
            Blog posts will appear here with excerpts, categories, authors, dates, and optimized internal links.
          </div>
        </Container>
      </Section>
      <Section className="bg-[#faf7f1]">
        <Container>
          <SectionHeader eyebrow="Categories" title="Content categories" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {blogCategories.map((category) => (
              <Link key={category.slug} href={`/blog/category/${category.slug}`} className="rounded-2xl border border-[#eee9e1] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <h2 className="text-xl font-semibold text-[#161616]">{category.title}</h2>
                <p className="mt-3 leading-7 text-[#5d5a55]">{category.description}</p>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-sm text-[#6f6a62]">Published posts: {blogPosts.length}</p>
        </Container>
      </Section>
      <Cta title="Want renovation advice for your own home?" />
    </>
  );
}
