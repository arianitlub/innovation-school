---
name: innovation-ideate
description: RBI Innovation School AI Prompt Library, Stage 3 Ideate. Use when designing an ideation workshop, generating solution ideas, applying SCAMPER, or scoring and prioritising ideas (prompts 3.1.1–3.3.1).
---

# Stage 3: Ideate

Official RBI Innovation School prompts, stored word for word in `prompts/`. Booklet principles and frameworks: `docs/training/ai-prompt-library.md`.

| Prompt | File | Use when |
|---|---|---|
| 3.1.1 Workshop Design | `prompts/3.1.1-workshop-design.md` | Planning an ideation workshop |
| 3.2.1 Solution Ideation | `prompts/3.2.1-solution-ideation.md` | 50–70 ideas across many lenses |
| 3.2.2 SCAMPER | `prompts/3.2.2-scamper.md` | Reworking a current process step by step |
| 3.3.1 Idea Evaluation | `prompts/3.3.1-idea-evaluation.md` | Scoring and prioritising ideas |

## How to use

**Evidence:** fill placeholders from [`../EVIDENCE.md`](../EVIDENCE.md), the shared map of current interviews (C1, C2, UX, experts), synthesis, decisions and research. Read it first. Customer evidence ranks above expert views, and both above desk research.

1. Pick the prompt and read its file.
2. Fill placeholders with needs, pain points, personas and the How Might We question from `docs/challenges/03-empathize.md` and `docs/challenges/02-empathize-rbi/` (2.3.1 patterns, 2.3.2 personas C1/C2/UX, 2.3.3 journey, 2.3.4 HMW). Tie each idea to the interview evidence (C1, C2, UX, experts). Existing RBI capabilities and rules are listed in `../EVIDENCE.md`. If Empathize is not done yet, say that the input is preparation only, not validated.
3. AI is an idea catalyst, not a replacement for team creativity. Present AI ideas as input for the team session, not as the team's ideas. Ideas in `docs/my-research/04-wealth-advice-improvement-ideas-and-tests.md` are candidate ideas, not decisions.
4. 3.2.2's example is about document uploads. Replace it with the current advice journey from `docs/challenges/02-understand.md`.
5. For 3.3.1 scores, give a reason per score citing the evidence ID, or say "guess". Save full outputs to `docs/challenges/03-ideate-rbi/<prompt>.md`, the team decision to `docs/challenges/04-ideate.md`, and selections to `docs/challenges/team-log.md`.
6. The team's concept (currently **My Wealth**, `docs/challenges/04-ideate.md`) is scored like any other idea, without a bonus.
