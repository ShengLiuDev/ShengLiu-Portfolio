# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at http://localhost:8080
npm run build      # Production build to dist/
npm run preview    # Preview production build locally
npm run lint       # ESLint
npm run deploy     # Build + deploy to GitHub Pages via gh-pages
```

There are no tests in this project.

## Architecture

**Stack:** React 18 + TypeScript + Vite, deployed as a static site to GitHub Pages at `johnnyliu.dev`. CI/CD via `.github/workflows/deploy.yml` triggers on pushes to `main`.

**Routing:** Three client-side routes defined in `src/App.tsx`:
- `/` → `src/pages/Index.tsx` — hero, career timeline, tech stack, resume preview
- `/projects` → `src/pages/Projects.tsx` — project cards with details
- `/research` → `src/pages/Research.tsx` — NLP research stats, impact metrics, experience breakdown

**Content is hardcoded** in the page files. All project data lives in the `projectsData` array in `Projects.tsx`; all impact metrics live in `impactMetrics` in `Research.tsx`. There is no CMS or data layer.

**Path alias:** `@` resolves to `./src` (configured in `vite.config.ts`).

**Static assets** (`malachowsky_3.jpg`, `Johnny-Liu-Resume.pdf`, `CNAME`) live in `public/` and are referenced via `import.meta.env.BASE_URL` to ensure correct paths on GitHub Pages.

## Styling

Tailwind CSS with shadcn/ui component primitives (Radix UI). Custom design tokens are defined as CSS variables in `src/index.css` with both light and dark mode variants.

Custom utility classes defined in `src/index.css`:
- `.card-glass` — frosted glass card style
- `.card-elevated` — gradient elevated card
- `.text-gradient` / `.text-gradient-accent` — gradient text using primary/accent colors
- `.glow-primary` — primary color box-shadow glow
- `.section-dark` — dark gradient section background

Typography: `Space Grotesk` (`font-display`, used for headings) and `Inter` (`font-body`, used for body text) loaded from Google Fonts.

Color palette centers on two semantic colors: `primary` (blue) and `accent` (teal/green). Use these rather than hardcoded colors when styling new elements.
