import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/data/site-config";
import { footerNav, legalNav } from "@/lib/data/nav";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { LinkedInIcon, XIcon, InstagramIcon } from "@/components/shared/SocialIcons";

export function Footer() {
  return (
    <footer className="bg-ink-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Image
              src="/logo_white.png"
              alt="OJTech"
              width={160}
              height={40}
              className="h-9 w-auto"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              {siteConfig.description}
            </p>
            <div className="mt-8">
              <p className="text-sm font-medium text-white/80">
                Get occasional insights on technology and digital growth.
              </p>
              <div className="mt-3 max-w-sm">
                <NewsletterForm variant="dark" />
              </div>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-white/10"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-white/10"
              >
                <XIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-white/10"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerNav.map((column) => (
              <div key={column.title}>
                <p className="font-display text-sm font-semibold text-white">
                  {column.title}
                </p>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/60 transition-colors hover:text-white"
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

        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="font-display text-lg font-medium text-white">
            {siteConfig.brandStatement}
          </p>
        </div>

        <div className="mt-8 flex flex-col-reverse items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/40 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
