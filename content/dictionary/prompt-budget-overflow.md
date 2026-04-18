---
term: Prompt Budget Overflow
shortForm: ~
category: infra
tags: [context-window, rag, token-budgeting, failure-mode]
relatedTerms: [token-budgeting, context-engineering, context-compression, over-retrieval]
---
Prompt budget overflow occurs when the combined tokens from system prompt, retrieved context, conversation history, and query exceed the model's context window limit, causing truncation. Truncated content—often recent conversation turns or key context chunks—leads to incorrect or incomplete responses. Mitigations include context compression, token budgeting strategies, conversation summarization, and dynamic top-k adjustment based on remaining token budget.
