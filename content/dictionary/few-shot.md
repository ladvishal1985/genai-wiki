---
term: Few-Shot Prompting
shortForm: few-shot
category: model
tags: [prompting, in-context-learning, examples]
relatedTerms: [zero-shot, chain-of-thought, prompt, system-prompt]
---
Few-shot prompting provides a small number of input-output examples within the prompt to demonstrate the desired task format and behaviour before presenting the actual input. The model learns the pattern from these demonstrations in-context without any weight updates, leveraging the in-context learning capability that emerges at scale. Typically 2–8 examples strike the best balance between demonstration quality and prompt length; too many examples consume context window space and can cause the model to overfit to superficial patterns. Few-shot prompting is particularly effective for classification, structured extraction, and tasks requiring a specific output schema.
