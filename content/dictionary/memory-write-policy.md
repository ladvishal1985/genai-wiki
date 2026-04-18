---
term: Memory Write Policy
shortForm: ~
category: agent
tags: [memory, agent, storage, policy]
relatedTerms: [memory-retrieval-policy, long-term-memory, memory-decay, episodic-memory]
---
A memory write policy defines what information gets written to long-term memory and when. Writing everything is expensive and creates retrieval noise; writing too little causes the agent to forget useful context. Common policies: write on task completion (summary of what happened), write on explicit importance signal (agent decides something is worth remembering), write on novelty (only store information not already in memory). Write policies require balancing storage cost against future retrieval value.
