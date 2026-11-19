# Olamitobi Technologies — Website & PWA

Marketing website and installable PWA for Olamitobi Technologies, built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4.

This is a **frontend-first build**: the full marketing site, design system, and PWA are complete and production-ready. The backend (Prisma schema, form persistence, transactional email, admin dashboard) is scaffolded but not wired to live services — see [Backend status](#backend-status) below.

## Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Styling**: Tailwind CSS v4, custom design tokens sampled from the brand logo
- **Motion**: `motion` (Framer Motion), custom scroll/sticky-card/canvas primitives
- **Forms**: React Hook Form + Zod, submitting to Next.js Route Handlers
- **Database**: Prisma 7 + PostgreSQL (schema written, not yet migrated — see below)
- **Email**: Resend + React Email (templates written, not yet sending — see below)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # ESLint
```

## Environment Variables

Copy `.env.example` to `.env` and fill in real values:

```bash
cp .env.example .env
```

See `.env.example` for the full list (database, Resend, site URLs, auth). If `DATABASE_URL` isn't set, forms still work end-to-end against the API routes — they just log to the server console instead of persisting.

## Backend (forms)

The site is a static export (`output: "export"`), so there is no Node server. The Contact, Quote and Consultation forms POST to small PHP endpoints in `public/api/*.php`, which send email via Resend (with a Gmail SMTP fallback through the bundled PHPMailer).

- Credentials live in `public/api/config.php`, which is **gitignored**. Copy `public/api/config.example.php` to `config.php` and fill in the real keys.

## Content

Nearly all copy lives in `lib/data/*.ts` as typed arrays — not hardcoded in components — so content can be edited without touching component code, and later migrated to the database/CMS without a rewrite.

A few files are intentionally empty or placeholder-marked rather than fabricated:

- `lib/data/team.ts`, `lib/data/testimonials.ts` — empty until real, verified content is supplied (the About/Testimonials sections render a "coming soon" state).
- `lib/data/projects.ts`, `lib/data/case-studies.ts` — illustrative sample work marked `isPlaceholder: true`, with generic client descriptors rather than invented company names.
- `lib/data/careers.ts` — empty job list; the Careers page renders an "always open to talent" state.
- `lib/data/site-config.ts` — contact email/phone/domain are placeholders marked `TODO(client)`.

Search the codebase for `TODO(client)` and `TODO(backend)` to find every spot that needs real information before launch.

## PWA

- `app/manifest.ts` + `public/icons/*` (generate/regenerate via `node scripts/generate-icons.mjs` from `public/favicon.png`)
- `public/sw.js` — hand-written service worker (cache-first for static assets, network-first for pages, `/offline` fallback). Registered from `components/pwa/ServiceWorkerRegistration.tsx`, production-only.

## Deployment (cPanel)

1. Make sure `public/api/config.php` exists with real credentials (see above).
2. Run `npm run build`. This generates the static site in `out/`.
3. In cPanel File Manager, upload the **contents** of `out/` (not the folder itself) into `public_html/`, including the hidden `.htaccess` file and the `api/` folder.
4. Check `https://<domain>/`, `/training`, `/locations/osogbo` and submit a test form.

## Local SEO checklist (outside the codebase)

- Create and verify a **Google Business Profile** for each office (Ibadan and Osogbo) with the exact same name, address and phone shown on the site.
- Submit `https://<domain>/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
- Put the website link in the bio of every social profile (Facebook, Instagram, X, LinkedIn).
- Ask happy clients and students to leave Google reviews.
