---
term: Relevance-Ranked Injection
shortForm: ~
category: core
tags: [rag, context-ordering, reranking, prompting]
relatedTerms: [context-ordering, context-engineering, reranking, sandwiching]
---
Relevance-ranked injection is the practice of ordering retrieved context chunks by their relevance score before inserting them into the prompt, placing the most relevant chunks first (or using sandwiching to place them at both ends). The idea is that LLMs should encounter the most helpful information in the position they attend to most strongly. This is distinct from injection order by document date or source; it is a retrieval-signal-driven ordering strategy.
