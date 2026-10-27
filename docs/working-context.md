# Working context — Innovation School 2026

Updated **14.10.2026**. This file is the persistent working context for the Innovation School repository. Read it together with the current stage file before continuing.

## Arianit's context

Arianit Lubishtani is a Team Lead working across RBI projects with roughly 20 software engineers/testers. His Learning Transfer direction is to learn facilitation and Design Thinking, apply them to real team bottlenecks, and share the method through recurring team practice rather than a one-off workshop.

The Innovation School timeline in the repo is: online kickoff 30.09.2026 → Budapest on-site 13.–16.10.2026 → homework/closing 04.11.2026 → Learning Transfer follow-up 15.12.2026.

## Challenge

Official challenge:

> “How are mass affluent clients served with wealth management advice and where are the gaps? How can we find more ways to offer more value to customers during the process?”

Working goal selected by Arianit:

> How can we give mass-affluent customers useful, affordable financial guidance that helps them achieve their goals and strengthens their relationship with the bank?

Customer value comes first. More investment/AUM or retention can be a bank benefit, but the challenge should not be framed as “make customers invest more”. A suitable decision can also mean keeping cash, reducing debt or waiting.

## Design Thinking status

1. **Understand** — Stage 1 draft and all 9 RBI prompt outputs are in `docs/2-challenge-wealth-advice/02-understand*`.
2. **Empathize & Synthesize** — preparation prompts 2.1.1–2.2.2 were run on 13.10.2026; synthesis prompts 2.3.1–2.3.4 were run on 14.10.2026 using two real internal expert interviews.
3. **Ideate** — next stage. Use the final HMW from Stage 2; do not jump to a single solution before generating alternatives.
4. **Prototype & Test** — not started.
5. **Business Case & Pitch** — not started.

## New expert evidence — 14.10.2026

Arianit supplied AI-generated meeting-note summaries from two real internal expert interviews. Because the notes are AI-generated summaries, they may contain errors and are not treated as verbatim transcripts. Names are removed in the synthesis and the interviews are referenced as **E-HU-1** and **E-RS-1**.

### Hungary expert — E-HU-1

- A structured path exists for customers to move from Mass to Premium/Private when conditions are met.
- Mass-affluent customers were described as receiving **non-advisory** service; they can buy investment products, while personalised advice is mainly available in Premium/Private.
- Digital investing is already strong: a My Life journey can reportedly open the securities account, complete MiFID, select from investment options and execute/document digitally in about 4–6 minutes.
- Premium customers can use relationship managers and RaiConnect video advice; dedicated customers are reportedly contacted a few times per year.
- Education initiatives exist or are launching. The expert reported fear of losing money and insufficient knowledge as engagement barriers.
- Expert-reported customer research suggests many customers want to make decisions independently in the app but still reach a person when questions arise; they generally do not want repeated unsolicited calls/emails.
- Government bonds were described as a strong local competitor because of perceived safety and fee/tax economics.

### Serbia expert — E-RS-1

- Salary/deposit signals are used to identify prospective Premium clients; some eligible customers still choose not to use Premium/Private service.
- Advised affluent/Premium clients can receive a video meeting with an adviser using an advisory tool.
- The process can cover goals, future plans, risk tolerance, investment horizon and whether the client wants to protect or grow funds before a fund direction is discussed.
- Advisers use brochures and tool-supported explanation to educate clients.
- Serbia-specific tax/fund details from the meeting notes are not used as cross-market facts without separate verification.

## Stage 2 synthesis — current conclusion

The interviews materially changed the earlier assumptions.

### What is **not** the main problem

- It is not accurate to say RBI has no advisory capability.
- It is not accurate to assume the bank needs a new advisory tool before anything else.
- It is not accurate to say education does not exist.
- The Hungary digital transaction journey is already fast, so process length is not automatically the main pain point.

### Strongest emerging problem space

There may be a meaningful gap between:

**self-service/non-advisory investing** ↔ **full Premium/Private adviser-led support**.

A mass-affluent customer outside full Premium/Private advisory service may have product access and digital execution but still need a deeper level of guidance at a specific decision moment.

### Hypothesis check

- **H1 Personalisation:** insufficient/too broad. Premium/advised clients may already receive personalised advice; the sharper issue is access to guidance for customers outside that service model.
- **H2 Knowledge/confidence:** partially validated by expert evidence; direct customer threshold not tested.
- **H3 Hybrid digital + human:** partially validated with strong expert support; original 7/10 customer threshold not tested.
- **H4 Missing adviser tools/data:** contradicted as written. Tools exist; access, service coverage, capacity and channel handover are better questions.

### Top insights

1. **The gap is access/orchestration, not lack of technology.**
2. **Self-service and human advice are complementary.** Customers may want independence for simple actions and expertise when uncertainty becomes high.
3. **Education matters, but generic information is not the same as personalised guidance.**

### Final Stage 2 HMW

> **How might we enable mass-affluent customers outside full Premium/Private advisory service to get the right level of guidance at the right moment so that they can make confident, informed investment decisions?**

This question is intentionally solution-neutral. Ideate should compare multiple answers such as better in-app guidance, context-preserving human handover, shared adviser support, education at decision moments, AI-assisted explanation or other concepts; none is selected yet.

## Evidence limitation

The Stage 2 synthesis is complete **for the current expert evidence**, but it is not full customer validation.

Still missing:

- direct stories from mass-affluent customers;
- reasons eligible customers decline/ignore Premium;
- exact moments where customers want human help;
- trust/competitor reasons;
- whether app-to-human handover preserves context;
- post-investment needs for customers without dedicated relationship managers;
- internal conversion, abandonment, satisfaction, AUM or retention data.

If customer interviews are added, rerun 2.3.1 → 2.3.4 and allow the HMW to change.

## Update 26.10.2026 — Learning Transfer and homework

- Learning Transfer Goal = ongoing monthly process (session → buddy round → experiment → review); only the text is sent to Christine on 03.11 12:00.
- Homework = facilitated 2h AI Maturity Innovation Hour #1 (Empathize → Define → short Ideate) with 4–6 engineers who already use AI, skills and agents. Target 30.10 or 02.11. Mandatory per the Day 4 deck (no-show fee and no certificate otherwise); steps Learn → Prepare → Apply → Reflect → Present (~0.5h with line manager, probably 05./06.11, unconfirmed).
- Learning Transfer Goal v3 follows the official template (My goal, Value for others, Signs of progress, Support needed, First step); the learning is Design Thinking and facilitation, the topic is AI maturity. Goal ≠ Homework.
- **Official materials** are now in `docs/official-materials/` (Day 1–4 decks, kickoff, meet-the-team/coaches, Goal and Expectation templates, Key Takeaway Slide Master, photos). They replace "not present" notes for the kickoff deck, meet-the-team and meet-the-coaches PDFs.
- Official RBI levels: Dictating, Commanding, Regulating, Orchestrating, Supervising (source: local `ai-playbooks/docs/ai/pdlc/guide.md` and `anth-rbi-sdlc/guide.md`). Teams are mostly assumed L2 (to be checked in the session).
- Open: homework hand-in format; line manager alignment 05./06.11; AI/compliance rules for the session.
- Files updated: `3-learning-transfer/00-overview.md`, `02-learning-transfer-goal.md`, `04-practical-workshop.md`, `timeline-and-deadlines.md`. Nothing committed or pushed.

## Evidence handling rules

- Real interviews only; never simulate customer answers or quotes.
- Keep interview notes anonymised in challenge outputs.
- AI-generated meeting summaries are not verbatim evidence.
- Country-specific thresholds, tax rules, transaction shares and other figures are reported interview statements until verified.
- Public bank pages show marketed capability, not actual use or outcome.
- Expert evidence is not a substitute for customer evidence.
- Distinguish **fact / reported expert statement / inference / unknown**.

## Key project navigation

- Common challenge view: `docs/2-challenge-wealth-advice/overview.md`
- Earlier detailed research: `docs/2-challenge-wealth-advice/research/team-research-summary.md`
- Understand: `docs/2-challenge-wealth-advice/stages/01-understand.md` and `docs/2-challenge-wealth-advice/stages/01-understand-rbi/`
- Current Stage 2: `docs/2-challenge-wealth-advice/stages/02-empathize.md`
- Full Stage 2 prompt outputs: `docs/2-challenge-wealth-advice/stages/02-empathize-rbi/`
- Team decisions: `docs/2-challenge-wealth-advice/team-log.md`
- Training/program notes: `docs/1-innovation-school/guide.md`
- RBI AI Prompt Library: `docs/1-innovation-school/ai-prompt-library.md`
- Stage skills: `.claude/skills/innovation-*`

## Working rules

- Work one Design Thinking stage at a time.
- Problem first → evidence second → solution third.
- Update `00-overview.md`, the current stage file and `team-log.md` when understanding changes.
- Keep team-facing docs simple and presentation-friendly.
- Do not push/send material outside the repo unless Arianit explicitly asks. Arianit explicitly requested the 14.10.2026 Stage 2 synthesis commit/push.
