---
term: Hallucination Despite Retrieval
shortForm: ~
category: eval
tags: [hallucination, rag, failure-mode, faithfulness]
relatedTerms: [hallucination, faithfulness, context-conflict, retrieval-without-reading, groundedness]
---
Hallucination despite retrieval describes the failure mode where correct context was retrieved and passed to the LLM, but the model still generated an unfaithful response—ignoring the provided context or blending it with incorrect parametric knowledge. This can result from context conflicts (multiple chunks contradict each other), over-reliance on pretraining, prompt budget overflow (key context lost in a long window), or the model simply failing to follow the "only answer from context" instruction.
