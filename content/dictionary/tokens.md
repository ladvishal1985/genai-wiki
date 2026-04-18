---
term: Tokens
shortForm: ~
category: infra
tags: [tokenization, cost, context]
relatedTerms: [tokenization, context-window, context-length, latency, throughput]
---
Tokens are the fundamental unit of text processed by language models, produced by a tokenizer that converts raw text into numeric IDs from the model's vocabulary. In English, a token corresponds roughly to 0.75 words on average — "ChatGPT is great!" is approximately 6 tokens. Tokens are the unit of LLM pricing (input and output tokens billed separately), context window measurement, and rate limiting. Code and non-English languages are generally less token-efficient than English prose, meaning the same information requires more tokens and thus more cost and context window space.
