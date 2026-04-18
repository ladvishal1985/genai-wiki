---
term: Calibration
shortForm: ~
category: eval
tags: [uncertainty, reliability, confidence, evaluation]
relatedTerms: [hallucination, confabulation, perplexity, faithfulness]
---
Calibration measures whether a model's expressed confidence aligns with its actual accuracy. A well-calibrated model that claims 80% confidence is correct 80% of the time. LLMs are often poorly calibrated—they may express high confidence in wrong answers (overconfidence) or excessive hedging on correct answers (underconfidence). RLHF can shift calibration by rewarding confident-sounding responses. Calibration is evaluated with metrics like Expected Calibration Error (ECE) and reliability diagrams.
