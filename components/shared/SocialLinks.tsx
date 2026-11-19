import type { SVGProps } from "react";

import { cn } from "@/lib/utils";
import {
  LinkedInIcon,
  XIcon,
  InstagramIcon,
  FacebookIcon,
  GitHubIcon,
  WhatsAppIcon,
} from "@/components/shared/SocialIcons";

type Icon = (props: SVGProps<SVGSVGElement>) => React.JSX.Element;

const ICONS: Record<string, { icon: Icon; label: string }> = {
  linkedin: { icon: LinkedInIcon, label: "LinkedIn" },
  twitter: { icon: XIcon, label: "X (Twitter)" },
  instagram: { icon: InstagramIcon, label: "Instagram" },
  facebook: { icon: FacebookIcon, label: "Facebook" },
  github: { icon: GitHubIcon, label: "GitHub" },
  whatsapp: { icon: WhatsAppIcon, label: "WhatsApp" },
};

export function SocialLinks({
  links,
  className,
  tone = "dark",
  prefix = "",
}: {
  links: Partial<Record<string, string>>;
  className?: string;
  tone?: "dark" | "light";
  /** Prefixed to each aria-label, e.g. "Muideen on". */
  prefix?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-3", className)}>
      {Object.entries(links).map(([key, href]) => {
        const entry = ICONS[key];
        if (!entry || !href) return null;
        const Icon = entry.icon;
        return (
          <li key={key}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer me"
              aria-label={`${prefix ? `${prefix} ` : ""}${entry.label}`}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 hover:-translate-y-0.5",
                tone === "dark"
                  ? "border-white/15 text-white hover:border-brand-400 hover:bg-brand-500 hover:text-ink-950"
                  : "border-ink-900/15 text-ink-900 hover:border-brand-500 hover:bg-brand-500 hover:text-ink-950"
              )}
            >
              <Icon className="h-4 w-4" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
