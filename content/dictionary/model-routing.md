---
term: Model Routing
shortForm: ~
category: infra
tags: [routing, inference, cost, efficiency, cascade]
relatedTerms: [cascade-inference, model-gateway, early-exit, llmops]
---
Model routing is the practice of directing incoming queries to the most appropriate model based on query characteristics—complexity, topic, latency requirements, or cost budget. A lightweight classifier or rule-based system scores the query and selects from a pool of models (e.g., small fast model for simple queries, large expensive model for complex ones). Model routing is a key component of cost-efficient LLM infrastructure and is implemented in model gateways and LLMOps platforms.
