import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

import { siteConfig, mapLink, telHref } from "@/lib/data/site-config";
import { footerNav, legalNav } from "@/lib/data/nav";
import { SocialLinks } from "@/components/shared/SocialLinks";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 pt-20 lg:px-8">
        {/* Top band: big statement + contact */}
        <div className="grid gap-12 border-b border-white/10 pb-16 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="max-w-xl font-display text-3xl font-semibold leading-tight sm:text-5xl">
              Let&apos;s build something <span className="text-gradient-brand">real</span> together.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-brand-400"
            >
              Get in touch <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-4 text-white/75">
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 hover:text-white">
              <Mail className="h-5 w-5 text-brand-400" /> {siteConfig.email}
            </a>
            {siteConfig.phones.map((p) => (
              <a key={p} href={telHref(p)} className="flex items-center gap-3 hover:text-white">
                <Phone className="h-5 w-5 text-brand-400" /> {p}
              </a>
            ))}
            <div>
              <p className="pt-2 text-sm font-medium text-white">Follow Olamitobi Technologies</p>
              <SocialLinks links={siteConfig.social} className="mt-3" />
            </div>
          </div>
        </div>

        {/* Offices */}
        <div className="grid gap-6 border-b border-white/10 py-12 md:grid-cols-2">
          {siteConfig.offices.map((o) => (
            <a
              key={o.slug}
              href={mapLink(o)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-2xl border border-white/10 p-6 transition-colors hover:border-brand-500/50 hover:bg-white/[0.03]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-lg font-semibold">{o.label}</p>
                <address className="mt-1 not-italic text-sm leading-relaxed text-white/60">{o.full}</address>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand-400">
                  Get directions <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Links */}
        <div className="grid gap-12 py-16 lg:grid-cols-[1fr_3fr]">
          <div>
            <Image
              src="/logo_part_white.png"
              alt={siteConfig.name}
              width={160}
              height={40}
              className="h-9 w-auto"
            />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/55">
              Software development, IT consulting and tech training company in Osogbo, Osun
              State and Ibadan, Oyo State. Building technology since {siteConfig.foundedYear}.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerNav.map((column) => (
              <div key={column.title}>
                <p className="font-display text-sm font-semibold text-white">{column.title}</p>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/55 transition-colors hover:text-brand-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col-reverse items-start justify-between gap-4 border-t border-white/10 py-8 sm:flex-row sm:items-center">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalNav.map((link) => (
              <Link key={link.href} href={link.href} className="text-xs text-white/40 transition-colors hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Oversized wordmark, Concentrix-style sign-off */}
      <p
        aria-hidden="true"
        className="pointer-events-none -mb-[0.22em] select-none text-center font-display text-[17vw] font-semibold leading-none tracking-tighter text-white/[0.04]"
      >
        Olamitobi
      </p>
    </footer>
  );
}
