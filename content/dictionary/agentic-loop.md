---
term: Agentic Loop
shortForm: ~
category: agent
tags: [agent, loop, tool-use, orchestration]
relatedTerms: [orchestrator, subagent, tool-use, planning-execution-separation, self-reflection]
---
The agentic loop (also called the agent loop or ReAct loop) is the core execution cycle of an LLM agent: observe the current state, reason about what to do next, take an action (call a tool or produce output), observe the result, and repeat until the task is complete or a stopping condition is met. The loop continues until the agent decides it has completed the task, reaches a step limit, or encounters an error requiring human intervention.
