---
term: Retrieval Without Reading
shortForm: ~
category: eval
tags: [rag, failure-mode, attention, lost-in-middle]
relatedTerms: [over-retrieval, lost-in-the-middle, hallucination-despite-retrieval, context-ordering]
---
Retrieval without reading describes the failure where context is retrieved and included in the prompt, but the LLM effectively ignores it—generating answers from parametric memory instead. This is related to the lost-in-the-middle problem and attention dilution in long contexts. It occurs when relevant information is buried among many irrelevant chunks, when the context is too long, or when the model's instruction following is weak. Shorter, higher-precision context typically mitigates this.
