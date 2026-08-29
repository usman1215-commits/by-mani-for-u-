# Will You Be Mine? — Standalone Website

This repository contains the complete source for the interactive proposal website. It is a **client-only React application**: the proposal flow, puzzle state, animations, and success screen all run in the browser. No application backend, API server, authentication system, or database is required for the current feature set.

## Architecture

| Area | Implementation |
| --- | --- |
| Frontend | React 19 + TypeScript + Vite |
| Styling | Tailwind CSS 4 with custom ethereal-minimalist CSS animations |
| Routing | Wouter, with the main experience served at `/` |
| Runtime server | Optional Express static server in `server/index.ts` |
| Database | None required; there is no persistent user data in this version |
| Assets | Local PNG assets in `assets/`; the current UI also uses CSS-generated glows |
| External services | Google Fonts are loaded from Google Fonts; replace with local fonts if a fully offline build is required |

## Requirements

Install Node.js 20 or newer and either npm, pnpm, or yarn. The included lockfile is for pnpm, so pnpm is the most reproducible option.

## Install and run locally

```bash
pnpm install
pnpm dev
```

Open the local URL printed by Vite, normally `http://localhost:3000`.

## Type-check and production build

```bash
pnpm check
pnpm build
pnpm start
```

The production build writes browser files to `dist/public` and bundles the optional Express server to `dist/index.js`. The `start` command serves the compiled site with the port supplied through `PORT`, defaulting to `3000`.

## Deploy as static files

For Netlify, Vercel, Cloudflare Pages, GitHub Pages, or any comparable static host, use the following settings:

| Setting | Value |
| --- | --- |
| Build command | `pnpm install --frozen-lockfile && pnpm build` |
| Publish directory | `dist/public` |
| Node version | `20` or newer |
|

Because the app is a single-page experience, configure the host to rewrite unknown routes to `/index.html` if you add more client-side routes later. The current proposal flow only needs `/`.

## Deploy with the included Node server

```bash
pnpm install --frozen-lockfile
pnpm build
PORT=3000 pnpm start
```

Put a reverse proxy such as Nginx or Caddy in front of the Node process when deploying on a VPS. The server is intentionally small: it serves the compiled static files and falls back to `index.html` for client-side routing.

## Assets

The `assets/` directory includes the generated visual assets used for future or optional enhancements: `hero-glow-background.png`, `floating-hearts-pattern.png`, `glow-orb-accent.png`, and `confetti-particles.png`. They are stored locally in this archive and can be referenced from the frontend through an imported asset path or copied into `client/public` for root-relative URLs.

## Database and backend note

There is deliberately **no database configuration** in this repository because the current website does not collect or save responses. If you later want to record a response, add a backend and database of your choice and document the provider credentials through environment variables. Do not put secrets in the frontend or commit `.env` files. A non-secret starting template is included at `config/env.template`; copy it to `.env` only when running the optional Node server locally or on your own host.

## Removing external font loading

The site currently requests Playfair Display and Geist from Google Fonts for typography. For a fully self-contained deployment, download and license the fonts appropriately, place them in a local public font directory, and update the `@font-face` rules in `client/src/index.css`.

## License and branding

This standalone copy contains no Manus hosting URL, Manus analytics snippet, Manus runtime plugin, or Manus-specific storage integration. Add your own license, domain, favicon, and branding before public distribution if desired.
