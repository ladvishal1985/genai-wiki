---
term: Context Packing
shortForm: ~
category: core
tags: [context-window, efficiency, token-budgeting, batching]
relatedTerms: [context-engineering, token-budgeting, context-compression, continuous-batching]
---
Context packing is the technique of fitting as much useful information as possible into an LLM's context window without wasting tokens on padding, redundancy, or low-value content. It involves deduplicating retrieved chunks, compressing verbose passages, removing boilerplate from system prompts, and batching multiple short inputs in one pass. Context packing is critical at scale to reduce per-query cost and maximize the information density available to the model.
