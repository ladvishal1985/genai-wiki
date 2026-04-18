---
term: Cosine Similarity
shortForm: ~
category: retrieval
tags: [vectors, distance, search]
relatedTerms: [embedding, vector-database, semantic-search, dense-retrieval]
---
Cosine similarity measures the angle between two vectors, returning a score between -1 and 1 where 1 means identical direction, 0 means orthogonal (unrelated), and -1 means opposite. In embedding-based search, it is the standard distance metric because it is invariant to vector magnitude — two documents of different lengths but similar content will have high cosine similarity. For unit-normalised vectors, cosine similarity equals the dot product, which enables highly optimised BLAS-level computation. Most vector databases support cosine similarity as a first-class metric and normalise embeddings at index time to reduce it to a dot product query.
