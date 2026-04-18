---
term: Conversation Summarisation
shortForm: ~
category: core
tags: [memory, conversation, context-compression, long-term-memory]
relatedTerms: [sliding-window-context, context-compression, short-term-memory, memory-compression]
---
Conversation summarisation compresses older turns of a dialogue into a concise summary that is prepended to the active context window, allowing the model to maintain awareness of earlier exchanges without retaining every token. Summaries can be generated periodically (every N turns) or triggered when the context approaches its limit. This technique enables indefinitely long conversations without full context re-loading, at the cost of some information loss in compression.
