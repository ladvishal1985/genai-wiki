---
term: Instruction Position Bias
shortForm: ~
category: core
tags: [prompting, attention, bias, context-ordering]
relatedTerms: [context-ordering, sandwiching, lost-in-the-middle, context-engineering]
---
Instruction position bias is the tendency of LLMs to follow instructions more reliably when those instructions appear at the very beginning or end of a prompt, compared to instructions buried in the middle. This is a manifestation of primacy and recency effects in transformer attention. It has practical implications for prompt design: critical behavioral instructions (e.g., "only answer from context", "respond in JSON") should be placed at the start or end of the system/user turn.
