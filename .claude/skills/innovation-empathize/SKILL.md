---
name: innovation-empathize
description: RBI Innovation School AI Prompt Library, Stage 2 Empathize & Synthesize. Use when writing hypotheses, an interview guide, a recruitment plan, a note-taking template or interview facilitation tips, or when analysing real interview notes into patterns, personas, a journey map or a How Might We question (prompts 2.1.1–2.3.4).
---

# Stage 2: Empathize & Synthesize

Official RBI Innovation School prompts, stored word for word in `prompts/`. Booklet principles and frameworks: `docs/training/ai-prompt-library.md`.

| Prompt | File | Use when |
|---|---|---|
| 2.1.1 Hypothesis Formulation | `prompts/2.1.1-hypothesis-formulation.md` | Turning uncertainties into testable hypotheses |
| 2.1.2 Interview Guide | `prompts/2.1.2-interview-guide.md` | Writing the empathy interview script |
| 2.1.3 Participant Recruitment | `prompts/2.1.3-participant-recruitment.md` | Who to interview and how to reach them |
| 2.2.1 Note-Taking Template | `prompts/2.2.1-note-taking-template.md` | Template for live and post-interview notes |
| 2.2.2 Facilitation Tips | `prompts/2.2.2-facilitation-tips.md` | How to run the interview well |
| 2.3.1 Interview Pattern Analysis | `prompts/2.3.1-interview-pattern-analysis.md` | Finding themes across real interviews |
| 2.3.2 Personas | `prompts/2.3.2-personas.md` | Research-based personas |
| 2.3.3 Journey Map | `prompts/2.3.3-journey-map.md` | Current-state journey with pains and opportunities |
| 2.3.4 How Might We | `prompts/2.3.4-how-might-we.md` | End of synthesis, before Ideate |

## Hard rules from the booklet

- Interviews must be with real people. Never simulate interviews, customers, quotes or answers with AI.
- Run 2.3.x only on real notes or transcripts. If none exist, say so and stop; do not invent data to fill the prompt.
- 2.3.4 comes last, after patterns, personas and the journey map have been discussed.

## How to use

**Evidence:** fill placeholders from [`../EVIDENCE.md`](../EVIDENCE.md), the shared map of current interviews (C1, C2, UX, experts), synthesis, decisions and research. Read it first. Customer evidence ranks above expert views, and both above desk research.

1. Pick the prompt and read its file.
2. Fill placeholders from the repo: challenge and goal in `AGENTS.md` and `docs/challenges/00-overview.md`; the team's hypotheses and plan in `docs/challenges/03-empathize.md`; scope in `docs/challenges/02-understand-rbi/1.2.3-scope-definition.md`; Sabrina's questions in `docs/team-research/interview-questions.md`.
   - **Interview input for 2.3.1–2.3.4:** `docs/challenges/03-empathize-rbi/2.3.0-expert-interview-evidence.md` (all interviews, IDs C1, C2, UX, E-HU-1, E-RS-1) plus the raw files in `docs/team-research/` (street interviews C1, C2; UX study; Veljko's transcript E-RS-0).
   - **New interviews:** save raw input unchanged in `docs/team-research/`, add them to 2.3.0 part 2 with a new ID, update `../EVIDENCE.md`, then re-run 2.3.1 → 2.3.4.
   Ask for anything missing.
3. Expert interviews are internal views, not customer evidence. Keep them separate from customer interviews, and use the customers first. With small n, report signals, not validation.
4. Replace the booklet's retail-app examples (account opening, paycheck, balance checks) with our advice journey.
5. Keep interview notes anonymised. Save full outputs to `docs/challenges/03-empathize-rbi/<prompt>.md` (filled prompt + output), the team summary to `docs/challenges/03-empathize.md`, and decisions to `docs/challenges/team-log.md`.
