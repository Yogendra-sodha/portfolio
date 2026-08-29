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
python3 -m http.server 8000
# then open http://127.0.0.1:8000
```

## Files

```
index.html                    the whole page
assets/styles.css             the visual system
assets/slot.js                the one idea — the sticky "Used by" line
assets/fonts/archivo-*.woff2  the typeface, self-hosted
assets/fonts/OFL.txt          its licence — keep it with the files
```

`assets/slot.js` is progressive enhancement. With JavaScript off the sticky
line is not rendered at all and each project shows its own audience inline, so
nothing is lost.

## Deploy

**Vercel**, free tier, from the repository root. It is a static site, so there
is nothing to configure: import the repo, accept the defaults (no framework, no
build command, output = root) and every push deploys.

No database. Vercel will offer you Postgres and Supabase — the site collects
nothing, so it has nothing to store, and an unused database is just a password
to rotate. See `PRINCIPLES.md` §5.

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
