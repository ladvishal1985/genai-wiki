---
term: Hierarchical Navigable Small World
shortForm: HNSW
category: retrieval
tags: [vector-index, ann, graph, efficiency]
relatedTerms: [ann, ivf, vector-database, product-quantization]
---
Hierarchical Navigable Small World (HNSW) is a graph-based ANN index structure where vectors are organized into multiple layers of proximity graphs. Queries start at the top (sparse) layer and greedily navigate down to finer layers, efficiently zeroing in on nearest neighbors. HNSW provides excellent query speed and recall, supports incremental inserts, but has high memory overhead. It is the default index in most vector databases (Pinecone, Weaviate, Qdrant).
