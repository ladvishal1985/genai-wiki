---
term: Answer Relevance
shortForm: ~
category: eval
tags: [evaluation, rag, ragas, relevance]
relatedTerms: [faithfulness, context-precision, context-recall, ragas, groundedness]
---
Answer relevance measures whether the generated answer actually addresses the question asked, independent of factual correctness. A response can be faithful (grounded in context) but still answer the wrong question. In RAGAS, answer relevance is estimated by generating questions from the answer and computing similarity back to the original question. Low answer relevance indicates the model deviated from the query—common when context contains tangentially related but ultimately off-topic passages.
