---
term: Token Budgeting
shortForm: ~
category: core
tags: [context-window, cost, token-count, planning]
relatedTerms: [context-engineering, context-compression, prompt-budget-overflow, context-packing]
---
Token budgeting is the practice of explicitly allocating the available context window tokens across different content sources—system prompt, retrieved context, conversation history, and response reserve—before constructing the final prompt. By setting hard budgets per slot and dynamically adjusting (e.g., compressing history when retrieved context is large), systems avoid overflow and predictable degradation. Token budgeting is essential in long-context, multi-turn, and agentic applications.
