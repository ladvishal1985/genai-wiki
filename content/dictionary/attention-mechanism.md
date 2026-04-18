---
term: Attention Mechanism
shortForm: ~
category: core
tags: [transformer, architecture, foundational]
relatedTerms: [embedding, transformer, context-window]
---
The attention mechanism allows a model to dynamically weight the relevance of different input tokens when computing each output token, rather than treating all positions equally. It operates by computing query, key, and value matrices from the input and scoring how much each position should "attend" to every other position. Self-attention, introduced in the Transformer architecture, applies this within the same sequence so that each token can gather context from all other tokens simultaneously. Multi-head attention runs several attention operations in parallel across different learned subspaces, enabling the model to capture diverse types of relationships — syntactic, semantic, and positional — at the same time.
