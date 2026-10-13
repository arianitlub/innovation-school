# Innovation School: AI Prompt Library

Source: RBI Innovation School 2026 booklet "Innovation School: AI Prompt Library — A Practical Guide for Design Thinking with AI", pasted by Arianit on 13.10.2026. This file keeps the booklet's introduction, principles and frameworks. The 31 prompts are stored word for word as skills in `.claude/skills/` (see the index at the end).

The booklet's "Quick Tool Comparison" table was collapsed in the pasted copy, so its content is not recorded here.

## How to use this booklet (original text)

Welcome to your AI assistant toolkit! This booklet will help you leverage AI throughout your Innovation School journey for ANY innovation challenge in ANY industry.

⚠️ Important Principles:

- AI is your research assistant, not your replacement for human insight
- ALWAYS conduct real interviews with real people - No AI simulations
- Verify important information - AI can help gather data, but you must check facts
- Use AI to save time on research, not to skip thinking
- The prompts in this guide are templates - Adapt them to your specific challenge
- Look for cross-industry insights - Best practices often come from outside our industry

## 🚨 CRITICAL WARNING: AI Hallucination (original text)

AI tools can confidently present false information as fact. This is called "hallucination."

⚠️ What this means for you:

- AI may cite non-existent studies, companies, or statistics
- AI may provide outdated regulatory information
- AI may describe features of products that don't exist
- AI may invent plausible-sounding but incorrect data

✅ How to protect yourself:

- ALWAYS verify critical facts - Check company websites, official sources, regulatory bodies
- Cross-reference important statistics - Look up the actual study or report
- Be skeptical of specific numbers - Verify financial data, market sizes, conversion rates
- Check dates - Ensure information is current (AI training data has cutoff dates)
- Use phrases like: "Please indicate which facts need verification" in your prompts
- Never make business decisions based solely on AI output

Rule of Thumb: If it matters to your decision, verify it independently.

## Tools (original text)

- Claude (Anthropic) - Best for deep analysis, market research, strategic thinking
- MS Copilot - Best for Office integration, data analysis, company documents access
- ChatGPT (Internal) - Best for brainstorming, creative content, and general tasks

Don't have access to all tools? No problem! All prompts in this booklet work with any tool.

## Prompt engineering frameworks (original text)

**CO-STAR Framework** — for analytical prompts

- C = Context: Background info
- O = Objective: What you want AI to do
- S = Style: Writing style/format
- T = Tone: Response attitude
- A = Audience: Who will use this
- R = Response Format: Structure needed

**RODES Framework** — for creative & ideation prompts

- R = Role: What role AI should play
- O = Objective: What to achieve
- D = Details: Constraints & requirements
- E = Examples: Reference points
- S = Sense Check: Validation criteria

## Closing (original text)

🎓 Congratulations! You now have a complete AI prompt library to support your entire Innovation School journey.

Remember: AI is your research assistant and thinking partner, but the creativity, insights, and decisions come from you and your team.

Always validate AI outputs with real people and real data.

## Our notes on using it for our challenge

- The prompts are generic. Several examples come from retail-banking apps or account opening (for example the SCAMPER example in 3.2.2 and the persona fields in 2.3.2). Replace them with our mass-affluent advice context instead of keeping them.
- Stage 1.3 (internal data) and 5.1 (business case) expect internal figures we do not have yet. Any number the AI produces there is an assumption to label and verify, not a fact.
- 2.2.1 and 2.2.2 prepare us for interviews. They do not replace them. The synthesis prompts (2.3.x) should only be run on real interview notes.
- 2.3.4 (How Might We) is meant for the end of a synthesis conversation, after patterns, personas and the journey map.
- 4.3.2 asks for stock images but also forbids external images. Use inline SVG/CSS illustrations so the file stays self-contained.
- 6.1.1 deliberately stops the AI from designing the meeting. Keep that limit.

## Index: where each prompt lives

| Stage | Skill | Prompts |
|---|---|---|
| 1 Understand | `.claude/skills/innovation-understand/` | 1.1.1 Market & industry context · 1.1.2 Competitive landscape · 1.1.3 Technology trends · 1.2.1 Terminology · 1.2.2 Stakeholder mapping · 1.2.3 Scope definition · 1.3.1 Data sources · 1.3.2 Data analysis methods · 1.3.3 Data visualisation & storytelling |
| 2 Empathize | `.claude/skills/innovation-empathize/` | 2.1.1 Hypotheses · 2.1.2 Interview guide · 2.1.3 Participant recruitment · 2.2.1 Note-taking template · 2.2.2 Facilitation tips · 2.3.1 Interview pattern analysis · 2.3.2 Personas · 2.3.3 Journey map · 2.3.4 How Might We |
| 3 Ideate | `.claude/skills/innovation-ideate/` | 3.1.1 Workshop design · 3.2.1 Solution ideation · 3.2.2 SCAMPER · 3.3.1 Idea evaluation |
| 4 Prototype & Test | `.claude/skills/innovation-prototype-test/` | 4.1.1 Testing strategy · 4.2.1 Storyboard & user flow · 4.3.1 Mobile app prototype · 4.3.2 Landing page prototype · 4.3.3 Test results analysis |
| 5 Business Case & Pitch | `.claude/skills/innovation-business-case-pitch/` | 5.1.1 Business case · 5.2.1 Pitch deck · 5.3.1 Pitch review |
| 6 Other | `.claude/skills/innovation-meeting-prep/` | 6.1.1 Meeting preparation canvas feedback |
