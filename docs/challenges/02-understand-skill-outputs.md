# 02 — Understand: outputs from the RBI prompts

*Created 13.10.2026 with the skill `innovation-understand` (RBI AI Prompt Library, Stage 1). Inputs: the challenge and working goal, [02-understand.md](02-understand.md), [01-research.md](01-research.md), [desk research](../my-research/02-mass-affluent-customers-bank-services-and-retention.md) and the expert transcript. **This is an AI-assisted draft for the team to challenge, not a decision.** The team chooses the scope; the booklet says AI must not define our problem.*

---

## Which prompts were used

| Prompt | Status | Why |
|---|---|---|
| 1.2.1 Terminology | ✅ Run (section 1) | The team needs the same words before choosing scope |
| 1.2.3 Scope | ✅ Run (section 2) | Most important open point in Understand |
| 1.2.2 Stakeholders | ✅ Run (section 3) | Tells us whom to involve and interview |
| 1.3.1 Data Sources | ✅ Run (section 4) | Turns "facts we still need" into a request list |
| 1.1.1 Market, 1.1.2 Competitors, 1.1.3 Technology | ⏭ Not re-run | Already covered in [desk research](../my-research/02-mass-affluent-customers-bank-services-and-retention.md) sections 4, 5 and 8, with sources. Re-run only if the team picks a new angle |
| 1.3.2 Data Analysis, 1.3.3 Data Storytelling | ⏸ Later | Need internal data we don't have yet |

---

## 1. Terminology (prompt 1.2.1)

Short version. The longer vocabulary table is in the [desk research](../my-research/02-mass-affluent-customers-bank-services-and-retention.md#vocabulary-to-be-comfortable-with).

| Term | Plain meaning | Often confused with | Why it matters for us |
|---|---|---|---|
| **Mass affluent** | A *type of customer*: more savings or income than typical retail customers, but below private banking. No single threshold; each bank and survey defines it differently | Premium | We must name one definition for our market, or our interviews won't match |
| **Premium** | A *service package* the bank offers (banker, benefits, pricing) | Mass affluent | Some mass-affluent customers are Premium, some are not. They are not the same group |
| **Private banking** | Intensive service for wealthier or complex clients | Premium | Our boundary on the top end |
| **Financial education** | General explanations for everyone (what is a fund, what is risk) | Advice | Can be offered freely; it is not a personal recommendation |
| **Guidance** | Help to understand options and next steps, without saying "buy this" | Advice | Our working goal says "guidance". Cheaper and more scalable than advice |
| **Investment advice** | A *personal recommendation* about an investment. In the EU it needs a suitability assessment (MiFID II) | Product information, selling | Regulated. Any idea that recommends must use the proper process |
| **Suitability assessment** | Required questions about knowledge, financial situation, ability to bear losses and goals before advice | "Paperwork" | Can't be removed, but can be made understandable |
| **Robo / automated advice** | Advice given by an algorithm, sometimes with optional human help | Generative AI chatbot | Czech Raiffeisen already offers a limited version |
| **Hybrid advice** | Digital for simple steps, a human for important decisions | Robo advice | Our hypothesis 3 |
| **Share of wallet** | How much of the customer's money is with our bank | Churn | Customers can keep their salary account and invest elsewhere ("hidden defection") |

**Measure (if we get data):** advice reach (% of segment that received advice), share of wallet, and drop-off per journey step.

---

## 2. Scope (prompt 1.2.3)

### IN scope (proposal)
- **One market and one customer group.** Options for the team are below.
- **The journey from "I have savings and should do something" to "first goal review"**: trigger → looking for information → proposal → suitability and decision → signing and funding → follow-up.
- **People:** the customer, the banker/advisor, and the digital channel (app).
- **Aspects:** personalisation of advice, understanding and confidence, digital vs human handover, advisor data/tools and time. These match our 4 hypotheses.

### OUT of scope (proposal)

| Excluded | Why | Risk of excluding | Reconsider when |
|---|---|---|---|
| Private banking | Different service model and customers | Small; it is our upper boundary | Never for this challenge |
| Designing new investment products | Product teams own this; our gap is advice and journey | We may miss "wrong products" as a cause | Interviews show products themselves are the issue |
| Core banking / platform replacement | Too large for Innovation School | Small | – |
| Changing regulation (MiFID) | Not in our control | Ideas may hit legal limits | Always check ideas with compliance |
| Mass-retail small-amount investing (e.g. €50/month) | Different target, different economics | Some overlap with emerging affluent | The team decides the group is "first-time investors" |

### MAYBE: decisions the team must make

1. **Which market?**

   | Option | For | Against |
   |---|---|---|
   | **Serbia** | Our expert interview comes from there; Premium advertises planning and a personal banker | Can't do street interviews there this week |
   | **Czech Republic** | Robo advice with human help already exists, so we can build on it | No expert contact yet |
   | **Hungary** | We are in Budapest: street interviews will be with Hungarian customers. RBHU CEO session on 15.10.2026 | **We have no research on Hungary yet (needs verification)** |

   **Important:** street interviews this week will be in Budapest. Either pick Hungary, or label the street interviews as "general customer signal, other market".

2. **Which customer group?** For example: (a) Premium customers who have savings but no investment plan; (b) customers who already invest but get no follow-up; (c) mass-affluent customers *not* in Premium.
3. **Include non-investment outcomes?** Cash reserve or paying off debt can be the right advice. Recommendation: yes, keep them in. Our goal is about customer goals, not only selling.
4. **Customers who invest at another provider?** Recommendation: yes, interview them. They show why we lose business.

### Phasing (only if the idea later becomes a real project)
- **Phase 1 (3 months):** quick wins in what exists, e.g. a clearer proposal explanation, a better handover to a banker.
- **Phase 2 (6 months):** a connected digital + human journey with goal reviews.
- **Phase 3 (12+ months):** whole-household planning and data-driven prompts.

### Scope risks
- **Too narrow** (e.g. only the questionnaire screen): we might fix a symptom.
- **Too broad** (all mass affluent, all markets, all products): we can't interview or test it in 3 weeks.
- **Balance:** one market, one group, the full journey, but test only one stage.

### Scope statement (fill in the gaps together)

> We focus on **[customer group]** in **[market]**, from the moment they think about what to do with their savings until their first goal review. We look at how personal, understandable and well connected (digital and human) the help is today. Private banking, new products and system replacement are out of scope.

---

## 3. Stakeholders (prompt 1.2.2)

| Stakeholder | Main interest | Concern | Influence | Interest | How to involve | Success for them |
|---|---|---|---|---|---|---|
| **Mass-affluent customer** | Reach goals, safely and simply | Confusion, hidden costs, being sold to | High (they choose) | High | Interviews, prototype tests | Understands and trusts the plan |
| **Customer's partner / family** | Shared decisions | Being left out | Medium | Medium | Ask customers who decides with them | Included when the customer wants |
| **Premium banker / advisor** | Serve clients well, hit targets | No time, paperwork, missing data | High | High | Expert interview, test ideas with them | More advice time, less admin |
| **Branch staff** | Help quickly | Too many customers, complex tools | Medium | Medium | Short interview | Simple handover |
| **Segment / Premium manager** | Growth and retention in segment | Cost to serve | High | High | Present scope and findings | Clear business value |
| **Investment product team** | More fund/investment uptake | Low uptake in mass segment | Medium | High | Ask for uptake data | More suitable sales |
| **Digital / app team** | Journey works end to end | Integration effort | High | Medium | Ask what the app covers | Clear, buildable improvement |
| **Compliance / legal** | MiFID-compliant advice | Shortcuts, misleading guidance | High | Low | Check ideas early | No new risk |
| **Contact centre** | Handle calls well | Questions they can't answer | Low | Medium | Ask what customers call about | Fewer repeat calls |
| **Marketing** | Relevant campaigns | Message overload | Low | Low | Inform | Better targeting |
| **Data / analytics team** | Correct data use | Privacy, GDPR | Medium | Low | Data requests (section 4) | Clear, lawful requests |
| **Fintechs / competitors** | Win the same customers | – | Medium (external) | – | Desk research, ask customers | – |
| **Coach / Innovation Management** | Good method, real learning | Jumping to solutions | Medium | High | Check-ins during Budapest | Evidence-based pitch |

**Matrix**
- **Manage closely** (high influence, high interest): customer, Premium banker, segment manager.
- **Keep satisfied** (high influence, lower interest): compliance, digital/app team.
- **Keep informed** (lower influence, high interest): product team, coach, contact centre.
- **Monitor:** marketing, data team, competitors.

**Often forgotten:** partner/family, contact centre, and customers who already moved their money elsewhere.

---

## 4. Data sources (prompt 1.3.1)

Turns section 5 of [02-understand.md](02-understand.md) into a request list. **No internal data has been obtained.** Any number before that is an assumption.

| Data we need | Why | Probably owned by | Priority |
|---|---|---|---|
| Segment definition and size in the chosen market | Know who we talk about | Segment / Premium management | 🔴 Critical, quick |
| Share of segment that invests; deposits held | Size of the gap | Segment management, BI | 🔴 Critical |
| What the advice offer is per tier (standard, Premium) | Know what exists today | Premium / wealth management | 🟢 Quick win (public pages + one call) |
| Drop-off per step in the digital investment journey | Where people stop (H3) | Digital / app analytics | 🔴 Critical, harder |
| Robo-advice pilot: users, completion, human requests | Build on what exists | Digital / investment team | 🔴 Critical, harder |
| Time per advice session; clients per advisor | Advisor capacity (H4) | Branch network, Premium management | 🟡 Medium |
| Customer feedback, complaints about investing/advice | Pains in customers' words | Customer experience team | 🟡 Medium |
| Reasons customers invest elsewhere | Retention risk | CX surveys, banker experience | 🟡 Medium |

**Questions to ask a data owner**
1. Do you have this data for [market], and in what form (report, dashboard, export)?
2. How reliable and complete is it? Are definitions the same across systems?
3. Can we see it aggregated and anonymised for a training exercise? Any GDPR limits?
4. How often is it updated?
5. Who else uses it, and what do they conclude from it?

**Tips**
- **Run this request list in MS Copilot.** It can search internal documents for existing reports.
- **Never put customer-level data into any AI tool.**
- **Know when to stop:** the segment definition plus one journey or drop-off figure is enough for this week. Interviews matter more.

---

## What the team should decide next

1. Market and customer group (section 2) → fill in the scope statement.
2. Agree the top 2–3 painful journey stages to explore → copy them into [02-understand.md](02-understand.md) section 6.
3. Send 2–3 data requests (section 4).
4. Then move to [03-empathize.md](03-empathize.md): interviews.
