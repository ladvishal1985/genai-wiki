---
term: Tree of Thoughts
shortForm: ToT
category: core
tags: [reasoning, prompting, search, planning]
relatedTerms: [chain-of-thought, self-consistency, zero-shot-cot, decomposed-prompting]
---
Tree of Thoughts (ToT) is a reasoning framework that extends chain-of-thought by generating multiple intermediate "thought" steps as branches of a tree, evaluating each branch's promise (via the model itself), and using search (BFS/DFS) to explore the most promising paths. ToT enables backtracking and deliberate search over reasoning trajectories, outperforming linear chain-of-thought on tasks requiring planning or exploration. The trade-off is significantly higher token cost.
