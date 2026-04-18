---
term: ColBERTv2
shortForm: ~
category: retrieval
tags: [colbert, late-interaction, retrieval, efficiency]
relatedTerms: [late-interaction-colbert, bi-encoder, cross-encoder, reranking]
---
ColBERTv2 is an improved version of ColBERT that uses supervised contrastive learning with hard negatives and residual compression of per-token vectors. It achieves near cross-encoder accuracy at bi-encoder latency by compressing token embeddings to ~2 bytes each, enabling efficient storage of per-token representations at scale. ColBERTv2 is available in the RAGatouille library and is a strong choice when per-document token-level representations are feasible.
