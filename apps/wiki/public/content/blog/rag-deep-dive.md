---
title: "RAG: Retrieval-Augmented Generation Deep Dive"
description: "A comprehensive guide to building production-grade RAG systems — chunking strategies, embedding models, vector stores, and reranking."
author: "GenAI Wiki"
date: "2024-03-20"
tags: ["rag", "embeddings", "vector-search", "production"]
difficulty: "advanced"
readTime: 18
---

## What is RAG?

**Retrieval-Augmented Generation (RAG)** is a pattern that grounds LLM responses in a retrieved set of documents. Instead of relying solely on parametric knowledge (what the model learned during training), RAG fetches relevant context at inference time.

```
Query → Retrieve Documents → Augment Prompt → Generate Answer
```

This solves several core LLM problems: hallucination, knowledge cutoffs, and lack of access to proprietary data.

## The RAG Pipeline

### 1. Document Ingestion

Before you can retrieve, you need to index your documents.

**Chunking** — splitting documents into retrievable pieces — is the most consequential decision in your pipeline.

**Fixed-size chunking:**
```python
def chunk_text(text: str, size: int = 512, overlap: int = 64) -> list[str]:
    tokens = tokenizer.encode(text)
    chunks = []
    for i in range(0, len(tokens), size - overlap):
        chunk = tokenizer.decode(tokens[i:i + size])
        chunks.append(chunk)
    return chunks
```

**Semantic chunking** splits on natural boundaries (sentences, paragraphs) and groups by semantic similarity. Generally produces better retrieval but is slower and more expensive.

### 2. Embedding

Convert each chunk into a dense vector using an embedding model:

```python
from openai import OpenAI

client = OpenAI()

def embed(text: str) -> list[float]:
    response = client.embeddings.create(
        model="text-embedding-3-small",
        input=text
    )
    return response.data[0].embedding
```

**Embedding model choices:**
- `text-embedding-3-small` — fast, cheap, good for most use cases (1536 dims)
- `text-embedding-3-large` — higher accuracy, 3x the cost (3072 dims)
- `nomic-embed-text` — open-source, runs locally
- `bge-m3` — best open-source multilingual model

### 3. Vector Storage

Store embeddings in a vector database that supports approximate nearest neighbor (ANN) search:

| Database | Hosting | Best For |
|----------|---------|----------|
| Pinecone | Managed | Production, scale |
| Weaviate | Self/Managed | Hybrid search |
| Qdrant | Self/Managed | Performance |
| pgvector | Self (Postgres) | Simplicity |
| Chroma | Local | Prototyping |

### 4. Retrieval

At query time, embed the query and find the nearest chunks:

```python
def retrieve(query: str, top_k: int = 5) -> list[str]:
    query_embedding = embed(query)
    results = vector_store.query(
        vector=query_embedding,
        top_k=top_k
    )
    return [r.metadata["text"] for r in results]
```

**Hybrid search** combines dense (embedding) and sparse (BM25/keyword) retrieval. In practice, hybrid almost always outperforms either alone.

### 5. Reranking

A cross-encoder reranker reads the query + each candidate together, producing a relevance score. It's slower but more accurate than embedding similarity alone:

```python
from sentence_transformers import CrossEncoder

reranker = CrossEncoder("cross-encoder/ms-marco-MiniLM-L-6-v2")

def rerank(query: str, passages: list[str], top_n: int = 3) -> list[str]:
    pairs = [(query, p) for p in passages]
    scores = reranker.predict(pairs)
    ranked = sorted(zip(passages, scores), key=lambda x: x[1], reverse=True)
    return [p for p, _ in ranked[:top_n]]
```

### 6. Generation

Combine retrieved context into the prompt:

```python
def generate(query: str, context: list[str]) -> str:
    context_str = "\n\n---\n\n".join(context)
    prompt = f"""Answer the question based on the provided context.
If the context doesn't contain enough information, say so.

Context:
{context_str}

Question: {query}"""
    
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[{"role": "user", "content": prompt}]
    )
    return response.choices[0].message.content
```

## Common Failure Modes

### Lost in the Middle

LLMs attend more strongly to the beginning and end of context. Relevant chunks buried in the middle of a long prompt may be ignored.

**Fix:** Place the most relevant chunk first. Use reranking to ensure quality over quantity.

### Semantic vs. Lexical Mismatch

A user asks "how do I cancel?" but your docs say "terminate subscription." Embedding similarity may miss this.

**Fix:** Use hybrid search. Consider query expansion — generating multiple phrasings of the query.

### Chunk Boundary Issues

A crucial sentence is split across two chunks, neither of which retrieves well alone.

**Fix:** Use overlapping chunks or sentence-boundary-aware splitting.

## Evaluating RAG

Use **RAGAS** (Retrieval-Augmented Generation Assessment) metrics:

- **Context Precision** — are retrieved chunks actually relevant?
- **Context Recall** — are all relevant chunks retrieved?
- **Faithfulness** — does the answer stay grounded in the context?
- **Answer Relevancy** — does the answer address the question?

Run these automatically with an LLM judge on a curated question set.
