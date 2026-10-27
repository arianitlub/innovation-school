# AI Maturity Innovation Hour — homework workshop (v0.2, 26.10.2026)

## Official frame (Day 4 deck, `official-materials/`)

- **Homework is mandatory** (no-show fee and no certificate otherwise): apply one method in a real work context. Steps: Learn → **Prepare** (scope, purpose, method, agenda) → **Apply: facilitate a ~2h workshop with colleagues** → **Reflect** (what works in my business line, what does not) → **Present** (show and discuss traction with the line manager, ~0.5h; probably the 05./06.11 meeting **[unconfirmed]**). Hand-in format **[ask Christine]**.
- **Ambassador criteria** to meet: real situation · method applied · **one concrete improvement** · **evidence artifact** · shown to at least one other person · own context · small and practical.
- **Goal ≠ Homework.** The Goal ([02-learning-transfer-goal.md](02-learning-transfer-goal.md)) is the monthly recurring Innovation Hour. This workshop is **Innovation Hour #1** and the evidence behind the Goal.
- Preparation uses the official **Meeting Preparation Guide**: Part 1 purpose and meta-process; Part 2 flow and coaching approach, methods and agenda, documentation, actions with owner and date. Run the AI feedback prompt (skill `innovation-meeting-prep`, 6.1.1) on the finished plan.

## Audience and levels

- **Audience:** software engineers who already code with AI and use skills and agents. Do **not** frame anything as "people don't know how to use AI". The question: *where is each person on the official RBI levels, and what stops the next step?*
- **Official levels (RBI blueprint, via `ai-playbooks/docs/ai`):** 1 Dictating (human gives step-by-step directions, review every action) · 2 Commanding (human writes execution plans, review after the order) · 3 Regulating (plans co-authored, workspace rules define *how*, review of implementation detail; spec-driven development starts) · 4 Orchestrating (agent proposes plans, review per phase/gate) · 5 Supervising (ticket in, review final evidence only). Not a score: it shows the next step. It depends on how work and shared context are organised, not on how long AI has been used. Levels can differ per module.
- **Grid rows (practices):** plan before prompt · shared workspace rules · reusable skills/commands · agents and sub-agents · review · testing · orchestration/phases.
- **Story question for L2→L3:** "Tell me about a correction you made to AI more than once. Did it become a shared rule?"
- **Barrier prompts:** shared rules missing, no time, low trust in agents, bank security/compliance, no orchestrator, unclear next step.
- **Known climb steps (from the guide):** 1→2 shared skills + short plan before invoking; 2→3 corrections become standing rules; 3→4 automate self-correction, codify phase sequence; 4→5 one evidence review at the end.
- **Design Thinking scope (decided 26.10):** **Empathize → Define → a short Ideate.** The levels already cover "Understand" (10–15 min). The new information is in the engineers' own barriers (Empathize). A short Ideate picks **one experiment** with owner and date, which gives the "one concrete improvement" the Ambassador criteria ask for. Cheapest candidate: every repeated AI correction becomes a shared rule.
- Participants are real volunteers, no personas. Target run: **30.10 or 02.11.**
- Note: `pdlc/guide.md` describes a `/start` routing skill that `anth-rbi-sdlc/guide.md` says does not exist (retracted). Verify before mentioning it.

Status: **DRAFT v0.2.** Not yet agreed with the Line Manager. Open points are marked **[open]**.

## 1. Why this idea (honest check)

**Strengths**
- Real, shared bottleneck for engineers on different projects: uneven use of skills and agents and no common picture of the level.
- We learn first (Empathize), then choose one small experiment instead of selling a solution.
- Small and doable: 4–6 people, one session.
- It is the first Innovation Hour, so it links to the recurring Goal.

**Risks and how we handle them**

| Risk | Handling |
|---|---|
| The homework asks for a ~2h workshop | Plan the full **2h** (agenda below) |
| The 5-level model looks like a test, people give "nice" answers | Self-placement is anonymous first; say clearly "this is not an assessment, no ranking, no names to management" |
| One-off activity, but the Goal must be **recurring** | Goal = monthly Innovation Hour. This workshop is session 1 |
| We jump to tools (Copilot, MCP, …) | No solutions until the "Empathize" block ends. Park ideas on a "Parking lot" |
| 4–6 people are not representative of 20 | State it as a limitation: findings are hypotheses, not facts |
| Security/compliance in a bank | Do not share code, customer data or internal confidential prompts. Use only approved tools **[open: check the bank's AI policy]** |

## 2. Expected outcome

**Purpose.** Use Design Thinking (Empathize, Define, a short Ideate) to build a shared, honest picture of where our engineers are on the RBI levels and what blocks the next step, and leave with one small experiment.

**Recurring part.** Monthly Innovation Hour. Month 1 = this workshop. Month 2 = run the experiment. Month 3 = review what changed.

**Expected outcome (after the workshop)**
1. An anonymous maturity map: where the 4–6 engineers see themselves on the 5 levels, per practice.
2. A clustered list of barriers (voted top 3).
3. A list of assumptions with "how we could check this".
4. 1–2 "How might we…" questions.
5. **One experiment** with owner, date and success signal.
6. A 1-page summary (evidence artifact) for Innovation School and my line manager.

**Success check (realistic).** All participants say they saw something new; we have a top-3 barrier list and one agreed experiment; at least one participant volunteers as buddy.

## 3. Preparation (step by step)

| When | Step |
|---|---|
| Now | Put the 5 official levels on one slide (text above) |
| Now | Fill the Meeting Preparation Guide Part 1 (purpose, meta-process) and Part 2 (flow, methods, documentation, actions); run the AI feedback prompt |
| Now | Pick 4–6 engineers from **different projects**, mix of those further ahead and those less far, include one tester. Invite personally, explain it is voluntary |
| Now | Agree compliance rules (no confidential code/data) |
| −3 days | Send invitation: purpose, 2h, "come as you are", one optional question: *"Think of a correction you made to AI more than once."* |
| −1 day | Prepare room or Miro board: maturity grid, sticky colours, parking lot, timer. Ask a colleague to take notes (so I can facilitate) |
| Day | Facilitator only facilitates: I do not defend, teach or recommend tools |

**Materials:** maturity grid (practices as rows, 5 levels as columns), sticky notes in 3 colours (green = what works, red = barrier, yellow = idea), dot stickers (3 per person), timer, Parking lot sheet.

## 4. Agenda (2h)

| Min | Block | Method | Output |
|---|---|---|---|
| 0–10 | **Check-in and safety** | Purpose, rules ("no assessment, no ranking, stories stay, learnings leave"), check-in: *"One word for how you work with AI today."* | Safe start |
| 10–25 | **Levels and self-placement (Understand)** | Present the 5 levels (5 min). Each person silently places an anonymous dot per practice on the grid. Look at the picture together | Maturity map |
| 25–55 | **Empathize: stories** | Pairs, 10 min each way: *"Tell me about a correction you made to AI more than once. Did it become a shared rule? Where did you stop trusting the result?"* Then silent writing of barriers (red stickers, 5 min) and read out | Real stories, raw barriers |
| 55–70 | **Cluster and vote** | Cluster on the wall, name clusters, 3 dots each | Top 3 barriers |
| 70–80 | Break | | |
| 80–90 | **Define** | Turn the top barrier into 1–2 "How might we…" | HMW |
| 90–110 | **Ideate (short)** | Crazy 8 on "what is the smallest step that moves us one level up?", cluster, vote; **pick one experiment**: owner, date, success signal | One experiment |
| 110–120 | **Check-out** | *"One thing I learned. One thing I will try."* Ask who joins as buddy in the next Innovation Hour | Commitment, feedback |

If the group is fewer than 5 people, extend the Empathize block (ask "why?" up to 3 times) and shorten Ideate.

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
2. **How**: 2h workshop, 4–6 engineers from different projects, Design Thinking (Empathize, Define, short Ideate).
3. **What we found**: maturity map (small picture), top 3 barriers, 2–3 surprises.
4. **What we do not know yet** (assumptions + limits: small sample, self-assessed).
5. **How might we…** (1–2 questions).
6. **Next step**: Innovation Hour #2: the chosen experiment, owner, date.
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
