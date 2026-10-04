import Image from "next/image";
import Link from "next/link";
import { Cta } from "@/components/cta";
import { Hero } from "@/components/hero";
import { InternalLinks } from "@/components/internal-links";
import { Container, Section, SectionHeader } from "@/components/section";
import { blogCategories, blogPosts } from "@/data/blog";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Home Renovation Blog & Planning Guides",
  description: "Practical renovation cost guides, planning advice, material insights and project guidance for homeowners in Vaughan, Toronto and the GTA.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <Hero
        eyebrow="Blog"
        title="Clear answers for better renovation decisions."
        copy="Cost guides, planning advice and practical construction insight for homeowners preparing projects in Vaughan, Toronto and across the GTA."
        image="/images/site/blog-renovation.webp"
        primaryCta={{ label: "Read the Latest Guide", href: `/blog/${blogPosts[0].slug}` }}
        secondaryCta={{ label: "Get a Free Estimate", href: "/contact" }}
      />
      <Section>
        <Container>
          <SectionHeader eyebrow="Latest" title="Renovation guides from the McAze team" copy="Start with practical local information, then use a site review and written scope to turn broad estimates into a reliable project plan." />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {blogPosts.map((post) => (
              <article key={post.slug} className="overflow-hidden rounded-2xl border border-[#e7e2d8] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#f1ece3]">
                    <Image src={post.image} alt={`${post.title} — McAze`} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                  </div>
                  <div className="p-6 sm:p-8">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a95e08]">{post.category}</p>
                    <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#171714]">{post.title}</h2>
                    <p className="mt-4 leading-7 text-[#5d5a55]">{post.excerpt}</p>
                    <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#6f6a62]">
                      <span>{post.author}</span><span aria-hidden="true">•</span>
                      <time dateTime={post.publishedAt}>October 4, 2026</time><span aria-hidden="true">•</span>
                      <span>{post.readingTime}</span>
                    </div>
                    <p className="mt-6 font-semibold text-[#a95e08]">Read the guide →</p>
                  </div>
                </Link>
              </article>
            ))}
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
      <InternalLinks title="Continue planning your renovation" links={[
        { label: "Explore renovation services", href: "/services" },
        { label: "Browse completed projects", href: "/portfolio" },
        { label: "Read common renovation questions", href: "/faq" },
      ]} />
      <Cta title="Need a price for your own renovation?" copy="Tell us about your property, the room, the changes you want and your preferred timing. McAze will review the scope and explain the next practical step." />
    </>
  );
}
