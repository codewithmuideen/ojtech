"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Clock, Search, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { trainingCategories, trainingCourses } from "@/lib/data/training";

export function TrainingCatalog() {
  const [query, setQuery] = React.useState("");
  const [active, setActive] = React.useState<string>("all");

  // Honour /training#category deep links from the homepage and nav.
  React.useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (trainingCategories.some((c) => c.slug === hash)) setActive(hash);
  }, []);

  const q = query.trim().toLowerCase();
  const matches = (c: (typeof trainingCourses)[number]) =>
    !q ||
    c.title.toLowerCase().includes(q) ||
    c.description.toLowerCase().includes(q) ||
    c.tools.some((t) => t.toLowerCase().includes(q));

  const groups = trainingCategories
    .filter((cat) => active === "all" || cat.slug === active)
    .map((cat) => ({
      cat,
      courses: trainingCourses.filter((c) => c.category === cat.slug && matches(c)),
    }))
    .filter((g) => g.courses.length > 0);

  const total = groups.reduce((n, g) => n + g.courses.length, 0);

  return (
    <div>
      <div className="sticky top-20 z-20 -mx-6 border-b border-ink-900/10 bg-white/90 px-6 py-4 backdrop-blur-md lg:-mx-8 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 lg:flex-wrap lg:overflow-visible lg:pb-0">
            {[{ slug: "all", name: "All courses" }, ...trainingCategories].map((cat) => (
              <button
                key={cat.slug}
                type="button"
                onClick={() => {
                  setActive(cat.slug);
                  history.replaceState(null, "", cat.slug === "all" ? "#" : `#${cat.slug}`);
                }}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  active === cat.slug
                    ? "border-ink-900 bg-ink-900 text-white"
                    : "border-ink-900/10 text-ink-800 hover:border-ink-900/40"
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <label className="relative block w-full lg:w-72">
            <span className="sr-only">Search courses</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-600" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search e.g. Python, AWS, Figma"
              className="h-11 w-full rounded-full border border-ink-900/15 bg-white pl-11 pr-10 text-sm outline-none transition-colors focus:border-brand-500"
            />
            {query && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-ink-600 hover:bg-mist-100"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </label>
        </div>
      </div>

      <p className="mt-6 text-sm text-ink-600" aria-live="polite">
        Showing {total} course{total === 1 ? "" : "s"}
      </p>

      {groups.length === 0 && (
        <div className="mt-10 rounded-3xl bg-mist-50 p-12 text-center">
          <p className="font-display text-xl font-semibold text-ink-900">No courses match &ldquo;{query}&rdquo;.</p>
          <p className="mt-2 text-ink-700">
            Try another keyword, or{" "}
            <Link href="/contact" className="font-semibold text-brand-700 underline">
              ask us
            </Link>{" "}
            about custom training.
          </p>
        </div>
      )}

      <div className="mt-6 space-y-16">
        {groups.map(({ cat, courses }) => (
          <section key={cat.slug} id={cat.slug} className="scroll-mt-48">
            <div className="flex flex-wrap items-end justify-between gap-2 border-b border-ink-900/10 pb-4">
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink-900 sm:text-3xl">
                  {cat.name}
                </h2>
                <p className="mt-1 text-ink-700">{cat.summary}</p>
              </div>
              <span className="text-sm font-medium text-ink-600">
                {courses.length} course{courses.length === 1 ? "" : "s"}
              </span>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <Link
                  key={course.slug}
                  href={`/training/${course.slug}`}
                  className="group flex flex-col rounded-2xl border border-ink-900/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/50 hover:shadow-xl hover:shadow-ink-950/5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full bg-brand-500/15 px-3 py-1 text-xs font-medium text-brand-700">
                      {course.level}
                    </span>
                    {course.popular && (
                      <span className="rounded-full bg-ink-900 px-3 py-1 text-xs font-medium text-white">
                        Popular
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink-900 group-hover:text-brand-700">
                    {course.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700">
                    {course.description}
                  </p>
                  <p className="mt-4 text-xs text-ink-600">{course.tools.slice(0, 4).join(" · ")}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-ink-900/10 pt-4">
                    <span className="flex items-center gap-1.5 text-xs font-medium text-ink-700">
                      <Clock className="h-3.5 w-3.5" /> {course.durationWeeks} weeks
                    </span>
                    <span className="flex items-center gap-1 text-sm font-semibold text-brand-700">
                      Details <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
