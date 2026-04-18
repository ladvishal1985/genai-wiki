---
term: HumanEval
shortForm: ~
category: eval
tags: [benchmark, evaluation, code, python]
relatedTerms: [mmlu, exact-match, golden-dataset, regression-testing]
---
HumanEval is a code generation benchmark from OpenAI consisting of 164 hand-crafted Python programming problems with unit tests. Models are evaluated by the fraction of problems where generated code passes all unit tests (pass@k metric). HumanEval measures functional correctness rather than text similarity, making it a more meaningful code benchmark than BLEU-based approaches. It is widely used to compare LLMs' coding ability, though it covers relatively simple algorithmic problems.
