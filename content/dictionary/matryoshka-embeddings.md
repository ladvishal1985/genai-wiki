---
term: Matryoshka Embeddings
shortForm: MRL
category: retrieval
tags: [embeddings, efficiency, truncation, matryoshka]
relatedTerms: [dense-embedding, dimensionality-reduction]
---
Matryoshka Representation Learning (MRL) is a training technique that produces embeddings whose quality degrades gracefully when truncated to lower dimensions. The model is trained so that the first N dimensions of a 1024-d vector are nearly as useful as the full vector. This allows operators to trade off storage and compute costs against retrieval quality at serving time by using shorter vectors without retraining.
