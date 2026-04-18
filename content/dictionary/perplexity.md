---
term: Perplexity
shortForm: PPL
category: eval
tags: [evaluation, metric, language-modeling, intrinsic]
relatedTerms: [calibration, scaling-laws, pretraining, hallucination-rate]
---
Perplexity measures how well a language model predicts a held-out text corpus—it is the exponentiated average negative log-likelihood per token. Lower perplexity indicates the model assigns higher probability to the actual tokens, meaning it has better "understanding" of the language distribution. Perplexity is an intrinsic metric (doesn't measure downstream task performance) but correlates with downstream quality and is used to compare pretraining runs and as a cheap proxy for model quality on text generation.
