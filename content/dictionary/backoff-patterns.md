---
term: Backoff Patterns
shortForm: ~
category: infra
tags: [retry, resilience, rate-limiting, api]
relatedTerms: [retry-strategy, retry-storm, llmops, model-gateway]
---
Backoff patterns are strategies for spacing retry attempts after failures to avoid overwhelming a struggling service. Exponential backoff doubles the wait time after each failure (1s, 2s, 4s, 8s…); jitter adds randomness to prevent thundering herd when many clients retry simultaneously. Truncated exponential backoff caps the maximum wait. Backoff is especially important when consuming LLM provider APIs with rate limits or capacity constraints, where simultaneous retries can trigger cascading failures.
