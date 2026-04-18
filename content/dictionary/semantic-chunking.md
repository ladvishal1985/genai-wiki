---
term: Semantic Chunking
shortForm: ~
category: retrieval
tags: [chunking, rag, segmentation, embeddings]
relatedTerms: [chunking, parent-child-chunking, chunk-overlap, contextual-retrieval]
---
Semantic chunking splits documents at natural semantic boundaries—sentence clusters with high embedding similarity—rather than at fixed token counts. The algorithm embeds consecutive sentences and splits wherever cosine similarity drops significantly, indicating a topic shift. Semantic chunks are more coherent than fixed-size chunks and tend to improve retrieval precision, but are more expensive to compute and can produce highly variable chunk sizes.
