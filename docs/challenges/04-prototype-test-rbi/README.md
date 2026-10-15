# Stage 4 Prototype & Test — RBI prompt outputs

All 5 Stage 4 prompts from the RBI AI Prompt Library, run 15.10.2026 with skill `innovation-prototype-test`, on the prototype the team already built: [../../prototype/my-wealth-prototype.html](../../prototype/my-wealth-prototype.html). The prototype was not changed by these prompts; fixes are recommendations.

**Evidence so far:** one round of feedback (T1, [raw](../../team-research/prototype-feedback-T1.md)); participant profile not recorded. No results are claimed as validated.

## Files

| Prompt | File | What it gives us |
|---|---|---|
| 4.1.1 Testing strategy | [4.1.1-testing-strategy.md](4.1.1-testing-strategy.md) | 7 hypotheses (H1–H7), participants, 9 tasks, 45-min script, pass marks, rounds until 04.11.2026 |
| 4.2.1 Storyboard & user flow | [4.2.1-storyboard-user-flow.md](4.2.1-storyboard-user-flow.md) | 11 frames for C1-type "Alex", 5-frame branch variant for C2-type "Kata", flow diagram |
| 4.3.1 Mobile app prototype | [4.3.1-mobile-app-prototype.md](4.3.1-mobile-app-prototype.md) | Screen inventory, quality-bar review, top 8 fixes |
| 4.3.2 Landing page prototype | [4.3.2-landing-page-prototype.md](4.3.2-landing-page-prototype.md) | Section review, quality bar, top 5 fixes |
| 4.3.3 Test results analysis | [4.3.3-test-results-analysis.md](4.3.3-test-results-analysis.md) | T1 analysis: 2 issues (fixed 15.10.2026), all hypotheses inconclusive, decision ITERATE |

## Key results

1. **Decision: ITERATE** (low confidence). Too little data to validate anything.
2. **T1 issues:** Wealth Insights unclear / too much information (high) and missing notifications (medium). Both changed on 15.10.2026; not yet re-tested.
3. **Tension:** T1 wants "what exactly is good to invest". That pulls toward personal advice. Wording like "Top idea / Best fit for you" needs a Compliance check.

## Top fixes before round 2 (recommendations)

1. Add an unlock screen and a short Life Profile questionnaire.
2. Fix contradictory demo data (equity fund up and down in the same week; €157,000 vs €159,150; goal "stability" vs "Grow money"; €437,000 shown as "available balance").
3. Soften "Top idea / Best fit for you"; add "keep as is" as a valid choice.
4. Remove or connect controls that do nothing (Cards, Payments, Loans, ☰, Goals steps, adviser rows).
5. Simplify the Playground (two simulators) and consider fictional company names.
6. AI must say it is AI; add a fallback answer.
7. Branch path mock-up and notification preferences.
8. Basic accessibility, one empty and one error state.

## Next

Round 2 with 5–8 real participants (at least 2 C1-type, 2 C2-type), 16.10.–26.10.2026, using the 4.1.1 plan. Save raw notes in `docs/team-research/`, add them to `.claude/skills/EVIDENCE.md`, then re-run 4.3.3.
