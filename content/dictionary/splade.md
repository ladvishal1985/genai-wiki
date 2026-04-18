---
term: SPLADE
shortForm: SPLADE
category: retrieval
tags: [sparse-retrieval, learned-sparse, retrieval, mlm]
relatedTerms: [sparse-embedding, bm25, hybrid-search, dense-embedding]
---
SPLADE (Sparse Lexical and Expansion Model) is a learned sparse retrieval method that uses a masked language model to produce sparse, high-dimensional vectors with vocabulary-level activations. Unlike BM25, SPLADE learns to expand query and document representations with semantically related terms, improving recall. SPLADE vectors are compatible with traditional inverted-index infrastructure (like Elasticsearch), making them easy to deploy alongside dense retrieval for hybrid search.
