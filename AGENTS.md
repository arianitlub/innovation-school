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

We work on it with Design Thinking (Understand → Empathize & Synthesize → Ideate → Prototype & Test → Business Case & Pitch), and we build it **step by step**. Each step has its own file in `docs/challenges/`, and `00-overview.md` is always the short, current common understanding.

---

## Where Everything Is

### Our notes (`docs/`)

| File | What it covers |
|---|---|
| [challenges/00-overview.md](docs/challenges/00-overview.md) | **Start here for the challenge.** One-page common understanding: who the customers are, the bottleneck, what we know, ideas, hypothesis, step status |
| [challenges/01-research.md](docs/challenges/01-research.md) | Detailed reference: segment ladder, strategy-paper findings (gaps, 11-stage journey, concepts, roadmap, guardrails), expert-interview insights |
| [challenges/02-understand.md](docs/challenges/02-understand.md) | Step 1, Understand (draft): problem statement, today's journey + pain points, stakeholders, facts needed |
| `challenges/03-empathize.md` … `06-pitch.md` | Later steps, created when we get to them (Empathize, Ideate, Prototype & Test, Pitch) |
| [challenges/team-log.md](docs/challenges/team-log.md) | Dated team decisions and who does what |
| [guide.md](docs/training/guide.md) | eLearning course notes (Design Thinking, culture, failure culture) + program notes: timeline, deadlines, people, participation rules, kickoff deck summary |
| [learning-transfer.md](docs/training/learning-transfer.md) | My personal Learning Transfer: the Expectation sent to Christine, the ideas pool for the Goal, and the checklist up to 15.12 |

### Source material (`docs/`)

The source inventory below includes absent originals, identified under “Continuity and current inventory.” Preserve available team source material and original PDFs; summarise them into the notes. Research notes and working summaries may be updated.

| File | What it is |
|---|---|
| `team-research/mass_affluent_wealth_advice_..._20260930_114409-Vejlko.pdf` | 19-page strategy paper (European/global assessment of mass-affluent advice), shared by Veljko. Summarised in `challenges/01-research.md`. Generic/external, **not** RBI-verified fact |
| `team-research/Innovation_School_English_Transcript-Veljko.txt` | English translation of the meeting Veljko recorded with an internal investment-advice expert (Serbian-market context). Auto-transcribed with many gaps, and the speaker labels are unreliable. Summarised in `challenges/01-research.md` → "Expert Interview" |
| `team-research/interview-questions.md` | Sabrina's 20 interview questions (customer-perspective guide) |
| `training/RBI_InnovationSchool2026_OnlineDay1.pdf` | Kickoff deck from 30.09 (65 slides, image-based). Summarised in `guide.md` |
| `training/online-day-preparation.pdf` | Tools (MS Teams, Miro) and ground rules for the online days |
| `training/meet-the-team.pdf` | Innovation Management team (Jannik, Fanny, Chris, …) and their roles |
| `training/meet-the-coaches.pdf` | The coaches and their home banks |
| `training/participation-commitment.pdf` | Manager confirmation form: ≥70% attendance rule, EUR 1,900 no-show charge |

---

## What to Read for What

| Situation | Start here |
|---|---|
| Working on the challenge (next step, ideas, prototype, pitch) | `docs/challenges/00-overview.md` → then the current step file |
| "What's due when?" / program schedule / who's who | `docs/training/guide.md` |
| Learning Transfer Expectation / Goal / Line Manager meeting | `docs/training/learning-transfer.md` |
| Design Thinking method reminder | `docs/training/guide.md` → "Design Thinking — RBI Innovation Box" |
| Checking a claim against the original material | `docs/` |

---

## Rules & Conventions

- **Nothing goes outside this repo without explicit consent.** Don't send emails, post to Teams/Miro, or push to a remote unless I ask.
- Preserve original team inputs in `docs/team-research/` and source PDFs. Update working notes in `docs/challenges/`, `docs/training/`, `docs/my-research/` and `docs/working-context.md`.
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

For preparation for 13.10.2026, start with `docs/my-research/01-start-here-challenge-basics-and-school-preparation.md`. External research, sources and the proposed Design Thinking method are in `docs/my-research/`. These are preparation references; they do not complete later team stages. Public evidence confirms existing advice capabilities in some markets. Do not repeat earlier blanket claims that Premium is only perks or that RBI has no digital advice.

## Workspace layout

The active workspace is `/Users/arianit/Desktop/innovation-school`. All Markdown and available source assets were moved from `innovation-school-ai` on 10.10.2026. Use the new workspace for subsequent work.

- `README.md`: educational introduction and reading navigation.
- `docs/challenges/`: team challenge understanding, stage files and team log.
- `docs/training/`: programme guide, personal Learning Transfer and training material.
- `docs/team-research/`: original material supplied by the team.
- `docs/my-research/`: our desk research, Tuesday preparation, Design Thinking preparation, candidate suggestions and source register.
- `docs/working-context.md`: continuity, current status and user preferences.

The existing Git remote is configured. Arianit explicitly requested an initial commit/push and the discussion update on 10.10.2026. Perform those requested operations; do not treat historical notes about waiting for review as a new approval requirement. Later commits/pushes still require a request. Record actual publication status, and never store conversation credentials in project files.
