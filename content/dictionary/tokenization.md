---
term: Tokenization
shortForm: ~
category: core
tags: [preprocessing, vocabulary, text]
relatedTerms: [transformer, context-window, tokens, llm]
---
Tokenization is the process of converting raw text into a sequence of discrete units called tokens, which serve as the atomic inputs to a language model. Modern LLMs use subword tokenization schemes such as Byte Pair Encoding (BPE) or SentencePiece, which split text into word fragments rather than whole words or individual characters, balancing vocabulary size against sequence length. A single English word may be one token, several tokens if rare, or fused with adjacent punctuation depending on the tokenizer's vocabulary. The choice of tokenizer directly affects a model's context window capacity, multilingual performance, and its ability to handle code, numbers, and uncommon terminology.
