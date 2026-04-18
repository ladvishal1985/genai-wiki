---
term: Zero-Shot Prompting
shortForm: zero-shot
category: model
tags: [prompting, in-context-learning, generalization]
relatedTerms: [few-shot, chain-of-thought, prompt, llm]
---
Zero-shot prompting asks a model to perform a task purely from a natural-language description, without providing any demonstrations or examples. It relies entirely on knowledge and capabilities the model acquired during pre-training and instruction fine-tuning. Modern aligned LLMs perform surprisingly well zero-shot on many tasks, particularly when instructions are clear and well-specified. Zero-shot performance degrades for highly specialised formats, ambiguous tasks, or novel problems the model has not seen analogues of during training — situations where few-shot examples or chain-of-thought reasoning provide meaningful improvements.
