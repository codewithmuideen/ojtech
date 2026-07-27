import type { Metadata } from "next";
import Link from "next/link";

import { blogPosts } from "@/lib/data/blog";
import { PageHero } from "@/components/shared/PageHero";
import { RevealGroup } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical thinking on software development, AI, cybersecurity, cloud, and digital transformation from the Olamitobi Technologies team.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  const [featured, ...rest] = blogPosts
    .slice()
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Practical thinking on technology and digital growth."
        description="No fluff, no buzzword bingo — just grounded perspective from the team building these systems day to day."
      />

      <div className="bg-white pb-24 sm:pb-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          {featured && (
            <Link
              href={`/insights/${featured.slug}`}
              className="group block rounded-3xl border border-ink-900/10 p-8 transition-shadow hover:shadow-lg sm:p-12"
            >
              <Badge variant="brand">{featured.category}</Badge>
              <h2 className="mt-4 font-display text-3xl font-semibold text-ink-900">
                {featured.title}
              </h2>
              <p className="mt-3 max-w-2xl text-ink-700">{featured.excerpt}</p>
              <p className="mt-4 text-xs text-ink-700/70">
                {featured.author} · {featured.readingTimeMinutes} min read
              </p>
            </Link>
          )}

          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="group rounded-2xl border border-ink-900/10 p-6 transition-colors hover:border-brand-500/40 hover:bg-mist-50"
              >
                <Badge variant="ink">{post.category}</Badge>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink-900">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700 line-clamp-3">
                  {post.excerpt}
                </p>
                <p className="mt-4 text-xs text-ink-700/70">
                  {post.readingTimeMinutes} min read
                </p>
              </Link>
            ))}
          </RevealGroup>
        </div>
      </div>
    </>
  );
}
