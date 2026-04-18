---
term: Hallucination
shortForm: ~
category: core
tags: [reliability, safety, accuracy]
relatedTerms: [rag, groundedness, hallucination-detection, alignment]
---
Hallucination occurs when a language model generates factually incorrect, fabricated, or nonsensical content and presents it with apparent confidence, as if it were accurate. It arises because LLMs are trained to produce statistically plausible token sequences, not to verify facts — the model has no internal truth oracle. Common forms include inventing citations, fabricating statistics, misattributing quotes, and confidently describing events that never occurred. Mitigation strategies include grounding responses in retrieved sources (RAG), using lower temperatures, adding self-consistency checks, and deploying LLM-as-judge verification layers.
