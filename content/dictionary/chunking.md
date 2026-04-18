---
term: Chunking
shortForm: ~
category: retrieval
tags: [indexing, preprocessing, rag]
relatedTerms: [rag, vector-database, embedding, context-window]
---
Chunking is the process of splitting source documents into smaller segments before embedding and indexing them for retrieval. The goal is to produce units that are semantically coherent, fit within embedding model limits, and are small enough to be relevant when retrieved but large enough to contain meaningful context. Common strategies include fixed-size chunking with overlap (e.g., 512 tokens, 64-token overlap), recursive character splitting on paragraph or sentence boundaries, and semantic chunking that groups sentences by embedding similarity. Poor chunking — segments too large, too small, or splitting mid-sentence — is one of the most common causes of poor RAG performance.
