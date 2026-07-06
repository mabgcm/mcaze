import Link from "next/link";
import { notFound } from "next/navigation";
import { Hero } from "@/components/hero";
import { Container, Section, SectionHeader } from "@/components/section";
import { blogPosts, blogCategories, getCategory } from "@/data/blog";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogCategories.map((category) => ({ slug: category.slug }));
}

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return createMetadata({
    title: category.title,
    description: category.description,
    path: `/blog/category/${category.slug}`,
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const posts = blogPosts.filter((post) => post.category === category.title);

  return (
    <>
      <Hero eyebrow="Blog Category" title={category.title} copy={category.description} image="/images/site/blog-renovation.webp" />
      <Section>
        <Container>
          <SectionHeader title={`Articles in ${category.title}`} />
          <div className="mt-10 rounded-2xl border border-[#eee9e1] bg-white p-8 shadow-sm">
            {posts.length ? posts.map((post) => <Link key={post.slug} href={`/blog/${post.slug}`}>{post.title}</Link>) : <p className="text-[#5d5a55]">No articles are published in this category yet.</p>}
          </div>
        </Container>
      </Section>
    </>
  );
}
