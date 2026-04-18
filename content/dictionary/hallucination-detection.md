---
term: Hallucination Detection
shortForm: ~
category: eval
tags: [evaluation, reliability, safety]
relatedTerms: [hallucination, groundedness, llm-as-judge, ragas, evaluation]
---
Hallucination detection is the task of automatically identifying when a model's output contains claims that are factually incorrect, unsupported by provided context, or internally inconsistent. Detection approaches range from NLI-based classifiers (checking if claims are entailed by source documents), to LLM-as-judge prompts asking "is this claim supported by the context?", to specialised models like Vectara's HHEM trained on hallucination-labelled data. In RAG systems, faithfulness checking — verifying each output sentence against the retrieved chunks — is the most tractable form of hallucination detection. Production systems often gate responses through a detection layer and trigger fallback behaviour (refusal, clarification, or retrieval retry) when hallucination probability is high.
