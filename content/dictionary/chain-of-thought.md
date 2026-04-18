---
term: Chain-of-Thought
shortForm: CoT
category: model
tags: [prompting, reasoning, step-by-step]
relatedTerms: [few-shot, zero-shot, prompt, react-pattern, llm]
---
Chain-of-Thought (CoT) prompting encourages a model to articulate intermediate reasoning steps before giving a final answer, significantly improving performance on arithmetic, logical, and multi-step tasks. The technique can be triggered with few-shot examples that demonstrate step-by-step reasoning, or zero-shot with phrases like "think step by step" or "let's reason through this." CoT works because generating reasoning tokens provides the model additional compute budget to "work through" a problem before committing to an answer. Extensions include self-consistency CoT (sample multiple reasoning chains and majority-vote), Tree-of-Thoughts (explore branching reasoning paths), and ReAct (interleave reasoning with tool actions).
