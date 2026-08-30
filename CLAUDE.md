# CLAUDE.md

Personal bio/portfolio site for Yogendra Sodha. Target role: data engineer.

## Read this first

**Read `PRINCIPLES.md` before writing or changing any code here.** It defines
who the site is for, what the design is centred on, the ethical lines, and the
maintenance constraints. It was written deliberately before the first line of
code.

Short version, which is not a substitute for reading it:

- **One reader:** a hiring manager with ~30 seconds, on a phone. Everything
  answers to them.
- **Design:** monochrome, typography-led, Apple-like restraint. Reference is
  Mike Matas's portfolio. Every element starts as a *no* and earns its place.
- **Ethics:** honest claims and defensible numbers only; no employer or
  customer data ever; nothing collected from visitors (no analytics, no
  cookies); WCAG AA is a floor.
- **Build:** static site, **no database, no backend**, minimal dependencies,
  free hosting, works with JavaScript off, still works untouched in three
  years.

If a request conflicts with `PRINCIPLES.md`, say so and get the document
changed first. Don't route around it silently.

## Shipping

**Standing instruction from the owner: open a pull request and merge it to
`main` every time a change is finished.** No need to ask each time.

- Work on the feature branch, push, open the PR, merge it.
- `main` is the production branch: merging deploys to
  https://datafromsodha.fyi via Cloudflare. Treat a merge as publishing.
- Because of that, verify before merging rather than after. Run the checks in
  `README.md` and confirm the page renders.
