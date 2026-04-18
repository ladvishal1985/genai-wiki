---
term: Multi-Query Retrieval
shortForm: ~
category: retrieval
tags: [query-expansion, rag, retrieval, diversity]
relatedTerms: [query-rewriting, hyde, step-back-prompting, advanced-rag]
---
Multi-query retrieval uses an LLM to generate multiple paraphrases or sub-queries from the original query, executes retrieval for each, then deduplicates and merges the result sets. This addresses the sensitivity of retrieval to exact query phrasing and increases recall by exploring multiple query perspectives. The additional retrieval calls increase latency and cost, but the diversity of results often meaningfully improves answer quality.
