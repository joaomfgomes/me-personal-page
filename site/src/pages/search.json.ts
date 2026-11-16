import { getCollection } from 'astro:content';

export async function GET() {
  const notes = (await getCollection('notes')).filter((n) => !n.data.draft);
  const projects = await getCollection('projects');
  const docs = [
    ...projects.map((p) => ({ kind: 'project', title: p.data.title, summary: p.data.summary, url: `/projects/${p.id}`, text: p.body ?? '' })),
    ...notes.map((n) => ({ kind: 'note', title: n.data.title, summary: n.data.summary, url: `/notes/${n.id}`, text: n.body ?? '' })),
  ];
  return new Response(JSON.stringify(docs), { headers: { 'Content-Type': 'application/json' } });
}
