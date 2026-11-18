import type { APIContext } from 'astro';
import { site } from '../site.config';

// Enquanto `indexable` for false, os motores de busca não indexam o site.
export function GET({ site: base }: APIContext) {
  const body = site.indexable
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap-index.xml', base)}\n`
    : 'User-agent: *\nDisallow: /\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
