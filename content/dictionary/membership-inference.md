---
term: Membership Inference Attack
shortForm: MIA
category: safety
tags: [security, privacy, attack, training-data]
relatedTerms: [model-inversion, data-poisoning, pii-filtering]
---
A membership inference attack determines whether a specific data point was included in a model's training set. For LLMs, this can reveal whether a particular document, email, or personal record was used in pretraining or fine-tuning—a significant privacy concern. Membership inference exploits the tendency of models to have lower loss (higher confidence) on training examples than on unseen data. Differential privacy training is the primary mitigation but comes at a quality cost.
