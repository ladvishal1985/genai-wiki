---
term: Latency
shortForm: ~
category: infra
tags: [performance, inference, production]
relatedTerms: [throughput, streaming, tokens, batch-processing]
---
Latency in LLM systems refers to the time elapsed between sending a request and receiving the response, typically broken into Time to First Token (TTFT) — how long before generation begins — and Time Per Output Token (TPOT) for subsequent tokens. TTFT is dominated by prompt processing (the prefill phase) which scales with prompt length; TPOT is determined by the decode phase and hardware throughput. For interactive applications, TTFT under 500ms and TPOT under 30ms per token are common targets for acceptable UX. Streaming responses mitigate perceived latency by displaying tokens as they are generated rather than waiting for the full response.
