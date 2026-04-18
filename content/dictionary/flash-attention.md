---
term: FlashAttention
shortForm: ~
category: model
tags: [attention, efficiency, gpu, memory, io-aware]
relatedTerms: [multi-head-attention, kv-cache, grouped-query-attention, transformer]
---
FlashAttention is an IO-aware exact attention algorithm that computes standard softmax attention while tiling the computation to avoid materializing the full N×N attention matrix in GPU HBM memory. By fusing operations and keeping intermediate results in fast SRAM, it achieves 2-4x speedups and sub-quadratic memory usage relative to standard attention. FlashAttention enables training and inference with much longer sequences and is now a standard component in all major LLM frameworks.
