---
term: Episodic Replay
shortForm: ~
category: agent
tags: [memory, agent, reinforcement-learning, experience]
relatedTerms: [episodic-memory, reflexion, continual-learning, long-term-memory]
---
Episodic replay is the technique of replaying past experiences stored in episodic memory to improve future performance. Borrowed from deep RL (experience replay buffers), it is applied in LLM agents to prevent catastrophic forgetting (by mixing past and current experiences during fine-tuning) or to provide historical context (loading relevant past episodes into the prompt). In Reflexion-style agents, verbal reflections on past failures are replayed at the start of new task attempts.
