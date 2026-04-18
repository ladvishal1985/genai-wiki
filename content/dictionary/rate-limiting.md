---
term: Rate Limiting
shortForm: ~
category: infra
tags: [api, production, throttling]
relatedTerms: [throughput, tokens, batch-processing, latency]
---
Rate limiting constrains how many requests or tokens a client can consume within a time window, protecting infrastructure from overload and ensuring fair access across users. LLM APIs enforce limits in multiple dimensions simultaneously: requests per minute (RPM), tokens per minute (TPM), and sometimes tokens per day (TPD). When limits are hit, the API returns 429 errors and clients must implement exponential backoff with jitter to avoid thundering-herd retries. Production applications handle rate limits through request queuing, priority tiers, caching repeated queries, and distributing load across multiple API keys or providers. Higher-tier API plans provide significantly elevated limits and dedicated capacity.
