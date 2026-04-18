---
term: Vector Database
shortForm: ~
category: retrieval
tags: [infrastructure, search, embeddings]
relatedTerms: [embedding, semantic-search, rag, cosine-similarity, dense-retrieval]
---
A vector database is a data store optimised for storing, indexing, and querying high-dimensional embedding vectors using approximate nearest-neighbour (ANN) algorithms such as HNSW or IVF. Unlike relational databases that match exact values, vector databases find the most semantically similar items to a query vector based on distance metrics such as cosine similarity or dot product. They enable the retrieval step in RAG systems, powering semantic search over millions of documents at low latency. Popular options include Pinecone (managed), Weaviate, Qdrant (self-hosted), Chroma (local prototyping), and pgvector (Postgres extension).
