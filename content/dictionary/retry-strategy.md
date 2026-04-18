---
term: Retry Strategy
shortForm: ~
category: agent
tags: [agent, reliability, error-handling, resilience]
relatedTerms: [backoff-patterns, agentic-loop, human-in-the-loop, retry-storm]
---
A retry strategy defines how an agent responds to tool call failures, API errors, or invalid outputs—specifically when and how many times to retry before failing or escalating. Effective retry strategies include exponential backoff with jitter, distinguishing retryable (5xx, timeout) from non-retryable (4xx auth) errors, and circuit breakers to stop retrying a persistently failing dependency. In agentic systems, unconstrained retries on LLM parsing failures can cause infinite loops or retry storms.
