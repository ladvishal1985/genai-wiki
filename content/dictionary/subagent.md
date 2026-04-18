---
term: Subagent
shortForm: ~
category: agent
tags: [agent, multi-agent, orchestration, specialization]
relatedTerms: [orchestrator, agentic-loop, tool-use, multi-agent]
---
A subagent is a specialized agent that receives delegated tasks from an orchestrator, executes them (often using specific tools), and returns results. Subagents handle focused operations: one might specialize in web search, another in code execution, another in database queries. Subagents can themselves be LLMs or simpler function-calling wrappers. The subagent pattern enables parallelism and specialization in multi-agent systems, improving both efficiency and modularity.
