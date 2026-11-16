---
title: "LexPT: question answering over Portuguese law"
summary: "A RAG system over 12,000 documents from Diário da República, evaluated with 150 real questions and used weekly by law students."
result: "Recall@5 went from **0.61 to 0.84** on 150 real questions, at €0.004 per answer."
metrics: ["recall@5 0.61 → 0.84", "p95 2.8 s", "€0.004 / query"]
stack: ["Python", "FastAPI", "PostgreSQL + pgvector", "BM25", "cross-encoder reranker", "Langfuse", "Fly.io"]
status: "live"
repo: "https://github.com/nomeapelido/lexpt"
order: 1
---

## The problem

Law students spend hours looking for the right article in decree-laws that amend other decree-laws. Keyword search fails because the same idea is written in five different ways, and generic chatbots invent article numbers.

## What I built

- **Ingestion:** 12,000 documents, split by article and clause instead of fixed-size chunks, with the date and the law it amends as metadata.
- **Retrieval:** BM25 and vector search combined, then a cross-encoder reranker over the top 30.
- **Generation:** the model must cite the article it uses, and says "I don't know" when the retrieved text doesn't answer the question.

## How I measured it

With a law student, I wrote **150 questions** with the article that answers each one.

| Version | recall@5 | Faithfulness |
|---|---|---|
| Vectors only, 512-token chunks | 0.61 | 0.78 |
| Clause-aware chunks | 0.70 | 0.84 |
| + BM25 hybrid | 0.79 | 0.88 |
| + reranker | **0.84** | **0.91** |

Faithfulness is scored by an LLM judge. Before trusting it, I checked it against 60 answers I labelled by hand: it agreed with me 88% of the time.

## What broke

- Article numbers like "artigo 12.º-A" were split by the tokenizer and vector search ignored them. BM25 fixed most of it.
- The judge was too generous with answers that cited the right law but the wrong article. I added that case to its instructions and to the test set.

## What I'd do next

Track amendments over time, so the system answers with the version of the law in force on a given date.
