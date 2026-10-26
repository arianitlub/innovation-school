# AI Maturity Discovery Workshop — homework draft

## Update 26.10.2026 — audience and levels (read first, overrides older text below)

- **Audience:** software engineers who already code with AI and use skills and agents. Do **not** frame anything as "people don't know how to use AI". The question is: *where is each person on the official RBI levels, and what stops the next step?*
- **Official levels (RBI blueprint, via `ai-playbooks/docs/ai`):** 1 Dictating (human gives step-by-step directions, review every action) · 2 Commanding (human writes execution plans, review after the order) · 3 Regulating (plans co-authored, workspace rules define *how*, review of implementation detail; spec-driven development starts) · 4 Orchestrating (agent proposes plans, review per phase/gate) · 5 Supervising (ticket in, review final evidence only). Not a score: it shows the next step. It depends on how work and shared context are organised, not on how long AI has been used. Levels can differ per module. Closes the earlier **[open]** on the 5-level text.
- **Grid rows (practices):** plan before prompt · shared workspace rules · reusable skills/commands · agents and sub-agents · review · testing · orchestration/phases.
- **Story question for L2→L3:** "Tell me about a correction you made to AI more than once. Did it become a shared rule?"
- **Barrier prompts:** shared rules missing, no time, low trust in agents, bank security/compliance, no orchestrator, unclear next step.
- **Known climb steps (from the guide):** 1→2 shared skills + short plan before invoking; 2→3 corrections become standing rules; 3→4 automate self-correction, codify phase sequence; 4→5 one evidence review at the end. Cheapest first experiment for month 2: every agent correction becomes a rule.
- **Design Thinking scope:** Understand + Empathize + a light Define (HMW). No Ideate: solutions go to the parking lot and become the month-2 experiment.
- **Homework is a facilitated session, not a presentation.** Target run: 30.10 or 02.11. Output: 1-page summary (section 7). Participants are real volunteers, no personas. Hand-in format **[check]**.
- Remove or ignore older lines that assume beginners or a generic L0–L4 model.
- Note: `pdlc/guide.md` describes a `/start` routing skill that `anth-rbi-sdlc/guide.md` says does not exist (retracted). Verify before mentioning it.

Status: **DRAFT v0.1, 21.10.2026.** Not yet agreed with the Line Manager. Open points are marked **[open]**.

Fit with the other notes: [02-learning-transfer-goal.md](02-learning-transfer-goal.md) (Goal v2, buddy sessions) and [03-meeting-preparation.md](03-meeting-preparation.md) (first practice session) are about *doing* AI practice sessions. This workshop is a **discovery step before them**: it only understands (Understand + Empathize), so the later sessions and the baseline start from real needs. Decide whether it replaces or comes before the first practice session. **[open]**

## 1. Why this idea (honest check)

**Strengths**
- Real, shared bottleneck for engineers on different projects: uneven AI use and no common picture.
- It uses Understand + Empathize on purpose: we learn first, we do not sell a solution.
- Small and doable: 4–6 people, one session.
- It can become the first Innovation Hour, so it links to the recurring Goal.

**Risks and how we handle them**

| Risk | Handling |
|---|---|
| The homework asks for a ~2h workshop; 60–90 min may be too short | Plan **90 min + 30 min buffer/break**, or two short parts (see agenda). **[open: confirm with Christine/Jannik]** |
| The 5-level model looks like a test, people give "nice" answers | Self-placement is anonymous first; say clearly "this is not an assessment, no ranking, no names to management" |
| One-off activity, but the Goal must be **recurring** | Goal = monthly Innovation Hour. This workshop is session 1 |
| We jump to tools (Copilot, MCP, …) | Rule: no solutions until the "Barriers" block ends. Park ideas on a "Parking lot" |
| 4–6 people are not representative of 20 | State it as a limitation: findings are hypotheses, not facts |
| Security/compliance in a bank | Do not share code, customer data or internal confidential prompts. Use only approved tools **[open: check the bank's AI policy]** |

## 2. Learning-transfer goal and expected outcome

**Goal (draft).** Use Design Thinking (Understand + Empathize) to build a shared, honest picture of how our engineers use AI today, so that the next improvement is chosen from real needs and not from assumptions.

**Recurring part.** Monthly Innovation Hour. Month 1 = this workshop. Month 2 = one small experiment from the findings. Month 3 = review what changed.

**Expected outcome (after the workshop)**
1. An anonymous maturity map: where the 4–6 engineers see themselves in the 5 levels, per practice.
2. A clustered list of barriers (voted top 3).
3. A list of assumptions with "how we could check this".
4. 2–3 opportunity areas, written as "How might we…", **without** chosen solutions.
5. A 1-page summary for Innovation School and my management.

**Success check (realistic).** All participants say they saw something new; we have a top-3 barrier list; at least one participant volunteers for the next step. No big result is needed.

## 3. Preparation (step by step)

| When | Step |
|---|---|
| Now | Fix the 5-level model text on one slide. **[open: paste the 5 levels here]** |
| Now | Pick 4–6 engineers from **different projects**, mix of AI-enthusiastic and AI-sceptical, include one tester. Invite personally, explain it is voluntary |
| Now | Agree compliance rules (no confidential code/data) |
| −3 days | Send invitation: purpose, 90 min, "come as you are, no preparation needed", one optional question: *"Think of the last time AI helped you or let you down at work."* |
| −1 day | Prepare room or Miro board: maturity grid, sticky colours, parking lot, timer. Ask a colleague to take notes (so I can facilitate) |
| Day | Facilitator only facilitates: I do not defend, teach or recommend tools |

**Materials:** maturity grid (practices as rows, 5 levels as columns), sticky notes in 3 colours (green = what works, red = barrier, yellow = wish/idea), dot stickers (3 per person), timer, Parking lot sheet.

**Practices (rows of the grid):** Prompting · Reusable skills/instructions · MCP / tool connections · Planning & design · Testing · Code review · Orchestration / agents. **[open: adjust to your model's wording]**

## 4. Agenda (90 min + buffer)

| Min | Block | Method | Output |
|---|---|---|---|
| 0–10 | **Welcome & safety** | Purpose, rules ("no wrong answers, no assessment, Chatham House rule: stories stay, learnings leave"), check-in: *"One word for how you feel about AI at work."* | Safe start |
| 10–20 | **Warm-up stories** | Pairs, 3 min each: *"Tell me about the last time AI really helped / really failed you."* Then 1 highlight per pair | Real stories, not opinions |
| 20–40 | **Maturity mapping** | Each person silently places a dot per practice on the grid (own project colour not shown, or anonymous dots). Then look at the picture together | Maturity map |
| 40–45 | Break | | |
| 45–65 | **Barriers** | Silent writing (red stickers, 5 min) → read out → **cluster** on the wall (10 min) → name clusters | Barrier clusters |
| 65–75 | **Voting** | Dot voting: 3 dots each on the barriers that hurt most | Top 3 barriers |
| 75–85 | **Opportunities (no solutions)** | Turn the top 3 into "How might we…" with yellow stickers; Parking lot ideas are only read, not discussed | 2–3 HMW |
| 85–90 | **Close & check-out** | *"One thing I learned. One thing I would try."* Ask who joins the next Innovation Hour | Commitment, feedback |

If the group is fewer than 5 people or energy is high, take 15 extra min in "Barriers" (ask "why?" up to 3 times).

## 5. Facilitation techniques and exact questions

**Techniques:** silent writing before talking (stops loud voices), pairs before plenary, "5 Whys" for barriers, dot voting, parking lot, "I notice…" reflections, comfortable silence (count to 7 before filling it).

**Opening**
- "What is one word that describes AI in your daily work?"
- "Think of the last time AI helped you or let you down. What happened?"

**Current use (Empathize: past behaviour, not opinions)**
1. "Walk me through the last time you used AI for work. What was the task? What did you type? What happened next?"
2. "Which AI tool do you open first on a normal day? When do you *not* use it?"
3. "How do you plan a task or design a solution: do you involve AI? How?"
4. "How do you use AI for tests? For code review?"
5. "Do you reuse prompts, instructions or skills, or write each from scratch? Do you share them with others?"
6. "Have you connected AI to your tools or data (MCP, repositories, tickets)? What happened?"
7. "Has AI done a multi-step task for you with little help? What worked, what did not?"

**Maturity mapping**
- "Place a dot where you are *today* for each practice, not where you want to be."
- "What made you choose this dot? What would have to be true to be one step to the right?"
- Looking at the map: "What do you notice? What surprises you?"

**Barriers (ask for the story behind each)**
- "What stops you from using AI more, or better?"
- "Tell me about a time you stopped trusting an AI result."
- "What is unclear for you: rules, security, tools, time, skills?"
- "Who or what would help you if it existed tomorrow?" (store as wish, do not solve)
- Follow-up: "Why?" / "Can you give an example?" / "How often does that happen?"

**Closing**
- "What did you hear that you did not expect?"
- "What is one small thing you would like to try in the next 4 weeks?"
- "What should we do differently in the next session?"

**Facilitator rules:** do not give advice, do not judge a level, do not praise one tool, write what people say in their words, thank honest critical answers.

## 6. Documentation (one simple template)

Use one table during and after the session. Mark each line as **Fact (said by participants) / Observation / Assumption / Unknown**.

| ID | Type | Statement (participant words) | Practice | Evidence (who/how many, anonymous) | To check by |
|---|---|---|---|---|---|
| F1 | Fact | | | | |
| A1 | Assumption | | | | |

Also keep:
- **Maturity map photo** + table: practice × level, count of dots.
- **Barrier clusters:** name, # of stickers, # of votes.
- **Parking lot** list.
- Notes are anonymous: use P1–P6, no names. Notes by the note-taker, cleaned up within 24 hours.
- Rule: findings from 4–6 people are **hypotheses**, not team facts.

## 7. Final deliverable (1 page, for Innovation School and management)

Title: *AI Maturity Discovery — what we learned*

1. **Why** (2 lines): the problem we wanted to understand.
2. **How**: 90-min workshop, 4–6 engineers from different projects, Design Thinking (Understand + Empathize).
3. **What we found**: maturity map (small picture), top 3 barriers, 2–3 surprises.
4. **What we do not know yet** (assumptions + limits: small sample, self-assessed).
5. **How might we…** (2–3 questions, no solutions chosen).
6. **Next step**: Innovation Hour #2: one small experiment, owner, date.
7. **Ask to management** (optional, 1 line), e.g. time slot, clarity on AI rules.

Keep it to one page, no code, no names, simple English.

## 8. Reflection (fill in after the workshop)

Prompts, answer in 2–3 sentences each:
- **Facilitation:** What did I do that made people speak? Where did I talk too much or steer? What would I change?
- **Collaboration:** Who surprised me? What did people learn from each other across projects?
- **Innovation culture:** Did people feel safe to say "I don't use AI" or "it failed"? How do I know? What did I do to build that?
- **Method:** Which Innovation School method helped most (silent writing, clustering, voting, 5 Whys)? Which did not?
- **Assumption I had that was wrong:**

*Pre-written hypothesis to test (and possibly be wrong about):* engineers are held back less by tool skills and more by unclear rules, no time to learn, and no shared reusable practices.

## 9. Open questions to decide together

1. 90 min or the full ~2h to match the homework?
2. Exact wording of the 5 levels and the practice rows.
3. Who to invite (names, projects), and voluntary or nominated?
4. Online (Miro) or in a room?
5. What AI/compliance rules apply to what we may show in the session?
