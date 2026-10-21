---
name: innovation-prototype-test
description: RBI Innovation School AI Prompt Library, Stage 4 Prototype & Test. Use when planning prototype tests, creating a storyboard or user flow, building a self-contained HTML mobile-app or landing-page prototype, or analysing test results (prompts 4.1.1–4.3.3).
---

# Stage 4: Prototype & Test

Official RBI Innovation School prompts, stored word for word in `prompts/`. Booklet principles and frameworks: `docs/1-innovation-school/ai-prompt-library.md`.

| Prompt | File | Use when |
|---|---|---|
| 4.1.1 Testing Strategy | `prompts/4.1.1-testing-strategy.md` | Planning what and how to test |
| 4.2.1 Storyboard & User Flow | `prompts/4.2.1-storyboard-user-flow.md` | Quick visual story of the solution |
| 4.3.1 Mobile App Prototype | `prompts/4.3.1-mobile-app-prototype.md` | Clickable phone prototype as one HTML file |
| 4.3.2 Landing Page Prototype | `prompts/4.3.2-landing-page-prototype.md` | Marketing / value-proposition page as one HTML file |
| 4.3.3 Test Results Analysis | `prompts/4.3.3-test-results-analysis.md` | Making sense of real test sessions |

## How to use

**Evidence:** fill placeholders from [`../EVIDENCE.md`](../EVIDENCE.md), the shared map of current interviews (C1, C2, UX, experts), synthesis, decisions and research. Read it first. Customer evidence ranks above expert views, and both above desk research.

1. Pick the prompt and read its file.
2. Fill placeholders from the chosen concept in `docs/2-challenge-wealth-advice/stages/03-ideate.md` (currently **My Wealth**, with its parts, the 7 fixes and open questions), personas from `docs/2-challenge-wealth-advice/stages/02-empathize-rbi/2.3.2-personas.md` (C1 Self-Directed Comparer, C2 Cautious Branch Saver, UX New Learner) and the journey in `2.3.3-journey-map.md`. Use real quotes and pains from the interviews to write realistic screen copy, and test at least one C1-type and one C2-type person. Ask for anything missing.
3. For 4.3.1 and 4.3.2, if the user asks you to build it, follow the prompt yourself and write one self-contained HTML file (no external libraries, fonts, images or APIs). Use inline SVG/CSS instead of stock photos. Mark all people, figures and advice in the prototype as fictional demo data, and keep guidance clearly separate from personal investment advice. Save it under `docs/prototypes/` unless the user names another place.
4. Run 4.3.3 only on real test notes. Never invent participants, quotes or metrics.
5. Save full outputs to `docs/2-challenge-wealth-advice/stages/04-prototype-test-rbi/<prompt>.md`, prototypes to `docs/prototypes/`, the team summary to `docs/2-challenge-wealth-advice/stages/04-prototype-test.md`, and decisions to `docs/2-challenge-wealth-advice/team-log.md`. Save raw test notes unchanged in `docs/2-challenge-wealth-advice/evidence/` and add them to `../EVIDENCE.md`.
