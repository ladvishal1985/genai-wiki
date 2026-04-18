---
term: Cross-Encoder
shortForm: ~
category: retrieval
tags: [reranking, retrieval, accuracy, architecture]
relatedTerms: [bi-encoder, reranking, retrieval]
---
A cross-encoder jointly encodes a query and a candidate document together through a transformer, producing a single relevance score. Because it applies full attention across both texts, it achieves higher accuracy than a bi-encoder but cannot pre-compute document representations. Cross-encoders are therefore used as rerankers on a small shortlist of candidates (top-k) retrieved by a faster bi-encoder first, trading latency for precision.
