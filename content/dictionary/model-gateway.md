---
term: Model Gateway
shortForm: ~
category: infra
tags: [routing, api, cost, observability, llmops]
relatedTerms: [model-routing, llmops, token-economy, retry-storm, closed-api-models]
---
A model gateway is an intermediary layer between application code and LLM APIs that centralizes routing, rate limiting, cost tracking, authentication, caching, logging, and fallback logic. It abstracts away provider-specific API differences, enabling multi-provider routing and A/B testing. Examples include LiteLLM, Portkey, and custom API proxies. A model gateway is the operational control plane for LLM traffic in production systems—analogous to an API gateway for microservices.
