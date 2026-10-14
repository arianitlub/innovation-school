---
name: innovation-understand
description: RBI Innovation School AI Prompt Library, Stage 1 Understand. Use when researching the market, competitors or technology trends, aligning terminology, mapping stakeholders, defining scope, or planning, analysing or visualising data for the Innovation Challenge (prompts 1.1.1–1.3.3).
---

# Stage 1: Understand

Official RBI Innovation School prompts, stored word for word in `prompts/`. Booklet principles and frameworks: `docs/training/ai-prompt-library.md`.

| Prompt | File | Use when |
|---|---|---|
| 1.1.1 Market & Industry Context | `prompts/1.1.1-market-industry-context.md` | Broad market overview, trends, benchmarks |
| 1.1.2 Competitive Landscape | `prompts/1.1.2-competitive-landscape.md` | Comparing how competitors and other industries handle the challenge |
| 1.1.3 Technology & Innovation Trends | `prompts/1.1.3-technology-trends.md` | Which technologies could help; hype vs. proven |
| 1.2.1 Terminology | `prompts/1.2.1-terminology.md` | Team needs shared definitions |
| 1.2.2 Stakeholder Mapping | `prompts/1.2.2-stakeholder-mapping.md` | Who is affected or has influence |
| 1.2.3 Scope Definition | `prompts/1.2.3-scope-definition.md` | In / out / maybe scope |
| 1.3.1 Data Sources | `prompts/1.3.1-data-sources.md` | What data to collect and where |
| 1.3.2 Data Analysis Methods | `prompts/1.3.2-data-analysis-methods.md` | How to analyse collected data |
| 1.3.3 Data Visualisation & Storytelling | `prompts/1.3.3-data-visualization-storytelling.md` | Turning findings into charts and a story |

## How to use

**Evidence:** fill placeholders from [`../EVIDENCE.md`](../EVIDENCE.md), the shared map of current interviews (C1, C2, UX, experts), synthesis, decisions and research. Read it first. Customer evidence ranks above expert views, and both above desk research.

1. Pick the prompt that matches the request and read its file.
2. Fill the `[INSERT ...]` placeholders from the repo: the challenge and working goal in `AGENTS.md` and `docs/challenges/00-overview.md`; current Understand work in `docs/challenges/02-understand.md` and earlier outputs in `docs/challenges/02-understand-rbi/`; research in `docs/my-research/` and `docs/challenges/01-research.md`. If Empathize is done, also use the customer and expert interviews listed in `EVIDENCE.md` (e.g. for scope and stakeholders). Ask the user only for what is not there.
3. Either show the filled prompt for the user to paste into Claude, Copilot or ChatGPT, or run it here if they ask. Keep the prompt text unchanged apart from the placeholders, and replace generic examples with our mass-affluent advice context.
4. Label every company, statistic and regulatory claim that has not been checked as "needs verification". Never call the strategy paper or the transcript RBI-verified fact.
5. Save full outputs to `docs/challenges/02-understand-rbi/<prompt>.md` (filled prompt + output) and decisions to `docs/challenges/02-understand.md`. Add sources to `docs/my-research/05-sources-and-further-reading.md`.

Do not let AI define our specific problem; the booklet says that is the team's job. Stage 1.3 needs internal data we do not have yet, so treat any numbers the AI produces as assumptions.
