---
term: Regression Testing
shortForm: ~
category: eval
tags: [evaluation, testing, ci-cd, quality, llmops]
relatedTerms: [golden-dataset, ab-testing, shadow-mode, hallucination-rate, tracing-observability]
---
Regression testing for LLMs is the practice of running a fixed evaluation suite after every model update, prompt change, or pipeline modification to detect quality degradations compared to a baseline. A golden dataset of representative queries with expected outputs is tested automatically in CI/CD. Regressions (drops in metric scores) block deployment. LLM regression testing is harder than traditional software testing because outputs are non-deterministic and quality is multidimensional.
