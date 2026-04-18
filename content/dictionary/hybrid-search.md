---
term: Hybrid Search
shortForm: ~
category: retrieval
tags: [search, retrieval, rag]
relatedTerms: [bm25, dense-retrieval, sparse-retrieval, semantic-search, reranking]
---
Hybrid search combines dense (embedding-based) and sparse (keyword-based) retrieval to leverage the strengths of both approaches. Dense retrieval excels at semantic matching while sparse retrieval handles exact-term and rare-word matching; their combination consistently outperforms either alone on standard information retrieval benchmarks. Results from both systems are typically merged using Reciprocal Rank Fusion (RRF) or a weighted linear combination before optional reranking. In production RAG systems, hybrid search is considered the default best practice over pure semantic search.
