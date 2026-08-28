# Client Feedback — Status &amp; Remediation Plan

Reviewed against the codebase at commit `013efb9` (2026-08-28).

Legend: ✅ Addressed · ⚠️ Partially addressed · ❌ Not addressed

---

## Home Page — Public View

| # | Comment | Status | Evidence / Gap |
|---|---|---|---|
| 1 | Marquee photos float horizontally, shuffled | ✅ | [`ProfileWall.astro`](src/components/ProfileWall.astro) seeds a random shuffle per row and animates three rows in alternating directions (`profile-scroll` keyframes in [`global.css`](src/styles/global.css#L893)), pausing on hover. |
| 2 | Sync menu with main site, fix mobile bug | ⚠️ | [`Header.astro`](src/components/Header.astro) is deliberately built to mirror humansofpsg.org's menu tree (comment in the file says so) with a working mobile toggle + touch-friendly submenu carets. Structurally done, but needs a **side-by-side visual QA pass against the live main site** (desktop and mobile) to confirm no remaining mismatch — the "bug" that was reported hasn't been reproduced/verified as fixed. |
| 3 | Background white, as main site | ✅ | `--color-bg` changed from `#fff8f0` to `#ffffff` (confirmed pure white on humansofpsg.org) in [`global.css`](src/styles/global.css). |
| 4 | Fonts: Fedora (heading) / Futura (subheading) | ✅ | Traced the main site's actual CSS: headings use **Fredoka** (free Google Font — "Fedora" was very likely a mishearing/typo of this), body/subheading text uses **Futura LT W01 Book** (commercially licensed via Wix, not freely embeddable). Client approved: swapped `--font-body` (headings) from Fraunces to Fredoka; kept `--font-ui` on Jost, an established free Futura-style substitute already in use, as the subheading font ([`global.css`](src/styles/global.css), [`BaseLayout.astro`](src/layouts/BaseLayout.astro)). |
| 5 | Header/footer font size & position match main site (web + mobile) | ⚠️ | Structure/links are mirrored, but exact type scale and spacing haven't been pixel-checked against the main site, and this is blocked by #4 (fonts not yet swapped). |
| 6 | SEO tooling for discoverability | ✅ | Canonical URLs, OG/Twitter tags, JSON-LD (`WebSite` + `Organization` site-wide, `Person` per story, `BreadcrumbList` on listing pages), `@astrojs/sitemap`, `robots.txt`, RSS feed all present ([`BaseLayout.astro`](src/layouts/BaseLayout.astro), [`psgians/index.astro`](src/pages/psgians/index.astro), [`tag/[tag]/index.astro`](src/pages/tag/%5Btag%5D/index.astro)). Remaining work (sitemap submission to Search Console/Bing) is operational, not code. |
| 7 | Favicon + logo image, as humansofpsg.org | ✅ | Favicon set (`favicon.ico`, 16x16/32x32 PNG, apple-touch-icon). Header brand mark now renders the client-supplied `humansofpsg.avif` wordmark logo instead of plain text ([`Header.astro`](src/components/Header.astro)). Footer brand left as text — the logo's black wordmark wouldn't read against the footer's blue background. |
| 8 | Search field and other filters same size | ✅ | `.profile-filters` is now a 4-column equal-width grid (all controls `width: 100%`), stacking to one full-width column on mobile ([`global.css`](src/styles/global.css)). |
| 9 | Right-click content protection | ✅ | Matches humansofpsg.org: context menu blocked site-wide, custom "HOP © Copyright" gradient toast shown at cursor, image drag disabled ([`BaseLayout.astro`](src/layouts/BaseLayout.astro)). |
| 10 | Copyright line in footer, as desk page | ✅ | `© {year} by HOP \| Build in India by PSGians`, right-aligned bottom bar, matching humansofpsg.org verbatim ([`Footer.astro`](src/components/Footer.astro)). |

## Admin Page — Author View

| # | Comment | Status | Evidence / Gap |
|---|---|---|---|
| 1 | Banner image 3:2 | ✅ | Added a separate optional `bannerImage` field (falls back to the profile photo when unset), enforced at `aspect-ratio: 3/2` on the story-page hero ([`content.config.ts`](src/content.config.ts), [`config.yml`](public/admin/config.yml), [`psgians/[id]/index.astro`](src/pages/psgians/%5Bid%5D/index.astro)). |
| 2 | Profile photo 4:5 | ✅ | The main profile-photo display (story cards, `.story-card-media`) was already `aspect-ratio: 4/5` — renamed the CMS field to "Profile photo" with a 4:5 crop hint for clarity. The small circular avatars in the floating marquee/filter grid (`.profile-chip`/`.profile-card`, ~88px) are a separate decorative treatment, left as-is — flag if those should also become 4:5 rectangles. |
| 3 | Fonts Fedora/Futura in admin | ✅ | Same Fredoka (headings) / Jost (elsewhere) pairing now loaded and applied via broad selectors in [`public/admin/index.html`](public/admin/index.html). |
| 4 | Editor content area adapts to web/mobile space | ❌ | No custom CMS styling exists to verify/tune this — currently 100% Decap CMS defaults, unreviewed. |
| 5 | Remove fields: photo description, area, category, contributor, tags | ✅ | Removed `photoAlt` (now auto-generated as "Photo of {name}" via [`lib/photoAlt.ts`](src/lib/photoAlt.ts)), `category`, and `contributedBy` (and its "As told to" byline) from the schema, CMS form, and every template that read them. **Kept** `location` ("area") and `tags` per client decision — `tags` turned out to be load-bearing for 5 site sections (Memories/Moments/Movements/Models/Milestones), not just tag browsing, so it was flagged and kept rather than silently breaking those. Dropping `category` also removed the 3 tag pages that existed solely from category values (23 → 20 built pages), which is expected. |
| 6 | Story field: underline, "edited but not published" indicator, richer editing | ⚠️ | Strengthened the Status field's hint into an explicit warning ("none of your edits are live yet…") as a safe, static stand-in for a dynamic banner — a true dynamic banner needs a custom Decap widget that couldn't be tested live in this environment (no headless browser available here) and risked breaking `/admin` if the API was misremembered; flagged as a follow-up once someone can verify it live. "Underline" was too ambiguous to act on — needs clarification from the client on whether they mean a text-formatting button or a visual style. |
| 7 | LinkedIn/wiki + references links in admin footer | ⚠️ | Added a fixed footer bar to [`public/admin/index.html`](public/admin/index.html) with a LinkedIn link (matching the public site's). Wiki/references URLs weren't available yet — a `TODO` marks where to add them once provided. Also unverified live: Decap CMS's own root may overlap the fixed bar depending on its internal layout — needs a quick visual check once deployed. |

---

## Remediation Plan

Ordered roughly by effort; items in the same numbered group can be done together since they touch the same files.

### A. Quick styling fixes (low effort, no open questions)

1. **Copyright line** (Public #10) — add `© {new Date().getFullYear()} Humans of PSG. All rights reserved.` to [`Footer.astro`](src/components/Footer.astro), styled to match the "desk page" reference.
2. **Equal-size filter controls** (Public #8) — give `.profile-filters select` and `input[type=search]` the same `flex-basis`/`min-width` in [`global.css`](src/styles/global.css#L826).
3. **Right-click content protection** (Public #9) — add a `contextmenu` handler (and `user-select: none` on images/story text) in a small script in [`BaseLayout.astro`](src/layouts/BaseLayout.astro), matching whatever the "desk page" does today. *(Note: this is a deterrent only, not real protection — flag this expectation to the client.)*

### B. Background color (Public #3)

- Confirm the exact hex the main site uses for its page background (likely `#ffffff`).
- Change `--color-bg` in [`global.css`](src/styles/global.css#L2) to that value in both the light and (if applicable) dark blocks, then visually re-check contrast on the cream-tinted elements that were designed against `#fff8f0` (borders, shadows).

### C. Logo image (Public #7)

- Obtain the logo asset (SVG/PNG) used at humansofpsg.org.
- Replace the text brand mark in [`Header.astro`](src/components/Header.astro#L56) with an `<img>`/`<svg>` logo, sized correctly for both header and footer, with matching favicon already in place.

### D. Typography — Fedora / Futura (Public #4, #5; Admin #3)

- **Open question for the client**: Futura is a commercial typeface (not on Google Fonts); "Fedora" isn't a common web font name either — likely a licensed/custom font already used on humansofpsg.org, or possibly a free lookalike (e.g. Google's "Jost" is already a Futura-style geometric sans — it may already be the intended substitute). Need the client to confirm:
  - exact font names/weights used on the main site, and
  - whether we have license/webfont files for them, or should use a close free alternative.
- Once confirmed: replace the `@font-face`/Google Fonts `<link>` in [`BaseLayout.astro`](src/layouts/BaseLayout.astro#L46) and the `--font-body`/`--font-ui` variables in [`global.css`](src/styles/global.css#L14), then do a full pass matching header/footer type scale and spacing to the main site (closes Public #5 together with this).
- Apply the same fonts to the admin UI (Admin #3) via custom CSS injected in [`public/admin/index.html`](public/admin/index.html).

### E. Mobile menu / main-site sync verification (Public #2)

- Do a side-by-side pass of `Header.astro`/`Footer.astro` against humansofpsg.org on both desktop and common mobile widths (375px, 390px, 428px), specifically re-checking the originally reported mobile bug.
- Fix any drift found (spacing, submenu behavior, breakpoint mismatches).

### F. SEO polish (Public #6)

Code is largely done; remaining items are small additions + operational steps:
- Add `Organization`/`BreadcrumbList` JSON-LD to listing pages (`psgians/index.astro`, tag pages) for richer search results.
- Verify all story photos have meaningful `photoAlt` text (already required by schema).
- Operational (not code): submit the sitemap to Google Search Console / Bing Webmaster Tools, verify site ownership, confirm `astro.config.mjs`'s `site` URL matches the final production domain.

### G. Admin — banner (3:2) vs profile photo (4:5) (Admin #1, #2)

- **Open question for the client**: today there is a single `photo` field used both as the story hero image *and* the profile-wall thumbnail. A 3:2 banner and a 4:5 profile photo are two different crops/purposes — confirm whether the client wants:
  - (a) two separate upload fields (`bannerImage` 3:2 + `profilePhoto` 4:5), or
  - (b) one uploaded photo with two different CSS crops applied (simpler for contributors, but crops may look off depending on framing).
- Once decided:
  - If (a): add a `bannerImage` field to [`content.config.ts`](src/content.config.ts) and [`config.yml`](public/admin/config.yml), update [`psgians/[id]/index.astro`](src/pages/psgians/[id]/index.astro) to render it in `.story-hero` with `aspect-ratio: 3/2`, and update `ProfileWall`/`StoryCard` to use `profilePhoto` with `aspect-ratio: 4/5` (dropping the current circular crop).
  - If (b): apply `aspect-ratio` + `object-fit: cover` at the two call sites without touching the schema, and add CMS `hint:` text telling contributors how each crop will be used.

### H. Admin — remove/rework fields (Admin #5)

- `contributedBy` can be safely removed from the *editor form* only if the client no longer wants "as told to X" attribution shown on the story page — otherwise keep it (used in [`psgians/[id]/index.astro`](src/pages/psgians/[id]/index.astro#L69)).
- `photoAlt`, `location`, `category`, `tags` are all load-bearing: `photoAlt` drives accessibility text, `location`/`category` appear on story cards and detail pages, `tags` power `/tag/[tag]/` pages and the profile filters. Removing them from the form without removing the *feature* would break those pages/filters or leave empty values.
- **Recommendation to the client**: either (i) keep these fields but make them optional with sensible defaults so contributors can skip them, or (ii) confirm dropping the features they power (tag pages, city/dept/expertise filters) is acceptable, so the schema and pages can be simplified together. Needs a decision before touching `config.yml`/`content.config.ts`.

### I. Admin — richer story editor (Admin #6)

- Add a "Draft has unpublished edits" indicator: compare the entry's last-edited state against its published `status` (Decap CMS editorial workflow already tracks draft/in-review/ready — this can likely be surfaced with the CMS's built-in workflow UI rather than custom-built, needs a short spike).
- For "underline" and "more features to design content" — clarify with the client exactly which formatting controls they want (the current `markdown` widget already supports bold/italic/links/lists/headings via its toolbar; underline is *not* standard Markdown, so confirm whether they mean rich-text underline support or something else) before customizing the widget/toolbar.

### J. Admin — layout responsiveness (Admin #4)

- Audit the CMS editor at common breakpoints (mobile, tablet, desktop) once custom fonts/CSS are added (Step D), since no custom admin styling exists yet to have introduced any regressions — likely fine on Decap defaults, but unverified.

### K. Admin — footer links (Admin #7)

- Add a simple footer to [`public/admin/index.html`](public/admin/index.html) (Decap CMS supports custom UI via its React registration API, or a plain HTML footer appended outside the CMS mount point) with the LinkedIn/wiki and "references" links the client wants — need the actual URLs from the client.

---

## Open questions for the client (blockers)

1. Exact hex for "white" background, if not `#ffffff`.
2. Font files/license for Fedora and Futura, or confirmation to use free equivalents.
3. The logo image asset (SVG/PNG) from humansofpsg.org.
4. Banner (3:2) vs profile photo (4:5): one shared image with two crops, or two separate uploads?
5. Which admin fields are safe to drop vs. which downstream features (tag pages, filters, "as told to" byline) they're allowed to break.
6. What "add underline" and "more features to design content input field" specifically mean for the story editor.
7. The LinkedIn/wiki and "references" URLs for the admin footer.
8. What the desk page's existing right-click protection and copyright line actually look like (implementation reference), to match Public #9/#10.
