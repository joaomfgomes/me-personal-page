---
title: "My LLM judge was lying to me"
summary: "How I checked an LLM-as-judge against my own labels before trusting its scores."
date: 2026-10-28
tags: ["evals"]
favourite: true
---

My first LLM judge gave 95% of answers a pass. That felt great until I read 60 of them myself and disagreed with a third.

What fixed it: a binary pass/fail instead of a 1–10 scale, three worked examples of borderline cases in the prompt, and measuring agreement with my labels every time I change the judge. It now agrees with me 88% of the time, and I know where it doesn't.
