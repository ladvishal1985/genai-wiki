---
term: AI Agent
shortForm: ~
category: agent
tags: [autonomy, tool-use, orchestration]
relatedTerms: [tool-use, memory, orchestration, react-pattern, multi-agent, task-decomposition]
---
An AI agent is a system in which a language model autonomously plans and executes multi-step tasks by deciding when and how to call external tools, access memory, and take actions in an environment — rather than simply responding to a single prompt. Agents operate in a sense-plan-act loop: perceiving state (tool outputs, observations), reasoning about what to do next, and selecting actions until a goal is achieved or a stopping condition is met. The LLM serves as the reasoning engine while tools extend its capabilities with real-world actions like web search, code execution, database queries, and API calls. Reliability of agents is a major open challenge, as errors compound across multiple steps and models can enter unproductive loops.
