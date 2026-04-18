---
term: Sliding Window Context
shortForm: ~
category: core
tags: [context-window, memory, conversation, truncation]
relatedTerms: [context-engineering, conversation-summarisation, token-budgeting, kv-cache]
---
Sliding window context is a strategy for managing long conversation histories by keeping only the most recent N tokens (the "window") in the active context, dropping older turns. It is simple to implement but discards early context permanently, which can cause the model to lose track of initial instructions or facts. Often combined with conversation summarization, where the dropped turns are first summarized and the summary is prepended to the retained window.
