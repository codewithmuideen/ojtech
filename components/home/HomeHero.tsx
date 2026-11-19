import Link from "next/link";
import { ArrowRight, GraduationCap, MapPin, Star } from "lucide-react";

import { siteConfig, companyStats } from "@/lib/data/site-config";
import { trainingCourses } from "@/lib/data/training";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { RotatingWord } from "@/components/home/RotatingWord";
import { HeroVideo } from "@/components/home/HeroVideo";

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 text-white">
      <div className="absolute inset-0 -z-10">
        <HeroVideo />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/95 via-ink-950/75 to-ink-950/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/40" />
      </div>

      <div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-6 pb-16 pt-36 lg:px-8 lg:pt-40">
        <div className="max-w-3xl">
          <Reveal>
            <p className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/85 backdrop-blur">
              <MapPin className="h-3.5 w-3.5 text-brand-400" />
              Osogbo · Ibadan · Nigeria, since {siteConfig.foundedYear}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-8 font-display font-semibold tracking-tight">
              <span className="sr-only">
                {siteConfig.name}: software development, IT and tech training company in
                Osogbo, Osun State and Ibadan, Oyo State.{" "}
              </span>
              <span className="block text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-[5rem]">
                Real technology.
              </span>
              <span className="block text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-[5rem]">
                Real results for
              </span>
              <span className="block text-[2.6rem] leading-[1.1] sm:text-6xl lg:text-[5rem]">
                <RotatingWord words={["businesses.", "startups.", "schools.", "government.", "you."]} />
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/80">
              We design, build and run software, websites, mobile apps, cloud and AI
              solutions, and we train the people who power them. A leading tech company in
              Osun and Oyo State, delivering for clients across Nigeria and the world.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button variant="brand" size="lg" asChild>
                <Link href="/request-a-quote">
                  Start a Project <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline-inverse" size="lg" asChild>
                <Link href="/training">
                  <GraduationCap className="h-4 w-4" /> Explore Tech Courses
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-wrap gap-4">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-900/60 px-4 py-3 backdrop-blur-md">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 text-ink-950">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold">Training Academy</p>
                  <p className="text-xs text-white/60">{trainingCourses.length}+ tech courses</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-900/60 px-4 py-3 backdrop-blur-md">
                <div className="flex gap-0.5 text-brand-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <div>
                  <p className="font-display text-sm font-semibold">{companyStats[0].value} years</p>
                  <p className="text-xs text-white/60">building technology</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="border-t border-white/10 bg-ink-950/70 backdrop-blur">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 divide-white/10 px-6 lg:grid-cols-4 lg:divide-x lg:px-8">
          {companyStats.map((stat) => (
            <div key={stat.label} className="py-8 lg:px-8 lg:first:pl-0">
              <dt className="text-sm text-white/55">{stat.label}</dt>
              <dd className="mt-1 font-display text-4xl font-semibold text-white sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
