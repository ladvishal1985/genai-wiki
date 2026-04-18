---
term: Reward Model
shortForm: RM
category: training
tags: [rlhf, alignment, training, preference]
relatedTerms: [rlhf, ppo, dpo, reward-hacking, sft]
---
A reward model (RM) is a trained classifier that scores LLM outputs by their estimated quality or human preference. It is trained on human-labeled preference pairs (output A preferred over output B) to predict a scalar reward. In RLHF, the reward model serves as a proxy for human judgment, providing the reward signal that guides PPO training. Reward model quality directly bounds alignment quality; a miscalibrated RM enables reward hacking where the policy maximizes the score without genuine improvement.
