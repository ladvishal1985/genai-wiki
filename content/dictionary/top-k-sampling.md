---
term: Top-K Sampling
shortForm: ~
category: model
tags: [sampling, decoding, generation, temperature]
relatedTerms: [greedy-decoding, beam-search, temperature, top-p]
---
Top-K sampling restricts next-token selection to the K highest-probability tokens, sampling from their renormalized distribution. It prevents the model from sampling very low-probability (incoherent) tokens while maintaining diversity. Common values are K=40–100. Combined with temperature scaling, top-K is one of the most widely used decoding strategies. Its limitation is that K is a fixed count regardless of the probability distribution's shape, leading to too-much or too-little diversity depending on the distribution.
