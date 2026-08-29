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
the discipline from. What follows was measured by loading and driving the real
site in a browser, not recalled or guessed.

### What the site actually is

A single horizontal timeline of a career, running **backwards**. At 1440px wide
the page is ~7,210px of horizontal scroll and exactly one viewport tall. A
normal downward mouse wheel moves you **sideways** through it. Sixteen projects,
newest first, from Lobe (2020) back to Delicious Library (2004).

Each project is a still image of the actual product, sitting in the device it
shipped on — an original iPhone for the 2007 work, an iPad for 2010, a laptop
for Lobe. No video on the timeline. The next project is always half-visible at
the right edge, and that bleed is the only thing telling you to keep going.
There is no arrow, no "scroll" hint, no progress bar.

### The trick

Under his name is a year. It is **bound to scroll position**. Scrolling right
counts it down — 2026, 2015, 2014, 2011, 2010, 2007, 2006, 2005, 2004 — so
moving through the page is moving back through his career. One number, in one
fixed place, changing as you move.

That is the entire concept, and it costs almost nothing to build. It is worth
studying precisely because it is not expensive. It is one idea, executed
exactly, and it does the work that a page of self-description would do badly.

### The measured specifics

**The palette is three values. Not three colours — three values:**

- `rgb(0, 0, 0)` — black
- `rgba(0, 0, 0, 0.4)` — the same black at 40%, which is the only "grey"
- `rgba(255, 255, 255, 0.94)` — near-white

There is no fourth. Every scrap of colour on that site comes out of the
screenshots of the work itself: the green of Lobe, the orange of a photograph.
**The chrome is monochrome so the work supplies the colour.** That is the
mechanism behind "pure black and white," and it is a much sharper rule than
"use less colour."

**One typeface, essentially one size.** Lab Grotesque (a commercial licence —
worth knowing before planning to match it). Nearly every word on the page is
**18px**. The name is 40px. That's the whole scale.

Hierarchy is carried by **weight and opacity instead of size**:

| Role | Size | Weight | Colour |
|---|---|---|---|
| Project name | 18px | 600 | black |
| His role ("Founder") | 18px | 100 | black |
| Collaborator names | 18px | 100 | black @ 40% |
| Name / year | 40px | 400 | black |
| Nav (About, Twitter) | 20px | 100 | black @ 40% |

Weight **100** — ultra-light — for almost all running text. The loudest thing
on the page is 600, and it is used for one word at a time.

**Motion is not CSS.** There is exactly one keyframe animation in the entire
stylesheet (a loading spinner) and essentially no CSS transitions. The
smoothness is JavaScript bound to scroll offset. The feel does not come from
easing curves sprinkled on hover states; it comes from one thing tracking
your input continuously.

**Restraint in the content, not just the layout.** The project metadata — name,
role, company, and a full list of collaborators — is in the page but sits at
`visibility: hidden` on the timeline. At rest you see the work and nothing
else. And the credits, when shown, name **every** person he worked with: Steve
Jobs, Bas Ording, Imran Chaudhri, Al Gore, Tony Fadell. Generosity as a
credibility signal.

**The About page is ~60 words.** One paragraph, one black-and-white photograph
(desaturated, so it cannot compete with the work), three links: Email, Twitter,
Instagram. Opening it blurs and fades the timeline out behind it. That is the
entire "about me" of a person with that CV.

**No third-party requests.** Loading the page fetched its own code and its own
sixteen images. No analytics, no tag manager, no hosted fonts phoning home.

### What to take, and what not to

**Take:** the three-value palette and the rule underneath it. Hierarchy by
weight and opacity rather than size. One organising idea executed exactly.
Content bleeding off-edge as the only affordance. Metadata withheld until
asked for. Crediting collaborators by name. A short About.

**Do not take:** the site sets `user-scalable=no, maximum-scale=1.0`, which
blocks pinch-zoom on a phone. That fails §3 of this document. A horizontal
scroll hijack and `visibility: hidden` metadata are also hostile to screen
readers and keyboard users. **We copy the restraint, not the accessibility
debt.**

### The translation to data engineering

**It is not "make it pretty."** It is:

> The site should demonstrate engineering judgment the way that site
> demonstrates interface judgment.

An interface designer proves it with an interface. A data engineer proves it
with **clarity under complexity** — taking something genuinely messy and making
its shape obvious. That is the actual skill, and a page can perform it:

- Show a real query, a real schema, a real pipeline, a real chart — the
  artifact in the medium it lives in. Not a paragraph asserting a pipeline
  exists.
- The hardest part of the job is deciding what to leave out of a report. A site
  that leaves things out performs that same judgment in public.
- Restraint reads as confidence. Clutter reads as hedging.

The open design question this raises — **what is our equivalent of the year
counter?** — is deliberately not answered here. It needs one idea, not five.

**The trade-off, stated plainly so nobody is surprised later:** a site like this
carries no filler. There is nowhere to hide. It works only if the few projects
on it are genuinely good and honestly described. The design cannot rescue thin
content — it will expose it. That is a feature, and it means the writing is the
hard part of this project, not the CSS.

### The default answer is no

Every feature, section, library, animation and widget starts as a **no** and has
to earn a yes by serving one of the reader's three questions. When in doubt,
remove it and see if anything is actually missing. Usually nothing is.

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
  owner's. Drafting help is fine; publishing something they wouldn't say out
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
- **What is our equivalent of the year counter?** The one organising idea the
  page is built around. Unanswered on purpose — see §2.
- **Plain HTML/CSS, or a static generator?** The repository currently carries a
  Python `.gitignore`, which may or may not signal an intent. This is a real
  fork in the road for the maintenance promise in §4.
- **Which projects go on it, and are they strong enough to carry a design with
  nowhere to hide?** (See §2. This is the highest-risk open question.)
- **Resume as a downloadable PDF, or as the page itself?**
- **Custom domain, or a github.io address?**
