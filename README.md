# yogendra-sodha/portfolio

Personal bio site. Static HTML and CSS with one small JavaScript file.

## Before you change anything

Read **`PRINCIPLES.md`** first. It settles who the site is for, the ethical
lines, and the maintenance constraints, and it outranks everything else here.
`CONTENT.md` is the stocktake of what exists; `STRUCTURE.md` is the page spec.

Two rules are easy to break by accident:

- **Three colour values only** — ink, ink at 55%, paper. Every bit of colour on
  the page comes from the artifacts. The chrome stays monochrome so they carry it.
- **Four type sizes only** — 40 / 24 / 18 / 15. Hierarchy is weight and opacity.

## Run it

No build step, no dependencies.

```sh
cd public && python3 -m http.server 8000
# then open http://127.0.0.1:8000
```

## Files

```
wrangler.jsonc                       deploy config — publishes ./public only
public/index.html                    the whole page
public/assets/styles.css             the visual system
public/assets/slot.js                the one idea — the sticky "Used by" line
public/assets/fonts/figtree-*.woff2   the typeface, self-hosted
public/assets/fonts/OFL.txt          its licence — keep it with the files
```

**Everything published lives in `public/`.** The design documents at the root
are working notes and are deliberately not served from the domain.

`assets/slot.js` is progressive enhancement. With JavaScript off the sticky
line is not rendered at all and each project shows its own audience inline, so
nothing is lost.

## Deploy

**Cloudflare Pages**, free plan, from the repository root.

The domain `datafromsodha.fyi` is registered with Cloudflare, so DNS is handled
inside the same account — no records to copy between two dashboards, which is
where this step usually goes wrong.

1. Push to `main`.
2. Cloudflare dashboard → **Workers & Pages** → Create → **Pages** → Connect to
   Git → authorise GitHub → pick `yogendra-sodha/portfolio`.
3. Build settings — Cloudflare's Git flow now creates a **Worker**, not a Pages
   project, so it asks for commands rather than an output directory:
   - **Build command:** leave empty. There is nothing to build.
   - **Deploy command:** `npx wrangler deploy`
   `wrangler.jsonc` supplies the rest: it publishes `./public` as an
   assets-only Worker with no script, so nothing runs on a request.
4. Deploy. You get a `*.pages.dev` URL immediately.
5. **Custom domains** → add `datafromsodha.fyi` and `www.datafromsodha.fyi`.
   Cloudflare creates the DNS records itself because the domain is on the same
   account.
6. Make the apex canonical and redirect `www` to it with a Redirect Rule.

Free plan headroom, from Cloudflare's published limits: unlimited bandwidth and
requests, 500 builds/month, 100 custom domains, 20,000 files, 25 MiB per file.
This site is three files and about 150 KB.

No database. See `PRINCIPLES.md` §5 — the site collects nothing, so it has
nothing to store.

## Still outstanding

The page is honest about what it does not have yet — the two dashed boxes and
the portrait frame are placeholders and **must not survive to launch**.

1. **Titan screenshot** — the dashboard cropped to the panel, no browser or
   Windows chrome. Two captures, same crop: `3/3 online · leader #1`, then after
   killing node 1, `2/3 online · leader #2`.
2. **MenuWeek screenshot** — one real screen of it in use.
3. **A photograph.**
4. **The résumé.** Not linked yet, deliberately: the PDF prints
   `github.com/yogendrasinh-sodha`, which is a 404. The correct account is
   `github.com/Yogendra-sodha`. Fix the document, then add the link in the
   header where the comment marks the spot.
5. **A domain**, custom or `github.io`.

## Checks worth re-running after a change

Nothing here is automated, and for a page this size that is the right call.
Open it and confirm:

- No horizontal scrolling on a phone. Wide diagrams scroll inside their own box.
- With JavaScript disabled, every project still says who uses it.
- The sticky line goes quiet above the first project and below the last, rather
  than leaving a stale audience on screen.
- Dark mode still reads. Both diagrams draw in `currentColor`, so they invert.
- Nothing loads from a third party. No analytics, no cookies. The typeface is
  served from `assets/fonts/`, not from a font CDN — check the network panel
  shows only your own origin.
