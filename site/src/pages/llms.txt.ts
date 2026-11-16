import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '../site.config';

// Versão do site para modelos de linguagem (https://llmstxt.org).
export async function GET({ site: base }: APIContext) {
  const abs = (p: string) => new URL(p, base).toString();
  const notes = (await getCollection('notes')).filter((n) => !n.data.draft);
  const projects = (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order);
  const body = [
    `# ${site.name}`,
    '',
    `> ${site.tagline} Based in ${site.location}. Contact: ${site.email}.`,
    '',
    '## Projects',
    ...projects.map((p) => `- [${p.data.title}](${abs(`/projects/${p.id}`)}): ${p.data.summary}`),
    '',
    '## Notes',
    ...notes.map((n) => `- [${n.data.title}](${abs(`/notes/${n.id}`)}): ${n.data.summary}`),
    '',
    '## Optional',
    `- [About](${abs('/about')})`,
    `- [Now](${abs('/now')})`,
    `- [GitHub](${site.links.github})`,
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
