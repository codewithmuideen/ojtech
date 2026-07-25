import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { blogPosts, getBlogPostBySlug } from "@/lib/data/blog";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/badge";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: {
      type: "article",
      publishedTime: post.publishedAt,
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: post.author },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <article className="bg-white pb-24 pt-40 sm:pt-48">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Reveal>
            <Badge variant="brand">{post.category}</Badge>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-ink-700">
              {post.author} ·{" "}
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              · {post.readingTimeMinutes} min read
            </p>
          </Reveal>

          <div className="mt-10 space-y-6">
            {post.content.map((paragraph, i) => (
              <Reveal key={i}>
                <p className="text-lg leading-relaxed text-ink-700">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-mist-50 py-20">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-ink-900">
                Related insights
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/insights/${p.slug}`}
                    className="rounded-2xl border border-ink-900/10 bg-white p-5 transition-colors hover:border-brand-500/40"
                  >
                    <p className="font-display font-semibold text-ink-900">{p.title}</p>
                    <p className="mt-2 text-sm text-ink-700 line-clamp-2">{p.excerpt}</p>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}
    </>
  );
}
