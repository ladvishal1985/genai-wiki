---
term: Inference-Time Compute Scaling
shortForm: ~
category: model
tags: [reasoning, inference, scaling, test-time-compute, o1]
relatedTerms: [test-time-scaling, reasoning-tokens, chain-of-thought, self-consistency]
---
Inference-time compute scaling (also called test-time compute scaling) is the paradigm of using additional compute at inference time—rather than just at training time—to improve model outputs. Rather than a larger model, a smaller model runs longer reasoning chains, generates multiple candidate answers and selects the best, or iteratively refines its output. OpenAI's o1 and similar "reasoning models" exemplify this approach, trading inference latency for substantial gains on complex tasks.
