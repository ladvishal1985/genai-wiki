---
term: Toolformer
shortForm: ~
category: agent
tags: [tool-use, self-supervised, api-calls, reasoning]
relatedTerms: [pal, tool-use, function-calling, sft]
---
Toolformer is a model trained via self-supervised learning to decide when and how to call external APIs (calculator, Wikipedia, search, translator, calendar) and incorporate the results into its generation. Rather than being explicitly taught tool use, Toolformer learns by generating candidate API calls, executing them, and retaining calls that reduce the language modeling loss on surrounding tokens. It is a foundational demonstration that LLMs can learn tool use without heavy human annotation.
