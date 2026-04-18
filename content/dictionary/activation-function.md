---
term: Activation Function
shortForm: ~
category: model
tags: [neural-network, architecture, non-linearity, swiglu]
relatedTerms: [parameters, transformer, decoder-only]
---
An activation function introduces non-linearity into a neural network, allowing it to learn complex mappings. In LLM feed-forward layers, the choice of activation significantly impacts training dynamics and model capacity. ReLU was standard in early transformers; modern LLMs use gated variants like SwiGLU and GeGLU (used in PaLM, Llama, Gemma) that have been empirically shown to improve performance. The activation function affects FLOPs, memory bandwidth, and ultimately quality.
