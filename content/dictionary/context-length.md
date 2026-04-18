---
term: Context Length
shortForm: ~
category: infra
tags: [tokens, architecture, limits]
relatedTerms: [context-window, tokens, latency, throughput, kv-cache]
---
Context length is the maximum number of tokens a model can process in a single inference call, encompassing both the input prompt and the generated output. It is a hard architectural limit set at training time by the positional encoding scheme and attention mask. Modern models range from 8K tokens (some fine-tuned variants) to 1M+ tokens (Gemini 1.5 Pro). Longer context lengths increase quadratic attention compute costs, raise KV-cache memory requirements, and can degrade quality on the "lost-in-the-middle" problem where relevant information buried in a long context is underweighted. Context length is one of the key axes on which LLM providers compete.
