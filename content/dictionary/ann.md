---
term: Approximate Nearest Neighbor Search
shortForm: ANN
category: retrieval
tags: [vector-search, index, efficiency, hnsw, ivf]
relatedTerms: [hnsw, ivf, product-quantization, vector-database]
---
Approximate Nearest Neighbor (ANN) search finds vectors in an index that are close to a query vector without exhaustively comparing every entry. ANN algorithms trade a small loss in recall for orders-of-magnitude speedups. Common ANN index structures include HNSW (graph-based) and IVF (inverted file / quantization-based). ANN search is the core operation in all vector databases enabling scalable embedding retrieval.
