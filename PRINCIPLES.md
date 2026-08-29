# Principles

This document exists before any code does. It is the thing I check a decision
against when the decision isn't obvious. If a future change conflicts with what
is written here, the change is wrong, or this document needs to be argued with
and edited first — not quietly ignored.

---

## 1. What this is

A personal bio site for Yogendra Sodha, linked from a resume and from job
applications. The goal it serves is a **data engineering role**.

It is not a blog, not a product, not a client-facing agency site, and not a
place that collects anything from anybody.

### The one reader

A hiring manager or recruiter who opened the link from a resume, on a phone,
between two other candidates, with maybe thirty seconds of patience.

Every decision on this site answers to that person. Not to designers on
Dribbble, not to a framework's best-practice guide, not to my own interest in
building something clever.

Three questions they must be able to answer, in this order:

1. **Who is this and what do they do?** — inside 10 seconds, without scrolling.
2. **Is it real?** — the work has to be visible, not asserted.
3. **How do I reach them?** — one click, never buried.

If a section on this site does not serve one of those three, it does not
belong on this site.

---

## 2. The design center

**Reference: Mike Matas's portfolio (mikematas.com).** Not to copy — to learn
the discipline from.

What that site actually does, and why it works: he is an interface designer, so
his site *is* the argument. Nobody has to take his word for it. The restraint,
the pacing, the way each project is shown running on the device it was built
for — the site demonstrates the skill instead of claiming it. The copy is
short because the work isn't.

**The translation to data engineering is not "make it pretty."** It is:

> The site should demonstrate engineering judgment the way his demonstrates
> interface judgment.

An interface designer proves it with an interface. A data engineer proves it
with **clarity under complexity** — the ability to take something genuinely
messy and make the shape of it obvious. That is the actual skill, and a site
can show it:

- Show a real query, a real schema, a real pipeline diagram, a real chart —
  the artifact in the medium it actually lives in. Not a paragraph describing
  that a pipeline exists.
- The hardest part of the job is deciding what to leave out of a report. A
  site that leaves things out is the same skill, performed in public.
- Restraint reads as confidence. Clutter reads as someone hedging.

**This is the trade-off, stated plainly so nobody is surprised by it later:**
a minimal site of this kind carries no filler. There is nowhere to hide. It
works only if the two or three projects on it are genuinely good and honestly
described. The design cannot rescue thin content — it will expose it. That is
a feature, and it means the writing is the hard part of this project, not the
CSS.

### Aesthetic

Pure black and white, Apple-like. Concretely:

- **Monochrome by default.** Black, white, and a couple of greys. Colour is
  not decoration — colour is *information*. It appears where it means
  something (a value in a chart, a state, a link) and nowhere else. One accent
  at most, used rarely enough that it still lands when it shows up.
- **Typography carries the design.** Big, confident, well-spaced type on a
  quiet ground. If the layout only works because of a gradient, a shadow, a
  border, or a card, the layout is not working.
- **Whitespace is not empty.** It is the pacing. Resist the urge to fill it.
- **Motion explains or does not exist.** No animation for the sake of proving
  something can animate. Anything that moves must clarify a transition or a
  relationship. Respect `prefers-reduced-motion`.
- **The chrome disappears.** Navigation should be almost invisible until it's
  needed, and obvious the moment it is.
- **Fewer pages, deeper pages.** One strong page beats five thin ones.

### The default answer is no

Every feature, section, library, animation, and widget starts as a **no** and
has to earn a yes by serving one of the reader's three questions. When in
doubt, remove it and see if anything is actually missing. Usually nothing is.

---

## 3. Ethics

These are not negotiable for speed or for looks.

### Honesty about the work

- No inflated titles. No "led" where the honest word is "contributed to" or
  "built."
- **No invented metrics.** Every number on this site is one that could be
  defended, calmly, in an interview by someone who is asked "how did you get
  that?" A number that can't survive that question does not go on the site.
- No AI-written filler presented as a personal voice. The words are the
  owner's. Drafting help is fine; publishing something he wouldn't say out
  loud is not.
- Failed and abandoned work can be described as such. It is more credible than
  a wall of successes, not less.

### Employer and client data

This is a personal bio site and, as it stands, no work data belongs on it. The
rule is written down anyway, because the temptation shows up later, when
there's a really good chart:

- **No employer data. No customer names, line IDs, production figures,
  internal screenshots, or proprietary schemas** — including ones that seem
  harmless.
- Demonstrations use synthetic or public data. Real impact is described
  qualitatively, or as a figure the owner is clearly authorised to state.
- The professional cost of this being wrong once is far larger than any gain
  from a more impressive chart. Not a close call.

### The visitor

- **Nothing is collected.** No analytics, no tracking pixels, no third-party
  fonts phoning home, no cookie banner — because there are no cookies to
  consent to.
- Not knowing how many people visited is an acceptable price. It is, in fact,
  the point.
- No dark patterns, no fake urgency, no email capture, no "let's connect"
  modal.

### The reader who isn't like me

Accessibility is a floor, not a feature:

- WCAG AA contrast, actually measured rather than assumed. Pure black on pure
  white makes this easy; light grey on white is where it usually breaks.
- Full keyboard navigation, visible focus states.
- Semantic HTML. Real headings in real order. Alt text that says something.
- Readable on a five-year-old phone on a bad connection.

---

## 4. How it's built and run

The stated constraint: **minimal deployment, nothing to maintain, nothing
collected, free.**

**Resolution of a conflict in the brief:** the ask mentioned keeping any
database small and on a free tier. A personal bio site that collects nothing
needs **no database at all** — and that is strictly better than a small one. A
database is a thing that expires, gets breached, needs a password rotated, and
sends a "your free tier is ending" email in eighteen months. Zero is less work
than small. So:

- **Static site. No backend, no database, no server-side runtime.** Content
  lives in the repository.
- Free static hosting (GitHub Pages or Cloudflare Pages — decision pending),
  deployed by pushing to the branch. No deploy pipeline to babysit.
- **Content is editable without a rebuild toolchain being remembered.** Coming
  back after eight months to update one job title must not require an
  archaeology session. If the build needs a README to run, the build is too
  complicated.
- **Dependencies are a maintenance cost, so they start at zero.** Each one has
  to justify its own upkeep. A framework that needs quarterly patching to
  serve a page of text has not justified it.
- Core content is real HTML and works with JavaScript off. JS enhances; it is
  never the reason a paragraph is visible.
- It should still work, untouched, in three years.

---

## 5. Deciding, when it's unclear

In order:

1. **Does it help the one reader answer their three questions?** If no, cut it.
2. **Is it honest?** If it needs a caveat to not mislead, it needs the caveat
   or it needs to go.
3. **What does it cost to maintain in a year?** Prefer the boring option.
4. **Would removing it be noticed?** If not, remove it.
5. **Does it prove something, or just claim it?** Prefer proof.

The failure mode this project is most at risk of is not ugliness. It is
**building an interesting technical toy instead of a clear page about a
person** — which is an easy mistake for an engineer to make, and it fails the
one reader completely.

---

## Open questions

Held deliberately, to be settled before or during build:

- **More design references are coming** from the owner (articles on UI
  principles, plus other portfolios). Nothing is final until those are read.
  Note: mikematas.com could not be opened from the build environment — the
  network blocks it — so the reading of that site above is secondhand and
  needs correcting by someone who can see it.
- **Plain HTML/CSS, or a static generator?** The repository currently carries a
  Python `.gitignore`, which may or may not signal an intent. This is a real
  fork in the road for the maintenance promise in §4.
- **Which projects go on it, and are they strong enough to carry a design with
  nowhere to hide?** (See §2. This is the highest-risk open question.)
- **Resume as a downloadable PDF, or as the page itself?**
- **Custom domain, or a github.io address?**
