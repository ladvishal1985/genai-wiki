---
term: Reindexing Strategy
shortForm: ~
category: infra
tags: [indexing, maintenance, embedding-versioning, operations]
relatedTerms: [embedding-versioning, incremental-indexing, etl-for-rag, stale-embeddings]
---
A reindexing strategy defines how and when to rebuild a vector index after source data changes or the embedding model is upgraded. Common approaches: full reindex (simple but costly), incremental reindex (only changed documents), and dual-index shadow deployment (build the new index alongside the old, cut over once validated). Reindexing is operationally expensive and requires careful coordination with embedding versioning and serving infrastructure.
