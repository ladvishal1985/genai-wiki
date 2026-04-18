---
term: Cascade Inference
shortForm: ~
category: infra
tags: [inference, routing, cost, efficiency, model-routing]
relatedTerms: [model-routing, early-exit, speculative-decoding, llmops]
---
Cascade inference routes queries through a sequence of increasingly capable (and expensive) models, returning the first model's response if it is confident enough. Simple queries are handled cheaply by a small model; hard queries escalate to larger models. The cascade approach reduces average inference cost significantly while maintaining quality on difficult queries. It requires a confidence or difficulty estimator to decide when to escalate, which itself can be a lightweight classifier.
