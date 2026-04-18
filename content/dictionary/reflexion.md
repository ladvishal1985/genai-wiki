---
term: Reflexion
shortForm: ~
category: agent
tags: [reasoning, self-reflection, agentic, feedback]
relatedTerms: [self-refinement, self-rag, agentic-loop, self-reflection]
---
Reflexion is a framework where an agent uses verbal self-reflection to learn from failed trials without gradient updates. After each attempt, the agent generates a reflective summary of what went wrong and stores it in an episodic memory buffer. Subsequent attempts condition on this reflection. Reflexion achieves performance improvements on coding, reasoning, and decision-making tasks by effectively doing "in-context learning from mistakes" across episodes.
