---
term: Grouped Query Attention
shortForm: GQA
category: model
tags: [attention, efficiency, kv-cache, architecture]
relatedTerms: [multi-head-attention, kv-cache, flash-attention, transformer]
---
Grouped Query Attention (GQA) is an attention variant between Multi-Head Attention (MHA) and Multi-Query Attention (MQA). In GQA, query heads are divided into groups; within each group all query heads share a single key/value head. This dramatically reduces KV cache memory at inference time while preserving most of MHA's expressiveness. GQA is used in modern efficient LLMs including Llama 2/3, Mistral, and Gemma, enabling faster inference at lower memory cost.
