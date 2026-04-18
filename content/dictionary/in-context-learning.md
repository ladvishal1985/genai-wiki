---
term: In-Context Learning
shortForm: ICL
category: core
tags: [few-shot, prompting, adaptation, llm]
relatedTerms: [few-shot-prompting, chain-of-thought, emergent-behavior, sft]
---
In-context learning (ICL) is the ability of large language models to perform new tasks by conditioning on examples provided in the prompt, without any gradient updates or fine-tuning. The model infers the task pattern from a few demonstrations ("shots") and generalizes to new inputs. ICL is an emergent behavior of large models and is the foundation for few-shot and zero-shot prompting. It differs from fine-tuning in that the learning is transient—the model reverts to its pretrained behavior on the next query.
