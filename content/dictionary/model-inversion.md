---
term: Model Inversion
shortForm: ~
category: safety
tags: [security, privacy, attack, training-data]
relatedTerms: [membership-inference, data-poisoning, pii-filtering]
---
Model inversion is a privacy attack that attempts to reconstruct training data from a trained model—extracting specific examples, recovering PII, or inferring sensitive attributes from model outputs or gradients. For LLMs, model inversion can involve prompting the model to reproduce training data verbatim (memorization attacks) or extracting information about specific individuals. It highlights that LLMs are not perfect anonymizers of their training corpora—memorized data can be elicited.
