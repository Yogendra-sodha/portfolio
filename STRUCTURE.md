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

### The slot

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

Featured, in this sequence — strongest first, and the C7 arc descends naturally:

1. **Production analysis MCP server** — *the plant's analysts and managers*
2. **Pipelines and dimensional models** — *the plant's reporting, end to end*
3. **Product lineage platform** — *plant managers and executives*
4. **Titan, distributed SQLite** — *anyone who `pip install`s it*

Then **Also built** — one line each, no images: weekly email pipeline · daily
production report app · SQL alert engine · Kafka/Flink attribution pipeline
(*labelled a learning project, synthetic data*) · Opportunity Cost Widget
(*Chrome Web Store*) · MenuWeek · JobFlow.

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
a preference.

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

| Project | Artifact needed |
|---|---|
| MCP server | One exchange: the question in plain English, the SQL it generated, the answer. The single most persuasive image on the site. |
| Pipelines | An architecture diagram — **drawn as inline SVG, not a screenshot** |
| Lineage platform | The lineage graph for one product, relabelled |
| Titan | A terminal recording: kill the leader, cluster survives. `asciinema`, or a plain terminal screenshot |

## Open

- The one line under the name. It has to answer "what do you do" in about eight
  words and it is the hardest sentence on the site.
- The About paragraph, in the owner's own voice.
- A photograph.
- Resume: as a linked PDF, and it needs the dead GitHub URL fixed first
  (`CONTENT.md` §4).
- Domain: custom, or `github.io`.
