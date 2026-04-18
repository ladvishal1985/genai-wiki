---
term: Stale Embeddings
shortForm: ~
category: eval
tags: [embeddings, rag, failure-mode, freshness, indexing]
relatedTerms: [embedding-versioning, reindexing-strategy, incremental-indexing, context-conflict]
---
Stale embeddings occur when indexed document vectors represent outdated content—the underlying documents have changed but the embeddings have not been updated. Retrieval returns chunks that looked relevant at index time but now contain incorrect or superseded information. Stale embeddings are a common cause of context conflict and hallucination in production RAG systems. Mitigation requires incremental indexing with document change detection and explicit embedding versioning.
