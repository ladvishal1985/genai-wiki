---
term: Semantic Search
shortForm: ~
category: retrieval
tags: [search, embeddings, nlp]
relatedTerms: [embedding, vector-database, dense-retrieval, hybrid-search, bm25]
---
Semantic search retrieves documents based on the meaning of a query rather than exact keyword overlap, by comparing embedding vectors in a shared semantic space. A query like "how do I cancel my subscription" can match documents containing "terminate your account" even though no words overlap, because both map to nearby vectors. It contrasts with lexical search (BM25, TF-IDF) which requires surface-form matching. In practice, semantic search excels at paraphrase matching and conceptual queries but can miss specific technical terms; hybrid search combines both approaches for robust coverage.
