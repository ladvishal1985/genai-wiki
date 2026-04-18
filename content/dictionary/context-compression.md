---
term: Context Compression
shortForm: ~
category: core
tags: [context-window, summarization, token-budgeting, rag]
relatedTerms: [context-engineering, token-budgeting, context-packing, conversation-summarisation]
---
Context compression reduces the number of tokens in retrieved or conversational context while preserving the information relevant to the current query. Techniques include extractive compression (removing irrelevant sentences), abstractive compression (LLM summarization), and selective filtering (only keep sentences containing key entities). LLMLingua and similar tools apply token-level pruning. Compression trades some information loss for the ability to fit more history or retrieve more chunks within the token budget.
