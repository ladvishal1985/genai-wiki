---
term: Transformer
shortForm: ~
category: core
tags: [architecture, deep-learning, foundational]
relatedTerms: [attention-mechanism, embedding, llm, fine-tuning]
---
The Transformer is a neural network architecture introduced in the 2017 paper "Attention Is All You Need" that relies entirely on self-attention rather than recurrence or convolution. It processes all tokens in parallel, making training far more efficient on modern GPU hardware than earlier RNN-based models. The architecture consists of stacked encoder and/or decoder blocks, each containing multi-head self-attention and position-wise feed-forward layers with residual connections and layer normalisation. Nearly every modern large language model — GPT, Claude, Gemini, LLaMA — is built on variants of the Transformer decoder.
