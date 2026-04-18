---
term: Sparse Retrieval
shortForm: ~
category: retrieval
tags: [search, lexical, bm25]
relatedTerms: [bm25, dense-retrieval, hybrid-search, semantic-search]
---
Sparse retrieval refers to search methods that represent documents and queries as high-dimensional sparse vectors — typically over a vocabulary of tens of thousands of terms — where most entries are zero. Classical algorithms like TF-IDF and BM25 are the dominant examples, matching documents based on the presence and frequency of shared terms. Learned sparse methods like SPLADE extend this by using neural models to predict importance weights for expanded vocabulary terms, improving recall while retaining the interpretability and inverted-index efficiency of sparse approaches. Sparse retrieval is especially reliable for technical content with precise terminology where lexical matching is essential.
