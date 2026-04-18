---
term: vLLM PagedAttention
shortForm: ~
category: infra
tags: [inference, serving, kv-cache, memory, vllm]
relatedTerms: [kv-cache, continuous-batching, speculative-decoding, tps]
---
PagedAttention is a memory management technique for LLM serving (implemented in vLLM) that manages KV cache memory as virtual pages, similar to OS virtual memory paging. Rather than pre-allocating a contiguous memory block per sequence, KV cache is allocated in fixed-size non-contiguous blocks. This eliminates memory fragmentation and reservation waste, enabling much higher batch sizes and throughput. PagedAttention underpins the majority of modern high-throughput LLM serving systems.
