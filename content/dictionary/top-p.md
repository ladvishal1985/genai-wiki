---
term: Top-P Sampling
shortForm: top-p
category: core
tags: [sampling, decoding, generation]
relatedTerms: [temperature, llm, prompt]
---
Top-P sampling (also called nucleus sampling) restricts token selection to the smallest set of candidates whose cumulative probability mass reaches the threshold P. At each generation step, tokens are ranked by probability and only those in the top-P nucleus are eligible to be sampled from, with the remaining tokens discarded. This adapts dynamically to the model's confidence: when the model is certain, the nucleus may contain only a few tokens; when uncertain, it widens. Unlike top-K which fixes the number of candidates, top-P scales with distribution shape, generally producing more coherent outputs. Values of 0.9–0.95 are common defaults.
