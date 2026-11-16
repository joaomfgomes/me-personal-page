# Site pessoal

Site estático em [Astro](https://astro.build), Abre com uma caixa de perguntas ao estilo da página inicial da OpenAI. Por baixo, projetos e notas em lista simples. Letra Figtree, a preto e branco.

## Correr no teu computador

```bash
npm install
npm run dev        # abre em http://localhost:4321 e fica a correr em segundo plano
npx astro dev stop # para o servidor
npm run build      # gera a pasta dist/ para publicar
```

## O que editar (por esta ordem)

1. **`src/site.config.ts`**: nome, frase do topo (`headline`), parágrafos de apresentação (`intro`), disponibilidade, email, links, texto do About e secção "Now".
2. **`src/content/projects/*.md`**: um ficheiro por projeto. O campo `result` é a frase que aparece na lista; na página do projeto, o número entre `**asteriscos**` fica a negrito. Tem de ser real.
3. **`src/content/notes/*.md`**: um ficheiro por nota. `favourite: true` põe a nota em "Start here". `draft: true` esconde-a.
4. **`src/pages/about.astro`**: o teu texto "About".
5. **`public/cv.pdf`**: o teu CV em PDF (os botões "Read my CV" apontam para ele).
6. **`public/portrait.jpg`**: a tua foto, quadrada. Depois escreve `'/portrait.jpg'` em `portrait`. Aparece na página About.
7. **`astro.config.mjs`**: troca `site` pelo teu domínio.

Os projetos e as notas que estão lá são exemplos. Apaga-os quando tiveres os teus.

## Funcionalidades

- **Caixa de perguntas** (`askTitle`, `askPlaceholders`, `askChips` em `site.config.ts`): sem configuração, responde a perguntas sobre ti, projetos, contacto, como trabalhas e o que estás a aprender, em inglês ou português, a partir do conteúdo do site. Outras perguntas mostram as páginas mais relevantes. Quando tiveres o teu RAG, põe o URL em `askEndpoint` (recebe `POST {question}` e devolve `{answer, sources:[{title,url}]}`) e as métricas em `askStats`.
- **Pesquisa ⌘K / Ctrl K** em todas as páginas, sem servidor.
- **Contacto** no fim da página inicial, dos projetos, das notas e do About: email com botão para copiar, LinkedIn, GitHub, CV e a promessa de resposta (`replyPromise`).
- **Modo escuro**, **RSS** em `/rss.xml` e **`/llms.txt`** gerados automaticamente.
- Contadores no rodapé (notas, projetos, palavras) calculados ao compilar.

## Publicar

Liga o repositório à Vercel ou à Cloudflare Pages: comando de build `npm run build`, pasta de saída `dist`. É grátis. Só pagas o domínio.
