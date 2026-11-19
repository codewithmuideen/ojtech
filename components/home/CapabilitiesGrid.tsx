import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const capabilities = [
  {
    title: "Custom Software",
    text: "Business systems, portals and platforms engineered around how you actually work.",
    href: "/services/software-development",
    image: "/images/code-editor.webp",
  },
  {
    title: "Web & E-commerce",
    text: "Fast, search-optimized websites and web apps that turn visitors into customers.",
    href: "/services/web-development",
    image: "/images/data-analytics.webp",
  },
  {
    title: "Mobile Apps",
    text: "Android and iOS apps your customers will love to open every day.",
    href: "/services/mobile-app-development",
    image: "/images/engineering.webp",
  },
  {
    title: "Cloud & DevOps",
    text: "Secure, scalable infrastructure with automated deployments and monitoring.",
    href: "/services/cloud-solutions",
    image: "/images/cloud-datacenter.webp",
  },
  {
    title: "AI & Automation",
    text: "Chatbots, intelligent workflows and data products that save real hours.",
    href: "/services/artificial-intelligence",
    image: "/images/global-network.webp",
  },
  {
    title: "Cybersecurity",
    text: "Assessments, hardening and monitoring that keep your systems and data safe.",
    href: "/services/cybersecurity",
    image: "/images/cybersecurity.webp",
  },
];

export function CapabilitiesGrid() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              From ambition to <span className="text-gradient-brand">working software.</span>
            </>
          }
          description="Strategy, design, engineering and support under one roof, so your idea goes from whiteboard to production without falling between vendors."
          action={
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 rounded-full border border-ink-900/15 px-5 py-2.5 text-sm font-semibold text-ink-900 transition-colors hover:bg-ink-900 hover:text-white"
            >
              All services <ArrowUpRight className="h-4 w-4" />
            </Link>
          }
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <Reveal key={c.href} delay={(i % 3) * 0.06}>
              <Link
                href={c.href}
                className="group relative flex h-[22rem] flex-col justify-end overflow-hidden rounded-3xl bg-ink-950 p-7 text-white"
              >
                <Image
                  src={c.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover opacity-55 transition-all duration-700 group-hover:scale-110 group-hover:opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-transparent" />
                <span className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur transition-all duration-300 group-hover:rotate-45 group-hover:border-brand-400 group-hover:bg-brand-500 group-hover:text-ink-950">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
                <span className="relative font-display text-sm font-semibold text-brand-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="relative mt-2 font-display text-2xl font-semibold">{c.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-white/75 transition-all duration-500 lg:max-h-0 lg:overflow-hidden lg:opacity-0 lg:group-hover:max-h-24 lg:group-hover:opacity-100">
                  {c.text}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
