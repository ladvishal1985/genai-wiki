---
term: Proximal Policy Optimization
shortForm: PPO
category: training
tags: [rlhf, reinforcement-learning, training, alignment]
relatedTerms: [rlhf, dpo, reward-model, sft]
---
Proximal Policy Optimization (PPO) is the RL algorithm used in the RLHF pipeline to fine-tune an LLM against a reward model. PPO updates the policy (LLM) to maximize reward while clipping gradient updates to prevent catastrophic policy changes. In RLHF, PPO includes a KL divergence penalty against the SFT reference model to prevent the policy from drifting too far. PPO training is computationally expensive and numerically sensitive, motivating simpler alternatives like DPO.
