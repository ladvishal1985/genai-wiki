---
term: Under-Retrieval
shortForm: ~
category: eval
tags: [rag, failure-mode, recall, retrieval]
relatedTerms: [over-retrieval, context-recall, retrieval-mismatch, query-vocabulary-gap]
---
Under-retrieval occurs when retrieval returns too few relevant chunks—either because top-k is set too low, the query vocabulary doesn't match the corpus, or the relevant content is simply not in the index. The LLM lacks sufficient grounding and is forced to rely on parametric memory, increasing hallucination risk. Mitigations include higher top-k, query expansion (HyDE, multi-query), hybrid search, and ensuring complete corpus coverage during indexing.
