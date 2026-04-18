---
term: Planning-Execution Separation
shortForm: ~
category: agent
tags: [agentic, planning, architecture, reliability]
relatedTerms: [agentic-loop, orchestrator, subagent, decomposed-prompting]
---
Planning-execution separation is an agentic architecture pattern where a dedicated "planner" LLM call produces a structured plan (task decomposition, tool sequence, success criteria) before any tool calls or actions are executed. A separate "executor" then carries out the plan step by step. Separating concerns improves reliability—the planner focuses on strategy without distraction from tool outputs; the executor focuses on correct tool use without replanning mid-flight.
