---
term: Mixture of Experts
shortForm: MoE
category: model
tags: [architecture, efficiency, scaling, sparse]
relatedTerms: [scaling-laws, parameters, decoder-only, ssm-mamba]
---
Mixture of Experts (MoE) is an architecture where the feed-forward layer of a transformer is replaced with multiple "expert" networks and a learned router that activates only a sparse subset (e.g., top-2 of 8) for each token. MoE allows massive total parameter counts while keeping per-token compute constant. Models like Mixtral and GPT-4 use MoE to achieve high capability at lower inference cost. Routing instability and expert load balancing are key engineering challenges.
