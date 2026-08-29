# Content inventory

Raw material for the site. Not copy — a stocktake, so decisions about what goes
on the page are made against what actually exists. Read `PRINCIPLES.md` first;
the numbers rule in §4 applies to everything here.

Status key: **Live** (a stranger can use it) · **Internal** (real users, not
public) · **Public repo** (readable, not deployed) · **Private**.

---

## 1. Work at Aluf Plastics (Data Analyst, Mar 2024 – present)

Figures below are deliberately rounded per §4. Exact values stay on the resume.

| # | What it is | Status | What it replaced |
|---|---|---|---|
| A1 | **Production analysis MCP server** — FastMCP over SQL Server, with a knowledge base built from bag-machine and extrusion manuals. Exposes SQL execution, document generation and embedding-based retrieval as discrete tools, with schema introspection and audit logging. | Internal | Ad-hoc analyst requests; it's now the default tool, not the exception |
| A2 | **Weekly production email pipeline** — Claude API pipeline; structured JSON in, HTML card reports out, on a seven-pillar analytical framework. | Internal | A Power Automate flow — brittle low-code plumbing, replaced with something governed |
| A3 | **Company ontology / product lineage platform** — Flask + SQL Server + JS. Unifies products, orders, components, materials and scrap into one connected model; single-click lineage for hundreds of finished goods. | Internal | Hours of manual cross-system analysis |
| A4 | **Daily production report web app** — real-time reporting. | Internal | Paper forms filled in by hand; removed transcription lag and its errors |
| A5 | **SQL alert engine** — config-driven, packaged, with cooldown logic against notification fatigue. | Internal | Editing code to add an alert; now it's a config change |
| A6 | **Dimensional models + pipelines** — fact/dimension models in SQL Server; ~15 batch and streaming pipelines across production, material and QC; terabyte-scale multi-source (ERP + sensor) ingestion in Python/PySpark; device acquisition via PLC/Kepware (OPC-UA). | Internal | — (foundation the rest sits on) |

**The pattern across A1–A5, unprompted and in the owner's own words: every one
of them replaced something.** That is the strongest thread in the whole
inventory.

## 2. Side projects

| # | What it is | Status | Notes |
|---|---|---|---|
| S1 | **Titan — distributed SQLite.** Rust. Raft consensus engine written from scratch (`raft-core`), SQLite state machine adapter, HTTP API, leader election and failover, multi-table transactions, TLS, web dashboard, Python client. `pip install titan-db`. | **Live on PyPI**, public repo | Verified from the README |
| S2 | **Opportunity Cost Widget** — Chrome extension. | **Live on the Chrome Web Store** | Details needed — see gaps |
| S3 | **MenuWeek** — meal planning app, used by the owner's roommates. | **Live** (Vercel) | Details needed — blocked from here |
| S4 | **JobFlow** — job application manager. Node + PostgreSQL backend, Chrome extension that autofills applications from stored data. | Public repo, personal use | Verified from the README |
| S5 | **First-click attribution streaming pipeline** — Kafka, Flink, Postgres, synthetic e-commerce data; HashMap state backend; Grafana/Prometheus. | On resume | Portfolio/learning project |

## 3. Facts

- **Reachable at:** yuvisodha@gmail.com · linkedin.com/in/yogendrasinh-sodha ·
  github.com/Yogendra-sodha
- **Education:** MEng Engineering Management, Stevens Institute of Technology
  (2022–23). BE Chemical Engineering, Gujarat Technological University
  (2016–20).
- **Earlier:** Data Engineer, Leo9 Studio, India (Oct 2019 – Oct 2021) — S3 data
  lake, Glue ETL, Athena, Spark.
- **Off-screen:** badminton is the love, pickleball and volleyball are what
  actually get played.

---

## 4. Gaps and corrections

Things to fix or supply before the site is built.

1. **The resume's GitHub link is dead.** It prints
   `github.com/yogendrasinh-sodha`, which returns **404**. The real account is
   `github.com/Yogendra-sodha`. Every copy of that resume already sent has a
   broken link on it — the one link that would show the Rust work. Fix the
   resume, not just the site.
2. **The resume never mentions Rust, Raft, or distributed systems.** Titan is
   the most technically ambitious thing in this inventory and it is invisible on
   the document that gets read first.
3. **Needed from the owner:** what MenuWeek and the Opportunity Cost Widget
   actually do, and any install/user counts. Both are blocked from this
   environment, so they can't be checked here.
4. **Screenshots** of the internal tools (A1–A5), scrubbed of employer data —
   see §4 of `PRINCIPLES.md` before capturing anything.
5. **Which projects make the cut?** The design has nowhere to hide (§2). This
   inventory has eleven items and the site should carry far fewer.

---

## 5. Candidates for the one organising idea

The equivalent of the reference site's scroll-bound year counter: one fixed slot
whose value changes as you move through the work. One will be chosen; the rest
are recorded so the reasoning survives.

| # | Idea | The slot reads | Strength | Risk |
|---|---|---|---|---|
| C1 | **What it replaced** | `Replaced: paper forms` → `Power Automate` → `hours of manual analysis` | Every project already has one, in the owner's own words. Accumulates into a single claim: *this person removes manual work.* | Doesn't fit the side projects, which replaced nothing |
| C2 | **Scale odometer** | `3 TB` → `200+ finished goods` | Closest structural copy of the reference | Boastful; and the numbers rule (§4) blunts it |
| C3 | **The question it answers** | `"Why did line 353 stop?"` | Very data-native; shows problem-thinking | Hard to keep to one line |
| C4 | **Built in free time** | `A weekend` → `Two evenings` | True, memorable, human | Frames serious work as a hobby |
| C5 | **The stack** | `Rust · Raft` → `Python · FastMCP · SQL Server` | Instantly legible to an engineer; zero boasting; covers every item | A spec list, not an insight — the least distinctive |
| C6 | **Time to answer** | `Hours → one click` → `A week → Monday 6am` → `Handwritten → real time` | Latency of insight *is* the product in data engineering. Shows transformation, not just substitution | Needs an honest before-figure for each; some are guesses |
| C7 | **Who uses it** | `Plant managers and executives` → `Operators on the floor` → `Strangers on the Chrome Web Store` → `My roommates` | Proves the work is *real* — the hardest thing for a portfolio to prove. Covers work and side projects equally. Has an arc, and the last one is disarmingly honest | Could read as small if the framing is wrong |
