---
term: Multi-Head Attention
shortForm: MHA
category: model
tags: [transformer, attention, architecture, self-attention]
relatedTerms: [grouped-query-attention, kv-cache, flash-attention, transformer]
---
Multi-head attention (MHA) is the core attention mechanism in transformers where the query, key, and value projections are split into H parallel "heads," each computing attention over a different subspace of the representation. Outputs from all heads are concatenated and projected. Multiple heads allow the model to attend to different positional and semantic relationships simultaneously. MHA is the most expressive but also most compute- and memory-intensive attention variant.
