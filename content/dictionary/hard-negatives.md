---
term: Hard Negatives
shortForm: ~
category: training
tags: [contrastive-learning, fine-tuning, embeddings, retrieval]
relatedTerms: [bi-encoder, colbertv2, sft, contrastive-learning]
---
Hard negatives are training examples that are superficially similar to a positive example but are not correct matches. In contrastive embedding training, using hard negatives (rather than random negatives) forces the model to learn fine-grained distinctions. Mining hard negatives—e.g., top-k results from BM25 or a weaker model that are not the true answer—is a critical step in training high-quality retrieval models and significantly improves downstream retrieval precision.
