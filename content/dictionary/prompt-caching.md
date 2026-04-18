---
term: Prompt Caching
shortForm: ~
category: infra
tags: [caching, cost, latency, context-window, efficiency]
relatedTerms: [semantic-cache, kv-cache, token-economy, context-engineering]
---
Prompt caching is a provider-side optimization (supported by Anthropic, OpenAI) where the KV cache for a common prefix of the prompt (e.g., a long system prompt or shared context) is reused across multiple requests. When the same prefix is sent repeatedly, the provider returns a cache hit, skipping prefix processing and charging a lower cached-input token price. Prompt caching dramatically reduces cost and latency for applications with large, stable system prompts or shared retrieval context.
