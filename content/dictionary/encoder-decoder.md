---
term: Encoder-Decoder Architecture
shortForm: ~
category: model
tags: [architecture, transformer, seq2seq, t5]
relatedTerms: [decoder-only, transformer, pretraining, sft]
---
An encoder-decoder (sequence-to-sequence) architecture processes input with a bidirectional encoder (full self-attention) and generates output with an autoregressive decoder that cross-attends to encoder representations. T5, BART, and mT5 use this architecture. Encoder-decoders excel at conditioned generation tasks (translation, summarization, structured extraction) where the input is fully observed before generation begins. They are less commonly used than decoder-only models for general-purpose LLMs due to higher complexity.
