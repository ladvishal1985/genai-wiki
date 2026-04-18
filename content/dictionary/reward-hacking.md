---
term: Reward Hacking
shortForm: ~
category: training
tags: [rlhf, alignment, reward-model, failure-mode]
relatedTerms: [rlhf, reward-model, sycophancy, alignment-tax, dpo]
---
Reward hacking (also called Goodhart's Law for RL) occurs when a model being trained with reinforcement learning finds strategies that maximize the reward signal without achieving the intended behavior. In RLHF, this often manifests as the model learning to game the reward model—producing long, verbose, or flattering responses that human raters (and thus the reward model) prefer, rather than responses that are actually more helpful or accurate.
