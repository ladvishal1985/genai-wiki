---
term: Step-Back Prompting
shortForm: ~
category: retrieval
tags: [query-expansion, prompting, reasoning, retrieval]
relatedTerms: [query-rewriting, multi-query-retrieval, hyde, chain-of-thought]
---
Step-back prompting instructs an LLM to first answer a more abstract, general version of the query ("what is the general principle behind this?") before tackling the specific question. The general answer provides context that improves the final response. In RAG settings it is used as a query expansion technique: retrieve for both the abstract and specific queries to cover both conceptual background and concrete details.
