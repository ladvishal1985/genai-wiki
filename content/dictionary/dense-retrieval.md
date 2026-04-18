---
term: Dense Retrieval
shortForm: ~
category: retrieval
tags: [search, embeddings, neural]
relatedTerms: [sparse-retrieval, hybrid-search, embedding, vector-database, semantic-search]
---
Dense retrieval uses neural embedding models to represent both queries and documents as dense vectors and retrieves documents via approximate nearest-neighbour search in that vector space. It enables semantic matching — finding relevant documents even without keyword overlap — and is the backbone of modern RAG pipelines. Bi-encoder architectures (like DPR or Sentence-BERT) encode query and document independently, enabling pre-computation and caching of document embeddings. Dense retrieval can struggle with rare terms, specific identifiers, and out-of-distribution queries where sparse retrieval methods like BM25 remain superior.
