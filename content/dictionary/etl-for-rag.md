---
term: ETL for RAG
shortForm: ~
category: infra
tags: [etl, ingestion, pipeline, rag, preprocessing]
relatedTerms: [document-parsing, chunking, embedding, reindexing-strategy, incremental-indexing]
---
ETL (Extract, Transform, Load) for RAG refers to the data pipeline that ingests raw source documents, transforms them into clean chunks with metadata, embeds them, and loads them into a vector store. Each stage—extraction (parsing), transformation (chunking, metadata enrichment, deduplication), and loading (embedding + indexing)—has its own quality, cost, and latency considerations. A robust ETL pipeline is foundational to production RAG system reliability.
