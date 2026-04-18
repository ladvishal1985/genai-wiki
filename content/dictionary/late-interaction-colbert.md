---
term: Late Interaction (ColBERT)
shortForm: ~
category: retrieval
tags: [colbert, retrieval, token-level, efficiency]
relatedTerms: [colbertv2, bi-encoder, cross-encoder, dense-embedding]
---
Late interaction is a retrieval paradigm introduced by ColBERT where query and document are encoded independently into per-token vectors, but similarity is computed via a MaxSim operator (each query token matches against the best document token). This preserves much of the accuracy benefit of full cross-attention while still allowing document vectors to be pre-computed and indexed. ColBERT-style late interaction sits between bi-encoders (fast, less accurate) and cross-encoders (slow, most accurate).
