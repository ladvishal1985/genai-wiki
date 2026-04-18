---
term: Prompt Chaining
shortForm: ~
category: core
tags: [prompting, pipeline, orchestration, agentic]
relatedTerms: [meta-prompting, decomposed-prompting, agentic-loop, planning-execution-separation]
---
Prompt chaining is the technique of breaking a complex task into a sequence of simpler LLM calls, where the output of each call becomes the input for the next. Each prompt in the chain handles one well-defined subtask. Chaining improves reliability by allowing each step to focus, enables intermediate validation, and makes debugging easier. It is the simplest form of agentic orchestration and the foundation of most LangChain and LlamaIndex workflows.
