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

## Backend Status

1. **Database — live**: `DATABASE_URL` is connected (Postgres via the `@prisma/adapter-pg` driver adapter, which Prisma 7's `prisma-client` generator requires instead of reading the connection string implicitly). The Contact, Quote, Consultation, and Newsletter forms persist to Postgres via `lib/prisma.ts`. If your password contains special characters (e.g. `#`), URL-encode them in the connection string (`#` → `%23`) or avoid them.

   To (re-)apply schema changes:
   ```bash
   npx prisma migrate dev --name <description>
   npx prisma generate
   ```
   The schema (`prisma/schema.prisma`) also covers blog, case studies, projects, testimonials, team, FAQs, careers, training, events, partners, technologies, media, and site settings — not yet wired to any UI, ready for the admin dashboard.

2. **Email — not yet wired**: create a [Resend](https://resend.com) account, set `RESEND_API_KEY` in `.env`. Each route handler under `app/api/*/route.ts` has a `// TODO(backend)` comment marking exactly where to call Resend — the templates already exist in `emails/`, and `lib/resend.ts` returns `null` gracefully when no key is configured.

3. **Admin dashboard**: not yet built. Planned as a follow-up: authentication, then CRUD screens over the Prisma models above.

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

## Deployment (Vercel)

1. Push to GitHub, import into Vercel.
2. Set the environment variables from `.env.example` in the Vercel project settings.
3. Deploy — no additional configuration needed. If/when a database is connected, add a `prisma generate` step (Vercel does this automatically when `@prisma/client` is a dependency).
