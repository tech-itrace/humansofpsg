# Humans of PSG

A static blog of short, first-person stories about PSG alumni around the
world — one subject, one portrait, one narrative per post. See [PLAN.md](PLAN.md)
for the full project plan and design rationale, and
[CONTRIBUTING.md](CONTRIBUTING.md) for how to submit a story.

## Project structure

```text
/
├── public/
│   └── images/stories/<slug>/    # per-story portrait images
├── src/
│   ├── content/stories/*.md      # one story per file (see schema below)
│   ├── content.config.ts         # frontmatter schema (Zod)
│   ├── components/                # Header, Footer, StoryCard
│   ├── layouts/BaseLayout.astro
│   └── pages/
│       ├── index.astro           # homepage story grid
│       ├── about.astro
│       └── stories/[id]/index.astro
└── package.json
```

## Adding a story

Create `src/content/stories/<slug>.md`:

```md
---
name: "Priya"
photo: images/stories/<slug>/cover.jpg
photoAlt: "Short description of the photo"
location: "Triplicane"      # Neighborhood
city: "Chennai"              # Chennai, Bengaluru, Los Angeles, Delhi, ...
department: "Mechanical"    # optional — academic department
expertise: "Mentor"         # optional — Management, Founder, Mentor, ...
category: "Work"            # Work, Family, Craft, Migration, etc.
pullQuote: "A short line pulled from the story."
publishDate: 2026-01-10
contributedBy: "Your name"
status: draft | published   # draft stories don't appear on the site
tags: [work, craft]
---

Story body in Markdown, first person.
```

Place the portrait at `public/images/stories/<slug>/cover.jpg`. A story
only appears on the site once `status: published`.

Non-technical contributors can instead use the `/admin` editor — see
[CONTRIBUTING.md](CONTRIBUTING.md). It requires a one-time OAuth proxy
setup documented in [oauth-proxy/README.md](oauth-proxy/README.md).

## Deployment

The site deploys via [Cloudflare Pages](https://pages.cloudflare.com/),
connected directly to this repo's `main` branch. Every push to `main`
triggers an automatic build and deploy — no GitHub Actions workflow
involved.

One-time setup (Cloudflare dashboard, repo admin):

1. **Workers & Pages → Create → Pages → Connect to Git**, select this repo
   (`tech-itrace/humansofpsg`), branch `main`.
2. Build settings:
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/`
   - The Node version is auto-detected from `.nvmrc` — no extra env var
     needed.
3. Deploy and verify the generated `*.pages.dev` preview URL works.
4. On the Pages project's **Custom domains** tab, add `www.humansofpsg.com`
   as primary and the apex `humansofpsg.com` with a redirect to `www`. Since
   the zone lives on Cloudflare, this auto-creates the needed DNS records.
5. Wait for SSL to issue, then confirm `https://www.humansofpsg.com` loads.

The site is configured in `astro.config.mjs` for the custom domain
`www.humansofpsg.com`.

## Commands

| Command           | Action                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`       | Install dependencies                          |
| `npm run dev`       | Start local dev server at `localhost:4321`    |
| `npm run build`     | Build the production site to `./dist/`        |
| `npm run preview`   | Preview the build locally before deploying    |
