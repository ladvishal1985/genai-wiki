---
term: Memory Decay
shortForm: ~
category: agent
tags: [memory, agent, forgetting, staleness]
relatedTerms: [memory-write-policy, memory-retrieval-policy, long-term-memory, stale-embeddings]
---
Memory decay is the process of reducing the retrieval weight or deleting stale memories over time. Without decay, long-term memory grows indefinitely and becomes dominated by outdated information. Decay can be time-based (older memories score lower), usage-based (unaccessed memories fade), or explicitly triggered (user updates a fact, old version is expired). Decay mimics human forgetting and is essential for keeping agent memory relevant and manageable in long-running deployments.
