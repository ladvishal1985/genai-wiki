---
term: Context Recall
shortForm: ~
category: eval
tags: [evaluation, rag, ragas, retrieval-quality]
relatedTerms: [context-precision, faithfulness, answer-relevance, ragas]
---
Context recall measures how much of the information needed to answer the question was present in the retrieved context. High recall means the retrieval found all relevant information; low recall indicates key facts were missing from the retrieved chunks, forcing the model to confabulate or produce incomplete answers. In RAGAS, it is estimated by checking what fraction of the ground truth answer's claims are attributable to the retrieved context.
