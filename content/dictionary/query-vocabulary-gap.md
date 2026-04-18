---
term: Query Vocabulary Gap
shortForm: ~
category: eval
tags: [rag, failure-mode, retrieval, lexical-mismatch]
relatedTerms: [retrieval-mismatch, under-retrieval, bm25, query-rewriting, hyde]
---
Query vocabulary gap is the mismatch between the words a user uses in a query and the words used in the corpus documents to describe the same concept. BM25 and sparse retrieval are especially susceptible; even dense retrieval suffers if the embedding model hasn't seen the domain vocabulary. Mitigations include query expansion (HyDE, LLM-based rewriting), hybrid search, and fine-tuning the embedding model on domain-specific vocabulary.
