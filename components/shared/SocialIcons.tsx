import type { SVGProps } from "react";

/**
 * lucide-react v1 dropped brand/logo icons (LinkedIn, X/Twitter, Instagram),
 * so these are minimal hand-drawn SVGs kept local to avoid an extra
 * dependency for three icons.
 */

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3a1.97 1.97 0 1 0 0 3.94A1.97 1.97 0 0 0 5.25 3ZM20.45 20h-3.37v-5.97c0-1.42-.03-3.25-1.98-3.25-1.98 0-2.29 1.55-2.29 3.15V20H9.44V8.5h3.24v1.57h.05c.45-.86 1.56-1.77 3.22-1.77 3.45 0 4.5 2.27 4.5 5.22V20Z" />
    </svg>
  );
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 3H21.7l-6.1 7 7.2 9.9h-5.6l-4.4-6-5 6H2.9l6.5-7.5L2.5 3h5.7l4 5.4L18.9 3Zm-1 15.4h1.6L7.2 4.5H5.5l12.4 13.9Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
