---
term: Reciprocal Rank Fusion
shortForm: RRF
category: retrieval
tags: [hybrid-search, fusion, ranking, retrieval]
relatedTerms: [hybrid-search, reranking, bm25, dense-embedding]
---
Reciprocal Rank Fusion (RRF) is a rank combination method that merges result lists from multiple retrieval systems by summing the reciprocal of each document's rank in each list: score = Σ 1/(k + rank_i). The constant k (typically 60) dampens the influence of very high-ranked items. RRF requires no score normalization and performs surprisingly well at combining dense and sparse retrieval results in hybrid search pipelines.
