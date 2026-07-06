import Link from "next/link";
import { notFound } from "next/navigation";
import { Hero } from "@/components/hero";
import { Container, Section, SectionHeader } from "@/components/section";
import { authors, blogPosts, getAuthor } from "@/data/blog";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return authors.map((author) => ({ slug: author.slug }));
}

type AuthorPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: AuthorPageProps) {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) return {};
  return createMetadata({
    title: author.name,
    description: author.bio,
    path: `/blog/author/${author.slug}`,
  });
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) notFound();
  const posts = blogPosts.filter((post) => post.author === author.name);

  return (
    <>
      <Hero eyebrow="Author" title={author.name} copy={author.bio} image="/images/site/about-consultation.webp" />
      <Section>
        <Container>
          <SectionHeader title={`Articles by ${author.name}`} />
          <div className="mt-10 rounded-2xl border border-[#eee9e1] bg-white p-8 shadow-sm">
            {posts.length ? posts.map((post) => <Link key={post.slug} href={`/blog/${post.slug}`}>{post.title}</Link>) : <p className="text-[#5d5a55]">No articles are published by this author yet.</p>}
          </div>
        </Container>
      </Section>
    </>
  );
}
