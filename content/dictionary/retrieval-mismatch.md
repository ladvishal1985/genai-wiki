---
term: Retrieval Mismatch
shortForm: ~
category: eval
tags: [rag, failure-mode, retrieval, evaluation]
relatedTerms: [query-vocabulary-gap, chunk-boundary-issues, over-retrieval, under-retrieval, context-precision]
---
Retrieval mismatch occurs when the retrieved chunks are semantically plausible but do not actually contain the answer to the query. The embedding model found surface-level similarity without true relevance. Mismatch commonly arises when queries use different terminology than the corpus, when topics overlap partially, or when the embedding model is not domain-adapted. It manifests as high retrieval scores with poor faithfulness—retrieved context looks related but misleads the generator.
