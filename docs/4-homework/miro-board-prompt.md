# Miro board prompt — AI Maturity in Our Team

Paste the prompt below into another LLM. Source: `AI Maturity in Our Team — Facilitator Deck.pdf` (28.10.2026).

```
You are a Miro board designer and Design Thinking facilitation expert. Design a complete Miro board for a 60-minute working session called "AI Maturity in Our Team". Output an exact build plan I can follow or paste into Miro AI: frames, text, sticky notes, colours, timers and voting settings.

CONTEXT
- Organisation: Raiffeisen Bank International (RBI). Setting: Innovation School 2026 homework.
- Facilitator: Arianit, Team Lead. Participants: 6 senior engineers (backend, frontend, testing).
- Purpose: build a shared picture of where the wider team of about 20 engineers stands on AI maturity, surface the real barriers in people's own words, and leave with a problem statement we can act on.
- Design Thinking scope: Understand + Empathize + light Define. No solutions or tool decisions today.
- The seniors are observers of the wider team, not subjects. Not today: individual assessment, performance reviews, tool decisions.
- Everything produced is a HYPOTHESIS about the wider team, not a fact. Make this visible on the board.
- Tone: simple English, calm, professional, no jargon. Do not frame anything as "people don't know how to use AI".
- Safety: no code, customer data or confidential prompts on the board. Notes are anonymous.

THE FIVE AI MATURITY LEVELS (RBI blueprint, use word for word)
1 Dictating: short step-by-step instructions, one action at a time (one prompt, one action).
2 Commanding: human writes an execution plan, AI executes it as a batch order.
3 Regulating: human and agent co-author the plan, rules carry the "how".
4 Orchestrating: agents propose plans, humans review at phase boundaries.
5 Supervising: ticket in, deployable output out, humans review the evidence.
Focus of the session: the jump from Level 2 to Level 3.
Level 2 vs Level 3 table:
- Who writes the plan: human writes the full plan / AI drafts it from ticket + rules, human refines.
- Where the "how" lives: repeated in every prompt / standing rules (AGENTS.md or equivalent).
- Starting a ticket: human supplies sequence and limits / human gives intent plus the ticket-specific twist.
- Corrections: fixed only for this ticket / become permanent rules or skills.
Worked example ticket: "Add a warning when the price is more than 10 minutes old."
- Level 1: "Add a check." then "Now add the test." then "Don't break the old behaviour."
- Level 2: the human writes the full plan (layer, tests, boundaries), AI executes it.
- Level 3: AI proposes the plan using standing rules, the human refines and approves.
The one rule that may unlock Level 3 (an AGENTS.md line): "Before implementing any change, propose a short plan: what you will touch, what you will leave alone, which tests you will run. Then wait for approval before coding."

BOARD STRUCTURE (left to right, numbered frames, each with a timer and facilitator note)
0. Welcome and ground rules (5 min). Opening line: "You are here as the people closest to the work, not to be assessed. We need your read on where the wider team of about 20 actually stands, and what is really in the way." Show the "Not today" box. Check-in sticky: "One word for how the wider team uses AI today."
1. The frame (3 min): Understand, Empathize, light Define. Three outcomes: a shared picture, the real barriers, a problem statement.
2. The five levels (5 min): five columns with a short definition, the Level 2 vs Level 3 table, and the example ticket across three levels. Keep it quick, let people read.
3. Where does the wider team stand? (12 min): five empty columns (Levels 1-5). Each senior places one sticky for where the MEDIAN of the wider team sits (colour A) and one for the TOP QUARTILE (colour B). Prompt: "If you had to draw the distribution of the ~20 on this ladder, where is the thickest part?" Add a text box "What do you notice? The gap between the two is the story." Look for the cluster, not the outliers.
4. What is really in the way? (15 min): three swim lanes for barriers: "They don't know how" (knowledge), "They don't trust it" (confidence), "There's no time" (capacity). Sticky colours: red = barrier, green = what works, yellow = wish or idea (idea goes to Parking lot). Prompt: "Think of tickets you have seen from the wider team. Where do they get stuck, find it hard, slow or risky? In their words, not yours." Backup prompt: "What is the most common thing you find yourself correcting in other people's agent interactions?" Include a free cluster area and dot voting (3 dots each) to pick the top 3 barriers.
5. Hypotheses (5 min): cards in the format "We believe ___ because ___. We'll know we're right if ___."
   H1 Most of the wider team is at Level 2, writing the full plan themselves, because standing rules are incomplete or not loaded. We'll know if the seniors report agents rarely propose a plan unprompted.
   H2 Repeated corrections are rarely turned into shared rules or skills, so the same mistakes recur. We'll know if seniors cannot point to a rule added because of a correction.
   H3 Shared skills and prompts exist but are hard to discover, so people rewrite from scratch. We'll know if most people have never browsed the shared library.
   H4 empty card, filled live in the group's words.
6. Assumptions (5 min): five cards each with a "Validate" line.
   A1 The wider team is between Level 1 and Level 2 (validate: anonymous pulse-check with the ~20 next month).
   A2 These six seniors' read is representative (validate: cross-check with frontend and testing engineers not in the room).
   A3 The bottleneck is practice and rules, not tooling or access (validate: ask whether anyone is blocked by setup).
   A4 People share honestly in a safe, anonymised setting (validate: compare private vs. anonymous answers).
   A5 empty: "What are we quietly assuming about the wider team that, if wrong, would change everything?"
7. Light Define: How Might We (8 min): HMW1 How might we help the wider team move from writing every plan themselves to co-authoring plans with the agent, without losing quality control? HMW2 How might we make the repeated "how" live in rules the agent always loads, so people stop retyping it? HMW3 How might we turn every correction into a permanent rule or skill without adding process overhead? HMW4 empty, built from the top-voted barrier. Test: broad enough for many solutions, narrow enough to answer, and it contains no solution.
8. Synthesis (3 min): "The wider team's biggest lever is the Level 2 to Level 3 transition: moving the repeated 'how' out of conversations and into standing rules, so agents propose plans and humans refine them. We believe the barrier is practice and rules, not tooling. Before committing to any change we will validate the assumptions and hypotheses named today." Add the question "Does this feel true?" and a space for notes on hesitation.
9. Check-out and next steps (4 min): "One thing I learned. One thing I will try." Next 4-6 weeks: one-page summary, share anonymously with the team, choose 3-4 AI Buddies, start the monthly Innovation Hour cycle. Possible focus: add the "propose plan and wait" rule, build a project constitution, turn corrections into shared rules.
10. Parking lot (always visible): for tool ideas and solutions that come up early.

BOARD REQUIREMENTS
- Add a facilitator-only area, away from the main flow, with the "say this" lines and timings for each frame.
- Use consistent colours and icons per phase (Understand, Empathize, Define).
- Add a fixed banner: "Hypotheses about the wider team, not facts. No names, no ranking."
- Add a Miro timer to each frame, a voting session in frame 4, and a "Notes to document" box (anonymous: P1-P6).
- Add an evidence table template: ID | Fact / Observation / Assumption / Unknown | Statement (participant's words) | Practice | To check by.
- Make the board easy for a first-time Miro user, with a short "how to use" frame.

DELIVERABLE
1. Board layout map (frames in order with sizes and positions).
2. For each frame: exact text to paste, sticky colours, instructions, timer.
3. A facilitator run sheet (minute-by-minute).
4. A 5-minute pre-session checklist.
Do not invent facts beyond what is above. If something is missing, mark it [open].
```
