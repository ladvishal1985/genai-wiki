---
term: Context Conflict
shortForm: ~
category: eval
tags: [rag, failure-mode, contradiction, faithfulness]
relatedTerms: [hallucination-despite-retrieval, stale-embeddings, faithfulness, retrieval-mismatch]
---
Context conflict occurs when multiple retrieved chunks contain contradictory information—e.g., two documents disagree on a fact, or an older document contradicts a newer one. LLMs typically cannot reliably resolve such conflicts; they may average the contradictions, favor the first chunk (primacy bias), or produce a nonsensical synthesis. Mitigations include source freshness sorting, deduplication, temporal metadata filtering, and explicit conflict-resolution prompting.
