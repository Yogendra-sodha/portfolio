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

Thirty seconds is the budget for *reading*. The judgment starts far earlier:
people form a stable aesthetic impression of a page within **17 milliseconds**
of seeing it, before a single word is processed (§3). We do not get to earn
that first impression with good content. The layout either reads as competent
instantly, or the content is being read by someone who has already decided.

Every decision on this site answers to that person. Not to designers on
Dribbble, not to a framework's best-practice guide, not to my own interest in
building something clever.

### The industry is the setting, not the identity

Settled by the owner, and it governs every line of copy: **he is a data
engineer who currently works in manufacturing, not a manufacturing data
person.** Plastics is the most recent job, not the career.

This does *not* mean stripping the specifics out. Pulling data off physical
machines over OPC-UA, modelling scrap and material lineage — that concreteness
is what makes the work credible, and a reader in any industry sees *this person
handles real, awkward data* rather than *this person only does plastics*. The
transferability comes from how the work is framed, never from vagueness.

So: the identity lines (the sentence under the name, the opening of the About,
the audience lines) describe the shape of the engineering. The industry appears
underneath as where it happened. Any line that would stop being true after a
move to a different sector needs rewriting, not deleting.

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
weight and opacity rather than size. One organising idea, executed exactly.
Crediting collaborators by name. A short About. Generous outer margins with
tight internal grouping.

**Do not take:**

- `user-scalable=no, maximum-scale=1.0`, which blocks pinch-zoom on a phone.
  That fails §4 of this document.
- The horizontal scroll hijack — hostile to keyboard and screen-reader users,
  and see §3 on prototypicality for the separate reason it costs us.
- `visibility: hidden` metadata. It is *minimal*, not *simple* (§3). Where the
  reader needs a fact, the fact is visible.
- The off-edge bleed as the *only* affordance. It is elegant, and it relies on
  a visitor willing to experiment. Ours will not be.

**We copy the restraint, not the accessibility debt and not the navigation.**

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
counter?** — is deliberately not answered here. It needs one idea, not five,
and per §3 it has to sit inside a conventional layout rather than replace one.

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

## 3. What the evidence says

Three sources beyond the reference site: Apple's *Principles of great design*
(WWDC 2026, session 250), Ngo, Teo & Byrne (2003) on computable interface
aesthetics, and Tuch et al. (2012) on first impressions. They agree with each
other more than they disagree — and where they disagree with the reference
site, they win.

### The finding that changes the plan

Tuch et al. showed people screenshots of websites for **17 milliseconds** and
asked how appealing they were. Two factors predicted the answer:

- **Visual complexity (VC)** — less is better, and the relation was linear, not
  an inverted U. Websites are already complex stimuli; reducing complexity kept
  helping.
- **Prototypicality (PT)** — how much a page matches what people expect a page
  of its kind to look like. More is better.

Both registered within 17 ms. VC is processed earlier; **PT's effect grows with
exposure time** until, by 500–1000 ms, it matters as much as complexity. And
the sentence that matters most for us:

> "Websites of low prototypicality are generally judged as being unattractive
> — in fact, this counts for websites of high as well as low complexity."

**A low-prototypicality layout is not rescued by being clean.** Their closing
advice is that designs contradicting what users expect "may trigger a
suboptimal first impression and impair users' expectations."

Now score the reference site. Matas is **excellent on VC** — three colour
values, one type size, nothing on screen that isn't the work. He is **poor on
PT**: a horizontal timeline, a wheel that scrolls sideways, no visible
navigation conventions, metadata hidden at rest.

He can afford that. He is a famous interface designer and the strangeness *is*
the demonstration; people arrive already wanting to see what he did. A data
engineer applying for jobs has none of that credit. The same choice that reads
as confidence on his site reads as "I can't find the thing" on ours.

Apple arrives at the same place from a different direction. **Familiarity:**
"build on what people know," "for common actions, there's no need to reinvent
the wheel," and consistent placement means people "don't have to think about
it." **Agency:** "Instead of guiding someone down a pre-determined path, let
them dive right into your experience... at their own pace" — which is precisely
what a scroll hijack takes away.

So three independent lines — the 2012 experiment, Apple's principles, and the
accessibility floor in §4 — converge on the same instruction:

> **Borrow the restraint, not the navigation.** Conventional structure:
> vertical scroll, navigation where navigation goes, sections in the order a
> reader expects. Then spend the entire novelty budget on **one** idea inside
> that familiar shell.

*Honest limit on this evidence:* Tuch's stimuli were company and organisation
websites, rated in a lab, mostly by students. Not personal portfolios, and not
hiring managers. The direction of the effect is well replicated and I'd act on
it; the exact size of it for our case is not something that study measured.

### Simple is not minimal

Apple's sharpest correction, and it lands directly on the reference site:

> "If you bury all your functionality inside a single place, that might make
> your interface look more minimal, but it doesn't make it simple."

Simplicity is *frictionless and intuitive* — people find what they need without
effort. Clarity is built with hierarchy: order, spacing, contrast. "When your
hierarchy is strong, the most important item on the screen is always the most
obvious one." And sometimes simple means **adding**: context, a label, a number
that lets someone make an informed decision.

Consequence: Matas's metadata sitting at `visibility: hidden` is *minimal*, not
*simple*. We don't copy it. Where a project's role, stack, or outcome is what
the reader needs, it is visible by default.

This is the guard rail on our own "default answer is no." Cutting until the
page looks empty is not the goal. Cutting until nothing is left but what the
reader needs is.

### Computable checks (Ngo, Teo & Byrne)

Fourteen measures for screen layout, each scored 0–1. Use them as a **checklist
to argue with, not a score to chase** — it is a proposed model with limited
validation, and no layout is good because it computes well. The ones with real
teeth here:

- **Economy = 1 / (number of distinct sizes).** Fewest sizes wins outright.
  Matas uses about three. Ours: **four or fewer across the entire site.**
- **Unity** — leave *less* space between elements than at the margins. Generous
  outer margins, tight internal grouping. This is exactly what the reference
  site does and why groups read as single objects.
- **Regularity and Simplicity** — minimise the number of distinct alignment
  points. One grid, few columns, everything landing on the same lines.
- **Sequence** — arrange so the eye moves big to small, upper-left to
  lower-right. Decide deliberately what gets seen first, second, third.
- **Balance and Equilibrium** — optical weight even across both axes; centre of
  mass near the centre of the frame.
- **Proportion** — prefer ratios that have survived: 1:1, 1:1.414, 1:1.618,
  1:1.732, 1:2. Applies to image blocks and text columns.
- **Cohesion** — keep aspect ratios consistent between elements.
- **Density** — worth flagging because it cuts against fashion: their measure
  *peaks around 50% screen coverage*, not at maximum emptiness. Whitespace is
  pacing, not a virtue in itself. The page should read as composed, not
  evacuated.

### The rest of Apple's principles, folded in

- **Purpose** — "Every feature you add to your product asks something of the
  person using it. It asks for their time, their attention, and their trust."
  That is the *reason* behind our default-no, stated better than we stated it.
- **Responsibility** — "Privacy is a human right." Ask only when there's a
  reason, and give context first. We collect nothing, so we clear this by
  construction (§4).
- **Flexibility** — support real contexts and the full range of abilities: a
  phone on a bad signal, a screen reader, tired eyes at the end of a day of
  CVs. Feeds the accessibility floor in §4.
- **Craft** — "Great design has longevity." Maintenance *is* craft, not a
  chore that follows it. This is the same claim as §5, arrived at from the
  design side rather than the ops side.
- **Delight** — "not by adding confetti or tacking on extra flourishes at the
  end"; instead, name the emotion you want and reinforce it. **Ours, confirmed
  by the owner and now settled: a hiring manager should finish the page feeling
  that this person is clear, careful, and worth a conversation.** Calm and
  trusting, not dazzled. If a proposed flourish doesn't move that feeling, it
  goes. This is the tie-breaker for every later argument about a detail.
- **Agency and Forgiveness** — mostly not applicable; a bio site has no
  destructive actions to undo. The residue that does apply: let people move
  through it their own way, and never trap them in a path.

### Sources

- Apple, *Principles of great design*, WWDC 2026, session 250.
- Ngo, D.C.L., Teo, L.S., Byrne, J.G. (2003). Modelling interface aesthetics.
  *Information Sciences* 152, 25–46.
- Tuch, A.N., Presslaber, E.E., Stöcklin, M., Opwis, K., Bargas-Avila, J.A.
  (2012). The role of visual complexity and prototypicality regarding first
  impression of websites. *Int. J. Human-Computer Studies* 70, 794–811.

---

## 4. Ethics

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

### Numbers on the site

**Settled: orders of magnitude, not exact figures.** The resume says 100GB, 3TB,
200+ finished goods, ~15 pipelines. The site says "terabyte-scale multi-source
pipelines", "hundreds of finished goods". A resume goes to one recruiter; this
page is public and indexed for years, and exact operational volumes attached to
a named employer are the employer's to publish, not ours.

The engineering signal survives the rounding. An engineer reads "terabyte-scale"
and "~15 production pipelines" and learns everything they needed to. Nothing on
the site should be a number the owner could not calmly defend, or that a
manager at the named employer would be unhappy to find on Google.

### House style

**No em dashes or en dashes anywhere on the site.** Owner's preference, and it
is not negotiable by a later editor who thinks a sentence needs one. Use a
plain hyphen with spaces around it, or restructure the sentence, or use a
comma. This applies to the page copy, to the diagram labels, and to the
comments in the shipped files, since anyone can read those with view-source.

The working documents in the repository root are notes rather than the site,
so they are exempt.

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

## 5. How it's built and run

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
- **Free static hosting on Cloudflare Pages**, at `datafromsodha.fyi`, deployed
  by pushing. No deploy pipeline to babysit. The domain is registered with the
  same provider, so there is one dashboard rather than two. Vercel also offers a Postgres and a Supabase integration: **we do not
  use them.** A site that collects nothing has nothing to store, and an unused
  database is a password to rotate and a free tier to outlive. If a future
  feature seems to need one, that is the signal to question the feature.
- **Content is editable without a rebuild toolchain being remembered.** Coming
  back after eight months to update one job title must not require an
  archaeology session. If the build needs a README to run, the build is too
  complicated.
- **Dependencies are a maintenance cost, so they start at zero.** Each one has
  to justify its own upkeep. A framework that needs quarterly patching to
  serve a page of text has not justified it.
- **One exception, taken deliberately: the typeface.** The system font stack
  costs nothing and looks like nothing, and on a page this bare the face is
  carrying most of the personality. Figtree is self-hosted from this repository
  under the SIL Open Font License — two files, about 30KB, no third party
  contacted, no licence to renew. Hosted fonts (Google Fonts and the rest) are
  still refused: they would make every visitor's browser talk to someone else,
  which breaks §4.
- Core content is real HTML and works with JavaScript off. JS enhances; it is
  never the reason a paragraph is visible.
- It should still work, untouched, in three years.

---

## 6. Deciding, when it's unclear

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
  page is built around, and the only place the novelty budget gets spent.
  Constrained by §3: it lives inside a conventional layout. Unanswered on
  purpose.
- **Plain HTML/CSS, or a static generator?** The repository currently carries a
  Python `.gitignore`, which may or may not signal an intent. This is a real
  fork in the road for the maintenance promise in §5.
- **Which projects go on it, and are they strong enough to carry a design with
  nowhere to hide?** (See §2. This is the highest-risk open question.)
- **Resume as a downloadable PDF, or as the page itself?**
- **Custom domain, or a github.io address?**
