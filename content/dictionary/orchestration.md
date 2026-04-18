---
term: Orchestration
shortForm: ~
category: agent
tags: [agent, workflow, multi-agent]
relatedTerms: [ai-agent, multi-agent, tool-use, task-decomposition]
---
Orchestration in AI systems refers to coordinating multiple LLM calls, tool invocations, and agent interactions to accomplish a complex goal, typically managed by a dedicated orchestrator component. The orchestrator maintains state, routes subtasks to appropriate agents or tools, handles errors and retries, and assembles final outputs from intermediate results. Frameworks like LangGraph, LlamaIndex, and CrewAI provide orchestration primitives for defining agent workflows as directed graphs or sequential pipelines. Good orchestration design is critical for reliability: it must handle failures gracefully, avoid infinite loops, enforce timeouts, and maintain a clear audit trail of actions taken.
