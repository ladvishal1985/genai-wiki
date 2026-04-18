---
term: Image Captioning
shortForm: ~
category: model
tags: [multimodal, vision, generation, vlm]
relatedTerms: [vlm, clip, multimodal-embedding, multimodal-rag]
---
Image captioning is the task of generating natural language descriptions of images. Early approaches used CNN encoders + LSTM decoders; modern systems use VLMs (BLIP-2, LLaVA, GPT-4V) that produce richer, more contextually accurate captions. In RAG pipelines, image captioning converts visual content into text that can be embedded and indexed for retrieval—bridging the modality gap for document corpora containing charts, diagrams, and photographs that standard text extraction cannot handle.
