---
title: "Prompt Engineering: A Practical Guide"
description: "Learn systematic techniques for writing effective prompts — from zero-shot to chain-of-thought and beyond."
author: "GenAI Wiki"
date: "2024-02-10"
tags: ["prompting", "techniques", "llm"]
difficulty: "intermediate"
readTime: 12
---

## What is Prompt Engineering?

**Prompt engineering** is the practice of crafting inputs to language models to reliably elicit desired outputs. As LLMs become more capable, the quality of your prompt can make the difference between a mediocre and exceptional result.

## Core Techniques

### Zero-Shot Prompting

Ask the model to perform a task with no examples:

```
Classify this review as positive or negative:
"The food was cold and the service was slow."
```

Works well for tasks the model has seen during training. Fails for novel or nuanced tasks.

### Few-Shot Prompting

Provide examples before the actual task:

```
Review: "Great product, fast shipping!" → Positive
Review: "Broke after one day." → Negative
Review: "Exactly as described." → ?
```

The model infers the pattern from examples. More examples generally improve accuracy up to a point (typically 4–8).

### Chain-of-Thought (CoT)

Instruct the model to reason step-by-step:

```
Q: If there are 3 cars with 4 wheels each and 2 bikes with 2 wheels 
   each, how many wheels total?

A: Let me think step by step.
   - 3 cars × 4 wheels = 12 wheels
   - 2 bikes × 2 wheels = 4 wheels
   - Total: 12 + 4 = 16 wheels
```

CoT dramatically improves performance on arithmetic, logic, and multi-step reasoning tasks. You can trigger it with "Let's think step by step."

### System Prompts

Modern APIs expose a **system prompt** — instructions that set the model's behavior before the user's message:

```python
messages = [
    {"role": "system", "content": "You are a concise technical writer. 
     Always use bullet points. Never exceed 200 words."},
    {"role": "user", "content": "Explain neural networks."}
]
```

System prompts are more persistent than user instructions and harder for the model to override.

## Advanced Techniques

### Self-Consistency

Generate multiple reasoning chains, then take a majority vote:

1. Run CoT 5–10 times with temperature > 0
2. Extract the final answer from each
3. Return the most common answer

This significantly boosts accuracy on math and reasoning benchmarks.

### ReAct (Reasoning + Acting)

Interleave reasoning and tool calls:

```
Thought: I need to find the current price of AAPL stock.
Action: search("AAPL stock price today")
Observation: AAPL is trading at $189.50
Thought: Now I can answer the question.
Answer: Apple's stock price is $189.50.
```

ReAct is the foundation of most modern AI agent frameworks.

### Structured Output

Force the model to output JSON or specific formats:

```
Extract the following fields as JSON:
{ "name": string, "date": ISO-8601, "amount": number }

Invoice: "John Smith paid $450.00 on March 5th, 2024"
```

Combine with JSON schema validation in production systems.

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Vague instructions | Be specific about format, length, tone |
| No examples | Add 2–4 representative examples |
| Overloading the prompt | Break complex tasks into steps |
| Ignoring edge cases | Tell the model what to do when uncertain |

## Testing Prompts

Always evaluate prompts on a diverse dataset, not just the cases that look good. Use **prompt regression testing** — save a set of input/output pairs and verify new prompt versions don't regress.
