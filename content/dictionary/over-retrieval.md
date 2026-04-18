---
term: Over-Retrieval
shortForm: ~
category: eval
tags: [rag, failure-mode, context-window, retrieval]
relatedTerms: [under-retrieval, prompt-budget-overflow, context-precision, retrieval-without-reading]
---
Over-retrieval occurs when too many chunks are retrieved—more than the LLM can effectively use in its context window, or more than are relevant. It wastes token budget, dilutes relevant context with noise, and can trigger the "lost in the middle" problem where the model ignores information in the middle of a long context. Mitigations include reranking to cut the candidate set, context compression, and tuning top-k to the minimum sufficient for the task.
