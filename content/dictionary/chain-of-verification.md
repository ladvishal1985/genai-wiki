---
term: Chain of Verification
shortForm: CoVe
category: core
tags: [reasoning, verification, hallucination, prompting]
relatedTerms: [chain-of-thought, self-consistency, self-refinement, faithfulness]
---
Chain of Verification (CoVe) is a prompting strategy to reduce hallucination by having the model generate an initial response, then plan and answer a series of independent verification questions about that response, and finally revise based on the verification answers. Each verification question checks a specific factual claim. CoVe reduces hallucination by forcing the model to explicitly audit its own claims, catching inconsistencies that greedy generation would miss.
