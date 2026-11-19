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

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.5 21v-7.6h2.55l.38-2.96h-2.93V8.56c0-.86.24-1.44 1.47-1.44h1.57V4.48A21 21 0 0 0 15.3 4.3c-2.24 0-3.77 1.37-3.77 3.87v2.16H8.97v2.96h2.56V21h2.97Z" />
    </svg>
  );
}

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.47 14.38c-.28-.14-1.67-.82-1.93-.92-.26-.1-.45-.14-.64.14-.19.28-.73.92-.9 1.11-.16.19-.33.21-.61.07-.28-.14-1.18-.43-2.24-1.38-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.1-.19.05-.35-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.35-.26.28-1 .98-1 2.38 0 1.41 1.02 2.77 1.17 2.96.14.19 2 3.06 4.85 4.29.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.11.55-.08 1.67-.68 1.9-1.34.24-.66.24-1.22.16-1.34-.07-.12-.26-.19-.54-.33Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.02 2.5a9.5 9.5 0 0 0-8.2 14.28L2.5 21.5l4.86-1.27a9.5 9.5 0 1 0 4.66-17.73Zm0 17.34a7.8 7.8 0 0 1-3.98-1.09l-.29-.17-2.88.76.77-2.8-.19-.29a7.84 7.84 0 1 1 6.57 3.59Z"
      />
    </svg>
  );
}

export function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}
