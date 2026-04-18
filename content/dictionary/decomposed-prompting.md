---
term: Decomposed Prompting
shortForm: DECOMP
category: core
tags: [prompting, reasoning, task-decomposition, few-shot]
relatedTerms: [chain-of-thought, tree-of-thoughts, planning-execution-separation, step-back-prompting]
---
Decomposed Prompting (DECOMP) is a framework where complex tasks are broken into simpler sub-tasks, each handled by a dedicated few-shot prompted LLM or tool. A controller LLM orchestrates sub-task assignment based on a decomposition prompt. Unlike end-to-end chain-of-thought, DECOMP allows each sub-task to be solved with the most appropriate specialized prompt or model, improving accuracy on compositional tasks like multi-hop QA and semantic parsing.
