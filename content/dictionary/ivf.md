---
term: Inverted File Index
shortForm: IVF
category: retrieval
tags: [vector-index, ann, clustering, faiss]
relatedTerms: [ann, hnsw, product-quantization, vector-database]
---
Inverted File (IVF) index is an ANN structure that partitions the embedding space into clusters (via k-means) and assigns each vector to its nearest cluster centroid. At query time, only the nearest N clusters (nprobe) are searched exhaustively. IVF is memory-efficient and scales well to billions of vectors. Combined with Product Quantization (IVF-PQ), it can compress stored vectors significantly while maintaining reasonable recall.
