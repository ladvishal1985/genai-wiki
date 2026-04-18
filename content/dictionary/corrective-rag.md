---
term: Corrective RAG
shortForm: CRAG
category: retrieval
tags: [rag, self-correction, retrieval, evaluation]
relatedTerms: [self-rag, iterative-retrieval, advanced-rag, hallucination-detection]
---
Corrective RAG (CRAG) adds a retrieval evaluation step that assesses whether retrieved documents are relevant before using them. If retrieved documents score low on relevance, the system triggers a web search or alternative retrieval strategy to find better sources. CRAG uses a lightweight retrieval evaluator to decide: use as-is, correct (fall back to web search), or ambiguous (combine both). This makes the pipeline more robust to retrieval failures.
