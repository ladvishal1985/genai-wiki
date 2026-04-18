---
term: Program-Aided Language Models
shortForm: PAL
category: agent
tags: [reasoning, code, tool-use, math]
relatedTerms: [toolformer, chain-of-thought, structured-output, tool-use]
---
Program-Aided Language Models (PAL) is a reasoning approach where the LLM generates executable code (typically Python) as its reasoning chain instead of natural language steps. The code is then run by an interpreter, and the result is returned as the answer. PAL offloads precise computation to the interpreter, eliminating arithmetic and symbolic reasoning errors that plague purely natural language CoT. It is the conceptual predecessor to modern code-interpreting agents.
