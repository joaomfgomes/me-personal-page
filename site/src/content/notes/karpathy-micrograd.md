---
title: "What I understood only after rewriting micrograd"
summary: "Notes from rebuilding Karpathy's tiny autograd engine without looking at the video."
date: 2026-07-20
tags: ["fundamentals"]
favourite: false
---

I watched the micrograd video twice and thought I understood backpropagation. Then I tried to write it from memory and got stuck on the order in which gradients flow.

Writing the topological sort myself is what made it click: each node can only pass its gradient back once every node that depends on it has finished.
