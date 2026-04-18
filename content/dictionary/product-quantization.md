---
term: Product Quantization
shortForm: PQ
category: retrieval
tags: [vector-compression, ann, ivf, faiss]
relatedTerms: [ivf, ann, hnsw, dimensionality-reduction]
---
Product Quantization (PQ) is a vector compression technique that splits a high-dimensional vector into M sub-vectors and quantizes each sub-vector independently to one of K centroids. The full vector is then represented as M centroid indices, drastically reducing storage. PQ enables approximate inner product computation directly on compressed codes. IVF-PQ is the combination used to build billion-scale ANN indexes at acceptable memory cost.
