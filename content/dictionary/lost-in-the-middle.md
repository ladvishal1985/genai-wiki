---
term: Lost in the Middle
shortForm: ~
category: core
tags: [context-window, attention, failure-mode, position-bias]
relatedTerms: [context-ordering, sandwiching, over-retrieval, retrieval-without-reading]
---
"Lost in the middle" describes the empirical finding that LLMs have significantly lower recall for information placed in the middle of a long context window compared to information at the beginning or end. Even with very long context windows, models exhibit a U-shaped attention pattern by position. This means RAG pipelines must carefully order retrieved chunks and avoid relying on critical information that will land in the middle of a packed context.
