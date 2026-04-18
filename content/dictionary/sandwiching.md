---
term: Sandwiching
shortForm: ~
category: core
tags: [prompting, context-ordering, attention, lost-in-middle]
relatedTerms: [context-ordering, context-engineering, lost-in-the-middle, instruction-position-bias]
---
Sandwiching is a context arrangement technique that places the most important instructions or context at both the beginning and end of the prompt, leveraging LLMs' primacy and recency bias. For example, a critical system instruction is repeated before and after a long retrieved context block. This counteracts the lost-in-the-middle problem by ensuring the key instruction receives attention regardless of where the model's attention is strongest.
