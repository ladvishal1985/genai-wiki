---
term: Pairwise Ranking Evaluation
shortForm: ~
category: eval
tags: [evaluation, llm-as-judge, comparison, preference]
relatedTerms: [llm-as-judge, golden-dataset, ab-testing, hallucination-rate]
---
Pairwise ranking evaluation presents two model outputs (e.g., response A vs. response B) to a human or LLM judge, who picks the better one. This sidesteps the difficulty of assigning absolute scores by framing evaluation as a relative comparison. Elo rating systems can aggregate pairwise results into global rankings (e.g., Chatbot Arena). Pairwise evaluation is more consistent than direct scoring but requires O(n²) comparisons and can be biased by position (favoring the first response) and length.
