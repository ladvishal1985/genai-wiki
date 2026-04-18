---
term: Embedding
shortForm: ~
category: core
tags: [vectors, representations, semantic]
relatedTerms: [attention-mechanism, transformer, semantic-search, cosine-similarity]
---
An embedding is a dense, fixed-size vector representation of discrete data — such as a token, sentence, image, or document — in a continuous high-dimensional space. The key property is that semantically similar items are mapped to nearby points, so vector distance becomes a proxy for meaning. Embedding models are trained to maximise similarity between related inputs and push unrelated inputs apart, often using contrastive objectives. In LLM pipelines, embeddings serve as the input layer (token embeddings), enable semantic search and retrieval, and power recommendation and clustering systems.
