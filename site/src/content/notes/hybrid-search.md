---
title: "Hybrid search raised my recall by 23 points"
summary: "Why vector search alone missed article numbers in Portuguese law, and how adding BM25 fixed it."
date: 2026-11-12
tags: ["rag", "retrieval"]
favourite: true
---

Vector search is good at meaning and bad at exact strings. In legal text, the exact string is often the whole question: "artigo 12.º-A" or "DL 74/2017".

I compared three setups on the same 150 questions. Vectors only scored a recall@5 of 0.61. Adding BM25 and merging both rankings took it to 0.79, and a reranker on top reached 0.84.

The lesson: before tuning prompts, look at what the retriever actually returns for the questions you get wrong.
