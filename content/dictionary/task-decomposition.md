---
term: Task Decomposition
shortForm: ~
category: agent
tags: [agent, planning, subtasks]
relatedTerms: [ai-agent, orchestration, chain-of-thought, react-pattern]
---
Task decomposition is the process of breaking a complex, high-level goal into a sequence of smaller, more manageable subtasks that can be executed independently or in parallel. It is a core planning capability in agentic systems — without decomposition, a single LLM call would need to handle all context, reasoning, and execution in one shot, which degrades quality and reliability on complex tasks. Methods include explicit decomposition via prompting ("break this task into steps"), tool-guided planning where the model generates a plan then executes it, and recursive decomposition where subtasks are themselves further broken down. Accurate decomposition is one of the hardest challenges in building reliable agents, as errors in the initial plan propagate to all downstream steps.
