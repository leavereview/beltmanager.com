# Content Batch 1 (US) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the five pages that ranked top in the 21 Nov 2026 keyword and Search Console check of the Notion "💡 BM content ideas" database.

**Architecture:** Three discipline pages copy the structure of `src/pages/karate-school-software.astro` (BaseLayout, breadcrumbs, featured answer, prose, comparison table, FAQ with schema, CTA). One template page is a standalone Astro page with a printable sheet and CSV downloads. One article is a Markdown post in the blog collection. Every new page gets at least two inbound links from pages that already exist.

**Tech Stack:** Astro 7, Tailwind, TypeScript. `npm run build` runs `astro check`, `scripts/verify-seo.js` and `scripts/verify-us-copy.js`.

**Spec:** Notion, HQ / Knowledge / SEO workbench (BM) / 💡 BM content ideas, rows ranked 1 to 5 (columns Target keyword, US volume, KD, GSC US impressions, Keyword check).

## Why these five

| Rank | Page | Path | Evidence (US) |
| --- | --- | --- | --- |
| 1 | Taekwondo school software | `/taekwondo-school-software/` | 126 GSC impressions on 18 taekwondo software queries with no page; `taekwondo software` 30/mo, KD 0 |
| 2 | Attendance sheet template | `/attendance-sheet-template/` | `attendance sheet template` 1,300/mo KD 5, `printable attendance sheet` 1,000/mo KD 0; 180 GSC impressions on attendance queries at positions 88 to 93 |
| 3 | Belt testing: how often, what to charge | `/blog/belt-testing-how-often-what-to-charge/` | `belt testing` 260/mo KD 0, `black belt testing` 170, `taekwondo belt testing` 140; 34 GSC impressions |
| 4 | Kickboxing and Muay Thai gym software | `/kickboxing-gym-software/` | 63 GSC impressions on 8 queries with no page; no measurable keyword-tool volume |
| 5 | Judo club software | `/judo-club-software/` | 59 GSC impressions on 10 queries with no page; `judo software` 50/mo KD 0 |

Not in this batch: instructor pay (rank 6) and insurance (rank 7) need more sourcing; comparison pages wait for the competitor docs pass and John's OK; family billing waits for US card billing.

## Global Constraints

- US wording: school, belt test/testing, tuition, attendance, schedule, color, enroll. `scripts/verify-us-copy.js` fails the build on £, grading, register, timetable, colour, organise, centre, enrol, programme.
- No invented statistics. No "most schools", "X% of students", "typical fee is $N" without a source.
- Anything legal, insurance or cost-related carries a source link and the date it was checked. Sources are listed on the page.
- No claims about a named competitor on any page in this batch.
- Product claims: only features already stated on `karate-school-software.astro`, `mma-gym-software.astro` or `pricing.astro` (those were fact-checked in PRs #20 and #47). State the known limits too (no link to governing bodies, no online belt test registration, no fight records).
- Billing: do not sell card billing. Where payment comes up, use the existing line: "US card billing is coming in 2027; until then you record payments by hand."
- Prices: Free up to 25 students; Club $29, School $49, Academy $79 a month.
- No testimonials, ratings or case studies.
- Do not merge or deploy. John runs UAT first.

## Sources checked on 21 Nov 2026

| Fact used | Source |
| --- | --- |
| IBJJF adult minimums: white none, blue 2 years, purple 1.5 years, brown 1 year; ages 4 to 15 no minimum; degrees below black at the professor's discretion; suggested kids' degree systems (monthly, every four months, quarterly) | IBJJF General Graduation System, version 3.1, https://ibjjf.com/graduation-system |
| USA Judo dan fees (shodan $150, nidan $200, sandan $250), shodan minimum age 15 and time in grade 3 years (non-competitor) down to 6 months (20 points), "promotion is not automatic even with time-in-grade", dan applications go through the state organization | USA Judo Promotion Recommendation Procedures, 30 Jul 2025 (PDF on usajudo.com / contentstack) |
| USA Karate dan certification fees ($250 for 1st to 3rd dan, $500 for 4th or 5th, $150 junior), testing 2 to 3 times a year at signature events, 2 years at shodan before nidan | USA Karate Dan Certification: Homologation, Testing and Procedures (2026 PDF) |
| ISKF Alaska kyu test fee: $45 first family member, $25 each additional, $5 late fee on the day | https://www.iskf-alaska.org/membership-fees |
| Kukkiwon time between certificates: 1st to 2nd dan 1 year, 2nd to 3rd 2 years, 3rd to 4th 3 years; poom for under-15s | UK Kukkiwon Office Dan Grading process guide, British Taekwondo, Jul 2024 (reproduces the Kukkiwon rule; kukkiwon.or.kr English pages returned 404 on the day) |

## Review Focus

- A US reader lands on a new page and sees UK wording or a pound sign: the US copy check must pass with the new pages scanned (none added to `PENDING_PAGES`).
- A new page is orphaned: `verify-seo.js` must show at least two inbound links for each of the five.
- The attendance sheet prints with the site nav, footer or cookie banner on it: print preview must show only the sheet.
- A CSV download opens with broken columns in Excel or Google Sheets: header row plus blank rows, plain commas, no stray quotes.
- A fee or time-in-rank figure appears without a source next to it, or differs from the table above.

---

### Task 1: Three discipline pages

**Files:**
- Create: `src/pages/taekwondo-school-software.astro`, `src/pages/kickboxing-gym-software.astro`, `src/pages/judo-club-software.astro`
- Modify: `src/components/Footer.astro` (software list), `src/pages/index.astro` (solutions grid), `src/utils/internalLinks.ts` (keyword map)

- [ ] Each page: BaseLayout title and description, BreadcrumbsEnhanced, H1, FeaturedAnswer, 6 to 8 H2 sections, ComparisonTable (BeltManager / generic gym software / spreadsheets, no named competitors), FAQEnhanced with 8 to 10 questions, CTA top and bottom via `appLink`, Related Resources linking the other two new pages, the belt testing article and the attendance template.
- [ ] Taekwondo: geup, poom and dan; poomsae or patterns per belt; board breaking and sparring as techniques; Kukkiwon time-between-certificates table with source.
- [ ] Kickboxing and Muay Thai: say plainly that many gyms have no belts; levels as an optional ladder; classes by level; attendance per session; no fight records.
- [ ] Judo: kyu and dan; USA Judo time-in-grade and fee table with source; three US national bodies named without ranking them; BeltManager does not connect to them or count promotion points.
- [ ] Run `npm run build`. Expected: `astro check` 0 errors, SEO verification passed, US copy check passed.
- [ ] Commit.

### Task 2: Attendance sheet template

**Files:**
- Create: `src/pages/attendance-sheet-template.astro`, `public/downloads/martial-arts-attendance-sheet-monthly.csv`, `public/downloads/martial-arts-class-sign-in-sheet.csv`
- Modify: `src/components/Footer.astro` (resources list), `src/components/Navigation.astro` (tools group under the divider)

- [ ] Page shows a monthly sheet (student, belt, 31 day columns, total) rendered in HTML, a Print button, and two CSV downloads. Print CSS hides everything except the sheet and sets landscape.
- [ ] Copy covers: what to record, how to use the sheet for belt test eligibility, where paper and spreadsheets stop working, what to import first when moving to software (folded in from the dropped "Moving off spreadsheets" idea), FAQ with schema.
- [ ] Run `npm run build`; open `/attendance-sheet-template/` in `npm run preview` and check print preview shows only the sheet.
- [ ] Commit.

### Task 3: Belt testing article

**Files:**
- Create: `src/content/blog/belt-testing-how-often-what-to-charge.md`

- [ ] 1,500+ words, tags `["Belts", "Business"]`, `faqs` front matter (FAQ schema is generated by `blog/[slug].astro`).
- [ ] Sections: what sets your testing calendar; published minimums by art (table, each row sourced); how to pick a cycle; what to charge (published federation fees as sourced examples, then a cost-based way to set your own, with a worked example labelled as an example); students under the attendance minimum; a simple scoring sheet; Sources list with checked date.
- [ ] Link to `/dojo-management-software/` in the first 200 words, and to the three discipline pages, karate, BJJ and the attendance template.
- [ ] Run `npm run build`. Expected: all three checks pass.
- [ ] Commit.

### Task 4: Verify, push, hand over

- [ ] `npm run build` clean from `rm -rf dist .astro`; sitemap lists the five new URLs.
- [ ] Preview each page in a browser at desktop and phone width.
- [ ] Push the branch and open a PR. Do not merge. Do not run `deploy.sh`.
- [ ] Notion: add five rows to 📝 BM SEO change log (Type "New page", Link = PR; Date = the build date, to be corrected to the deploy date at merge); set the five idea rows to "In progress".
- [ ] Root repo SEO changelog: run `tools/gsc-client` `enhanced-report.js --log-change` after deploy, not before.
