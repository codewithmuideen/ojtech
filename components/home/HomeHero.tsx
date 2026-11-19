import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GraduationCap, MapPin, Star } from "lucide-react";

import { siteConfig, companyStats } from "@/lib/data/site-config";
import { trainingCourses } from "@/lib/data/training";
import { Button } from "@/components/ui/button";
import { HeroNetworkCanvas } from "@/components/motion/HeroNetworkCanvas";
import { Reveal } from "@/components/motion/Reveal";
import { RotatingWord } from "@/components/home/RotatingWord";

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 pt-32 text-white sm:pt-40">
      <div className="absolute inset-0 -z-10">
        <HeroNetworkCanvas className="h-full w-full opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-950/40 to-ink-950" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 lg:grid-cols-[1.15fr_1fr] lg:px-8 lg:pb-28">
        <div>
          <Reveal>
            <p className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 backdrop-blur">
              <MapPin className="h-3.5 w-3.5 text-brand-400" />
              Osogbo · Ibadan · Nigeria — since {siteConfig.foundedYear}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-8 font-display font-semibold tracking-tight">
              <span className="sr-only">
                {siteConfig.name}: software development, IT and tech training company in
                Osogbo, Osun State and Ibadan, Oyo State.{" "}
              </span>
              <span className="block text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-[4.6rem]">
                Real technology.
              </span>
              <span className="block text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-[4.6rem]">
                Real results for{" "}
              </span>
              <span className="block text-[2.6rem] leading-[1.1] sm:text-6xl lg:text-[4.6rem]">
                <RotatingWord words={["businesses.", "startups.", "schools.", "government.", "you."]} />
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
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
        </div>

        <Reveal delay={0.2} className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/50 lg:max-w-none">
            <Image
              src="/images/hero-engineers.webp"
              alt="Software engineers at Olamitobi Technologies collaborating on code"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
          </div>

          <div className="absolute -left-4 bottom-10 w-64 rounded-2xl border border-white/10 bg-ink-900/80 p-4 shadow-xl backdrop-blur-md sm:-left-10">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 text-ink-950">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-sm font-semibold">Training Academy</p>
                <p className="text-xs text-white/60">{trainingCourses.length}+ tech courses</p>
              </div>
            </div>
          </div>

          <div className="absolute -right-2 top-8 rounded-2xl border border-white/10 bg-white p-4 text-ink-900 shadow-xl sm:-right-6">
            <div className="flex gap-0.5 text-brand-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <p className="mt-1 font-display text-2xl font-semibold">{companyStats[0].value}</p>
            <p className="text-xs text-ink-700">years building technology</p>
          </div>
        </Reveal>
      </div>

      <div className="border-t border-white/10 bg-white/[0.02]">
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
