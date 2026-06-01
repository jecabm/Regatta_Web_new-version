# CLAUDE.md

Guidance for Claude Code when working in this repository. These instructions override default behavior — follow them exactly.

## Project

A production rebuild of the **Regatta Registers** website (https://www.regattaregisters.com) — an enterprise industrial asset, inspection, and compliance platform (mining, construction, lifting equipment). This is a **rebuild, not a redesign**: preserve the existing navigation and core structure; improve architecture, design system, and code quality.

- **Language:** TypeScript (prefer `.tsx`/`.ts` over `.jsx`/`.js`)
- **Framework:** Next.js 16 (App Router) + React 19
- **Build tool:** Next.js / Turbopack
- **Package manager:** npm (use `npm`, not `yarn`/`pnpm`)
- **Styling:** Tailwind CSS v4 — design tokens live in `src/app/globals.css` under `@theme` (no `tailwind.config` file). Use the semantic tokens (`brand-*` for orange primary, `ink-*` for neutrals, `success`/`warning`/`danger` for status). Stay on the 8px spacing grid.

## Commands

```bash
npm install        # install dependencies
npm run dev        # start the local dev server (Turbopack)
npm run build      # production build (also runs TypeScript typecheck)
npm run lint       # run ESLint
```

When you change code, run `lint` and `build` before declaring the work done. Report the actual output — if something fails, say so. (No test runner is configured yet.)

## Project structure

- `src/app/` — App Router. Route groups: `(marketing)` = Home/About/Pricing/Contact (header + footer chrome); `(auth)` = Login/Free Trial (minimal chrome). `loading.tsx` + `not-found.tsx` provide loading/empty states.
  - **Routes must stay:** `/`, `/about`, `/pricing`, `/contact`, `/login`, `/free-trial`.
- `src/components/ui/` — design-system primitives (`Button`, `Container`, `Logo`, `Spinner`, …). One component per file.
- `src/components/layout/` — `Header`, `Footer`, `NavLink`, `MobileNav`.
- `src/config/site.ts` — single source of truth for site metadata + navigation (i18n-ready; AU + CO planned).
- `src/lib/` — non-React helpers (`cn` class merger).
- `public/` — static assets.

## Conventions

- **Components:** function components only. Name files and the component in `PascalCase` (`Button.tsx` exports `Button`). One main component per file.
- **Hooks:** prefix with `use`, keep them in `src/hooks/`.
- **State:** prefer local state and props. Reach for context/a store only when prop-drilling becomes painful — don't add a state library preemptively.
- **Types:** type props with an explicit `interface`/`type`. Avoid `any`.
- **Styling:** keep to the one chosen approach. Don't mix Tailwind, CSS Modules, and inline styles in the same project.
- **Imports:** group external packages, then internal modules. Use the configured path alias (e.g. `@/`) if one exists.
- **Accessibility:** use semantic HTML, label interactive elements, keep color contrast usable. Don't ship `div`-only buttons.

## Do / Don't

- ✅ Match the style, naming, and structure of surrounding code.
- ✅ Keep components small and focused; extract when a file gets unwieldy.
- ✅ Ask before adding a new dependency for something the stack can already do.
- ❌ Don't commit secrets, `.env` files, or `node_modules`.
- ❌ Don't run `git` commit/push unless I explicitly ask.
- ❌ Don't introduce a new framework, router, or state library without checking first.

## Notes

- Reference material (leaked/published system prompts) lives outside this repo at
  `C:\Users\F.Salazar\Downloads\system_prompts_leaks-main`. It is **study material only** — do not import it into the app or load it into context unless I ask.
