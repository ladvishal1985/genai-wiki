---
term: Embedding Versioning
shortForm: ~
category: infra
tags: [embeddings, indexing, maintenance, reindexing]
relatedTerms: [reindexing-strategy, embedding, etl-for-rag, stale-embeddings]
---
Embedding versioning is the practice of tracking which embedding model version was used to encode each document in the vector store. When an embedding model is upgraded (new version, different dimensions, changed training), previously indexed vectors are no longer comparable with newly encoded queries. Managing versioning explicitly allows rolling reindexing strategies—running old and new indexes in parallel during migration—without serving quality degradation.
