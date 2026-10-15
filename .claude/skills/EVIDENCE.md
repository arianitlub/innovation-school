# Evidence map for all innovation-* skills

Not an RBI file. Shared by all six skills so every RBI prompt is filled from the same, current evidence. Updated 14.10.2026. When new interviews, data or decisions arrive, update this file first.

## Read first (current state)

1. `docs/challenges/00-overview.md`: one-page status, problem, hypotheses, HMW
2. The team summary of the latest finished stage: `02-understand.md`, `03-empathize.md`, `04-ideate.md` (then `05-…`, `06-…` when they exist)
3. `docs/challenges/team-log.md`: decisions, newest first

## Customer evidence (strongest; use first)

| ID | What | File |
|---|---|---|
| C1 | Street interview, English, self-directed investor (product push, cost, cancelled bank account, nephew + ChatGPT, digital + immediate support, wants life-context guidance) | `docs/team-research/street-interview-C1-neue-aufnahme-3.md` |
| C2 | Street interview, Hungarian, long-time saver (no phone offers, trusts branch / self-initiated contact, doesn't research) | `docs/team-research/street-interview-C2-neue-aufnahme-2-hungarian.md` |
| UX | Internal investment-education UX study: 8 Serbian interviews + 4-country synthesis; secondary, not confirmed mass affluent | `docs/team-research/ux-investment-education-platform-research-summary.md` |

## Expert evidence (internal view, not customer proof)

| ID | What | File |
|---|---|---|
| E-HU-1, E-RS-1 | Hungary and Serbia expert interviews (AI meeting summaries, anonymised) | `docs/challenges/02-empathize-rbi/2.3.0-expert-interview-evidence.md` (part 1) |
| E-RS-0 | Earlier expert interview by Veljko (Serbian context, unreliable speaker labels, many gaps) | `docs/team-research/Innovation_School_English_Transcript-Veljko.txt` |

All interviews in one place, with cross-source signals: `2.3.0-expert-interview-evidence.md` (parts 1 and 2).

## Synthesis already done (build on it, don't redo it)

- Patterns, hypothesis status, quotes: `docs/challenges/02-empathize-rbi/2.3.1-interview-pattern-analysis.md`
- Personas (Self-Directed Comparer C1, Cautious Branch Saver C2, New Learner UX): `2.3.2-personas.md`
- Journey map incl. exit stage: `2.3.3-journey-map.md`
- HMW: `2.3.4-how-might-we.md`; Problem One-Pager: `2.4-problem-one-pager.md`
- Ideas and scores: `docs/challenges/03-ideate-rbi/3.2.1-solution-ideation.md`, `3.3.1-idea-evaluation.md`
- **Chosen concept "My Wealth"** (proposed by Arianit 14.10.2026, team confirmation pending): `docs/challenges/04-ideate.md`; deck `docs/presentation/my-wealth-proposed-solution.pdf`

## Market and desk research (public sources)

- Mass affluent, Premium, Hungary thresholds, MNB data, competitors, technology, rules: `docs/challenges/01-understand-rbi/` (1.1.1, 1.1.2, 1.1.3, 1.2.1)
- Earlier research: `docs/my-research/02-mass-affluent-customers-bank-services-and-retention.md`
- Source links: `docs/my-research/05-sources-and-further-reading.md`
- Old strategy-paper summary (generic, original absent): `docs/challenges/01-research.md`

## Key facts in one view (check the files before quoting)

- **Problem:** outside full Premium, guidance feels product-led, unclear, costly and on the bank's terms, so customers decide elsewhere (family, ChatGPT, cheaper providers, bonds).
- **Hypotheses:** H1 partly supported (C1, experts) · H2 partly, reframed to clarity, trust and cost · H3 partly, refined to "customer controls contact; channel differs" · H4 contradicted (tools exist; availability and access are the limit). n=2 customers, so pass marks are not reached.
- **Existing capability:** My Life app (4–6 min investment journey with MiFID), RaiConnect video, advisory tool (RS), Learn to Invest + podcast (HU), RAIA assistant (basic).
- **Hungary:** Raiffeisen HU Premium from HUF 400k income (RaiConnect); Premium Plus HUF 700k / HUF 10m (page inconsistent, verify). Expert-reported thresholds about €1,100–1,900 income / €27k assets (verify). Government bonds compete on safety and fee/tax.
- **Guardrails:** no cold calls; not digital-only; AI explains, banker recommends (MiFID II); AI must disclose itself (AI Act from 02.08.2026); success = confident, suitable decision, not "invest more".

## Evidence rules

- Cite the ID (C1, C2, UX, E-HU-1, E-RS-1, E-RS-0) for every claim taken from interviews.
- Customers > experts > desk research. Never present expert views as customer proof.
- Small n: say "first signal", never "validated", unless pass marks are met.
- Never invent participants, quotes, numbers or demographics. Mark unchecked facts "This requires verification" and invented examples "illustrative".
- New interviews: save raw input unchanged in `docs/team-research/`, add them to `2.3.0` part 2 with a new ID, add them to this file, then re-run the affected RBI prompts.
