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

Pushes to `main` build and deploy automatically via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

One-time setup (repo admin, via the GitHub web UI): go to
**Settings → Pages** and set **Source** to **GitHub Actions**. Until that's
set, the workflow will build successfully but the deploy step will fail.

The site is configured in `astro.config.mjs` for the custom domain
`www.psgians.org` (see `public/CNAME`). To finish wiring it up:

1. At your DNS registrar for `psgians.org`, add:
   - A `CNAME` record: `www` → `tech-itrace.github.io`
   - Four `A` records on the apex (`@`) → `185.199.108.153`,
     `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (lets
     `psgians.org` without `www` also resolve, and lets GitHub redirect it
     to `www`)
2. In the repo's **Settings → Pages**, set **Custom domain** to
   `www.psgians.org` and wait for DNS to verify, then enable **Enforce
   HTTPS**.

DNS propagation can take up to 24 hours. Until it's verified, the site
keeps building and deploying to the `github.io` URL as before.

## Commands

| Command           | Action                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`       | Install dependencies                          |
| `npm run dev`       | Start local dev server at `localhost:4321`    |
| `npm run build`     | Build the production site to `./dist/`        |
| `npm run preview`   | Preview the build locally before deploying    |
