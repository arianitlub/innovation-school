# 03 — Empathize & Synthesize

*Design Thinking step 2. Started 13.10.2026; expert synthesis 14.10.2026; updated 14.10.2026 with two street interviews and the internal UX study.*

## Status

Evidence so far:

- **2 internal expert interviews** (Hungary, Serbia): AI-generated meeting summaries.
- **2 street interviews in Budapest:** C1 (English, an investor) and C2 (Hungarian, a long-time saver). Automatic transcripts in [team-research](../evidence/).
- **Internal UX study on investment education:** 8 Serbian interviews plus a 4-country synthesis. Secondary evidence, not confirmed mass affluent.

The RBI synthesis prompts **2.3.1 → 2.3.4** were re-run with all of it. This gives a **provisional problem synthesis and HMW question**. With only 2 customers, the 7/10 and 6/10 pass marks **cannot be claimed**.

Full synthesis outputs: [02-empathize-rbi/README.md](02-empathize-rbi/README.md).

---

## 1. What changed after the interviews

Our earlier framing was too focused on whether customers need a new advisory tool or more education.

The interviews show that:

- **advisory capability already exists** in higher service tiers;
- **digital investing already exists** and can be fast and end-to-end;
- banks already **identify and segment** financially attractive customers;
- education already exists or is being expanded;
- the stronger unresolved space is **between self-service and full Premium/Private advisory support**.

The street interviews added:

- bank guidance felt like a **product push**, unclear and not based on life plans (C1);
- **cost** made C1 cancel the bank investment account, and the bank asked why but offered nothing;
- **phone offers are rejected**; trust comes from the branch or from contacting the bank yourself (C2);
- customers take advice from **family and ChatGPT**, not the bank (C1, C2).

> **Problem space:** mass-affluent customers outside full Premium can invest digitally, but the bank's guidance feels product-led, unclear, costly and on the bank's terms. So they decide elsewhere and the bank loses the investment relationship.

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

Detailed anonymised evidence: [2.3.0 expert input](02-empathize-rbi/2.3.0-expert-interview-evidence.md).

---

### Customer evidence in one view

| ID | Who | Key points |
|---|---|---|
| C1 | Investor for about 2 years, English | Nephew and ChatGPT as advisers; cancelled the bank investment account for cost; "more of a product push"; wants life-context guidance; prefers digital with immediate support |
| C2 | Long-time saver, Hungarian | No phone offers; trusts branch or self-initiated contact; doesn't research; relies on others |
| UX | 8 Serbian savers + 4-country synthesis | Complexity, risk and withdrawal unclear; wants control and human access |

Details: [2.3.0 part 2](02-empathize-rbi/2.3.0-expert-interview-evidence.md).

---

## 3. Hypothesis check

The original team hypotheses are kept below so we can see what changed.

| # | Original hypothesis | Result (2 experts + 2 customers + UX study) | What we learned |
|---|---|---|---|
| **H1** | At least 7/10 mass-affluent customers will say current advice is not sufficiently personalised | **PARTIALLY SUPPORTED** | Experts: non-advisory outside Premium. C1: "not too personalised… more of a product push". Pass mark not testable with n=2 |
| **H2** | At least 6/10 customers will say lack of knowledge makes investment decisions difficult | **PARTIALLY SUPPORTED, REFRAMED** | Experts and UX: fear of loss, complexity. C1 had enough information but it "wasn't clear", and left over cost. Clarity, trust and cost matter more than knowledge itself |
| **H3** | At least 7/10 customers prefer digital self-service for simple steps + human advice for important decisions | **PARTIALLY SUPPORTED, REFINED** | C1: digital with immediate support. C2: branch, not internet. Both want to **control the contact**; phone offers rejected |
| **H4** | Most advisers say missing data/tools/preparation time limit personalisation | **CONTRADICTED AS WRITTEN** | Tools exist. C1's problem was the adviser's **availability**. The limit is access and coverage, not tools |

### Refined hypotheses to carry forward

- **RH1 — Product-led, not life-led:** outside Premium, bank investment contact starts from products and the MiFID questionnaire, not from the customer's life plans; customers would share that context.
- **RH2 — Clarity and cost:** unclear information and cost stop or end investing with the bank more than lack of knowledge.
- **RH3 — Customer controls contact:** customers want help when they ask for it, in the channel they trust; outbound phone offers lose trust.
- **RH4 — Access, not tools:** adviser availability and service coverage limit personalised guidance, not missing tools.
- **RH5 (new) — Decisions happen elsewhere:** customers use family, other people and ChatGPT as advisers, so the bank isn't present when the decision is made.

These are **research conclusions/hypotheses**, not final solution requirements.

---

## 4. Top three insights

### Insight 1 — Guidance outside Premium is product-led, not life-led

Customers need guidance that starts from their situation, because today's contact feels like a product push (C1, experts). **C1 would share life context if asked.**

### Insight 2 — The customer must control the contact

Customers need help when *they* ask, in a channel they trust, because outbound phone offers and the adviser's schedule destroy trust (C1, C2, HU research). The channel differs: app (C1), branch (C2).

### Insight 3 — Unclear and costly means customers decide elsewhere

Customers need clear, comparable, affordable options, because otherwise they turn to family, ChatGPT or cheaper providers (C1, C2). C1 cancelled for cost, and the bank offered nothing at that moment.

---

## 5. Current-state journey — simplified

**Trigger → search (family, ChatGPT) → bank contact → MiFID profile → decide/invest → get help → follow-up → exit or stay**

Moments of truth: **first bank contact** (trust won or lost), **the decision** ("is this clear and right for me?") and **the exit** (last chance to keep the customer).

> **First contact on the bank's terms → product push, unclear and costly → customer decides elsewhere → relationship lost at exit**

Full current-state map: [2.3.3 journey map](02-empathize-rbi/2.3.3-journey-map.md).

---

## 6. Provisional user archetypes

Each persona rests on one real interview; no demographics were invented.

1. **Self-Directed Comparer (C1):** invests online and uses family and ChatGPT as advisers; left the bank over cost and product push. **Main persona for Ideate.**
2. **Cautious Branch Saver (C2):** trusts only face-to-face, self-initiated contact; no phone offers.
3. **New-to-Investing Learner (UX study):** needs simple, relevant explanations to start safely.
4. Benchmark: **Advised Premium client** (experts).

Full provisional persona output: [2.3.2 personas](02-empathize-rbi/2.3.2-personas.md).

---

## 7. Final focus — How Might We

> **How might we give mass-affluent customers outside full Premium advice clear, affordable guidance that starts from their own situation and is there when they choose to ask for it, so they can make confident investment decisions with their bank?**

Updated after the street interviews: it adds *own situation*, *when they choose to ask*, *clear, affordable* and *with their bank*. See [2.3.4](02-empathize-rbi/2.3.4-how-might-we.md).

This is intentionally **solution-neutral**. It does not decide whether the answer is education, an app feature, a shared adviser pool, a handover flow, AI, a new service model or something else. Those belong in **Ideate**.

---

## 8. What we should not do yet

- Do not say all mass-affluent customers lack personalised advice.
- Do not say RBI lacks advisory tools or digital investment capability.
- Do not assume education alone is the solution.
- Do not plan more outbound phone or ad campaigns as the answer.
- Do not design a digital-only solution (C2 trusts the branch).
- Do not define success as “make customers invest more.” The customer outcome is a suitable, confident decision; bank engagement/AUM can be a downstream benefit.
- Do not treat interview-reported thresholds, tax details or volumes as verified facts without checking them.

---

## 9. Evidence still missing

Before treating this as a fully customer-validated problem, we still want answers to:

1. More street interviews, counted with the screening question (target ≥10 in segment). Add notes from the unrecorded street conversations if they exist.
2. Why customers leave or don't start: cost, clarity or trust?
3. Would customers trust a bank comparison the way they trust family or ChatGPT?
4. What is a fair price for guidance?
5. Why do eligible customers not use Premium? Does app-to-human handover keep context?

When more interviews are added, re-run 2.3.1–2.3.4 again.

---

## 10. Output of this step

- **Hypothesis check:** complete for 2 experts + 2 customers + UX study; customer pass marks not reached (n=2).
- **Problem One-Pager (2.4):** filled: [2.4](02-empathize-rbi/2.4-problem-one-pager.md).
- **Pattern synthesis:** complete.
- **Provisional personas:** complete, each based on one real interview.
- **Current-state journey:** complete as a cross-market expert synthesis.
- **HMW:** complete and ready to take into Ideate.

**Next Design Thinking step:** Stage 3 — **Ideate**, using the HMW above while keeping customer-validation gaps visible.
