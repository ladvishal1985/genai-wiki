---
term: Retry Storm
shortForm: ~
category: infra
tags: [reliability, retry, rate-limiting, failure-mode]
relatedTerms: [retry-strategy, backoff-patterns, model-gateway, llmops]
---
A retry storm occurs when many clients simultaneously encounter errors (e.g., a provider outage or rate limit) and all retry at the same time, overwhelming the recovering service and preventing it from coming back up. In LLM systems, retry storms happen when applications have aggressive retry logic without exponential backoff and jitter. Prevention requires jitter in backoff, client-side circuit breakers, and rate limit awareness (checking remaining quota before retrying). Model gateways can centralize backoff management to prevent storms.
