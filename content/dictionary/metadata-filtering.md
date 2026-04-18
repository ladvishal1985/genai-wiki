---
term: Metadata Filtering
shortForm: ~
category: retrieval
tags: [vector-search, filtering, pre-filter, post-filter]
relatedTerms: [vector-database, namespace-isolation, retrieval, rag]
---
Metadata filtering restricts ANN search to a subset of vectors that satisfy structured attribute conditions (e.g., `source == "legal"`, `date > 2024-01-01`). Filters can be applied pre-retrieval (reduce the index before ANN search) or post-retrieval (filter results afterward). Pre-filtering is more precise but narrows recall; post-filtering is simpler but may return too few results. Most production vector databases support hybrid attribute-plus-vector queries natively.
