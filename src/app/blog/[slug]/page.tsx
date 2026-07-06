import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/breadcrumb";
import { Cta } from "@/components/cta";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { Container, Section, SectionHeader } from "@/components/section";
import { blogPosts, getPost } from "@/data/blog";
import { articleSchema, createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Hero eyebrow={post.category} title={post.title} copy={post.excerpt} image={post.image} />
      <JsonLd data={articleSchema(post)} />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-[280px_1fr]">
          <aside>
            <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: post.title, href: `/blog/${post.slug}` }]} />
            <div className="mt-8 rounded-2xl border border-[#eee9e1] bg-white p-5 shadow-sm">
              <h2 className="font-semibold text-[#161616]">Table of contents</h2>
              <ol className="mt-4 space-y-3 text-sm text-[#5d5a55]">
                {post.headings.map((heading) => (
                  <li key={heading}>{heading}</li>
                ))}
              </ol>
            </div>
          </aside>
          <article className="prose max-w-none">
            <p className="text-lg leading-8 text-[#5d5a55]">Article content will be added here when posts are published.</p>
          </article>
        </Container>
      </Section>
      <Section className="bg-[#faf7f1]">
        <Container>
          <SectionHeader eyebrow="Related Posts" title="More renovation reading" />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {related.length ? related.map((item) => <Link key={item.slug} href={`/blog/${item.slug}`}>{item.title}</Link>) : <p className="text-[#5d5a55]">Related posts will appear once articles are published.</p>}
          </div>
        </Container>
      </Section>
      <Cta title="Subscribe for practical renovation notes." copy="Newsletter signup placement is ready for a future email provider or CMS integration." />
    </>
  );
}
