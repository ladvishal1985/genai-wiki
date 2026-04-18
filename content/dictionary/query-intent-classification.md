---
term: Query Intent Classification
shortForm: ~
category: retrieval
tags: [query-understanding, classification, retrieval, routing]
relatedTerms: [query-rewriting, multi-query-retrieval, step-back-prompting, rag]
---
Query intent classification is a preprocessing step that routes incoming queries to the most appropriate retrieval strategy based on the inferred type of need (e.g., factual lookup, comparison, summary, navigational). A classifier (ML model or LLM) labels the query, and different pipeline branches handle different intent types. This prevents applying expensive retrieval strategies uniformly and allows optimization per query type.
