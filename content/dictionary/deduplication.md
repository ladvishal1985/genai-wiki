---
term: Deduplication
shortForm: ~
category: infra
tags: [etl, data-quality, indexing, preprocessing]
relatedTerms: [etl-for-rag, incremental-indexing, chunking]
---
Deduplication in RAG pipelines is the process of identifying and removing redundant chunks or documents before indexing. Near-duplicate content inflates the index, wastes storage and embedding cost, and can bias retrieval toward over-represented topics. Techniques include exact hash matching, MinHash/LSH for fuzzy deduplication, and embedding-based similarity clustering. Deduplication is especially important when crawling web data or aggregating from multiple sources with overlapping content.
