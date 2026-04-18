---
term: Orchestrator
shortForm: ~
category: agent
tags: [agent, orchestration, multi-agent, planning]
relatedTerms: [subagent, agentic-loop, planning-execution-separation, multi-agent]
---
An orchestrator is the high-level controller in a multi-agent system that breaks down a task, assigns sub-tasks to specialized subagents or tools, coordinates their execution, and synthesizes their results. The orchestrator does planning and delegation; subagents do execution. Orchestrators are typically implemented as a more capable (or system-prompted) LLM that maintains the task plan and monitors progress, while subagents handle narrower, well-defined operations.
