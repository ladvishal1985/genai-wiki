---
term: Context Ordering
shortForm: ~
category: core
tags: [context-window, prompting, attention, lost-in-middle]
relatedTerms: [context-engineering, sandwiching, lost-in-the-middle, relevance-ranked-injection]
---
Context ordering refers to the deliberate arrangement of information within the context window to leverage how LLMs attend differently to different positions. Research shows models exhibit primacy and recency bias—they recall content near the beginning and end of the context more reliably than content in the middle (the "lost in the middle" problem). Ordering strategies like sandwiching place the most critical context at the edges of the retrieved block.
