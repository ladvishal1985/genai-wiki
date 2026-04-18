---
term: State Space Model (Mamba)
shortForm: SSM
category: model
tags: [architecture, ssm, mamba, recurrence, efficiency]
relatedTerms: [transformer, mixture-of-experts, decoder-only, kv-cache]
---
State Space Models (SSMs), exemplified by the Mamba architecture, are sequence models based on structured linear recurrences rather than attention. They process sequences in O(n) time and O(1) memory per step (recurrent inference), avoiding the quadratic scaling of attention. Mamba adds input-dependent selective state updates (selective SSM / S6) enabling competitive performance with transformers on language tasks. SSMs are a promising alternative for very long sequence lengths where attention KV cache becomes prohibitive.
