---
term: Decoder-Only Architecture
shortForm: ~
category: model
tags: [architecture, transformer, autoregressive, gpt]
relatedTerms: [encoder-decoder, transformer, parameters, pretraining]
---
A decoder-only architecture is a transformer variant that uses only the decoder stack—with causal (masked) self-attention so each token attends only to previous tokens. It generates text autoregressively, predicting the next token given all preceding tokens. GPT, Llama, Claude, and most modern large language models use this architecture. Decoder-only models are simple to scale, efficient for open-ended generation, and amenable to in-context learning. They contrast with encoder-decoder models used in tasks like translation.
