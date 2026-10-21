# Agent instructions — Innovation School 2026

This repo is **only** for RBI Innovation School 2026 (online kickoff 30.09 → Budapest on-site 13–16.10 → online closing 04.11 → follow-up 15.12). Notes, the team's Innovation Challenge work, and the course material all live here. It contains nothing about PSD2 or other work projects.

---

## Me

| Field | Value |
|---|---|
| Name | Arianit Lubishtani |
| Username | WZHARLU / WRTARLU |
| Organization | Raiffeisen Bank International (RBI) |
| Role | Team Lead, ~20 software engineers + testers across different RBI projects |

---

## The Challenge — Mass-Affluent Wealth Advice

Our team's Innovation Challenge:

> "How are mass affluent clients served with wealth management advice and where are the gaps? How can we find more ways to offer more value to customers during the process?"

Our working goal, selected by Arianit on 10.10.2026:

> How can we give mass-affluent customers useful, affordable financial guidance that helps them achieve their goals and strengthens their relationship with the bank?

Keep the official challenge and this preparation formulation together. Team scope and solution are still to agree.

We work on it with Design Thinking (Understand → Empathize & Synthesize → Ideate → Prototype & Test → Business Case & Pitch), and we build it **step by step**. Each step has its own file in `docs/2-challenge-wealth-advice/`, and `00-overview.md` is always the short, current common understanding.

---

## Where Everything Is

### Our notes (`docs/`)

| File | What it covers |
|---|---|
| [2-challenge-wealth-advice/overview.md](docs/2-challenge-wealth-advice/overview.md) | **Start here for the challenge.** One-page common understanding: who the customers are, the bottleneck, what we know, ideas, hypothesis, step status |
| [2-challenge-wealth-advice/research/team-research-summary.md](docs/2-challenge-wealth-advice/research/team-research-summary.md) | Detailed reference: segment ladder, strategy-paper findings (gaps, 11-stage journey, concepts, roadmap, guardrails), expert-interview insights |
| [2-challenge-wealth-advice/stages/01-understand.md](docs/2-challenge-wealth-advice/stages/01-understand.md) | Step 1, Understand (draft): problem statement, today's journey + pain points, stakeholders, facts needed |
| `2-challenge-wealth-advice/stages/02-empathize.md` … `05-pitch.md` | Later steps, created when we get to them (Empathize, Ideate, Prototype & Test, Pitch) |
| [2-challenge-wealth-advice/team-log.md](docs/2-challenge-wealth-advice/team-log.md) | Dated team decisions and who does what |
| [guide.md](docs/1-innovation-school/guide.md) | eLearning course notes (Design Thinking, culture, failure culture) + program notes: timeline, deadlines, people, participation rules, kickoff deck summary |
| [learning-transfer overview](docs/3-learning-transfer/00-overview.md) | My personal Learning Transfer: expectation, Goal v2, meeting preparation, practical workshop (homework), ideas pool and checklist up to 15.12 |
| [ai-prompt-library.md](docs/1-innovation-school/ai-prompt-library.md) | RBI's "AI Prompt Library" booklet: principles, hallucination warning, CO-STAR/RODES, and an index of the 31 prompts stored as skills |

### Source material (`docs/`)

The source inventory below includes absent originals, identified under “Continuity and current inventory.” Preserve available team source material and original PDFs; summarise them into the notes. Research notes and working summaries may be updated.

| File | What it is |
|---|---|
| `2-challenge-wealth-advice/evidence/mass_affluent_wealth_advice_..._20260930_114409-Vejlko.pdf` | 19-page strategy paper (European/global assessment of mass-affluent advice), shared by Veljko. Summarised in `2-challenge-wealth-advice/research/team-research-summary.md`. Generic/external, **not** RBI-verified fact |
| `2-challenge-wealth-advice/evidence/Innovation_School_English_Transcript-Veljko.txt` | English translation of the meeting Veljko recorded with an internal investment-advice expert (Serbian-market context). Auto-transcribed with many gaps, and the speaker labels are unreliable. Summarised in `2-challenge-wealth-advice/research/team-research-summary.md` → "Expert Interview" |
| `2-challenge-wealth-advice/evidence/interview-questions.md` | Sabrina's 20 interview questions (customer-perspective guide) |
| `1-innovation-school/RBI_InnovationSchool2026_OnlineDay1.pdf` | Kickoff deck from 30.09 (65 slides, image-based). Summarised in `guide.md` |
| `1-innovation-school/online-day-preparation.pdf` | Tools (MS Teams, Miro) and ground rules for the online days |
| `1-innovation-school/meet-the-team.pdf` | Innovation Management team (Jannik, Fanny, Chris, …) and their roles |
| `1-innovation-school/meet-the-coaches.pdf` | The coaches and their home banks |
| `1-innovation-school/participation-commitment.pdf` | Manager confirmation form: ≥70% attendance rule, EUR 1,900 no-show charge |

---

## What to Read for What

| Situation | Start here |
|---|---|
| Working on the challenge (next step, ideas, prototype, pitch) | `docs/2-challenge-wealth-advice/overview.md` → then the current step file |
| "What's due when?" / program schedule / who's who | `docs/1-innovation-school/guide.md` |
| Learning Transfer Expectation / Goal / homework workshop / Line Manager meeting | `docs/3-learning-transfer/00-overview.md` |
| Team presentation for 04.11 ("Human-AI collaboration in Innovation") | `docs/1-innovation-school/team-presentation/README.md` |
| Design Thinking method reminder | `docs/1-innovation-school/guide.md` → "Design Thinking — RBI Innovation Box" |
| Checking a claim against the original material | `docs/` |
| Using AI for a Design Thinking step (research, interviews, ideas, prototype, pitch) | `.claude/skills/innovation-*` → see `docs/1-innovation-school/ai-prompt-library.md` |

---

## Rules & Conventions

- **Nothing goes outside this repo without explicit consent.** Don't send emails, post to Teams/Miro, or push to a remote unless I ask.
- Preserve original team inputs in `docs/2-challenge-wealth-advice/evidence/` and source PDFs. Update working notes in `docs/2-challenge-wealth-advice/`, `docs/1-innovation-school/`, `docs/3-learning-transfer/` and `docs/working-context.md`.
- When summarising the transcript or the paper, mark uncertain content as uncertain. The transcript has many `[unclear]` gaps, and the paper is generic and not RBI-verified.
- Work step by step: finish a step's file before starting the next one, update `00-overview.md` when our understanding changes, and add decisions to `team-log.md`. Update `guide.md` after each program session.
- Challenge docs are for the team: clear paragraphs in simple English, short, no jargon without explanation.
- Write dates as absolute dates (e.g. 13.10.2026), not "next Tuesday".
- Reading PDFs: poppler isn't installed. Text-based PDFs (the strategy paper, the course docs) can be read with macOS PDFKit via a small Swift script (`PDFDocument(url:)` → `page.string`). The kickoff deck is image-based, so PDFKit returns no text for it.

## Continuity and current inventory

- Read [working-context.md](docs/working-context.md) at the start of future work. It records the review, current priorities, evidence limits, and missing sources as of 10.10.2026. Update it when the user supplies new information or decisions change.
- The strategy PDF, kickoff deck, original transfer PPTX, meet-the-team PDF, meet-the-coaches PDF, and participation form are referenced by existing notes but are not currently present here. Use their summaries with that limitation stated; do not claim to have checked those originals.
- The interview questions are available as Markdown. The transcript and online-day-preparation PDF are present. Preserve source content unchanged.

## Budapest preparation pack

For preparation for 13.10.2026, start with `docs/2-challenge-wealth-advice/research/01-start-here-challenge-basics-and-school-preparation.md`. External research, sources and the proposed Design Thinking method are in `docs/2-challenge-wealth-advice/research/`. These are preparation references; they do not complete later team stages. Public evidence confirms existing advice capabilities in some markets. Do not repeat earlier blanket claims that Premium is only perks or that RBI has no digital advice.

## Workspace layout

The active workspace is `/Users/arianit/Desktop/innovation-school`. All Markdown and available source assets were moved from `innovation-school-ai` on 10.10.2026. Use the new workspace for subsequent work.

- `README.md`: educational introduction and reading navigation.
- `docs/README.md`: index of the three areas.
- `docs/1-innovation-school/`: the programme: guide and timeline, AI Prompt Library notes, online-day material and the team presentation for 04.11 ("Human-AI collaboration in Innovation", separate from the challenge).
- `docs/2-challenge-wealth-advice/`: the team's Mass-Affluent challenge: `overview.md`, `team-log.md`, `stages/` (stage summaries 01–05 and the RBI prompt outputs), `evidence/` (original team material), `research/` (our desk research), `prototype/`, `presentations/`.
- `docs/3-learning-transfer/`: my personal Learning Transfer: expectation, Goal, meeting preparation, practical workshop (homework), ideas pool and checklist.
- `docs/working-context.md`: continuity, current status and user preferences.
- `.claude/skills/`: the RBI AI Prompt Library as six project skills, one per stage (`innovation-understand`, `innovation-empathize`, `innovation-ideate`, `innovation-prototype-test`, `innovation-business-case-pitch`, `innovation-meeting-prep`). Prompt texts in `prompts/` are RBI source material: keep them word for word.
- `.claude/skills/EVIDENCE.md`: shared evidence map for all skills (interviews C1, C2, UX, experts; synthesis; decisions; research). Update it whenever new interviews, data or decisions arrive.

The existing Git remote is configured. Arianit explicitly requested an initial commit/push and the discussion update on 10.10.2026. Perform those requested operations; do not treat historical notes about waiting for review as a new approval requirement. Later commits/pushes still require a request. Record actual publication status, and never store conversation credentials in project files.
