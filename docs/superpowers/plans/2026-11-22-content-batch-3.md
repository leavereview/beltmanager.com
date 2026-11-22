# Content Batch 3 (US) Implementation Plan

**Goal:** Add the three pages ranked 8, 9 and 11 in the Notion "💡 BM content ideas" database, and update the instructor pay article now that the Labor Department contractor rule has a Federal Register date.

**Architecture:** The calculator and the glossary are standalone Astro pages in the shape of `attendance-sheet-template.astro` (BaseLayout, breadcrumbs, featured answer, prose, FAQ with schema, CTA). The tuition guide is a Markdown post in the blog collection in the shape of `martial-arts-insurance.md`. Each page carries a numbered Sources list with the checked date and gets at least two inbound links.

**Tech Stack:** Astro 7, Tailwind, TypeScript. `npm run build` runs `astro check`, `scripts/verify-seo.js` and `scripts/verify-us-copy.js`. `npm test` runs `scripts/*.test.mjs`.

**Spec:** Notion, HQ / Knowledge / SEO workbench (BM) / 💡 BM content ideas, rows ranked 8, 9 and 11. Format, constraints and sourcing method carried over from `docs/superpowers/plans/2026-11-21-content-batch-2.md`.

## Why these three

| Rank | Page | Path | Evidence (US) |
| --- | --- | --- | --- |
| 8 | Black belt timeline calculator (the "belt test fee and schedule planner" idea, built for the demand the keyword check found) | `/black-belt-timeline-calculator/` | `how long does it take to get a black belt` 1,000/mo KD 0, `karate belt progression` 390, `how long to get a black belt in karate` 210, `bjj belt timeline` 170. 5 GSC impressions. Searchers are students and parents; the owner section (fixed test dates, test fee total) keeps the original idea. |
| 9 | Martial arts pricing: tuition and contracts | `/blog/martial-arts-pricing/` | `martial arts pricing` 90/mo KD 0; consumer side `how much are jiu jitsu classes` 480, `how much are karate classes` 390, `karate class prices` 210. No GSC impressions yet. Absorbs the dropped "Should small schools use contracts?" idea. |
| 11 | Glossary of school-owner terms | `/martial-arts-terms/` | `kyu meaning` 390, `dan rank` 390, `bjj stripes` 390, `karate terms` 210, `martial arts terms` 170. No GSC impressions yet. Written so AI assistants can cite it: `DefinedTermSet` JSON-LD, one anchor per term. |

Not in this batch: comparison pages (ranks 10, 18 to 20: wait for the competitor docs pass and John's OK); family billing (2027).

## Global Constraints

Same as batch 2: US wording (the copy check fails the build on £, grading, register and its forms, timetable, colour, organise, centre, enrol, programme); no invented statistics; sources with the checked date (November 22, 2026) for anything legal, cost-related or tied to a federation rule; no legal advice, said once near the top; no claims about a software competitor; product claims only from `karate-school-software.astro`, `mma-gym-software.astro` or `pricing.astro`; no card-billing selling ("US card billing is coming in 2027; until then you record payments by hand."); prices Free up to 25 students, $29, $49, $79; no testimonials; do not merge or deploy before John's OK.

Extra for this batch:

- The calculator gives no "typical" time to black belt and no default test fee. Rows with no published minimum load empty and are marked.
- The tuition guide gives no "average" tuition. Published prices are named examples, read on the program's own page.
- Contract law comes from the statute or regulation text. The state table says what each statute says, not whether it covers a given school.
- Glossary entries with no federation or dictionary source are marked "Common usage; no official source."

## Sources checked on 22 Nov 2026

Every row was opened by a research pass and re-read in a second, independent pass that worked from the built pages. Corrections from the second pass are folded in.

### Instructor pay article update

| Fact used | Source |
| --- | --- |
| Final rule "Employee or Independent Contractor Status Under the Fair Labor Standards Act, Family and Medical Leave Act, and Migrant and Seasonal Agricultural Worker Protection Act": document 2026-23777, 91 FR 75646, publication date November 23, 2026, "This final rule is effective on January 22, 2027." RIN 1235-AA46. | Federal Register API, https://www.federalregister.gov/api/v1/documents/2026-23777.json ; page https://www.federalregister.gov/d/2026-23777 |
| The DOL page still says only "announced a final rule (effective 60 days after publication in the Federal Register)" and gives no date. | https://www.dol.gov/agencies/whd/flsa/misclassification |

### Page 1: black belt timeline calculator

| Fact used | Source |
| --- | --- |
| IBJJF General System of Graduation, June 2026 edition (footers "version 3.1 2025"). Adults from 18: white no minimum; blue 2 years; purple 1 year and a half; brown 1 year. Ages 4 to 15: 13 belts, "No minimum period of stay in each belt." Ages: blue and purple 16, brown 18; black belt text says 18 with the footnote "18 years only for athletes who have won the Adult World Champion title at Brown Belt"; the two reading passes disagreed on whether the age chart starts black at 18 or 19, so the page quotes the text and gives no chart age. "The time taken to graduate the athlete from White Belt to Black Belt is at the professor's discretion." Shorter periods for former kids' and juvenile belts and adult world champions. | https://ibjjf.com/graduation-system (PDF linked there) |
| USA Judo Promotion Recommendation Procedures, July 30, 2025: dan ranks only. Shodan minimum age 15; time in grade 3 yrs. non-competitor, 2 yrs., 1 yr., 9 mo., 6 mo. at 5, 10, 15, 20 points. "Time-in-Grade requirements are intended as a minimum benchmark for review of a candidate. Moreover, promotion is not automatic even with time-in-grade." | PDF on contentstack (URL in the page's source list) |
| USJF Rank Requirement Recommendations (Handbook Section VI, file dated 2022): gokyu "12 classes or 1 month", yonkyu "24 classes or 2 months", sankyu 5 months, nikyu 9 months, ikkyu 1 year, shodan 2 years (non-competitor); shodan minimum age 14. Requirements "serve as guidelines"; yudanshakai may modify. A 2023 ad hoc committee matrix says senior kyu time in grade is "Instructor's discretion"; we could not confirm which is current, so the page carries a caveat. | https://www.usjf.com/wp-content/uploads/2022/02/RRR-19.pdf |
| Kukkiwon Standard Table of Time and Age Limits for Promotion: 1st poom and 1st dan minimum time "Non"; dan from 15, poom under 15; 1 to 2 dan 1 year, 2 to 3 dan 2 years, 3 to 4 dan 3 years. Regulations of Taekwondo Promotion Test (amended June 8, 2016): gup tests "implemented by Taekwondo masters"; no gup interval. | https://www.kukkiwon.or.kr/eng/board/list?boardManagementNo=51&menuLevel=2&menuNo=97 |
| ISKF Qualifications for Dan Rank Examinations (file dated 2017): adult 1st dan "Minimum 3-6 months after receiving 3rd, 2nd or 1st Kyu", 18 and older; youth 1st dan "Minimum 1 year after 1st Kyu", 9 and older, under 18. Kyu exam guidelines: techniques only, no time minimums. | https://iskf.com/pdfs/dan_qualifications.pdf |
| USAF Kyu/Dan Test Requirements 2024, practice days: 20, 40, 80, 100, 200, 300 for 6th to 1st kyu; shodan "300 practice days after 1st Kyu/Not<1 year". | https://www.usaikifed.com/_files/ugd/71299c_1e177ca3aae541b2945cacb3d7c977fa.pdf |
| Aikikai Hombu Dojo Examination Guidelines, days of practice: 30, 40, 50, 50, 60 for 5th to 1st kyu; 1st dan 70 after 1st kyu; "Minimum age for 1st Dan is 15 years". | https://aikikai.or.jp/eng/hombudojo/grading/ |

**Dropped:** USJA (its kyu table does not say whether months are per step or cumulative); JKA (site returned 503 and is suspended until January 2027); Kyokushin, ITF, kendo (no primary document with minimums opened).

### Page 2: tuition and contracts

| Fact used | Source |
| --- | --- |
| Ten published prices: Skokie Park District; Spartanburg YMCA; YMCA of South Palm Beach County; City of Webster, Texas; City of Palm Springs; Portland Community College; JKA Karate of Arizona; Yemaso BJJ; Temple Muay Thai; Eight Points Muay Thai. Figures as in the article tables. | Each program's own page (URLs in the article's source list, 1 to 10) |
| CPI-U "Fees for lessons or instructions": 2.7 percent over the 12 months to September 2026 (Table 2, released October 14, 2026). The October 2026 release shows no 12-month figure because October 2025 data are missing. | https://www.bls.gov/news.release/archives/cpi_10142026.htm |
| FTC Negative Option Rule: final rule published February 12, 2026 restores Part 425 "in the form it existed before the 2024 Rule became effective"; ANPRM published March 13, 2026, comments due April 13, 2026. A Federal Register search on November 22, 2026 found no later proposed or final rule. | govinfo 2026-02866 and 2026-04952; https://www.ftc.gov/legal-library/browse/rules/negative-option-rule |
| ROSCA, 15 U.S.C. 8403 (read on Cornell LII; uscode.house.gov would not open). | https://www.law.cornell.edu/uscode/text/15/8403 |
| Regulation E, 12 CFR 1005.10(b) to (d): signed or similarly authenticated authorization and a copy; stop payment three business days before; 10 days' notice of a varying amount. | https://www.consumerfinance.gov/rules-policy/regulations/1005/10/ |
| FTC Cooling-Off Rule does not cover sales "made after completing negotiations at the seller's permanent place of business". | https://consumer.ftc.gov/articles/buyers-remorse-ftcs-cooling-rule-may-help |
| New York GBL 621, 623, 624; Washington RCW 19.142.010 and .040; Maryland Commercial Law 14-12B-01 and -06; Florida 501.0125, .013, .016, .017; California Civil Code 1812.81, .84, .85, .86, .91; Texas Occupations Code 702.003, .101, .303, .307. Cells as in the article table. | Each legislature's own site (URLs in the article's source list, 15 and 17 to 21) |
| California Bus. & Prof. Code 17601 and 17602 (AB 2863; contracts on or after July 1, 2025). California Family Code 6710. | leginfo.legislature.ca.gov |

**Dropped because the primary text could not be opened:** Illinois 815 ILCS 645, Ohio R.C. 1345.41, Massachusetts G.L. c. 93 s. 78, the BLS Consumer Expenditure Survey lessons table. New York GBL 394-b was read but left out (it does not name martial arts and its interaction with Article 30 was not checked). Two commercial schools whose pages do not name their state were left out.

### Page 3: glossary

Sources 1 to 17 are listed on the page. Federation documents: IJF culture and rules pages; USA Judo; Kukkiwon; World Taekwondo; IBJJF graduation system and rule book; Aikikai and USAF; USA Karate; ISKF; AUSKF; WKF rules (2020 competition rules read on the USA Karate archive, 2024 kumite rules on the Finnish federation's copy). Dictionary sense: Dictionary.com and Cambridge (Merriam-Webster returned 403).

**Dropped for lack of an authoritative source:** shihan, renshi, kyoshi, hanshi, kwanjangnim, sifu, kru, batsugun, a Korean counting table. The history of colored belts is left out because the IJF and USA Judo give different dates.

## Review Focus

- A figure, age or quote on a page differs from its source, or a page states something more strongly than the source does.
- The calculator shows a total that reads as a full timeline when rows are empty.
- The tuition guide tells a reader which law covers their school, or gives an average price.
- A US reader sees UK wording: the copy check must pass with all three pages scanned.
- A new page is orphaned: `verify-seo.js` must show at least two inbound links for each.

---

### Task 1: Contractor rule update

- [x] `/blog/martial-arts-instructor-pay/`: body, FAQ and new source 17 give the Federal Register publication date (November 23, 2026), citation and effective date (January 22, 2027); `updatedDate` set.

### Task 2: Black belt timeline calculator

- [x] `src/pages/black-belt-timeline-calculator.astro`: seven rule sets, editable rows, start date, classes a week, optional fixed test dates and test fee; published minimums table, worked example, minimum ages, owner section, FAQ, sources.

### Task 3: Tuition and contracts guide

- [x] `src/content/blog/martial-arts-pricing.md`: published prices, cost-based tuition with a labelled example, price structures, month-to-month against term, federal rules, six-state table, automatic renewal, minors, what to put in writing, raising tuition, where BeltManager fits, sources.

### Task 4: Glossary

- [x] `src/pages/martial-arts-terms.astro`: 48 terms in six groups, `DefinedTermSet` JSON-LD, Japanese numbers, FAQ, sources.

### Task 5: Links, verify, hand over

- [x] Inbound links: footer resources (all three), navigation tools (calculator), belt testing article (all three), and the three pages link each other.
- [x] `npm test`; `npm run build` from clean: all three checks pass; sitemap lists the three new URLs.
- [x] Second independent read of every figure against its source; corrections applied.
- [x] Browser check: calculator exercised with every rule set; no page overflow at 390px or 1280px.
- [x] Push the branch and open a PR. Do not merge. Do not run `deploy.sh`.
- [x] Notion: three "New page" rows and one "Rewrite" row in 📝 BM SEO change log (Link = PR; Date = build date, to be corrected at deploy); idea rows 8, 9 and 11 set to "In progress".
- [x] After John's OK and deploy: correct the change log dates, set the three idea rows to "Live", run `tools/gsc-client` `enhanced-report.js --log-change` (commit `changes.json` with `git add -f`), request indexing through Search Console in Chrome (`/u/1/`).

## Outcome (22 Nov 2026)

- John OK'd the batch on 22 Nov 2026 and kept the four named commercial schools in the tuition guide.
- PR #52 merged and deployed with `./deploy.sh beltmanager.com` on 22 Nov 2026, one day ahead of the contractor rule's Federal Register publication date (John asked for the run that day; the article gives the publication date as November 23, 2026, and the Federal Register API already listed the document with that date and citation). Live sitemap 53 URLs, matching the build; the three new URLs return 200.
- Notion: the four change log rows keep the date 22 Nov 2026 (the deploy date) and now say "live"; idea rows 8, 9 and 11 set to "Live".
- `changes.json` entry merged in `multi-site-documentation` PR #20.
- Indexing requested in Search Console on 22 Nov 2026 for `/black-belt-timeline-calculator/` and `/blog/martial-arts-pricing/`. `/martial-arts-terms/` hit the daily quota ("Quota Exceeded"); request it again on 23 Nov 2026.

## Re-check later

- Do not deploy the instructor pay edit before November 23, 2026 (the Federal Register publication date).
- January 2027: 2026 tax rates in the instructor pay article; Sadler rates in the insurance article (expire December 31, 2026). K&K brochure runs to February 28, 2027.
- Tuition guide: the public program prices are for fall 2026 sessions and will change each season; the FTC negative option rulemaking is open.
- Calculator: confirm with USJF which kyu time-in-grade document is current; JKA's site is due back in January 2027.
