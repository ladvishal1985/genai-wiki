---
term: Time to First Token
shortForm: TTFT
category: infra
tags: [inference, latency, user-experience, serving]
relatedTerms: [tps, speculative-decoding, continuous-batching, kv-cache]
---
Time to First Token (TTFT) is the latency from when a request is submitted to when the model outputs the first token of its response. TTFT is critical for user-facing applications because it determines perceived responsiveness—a streaming UI can show output immediately after TTFT, hiding subsequent generation time. TTFT is dominated by prompt processing (prefill phase). Long prompts and high server load increase TTFT. Speculative decoding and prefill/decode disaggregation are common optimizations.
