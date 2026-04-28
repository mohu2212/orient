# Orient — Invest your time with us

Bilingual (Arabic / English) marketing site for **Orient Digital Marketing & Software Solutions**, built with Next.js 16, Tailwind CSS v4, and `next-intl`. Glassmorphism design using the brand's green + yellow identity.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000 — root redirects to `/ar`. The English version lives at `/en`.

## Tech

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- `next-intl` for AR/EN routing with RTL/LTR direction switching
- Framer Motion for entrance animations
- Static export (`output: 'export'`) for GitHub Pages deployment

## Project structure

```
app/[locale]/        AR + EN routes (layout sets dir=rtl|ltr)
components/          Header, Hero, Stats, Services, About, Contact, Footer, LocaleSwitcher
i18n/                next-intl routing + request config
messages/            ar.json / en.json — all copy
lib/                 site.ts (contact info), services.ts (the 9 services)
public/              logo.png, index.html (redirects /  → /ar/)
```

## Deployment (GitHub Pages)

The repo includes `.github/workflows/deploy.yml`. To enable:

1. In the repo on GitHub, go to **Settings → Pages → Build and deployment** and set **Source = GitHub Actions**.
2. Push to `main`. The workflow runs `next build` with `GITHUB_PAGES=true` (sets `basePath=/orient`) and uploads `out/` to Pages.
3. Site will be live at `https://mohu2212.github.io/orient/`.

## Customizing

- Brand contact (phone, email, address, WhatsApp, social URLs): [`lib/site.ts`](lib/site.ts)
- Services list and icons: [`lib/services.ts`](lib/services.ts)
- All visible copy: [`messages/ar.json`](messages/ar.json) and [`messages/en.json`](messages/en.json)
- Brand colors and glass styling: [`app/globals.css`](app/globals.css) (`--primary`, `--accent`, `.glass-card`)
