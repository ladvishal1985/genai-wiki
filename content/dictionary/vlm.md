---
term: Vision Language Model
shortForm: VLM
category: model
tags: [multimodal, vision, image-understanding, llm]
relatedTerms: [clip, multimodal-embedding, multimodal-rag, image-captioning, layout-aware-document-understanding]
---
A Vision Language Model (VLM) is an LLM extended with the ability to process and reason about images alongside text. A visual encoder (often CLIP or a similar model) projects image patches into the LLM's token space; the LLM then attends to both visual and textual tokens jointly. VLMs (GPT-4V, Claude, Gemini, LLaVA) enable image captioning, visual QA, chart understanding, and document analysis. They are central to multimodal RAG pipelines where document images must be processed directly.
