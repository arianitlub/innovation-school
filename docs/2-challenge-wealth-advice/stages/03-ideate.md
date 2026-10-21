# 04 — Ideate

*Design Thinking step 3. 14.10.2026. Full RBI prompt outputs: [03-ideate-rbi/](03-ideate-rbi/README.md).*

## Status

We generated 70 ideas (3.2.1) and 46 SCAMPER ideas (3.2.2), and scored a shortlist of 12 (3.3.1). The top 5 were close together and mostly parts of the team idea. **Arianit proposed the concept "My Wealth" on 14.10.2026** as the one to prototype. It is the team idea (I-01 Money Guide) made concrete. **Team confirmation still needed.**

HMW we answer:

> How might we give mass-affluent customers outside full Premium advice clear, affordable guidance that starts from their own situation and is there when they choose to ask for it, so they can make confident investment decisions with their bank?

---

## 1. Chosen concept — My Wealth

A new section inside the existing mobile app (My Life in Hungary), **unlocked when the customer enters the mass-affluent segment**.

### Flow

**Threshold reached → Unlock My Wealth → Life Profile → Learn / Playground → AI if wanted → Expert if needed → Real investment or advice → Ongoing reviews**

For older or AI-wary customers: **Life Profile → Learn → Talk to an expert.** They never need the AI.

### Parts

| Part | What it does | Based on |
|---|---|---|
| **Unlock** | The bank detects the threshold from what it already knows (income, deposits, investments). Message: "You've unlocked My Wealth: a new way to understand, plan and manage your money." Not "You have €50k, please invest" | C1: product push; experts: segmentation exists |
| **My Wealth Snapshot** | Cash/deposits, investments, total position with the bank, simple goal progress | Idea I-02 |
| **Life Profile** | Guided self-assessment: what are you saving for (retirement, house, children, grow, protect), when you need the money, how important access is, comfort with losses, investing experience, stability or growth. Result in plain words, e.g. "You value stability, have a 5–10 year horizon and want to grow savings." The formal MiFID process happens later, before regulated advice | C1: "find out about my life situation"; top score I-02 |
| **Learn** | 2–3 minute lessons matched to the profile: beginners, risk vs return, funds and bonds, inflation, diversification, fees. Reuses Learn to Invest | UX study; E-HU-1 |
| **Investment Playground** | Virtual €50k/€100k, fake portfolio, simulate 1/5/10 years and a market fall | UX study (simulator); least evidence, see fix 5 |
| **AI Wealth Assistant** | Optional. Uses permitted context (profile, bank products, journey). Explains, e.g. "Why is this fund risky?", "Explain bonds simply". **It educates; personal recommendations stay in the approved advisory process** | C1 uses ChatGPT; technology research |
| **Talk to an Expert** | Always visible: call now, video meeting (RaiConnect), book an appointment. **The banker receives the Life Profile and what the customer explored**, so the conversation doesn't restart from zero | C1: adviser availability; idea I-05 |
| **Ongoing nudges** | "Your deposit matures next month: review your options." "Your goal hasn't been reviewed for 12 months." "See how your plan has progressed" | Experts: no review outside Premium |

---

## 2. Fixes to add before prototyping

From our own evidence and the 3.3.1 scoring:

1. **Show costs.** "What you pay per year" in the Snapshot, plus a simple comparer: deposit vs government bond vs fund. *(C1 left because of cost; I-03 scored 4th.)*
2. **Use the exit moment.** When a customer closes an investment, show a cheaper option or "talk to an expert". *(C1: the bank asked why but offered nothing; I-04 scored 3rd.)*
3. **Branch way in.** The banker opens the same Life Profile on a tablet in the branch and prints a one-page plan. *(C2 distrusts online offers; I-09.)*
4. **Opt-in below the threshold.** "Want My Wealth?" for customers just under it, so nobody is cut off.
5. **Keep the Playground simple, or add it later.** The UX study found the old simulator confusing. Show clearly what was invested and what was gain.
6. **Life Profile ≠ advice.** State "this is not investment advice", and ask GDPR consent for the profile data.
7. **Nudges are opt-in.** The customer chooses which ones, and how often. No cold calls.

---

## 3. Guardrails

- AI **explains**, the banker **recommends** (MiFID II). AI must say it is AI (AI Act, from 02.08.2026). Check with Compliance early.
- Success means **a confident, suitable decision**, not "invest more". Keeping cash can be the right answer.
- Not digital-only: the branch path must work without the app.
- Reuse existing systems: My Life, RaiConnect, advisory tool, Learn to Invest.

## 4. What we did not choose (for now)

- Guidance desk for customers outside Premium (I-08) and paid one-off session (I-12): need adviser capacity and pricing answers.
- "Bring your family / your ChatGPT answer" (I-11): good later add-on.

## 5. Open questions to test

1. Does the unlock message feel helpful or like sales?
2. Do customers complete the Life Profile, and does the result feel accurate?
3. Do they understand the costs and the comparison?
4. When do they press "Talk to an Expert"?
5. Would branch-trusting customers use the tablet version?
6. What can the AI legally say? (Compliance)

---

## 6. Next step — Stage 4 Prototype & Test (ready, not started)

When the team is ready, run skill `innovation-prototype-test`:

1. **4.1.1 Testing strategy:** what to test, with whom (5–8 people, including a C1-type and a C2-type customer), success criteria.
2. **4.3.1 Mobile app prototype:** one clickable HTML file of My Wealth. Core path: unlock → Life Profile → Snapshot with costs → Learn → Talk to an Expert (profile passed on). AI and Playground one screen each. Fictional demo data only.
3. Test with real people, then **4.3.3** to analyse the results.
