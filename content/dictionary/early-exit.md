---
term: Early Exit
shortForm: ~
category: infra
tags: [inference, efficiency, adaptive-compute, latency]
relatedTerms: [cascade-inference, speculative-decoding, model-routing]
---
Early exit is an inference optimization where a transformer model terminates processing at an intermediate layer when a confidence criterion is met, skipping remaining layers. This enables a single model to dynamically allocate compute per input: easy inputs exit early (fast), hard inputs use all layers (accurate). Layer-wise classifiers or entropy thresholds determine when to exit. Early exit reduces average latency without model switching, at the cost of added engineering complexity.
