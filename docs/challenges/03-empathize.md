# 03 — Empathize & Synthesize

*Design Thinking step 2. Started 13.10.2026; expert synthesis updated 14.10.2026.*

## Status

We now have **two real internal expert interviews**, one from Hungary and one from Serbia, and have run the RBI synthesis prompts **2.3.1 → 2.3.4**.

This is enough to produce a **provisional problem synthesis and HMW question**, but not enough to claim full customer validation. The original H1–H3 pass marks were written for direct customer interviews, and no direct customer set has yet been added to this repo.

The interview notes were supplied as **AI-generated meeting summaries**, so details may contain transcription/summarisation errors. They are treated as expert evidence, not verbatim quotes or verified internal policy.

Full synthesis outputs: [03-empathize-rbi/README.md](03-empathize-rbi/README.md).

---

## 1. What changed after the interviews

Our earlier framing was too focused on whether customers need a new advisory tool or more education.

The interviews show that:

- **advisory capability already exists** in higher service tiers;
- **digital investing already exists** and can be fast and end-to-end;
- banks already **identify and segment** financially attractive customers;
- education already exists or is being expanded;
- the stronger unresolved space is **between self-service and full Premium/Private advisory support**.

So the emerging problem is not “RBI has no advice” or “we need another advisory tool.”

> **Potential problem space:** mass-affluent customers outside full Premium/Private advisory support may have product access and digital execution, but not the same level of personalised guidance when they become uncertain or need help making a decision.

---

## 2. Expert evidence in one view

| Area | Hungary expert | Serbia expert | Learning |
|---|---|---|---|
| Segmentation | Mass → Premium/Private eligibility structure | Salary/deposit signals used for Premium prospects | The bank already knows how to identify many higher-value customers |
| Mass-affluent advice | Non-advisory service; products can still be bought | Some eligible customers do not use Premium/Private | There can be customers outside the full advisory model |
| Premium/advised service | Dedicated RM at higher tier, RaiConnect video advice | Adviser + video + advisory tool | Strong advisory capability already exists |
| Digital journey | My Life investment journey, MiFID, digital execution, reportedly ~4–6 min | Digital/adviser-supported process | Transaction technology is not obviously the core problem |
| Education | Fear of loss/knowledge gap; Learn to Invest + podcast | Brochures and adviser explanation | Understanding/confidence matters, but education is not absent |
| Human preference | Customer research reportedly favours self-service + human help when needed; less unsolicited outreach | Human/video advice already used | Hybrid/on-demand support is the strongest common direction |

Detailed anonymised evidence: [2.3.0 expert input](03-empathize-rbi/2.3.0-expert-interview-evidence.md).

---

## 3. Hypothesis check

The original team hypotheses are kept below so we can see what changed.

| # | Original hypothesis | Result after 2 expert interviews | What we learned |
|---|---|---|---|
| **H1** | At least 7/10 mass-affluent customers will say current advice is not sufficiently personalised | **INSUFFICIENT DATA / TOO BROAD** | Hungary suggests some mass-affluent customers receive no personal advice at all, while Serbia shows advised/Premium clients can receive personalised advice. We must segment by service model |
| **H2** | At least 6/10 customers will say lack of knowledge makes investment decisions difficult | **PARTIALLY VALIDATED** | Both experts describe explanation/education as important; Hungary explicitly reports fear of loss and insufficient knowledge. Direct customer threshold still untested |
| **H3** | At least 7/10 customers prefer digital self-service for simple steps + human advice for important decisions | **PARTIALLY VALIDATED — STRONG EXPERT SUPPORT** | Both interviews support hybrid delivery; Hungary additionally reports customer research favouring self-service with human help on demand. Direct 7/10 test still missing |
| **H4** | Most advisers say missing data/tools/preparation time limit personalisation | **CONTRADICTED AS WRITTEN** | Advisory tools and remote capabilities already exist. The more useful question is whether **access, service coverage, capacity or handover** limit personalised guidance |

### Refined hypotheses to carry forward

- **RH1 — Advice access:** mass-affluent customers outside full Premium/Private advisory support may lack an appropriate level of personalised guidance when self-service information is not enough.
- **RH2 — Confidence:** knowledge and fear of loss can stop or delay investment decisions even when execution is technically easy.
- **RH3 — Hybrid:** many customers may prefer to remain self-directed while having expert help available at important moments.
- **RH4 — Service model:** the bottleneck may be access/orchestration of existing capabilities rather than missing advisory tools.

These are **research conclusions/hypotheses**, not final solution requirements.

---

## 4. Top three insights

### Insight 1 — The gap is access to guidance, not lack of technology

The bank already has digital investing, profiling, video support and advisory tooling. The interesting gap is who gets access to deeper guidance and when.

### Insight 2 — Self-service and human advice are not opposites

The strongest signal is a **hybrid, on-demand model**: customers can act independently but want a trusted person available when uncertainty becomes high.

### Insight 3 — Education helps, but information alone may not be enough

Customers can receive articles, podcasts, brochures or product information and still need help translating that information into a decision that fits their goal, horizon and risk.

---

## 5. Current-state journey — simplified

**Recognised/eligible → chooses service path → learns/explores → completes profile/suitability → decides/invests → asks for help if needed → follow-up/review**

Two paths are visible:

1. **Self-service/non-advisory path:** strong digital execution, but personalised help for a non-Premium customer is unclear.
2. **Premium/advised path:** banker/video/advisory tool can provide richer personal guidance.

The main “moment of truth” is:

> **Self-service information → uncertainty/question → appropriate guidance → confident next step**

Full current-state map: [2.3.3 journey map](03-empathize-rbi/2.3.3-journey-map.md).

---

## 6. Provisional user archetypes

Because we do not yet have direct customer interviews, we deliberately did **not** invent full personas with fake demographics or quotes.

The expert evidence suggests four useful provisional archetypes:

1. **Independent mass-affluent explorer** — wants control/self-service, human help only when needed.
2. **Guidance-seeking saver/new investor** — needs confidence and understandable explanation.
3. **Advised Premium client** — already receives higher-touch personal guidance.
4. **Eligible but unengaged customer** — meets criteria but does not use Premium/Private service.

Full provisional persona output: [2.3.2 personas](03-empathize-rbi/2.3.2-personas.md).

---

## 7. Final focus — How Might We

> **How might we enable mass-affluent customers outside full Premium/Private advisory service to get the right level of guidance at the right moment so that they can make confident, informed investment decisions?**

This is intentionally **solution-neutral**. It does not decide whether the answer is education, an app feature, a shared adviser pool, a handover flow, AI, a new service model or something else. Those belong in **Ideate**.

---

## 8. What we should not do yet

- Do not say all mass-affluent customers lack personalised advice.
- Do not say RBI lacks advisory tools or digital investment capability.
- Do not assume education alone is the solution.
- Do not define success as “make customers invest more.” The customer outcome is a suitable, confident decision; bank engagement/AUM can be a downstream benefit.
- Do not treat interview-reported thresholds, tax details or volumes as verified facts without checking them.

---

## 9. Evidence still missing

Before treating this as a fully customer-validated problem, we still want answers to:

1. Why do eligible customers choose not to use Premium/advisory service?
2. At what exact moments do customers want a human?
3. What do non-Premium mass-affluent customers do when digital information is not enough?
4. Does app-to-human handover preserve the customer's context?
5. What happens after investment for customers without a dedicated relationship manager?

If customer interviews are added later, rerun 2.3.1–2.3.4 and replace the provisional archetypes/HMW if the evidence changes.

---

## 10. Output of this step

- **Hypothesis check:** complete for the two expert interviews; customer pass marks not completed.
- **Pattern synthesis:** complete.
- **Provisional archetypes:** complete with evidence limitation.
- **Current-state journey:** complete as a cross-market expert synthesis.
- **HMW:** complete and ready to take into Ideate.

**Next Design Thinking step:** Stage 3 — **Ideate**, using the HMW above while keeping customer-validation gaps visible.
