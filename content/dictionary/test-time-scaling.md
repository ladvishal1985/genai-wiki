---
term: Test-Time Scaling
shortForm: ~
category: model
tags: [reasoning, inference, scaling, compute, o1]
relatedTerms: [inference-time-compute-scaling, reasoning-tokens, self-consistency, chain-of-thought]
---
Test-time scaling is the practice of allocating more inference compute to harder problems, dynamically adjusting the amount of reasoning steps, candidate generations, or verification passes. Unlike training-time scaling (larger models), test-time scaling allows a fixed-size model to perform better on demanding queries by spending more tokens thinking. Systems like OpenAI o1, DeepSeek-R1, and similar reasoning models implement test-time scaling via extended chain-of-thought "reasoning tokens" before answering.
