# Architecture — Regatta Registers Website

A production rebuild of [regattaregisters.com](https://www.regattaregisters.com) — an enterprise industrial asset, inspection, and compliance platform for mining, construction, and heavy industry.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Sanity v5 CMS · Stripe · i18n (AU/CO)

---

## Directory Layout

```
src/
├── app/                  # Next.js App Router (pages + API routes)
├── components/
│   ├── ui/               # Design-system primitives
│   ├── layout/           # Site chrome (header, footer, nav)
│   └── marketing/        # Page sections and composites
│       └── sections/     # Reusable cross-page sections
├── config/               # Site metadata, navigation, country registry
├── content/
│   └── countries/        # Per-country localised copy (au/, co/)
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions (cn, formatCurrency)
└── sanity/               # CMS schemas, queries, client, plugins
```

---

## Routing & Route Groups

Route groups control which layout chrome wraps each page.

| Group | Chrome | Pages |
|---|---|---|
| `(marketing)` | Header + Footer | `/`, `/about`, `/pricing`, `/contact`, `/features/*`, `/resources/blog`, `/resources/blog/[slug]`, `/resources/learning`, `/shop`, `/shop/[slug]`, `/shop/success`, `/shop/cancel`, legal pages |
| `(auth)` | Minimal (no header/footer) | `/login`, `/free-trial` |
| `(landing)` | Variant landing | `/inspections` |
| `studio/[[...tool]]` | Sanity Studio | CMS admin |
| `styleguide/` | None | Component showcase |

---

## Component Layers

Components are organised in three layers. Never reach past a layer — pages consume marketing sections, not UI primitives directly from a loop.

### 1. `components/ui/` — Design-system primitives
Atomic, no page logic, Tailwind-only styling. Reusable anywhere.

| Component | Purpose |
|---|---|
| `Button` | Polymorphic (renders `<a>` or `<button>`). Variants: `primary`, `secondary`, `outline`, `ghost`, `danger`. Sizes: `sm`, `md`, `lg`. Supports `loading` state. |
| `Card` | Container with optional `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter` sub-components. |
| `Container` | Centred max-width wrapper. Sizes: `narrow`, `default`, `wide`. |
| `Section` | Page section wrapper with optional `SectionHeading`. Props: `muted`, `size`. |
| `Badge` | Pill label. Variants: `brand`, `success`, `warning`, `danger`. |
| `Input` / `Textarea` / `Select` / `Checkbox` | Form controls with consistent focus rings. |
| `Field` / `Label` | Form field wrapper with label and error handling. |
| `Logo` | Site logo. Variant `white` for dark backgrounds. |
| `Spinner` | Loading spinner (used inside `Button`). |
| `ContainerScrollAnimation` | Scroll-reveal wrapper using Framer Motion. |
| `VideoBackground` | Video element wrapper for background videos. |
| `PagePlaceholder` | Empty-state placeholder for stub pages. |

### 2. `components/layout/` — Site chrome
Used only in layouts (`app/(marketing)/layout.tsx` etc.). Never import these inside page sections.

| Component | Purpose |
|---|---|
| `Header` | Sticky top nav. Mega-menu for Features/Resources. Scroll-aware opacity. Includes `CartButton` and `CountrySelector`. |
| `Footer` | Multi-column link grid. Reads structure from `siteConfig.footerNav`. |
| `NavLink` | Active-state-aware link (uses `usePathname`). |
| `MobileNav` | Hamburger drawer for mobile. |
| `CountrySelector` | Country dropdown (AU/CO). Persists via `useCountry`. |
| `CartButton` | Cart badge icon. Opens `CartDrawer`. |

### 3. `components/marketing/` — Page sections
Composite components for specific marketing pages. Composed from `ui/` primitives.

`sections/` holds cross-page reusable sections:

| Section | Purpose |
|---|---|
| `WhySection` | Feature cards grid with scroll-reveal animation. |
| `HowItWorks` | Numbered steps with icons. |
| `IndustriesSection` | Industry cards grid. |
| `LiftingEquipmentSection` | Feature highlight section. |
| `TestimonialsSection` | Server component — fetches featured testimonials from Sanity. |
| `TrustBar` | Stats + industry logos row. |
| `CtaBand` | Full-width call-to-action band. |

---

## Design System

All styling uses **Tailwind CSS v4** with custom tokens defined in `src/app/globals.css` under `@theme`.

### Token namespaces

| Namespace | Use |
|---|---|
| `brand-50` … `brand-900` | Orange primary (`#F28500` = `brand-500`) |
| `ink-50` … `ink-950` | Neutral grays (`#272B2E` = `ink-950`) |
| `success`, `warning`, `danger`, `info` | Status colours (green, amber, red, blue) |
| `radius-xs` … `radius-2xl` | Border radii (0.25rem – 1.5rem) |
| `shadow-card`, `shadow-elevated`, `shadow-popover` | Box shadows |

**Typography:** Plus Jakarta Sans (`--font-sans`) loaded via Google Fonts. Monospace via `--font-mono`.

### Rules

- All styling **must use Tailwind classes** referencing these tokens.
- **No CSS Modules**, no `styled-components`, no hardcoded hex values.
- The only permitted `style={}` prop is for **dynamic animation delays** (e.g. `style={{ transitionDelay: \`${i * 80}ms\` }}`), which Tailwind cannot generate at runtime.

### Animation system (`globals.css`)

| Name | Usage |
|---|---|
| `animate-fade-slide-up` | Page-load entry. Apply with `animationDelay` inline style for stagger. |
| `animate-scale-up` | Scale + fade entry. |
| `animate-glow-drift` | Subtle floating/pulsing. |
| `.reveal-up` + `.is-visible` | Scroll-reveal class pair. Toggled by `useInView` hook. |

---

## Internationalisation (i18n)

Two-tier system — country registry + per-country content.

### 1. Country registry — `src/config/countries.ts`
Defines which countries are supported. Each entry has: `code`, `locale`, `currency`, `flag`, `name`.

### 2. Country content — `src/content/countries/`
Per-country folder (`au/`, `co/`) exports:
- Localised copy (hero, nav, pricing, features, about, contact, FAQ…)
- Pricing tiers with amounts in the country's currency
- `TypeScript` types live in `src/content/countries/types.ts`

### 3. `useCountry()` hook — `src/hooks/use-country.ts`
- Uses `useSyncExternalStore` — no Context, no prop-drilling.
- SSR-safe: defaults to `au` on the server, hydrates the saved choice on the client.
- Persists to `localStorage` (`rr-country` key).
- Updates `<html lang>` on country change.
- Returns: `{ code, meta, content, countries, setCountry }`.

**Rule:** Never hardcode currency strings, locale strings, or country-specific copy. Always consume them via `useCountry()` and `formatCurrency(amount, content.locale, content.currency)` from `src/lib/format.ts`.

---

## State Management

| State | Mechanism | Where |
|---|---|---|
| UI state | `useState` | Local to each component |
| Shopping cart | `useCart()` — reducer + `localStorage` (`rr_cart`) | `CartProvider` in `(marketing)/layout.tsx` |
| Selected country | `useSyncExternalStore` (module-level) | `use-country.ts` — no Provider needed |

Reach for Context or a store only when prop-drilling becomes genuinely painful. Do not add a state library without discussion.

---

## Sanity CMS

| File / Folder | Purpose |
|---|---|
| `sanity/lib/client.ts` | `createClient` (projectId, dataset, apiVersion) |
| `sanity/lib/image.ts` | `urlFor()` — builds optimised image URLs from Sanity asset references |
| `sanity/lib/live.ts` | `defineLive()` — enables real-time content updates |
| `sanity/queries.ts` | All GROQ queries (posts, products, testimonials, team, learning, videos) |
| `sanity/schemaTypes/` | Schema definitions: `post`, `product`, `testimonial`, `teamMember`, `learningItem`, `videoTutorial` |
| `sanity/plugins/analytics/` | Sanity Studio widget — GA4 top pages |
| `sanity/plugins/clarity/` | Sanity Studio widget — Microsoft Clarity |

**Server components** fetch from Sanity directly (no API route needed for reads). Client components must not import Sanity server-only modules.

---

## API Routes

| Route | Purpose |
|---|---|
| `/api/checkout` | Creates a Stripe Checkout session. Accepts cart items, uses `stripePriceId` if set; otherwise creates dynamic prices. Restricted to AU/NZ shipping. |
| `/api/analytics/top-pages` | Fetches GA4 top pages via Google service account. Cached 1 hour. Used by the Sanity Studio analytics widget. |

---

## Hooks

| Hook | File | Purpose |
|---|---|---|
| `useCountry` | `hooks/use-country.ts` | Country/locale selection, SSR-safe, persisted |
| `useCart` | `hooks/use-cart.tsx` | Shopping cart (reducer + localStorage) |
| `useInView` | `hooks/use-in-view.ts` | Detects when an element enters the viewport (12% threshold). Toggles `.is-visible` for CSS scroll-reveal transitions. |

---

## Coding Conventions

- **TypeScript everywhere.** No `any`. Type all props with explicit `interface` or `type`.
- **Tailwind only.** No inline `style={}` except dynamic animation delays.
- **Function components**, PascalCase names, one component per file.
- **`key` props on every `.map()`.** Use stable IDs from the data, never array indexes.
- **Imports order:** external packages → internal `@/` aliases.
- **Keep components small.** Extract into a new file when a component grows beyond ~150 lines.
- **No `any` on API routes.** Use Zod or explicit types for parsed request bodies.

---

## Commands

```bash
npm run dev      # Turbopack dev server → http://localhost:3000
npm run build    # Production build + TypeScript typecheck
npm run lint     # ESLint
```

Always run `lint` and `build` before declaring a task done. Report the actual output.

---

## Environment Variables

Defined in `.env.local` (not committed). Key variables:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset (`production`) |
| `SANITY_API_TOKEN` | Read token for server-side Sanity fetches |
| `STRIPE_SECRET_KEY` | Stripe secret key for checkout |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID |
| `NEXT_PUBLIC_CLARITY_ID` | Microsoft Clarity project ID |
| `GOOGLE_SERVICE_ACCOUNT_KEY` | JSON key for GA4 API (analytics widget) |
