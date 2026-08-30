# Structure

The page spec. Decided against `PRINCIPLES.md` and `CONTENT.md`; both outrank
this document. No code yet — this is what the code will build.

---

## The settled decision

**The organising idea is C7 — "who uses it".** One slot, one place, whose value
changes as the reader moves through the work. It answers the reader's second
question (*is it real?*) directly, which is the hardest thing a portfolio has to
prove, and it is the only candidate that lets employer work and side projects
sit on one page without the side projects looking like padding.

The arc, in order: **institutional → public → personal.**

> Plant managers and executives → the plant's reporting, end to end →
> operators on the floor → anyone who `pip install`s it → strangers on the
> Chrome Web Store → my roommates

Ending on roommates is not self-deprecation. It is what makes the executives
line believable, and it is the one line a reader repeats to a colleague.

## Shape

**Vertical scroll. One page. Conventional layout.** §3 of `PRINCIPLES.md` is
the reason: prototypicality is judged within 17 ms and the penalty for an
unfamiliar layout deepens with exposure. The reference site's horizontal
timeline is not copied. All of the novelty budget is spent on the C7 slot and
nothing else.

```
┌─────────────────────────────────────────┐
│  Yogendrasinh Sodha                     │   name — largest type on the page
│  Data engineer. <one line>              │   the 10-second answer
│  Email · GitHub · LinkedIn · Resume     │   reachable before any scrolling
├─────────────────────────────────────────┤
│  Used by: plant managers and executives │  ← THE SLOT. sticky. changes on scroll
├─────────────────────────────────────────┤
│  [ artifact ]                           │
│  Production analysis MCP server         │
│  2–3 sentences. what it replaced.       │
│  Python · FastMCP · SQL Server          │
├─────────────────────────────────────────┤
│  … three more featured projects …       │
├─────────────────────────────────────────┤
│  Also built                             │   seven items, one line each
├─────────────────────────────────────────┤
│  About — ~60 words, one photo           │
│  Email · GitHub · LinkedIn              │   contact repeated at the end
└─────────────────────────────────────────┘
```

### The rails (wide screens)

On screens at least 80rem wide there is room in the margins, and the page uses
it the way the reference does: **the name leaves the top, parks at the left
edge at the vertical middle, and holds still while the work scrolls past.** The
contacts do the same on the right. Both fade out when the footer arrives.

The audience line lives on the left rail directly under the name — name and
changing value together, which is exactly the pairing the reference makes with
its name and year. The sticky bar is hidden whenever the rails are showing;
having both would state the same thing twice.

- The rails are **decorative mirrors** of content that already exists in the
  header and the footer. They are `aria-hidden` and their links are out of the
  tab order, so a screen reader hears the name and the contacts once, not three
  times. The real ones stay reachable at the top and the bottom.
- They arrive when the header's end is **18% into the viewport**, not when it
  has fully cleared. Waiting for it to clear leaves the first project on screen
  with the bar already hidden and no rail yet — an unlabelled project, which is
  the one thing this idea exists to prevent.
- **Below 80rem there are no rails at all** and the layout is untouched: a rail
  overlapping the reading column would be worse than no rail.
- `prefers-reduced-motion` removes the travel; they simply appear.

### The bar (narrow screens, and the fallback)

A single sticky line below the header. As each project scrolls into view the
value changes; the label `Used by:` never moves. Same mechanism as the year
counter — one fixed position, one changing value — rebuilt on a vertical axis
where it costs the reader nothing to learn.

- Implemented with `IntersectionObserver`, one class change, a short opacity
  cross-fade. No animation library.
- **With JavaScript off** the slot renders inside each project block instead, so
  every project still states who uses it. Nothing is lost, only the continuity.
- **`prefers-reduced-motion`** removes the cross-fade; the value still changes.
- The changing text lives in an `aria-live="polite"` region, or is duplicated
  per project for screen readers. Never announced twice.

## Order

**Revised** once it was confirmed that none of the employer work can be shown.
The original four put three un-screenshottable projects on the page, which would
have made it three diagrams and one photograph — abstract, and abstract is what
this design cannot carry.

Featured, in this sequence:

1. **Production analysis MCP server** — *the plant's analysts and managers* —
   schematic
2. **Pipelines and dimensional models** — *the plant's reporting, end to end* —
   schematic
3. **Titan, distributed SQLite** — *anyone who `pip install`s it* — real
   screenshot
4. **MenuWeek** — *ten roommates, every evening* — real screenshot

Two schematics then two real screenshots: the employer work carries the
professional weight, the public work carries the visual proof, and the C7 arc
runs institutional → institutional → public → personal without a break.

**The product lineage platform moves down to the list.** It is strong work and
this is the cost of it being invisible; its C7 line (*plant managers and
executives*) is the best in the inventory and is kept there.

Then **Also built** — one line each, no images: product lineage platform ·
weekly email pipeline · daily production report app · SQL alert engine ·
Kafka/Flink attribution pipeline (*labelled a learning project, synthetic
data*) · Opportunity Cost Widget (*Chrome Web Store*) · JobFlow.

Then **About**: ~60 words, one photograph, the sport line, contact.

## The visual system

Inherited from §2 of `PRINCIPLES.md`, with the accessibility debt removed.

**Palette — three values, no fourth:**

| Token | Value | Use |
|---|---|---|
| `--ink` | `#000` | Everything primary |
| `--ink-muted` | `rgba(0,0,0,0.55)` | Secondary text |
| `--paper` | `#fff` | Ground |

The reference uses black at **40%**, which is roughly 3.7:1 on white and
**fails WCAG AA for body text**. Ours is 40% only for large text; everything
else uses **55% or darker**, which clears 4.5:1. This is the one place we
knowingly diverge from the look, and §4 is why. Dark mode inverts the same
three tokens.

**Colour comes only from the artifacts.** The chrome stays monochrome so the
screenshots supply every bit of colour on the page. That is the mechanism, not
a preference. The MenuWeek screens are the first real proof of it: four warm
orange interfaces against all that white, and the page changes character.

**The favicon is the letter Y.** A converging-streams mark was tried and
reverted: it read as a graphic device competing with the screenshots rather
than a quiet label, which is the opposite of what page chrome should do. A
letter is duller and better.

**Device frames are drawn, not photographed.** A rounded body, an inset screen
and the pill in the status bar, built from the screenshots' own proportions
(1206x2622). No product render is copied. The body stays black in both themes
because it is part of the artifact, the object the work runs on, rather than
page chrome, so it does not follow the ink token and does not invert.

**Type — four sizes, no more** (Ngo's economy measure is `1 / number of sizes`):

| Size | Use | Weight |
|---|---|---|
| ~40px | Name | 400 |
| ~24px | Project titles | 600 |
| ~18px | Body, the slot, everything else | 400 |
| ~15px | Meta, stack lines, captions | 400 |

Hierarchy is carried by **weight and opacity, not size**. A system font stack —
no hosted fonts, nothing phoning home, nothing to license.

**Layout:** one column, one grid, few alignment points. Generous outer margins
with tighter internal grouping, so groups read as single objects (Ngo's unity).
Whitespace is pacing, not a goal — the density measure peaks near half
coverage, not at emptiness.

## Build

Static HTML and CSS. No framework, no build step, no database, no analytics, no
cookies. One HTML file, one CSS file, one small JS file for the slot. Deployed
by pushing. Works with JavaScript off. Should still work untouched in three
years.

## What each featured project needs

Real artifacts, captured from the actual tools. §4 of `PRINCIPLES.md` governs
every capture: **no customer names, no line IDs, no order numbers, no real
production figures, no internal hostnames or URLs.** Rename to `Product A`,
`Line 1`. Check the window title and the browser tab, which is where this leaks.

**The employer work cannot be shown — not screenshots, and not code either,
which is the employer's property.** Both employer entries are therefore inline
SVG schematics, drawn from description: the shape of the system, with no real
data, no real code, no real identifiers. For an engineering reader a clear
schematic beats a screenshot of a dashboard anyway.

| Project | Artifact | Source |
|---|---|---|
| MCP server | Schematic: a question in plain language → the tool layer (SQL execution · document generation · retrieval over equipment manuals) → the database → an answer, with the audit log drawn as a first-class output. The audit log is the detail that shows judgement, so it gets weight. | Drawn in code |
| Pipelines | Schematic: three sources fan in, ingestion, a database cylinder for the dimensional models, then a fan-out to dashboards, reports, alerts and the MCP server. The fan-out is the point: it shows the projects are one system, not four unrelated items. | Drawn in code |
| Titan | The dashboard, cropped hard. **Three states**: `3/3 online · leader #1`; after killing node 1, `2/3 online · leader #2`; then node 1 back and following, `3/3 online · leader #2`. Failure and recovery, no video needed. | Owner recaptures |
| MenuWeek | **Done.** Four real screens, status bars removed, - tonight's plan, the week, the grocery list, the recipe book - in CSS-drawn phone frames. | Supplied |

### Recapturing Titan

The supplied screenshot has the right content and the wrong frame. Remove
everything that is not the product:

- **Crop to the Titan panel only** — no browser chrome, no address bar, no
  bookmarks, no "Ask Gemini" button, no "New Chrome available" banner, no
  Windows title bars.
- **Three captures, same crop**: healthy, leader killed, old leader rejoined as
  a follower. Side by side they prove failover and recovery; any one alone
  proves nothing.
- The terminals are optional. If they are included, one is enough, and it should
  show the election, not the cargo build warnings.
- Its palette — near-black terminal, near-white dashboard, a green status dot —
  already fits the page. Its colour is allowed because it is the artifact's own.

## Open

- ~~The line under the name~~ and ~~the About paragraph~~ — drafted in
  `CONTENT.md` §7, awaiting the owner's corrections.
- A photograph.
- Resume: as a linked PDF, and it needs the dead GitHub URL fixed first
  (`CONTENT.md` §4). Correct account: `github.com/Yogendra-sodha`.
- Domain: custom, or `github.io`.
