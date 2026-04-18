---
term: Self-Consistency
shortForm: ~
category: core
tags: [reasoning, prompting, ensemble, chain-of-thought]
relatedTerms: [chain-of-thought, zero-shot-cot, tree-of-thoughts, test-time-scaling]
---
Self-consistency is a decoding strategy for chain-of-thought prompting that samples multiple diverse reasoning paths for the same question (using temperature > 0), then selects the most frequent final answer via majority vote. Unlike greedy decoding, it leverages the intuition that correct reasoning paths are more likely to converge on the same answer than incorrect ones. Self-consistency significantly improves accuracy on arithmetic and commonsense reasoning tasks at the cost of 10-40x more tokens.
