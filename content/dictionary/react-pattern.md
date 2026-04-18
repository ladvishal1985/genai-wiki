---
term: ReAct Pattern
shortForm: ReAct
category: agent
tags: [agent, reasoning, tool-use]
relatedTerms: [ai-agent, chain-of-thought, tool-use, orchestration]
---
ReAct (Reasoning + Acting) is an agent prompting pattern that interleaves explicit reasoning traces with tool actions, enabling the model to think step-by-step while taking actions and incorporating observations into subsequent reasoning. Each cycle produces a Thought (reasoning about what to do), an Action (a tool call), and an Observation (the tool result), repeating until a final answer is reached. Introduced in a 2022 paper, ReAct outperformed both reasoning-only (CoT) and action-only approaches on complex question answering benchmarks. It is now the default paradigm for most LLM agent frameworks, including LangChain agents and OpenAI's function-calling loop.
