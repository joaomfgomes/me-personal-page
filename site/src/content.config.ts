import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    // O resultado numa frase. Põe o número entre **asteriscos** para o destacar. Só números reais.
    result: z.string().optional(),
    // Números-chave mostrados na página do projeto (máx. 3).
    metrics: z.array(z.string()).max(3).default([]),
    stack: z.array(z.string()).default([]),
    status: z.enum(['live', 'in progress', 'archived']).default('in progress'),
    repo: z.url().optional(),
    demo: z.url().optional(),
    order: z.number().default(99),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    favourite: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, notes };
