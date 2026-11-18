# joaomiguelgomes.com

Site pessoal de João Miguel Gomes, AI engineer. Abre com uma caixa de perguntas ao estilo da página inicial da OpenAI ("What would you like to know about me?"), seguida dos projetos, das notas e do contacto.

- **Produção:** https://joaomiguelgomes.com (Cloudflare Workers, static assets)
- **Stack:** [Astro 7](https://astro.build) (site estático), TypeScript, Markdown, [Wrangler](https://developers.cloudflare.com/workers/wrangler/)
- **Letra:** Figtree (Google Fonts). Preto e branco, links azuis.

## Estrutura

```
me-personal-page/
├── README.md               este ficheiro
├── CLAUDE.md               estado atual e tarefas pendentes (contexto para a próxima sessão)
├── cv/                     CV modelo em Word e a página HTML de referência
└── site/                   o site
    ├── astro.config.mjs    domínio e integrações (sitemap)
    ├── wrangler.jsonc      deploy na Cloudflare e domínios
    ├── public/             ficheiros servidos tal como estão (cv.pdf, favicon, _headers)
    └── src/
        ├── site.config.ts  ← quase todo o texto do site está aqui
        ├── content/
        │   ├── projects/   um ficheiro .md por projeto
        │   └── notes/      um ficheiro .md por nota
        ├── components/     Ask (caixa de perguntas), Contact, ProjectCard
        ├── layouts/        Base.astro (cabeçalho, rodapé, pesquisa ⌘K, tema)
        ├── lib/            pesquisa local e formatação de datas
        ├── pages/          rotas: /, /projects, /notes, /about, /now, rss.xml, llms.txt, robots.txt, search.json
        └── styles/         global.css (todas as cores e tamanhos estão no :root)
```

## Comandos

Todos dentro de `site/`:

| Comando | O que faz |
|---|---|
| `npm install` | Instala as dependências (só da primeira vez) |
| `npm run dev` | Abre o site em http://localhost:4321. Fica a correr em segundo plano; para parar: `npx astro dev stop` |
| `npm run check` | Verifica erros de tipos e de código |
| `npm run build` | Gera o site final em `dist/` |
| `npm run deploy` | Verifica, gera e publica em joaomiguelgomes.com |

Para publicar é preciso ter sessão iniciada na Cloudflare: `npx wrangler login` (uma vez por computador).

## Como alterar o conteúdo

1. **Textos, nome, contactos:** `site/src/site.config.ts`. Cada campo tem um comentário a explicar para que serve. O texto fica entre aspas simples e cada linha acaba com vírgula; nos apóstrofos usa `’` em vez de `'`.
2. **Projetos:** um ficheiro por projeto em `site/src/content/projects/`. Os campos do topo (entre `---`) estão descritos em `site/src/content.config.ts`. O campo `result` é a frase que aparece na lista; põe o número entre `**asteriscos**` para ficar a negrito na página do projeto.
3. **Notas:** um ficheiro por nota em `site/src/content/notes/`. O nome do ficheiro é o endereço (`minha-nota.md` → `/notes/minha-nota`). `favourite: true` marca-a como "Readers’ pick"; `draft: true` esconde-a.
4. **CV:** substitui `site/public/cv.pdf`.
5. **Foto (opcional):** `site/public/portrait.jpg` e depois `portrait: '/portrait.jpg'` no `site.config.ts`.
6. **Indexação no Google:** `indexable` em `site.config.ts`. Está `false` enquanto houver conteúdo de exemplo; muda para `true` quando o conteúdo for todo teu.

Depois: `npm run deploy` e, para guardar no Git, `git add -A && git commit -m "..." && git push`.

## Caixa de perguntas

Sem configuração, responde a partir do conteúdo do site (em inglês e português) a perguntas sobre quem és, projetos, como trabalhas, o que estás a aprender, disponibilidade e contacto. Outras perguntas mostram as notas e projetos mais relevantes (pesquisa local em `/search.json`).

Para ligar um RAG próprio, põe o URL em `askEndpoint` no `site.config.ts`. O endpoint recebe `POST {"question": "..."}` e devolve `{"answer": "...", "sources": [{"title": "...", "url": "..."}]}`. Precisa de CORS para `https://joaomiguelgomes.com`.

## Versões

| Ramo | Versão |
|---|---|
| `main` | Estilo OpenAI (a que está publicada) |
| `versao-classica` | Estilo borischerny.com, letra do sistema. Não tem as melhorias de boas práticas nem os dados pessoais do `main`. |

Trocar: `git switch versao-classica` / `git switch main`.

## Boas práticas já aplicadas

- Site 100% estático, sem JavaScript obrigatório para ler o conteúdo; scripts só na pesquisa, caixa de perguntas, tema e copiar email.
- Verificação de tipos (`astro check`) antes de cada deploy.
- SEO: URL canónica, Open Graph, sitemap, RSS, `llms.txt`, `robots.txt` controlado por `indexable`.
- Segurança: cabeçalhos `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy` (`site/public/_headers`). Todo o texto inserido por JavaScript é escapado.
- Cache longa e imutável para os ficheiros com hash em `/_astro/`.
- Acessibilidade: foco visível, rótulos nos campos, `aria-live` nas respostas, movimento reduzido respeitado, modo escuro.
