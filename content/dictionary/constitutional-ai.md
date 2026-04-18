---
term: Constitutional AI
shortForm: CAI
category: training
tags: [alignment, anthropic, rlhf, safety, self-critique]
relatedTerms: [rlhf, dpo, sft, reward-model, alignment-tax]
---
Constitutional AI (CAI) is Anthropic's alignment technique where a model is given a set of principles (a "constitution") and trained to critique and revise its own outputs for compliance with those principles, without requiring human-labeled harm examples for every case. The revised outputs are used to generate AI feedback for RLHF (RLAIF). CAI enables scalable alignment by reducing dependence on human annotation of harmful content while encoding explicit normative principles.
