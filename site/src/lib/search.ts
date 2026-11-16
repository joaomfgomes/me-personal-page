// Pesquisa local, sem servidor: descarrega /search.json uma vez e pontua por termos.
export type Doc = { kind: string; title: string; summary: string; url: string; text: string };
export type Hit = Doc & { score: number };

let cache: Promise<Doc[]> | null = null;
const load = () => (cache ??= fetch('/search.json').then((r) => r.json()));

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const tokens = (q: string) =>
  q.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').split(/[^a-z0-9@.]+/).filter((t) => t.length > 1);

export async function searchIndex(query: string, limit = 8): Promise<Hit[]> {
  const terms = tokens(query);
  if (!terms.length) return [];
  const docs = await load();
  return docs
    .map((d) => {
      const title = tokens(d.title).join(' ');
      const summary = tokens(d.summary).join(' ');
      const body = tokens(d.text).join(' ');
      let score = 0;
      for (const t of terms) {
        if (title.includes(t)) score += 6;
        if (summary.includes(t)) score += 3;
        const n = body.split(t).length - 1;
        score += Math.min(n, 5);
      }
      return { ...d, title: esc(d.title), summary: esc(d.summary), score };
    })
    .filter((d) => d.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}
