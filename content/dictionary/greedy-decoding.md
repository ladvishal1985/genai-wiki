---
term: Greedy Decoding
shortForm: ~
category: model
tags: [decoding, inference, deterministic, sampling]
relatedTerms: [top-k-sampling, beam-search, speculative-decoding, temperature]
---
Greedy decoding selects the single highest-probability token at each generation step. It is deterministic, fast, and requires no sampling hyperparameters. However, it often produces repetitive or suboptimal outputs because locally optimal token choices can lead to globally poor sequences—missing a word that unlocks better continuations. Greedy decoding is used when exact reproducibility or speed is prioritized, and is a baseline against which sampling strategies are compared.
