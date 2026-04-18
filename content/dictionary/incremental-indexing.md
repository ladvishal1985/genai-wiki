---
term: Incremental Indexing
shortForm: ~
category: infra
tags: [indexing, streaming, etl, operations, real-time]
relatedTerms: [reindexing-strategy, embedding-versioning, etl-for-rag, deduplication]
---
Incremental indexing is the practice of adding, updating, or removing only changed documents in a vector index rather than rebuilding it from scratch. It requires change detection (e.g., document checksums, change data capture from a database), and the vector store must support upserts and deletes. Incremental indexing enables near-real-time knowledge freshness in RAG systems while keeping computational costs manageable.
