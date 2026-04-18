---
term: Late Fusion
shortForm: ~
category: retrieval
tags: [hybrid-search, fusion, ranking, retrieval]
relatedTerms: [early-fusion, hybrid-search, reciprocal-rank-fusion, reranking]
---
Late fusion combines results from independently executed retrieval systems (e.g., dense + sparse) after each has produced its own ranked list. Score normalization (e.g., min-max) or rank-based methods (e.g., RRF) are used to merge lists. Late fusion is easy to implement and enables mixing heterogeneous retrieval signals, but the separate ranking signals may be difficult to compare on a common scale.
