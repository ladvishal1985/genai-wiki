---
term: Structured Output
shortForm: ~
category: core
tags: [json, schema, output-format, function-calling]
relatedTerms: [schema-validation, function-calling, tool-use, prompt-engineering]
---
Structured output is the practice of constraining an LLM's response to a defined schema—typically JSON matching a Pydantic model or TypeScript type—rather than free-form text. Modern LLMs support structured output via native JSON mode, function calling schemas, or guided decoding (logit masking). Structured outputs are essential for programmatic consumption of LLM responses in pipelines, enabling reliable downstream parsing without brittle regex or post-processing.
