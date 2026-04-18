---
term: Semantic Cache
shortForm: ~
category: infra
tags: [caching, embeddings, latency, cost]
relatedTerms: [vector-database, dense-embedding, rag, prompt-caching]
---
A semantic cache stores LLM responses keyed not by exact query strings but by their embedding vectors. When a new query arrives, its embedding is compared to cached entries; if a sufficiently similar cached query exists (above a cosine similarity threshold), the cached response is returned without calling the LLM. This dramatically reduces latency and cost for workloads with recurring similar queries, but requires tuning the similarity threshold to avoid returning stale or mismatched answers.
