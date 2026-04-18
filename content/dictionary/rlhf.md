---
term: Reinforcement Learning from Human Feedback
shortForm: RLHF
category: training
tags: [alignment, training, reward-model, ppo, human-feedback]
relatedTerms: [sft, dpo, ppo, reward-model, constitutional-ai, reward-hacking]
---
Reinforcement Learning from Human Feedback (RLHF) is the alignment technique that trains an LLM to produce outputs preferred by humans. Human annotators rank model outputs; a reward model is trained on these rankings; then the LLM policy is optimized against the reward model using RL (typically PPO). RLHF is the primary technique behind ChatGPT, Claude, and most aligned commercial LLMs. It is expensive (requires human annotation) and susceptible to reward hacking.
