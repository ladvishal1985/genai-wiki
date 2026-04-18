---
term: Bi-Encoder
shortForm: ~
category: retrieval
tags: [embeddings, retrieval, semantic-search, architecture]
relatedTerms: [cross-encoder, dense-embedding, sentence-transformers, semantic-search]
---
A bi-encoder is an architecture that independently encodes a query and a document into separate dense vectors using the same (or similar) encoder model. Similarity is computed as the dot product or cosine distance between the two vectors. Because documents can be pre-encoded offline, bi-encoders are highly efficient for large-scale retrieval. They are the primary architecture behind embedding-based semantic search. Their main trade-off versus cross-encoders is lower accuracy since the query and document are never jointly attended.
