---
term: Streaming
shortForm: ~
category: infra
tags: [inference, ux, real-time]
relatedTerms: [latency, tokens, throughput]
---
Streaming is a response delivery mode where tokens are sent to the client as they are generated rather than waiting for the complete response to be assembled. Implemented via Server-Sent Events (SSE) or chunked HTTP transfer encoding, streaming dramatically improves perceived responsiveness — users see text appearing in real time rather than a blank screen followed by a wall of text. It is the default mode for chat interfaces like ChatGPT and Claude.ai. Streaming complicates error handling and retries (partial responses are harder to recover from), and post-processing steps like structured output parsing must be deferred until the stream completes.
