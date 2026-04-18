---
term: Batch Processing
shortForm: ~
category: infra
tags: [inference, throughput, async]
relatedTerms: [throughput, latency, tokens, streaming, rate-limiting]
---
Batch processing in LLM contexts refers to grouping multiple inference requests together and processing them simultaneously on GPU hardware to maximise utilisation and reduce per-request cost. Offline batching submits all requests at once and waits for results, suitable for asynchronous workloads like document processing or dataset annotation. Continuous batching (used by vLLM and TGI) dynamically slots new requests into in-progress batches as sequence slots free up, dramatically improving GPU utilisation compared to static batching. Most LLM API providers offer a dedicated batch API at reduced cost (typically 50% cheaper) with higher latency SLAs for bulk async workloads.
